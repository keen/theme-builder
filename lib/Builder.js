import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';
import set from 'lodash.set';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';
import Select from 'react-select';
import _JSXStyle from 'styled-jsx/style';
import { List } from './PaletteList';
import { ButtonGroup } from './ButtonGroup';
import ColorPicker from './ColorPicker';
import FontPicker from './FontPicker';
import Accordion from './Accordion';
import Switcher from './Switcher';
import FormInput from './FormInput';
import CodeSnippet from './CodeSnippet';
import TabChart from './TabChart';
import {
  GOOGLE_FONT_API_KEY,
  GOOGLE_FONTS_URL,
  chartColorPalette,
  availableChartTypes,
  availableChartPalette,
  defaultColor,
  pickerLabel,
  fontSizeOptions,
  fontStyleOptions,
  textAlignOptions,
  textAlignOptionsVertical,
  defaultState,
  layoutOptions,
  horizontalPositionOptions,
  verticalPositionOptions,
  gridLinesCountOptions,
} from './config';

import 'react-tabs/style/react-tabs.css';
import 'keen-dataviz/dist/keen-dataviz.css';
import '../lib/css/styles.css';

export default class Builder extends PureComponent {
  constructor(props) {
    super(props);
    this.colorList = React.createRef();
    this.mockupSection = React.createRef();

    this.state = {
      ...defaultState,
      ...props.options
    };
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

  handleStateChange(path, value) {
    const newState = produce(this.state, draft => {
      set(draft, path, value);
    });
    this.setState(() => newState);
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
    this.setState({ chart: data });
  }

  handleChartPaletteChange = (data) => {
    const colors = data.value ? chartColorPalette[data.value].colors : [];
    this.setState({ chartPalette: data, colors });
  }

  handleColorsChange = (colors) => {
    this.setState({ colors });
  }

  renderChartTypeItem() {
    return (
      <div label="Chart type">
        <label className="control-label">Available chart types</label>
        <Select
          defaultValue={this.state.chartType || availableChartTypes[0]}
          options={availableChartTypes}
          onChange={this.handleChartTypeChange}
          className="chart-types"
          classNamePrefix="custom-dropdown"
        />
      </div>
    )
  }


  handleTextStateUpdate(key, value) {
    this.setState((state) => {
      return {
        ...state,
        [key]: value,
      }
    })
  }

  renderFontSize = (title, item) => {
    const fontSizeDefaultValue = fontSizeOptions.find(option => option.value === this.state[`${item}.font.size`]);
    return (
      <div className="accordion__item__row two-elements">
        <FontPicker key={`${item}.font`} title={title} family={this.state[`${item}.font.family`]} fonts={this.state.fonts} onChange={e => this.handleTextStateUpdate(`${item}.font.family`, e.value)} />
        <Select
          defaultValue={fontSizeDefaultValue || fontSizeOptions[0]}
          options={fontSizeOptions}
          onChange={e => this.handleTextStateUpdate(`${item}.font.size`, e.value)}
          classNamePrefix="custom-dropdown"
        />
      </div>
    );
  }
  
  renderFontStyle = (title, item, alignment, customOptions) => {
    const textAlign = this.state[`${item}.textAlign`];
    const wrapperClassName = !alignment ? 'accordion__item__row two-elements' : 'accordion__item__row three-elements';
    const textAlignSelect = customOptions ?
    <Select
      defaultValue={customOptions.find(option => option.value === textAlign) || customOptions[0]}
      options={customOptions}
      onChange={e => this.handleTextStateUpdate(`${item}.textAlign`, e.value)}
      classNamePrefix="custom-dropdown"
    /> 
    : <Select
      defaultValue={textAlignOptions.find(option => option.value === textAlign) || textAlignOptions[0]}
      options={textAlignOptions}
      onChange={e => this.handleTextStateUpdate(`${item}.textAlign`, e.value)}
      classNamePrefix="custom-dropdown"
    />;

    return (
      <div className={wrapperClassName}>
        <ColorPicker key={item} title={title} initialColor={this.state[`${item}.color`]} onChange={e => this.handleTextStateUpdate(`${item}.color`, e.hex)} />
        <ButtonGroup
          items={fontStyleOptions}
          singleChoice={false}
          groupName={`${item}.style`}
          activeItem={{ bold: this.state[`${item}.font.bold`], italic: this.state[`${item}.font.italic`] }}
          onChange={e => this.handleTextStateUpdate(`${item}.font.${e.target.value}`, !this.state[`${item}.font.${e.target.value}`])}
        />
        {alignment && textAlignSelect}
      </div>
    )
  }

  renderTitleSection() {
    return (
      <>
        <div className="accordion__item__row">
          <FormInput key="title" type="text" name="title" value={this.state['title.text']} onChange={e => this.handleTextStateUpdate('title.text', e.target.value)} />
        </div>
        {this.renderFontSize('Title font', 'title')}
        {this.renderFontStyle('Title format', 'title', true)}
      </>
    )
  }

  renderSubtitleSection() {
    return (
      <>
        <div className="accordion__item__row">
          <FormInput key="subtitle" type="text" name="subtitle" value={this.state['subtitle.text']} onChange={e => this.handleTextStateUpdate('subtitle.text', e.target.value)} />
        </div>
        {this.renderFontSize('Subtitle font', 'subtitle')}
        {this.renderFontStyle('Color', 'subtitle', true)}
      </>
    )
  }

  renderVerticalAxisTitleSection() {
    return (
      <>
        <div className="accordion__item__row">
          <FormInput key="vertical-axis-title" type="text" name="vertical-axis-title" value={this.state['axis.vertical.title.text']} onChange={e => this.handleTextStateUpdate('axis.vertical.title.text', e.target.value)} />
        </div>
        {this.renderFontSize('Title font', 'axis.vertical.title')}
        <div className="accordion__item__row three-elements">
          <ColorPicker title="Title format" initialColor={this.state['axis.vertical.title.color']} onChange={e => this.handleTextStateUpdate('axis.vertical.title.color', e.hex)} />
          <ButtonGroup
            items={fontStyleOptions}
            singleChoice={false}
            groupName="verticalAxisTitleStyle"
            activeItem={{ bold: this.state['axis.vertical.title.font.bold'], italic: this.state['axis.vertical.title.font.italic'] }}
            onChange={e => this.handleTextStateUpdate(`axis.vertical.title.font.${e.target.value}`, !this.state[`axis.vertical.title.font.${e.target.value}`])}
          />
          <Select
            defaultValue={textAlignOptionsVertical[0]}
            options={textAlignOptionsVertical}
            onChange={e => this.handleTextStateUpdate('axis.vertical.title.textAlign', e.value)}
            classNamePrefix="custom-dropdown"
          />
        </div>
      </>
    )
  }

  renderVerticalAxisLabelSection() {
    return (
      <>
        {this.renderFontSize('Axis font', 'axis.vertical.label')}
        {this.renderFontStyle('Axis format', 'axis.vertical.label', false)}
      </>
    )
  }

  renderHorizontalAxisTitleSection() {
    return (
      <>
        {this.renderFontSize('Title font', 'axis.horizontal.title')}
        {this.renderFontStyle('Title format', 'axis.horizontal.title', true)}
      </>
    )
  }

  renderHorizontalAxisLabelSection() {
    return (
      <>
        {this.renderFontSize('Axis font', 'axis.horizontal.label')}
        {this.renderFontStyle('Axis format', 'axis.horizontal.label', false)}
      </>
    )
  }

  renderLegendSection() {
    const legendLayout = this.state['legend.layout'];
    return (
      <>
        <div className="accordion__item__row">
          <ButtonGroup
            items={layoutOptions}
            singleChoice
            groupName="legendLayout"
            title="Layout"
            activeItem={layoutOptions.find(option => option.value === this.state['legend.layout'])}
            onChange={e => this.handleTextStateUpdate('legend.layout', e.target.value)}
          />
        </div>
        <div className="accordion__item__row">
          {(legendLayout === 'top' || legendLayout === 'bottom') &&
            <ButtonGroup
              items={horizontalPositionOptions}
              singleChoice
              groupName="legendPositionHorizontal"
              title="Alignment"
              activeItem={horizontalPositionOptions.find(item => item.value === this.state['legend.position.horizontal'])}
              onChange={e => this.handleTextStateUpdate('legend.position.horizontal', e.target.value)}
            />
          }
          {(legendLayout === 'left' || legendLayout === 'right') &&
            <ButtonGroup
              items={verticalPositionOptions}
              singleChoice
              groupName="legendPositionVertical"
              title="Alignment"
              activeItem={verticalPositionOptions.find(item => item.value === this.state['legend.position.vertical'])}
              onChange={e => this.handleTextStateUpdate('legend.position.vertical', e.target.value)}
            />
          }
        </div>
        {this.renderFontSize('Legend font', 'legend')}
        {this.renderFontStyle('Legend format', 'legend', false)}
      </>
    )
  }

  renderGridSection() {
    return (
      <div className="accordion__item__row two-elements">
        <ColorPicker title="Lines color" initialColor={this.state['grid.lines.color']} onChange={e => this.handleTextStateUpdate('grid.lines.color', e.hex)} />
        <div className="dropdown">
          <span className="dropdown__label">Count</span>
          <Select
            defaultValue={gridLinesCountOptions[0]}
            options={gridLinesCountOptions}
            onChange={e => this.handleTextStateUpdate('grid.count', e.value)}
            classNamePrefix="custom-dropdown"
          />
        </div>
      </div>
    )
  }

  renderSubgridSection() {
    return (
      <div className="accordion__item__row two-elements">
        <ColorPicker title="Lines color" initialColor={this.state['subgrid.lines.color']} onChange={e => this.handleTextStateUpdate('subgrid.lines.color', e.hex)} />
        <div className="dropdown">
          <span className="dropdown__label">Count</span>
          <Select
            defaultValue={gridLinesCountOptions[0]}
            options={gridLinesCountOptions}
            onChange={e => this.handleTextStateUpdate('subgrid.count', e.value)}
            classNamePrefix="custom-dropdown"
          />
        </div>
      </div>
    )
  }

  renderConfigSection() {
    const { chartPalette } = this.props.options;
    return (
      <section className="builder__config">
        <Accordion>
          {!this.props.options.isDashboardBuilderActive && this.renderChartTypeItem()}
          <div label="Appearance">
            <div className="accordion__item__row">
              <ColorPicker title="Chart background" initialColor={this.state['appearance.background']} onChange={e => this.handleStateChange('appearance.background', e.hex)}/>
            </div>
            <div className="accordion__item__row">
              <ColorPicker title="Chart border" initialColor={this.state['appearance.border']} onChange={e => this.handleStateChange('appearance.border', e.hex)}/>
            </div>
            <div className="accordion__item__row">
              <FontPicker title="Font" family={this.state['appearance.font.family']} fonts={this.state.fonts} onChange={e => this.handleStateChange('appearance.font.family', e.value)} />
            </div>
            <div className="accordion__item__row">
              <span className="control-label">Plot colors</span>
              <Select
                defaultValue={chartPalette || availableChartPalette[0]}
                options={availableChartPalette}
                onChange={this.handleChartPaletteChange}
                className="predefined-palette"
                classNamePrefix="custom-dropdown"
              />
            </div>
            <List colors={this.state.colors} onChange={this.handleColorsChange} />
          </div>
          <div label="Title & Subtitle">
            <Switcher checked={!!this.state['title.show']} onChange={() => this.handleStateChange('title.show', !this.state['title.show'])} text={{ on: 'Show', off: 'Hide' }}>
              <span className="section-title">Title</span>
            </Switcher>
            {this.state['title.show'] && this.renderTitleSection()}
            <Switcher checked={!!this.state['subtitle.show']} onChange={() => this.handleStateChange('subtitle.show', !this.state['subtitle.show'])} text={{ on: 'Show', off: 'Hide' }}>
              <span className="section-title">Subtitle</span>
            </Switcher>
            {this.state['subtitle.show'] && this.renderSubtitleSection()}
          </div>
          <div label="Vertical axis">
            <Switcher checked={!!this.state['axis.vertical.title.show']} onChange={() => this.handleStateChange('axis.vertical.title.show', !this.state['axis.vertical.title.show'])}>
              <span className="section-title">Axis title</span>
            </Switcher>
            {this.state['axis.vertical.title.show'] && this.renderVerticalAxisTitleSection()}
            <Switcher checked={!!this.state['axis.vertical.label.show']} onChange={() => this.handleStateChange('axis.vertical.label.show', !this.state['axis.vertical.label.show'])}>
              <span className="section-title">Axis labels</span>
            </Switcher>
            {this.state['axis.vertical.label.show'] && this.renderVerticalAxisLabelSection() }
          </div>
          <div label="Horizontal axis">
            <Switcher checked={!!this.state['axis.horizontal.title.show']} onChange={() => this.handleStateChange('axis.horizontal.title.show', !this.state['axis.horizontal.title.show'])}>
              <span className="section-title">Axis title</span>
            </Switcher>
            {this.state['axis.horizontal.title.show'] && this.renderHorizontalAxisTitleSection()}
            <Switcher checked={!!this.state['axis.horizontal.label.show']} onChange={() => this.handleStateChange('axis.horizontal.label.show', !this.state['axis.horizontal.label.show'])}>
              <span className="section-title">Axis labels</span>
            </Switcher>
            {this.state['axis.horizontal.label.show'] && this.renderHorizontalAxisLabelSection() }
          </div>
          <div label="Legend">
            <Switcher checked={!!this.state['legend.show']} onChange={() => this.handleStateChange('legend.show', !this.state['legend.show'])}>
              <span className="section-title">Legend</span>
            </Switcher>
            {this.state['legend.show'] && this.renderLegendSection()}
          </div>
          <div label="Gridline">
            <Switcher checked={!!this.state['grid.show']} onChange={() => this.handleStateChange('grid.show', !this.state['grid.show'])}>
              <span className="section-title">Gridline</span>
            </Switcher>
            {this.state['grid.show'] && this.renderGridSection()}
            <Switcher checked={!!this.state['subgrid.show']} onChange={() => this.handleStateChange('subgrid.show', !this.state['subgrid.show'])}>
              <span className="section-title">Subgrid</span>
            </Switcher>
            {this.state['subgrid.show'] && this.renderSubgridSection()}
          </div>
          <div label="Series">
            <p>Lorem ipsum ...</p>
          </div>
        </Accordion>
      </section>
    ); 
  }

  renderMockUpSection() {
    const { picker } = this.state;
    const chartBackground = this.state['appearance.background'] ? `background-color: ${this.state['appearance.background']};` : '';
    const chartBorder = this.state['appearance.border'] ? `border-color: ${this.state['appearance.border']};` : '';
    const chartFont = this.state['appearance.font.family'] ? `font-family: "${this.state['appearance.font.family']}";` : '';
    const titleTextAlign = `text-align: ${this.state['title.textAlign']};`;
    const titleColor = this.state['title.color'] ? `color: ${this.state['title.color']};` : '';
    const titleFontFamily = this.state['title.font.family'] ? `font-family: "${this.state['title.font.family']}";` : '';
    const titleFontSize = this.state['title.font.size'] !== 'auto' ? `font-size: ${this.state['title.font.size']}px;` : '';
    const titleFontBold = this.state['title.font.bold'] ? 'font-weight: bold;' : '';
    const titleFontItalic = this.state['title.font.italic'] ? 'font-style: italic;' : '';
    const axisYLabelFont = this.state['axis.vertical.label.font.family'] ? `font-family: "${this.state['axis.vertical.label.font.family']}";` : '';
    const axisYLabelFontSize = this.state['axis.vertical.label.font.size'] ? `font-size: ${this.state['axis.vertical.label.font.size']}px;` : '';
    const axisYLabelFontBold = this.state['axis.vertical.label.font.bold'] ? 'font-weight: bold;' : '';
    const axisYLabelFontItalic = this.state['axis.vertical.label.font.italic'] ? 'font-style: italic;' : '';
    const axisYLabelColor = this.state['axis.vertical.label.color'] ? `fill: ${this.state['axis.vertical.label.color']};` : '';
    const axisXLabelFont = this.state['axis.horizontal.label.font.family'] ? `font-family: "${this.state['axis.horizontal.label.font.family']}";` : '';
    const axisXLabelFontSize = this.state['axis.horizontal.label.font.size'] ? `font-size: ${this.state['axis.horizontal.label.font.size']}px;` : '';
    const axisXLabelFontBold = this.state['axis.horizontal.label.font.bold'] ? 'font-weight: bold;' : '';
    const axisXLabelFontItalic = this.state['axis.horizontal.label.font.italic'] ? 'font-style: italic;' : '';
    const axisXLabelColor = this.state['axis.horizontal.label.color'] ? `fill: ${this.state['axis.horizontal.label.color']};` : '';
    const legendFont = this.state['legend.font.family'] ? `font-family: "${this.state['legend.font.family']}";` : '';
    const legendFontSize = this.state['legend.font.size'] ? `font-size: ${this.state['legend.font.size']}px;` : '';
    const legendFontBold = this.state['legend.font.bold'] ? 'font-weight: bold;' : '';
    const legendFontItalic = this.state['legend.font.italic'] ? 'font-style: italic;' : '';
    const legendColor = this.state['legend.color'] ? `color: ${this.state['legend.color']};` : '';
    const gridLineShow = this.state['grid.show'] ? 'stroke-opacity: 1;' : 'stroke-opacity: 0;';
    const gridLineColor = this.state['grid.lines.color'] ? `stroke: ${this.state['grid.lines.color']}` : '';
    const subgridLineColor = this.state['subgrid.lines.color'] ? `stroke: ${this.state['subgrid.lines.count']}` : '';
    const legendOptions = { show: this.state['legend.show'], position: this.state['legend.layout']}
    const title = (this.state['title.show'] && this.state['title.text']) ? this.state['title.text'] : false;

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
            <TabChart type={this.state.chart.value} colors={this.state.colors} legend={legendOptions} title={title} />
          </TabPanel>
          <TabPanel>
            <CodeSnippet data={this.state} type="css" />
          </TabPanel>
          <TabPanel>
            <CodeSnippet data={this.state} type="js" />
          </TabPanel>
        </Tabs>
        }
        {/* must be inline to handle dynamic styles */}
        <style jsx global>{`
        .keen-theme-builder .keen-dataviz {
          ${chartBackground}
          ${chartBorder}
        }
        .keen-dataviz,
        .c3 svg {
          ${chartFont}
        }
        .keen-dataviz .keen-dataviz-title {
          display: block;
          ${titleColor}
          ${titleTextAlign}
          ${titleFontFamily}
          ${titleFontSize}
          ${titleFontBold}
          ${titleFontItalic}
        }
        .keen-dataviz .keen-dataviz-title {
          // color: ${(picker && picker[pickerLabel.title]) || defaultColor};
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
        .keen-dataviz .c3-axis.c3-axis-y {
          ${axisYLabelFont}
          ${axisYLabelFontSize}
          ${axisYLabelFontBold}
          ${axisYLabelFontItalic}
        }
        .keen-dataviz .c3-axis.c3-axis-y .tick text {
          ${axisYLabelColor}
        }
        .keen-dataviz .c3-axis.c3-axis-x {
          ${axisXLabelFont}
          ${axisXLabelFontSize}
          ${axisXLabelFontBold}
          ${axisXLabelFontItalic}
        }
        .keen-dataviz .c3-axis.c3-axis-x .tick text {
          ${axisXLabelColor}
        }
        .keen-dataviz .keen-c3-legend .legend-item-text {
          ${legendFont}
          ${legendFontSize}
          ${legendFontBold}
          ${legendFontItalic}
          ${legendColor}
        }
        .keen-dataviz .c3-grid line,
        .keen-dataviz .chart-lines {
          ${gridLineColor}
        }
        .keen-theme-builder .keen-dataviz .c3-ygrid {
          ${gridLineShow}
        }
        `}</style>
      </div>
    );
  }

  render() {
    console.log('>>>>>>>> RENDER <<<<<<<<<<<');
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
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

Builder.defaultProps = {
  options: defaultState,
  onChange: () => {},
}; 