"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiceClock = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const diceDefaults = ["https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/0.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/7.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/8.png", "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/9.png"];
const hoursToDice = {
  0: [6, 6],
  1: [0, 1],
  2: [1, 1],
  3: [1, 2],
  4: [2, 2],
  5: [2, 3],
  6: [3, 3],
  7: [3, 4],
  8: [4, 4],
  9: [4, 5],
  10: [5, 5],
  11: [5, 6]
};

const DiceClock = props => {
  const {
    hourStyle,
    minuteStyle,
    secondStyle,
    images = diceDefaults
  } = props;
  const [hourDice, setHours] = (0, _react.useState)([6, 6]);
  const [minuteDice, setMinutes] = (0, _react.useState)([5, 9]);
  const [secondDice, setSeconds] = (0, _react.useState)([5, 9]);
  const zeroToFive = [images[0 % images.length], images[1 % images.length], images[2 % images.length], images[3 % images.length], images[4 % images.length], images[5 % images.length]];
  const sixToNine = [images[6 % images.length], images[7 % images.length], images[8 % images.length], images[9 % images.length], images[0 % images.length], images[1 % images.length]];
  const sixToFive = [images[6 % images.length], images[1 % images.length], images[2 % images.length], images[3 % images.length], images[4 % images.length], images[5 % images.length]];
  (0, _react.useEffect)(() => {
    const updateTime = setInterval(() => {
      const now = new Date();
      let h = now.getHours() % 12;
      let m = now.getMinutes();
      let s = now.getSeconds();
      setHours(hoursToDice[h]);
      setMinutes([Math.floor(m / 10), m % 10]);
      setSeconds([Math.floor(s / 10), s % 10]);
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      display: "flex",
      justifyContent: "space-evenly"
    }, hourStyle)
  }, /*#__PURE__*/_react.default.createElement(_index.Dice, (0, _extends2.default)({}, props, {
    n: hourDice[0],
    images: hourDice[0] > 5 ? sixToFive : zeroToFive
  })), /*#__PURE__*/_react.default.createElement(_index.Dice, (0, _extends2.default)({}, props, {
    n: hourDice[1],
    images: sixToFive
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      display: "flex",
      justifyContent: "space-evenly"
    }, minuteStyle)
  }, /*#__PURE__*/_react.default.createElement(_index.Dice, (0, _extends2.default)({}, props, {
    n: minuteDice[0],
    images: zeroToFive
  })), /*#__PURE__*/_react.default.createElement(_index.Dice, (0, _extends2.default)({}, props, {
    n: minuteDice[1],
    images: minuteDice[1] > 5 ? sixToNine : zeroToFive
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({
      display: "flex",
      justifyContent: "space-evenly"
    }, secondStyle)
  }, /*#__PURE__*/_react.default.createElement(_index.Dice, (0, _extends2.default)({}, props, {
    n: secondDice[0],
    images: zeroToFive
  })), /*#__PURE__*/_react.default.createElement(_index.Dice, (0, _extends2.default)({}, props, {
    n: secondDice[1],
    images: secondDice[1] > 5 ? sixToNine : zeroToFive
  }))));
}; // const zeroToFive = [
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/0.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
// ];
// const sixToNine = [
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/7.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/8.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/9.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/0.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
// ];
// const sixToFive = [
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
//   "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
// ];


exports.DiceClock = DiceClock;
DiceClock.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DiceClock"
};