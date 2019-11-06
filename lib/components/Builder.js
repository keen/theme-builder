import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';
import set from 'lodash.set';
import isEqual from 'lodash.isequal';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';
import Select from 'react-select';
import _JSXStyle from 'styled-jsx/style';
import List from './PaletteList';
import ButtonGroup from './ButtonGroup';
import ColorPicker from './ColorPicker';
import FontPicker from './FontPicker';
import Accordion from './Accordion';
import Switcher from './Switcher';
import FormInput from './FormInput';
import CodeSnippet from './CodeSnippet';
import TabChart from './TabChart';
import {
  GOOGLE_FONTS_API_KEY,
  GOOGLE_FONTS_URL,
  chartColorPalette,
  availableChartTypes,
  availableChartPalette,
  baseColor,
  defaultColors,
  fontSizeOptions,
  fontStyleOptions,
  textAlignOptions,
  textAlignOptionsVertical,
  defaultState,
  layoutOptions,
  horizontalPositionOptions,
  verticalPositionOptions,
  gridLinesCountOptions,
  lineThicknessOptions,
  pointsSizeOptions,
  colorPickerDefaultOption,
  stackedOptions,
} from '../utils/consts';

import {
  getCSSRules,
  getChartAxisOptions,
  getAccordionSections,
  getDefaultState,
  HSLToHex,
} from '../utils/helpers';

import 'react-tabs/style/react-tabs.css';
import 'keen-dataviz/dist/keen-dataviz.css';
import '../css/styles.css';

export default class Builder extends PureComponent {
  constructor(props) {
    super(props);

    const { chart = '' } = this.props.options;
    const state = getDefaultState(chart);
    this.state = {
      ...state,
      ...props.options,
      isModified: false,
    };
  }

