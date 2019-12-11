/* eslint-disable */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionSection = props => {
  const { isOpen, label, children, onClick } = props;
  const sectionOnClick = () => onClick(label);
  let itemClass = 'accordion__item';
  if (isOpen) {
    itemClass = `${itemClass} open`;
  }
  return (
    <div className={itemClass}>
      <div
        className="accordion__item__heading heading"
        onClick={sectionOnClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="heading__icon"
        >
          <defs />
          <path d="M7 16c-.4-.4-.5-1 0-1.6l3.7-3.9L7 6.6c-.5-.5-.4-1.1 0-1.6.4-.4 1.2-.4 1.6 0 .4.4 4.5 4.7 4.5 4.7.2.2.3.5.3.8s-.1.6-.3.8c0 0-4.1 4.3-4.5 4.7s-1.2.4-1.6 0z" />
        </svg>
        {label}
      </div>
      <div className="accordion__item__content" hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
};

AccordionSection.propTypes = {
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onClick: PropTypes.func
};

const Accordion = props => {
  const { children, allowMultipleOpen } = props;
  const [openSections, setOpenSections] = useState({});
  const onClick = label => {
    const isOpen = !!openSections[label];
    const updatedSections = allowMultipleOpen
      ? {
          ...openSections,
          [label]: !isOpen
        }
      : {
          [label]: !isOpen
        };
    setOpenSections(updatedSections);
  };
  return (
    <div className="accordion">
      {children.map(
        child =>
          child && (
            <AccordionSection
              key={child.props.label}
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
            >
              {child.props.children}
            </AccordionSection>
          )
      )}
    </div>
  );
};

export default Accordion;

Accordion.defaultProps = {
  allowMultipleOpen: false
};

Accordion.propTypes = {
  allowMultipleOpen: PropTypes.bool,
  children: PropTypes.array.isRequired
};
