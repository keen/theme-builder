/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-gist.css';
import { getJSCode, getCSSCode } from '../utils/helpers';

Lowlight.registerLanguage('css', css);
Lowlight.registerLanguage('js', js);

const placeholder = document.createElement('li');
placeholder.className = 'placeholder';

const CodeSnippet = ({ type, data, ...props }) => {
  const handleClickToCopy = (event, value) => {
    event.preventDefault();

    const placeholder = document.createElement('textarea');
    placeholder.value = value;
    placeholder.classList = 'copy-to-clipboard';

    document.body.appendChild(placeholder);
    placeholder.select();
    document.execCommand('copy');

    document.body.removeChild(placeholder);
  };

  const snippetData = type === 'js' ? getJSCode(data) : getCSSCode(data);

  const renderCopyButton = value => {
    return (
      <button
        className="builder__btn-copy btn"
        onClick={e => handleClickToCopy(e, value)}
      >
        Copy to Clipboard
      </button>
    );
  };

  return (
    <>
      {renderCopyButton(snippetData)}
      <Lowlight
        language={type}
        value={snippetData}
        className="builder__editor"
      />
    </>
  );
};

export default CodeSnippet;

CodeSnippet.defaultProps = {
  type: 'js',
  data: {}
};

CodeSnippet.propTypes = {
  type: PropTypes.oneOf(['js', 'css']).isRequired,
  data: PropTypes.object.isRequired
};
