'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require("./index.less");
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mask_prefix = 'mask';

exports.default = function (props) {
    var className = props.className;
    var _props$style = props.style;
    var style = _props$style === undefined ? {} : _props$style;

    var others = _objectWithoutProperties(props, ['className', 'style']);

    var maskClass = (0, _classnames2.default)(mask_prefix, className);

    return _react2.default.createElement('div', _extends({}, others, { className: maskClass, style: style }));
};

module.exports = exports['default'];
