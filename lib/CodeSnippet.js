import React from 'react';
import PropTypes from 'prop-types';
import { stripIndent } from 'common-tags';
import Lowlight from 'react-lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-gist.css';

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
    return stripIndent`
      css code goes here
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