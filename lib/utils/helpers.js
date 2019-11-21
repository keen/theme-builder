import set from 'lodash.set';
import { stripIndent } from 'common-tags';
import {
  horizontalPositionOptions,
  verticalPositionOptions,
  axisLabelHeight,
  colorPickerDefaultOption,
  defaultState,
  accordionSection,
  funnels,
  funnelCountingMethodOptions,
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
    chartBackground: state['appearance_background'] ? `background-color: ${state['appearance_background']};` : 'background-color: inherit;',
    chartBorder: state['appearance_border'] ? `border-color: ${state['appearance_border']};` : 'border-color: inherit;',
    chartFont: state['appearance_font_family'] ? `font-family: "${state['appearance_font_family']}";` : 'font-family: inherit;',
    chartFontSize: state['appearance_font_size'] !== 'auto' ? `font-size: ${state['appearance_font_size']}px;` : 'font-size: inherit;',
    chartFontBold: state['appearance_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    chartFontItalic: state['appearance_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    chartColor: state['appearance_color'] ? `color: ${state['appearance_color']};` : 'color: inherit;',
    titleTextAlign: `text-align: ${state['title_textAlign']};`,
    titleColor: state['title_color'] ? `color: ${state['title_color']};` : 'color: inherit;',
    titleFontFamily: state['title_font_family'] ? `font-family: "${state['title_font_family']}";` : 'font-family: inherit;',
    titleFontSize: state['title_font_size'] !== 'auto' ? `font-size: ${state['title_font_size']}px;` : 'font-size: inherit;',
    titleFontBold: state['title_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    titleFontItalic: state['title_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    subtitleTextAlign: `text-align: ${state['subtitle_textAlign']};`,
    subtitleColor: state['subtitle_color'] ? `color: ${state['subtitle_color']};` : 'color: inherit;',
    subtitleFontFamily: state['subtitle_font_family'] ? `font-family: "${state['subtitle_font_family']}";` : 'font-family: inherit;',
    subtitleFontSize: state['subtitle_font_size'] !== 'auto' ? `font-size: ${state['subtitle_font_size']}px;` : 'font-size: inherit;',
    subtitleFontBold: state['subtitle_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    subtitleFontItalic: state['subtitle_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisYTitleFont: state['axis_vertical_title_font_family'] ? `font-family: "${state['axis_vertical_title_font_family']}";` : 'font-family: inherit;',
    axisYTitleFontSize: state['axis_vertical_title_font_size'] !== 'auto' ? `font-size: ${state['axis_vertical_title_font_size']}px;` : 'font-size: inherit;',
    axisYTitleFontBold: state['axis_vertical_title_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisYTitleFontItalic: state['axis_vertical_title_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisYTitleColor: state['axis_vertical_title_color'] ? `fill: ${state['axis_vertical_title_color']};` : 'fill: inherit;',
    axisYLabelFont: state['axis_vertical_label_font_family'] ? `font-family: "${state['axis_vertical_label_font_family']}";` : 'font-family: inherit;',
    axisYLabelFontSize: state['axis_vertical_label_font_size'] !== 'auto' ? `font-size: ${state['axis_vertical_label_font_size']}px;` : 'font-size: inherit;',
    axisYLabelFontBold: state['axis_vertical_label_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisYLabelFontItalic: state['axis_vertical_label_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisYLabelColor: state['axis_vertical_label_color'] ? `fill: ${state['axis_vertical_label_color']};` : 'fill: inherit;',
    axisXTitleFont: state['axis_horizontal_title_font_family'] ? `font-family: "${state['axis_horizontal_title_font_family']}";` : 'font-family: inherit;',
    axisXTitleFontSize: state['axis_horizontal_title_font_size'] !== 'auto' ? `font-size: ${state['axis_horizontal_title_font_size']}px;` : 'font-size: inherit;',
    axisXTitleFontBold: state['axis_horizontal_title_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisXTitleFontItalic: state['axis_horizontal_title_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisXTitleColor: state['axis_horizontal_title_color'] ? `fill: ${state['axis_horizontal_title_color']};` : 'fill: inherit;',
    axisXLabelFont: state['axis_horizontal_label_font_family'] ? `font-family: "${state['axis_horizontal_label_font_family']}";` : 'font-family: inherit;',
    axisXLabelFontSize: state['axis_horizontal_label_font_size'] !== 'auto' ? `font-size: ${state['axis_horizontal_label_font_size']}px;` : 'font-size: inherit;',
    axisXLabelFontBold: state['axis_horizontal_label_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    axisXLabelFontItalic: state['axis_horizontal_label_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    axisXLabelColor: state['axis_horizontal_label_color'] ? `fill: ${state['axis_horizontal_label_color']};` : 'fill: inherit;',
    legendFont: state['legend_font_family'] ? `font-family: "${state['legend_font_family']}";` : 'font-family: inherit;',
    legendFontSize: state['legend_font_size'] !== 'auto' ? `font-size: ${state['legend_font_size']}px;` : 'font-size: inherit;',
    legendFontBold: state['legend_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    legendFontItalic: state['legend_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    legendColor: state['legend_color'] ? `color: ${state['legend_color']};` : 'color: inherit;',
    gridLineShow: state['grid_show'] ? 'stroke-opacity: 1;' : 'stroke-opacity: 0;',
    gridLineColor: state['grid_lines_color'] ? `stroke: ${state['grid_lines_color']}` : 'stroke: inherit;',
    subgridLineColor: state['subgrid_lines_color'] ? `stroke: ${state['subgrid_lines_count']}` : 'stroke: inherit;',
    seriesLabelFont: state['series_label_font_family'] ? `font-family: "${state['series_label_font_family']}";` : 'font-family: inherit;',
    seriesLabelFontSize: state['series_label_font_size'] !== 'auto' ? `font-size: ${state['series_label_font_size']}px;` : 'font-size: inherit;',
    seriesLabelFontBold: state['series_label_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    seriesLabelFontItalic: state['series_label_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    seriesLabelColor: state['series_label_color'] ? `fill: ${state['series_label_color']} !important;` : 'fill: inherit;',
    seriesLabelTextAlign: `text-anchor: ${mapTextAnchor(state['series_label_textAlign'])} !important;`,
    seriesLineThickness: `stroke-width: ${state['series_line']}px;`,
    tooltipFont: state['tooltip_font_family'] ? `font-family: "${state['tooltip_font_family']}";` : 'font-family: inherit;',
    tooltipFontSize: state['tooltip_font_size'] !== 'auto' ? `font-size: ${state['tooltip_font_size']}px;` : 'font-size: inherit;',
    tooltipFontBold: state['tooltip_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    tooltipFontItalic: state['tooltip_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    tooltipColor: state['tooltip_color'] ? `color: ${state['tooltip_color']};` : 'color: inherit;',
    tooltipBackground: state['tooltip_background'] ? `background-color: ${state['tooltip_background']};` : '',
    tooltipBorder: (state['tooltip_border'] && state['tooltip_border'] !== colorPickerDefaultOption) ? `border-color: ${state['tooltip_border']};` : '',
    tableHeaderFont: state['table_header_font_family'] ? `font-family: "${state['table_header_font_family']}";` : 'font-family: inherit;',
    tableHeaderFontSize: state['table_header_font_size'] !== 'auto' ? `font-size: ${state['table_header_font_size']}px;` : 'font-size: inherit;',
    tableHeaderFontBold: state['table_header_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    tableHeaderFontItalic: state['table_header_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    tableHeaderTextAlign: `text-align: ${state['table_header_textAlign']};`,
    tableHeaderColor: state['table_header_color'] ? `color: ${state['table_header_color']};` : 'color: inherit;',
    tableBodyFont: state['table_body_font_family'] ? `font-family: "${state['table_body_font_family']}";` : 'font-family: inherit;',
    tableBodyFontSize: state['table_body_font_size'] !== 'auto' ? `font-size: ${state['table_body_font_size']}px;` : 'font-size: inherit;',
    tableBodyFontBold: state['table_body_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    tableBodyFontItalic: state['table_body_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
    tableBodyTextAlign: `text-align: ${state['table_body_textAlign']};`,
    tableBodyColor: state['table_body_color'] ? `color: ${state['table_body_color']};` : 'color: inherit;',
    tableBodyRowAltBackground: state['table_body_row_alternate_color'] ? `background-color: ${state['table_body_row_alternate_color']};` : 'background-color: inherit;',
    tableBodyRowHoverBackground: state['table_body_row_hover_background'] ? `background-color: ${state['table_body_row_hover_background']};` : 'background-color: inherit;',
    funnelLabelTextAlign: `text-anchor: ${mapTextAnchor(state['funnel_label_textAlign'])} !important;`,
    funnelLabelColor: state['funnel_label_color'] ? `fill: ${state['funnel_label_color']};` : 'fill: inherit;',
    funnelLabelFontFamily: state['funnel_label_font_family'] ? `font-family: "${state['funnel_label_font_family']}";` : 'font-family: inherit;',
    funnelLabelFontSize: state['funnel_label_font_size'] !== 'auto' ? `font-size: ${state['funnel_label_font_size']}px;` : 'font-size: inherit;',
    funnelLabelFontBold: state['funnel_label_font_bold'] ? 'font-weight: bold;' : 'font-weight: inherit;',
    funnelLabelFontItalic: state['funnel_label_font_italic'] ? 'font-style: italic;' : 'font-style: inherit;',
  }
}

export function getChartAxisOptions(state) {
  const options = {};
  const verticalAlignmentOptions = verticalPositionOptions.map(option => option.value);
  const horizontalAlignmentOptions = horizontalPositionOptions.map(option => option.value);
  if (state['axis_vertical_title_show'] && state['axis_vertical_title_text']) {
    set(options, 'y.label.text', state['axis_vertical_title_text']);
  }
  if (state['axis_horizontal_title_show'] && state['axis_horizontal_title_text']) {
    set(options, 'x.label.text', state['axis_horizontal_title_text']);
  }
  if (state['axis_vertical_title_textAlign']) {
    const verticalAlignment = verticalAlignmentOptions.includes(state['axis_vertical_title_textAlign']) ? state['axis_vertical_title_textAlign'] : verticalAlignmentOptions[1];
    set(options, 'y.label.position', `outer-${verticalAlignment}`);
  }
  if (state['axis_horizontal_title_textAlign']) {
    const horizontalAlignment = horizontalAlignmentOptions.includes(state['axis_horizontal_title_textAlign']) ? state['axis_horizontal_title_textAlign'] : horizontalAlignmentOptions[0];
    set(options, 'x.label.position', `outer-${horizontalAlignment}`);
  }
  if (state['axis_horizontal_font_size'] !== 'auto') {
    set(options, 'x.height', axisLabelHeight);
  }
  if (state['axis_vertical_font_size'] !== 'auto') {
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

function removeKeysFromState(state, ...sections) {
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
        'axis_vertical_title_show',
        'axis_vertical_title_text',
        'axis_vertical_title_textAlign',
        'axis_vertical_title_color',
        'axis_vertical_title_font_family',
        'axis_vertical_title_font_size',
        'axis_vertical_title_font_bold',
        'axis_vertical_title_font_italic',
        'axis_vertical_label_show',
        'axis_vertical_label_color',
        'axis_vertical_label_font_family',
        'axis_vertical_label_font_size',
        'axis_vertical_label_font_bold',
        'axis_vertical_label_font_italic',
        'axis_horizontal_title_show',
        'axis_horizontal_title_text',
        'axis_horizontal_title_textAlign',
        'axis_horizontal_title_color',
        'axis_horizontal_title_font_family',
        'axis_horizontal_title_font_size',
        'axis_horizontal_title_font_bold',
        'axis_horizontal_title_font_italic',
        'axis_horizontal_label_show',
        'axis_horizontal_label_color',
        'axis_horizontal_label_font_family',
        'axis_horizontal_label_font_size',
        'axis_horizontal_label_font_bold',
        'axis_horizontal_label_font_italic'
      );
    case 'legend':
      return limitDefaultState(state,
        'legend_show',
        'legend_color',
        'legend_font_family',
        'legend_font_size',
        'legend_font_bold',
        'legend_font_italic',
        'legend_layout',
        'legend_position_horizontal',
        'legend_position_vertical'
      );
    case 'grid':
      return limitDefaultState(state,
        'grid_show',
        'grid_lines_color',
        'grid_lines_count',
        'subgrid_show',
        'subgrid_lines_color',
        'subgrid_lines_count'
      );
      case 'series':
        return limitDefaultState(state,
          'series_label_show',
          'series_label_textAlign',
          'series_label_color',
          'series_label_font_family',
          'series_label_font_size',
          'series_label_font_bold',
          'series_label_font_italic',
          'series_label_textAlign',
          'series_line',
          'series_points_show',
          'series_points_size'
        );
      case 'tooltip':
        return limitDefaultState(state,
          'tooltip_color',
          'tooltip_font_family',
          'tooltip_font_size',
          'tooltip_font_bold',
          'tooltip_font_italic',
          'tooltip_background',
          'tooltip_border'
        );
      case 'table':
        return limitDefaultState(state,
          'table_pagination_show',
          'table_pagination_limit',
          'table_header_show',
          'table_header_textAlign',
          'table_header_color',
          'table_header_font_family',
          'table_header_font_size',
          'table_header_font_bold',
          'table_header_font_italic',
          'table_body_show',
          'table_body_textAlign',
          'table_body_color',
          'table_body_font_family',
          'table_body_font_size',
          'table_body_font_bold',
          'table_body_font_italic',
          'table_body_row_alternate_color',
          'table_body_row_hover_background',
          );
      case 'funnel':
        return limitDefaultState(state,
          'funnel_lines',
          'funnel_results',
          'funnel_percents_show',
          'funnel_percents_count',
          'funnel_percents_decimals',
          'funnel_hover',
          'funnel_margin',
          'funnel_minimal_size',
          'funnel_effect3d',
          'funnel_label_textAlign',
          'funnel_label_color',
          'funnel_label_font_family',
          'funnel_label_font_size',
          'funnel_label_font_bold',
          'funnel_label_font_italic',
          );
    default:
      return state;
  }
}

export function getAccordionSections(type = '') {
  switch (type) {
    case 'bar':
    case 'horizontal-bar':
    case 'area':
    case 'line':
    case 'spline':
    case 'area-spline':
    case 'step':
    case 'area-step':
      return {
        ...accordionSection,
        table: false,
        funnel: false
      }
    case 'table':
      return {
        ...accordionSection,
        axis: false,
        legend: false,
        gridline: false,
        series: false,
        tooltip: false,
        funnel: false,
      }
    case 'metric':
      return {
        ...accordionSection,
        axis: false,
        legend: false,
        gridline: false,
        series: false,
        tooltip: false,
        table: false,
        funnel: false,
      }
    case 'pie':
    case 'donut':
      return {
        ...accordionSection,
        axis: false,
        gridline: false,
        table: false,
        funnel: false,
      }
    case 'gauge':
      return {
        ...accordionSection,
        axis: false,
        gridline: false,
        legend: false,
        table: false,
        funnel: false,
      }
    case 'heatmap':
    case 'choropleth':
      return {
        ...accordionSection,
        axis: false,
        series: false,
        legend: false,
        gridline: false,
        table: false,
        funnel: false,
      }
    case 'funnel':
    case 'funnel-3d':
    case 'horizontal-funnel':
    case 'horizontal-funnel-3d':
      return {
        ...accordionSection,
        axis: false,
        series: false,
        legend: false,
        gridline: false,
        tooltip: false,
        table: false,
      }
    default:
      return accordionSection;
  }
}

export function getDefaultState(type = '') {
  let state = {};
  switch (type) {
    case 'bar':
    case 'horizontal-bar':
    case 'area':
    case 'line':
    case 'spline':
    case 'area-spline':
    case 'step':
    case 'area-step':
      state = removeKeysFromState(defaultState, 'table', 'funnel');
      return {
        ...state,
      }
    case 'table':
      state = removeKeysFromState(defaultState, 'axis', 'legend', 'grid', 'series', 'tooltip', 'funnel');
      return {
        ...state,
      }
    case 'metric':
      state = removeKeysFromState(defaultState, 'axis', 'legend', 'grid', 'series', 'tooltip', 'table', 'funnel');
      return {
        ...state,
      }
    case 'pie':
    case 'donut':
    case 'gauge':
      state = removeKeysFromState(defaultState, 'axis', 'grid', 'table', 'funnel');
      return {
        ...state,
        'series_label_show': true,
      }
    case 'gauge':
      state = removeKeysFromState(defaultState, 'axis', 'grid', 'legend', 'table', 'funnel');
      return {
        ...state,
      }
    case 'heatmap':
    case 'choropleth':
      state = removeKeysFromState(defaultState, 'axis', 'series', 'legend', 'gridline', 'table', 'funnel');
      return {
        ...state,
      }
    case 'funnel':
    case 'funnel-3d':
    case 'horizontal-funnel':
    case 'horizontal-funnel-3d':
      state = removeKeysFromState(defaultState, 'series', 'legend', 'grid', 'tooltip', 'table', 'axis');
      return {
        ...state,
      }
    default:
      return {
        ...defaultState,
      };
  }
}

export function getCSSCode(data, containerId) {
  const css = getCSSRules(data);
  const container = containerId ? `#${containerId}` : '.keen-theme-builder';
  return stripIndent`
    ${container} .keen-dataviz {
      ${css.chartBackground}
      ${css.chartBorder}
    }
    ${container} .chart-title,
    ${container} .chart-subtitle {
      ${css.chartBackground}
    }
    ${container} .keen-dataviz,
    ${container} .c3 svg {
      ${css.chartFont}
    }
    ${container} .keen-dataviz .keen-dataviz-title,
    ${container} .keen-dataviz .keen-dataviz-metric-title,
    ${container} .chart-title input {
      display: block;
      ${css.titleColor}
      ${css.titleTextAlign}
      ${css.titleFontFamily}
      ${css.titleFontSize}
      ${css.titleFontBold}
      ${css.titleFontItalic}
    }
    ${container} .keen-dataviz .keen-dataviz-subtitle,
    ${container} .keen-dataviz .keen-dataviz-metric-subtitle,
    ${container} .chart-subtitle input {
      width: 100%;
      display: block;
      ${css.subtitleColor}
      ${css.subtitleTextAlign}
      ${css.subtitleFontFamily}
      ${css.subtitleFontSize}
      ${css.subtitleFontBold}
      ${css.subtitleFontItalic}
    }
    ${container} .keen-dataviz .c3-axis.c3-axis-y .tick text {
      ${css.axisYLabelColor}
      ${css.axisYLabelFont}
      ${css.axisYLabelFontSize}
      ${css.axisYLabelFontBold}
      ${css.axisYLabelFontItalic}
    }
    ${container} .keen-dataviz .c3-axis.c3-axis-x .tick text {
      ${css.axisXLabelColor}
      ${css.axisXLabelFont}
      ${css.axisXLabelFontSize}
      ${css.axisXLabelFontBold}
      ${css.axisXLabelFontItalic}
    }
    ${container} .keen-dataviz .keen-c3-legend .legend-item-text {
      ${css.legendFont}
      ${css.legendFontSize}
      ${css.legendFontBold}
      ${css.legendFontItalic}
      ${css.legendColor}
    }
    ${container} .keen-dataviz .c3-grid line,
    ${container} .keen-dataviz .chart-lines {
      ${css.gridLineColor}
    }
    ${container} .keen-dataviz .c3-ygrid {
      ${css.gridLineShow}
    }
    ${container} .keen-dataviz .c3-axis .c3-axis-y-label {
      ${css.axisYTitleFont}
      ${css.axisYTitleFontSize}
      ${css.axisYTitleFontBold}
      ${css.axisYTitleFontItalic}
      ${css.axisYTitleColor}
    }
    ${container} .keen-dataviz .c3-axis .c3-axis-x-label {
      ${css.axisXTitleFont}
      ${css.axisXTitleFontSize}
      ${css.axisXTitleFontBold}
      ${css.axisXTitleFontItalic}
      ${css.axisXTitleColor}
    }
    ${container} .keen-dataviz .c3-chart-texts .c3-text {
      ${css.seriesLabelFont}
      ${css.seriesLabelFontSize}
      ${css.seriesLabelFontBold}
      ${css.seriesLabelFontItalic}
      ${css.seriesLabelTextAlign}
      ${css.seriesLabelColor}
    }
    ${container} .keen-dataviz .c3-chart-lines .c3-shape.c3-line {
      ${css.seriesLineThickness}
    }
    ${container} .keen-dataviz .c3-tooltip {
      ${css.tooltipFont}
      ${css.tooltipFontSize}
      ${css.tooltipFontBold}
      ${css.tooltipFontItalic}
      ${css.tooltipColor}
      ${css.tooltipBackground}
      ${css.tooltipBorder}
    }
    ${container} .keen-dataviz .keen-dataviz-metric,
    ${container} .keen-dataviz .keen-dataviz-metric-value {
      ${css.chartFont}
      ${css.chartFontSize}
      ${css.chartFontBold}
      ${css.chartFontItalic}
      ${css.chartColor}
    }
    ${container} .keen-dataviz-table th {
      ${css.tableHeaderFont}
      ${css.tableHeaderFontSize}
      ${css.tableHeaderFontBold}
      ${css.tableHeaderFontItalic}
      ${css.tableHeaderTextAlign}
      ${css.tableHeaderColor}
    }
    ${container} .keen-dataviz-table tr td,
    ${container} .keen-dataviz-table .table-data-row {
      ${css.tableBodyFont}
      ${css.tableBodyFontSize}
      ${css.tableBodyFontBold}
      ${css.tableBodyFontItalic}
      ${css.tableBodyTextAlign}
      ${css.tableBodyColor}
    }
    ${container} .keen-dataviz-table .table-data-row:nth-child(even) td {
      ${css.tableBodyRowAltBackground}
    }
    ${container} .keen-dataviz-table .table-data-row:hover td {
      ${css.tableBodyRowHoverBackground}
      color: inherit;
    }
    ${container} .keen-dataviz-rendering .text-label {
      display: block;
      ${css.funnelLabelColor}
      ${css.funnelLabelTextAlign}
      ${css.funnelLabelFontFamily}
      ${css.funnelLabelFontSize}
      ${css.funnelLabelFontBold}
      ${css.funnelLabelFontItalic}
    }
  `; 
}

export function getJSCode(data, renderObject) {
  const chartType = data.chart !== 'default' ? data.chart : undefined;
  const colors = data.colors || [];
  const title = (data['title_show'] && data['title_text']) ? data['title_text'] : false;
  const subtitle = (data['subtitle_show'] && data['subtitle_text']) ? data['subtitle_text'] : undefined;
  const legendOptions = data['legend_show'] ? { show: data['legend_show'], position: data['legend_layout']} : { show: data['legend_show']};
  const axisOptions = getChartAxisOptions(data);
  const pointOptions = data['series_points_show'] ? { show: data['series_points_show'], r: data['series_points_size'] } : { show: data['series_points_show'] };
  const dataOptions = { labels: data['series_label_show'] };
  const prefix = (data.chart === 'metric' && data['general_prefix']) ? data['general_prefix'] : undefined;
  const suffix = (data.chart === 'metric' && data['general_suffix']) ? data['general_suffix'] : undefined;
  const sparkline = data['appearance_sparkline'] ? true : undefined;
  const stacked = data['series_stacked'] ? data['series_stacked'] : undefined;
  const slider = data['chart_slider_show'] ? true : false;
  const table = data['chart'] === 'table' && data['table_pagination_show']?
  {
    pagination: {
      limit: data['table_pagination_limit']
    }
  } : undefined;
  const choropleth = data['chart'] === 'choropleth' ?
  {
    map: data['choropleth_map'],
    borders: {
      show: data['choropleth_border_show'],
      size: data['choropleth_border_show'] ? data['choropleth_border_size'] : undefined,
      color: data['choropleth_border_show'] ? data['choropleth_border_color'] : undefined,
    },
    showSlider: data['chart_slider_show']
  } : undefined;
  const funnel = funnels.includes(data['chart']) ?
  {
    lines: data['funnel_lines'],
    resultValues: data['funnel_results'],
    percents: {
      show: data['funnel_percents_show'],
      countingMethod: data['funnel_percents_count'] || funnelCountingMethodOptions[0].value,
      decimals: data['funnel_percents_show'] ? data['funnel_percents_decimals'] : undefined,
    },
    hover: data['funnel_hover'],
    marginBetweenSteps: data['funnel_margin'],
    minimalSize: data['funnel_minimal_size'],
    effect3d: data['funnel_effect3d'],
  } : undefined;
  let heatmapOptions;
  if (chartType === 'heatmap') {
    heatmapOptions = {
      showSlider: slider,
      simpleTooltip,
    }
  }
  const options = {
    container: '#some_container',
    type: chartType,
    title,
    subtitle,
    legend: legendOptions,
    axis: axisOptions,
    point: pointOptions,
    data: dataOptions,
    colors,
    prefix,
    suffix,
    heatmap: heatmapOptions,
    choropleth,
    funnel,
    sparkline,
    stacked,
    table,
  }

  const { container, type:optionsType, ...obj } = options;
  return renderObject ? obj : `const chart = new KeenDataviz(${JSON.stringify(options, null, 2)})`;
}

// https://css-tricks.com/converting-color-spaces-in-javascript/
export function HSLToHex(h,s,l) {
  // s /= 100;
  // l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}