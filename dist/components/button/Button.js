import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return React.createElement(
    "button",
    { className: "react-base__button", onClick: onClick },
    children
  );
};

export default Button;