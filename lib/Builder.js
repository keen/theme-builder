import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  SketchPicker
} from 'react-color';
import Lowlight from 'react-lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';
import Select from 'react-select';
import _JSXStyle from 'styled-jsx/style';
import Chart from 'keen-react-charts';
import {
  results,
  getStylesheet,
  getScript,
  chartColorPalette,
  initialPicker,
  availableChartTypes,
  availableChartPalette,
  defaultColor
} from './config';

import 'highlight.js/styles/github-gist.css';
import 'react-tabs/style/react-tabs.css';
import 'keen-dataviz/dist/keen-dataviz.css';
import './Builder.css';

Lowlight.registerLanguage('css', css);
Lowlight.registerLanguage('js', js);

const placeholder = document.createElement('li');
placeholder.className = 'placeholder';

// drag n drop containers
let dragFrom;
let dragTo;

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.colorList = React.createRef();
    this.mockupSection = React.createRef();

    this.state = {
      activePickerId: '',
      picker: props.picker,
      colors: chartColorPalette[props.chartPalette.value] || props.colors,
      chartType: props.isDashboardBuilderActive ? undefined : props.chartType,
      chartPalette: props.chartPalette,
    }
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  handlePickerChange(e, id) {
    this.setState( state => {
      const selectedPicker = {};
      selectedPicker[id] = e.hex;
      const picker = { ...state.picker, ...selectedPicker };

      return {
        picker
      };
    });
  }

  handleClickOnTrigger(id) {
    this.setState({
      activePickerId: id
    });
  }

  handleClickOnCover = () => {
    this.setState({ activePickerId: '' });
  }

  addItem() {
    this.setState((state) => {
      const colors = [...state.colors, defaultColor];

      return {
        colors
      }
    });
  }

  removeItem(index) {
    this.setState((state) => {
      const colors = [...state.colors];
      colors.splice(index,1);

      return {
        colors
      };
    });
  }

  onColorChange(color, index) {
    this.setState((state) => {
      const colors = [...state.colors];
      colors[index] = color;
      
      return {
        colors
      };
    });
  }

  handleChartTypeChange = (data) => {
    if (!data.value) return;
    this.setState({ chartType: data });
  }

  handleChartPaletteChange = (data) => {
    if(!data.value) return;
    this.setState({ chartPalette: data, colors: chartColorPalette[data.value] || [] });
  }


  handleDragStart(event, color) {
    const dragImage = document.createElement('div');
    dragImage.className = 'drag-image';
    dragImage.textContent = 'Drop here';
    document.body.appendChild(dragImage);

    placeholder.style.background = color;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.currentTarget);
    event.dataTransfer.setDragImage(dragImage, 20, 20);
    dragFrom = Number(event.currentTarget.id);
    
    this.colorList.current.classList.add('dragging');
  }

  handleDragOver = event => {
    event.preventDefault();
    const { currentTarget } = event;
    currentTarget.parentNode.insertBefore(placeholder, currentTarget);
    dragTo = Number(currentTarget.id);
  }

  handleDragEnd = () => {
    document.querySelector('.drag-image').remove();
    placeholder.remove();
    this.colorList.current.classList.remove('dragging');
    
    if (dragFrom < dragTo) dragTo--;

    this.setState((state) => {
      const { colors } = state;
      colors.splice(dragTo, 0, ...colors.splice(dragFrom, 1));

      return {
        colors,
      }
    })
  }

  handleClickToCopy(event, value) {
    event.preventDefault();

    const placeholder = document.createElement('textarea');
    placeholder.value = value;
    placeholder.classList = 'copy-to-clipboard';
    
    this.mockupSection.current.appendChild(placeholder);
    placeholder.select();
    document.execCommand('copy');
    
    this.mockupSection.current.removeChild(placeholder);
  }

  renderList(colors) {
    return (
      <div className="color-palette">
        <h4 className="builder__subheader">Build custom chart palette</h4>
        <ul className="color-palette__list" ref={this.colorList}>
          { colors.map((color, index) => 
          <li
            id = { index }
            key = { index }
            draggable = "true"
            onDragStart = { e => this.handleDragStart(e, color) }
            onDragOver = { this.handleDragOver }
            onDragEnd = { this.handleDragEnd }
          >
            <div className="color-palette__item" key={index}>
              <button className="color-palette__button btn-remove" type="button" onClick={ () => this.removeItem(index) }>Remove</button>
              <div className="color-palette__trigger" style={{ background: color}} onClick={() => this.handleClickOnTrigger(index)}></div>
              { this.state.activePickerId === index
                ? 
                <div className="color-picker__popover">
                  <div className="color-picker__cover" onClick={this.handleClickOnCover}></div>
                  <SketchPicker
                    className='color-picker__picker'
                    color={color}
                    onChangeComplete={ event => this.onColorChange(event.hex, index) }
                    disableAlpha={true} />
                </div>              
                : null }
            </div>
          </li>
          )}
          <li>
            <button className="color-palette__button btn-add btn" type="button" onClick={ () => this.addItem() }>Add</button>
          </li>
        </ul>
      </div>
    )
  }

  renderColorPicker(id, label) {
    const color = this.state.picker[id];
    const enablePicker = this.state.activePickerId === id;
    return (
      <div className="color-picker">
        <label className="color-picker__label" htmlFor={id}>{label}</label>
        <div className="color-picker__wrapper">
          <input type="text" className="color-picker__input" readOnly={true} value={color} />
          <div className="color-picker__trigger" style={{background : color}} onClick={() => this.handleClickOnTrigger(id)}></div>
          { enablePicker ?
            <div className="color-picker__popover">
              <div className="color-picker__cover" onClick={this.handleClickOnCover}></div>
              <SketchPicker
              className='color-picker__picker'
              color={color}
              onChangeComplete={ event => this.handlePickerChange(event, id) }
              disableAlpha={true} />
            </div> : null
          }
        </div>
      </div>
    );
  }

  renderChartType() {
    return (
      <>
      <h2 className="builder__header">Chart type</h2>
      <label>Available chart types</label>
      <Select
        defaultValue={this.props.chartType}
        options={availableChartTypes}
        onChange={this.handleChartTypeChange}
        className='chart-types'
      />
      </>
    )
  }

  renderConfigSection() {
    return (
      <section className="builder__config">
        {!this.props.isDashboardBuilderActive && this.renderChartType()}
        <h2 className="builder__header">Custom colors</h2>
        {this.renderColorPicker('title', 'Title')}
        {this.renderColorPicker('legend', 'Legend')}
        {this.renderColorPicker('label', 'Label')}
        {this.renderColorPicker('chart', 'Chart text')}
        {this.renderColorPicker('axis', 'Axis text')}
        {this.renderColorPicker('tooltip', 'Tooltip text')}
        {this.renderColorPicker('grid', 'Grid Line')}
        <h2 className="builder__header">Chart colors palette</h2>
        <label>Predefined color palette</label>
        <Select
          defaultValue={this.props.chartPalette}
          options={availableChartPalette}
          onChange={this.handleChartPaletteChange}
          className='predefined-palette'
        />
        {this.renderList(this.state.colors)}
      </section>
    ); 
  }

  renderDefaultCharts() {
    const { colors } = this.state;
    return (
      <div className="builder__default-charts">
        <Chart
          type='bar'
          title='Title'
          colors={colors}
          results={results['bar']}
        />
        <Chart
          type='area'
          title='Title'
          colors={colors}
          results={results['area']}
        />
        <Chart
          type='funnel-3d'
          title='Title'
          colors={colors}
          results={results['funnel-3d']}
        />
        <Chart
          type='donut'
          title='Title'
          colors={colors}
          results={results['donut']}
        />
      </div>
    );
  }

  renderChart() {
    return (
      <Chart
        type={this.state.chartType.value}
        title='Title'
        colors={this.state.colors}
        results={results[this.state.chartType.value]}
      />
    );
  }

  renderCopyButton(value) {
    return (
      <button className="builder__btn-copy btn" onClick={(e) => this.handleClickToCopy(e, value)}>Copy to Clipboard</button>
    )
  }

  renderMockUpSection() {
    const { title, legend, label, chart, axis, tooltip, grid } = this.state.picker;
    const jsString = getScript(this.state.colors);
    const cssString = getStylesheet(this.state.picker);
    const tabChart = this.state.chartType.value === 'default' ? this.renderDefaultCharts() : this.renderChart();
    return (
      <div className="builder__mockup" ref={ this.mockupSection }>
        <h2 className="builder__header">Preview</h2>
        <Tabs>
          <TabList>
            {!this.props.isDashboardBuilderActive && <Tab>Chart</Tab>}
            <Tab>CSS</Tab>
            <Tab>Javascript</Tab>
          </TabList>
          {!this.props.isDashboardBuilderActive &&
          <TabPanel>
            { tabChart }
          </TabPanel>
          }
          <TabPanel>
            { this.renderCopyButton(getStylesheet(this.state.picker)) }
            <Lowlight language="css" value={cssString} className="builder__editor" />
          </TabPanel>
          <TabPanel>
            { this.renderCopyButton(getScript(this.state.colors)) }
            <Lowlight language="js" value={jsString} className="builder__editor" />
          </TabPanel>
        </Tabs>
        {/* must be inline to handle dynamic styles */}
        <style jsx global>{`
        .keen-dataviz .keen-dataviz-title {
          color: ${title};
        }
        .keen-dataviz .keen-c3-legend .legend-item-text {
          color: ${legend};
        }
        .keen-dataviz .text-label {
          fill: ${label};
        }
        .keen-dataviz .text-main,
        .keen-dataviz .text-second,
        .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-max,
        .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-min,
        .keen-dataviz .c3-chart-arc .c3-gauge-value,
        .keen-dataviz .c3-chart-arc text {
          fill: ${chart};
        }
        .keen-dataviz .c3-axis text {
          fill: ${axis};
        }
        .keen-dataviz .c3-tooltip,
        .keen-dataviz .c3-tooltip-container th {
          color: ${tooltip};
        }
        .keen-dataviz .c3-grid line {
          stroke: ${grid};
        }
        `}</style>
      </div>
    );
  }

  render() {
    const mainClass = this.props.shouldRenderMockUp ? 'keen-theme-builder' : 'keen-theme-builder no-mockup';
    return (
    <div className = { mainClass }>
      {this.renderConfigSection()}
      {this.props.shouldRenderMockUp && this.renderMockUpSection()}
    </div>
    );
  }
}

Builder.propTypes = {
  picker: PropTypes.object,
  colors: PropTypes.array,
  chartType: PropTypes.objectOf(PropTypes.string),
  chartPalette: PropTypes.objectOf(PropTypes.string),
  shouldRenderMockUp: PropTypes.bool,
  isDashboardBuilderActive: PropTypes.bool,
  onChange: PropTypes.func,
};

Builder.defaultProps = {
  picker: initialPicker,
  colors: [],
  chartType: availableChartTypes[0],
  chartPalette: availableChartPalette[0],
  shouldRenderMockUp: true,
  isDashboardBuilderActive: false,
}