var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Select.css";

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.selectDefaultValue = function () {
      var _this$props = _this.props,
          placeholder = _this$props.placeholder,
          _this$props$options = _toArray(_this$props.options),
          first = _this$props$options[0],
          rest = _this$props$options.slice(1),
          defaultValue = _this$props.defaultValue;

      if (defaultValue) {
        return defaultValue;
      } else if (placeholder) {
        return { label: placeholder };
      } else {
        return first;
      }
    };

    _this.selectOption = function (option) {
      _this.setState({ value: option, isOpen: false });
      _this.props.onValueChange(option.value);
    };

    _this.toggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    };

    _this.state = {
      isOpen: false,
      value: _this.selectDefaultValue()
    };
    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = this.props.options;
      var _state = this.state,
          currentLabel = _state.value.label,
          isOpen = _state.isOpen;


      return React.createElement(
        "div",
        { className: "react-base__select" },
        React.createElement(
          "div",
          { className: "react-base__select-selector", onClick: this.toggleOpen },
          currentLabel
        ),
        isOpen && React.createElement(
          "div",
          { className: "react-base__select-options" },
          options.map(function (_ref) {
            var value = _ref.value,
                label = _ref.label;
            return React.createElement(
              "span",
              {
                key: value,
                onClick: function onClick() {
                  return _this2.selectOption({ value: value, label: label });
                }
              },
              label
            );
          })
        )
      );
    }
  }]);

  return Select;
}(Component);

export default Select;


Select.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string
  }).isRequired),
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string
};