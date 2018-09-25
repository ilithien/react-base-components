import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, children }) => (
  <button className="react-base__button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  onClick: PropTypes.func
};

export default Button;
