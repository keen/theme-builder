import set from 'lodash.set';
import {
  horizontalPositionOptions,
  verticalPositionOptions,
  axisLabelHeight,
  colorPickerDefaultOption,
  defaultState,
  accordionSection,
} from './consts';

const mapTextAnchor = (value) => {
  switch (value) {
    case 'left':
      return 'end';
    case 'right':
      return 'start';
    default:
      return 'middle';
  }
}

export function getCSSRules(state) {
  return {
    chartBackground : state['appearance.background'] ? `background-color: ${state['appearance.background']};` : 'background-color: inherit;',
    chartBorder : state['appearance.border'] ? `border-color: ${state['appearance.border']};` : 'border-color: inherit;',
    chartFont : state['appearance.font.family'] ? `font-family: "${state['appearance.font.family']}";` : 'font-family: inherit;',
    titleTextAlign : `text-align: ${state['title.textAlign']};`,
    titleColor : state['title.color'] ? `color: ${state['title.color']};` : 'color: inherit;',
    titleFontFamily : state['title.font.family'] ? `font-family: "${state['title.font.family']}";` : 'font-family: inherit;',
    titleFontSize : state['title.font.size'] !== 'auto' ? `font-size: ${state['title.font.size']}px;` : 'font-size: inherit;',
    titleFontBold : state['title.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    titleFontItalic : state['title.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    subtitleTextAlign : `text-align: ${state['subtitle.textAlign']};`,
    subtitleColor : state['subtitle.color'] ? `color: ${state['subtitle.color']};` : 'color: inherit;',
    subtitleFontFamily : state['subtitle.font.family'] ? `font-family: "${state['subtitle.font.family']}";` : 'font-family: inherit;',
    subtitleFontSize : state['subtitle.font.size'] !== 'auto' ? `font-size: ${state['subtitle.font.size']}px;` : 'font-size: inherit;',
    subtitleFontBold : state['subtitle.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    subtitleFontItalic : state['subtitle.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisYTitleFont : state['axis.vertical.title.font.family'] ? `font-family: "${state['axis.vertical.title.font.family']}";` : 'font-family: inherit;',
    axisYTitleFontSize : state['axis.vertical.title.font.size'] !== 'auto' ? `font-size: ${state['axis.vertical.title.font.size']}px;` : 'font-size: inherit;',
    axisYTitleFontBold : state['axis.vertical.title.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisYTitleFontItalic : state['axis.vertical.title.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisYTitleColor : state['axis.vertical.title.color'] ? `fill: ${state['axis.vertical.title.color']};` : 'fill: inherit;',
    axisYLabelFont : state['axis.vertical.label.font.family'] ? `font-family: "${state['axis.vertical.label.font.family']}";` : 'font-family: inherit;',
    axisYLabelFontSize : state['axis.vertical.label.font.size'] !== 'auto' ? `font-size: ${state['axis.vertical.label.font.size']}px;` : 'font-size: inherit;',
    axisYLabelFontBold : state['axis.vertical.label.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisYLabelFontItalic : state['axis.vertical.label.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisYLabelColor : state['axis.vertical.label.color'] ? `fill: ${state['axis.vertical.label.color']};` : 'fill: inherit;',
    axisXTitleFont : state['axis.horizontal.title.font.family'] ? `font-family: "${state['axis.horizontal.title.font.family']}";` : 'font-family: inherit;',
    axisXTitleFontSize : state['axis.horizontal.title.font.size'] !== 'auto' ? `font-size: ${state['axis.horizontal.title.font.size']}px;` : 'font-size: inherit;',
    axisXTitleFontBold : state['axis.horizontal.title.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisXTitleFontItalic : state['axis.horizontal.title.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisXTitleColor : state['axis.horizontal.title.color'] ? `fill: ${state['axis.horizontal.title.color']};` : 'fill: inherit;',
    axisXLabelFont : state['axis.horizontal.label.font.family'] ? `font-family: "${state['axis.horizontal.label.font.family']}";` : 'font-family: inherit;',
    axisXLabelFontSize : state['axis.horizontal.label.font.size'] !== 'auto' ? `font-size: ${state['axis.horizontal.label.font.size']}px;` : 'font-size: inherit;',
    axisXLabelFontBold : state['axis.horizontal.label.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisXLabelFontItalic : state['axis.horizontal.label.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisXLabelColor : state['axis.horizontal.label.color'] ? `fill: ${state['axis.horizontal.label.color']};` : 'fill: inherit;',
    legendFont : state['legend.font.family'] ? `font-family: "${state['legend.font.family']}";` : 'font-family: inherit;',
    legendFontSize : state['legend.font.size'] !== 'auto' ? `font-size: ${state['legend.font.size']}px;` : 'font-size: inherit;',
    legendFontBold : state['legend.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    legendFontItalic : state['legend.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    legendColor : state['legend.color'] ? `color: ${state['legend.color']};` : 'color: inherit;',
    gridLineShow : state['grid.show'] ? 'stroke-opacity: 1;' : 'stroke-opacity: 0;',
    gridLineColor : state['grid.lines.color'] ? `stroke: ${state['grid.lines.color']}` : 'stroke: inherit;',
    subgridLineColor : state['subgrid.lines.color'] ? `stroke: ${state['subgrid.lines.count']}` : 'stroke: inherit;',
    seriesLabelFont : state['series.label.font.family'] ? `font-family: "${state['series.label.font.family']}";` : 'font-family: inherit;',
    seriesLabelFontSize : state['series.label.font.size'] !== 'auto' ? `font-size: ${state['series.label.font.size']}px;` : 'font-size: inherit;',
    seriesLabelFontBold : state['series.label.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    seriesLabelFontItalic : state['series.label.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    seriesLabelColor : state['series.label.color'] ? `fill: ${state['series.label.color']} !important;` : 'fill: inherit;',
    seriesLabelTextAlign: `text-anchor: ${mapTextAnchor(state['series.label.textAlign'])};`,
    seriesLineThickness: `stroke-width: ${state['series.line']}px;`,
    tooltipFont : state['tooltip.font.family'] ? `font-family: "${state['tooltip.font.family']}";` : 'font-family: inherit;',
    tooltipFontSize : state['tooltip.font.size'] !== 'auto' ? `font-size: ${state['tooltip.font.size']}px;` : 'font-size: inherit;',
    tooltipFontBold : state['tooltip.font.bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    tooltipFontItalic : state['tooltip.font.italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    tooltipColor : state['tooltip.color'] ? `color: ${state['tooltip.color']};` : 'color: inherit;',
    tooltipBackground : state['tooltip.background'] ? `background-color: ${state['tooltip.background']};` : '',
    tooltipBorder : (state['tooltip.border'] && state['tooltip.border'] !== colorPickerDefaultOption) ? `border-color: ${state['tooltip.border']};` : '',
  }
}

export function getChartAxisOptions(state) {
  const options = {};
  const verticalAlignmentOptions = verticalPositionOptions.map(option => option.value);
  const horizontalAlignmentOptions = horizontalPositionOptions.map(option => option.value);
  if (state['axis.vertical.title.show'] && state['axis.vertical.title.text']) {
    set(options, 'y.label.text', state['axis.vertical.title.text']);
  }
  if (state['axis.horizontal.title.show'] && state['axis.horizontal.title.text']) {
    set(options, 'x.label.text', state['axis.horizontal.title.text']);
  }
  if (state['axis.vertical.title.textAlign']) {
    const verticalAlignment = verticalAlignmentOptions.includes(state['axis.vertical.title.textAlign']) ? state['axis.vertical.title.textAlign'] : verticalAlignmentOptions[1];
    set(options, 'y.label.position', `outer-${verticalAlignment}`);
  }
  if (state['axis.horizontal.title.textAlign']) {
    const horizontalAlignment = horizontalAlignmentOptions.includes(state['axis.horizontal.title.textAlign']) ? state['axis.horizontal.title.textAlign'] : horizontalAlignmentOptions[0];
    set(options, 'x.label.position', `outer-${horizontalAlignment}`);
  }
  if (state['axis.horizontal.font.size'] !== 'auto') {
    set(options, 'x.height', axisLabelHeight);
  }
  if (state['axis.vertical.font.size'] !== 'auto') {
    set(options, 'y.height', axisLabelHeight);
  }
  return options;
}

function limitDefaultState(state = {}, ...keys) {
  if (!Array.isArray(keys)) return;
  let tempObj = { ...state };
  keys.forEach(key => {
    const { [key]:omitted, ...results } = tempObj;
    tempObj = { ...results };
  });
  return tempObj;
}

export function removeKeysFromState(state, ...sections) {
  if (!Array.isArray(sections)) return;
  if (sections.length > 1) {
    let tempState = { ...state };
    sections.forEach((item) => {
      tempState = {...removeKeysFromState(tempState, item)};
    })
    return tempState;
  }
  switch (sections[0]) {
    case 'axis':
      return limitDefaultState(state,
        'axis.vertical.title.show',
        'axis.vertical.title.text',
        'axis.vertical.title.textAlign',
        'axis.vertical.title.color',
        'axis.vertical.title.font.family',
        'axis.vertical.title.font.size',
        'axis.vertical.title.font.bold',
        'axis.vertical.title.font.italic',
        'axis.vertical.label.show',
        'axis.vertical.label.color',
        'axis.vertical.label.font.family',
        'axis.vertical.label.font.size',
        'axis.vertical.label.font.bold',
        'axis.vertical.label.font.italic',
        'axis.horizontal.title.show',
        'axis.horizontal.title.text',
        'axis.horizontal.title.textAlign',
        'axis.horizontal.title.color',
        'axis.horizontal.title.font.family',
        'axis.horizontal.title.font.size',
        'axis.horizontal.title.font.bold',
        'axis.horizontal.title.font.italic',
        'axis.horizontal.label.show',
        'axis.horizontal.label.color',
        'axis.horizontal.label.font.family',
        'axis.horizontal.label.font.size',
        'axis.horizontal.label.font.bold',
        'axis.horizontal.label.font.italic'
      );
    case 'legend':
      return limitDefaultState(state,
        'legend.show',
        'legend.color',
        'legend.font.family',
        'legend.font.size',
        'legend.font.bold',
        'legend.font.italic',
        'legend.layout',
        'legend.position.horizontal',
        'legend.position.vertical'
      );
    case 'grid':
      return limitDefaultState(state,
        'grid.show',
        'grid.lines.color',
        'grid.lines.count',
        'subgrid.show',
        'subgrid.lines.color',
        'subgrid.lines.count'
      );
      case 'series':
        return limitDefaultState(state,
          'series.label.show',
          'series.label.textAlign',
          'series.label.color',
          'series.label.font.family',
          'series.label.font.size',
          'series.label.font.bold',
          'series.label.font.italic',
          'series.label.textAlign',
          'series.line',
          'series.points.show',
          'series.points.size'
        );
      case 'tooltip':
        return limitDefaultState(state,
          'tooltip.color',
          'tooltip.font.family',
          'tooltip.font.size',
          'tooltip.font.bold',
          'tooltip.font.italic',
          'tooltip.background',
          'tooltip.border'
        );
    default:
      return state;
  }
}

export function getAccordionSections(type = '') {
  switch (type) {
    case 'table':
      return {
        ...accordionSection,
        axis: false,
        legend: false,
        gridline: false,
        series: false,
        tooltip: false,
      }
      case 'pie':
      case 'donut':
      case 'gauge':
        return {
          ...accordionSection,
          axis: false,
          legend: false,
          gridline: false,
          series: false,
        }
    case 'heatmap':
    case 'choropleth':
      return {
        ...accordionSection,
        axis: false,
        series: false,
        legend: false,
        gridline: false,
      }
    case 'funnel':
    case 'funnel-3d':
    case 'horizontal-funnel':
    case 'horizontal-funnel-3d':
      return {
        ...accordionSection,
        series: false,
        legend: false,
        gridline: false,
        tooltip: false,
      }
    default:
      return accordionSection;
  }
}

export function getDefaultState(type = '') {
  let state = {};
  switch (type) {
    case 'table':
      state = removeKeysFromState(defaultState, 'axis', 'legend', 'grid', 'series', 'tooltip');
      return {
        ...state,
      }
      case 'pie':
      case 'donut':
      case 'gauge':
        state = removeKeysFromState(defaultState, 'axis', 'legend', 'grid', 'series');
        return {
          ...state,
        }
    case 'heatmap':
    case 'choropleth':
      state = removeKeysFromState(defaultState, 'axis', 'series', 'legend', 'gridline');
      return {
        ...state,
      }
    case 'funnel':
    case 'funnel-3d':
    case 'horizontal-funnel':
    case 'horizontal-funnel-3d':
      state = removeKeysFromState(defaultState, 'series', 'legend', 'grid', 'tooltip');
      return {
        ...state,
      }
    default:
      return {
        ...defaultState,
      };
  }
}
