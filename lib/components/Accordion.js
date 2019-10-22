import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionSection = (props) => {
  const { isOpen, label, children, onClick } = props;
  const sectionOnClick = () => onClick(label);
  let itemClass = 'accordion__item';
  if (isOpen) {
    itemClass = `${itemClass} open`;
  }
  return (
    <div className={itemClass}>
      <div className="accordion__item__heading heading" onClick={sectionOnClick}>
        <svg viewBox="0 0 20 20" width="20" height="20" className="heading__icon" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        {label}
      </div>
      <div className="accordion__item__content" hidden={!isOpen}>
        {children}
      </div>
    </div>
  )
}

AccordionSection.propTypes = {
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onClick: PropTypes.func,
}

const Accordion = (props) => {
  const { children, allowMultipleOpen } = props;
  const [openSections, setOpenSections] = useState({});
  const onClick = (label) => {
    const isOpen = !!openSections[label];
    const updatedSections = allowMultipleOpen ? {
      ...openSections,
      [label]: !isOpen,
    } : 
    {
      [label]: !isOpen,
    };
    setOpenSections(updatedSections);
  };
  return (
    <div className="accordion">
      {children.map((child) => (
        child &&
        <AccordionSection
          key={child.props.label}
          isOpen={!!openSections[child.props.label]}
          label={child.props.label}
          onClick={onClick}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  )
};

export default Accordion;

Accordion.defaultProps = {
  allowMultipleOpen: false,
}

Accordion.propTypes = {
  allowMultipleOpen: PropTypes.bool,
  children: PropTypes.array.isRequired,
}