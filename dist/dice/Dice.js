"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _web = require("@react-spring/web");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const standardDice = ["https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png"];

const random360 = function random360() {
  let min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  let max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return (Math.floor(Math.random() * max) + min) * 360;
};

const Dice = props => {
  const {
    size = 200,
    n = Math.floor(Math.random() * 6),
    counter = 0,
    onClick,
    border = props.border || "5px solid black",
    backgroundColor = props.background || "black",
    images = props.images || standardDice,
    margin = props.margin || 0,
    minRotation = false // maxRotation = !isNaN(props.maxRotation) ? props.maxRotation : 5,

  } = props;
  console.log(n + 1);
  const width = size;
  const height = size;
  const rotations = [{
    y: 180,
    x: 0,
    z: false,
    side: "back"
  }, {
    y: -90,
    x: false,
    z: 0,
    side: "left"
  }, {
    y: false,
    x: 90,
    z: 0,
    side: "top"
  }, {
    y: false,
    x: -90,
    z: 0,
    side: "bottom"
  }, {
    y: 90,
    x: false,
    z: 0,
    side: "right"
  }, {
    y: 0,
    x: 0,
    z: false,
    side: "front"
  }];
  const {
    x,
    y,
    z,
    side
  } = rotations[n % 6];
  var xRotation = x !== false ? x + random360() : random360();
  var yRotation = y !== false ? y + random360() : random360();
  var zRotation = z !== false ? z + random360() : random360();

  if (minRotation) {
    xRotation = x || 0;
    yRotation = y || 0;
    zRotation = z || 0;
  }

  const [{
    transform
  }] = (0, _web.useSpring)(() => ({
    transform: "translateZ(".concat(-size / 2, "px) rotateX(").concat(xRotation, "deg) rotateY(").concat(yRotation, "deg) rotateZ(").concat(zRotation, "deg) ") // config: config.slow,

  }), [n, counter]);
  const faceProps = {
    position: "absolute",
    backgroundSize: "cover",
    backgroundColor,
    border,
    width,
    height
  };
  const faces = [_objectSpread(_objectSpread({}, faceProps), {}, {
    transform: "rotateY(180deg) translateZ(".concat(size / 2, "px)"),
    backgroundImage: images ? "url(".concat(images === null || images === void 0 ? void 0 : images[0 % images.length], ")") : null //back

  }), _objectSpread(_objectSpread({}, faceProps), {}, {
    transform: "rotateY(90deg) translateZ(".concat(size / 2, "px)"),
    backgroundImage: images ? "url(".concat(images === null || images === void 0 ? void 0 : images[1 % images.length], ")") : null //right

  }), _objectSpread(_objectSpread({}, faceProps), {}, {
    transform: "rotateX(-90deg) translateZ(".concat(size / 2, "px)"),
    backgroundImage: images ? "url(".concat(images === null || images === void 0 ? void 0 : images[2 % images.length], ")") : null //bottom

  }), _objectSpread(_objectSpread({}, faceProps), {}, {
    transform: "rotateX(90deg) translateZ(".concat(size / 2, "px)"),
    backgroundImage: images ? "url(".concat(images === null || images === void 0 ? void 0 : images[3 % images.length], ")") : null //top

  }), _objectSpread(_objectSpread({}, faceProps), {}, {
    transform: "rotateY(-90deg) translateZ(".concat(size / 2, "px)"),
    backgroundImage: images ? "url(".concat(images === null || images === void 0 ? void 0 : images[4 % images.length], ")") : null //right

  }), _objectSpread(_objectSpread({}, faceProps), {}, {
    transform: "rotateY(0deg) translateZ(".concat(size / 2, "px)"),
    backgroundImage: images ? "url(".concat(images === null || images === void 0 ? void 0 : images[5 % images.length], ")") : null //front

  })];

  const Cube = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      width,
      height,
      perspective: size * 2,
      margin
    },
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_web.animated.div, {
    style: {
      transform,
      margin: "auto",
      width,
      height,
      position: "relative",
      transformStyle: "preserve-3d"
    }
  }, faces.map((face, i) => /*#__PURE__*/_react.default.createElement("div", {
    key: i,
    style: face
  }))));

  return Cube;
};

Dice.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Dice"
};
var _default = Dice;
exports.default = _default;
module.exports = exports.default;