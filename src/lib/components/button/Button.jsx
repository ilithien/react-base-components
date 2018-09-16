import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, children }) => (
  <button className="react-base__button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
