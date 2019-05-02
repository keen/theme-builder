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

export default class Builder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePickerId: '',
      picker: props.picker,
      colors: chartColorPalette[props.chartPalette] || props.colors,
      chartType: props.chartType,
      chartPalette: props.chartPalette,
      isDragging: false,
      dragFrom: '',
      dragTo: ''
    }
  }

  handlePickerChange(e, id) {
    this.setState( state => {
      const selectedPicker = {};
      selectedPicker[id] = e.hex;
      const picker = { ...this.state.picker, ...selectedPicker };

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

  handleChartTypeChange = (e) => {
    if(!e.target.value) return;

    this.setState({ chartType: e.target.value });
  }

  handleChartPaletteChange = (e) => {
    if(!e.target.value) return;

    const palette = e.target.value;
    this.setState({ chartPalette: palette, colors: chartColorPalette[palette] || [] });

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
    this.setState({
      isDragging: true,
      dragFrom: Number(event.currentTarget.id)
    });
  }

  handleDragOver = event => {
    event.preventDefault();
    const { currentTarget } = event;
    currentTarget.parentNode.insertBefore(placeholder, currentTarget);

    this.setState({ dragTo: Number(currentTarget.id) });
  }

  handleDragEnd = () => {
    document.querySelector('.drag-image').remove();
    placeholder.remove();
    
    let { colors, dragTo:to } = this.state;
    const from = this.state.dragFrom;
    
    if (from < to) to--;

    colors.splice(to, 0, ...colors.splice(from, 1));
    this.setState({ 
      colors,
      isDragging: false
    });
  }

  renderList(colors) {
    const ulClassName = this.state.isDragging ? 'color-palette__list dragging' : 'color-palette__list';
    return (
      <div className="color-palette">
        <h4 className="builder__subheader">Build custom chart palette</h4>
        <ul className={ulClassName}>
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
            <button className="color-palette__button btn-add" type="button" onClick={ () => this.addItem() }>Add</button>
          </li>
        </ul>
      </div>
    )
  }

  // renderColorPalette() {
  //   return (
  //     <div className="color-palette">
  //       <h4 className="builder__subheader">Build custom chart palette</h4>
  //       <div className="color-palette__wrapper">
  //       { this.state.colors.map((color, index) => 
  //         <div className="color-palette-item" key={index}>
  //           <button className="color-palette-button" type="button" onClick={ () => this.removeItem(index) }>Remove</button>
  //           <div className="color-palette__trigger" style={{ background: color}} onClick={() => this.handleClickOnTrigger(index)}></div>
  //           { this.state.activePickerId === index
  //             ? 
  //             <div className="color-picker__popover">
  //               <div className="color-picker__cover" onClick={this.handleClickOnCover}></div>
  //               <SketchPicker
  //                 className='color-picker__picker'
  //                 color={color}
  //                 onChangeComplete={ event => this.onColorChange(event.hex, index) }
  //                 disableAlpha={true} />
  //             </div>              
  //             : null }
  //         </div>
  //         )
  //       }
  //       <button type="button" onClick={ () => this.addItem() }>Add</button>
  //       </div>
  //     </div>
  //   );
  // }

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

  renderSelect(options, value, onChangeHandler = () => {}, customClass = '') {
    const selectClass = customClass ? `builder__select ${customClass}` : 'builder__select' 
    return (
      <select className={selectClass} onChange={onChangeHandler} value={value}>
        { Object.keys(options).map( key => <option value={key} key={key}>{options[key]}</option> )}
      </select>
    )
  }

  renderConfigSection() {
    return (
      <section className="builder__config">
        <h2 className="builder__header">Chart type</h2>
        <label>Available chart types</label>
        {this.renderSelect(availableChartTypes, this.state.chartType, this.handleChartTypeChange, 'chart-types')}
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
        {this.renderSelect(availableChartPalette, this.state.chartPalette, this.handleChartPaletteChange, 'color-palette')}
        {this.renderList(this.state.colors)}
      </section>
    ); 
  }

  renderMockUpSection() {
    const { title, legend, label, chart, axis, tooltip, grid } = this.state.picker;
    const jsString = getScript(this.state.colors);
    const cssString = getStylesheet(this.state.picker);
    return (
      <div className="builder__mockup">
        <h2 className="builder__header">Mock-up</h2>
        <Tabs>
          <TabList>
            <Tab>CSS</Tab>
            <Tab>Javascript</Tab>
            <Tab>Chart</Tab>
          </TabList>
          <TabPanel>
            <Lowlight language="css" value={cssString} className="builder__editor" />
          </TabPanel>
          <TabPanel>
            <Lowlight language="js" value={jsString} className="builder__editor" />
          </TabPanel>
          <TabPanel>
            <Chart
              type={this.state.chartType}
              title='Title'
              colors={this.state.colors}
              results={results[this.state.chartType]}
            />
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
    return (
    <div className="keen-theme-builder">
      {this.renderConfigSection()}
      {this.renderMockUpSection()}
    </div>
    );
  }
}

Builder.propTypes = {
  picker: PropTypes.object,
  colors: PropTypes.array,
  chartType: PropTypes.string,
  chartPalette: PropTypes.string
};

Builder.defaultProps = {
  picker: initialPicker,
  colors: [],
  chartType: Object.keys(availableChartTypes)[0],
  chartPalette: Object.keys(availableChartPalette)[0]
}