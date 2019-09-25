import React from 'react';
import PropTypes from 'prop-types';

export const ButtonGroup = (props) => {
  const { items, singleChoice, groupName, activeItem, onChange } = props;
  const buttons = items.map((item) => {
    return singleChoice ?
    <label className={`button-group__label ${item.value === activeItem && 'active'}`} key={item.value}>
      {item.label}
      <input type="radio" value={item.value} checked={item.value === activeItem} name={groupName} onChange={onChange} className="button-group__input"></input>
    </label> :
    <label className={`button-group__label ${activeItem[item.value] && 'active'}`} key={item.value}>
      {item.label}
      <input type="checkbox" value={item.value} onChange={onChange} className="button-group__input"></input>
    </label>
  });
  
  return (
    <div className="button-group">
      {buttons}
    </div>
  );
};
ButtonGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.string,
  })).isRequired,
  singleChoice: PropTypes.bool.isRequired,
  groupName: PropTypes.string,
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
};

ButtonGroup.defaultProps = {
  items: [],
  singleChoice: false,
  activeItem: [],
  onChange: () => {},
}