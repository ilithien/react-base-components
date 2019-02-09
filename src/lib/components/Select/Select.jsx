import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Select.css";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      value: this.selectDefaultValue()
    };
  }

  selectDefaultValue = () => {
    const {
      placeholder,
      options: [first, ...rest],
      defaultValue
    } = this.props;
    if (defaultValue) {
      return defaultValue;
    } else if (placeholder) {
      return { label: placeholder };
    } else {
      return first;
    }
  };

  selectOption = option => {
    this.setState({ value: option, isOpen: false });
    this.props.onValueChange(option.value)
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { options } = this.props;
    const {
      value: { label: currentLabel },
      isOpen
    } = this.state;

    return (
      <div className="react-base__select">
        <div className="react-base__select-selector" onClick={this.toggleOpen}>
          {currentLabel}
        </div>
        {isOpen && (
          <div className="react-base__select-options">
            {options.map(({ value, label }) => (
              <span
                key={value}
                onClick={() => this.selectOption({ value, label })}
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Select.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    }).isRequired
  ),
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string
};
