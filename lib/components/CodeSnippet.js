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
    const colors = data.colors || [];
    const title = (data['title.show'] && data['title.text']) ? `"${data['title.text']}"` : false;
    const subtitle = data['subtitle.text'] ? `"${data['subtitle.text']}"` : false;
    const legendOptions = data['legend.show'] ? { show: data['legend.show'], position: data['legend.layout']} : { show: data['legend.show']};
    const axisOptions = getChartAxisOptions(data);
    const pointOptions = data['series.points.show'] ? { show: data['series.points.show'], r: data['series.points.size'] } : { show: data['series.points.size'] };
    const dataOptions = { labels: data['series.label.show'] };
    return stripIndent`
      const chart = new KeenDataviz({
        container: '#some_container', // required
        title: ${title},
        subtitle: ${subtitle},
        legend: ${JSON.stringify(legendOptions)},
        axis: ${JSON.stringify(axisOptions)},
        point: ${JSON.stringify(pointOptions)},
        data: ${JSON.stringify(dataOptions)},
        colors: ${JSON.stringify(colors)},
      });
    `;
  }

  const getCSSCode = () => {
    const {
      chartBackground,
      chartBorder,
      chartFont,
      titleTextAlign,
      titleColor,
      titleFontFamily,
      titleFontSize,
      titleFontBold,
      titleFontItalic,
      subtitleTextAlign,
      subtitleColor,
      subtitleFontFamily,
      subtitleFontSize,
      subtitleFontBold,
      subtitleFontItalic,
      axisYTitleFont,
      axisYTitleFontSize,
      axisYTitleFontBold,
      axisYTitleFontItalic,
      axisYTitleColor,
      axisYLabelFont,
      axisYLabelFontSize,
      axisYLabelFontBold,
      axisYLabelFontItalic,
      axisYLabelColor,
      axisXTitleFont,
      axisXTitleFontSize,
      axisXTitleFontBold,
      axisXTitleFontItalic,
      axisXTitleColor,
      axisXLabelFont,
      axisXLabelFontSize,
      axisXLabelFontBold,
      axisXLabelFontItalic,
      axisXLabelColor,
      legendFont,
      legendFontSize,
      legendFontBold,
      legendFontItalic,
      legendColor,
      gridLineShow,
      gridLineColor,
      subgridLineColor,
      seriesLabelFont,
      seriesLabelFontSize,
      seriesLabelFontBold,
      seriesLabelFontItalic,
      seriesLabelColor,
      seriesLabelTextAlign,
      seriesLineThickness,
      tooltipFont,
      tooltipFontSize,
      tooltipFontBold,
      tooltipFontItalic,
      tooltipColor,
      tooltipBackground,
      tooltipBorder,
    } = getCSSRules(data);
    return stripIndent`
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
      .keen-dataviz .keen-dataviz-subtitle {
        display: block;
        ${subtitleColor}
        ${subtitleTextAlign}
        ${subtitleFontFamily}
        ${subtitleFontSize}
        ${subtitleFontBold}
        ${subtitleFontItalic}
      }
      .keen-dataviz .c3-axis.c3-axis-y .tick text {
        ${axisYLabelColor}
        ${axisYLabelFont}
        ${axisYLabelFontSize}
        ${axisYLabelFontBold}
        ${axisYLabelFontItalic}
      }
      .keen-dataviz .c3-axis.c3-axis-x .tick text {
        ${axisXLabelColor}
        ${axisXLabelFont}
        ${axisXLabelFontSize}
        ${axisXLabelFontBold}
        ${axisXLabelFontItalic}
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
      .keen-theme-builder .keen-dataviz .c3-axis .c3-axis-y-label {
        ${axisYTitleFont}
        ${axisYTitleFontSize}
        ${axisYTitleFontBold}
        ${axisYTitleFontItalic}
        ${axisYTitleColor}
      }
      .keen-theme-builder .keen-dataviz .c3-axis .c3-axis-x-label {
        ${axisXTitleFont}
        ${axisXTitleFontSize}
        ${axisXTitleFontBold}
        ${axisXTitleFontItalic}
        ${axisXTitleColor}
      }
      .keen-theme-builder .keen-dataviz .c3-chart-texts .c3-text {
        ${seriesLabelFont}
        ${seriesLabelFontSize}
        ${seriesLabelFontBold}
        ${seriesLabelFontItalic}
        ${seriesLabelTextAlign}
        ${seriesLabelColor}
      }
      .keen-theme-builder .keen-dataviz .c3-chart-lines .c3-shape.c3-line {
        ${seriesLineThickness}
      }
      .keen-theme-builder .keen-dataviz .c3-tooltip {
        ${tooltipFont}
        ${tooltipFontSize}
        ${tooltipFontBold}
        ${tooltipFontItalic}
        ${tooltipColor}
        ${tooltipBackground}
        ${tooltipBorder}
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