  componentDidMount() {
    fetch(`${GOOGLE_FONTS_URL}/?key=${GOOGLE_FONTS_API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({ fonts: json.items }))
      .catch(error => console.error(error));
  }

  componentDidUpdate(prevProps, prevState) {
    const { fonts, ...cur } = this.state;
    const { fonts:prevFonts, ...prev } = prevState;

    if (this.state.isModified && !isEqual(cur, prev) && this.props.onChange) {
      this.props.onChange(cur);
    }
  }

  handleStateChange(path, value) {
    const newState = produce(this.state, draft => {
      draft.isModified = true;
      set(draft, path, value);
    });
    this.setState(() => newState);
  }

  addItem() {
    this.setState((state) => {
      const colors = [...state.colors, baseColor];

      return {
        colors,
        isModified: true,
      }
    });
  }

  removeItem(index) {
    this.setState((state) => {
      const colors = [...state.colors];
      colors.splice(index,1);

      return {
        colors,
        isModified: true,
      };
    });
  }

  onColorChange(color, index) {
    this.setState((state) => {
      const colors = [...state.colors];
      colors[index] = color;
      
      return {
        colors,
        isModified: true,
      };
    });
  }

  handleChartTypeChange = (data) => {
    if (!data.value) return;
    this.setState({
      chart: data.value,
      isModified: true,
    });
  }

  handleChartPaletteChange = (data) => {
    const colors = data.value ? chartColorPalette[data.value].colors : [];
    this.setState({ chartPalette: data.value, colors, isModified: true });
  }

  handleColorsChange = (colors) => {
    this.setState({ colors, isModified: true });
  }

  renderChartTypeItem() {
    const chartTypeDefaultValue = availableChartTypes.find(option => option.value === this.state['chart']);
    return (
      <div className="keen-theme-builder__row">
        <label className="control-label">Available chart types</label>
        <Select
          defaultValue={chartTypeDefaultValue || availableChartTypes[0]}
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
        isModified: true,
        [key]: value !== colorPickerDefaultOption ? value : '',
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
  
  renderFontStyle = (title, item, alignment, defaultColor) => {
    const textAlign = this.state[`${item}.textAlign`];
    const wrapperClassName = !alignment ? 'accordion__item__row two-elements' : 'accordion__item__row three-elements';
    return (
      <div className={wrapperClassName}>
        <ColorPicker key={item} title={title} initialColor={this.state[`${item}.color`]} defaultColor={defaultColor || defaultColors.title} onChange={e => this.handleTextStateUpdate(`${item}.color`, e.hex)} />
        <ButtonGroup
          items={fontStyleOptions}
          singleChoice={false}
          groupName={`${item}.style`}
          activeItem={{ bold: this.state[`${item}.font.bold`], italic: this.state[`${item}.font.italic`] }}
          onChange={e => this.handleTextStateUpdate(`${item}.font.${e.target.value}`, !this.state[`${item}.font.${e.target.value}`])}
        />
        {alignment && 
          <Select
            defaultValue={textAlignOptions.find(option => option.value === textAlign) || textAlignOptions[0]}
            options={textAlignOptions}
            onChange={e => this.handleTextStateUpdate(`${item}.textAlign`, e.value)}
            classNamePrefix="custom-dropdown"
          />
        }
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
        {this.renderFontStyle('Subtitle format', 'subtitle', true, defaultColors.subtitle)}
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
          <ColorPicker title="Title format" initialColor={this.state['axis.vertical.title.color']} defaultColor={defaultColors.title} onChange={e => this.handleTextStateUpdate('axis.vertical.title.color', e.hex)} />
          <ButtonGroup
            items={fontStyleOptions}
            singleChoice={false}
            groupName="verticalAxisTitleStyle"
            activeItem={{ bold: this.state['axis.vertical.title.font.bold'], italic: this.state['axis.vertical.title.font.italic'] }}
            onChange={e => this.handleTextStateUpdate(`axis.vertical.title.font.${e.target.value}`, !this.state[`axis.vertical.title.font.${e.target.value}`])}
          />
          <Select
            defaultValue={textAlignOptionsVertical[1]}
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
        <div className="accordion__item__row">
          <FormInput key="horizotanl-axis-title" type="text" name="horizontal-axis-title" value={this.state['axis.horizontal.title.text']} onChange={e => this.handleTextStateUpdate('axis.horizontal.title.text', e.target.value)} />
        </div>
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
        <ColorPicker title="Lines color" initialColor={this.state['grid.lines.color']} defaultColor={defaultColors.border} onChange={e => this.handleTextStateUpdate('grid.lines.color', e.hex)} />
        <div className="dropdown disabled">
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
        <ColorPicker title="Lines color" initialColor={this.state['subgrid.lines.color']} defaultColor={defaultColors.border} onChange={e => this.handleTextStateUpdate('subgrid.lines.color', e.hex)} />
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

  renderSeriesLabelsSection() {
    return (
      <>
        {this.renderFontSize('Labels font', 'series.label')}
        {this.renderFontStyle('Labels format', 'series.label', true)}
      </>
    )
  }

  renderSeriesSection() {
    const lineDefaultValue = lineThicknessOptions.find(option => option.value === this.state['series.line']);
    return (
      <>
        <div className="accordion__item__row">
          <span className="control-label">Line thickness</span>
          <Select
            defaultValue={lineDefaultValue || lineThicknessOptions[0]}
            options={lineThicknessOptions}
            onChange={e => this.handleTextStateUpdate('series.line', e.value)}
            classNamePrefix="custom-dropdown"
          />
        </div>
      </>
    )
  }

  renderSeriesPointsSection() {
    const pointSizeDefaultValue = pointsSizeOptions.find(option => option.value === this.state['series.points.size']);
    return (
      <>
      <div className="accordion__item__row">
        <span className="control-label">Points size</span>
        <Select
          defaultValue={pointSizeDefaultValue || pointsSizeOptions[0]}
          options={pointsSizeOptions}
          onChange={e => this.handleTextStateUpdate('series.points.size', e.value)}
          classNamePrefix="custom-dropdown"
        />
      </div>
      </>
    )
  }

  renderMetricOptions() {
    return (
      <div className="keen-theme-builder__row two-elements">
        <FormInput key="metric-prefix" type="text" label="Prefix" name="metric-prefix" value={this.state['general.prefix']} onChange={e => this.handleTextStateUpdate('general.prefix', e.target.value)} />
        <FormInput key="metric-suffix" type="text" label="Suffix" name="metric-suffix" value={this.state['general.suffix']} onChange={e => this.handleTextStateUpdate('general.suffix', e.target.value)} />
      </div>
    )
  }

  renderAppearanceFont() {
    return (
      this.state.chart === 'metric' ?
      <div className="accordion__item__row">
        {this.renderFontSize('Chart font', 'appearance')}
        {this.renderFontStyle('Chart format', 'appearance', false)}
      </div>
      :
      <div className="accordion__item__row">
        <FontPicker title="Font" family={this.state['appearance.font.family']} fonts={this.state.fonts} onChange={e => this.handleStateChange('appearance.font.family', e.value)} />
      </div>
    )
  }

  generateHoverColor(e) {
    if (!e.hsl) return defaultColors.rowHover;
    const { h, s, l, a } = e.hsl;
    const hsl = l < 0.5 ? { h, s, l: l + 0.2, a } : {h, s, l: l - 0.2, a };
    return HSLToHex(hsl.h, hsl.s, hsl.l);
  }

  renderConfigSection() {
    const { isDashboardBuilderActive, options: { chart } } = this.props;
    const sections = getAccordionSections(chart);
    const chartPaletteDefaultValue = availableChartPalette.find(option => option.value === this.state['chartPalette']);
    return (
      <section className="builder__config">
        <h2 className="builder__header">Chart style</h2>
        { !isDashboardBuilderActive && this.renderChartTypeItem()}
        { this.state.chart === 'metric' && this.renderMetricOptions()}
        <Accordion>
          {sections.appearance &&
            <div label="Appearance">
              <Switcher checked={!!this.state['appearance.sparkline']} onChange={() => this.handleStateChange('appearance.sparkline', !this.state['appearance.sparkline'])}>
                <span className="control-label">Sparkline</span>
              </Switcher>
              <div className="accordion__item__row">
                <ColorPicker title="Chart background" initialColor={this.state['appearance.background']} defaultColor={defaultColors.background} onChange={e => this.handleStateChange('appearance.background', e.hex)}/>
              </div>
              <div className="accordion__item__row">
                <ColorPicker title="Chart border" initialColor={this.state['appearance.border']} defaultColor={defaultColors.border} onChange={e => this.handleStateChange('appearance.border', e.hex)}/>
              </div>
              {this.renderAppearanceFont()}
              <div className="accordion__item__row">
                <span className="control-label">Plot colors</span>
                <Select
                  defaultValue={chartPaletteDefaultValue || availableChartPalette[0]}
                  options={availableChartPalette}
                  onChange={this.handleChartPaletteChange}
                  className="predefined-palette"
                  classNamePrefix="custom-dropdown"
                />
              </div>
              <List colors={this.state.colors} onChange={this.handleColorsChange} />
            </div>
          }
          {sections.title &&
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
          }
          {sections.axis &&
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
          }
          {sections.axis &&
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
          }
          {sections.legend && 
            <div label="Legend">
              <Switcher checked={!!this.state['legend.show']} onChange={() => this.handleStateChange('legend.show', !this.state['legend.show'])}>
                <span className="section-title">Legend</span>
              </Switcher>
              {this.state['legend.show'] && this.renderLegendSection()}
            </div>
          }
          {sections.gridline &&
            <div label="Gridline">
              <Switcher checked={!!this.state['grid.show']} onChange={() => this.handleStateChange('grid.show', !this.state['grid.show'])}>
                <span className="section-title">Gridline</span>
              </Switcher>
              {this.state['grid.show'] && this.renderGridSection()}
              <Switcher className="disabled" checked={!!this.state['subgrid.show']} onChange={() => this.handleStateChange('subgrid.show', !this.state['subgrid.show'])}>
                <span className="section-title">Subgrid</span>
              </Switcher>
              {this.state['subgrid.show'] && this.renderSubgridSection()}
            </div>
          }
          {sections.series &&
            <div label="Series">
              {this.renderSeriesSection()}
              <Switcher checked={!!this.state['series.points.show']} onChange={() => this.handleStateChange('series.points.show', !this.state['series.points.show'])} text={{ on: 'Show', off: 'Hide' }}>
                <span className="section-title">Points</span>
              </Switcher>
              {this.state['series.points.show'] && this.renderSeriesPointsSection()}
              <Switcher checked={!!this.state['series.label.show']} onChange={() => this.handleStateChange('series.label.show', !this.state['series.label.show'])} text={{ on: 'Show', off: 'Hide' }}>
                <span className="section-title">Data labels</span>
              </Switcher>
              {this.state['series.label.show'] && this.renderSeriesLabelsSection()}
              {(this.state.chart === 'heatmap' || this.state.chart === 'choropleth') &&
                <Switcher checked={!!this.state['series.slider.show']} onChange={() => this.handleStateChange('series.slider.show', !this.state['series.slider.show'])} text={{ on: 'Show', off: 'Hide' }}>
                  <span className="control-label">Slider</span>
                </Switcher>
              }
              <ButtonGroup
                items={stackedOptions}
                singleChoice
                groupName="stacked"
                title="Stacked"
                activeItem={stackedOptions.find(item => item.value === this.state['series.stacked'])}
                onChange={e => this.handleTextStateUpdate('series.stacked', e.target.value)}
              />
            </div>
          }
          {sections.tooltip &&
            <div label="Tooltip">
              {this.renderFontSize('Tooltip font', 'tooltip')}
              {this.renderFontStyle('Tooltip format', 'tooltip', false)}
              <div className="accordion__item__row">
                <ColorPicker key="tooltip.background" title="Tooltip background" initialColor={this.state['tooltip.background']} defaultColor={defaultColors.background} onChange={e => this.handleTextStateUpdate('tooltip.background', e.hex)} />
              </div>
              <div className="accordion__item__row">
                <ColorPicker key="tooltip.border" title="Tooltip border" initialColor={this.state['tooltip.border']} onChange={e => this.handleTextStateUpdate('tooltip.border', e.hex)} />
              </div>
              {this.state.chart === 'heatmap' &&
                <Switcher checked={!!this.state['tooltip.simpleTooltip']} onChange={() => this.handleStateChange('tooltip.simpleTooltip', !this.state['tooltip.simpleTooltip'])}>
                  <span className="control-label">Simple tooltip</span>
                </Switcher>
              }
            </div>
          }
          {sections.table &&
            <div label="Table">
              <Switcher checked={!!this.state['table.pagination.show']} onChange={() => this.handleStateChange('table.pagination.show', !this.state['table.pagination.show'])} text={{ on: 'Show', off: 'Hide' }}>
                <span className="section-title">Pagination</span>
              </Switcher>
              {this.state['table.pagination.show'] &&
                <div className="accordion__item__row">
                  <FormInput key="table-pagination" type="text" label="Pagination limit" name="table-pagination" value={this.state['table.pagination.limit']} onChange={e => this.handleTextStateUpdate('table.pagination.limit', e.target.value)} maxLength="2" />
                </div>
              }
              <Switcher checked={!!this.state['table.header.show']} onChange={() => this.handleStateChange('table.header.show', !this.state['table.header.show'])} text={{ on: 'Show', off: 'Hide' }}>
                <span className="section-title">Table header</span>
              </Switcher>
              {this.state['table.header.show'] &&
                <>
                {this.renderFontSize('Header font', 'table.header')}
                {this.renderFontStyle('Header format', 'table.header', true)}
                </>
              }
              <Switcher checked={!!this.state['table.body.show']} onChange={() => this.handleStateChange('table.body.show', !this.state['table.body.show'])} text={{ on: 'Show', off: 'Hide' }}>
                <span className="section-title">Table body</span>
              </Switcher>
              {this.state['table.body.show'] &&
                <>
                {this.renderFontSize('Body font', 'table.body')}
                {this.renderFontStyle('Body format', 'table.body', true)}
                <div className="accordion__item__row">
                  <ColorPicker title="Alternate row background" initialColor={this.state['table.body.row.alternate.color']} defaultColor={defaultColors.row}
                    onChange={e => {
                      this.handleTextStateUpdate('table.body.row.alternate.color', e.hex);
                      const hoverColor = this.generateHoverColor(e);
                      this.handleTextStateUpdate('table.body.row.hover.background', hoverColor);
                    }}
                  />
                </div>
                </>
              }
            </div>
          }
        </Accordion>
      </section>
    ); 
  }

  renderTabChart() {
    const css = getCSSRules(this.state);
    const title = (this.state['title.show'] && this.state['title.text']) ? this.state['title.text'] : false;
    const subtitle = (this.state['subtitle.show'] && this.state['subtitle.text']) ? this.state['subtitle.text'] : '';
    const legendAlignment = (this.state['legend.layout'] === 'top' || this.state['legend.layout'] === 'bottom')
      ? this.state['legend.position.horizontal'] : this.state['legend.position.vertical'];
    const legendOptions = { show: this.state['legend.show'], position: this.state['legend.layout'], alignment: legendAlignment };
    const data = this.state['series.label.show'] ? { labels: true } : false;
    const point = { show: this.state['series.points.show'], r: this.state['series.points.size'] };
    const prefix = this.state['general.prefix'] ? this.state['general.prefix'] : undefined;
    const suffix = this.state['general.suffix'] ? this.state['general.suffix'] : undefined;
    const paginationLimit = parseInt(this.state['table.pagination.limit']);
    const tablePagination = (this.state['table.pagination.show'] && paginationLimit) ? paginationLimit : undefined;
    return (
      <>
        <TabChart
          type={this.state.chart}
          colors={this.state.colors}
          legend={legendOptions}
          title={title}
          subtitle={subtitle}
          axis={getChartAxisOptions(this.state)}
          data={data}
          point={point}
          prefix={prefix}
          suffix={suffix}
          slider={this.state['series.slider.show']}
          simpleTooltip={this.state['tooltip.simpleTooltip']}
          sparkline={this.state['appearance.sparkline']}
          stacked={this.state['series.stacked']}
          pagination={tablePagination}
        />
        <style jsx global>{`
        .keen-theme-builder .keen-dataviz {
          ${css.chartBackground}
          ${css.chartBorder}
        }
        .keen-dataviz,
        .c3 svg {
          ${css.chartFont}
        }
        .keen-dataviz .keen-dataviz-title,
        .keen-theme-builder .keen-dataviz .keen-dataviz-metric-title {
          display: block;
          ${css.titleColor}
          ${css.titleTextAlign}
          ${css.titleFontFamily}
          ${css.titleFontSize}
          ${css.titleFontBold}
          ${css.titleFontItalic}
        }
        .keen-dataviz .keen-dataviz-subtitle,
        .keen-theme-builder .keen-dataviz .keen-dataviz-metric-subtitle {
          width: 100%;
          display: block;
          ${css.subtitleColor}
          ${css.subtitleTextAlign}
          ${css.subtitleFontFamily}
          ${css.subtitleFontSize}
          ${css.subtitleFontBold}
          ${css.subtitleFontItalic}
        }
        .keen-dataviz .c3-axis.c3-axis-y .tick text {
          ${css.axisYLabelColor}
          ${css.axisYLabelFont}
          ${css.axisYLabelFontSize}
          ${css.axisYLabelFontBold}
          ${css.axisYLabelFontItalic}
        }
        .keen-dataviz .c3-axis.c3-axis-x .tick text {
          ${css.axisXLabelColor}
          ${css.axisXLabelFont}
          ${css.axisXLabelFontSize}
          ${css.axisXLabelFontBold}
          ${css.axisXLabelFontItalic}
        }
        .keen-dataviz .keen-c3-legend .legend-item-text {
          ${css.legendFont}
          ${css.legendFontSize}
          ${css.legendFontBold}
          ${css.legendFontItalic}
          ${css.legendColor}
        }
        .keen-dataviz .c3-grid line,
        .keen-dataviz .chart-lines {
          ${css.gridLineColor}
        }
        .keen-theme-builder .keen-dataviz .c3-ygrid {
          ${css.gridLineShow}
        }
        .keen-theme-builder .keen-dataviz .c3-axis .c3-axis-y-label {
          ${css.axisYTitleFont}
          ${css.axisYTitleFontSize}
          ${css.axisYTitleFontBold}
          ${css.axisYTitleFontItalic}
          ${css.axisYTitleColor}
        }
        .keen-theme-builder .keen-dataviz .c3-axis .c3-axis-x-label {
          ${css.axisXTitleFont}
          ${css.axisXTitleFontSize}
          ${css.axisXTitleFontBold}
          ${css.axisXTitleFontItalic}
          ${css.axisXTitleColor}
        }
        .keen-theme-builder .keen-dataviz .c3-chart-texts .c3-text,
        .keen-theme-builder .keen-dataviz .c3-chart-arcs .c3-chart-arc text,
        .keen-theme-builder .keen-dataviz .c3-chart-arcs-gauge-min,
        .keen-theme-builder .keen-dataviz .c3-chart-arcs-gauge-max
        {
          ${css.seriesLabelFont}
          ${css.seriesLabelFontSize}
          ${css.seriesLabelFontBold}
          ${css.seriesLabelFontItalic}
          ${css.seriesLabelTextAlign}
          ${css.seriesLabelColor}
        }
        .keen-theme-builder .keen-dataviz .c3-chart-lines .c3-shape.c3-line {
          ${css.seriesLineThickness}
        }
        .keen-theme-builder .keen-dataviz .c3-tooltip {
          ${css.tooltipFont}
          ${css.tooltipFontSize}
          ${css.tooltipFontBold}
          ${css.tooltipFontItalic}
          ${css.tooltipColor}
          ${css.tooltipBackground}
          ${css.tooltipBorder}
        }
        .keen-theme-builder .keen-dataviz .keen-dataviz-metric,
        .keen-theme-builder .keen-dataviz .keen-dataviz-metric-value {
          ${css.chartFont}
          ${css.chartFontSize}
          ${css.chartFontBold}
          ${css.chartFontItalic}
          ${css.chartColor}
        }
        .keen-theme-builder .keen-dataviz-table th {
          ${css.tableHeaderFont}
          ${css.tableHeaderFontSize}
          ${css.tableHeaderFontBold}
          ${css.tableHeaderFontItalic}
          ${css.tableHeaderTextAlign}
          ${css.tableHeaderColor}
        }
        .keen-theme-builder .keen-dataviz-table tr td,
        .keen-theme-builder .keen-dataviz-table .table-data-row {
          ${css.tableBodyFont}
          ${css.tableBodyFontSize}
          ${css.tableBodyFontBold}
          ${css.tableBodyFontItalic}
          ${css.tableBodyTextAlign}
          ${css.tableBodyColor}
        }
        .keen-theme-builder .keen-dataviz-table .table-data-row:nth-child(even) td {
          ${css.tableBodyRowAltBackground}
        }
        .keen-theme-builder .keen-dataviz-table .table-data-row:hover td {
          ${css.tableBodyRowHoverBackground}
          color: inherit;
        }
        `}</style>
      </>
    )
  }

  renderMockUpSection() {
    return (
      <div className="builder__mockup">
        <h2 className="builder__header">Preview</h2>
        { !this.props.isDashboardBuilderActive && 
        <Tabs>
          <TabList>
            <Tab>Chart</Tab>
            <Tab>CSS</Tab>
            <Tab>Javascript</Tab>
          </TabList>
          <TabPanel>
            {this.renderTabChart()}
          </TabPanel>
          <TabPanel>
            <CodeSnippet data={this.state} type="css" />
          </TabPanel>
          <TabPanel>
            <CodeSnippet data={this.state} type="js" />
          </TabPanel>
        </Tabs>
        }
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
  options: PropTypes.object.isRequired,
  isDashboardBuilderActive: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Builder.defaultProps = {
  options: defaultState,
  isDashboardBuilderActive: false,
  onChange: () => {},
}; 