import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CustomPicker, SketchPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
import { baseColor, colorPickerDefaultOption } from '../utils/consts';

const ColorPicker = (props) => {
  const { title, initialColor, defaultColor, onChange } = props;
  const baseColorObj = { hex: baseColor };
  const [color, setColor] = useState(baseColorObj);
  const [displayColorPicker, setColorPickerDisplay] = useState(false);
  useEffect(() => {
    if (initialColor) {
      setColor({ hex: initialColor });
      return;
    }
    if (defaultColor) {
      setColor({ hex: defaultColor });
      return;
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

  const handleResetBtnClick = () => {
    const resetColor = defaultColor ? defaultColor : colorPickerDefaultOption;
    handleChange({ hex: resetColor });
  }
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
          value={ color.hex === colorPickerDefaultOption ? 'AUTO' : color.hex }
          onChange={ handleChange } />
        { displayColorPicker ? <div className="custom-color-picker__popover" style={ styles.popover }>
            <div className="custom-color-picker__cover" style={ styles.cover } onClick={ handleClose }/>
            <button className="btn btn__small btn-reset" onClick={ handleResetBtnClick }>Auto</button>
            <button className="btn-close" onClick={ handleClose }>&times;</button>
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