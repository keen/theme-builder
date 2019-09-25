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
import WebFont from 'webfontloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faAlignLeft,
  faAlignCenter,
  faAlignRight
} from '@fortawesome/free-solid-svg-icons'
import Chart from 'keen-react-charts';
import { List } from './PaletteList';
import { ButtonGroup } from './ButtonGroup';
import {
  GOOGLE_FONT_API_KEY,
  GOOGLE_FONTS_URL,
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
    this.colorList = React.createRef();
    this.mockupSection = React.createRef();

    const palette = (props.chartPalette && props.chartPalette.value)  ? chartColorPalette[props.chartPalette.value] : '';
    const paletteColors = palette ? palette.colors : [];
    const colors = props.colors.length ? props.colors : paletteColors;
    
    this.state = {
      activePickerId: '',
      picker: props.picker,
      colors,
      chartType: props.isDashboardBuilderActive ? undefined : props.chartType,
      chartPalette: props.chartPalette,
      fonts: [],
      font: {
        family: '',
        bold: false,
        italic: false,
        textAlign: 'left'
      },
    }
  }

  componentDidMount() {
    fetch(`${GOOGLE_FONTS_URL}/?key=${GOOGLE_FONT_API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({ fonts: json.items }))
      .catch(error => console.error(error));
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
    const colors = data.value ? chartColorPalette[data.value].colors : [];
    this.setState({ chartPalette: data, colors });
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

  handleColorsChange = (colors) => {
    this.setState({ colors });
  }

  handleFontChange = (data) => {
    this.setState(state => {
      return {
        ...state,
        font: {
          ...state.font,
          family: data.value,
        }
      }
    })
    if (!data.value || !this.state.fonts.length) return;

    WebFont.load({
      google: {
        families: [data.value]
      }
    });
  }

  renderColorPicker(id, label) {
    const color = this.state.picker[id] || defaultColor;
    const enablePicker = this.state.activePickerId === id;
    return (
      <div className="color-picker">
        <label className="color-picker__label" htmlFor={id}>{label}</label>
        <div className="color-picker__wrapper" onClick={() => this.handleClickOnTrigger(id)}>
          <div className="color-picker__trigger" style={{background : color}}></div>
          <input type="text" className="color-picker__input" readOnly={true} value={color} />
        </div>
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

  renderFontsPicker() {
    const fonts = [
      {
        label: 'Default',
        value: ''
      }
    ];
    if (this.state.fonts && this.state.fonts.length) {
      this.state.fonts.forEach(item => {
        const obj = {
          label: item.family,
          value: item.family
        };

        fonts.push(obj);
      });
    }
    return (
      <Select
        defaultValue={fonts[0]}
        options={fonts}
        onChange={this.handleFontChange}
        className='chart-fonts'
      />
    )
  }

  handleFontStyleChange = (event) => {
    const style = event.target.value;
    this.setState(state => {
      return {
        ...state,
        font: {
          ...state.font,
          [style]: !state.font[style]
        }
      }
    });
  }

  handleTextAlignmentChange = event => {
    const textAlign = event.target.value;
    this.setState(state => {
      return {
        ...state,
        font: {
          ...state.font,
          textAlign,
        }
      }
    });
  }

  renderConfigSection() {
    const textAlignItems = [
      {
        label: <FontAwesomeIcon icon={faAlignLeft} />,
        value: 'left'
      },
      {
        label: <FontAwesomeIcon icon={faAlignCenter} />,
        value: 'center'
      },
      {
        label: <FontAwesomeIcon icon={faAlignRight} />,
        value: 'right'
      }
    ];
    const fontStyleItems = [
      {
        label: <FontAwesomeIcon icon={faBold} />,
        value: 'bold'
      },
      {
        label: <FontAwesomeIcon icon={faItalic} />,
        value: 'italic'
      }
    ];
    const { bold, italic } = this.state.font;
    const fontStyleActiveItems = {
      bold,
      italic,
    }
    return (
      <section className="builder__config">
        {!this.props.isDashboardBuilderActive && this.renderChartType()}
        <h2 className="builder__header">Font</h2>
        {this.renderFontsPicker()}
        <ButtonGroup
          items={fontStyleItems}
          singleChoice={false}
          groupName="fontStyle"
          activeItem={fontStyleActiveItems}
          onChange={this.handleFontStyleChange}
        />
        <ButtonGroup
          items={textAlignItems}
          singleChoice
          groupName="textAlignment" 
          activeItem={this.state.font.textAlign}
          onChange={this.handleTextAlignmentChange}
        />
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
          defaultValue={this.props.chartPalette || availableChartPalette[0]}
          options={availableChartPalette}
          onChange={this.handleChartPaletteChange}
          className='predefined-palette'
        />
        <List colors={this.state.colors} onChange={this.handleColorsChange} />
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
    const { chartType, colors } = this.state;
    return (
      <Chart
        type={chartType.value}
        title='Title'
        colors={colors}
        results={results[chartType.value]}
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
    const { bold, italic, family, textAlign } = this.state.font;
    const jsString = getScript(this.state.colors);
    const cssString = getStylesheet(this.state.picker, this.state.font);
    const tabChart = this.state.chartType.value === 'default' ? this.renderDefaultCharts() : this.renderChart();
    const boldStyle = bold ? 'font-weight: bold;' : '';
    const italicStyle = italic ? 'font-style: italic;' : '';
    return (
      <div className="builder__mockup" ref={ this.mockupSection }>
        <h2 className="builder__header">Preview</h2>
        { !this.props.isDashboardBuilderActive && 
        <Tabs>
          <TabList>
            <Tab>Chart</Tab>
            <Tab>CSS</Tab>
            <Tab>Javascript</Tab>
          </TabList>
          <TabPanel>
            { tabChart }
          </TabPanel>
          <TabPanel>
            { this.renderCopyButton(getStylesheet(this.state.picker, this.state.font)) }
            <Lowlight language="css" value={cssString} className="builder__editor" />
          </TabPanel>
          <TabPanel>
            { this.renderCopyButton(getScript(this.state.colors)) }
            <Lowlight language="js" value={jsString} className="builder__editor" />
          </TabPanel>
        </Tabs>
        }
        {/* must be inline to handle dynamic styles */}
        <style jsx global>{`
        .keen-dataviz {
          text-align: ${textAlign};
          ${boldStyle}
          ${italicStyle}
        }
        .keen-dataviz,
        .c3 svg {
          font-family: ${family};
        }
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
    const mainClass = this.props.isDashboardBuilderActive ? 'keen-theme-builder no-mockup' : 'keen-theme-builder';
    return (
    <div className = { mainClass }>
      {this.renderConfigSection()}
      {!this.props.isDashboardBuilderActive && this.renderMockUpSection()}
    </div>
    );
  }
}

Builder.propTypes = {
  picker: PropTypes.object,
  colors: PropTypes.array,
  chartType: PropTypes.objectOf(PropTypes.string),
  chartPalette: PropTypes.objectOf(PropTypes.string),
  isDashboardBuilderActive: PropTypes.bool,
  onChange: PropTypes.func,
};

Builder.defaultProps = {
  picker: initialPicker,
  colors: [],
  chartType: availableChartTypes[0],
  chartPalette: availableChartPalette[0],
  isDashboardBuilderActive: false,
}