/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import WebFont from 'webfontloader';
import { defaultFont } from '../utils/consts';

const FontPicker = props => {
  const { family, fonts, title, onChange } = props;
  let initialFont;
  if (family) {
    WebFont.load({
      google: {
        families: [family]
      }
    });

    initialFont = {
      label: family,
      value: family
    };
  }
  const fontStack = [defaultFont];
  if (fonts && fonts.length) {
    fonts.forEach(item => {
      const obj = {
        label: item.family,
        value: item.family
      };

      fontStack.push(obj);
    });
  }
  return (
    <div className="font-picker">
      <div className="font-picker__title">{title}</div>
      <Select
        defaultValue={initialFont || fontStack[0]}
        options={fontStack}
        onChange={onChange}
        classNamePrefix="custom-dropdown"
      />
    </div>
  );
};

export default FontPicker;

FontPicker.defaultProps = {
  title: '',
  fonts: [],
  onChange: () => {}
};

FontPicker.propTypes = {
  title: PropTypes.string.isRequired,
  family: PropTypes.string,
  fonts: PropTypes.array,
  onChange: PropTypes.func.isRequired
};
