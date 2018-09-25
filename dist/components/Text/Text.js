import React from "react";
import PropTypes from "prop-types";
import "./Text.css";

var Text = function Text(_ref) {
  var id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      label = _ref.label,
      onChange = _ref.onChange;
  return React.createElement(
    "div",
    { className: "react-base__text-group" },
    React.createElement(
      "label",
      { htmlFor: id },
      label
    ),
    React.createElement("input", {
      type: "text",
      id: id,
      className: "react-base__text",
      placeholder: placeholder,
      onChange: onChange,
      name: name
    })
  );
};

Text.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
};

export default Text;