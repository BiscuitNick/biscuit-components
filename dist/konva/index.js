"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Biscuit;

var _react = _interopRequireDefault(require("react"));

const Konva = require("react-konva"); //requireKonva from "konva";


const {
  Stage,
  Layer,
  Rect
} = Konva;

function Biscuit(_ref) {
  let {
    width = 50,
    height = 50,
    fill = "red",
    draggable = true //...props

  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Stage, {
    width: width,
    height: height
  }, /*#__PURE__*/_react.default.createElement(Layer, null, /*#__PURE__*/_react.default.createElement(Rect, {
    width: width,
    height: height,
    fill: fill,
    draggable: draggable
  })));
}

Biscuit.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Biscuit",
  "props": {
    "width": {
      "defaultValue": {
        "value": "50",
        "computed": false
      },
      "required": false
    },
    "height": {
      "defaultValue": {
        "value": "50",
        "computed": false
      },
      "required": false
    },
    "fill": {
      "defaultValue": {
        "value": "\"red\"",
        "computed": false
      },
      "required": false
    },
    "draggable": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "required": false
    }
  }
};
module.exports = exports.default;