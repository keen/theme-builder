import React from 'react';
import PropTypes from 'prop-types';
import { stripIndent } from 'common-tags';
import Lowlight from 'react-lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-gist.css';
import { getCSSRules, getChartAxisOptions } from '../utils/helpers';

Lowlight.registerLanguage('css', css);
Lowlight.registerLanguage('js', js);

const placeholder = document.createElement('li');
placeholder.className = 'placeholder'; 

const CodeSnippet = ({ type, data, ...props }) => {
  const getJSCode = () => {
    const type = data.chart !== 'default' ? data.chart : undefined;
    const colors = data.colors || [];
    const title = (data['title.show'] && data['title.text']) ? data['title.text'] : false;
    const subtitle = data['subtitle.text'] ? data['subtitle.text'] : false;
    const legendOptions = data['legend.show'] ? { show: data['legend.show'], position: data['legend.layout']} : { show: data['legend.show']};
    const axisOptions = getChartAxisOptions(data);
    const pointOptions = data['series.points.show'] ? { show: data['series.points.show'], r: data['series.points.size'] } : { show: data['series.points.size'] };
    const dataOptions = { labels: data['series.label.show'] };
    const prefix = (data.chart === 'metric' && data['general.prefix']) ? data['general.prefix'] : undefined;
    const suffix = (data.chart === 'metric' && data['general.suffix']) ? data['general.suffix'] : undefined;
    const sparkline = data['appearance.sparkline'] ? true : undefined;
    const stacked = data['series.stacked'] ? data['series.stacked'] : undefined;
    let heatmapOptions;
    let choroplethOptions;
    if (type === 'heatmap') {
      heatmapOptions = {
        showSlider: slider,
        simpleTooltip,
      }
    }
    if (type === 'choropleth') {
      choroplethOptions = {
        showSlider: slider,
      }
    }
    const options = {
      container: '#some_container',
      type,
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
      choropleth: choroplethOptions,
      sparkline,
      stacked,
    }
    return `const chart = new KeenDataviz(${JSON.stringify(options, null, 2)})`;
  }

  const getCSSCode = () => {
    const css = getCSSRules(data);
    return stripIndent`
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
      .keen-theme-builder .keen-dataviz .c3-chart-texts .c3-text {
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
    `; 
  }

  const handleClickToCopy = (event, value) => {
    event.preventDefault();

    const placeholder = document.createElement('textarea');
    placeholder.value = value;
    placeholder.classList = 'copy-to-clipboard';
    
    document.body.appendChild(placeholder);
    placeholder.select();
    document.execCommand('copy');
    
    document.body.removeChild(placeholder);
  }

  const snippetData = type === 'js' ? getJSCode() : getCSSCode();

  const renderCopyButton = (value) => {
    return (
      <button className="builder__btn-copy btn" onClick={(e) => handleClickToCopy(e, value)}>Copy to Clipboard</button>
    )
  };

  return (
    <>
      {renderCopyButton(snippetData)}
      <Lowlight language={type} value={snippetData} className="builder__editor" />
    </>
  )
};

export default CodeSnippet;

CodeSnippet.defaultProps = {
  type: "js",
  data: {}
}

CodeSnippet.propTypes = {
  type: PropTypes.oneOf(['js', 'css']).isRequired,
  data: PropTypes.object.isRequired
}