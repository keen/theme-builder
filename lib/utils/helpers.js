import set from 'lodash.set';
import {
  horizontalPositionOptions,
  verticalPositionOptions,
  axisLabelHeight,
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
    seriesLabelColor : state['series.label.color'] ? `fill: ${state['series.label.color']};` : 'fill: inherit;',
    seriesLabelTextAlign: `text-anchor: ${mapTextAnchor(state['series.label.textAlign'])};`,
    seriesLineThickness: `stroke-width: ${state['series.line']}px;`,
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