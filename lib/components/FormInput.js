import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(value);
  }, [])
  const inputClassName = className ? `form-input__input ${className}` : 'form-input__input';
  const handleInputChange = (e) => {
    e.persist();
    setInputValue(e.target.value);
    setTimeout(() => {
      onChange(e);
    }, 250);
  }
  const renderLabel = () => <label htmlFor={name} className="form-input__label">{label}</label>;
  return (
    <div className="form-input">
      {label && renderLabel()}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={inputValue}
        className={inputClassName}
        style={error && {border: 'solid 1px red'}}
      />
      { error && <p>{ error }</p>}
    </div>
  )
}

export default FormInput;

FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}