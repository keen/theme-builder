import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => {
  const { items, singleChoice, groupName, activeItem, title, onChange } = props;
  const buttons = items.map((item) => {
    return singleChoice ?
    <label className={`button-group__label ${item.value === activeItem.value && 'active'}`} key={item.value}>
      {item.label}
      <input type="radio" value={item.value} checked={item.value === activeItem.value} name={groupName} onChange={onChange} className="button-group__input"></input>
    </label> :
    <label className={`button-group__label ${activeItem[item.value] && 'active'}`} key={item.value}>
      {item.label}
      <input type="checkbox" value={item.value} checked={activeItem[item.value]} onChange={onChange} className="button-group__input"></input>
    </label>
  });

  const buttonGroupTitle = <div className="button-group__title">{title}</div>;
  
  return (
    <div className="button-group">
      {title && buttonGroupTitle}
      <div className="button-group__wrapper">
        {buttons}
      </div>
    </div>
  );
};

export default ButtonGroup;

ButtonGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.string,
  })).isRequired,
  singleChoice: PropTypes.bool.isRequired,
  groupName: PropTypes.string,
  activeItem: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.string,
  }).isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ButtonGroup.defaultProps = {
  items: [],
  singleChoice: false,
  activeItem: [],
  onChange: () => {},
}