import React from 'react';
import PropTypes from 'prop-types';
import { stripIndent } from 'common-tags';
import Lowlight from 'react-lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-gist.css';
import { getCSSRules } from './utils/helpers';

Lowlight.registerLanguage('css', css);
Lowlight.registerLanguage('js', js);

const placeholder = document.createElement('li');
placeholder.className = 'placeholder'; 

const CodeSnippet = ({ type, data, ...props }) => {
  const getJSCode = () => {
    const colors = data.colors || [];
    return stripIndent`
      const chart = new KeenDataviz({
        container: '#some_container', // required
        colors: ${JSON.stringify(colors)}
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
      axisYLabelFont,
      axisYLabelFontSize,
      axisYLabelFontBold,
      axisYLabelFontItalic,
      axisYLabelColor,
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
      .keen-dataviz .text-label {}
      .keen-dataviz .text-main,
      .keen-dataviz .text-second,
      .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-max,
      .keen-dataviz .c3-chart-arcs .c3-chart-arcs-gauge-min,
      .keen-dataviz .c3-chart-arc .c3-gauge-value,
      .keen-dataviz .c3-chart-arc text {}
      .keen-dataviz .c3-tooltip,
      .keen-dataviz .c3-tooltip-container th {}
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