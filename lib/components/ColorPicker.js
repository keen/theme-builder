import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CustomPicker, SketchPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
import { defaultColor } from '../utils/consts';

const ColorPicker = (props) => {
  const { title, initialColor, onChange } = props;
  const defaultColorObj = { hex: defaultColor };
  const [color, setColor] = useState(defaultColorObj);
  const [displayColorPicker, setColorPickerDisplay] = useState(false);
  useEffect(() => {
    if (initialColor) {
      setColor({ hex: initialColor });
    }
  }, []);
  const styles = {
    input: {
      border: 'none',
      outline: 'none',
      fontSize: '14px'
    },
    label: {
      display: 'none',
    },
    color: {
      background: `${color.hex}`,
    },
  };
  const handleClick = () => {
    setColorPickerDisplay(!displayColorPicker);
  };
  const handleClose = () => {
    setColorPickerDisplay(false);
  };
  const handleChange = (color) => {
    if (!color.hex) {
      setColor({hex: initialColor});
      return;
    }
    setColor(color);
    onChange(color, title);
  };
  return (
    <div className="custom-color-picker">
      {title && <div className="custom-color-picker__title">{title}</div>}
      <div className="custom-color-picker__wrapper">
        <div className="custom-color-picker__swatch" style={ styles.swatch } onClick={ handleClick }>
          <div className="custom-color-picker__color" style={ styles.color } />
        </div>
        <EditableInput
          style={ styles }
          label='hex'
          value={ color.hex }
          onChange={ handleChange } />
        { displayColorPicker ? <div className="custom-color-picker__popover" style={ styles.popover }>
            <div className="custom-color-picker__cover" style={ styles.cover } onClick={ handleClose }/>
            <SketchPicker color={ color } onChange={ handleChange } disableAlpha={true} />
          </div> : null }
      </div>
    </div>
  );
}

export default CustomPicker(ColorPicker);

ColorPicker.defaultProps = {
  title: '',
  onChange: () => {},
};

ColorPicker.propTypes = {
  title: PropTypes.string,
  initialColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};