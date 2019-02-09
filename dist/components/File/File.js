var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import "./File.css";

var FileInput = function (_Component) {
  _inherits(FileInput, _Component);

  function FileInput(props) {
    _classCallCheck(this, FileInput);

    var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

    _this.state = {
      file: ""
    };

    _this.onLoad = _this.onLoad.bind(_this);
    return _this;
  }

  _createClass(FileInput, [{
    key: "onLoad",
    value: function onLoad(_ref) {
      var _this2 = this;

      var target = _ref.target;

      var _target$files = _toArray(target.files),
          first = _target$files[0],
          rest = _target$files.slice(1);

      if (first) {
        var reader = new FileReader();
        reader.onload = function (e) {
          _this2.setState({
            file: e.target.result
          }), function () {
            _this2.props.onLoadImage(e.target.result);
          };
        };
        reader.readAsDataURL(first);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$id = _props.id,
          id = _props$id === undefined ? "react-file-input" : _props$id,
          _props$label = _props.label,
          label = _props$label === undefined ? "Choose a file..." : _props$label;

      return React.createElement(
        "div",
        { className: "react-base__file" },
        React.createElement("img", { src: this.state.file }),
        React.createElement(
          "label",
          { className: "file-label", htmlFor: id },
          label
        ),
        React.createElement("input", { type: "file", id: id, hidden: true, onChange: this.onLoad })
      );
    }
  }]);

  return FileInput;
}(Component);

export default FileInput;


FileInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onLoadFile: PropTypes.func.isRequired
};