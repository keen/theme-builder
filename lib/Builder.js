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
  availableChartTypes,
  availableChartPalette,
  defaultColor,
  pickerLabel,
  defaultOptions,
} from './config';

import 'highlight.js/styles/github-gist.css';
import 'react-tabs/style/react-tabs.css';
import 'keen-dataviz/dist/keen-dataviz.css';
import './Builder.css';
import ColorPicker from './ColorPicker';

Lowlight.registerLanguage('css', css);
Lowlight.registerLanguage('js', js);

const placeholder = document.createElement('li');
placeholder.className = 'placeholder'; 

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.colorList = React.createRef();
    this.mockupSection = React.createRef();

    const { options } = props;
    const palette = (options.chartPalette && options.chartPalette.value) ? chartColorPalette[options.chartPalette.value] : '';
    const paletteColors = palette ? palette.colors : [];
    const colors = options.colors && options.colors.length ? options.colors : paletteColors;
    const family = options.font && options.font.family ? options.font.family : '';
    const bold = options.font && options.font.bold ? options.font.bold : false;
    const italic = options.font && options.font.italic ? options.font.italic : false;
    const textAlign = options.font && options.font.textAlign ? options.font.textAlign : 'left';
    const fonts = options.fonts ? options.fonts : [];
    const chartType = options.chartType ? options.chartType : availableChartTypes[0];
    
    this.state = {
      ...defaultOptions,
      picker: options.picker,
      colors,
      chartType: options.isDashboardBuilderActive ? availableChartTypes[0] : chartType,
      chartPalette: options.chartPalette,
      fonts,
      font: {
        family,
        bold,
        italic,
        textAlign,
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

  renderChartType() {
    return (
      <>
      <h2 className="builder__header">Chart type</h2>
      <label>Available chart types</label>
      <Select
        defaultValue={this.props.options.chartType || availableChartTypes[0]}
        options={availableChartTypes}
        onChange={this.handleChartTypeChange}
        className='chart-types'
      />
      </>
    )
  }

  renderFontsPicker() {
    const family = this.props.options.font && this.props.options.font.family;
    const {fonts } = this.state;
    let initialFont;
    if (family) {
      WebFont.load({
        google: {
          families: [family]
        }
      });

      initialFont = {
        label: family,
        value: family,
      };
    }
    const fontStack = [
      {
        label: 'Default',
        value: ''
      }
    ];
    if (fonts && fonts.length) {
      fonts.forEach(item => {
        const obj = {
          label: item.family,
          value: item.family
        };
        
        fontStack.push(obj);
      });
    }
    return (
      <Select
        defaultValue={initialFont || fontStack[0]}
        options={fontStack}
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

    const onPickerChange = (color, title) => {
      this.setState((state) => ({
        ...state,
        picker: {
          ...this.state.picker,
          [title]: color.hex,
        }
      }));
    }
    const { picker, chartPalette } = this.props.options;
    return (
      <section className="builder__config">
        {!this.props.options.isDashboardBuilderActive && this.renderChartType()}
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
        <ColorPicker title={pickerLabel.title} initialColor={(picker && picker[pickerLabel.title]) || defaultColor} onChange={onPickerChange}/>
        <ColorPicker title={pickerLabel.legend} initialColor={(picker && picker[pickerLabel.legend]) || defaultColor} onChange={onPickerChange}/>
        <ColorPicker title={pickerLabel.label} initialColor={(picker && picker[pickerLabel.label]) || defaultColor} onChange={onPickerChange}/>
        <ColorPicker title={pickerLabel.chart} initialColor={(picker && picker[pickerLabel.chart]) || defaultColor} onChange={onPickerChange}/>
        <ColorPicker title={pickerLabel.axis} initialColor={(picker && picker[pickerLabel.axis]) || defaultColor} onChange={onPickerChange}/>
        <ColorPicker title={pickerLabel.tooltip} initialColor={(picker && picker[pickerLabel.tooltip]) || defaultColor} onChange={onPickerChange}/>
        <ColorPicker title={pickerLabel.grid} initialColor={(picker && picker[pickerLabel.grid]) || defaultColor} onChange={onPickerChange}/>
        <h2 className="builder__header">Chart colors palette</h2>
        <label>Predefined color palette</label>
        <Select
          defaultValue={chartPalette || availableChartPalette[0]}
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
    const { picker, font, chartType } = this.state;
    const { bold, italic, family, textAlign } = this.state.font;
    const jsString = getScript(this.state.colors);
    const cssString = getStylesheet(picker, font);
    const tabChart = (chartType && chartType.value === 'default') ? this.renderDefaultCharts() : this.renderChart();
    const boldStyle = bold ? 'font-weight: bold;' : '';
    const italicStyle = italic ? 'font-style: italic;' : '';
    return (
      <div className="builder__mockup" ref={ this.mockupSection }>
        <h2 className="builder__header">Preview</h2>
        { !this.props.options.isDashboardBuilderActive && 
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
          font-family: ${family || 'inherit'};
        }
        .keen-dataviz .keen-dataviz-title {
          color: ${(picker && picker[pickerLabel.title]) || defaultColor};
        }
        .keen-dataviz .keen-c3-legend .legend-item-text {
          color: ${(picker && picker[pickerLabel.legend]) || defaultColor};
        }
        .keen-dataviz .text-label {
          fill: ${(picker && picker[pickerLabel.label]) || defaultColor};
        }
        .keen-dataviz .text-main,
        .keen-dataviz .text-second,
        .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-max,
        .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-min,
        .keen-dataviz .c3-chart-arc .c3-gauge-value,
        .keen-dataviz .c3-chart-arc text {
          fill: ${(picker && picker[pickerLabel.chart]) || defaultColor};
        }
        .keen-dataviz .c3-axis text,
        .keen-dataviz .c3-chart .tick text {
          fill: ${(picker && picker[pickerLabel.axis]) || defaultColor};
        }
        .keen-dataviz .c3-tooltip,
        .keen-dataviz .c3-tooltip-container th {
          color: ${(picker && picker[pickerLabel.tooltip]) || defaultColor};
        }
        .keen-dataviz .c3-grid line {
          stroke: ${(picker && picker[pickerLabel.grid]) || defaultColor};
        }
        `}</style>
      </div>
    );
  }

  render() {
    const mainClass = this.props.options.isDashboardBuilderActive ? 'keen-theme-builder no-mockup' : 'keen-theme-builder';
    return (
    <div className = { mainClass }>
      {this.renderConfigSection()}
      {!this.props.options.isDashboardBuilderActive && this.renderMockUpSection()}
    </div>
    );
  }
}

Builder.propTypes = {
  options: PropTypes.shape({
    picker: PropTypes.object,
    colors: PropTypes.array,
    fonts: PropTypes.array,
    font: PropTypes.shape({
      family: PropTypes.string,
      bold: PropTypes.bool,
      italic: PropTypes.bool,
      textAlign: PropTypes.oneOf(['left', 'right', 'center'])
    }),
    chartType: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
    chartPalette: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    }),
    isDashboardBuilderActive: PropTypes.bool,
  }),
  onChange: PropTypes.func.isRequired,
};

Builder.defaultProps = {
  options: defaultOptions,
  onChange: () => {},
}; 