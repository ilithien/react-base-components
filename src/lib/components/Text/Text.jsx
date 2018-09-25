import React from "react";
import PropTypes from "prop-types";
import "./Text.css";

const Text = ({ id, name, placeholder, label, onChange }) => (
  <div className="react-base__text-group">
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      className="react-base__text"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  </div>
);

Text.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
};

export default Text;
