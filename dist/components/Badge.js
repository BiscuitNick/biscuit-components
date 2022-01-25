"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

const Badge = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "badge ".concat(!props.value ? "badge--none" : "", " ")
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "heavy"
  }, props.value || 0));
};

Badge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Badge"
};
var _default = Badge;
exports.default = _default;
module.exports = exports.default;