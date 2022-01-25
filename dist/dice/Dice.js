"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const sides = ["front", "back", "left", "right", "top", "bottom"];

const Dice = _ref => {
  let {
    size = 200,
    n,
    handleClick,
    images
  } = _ref;
  const [side, setSide] = (0, _react.useState)(sides[n] || "front");
  const width = size;
  const height = size;
  const [completeRotations, setComplete] = (0, _react.useState)(Math.floor(Math.random() * 10 - 20) * 360);
  const [arbitraryRotation, setArbitrary] = (0, _react.useState)(Math.floor(Math.random() * 10 - 20) * 360);
  const faces = {
    front: {
      width,
      height,
      transform: "rotateY(0deg) translateZ(".concat(size / 2, "px)"),
      backgroundImage: images ? "url(".concat(images[6], ")") : null
    },
    back: {
      width,
      height,
      transform: "rotateY(180deg) translateZ(".concat(size / 2, "px)"),
      backgroundImage: images ? "url(".concat(images[1], ")") : null
    },
    right: {
      width,
      height,
      transform: "rotateY(90deg) translateZ(".concat(size / 2, "px)"),
      backgroundImage: images ? "url(".concat(images[5], ")") : null
    },
    left: {
      width,
      height,
      transform: "rotateY(-90deg) translateZ(".concat(size / 2, "px)"),
      backgroundImage: images ? "url(".concat(images[2], ")") : null
    },
    top: {
      width,
      height,
      transform: "rotateX(90deg) translateZ(".concat(size / 2, "px)"),
      backgroundImage: images ? "url(".concat(images[3], ")") : null
    },
    bottom: {
      width,
      height,
      transform: "rotateX(-90deg) translateZ(".concat(size / 2, "px)"),
      backgroundImage: images ? "url(".concat(images[4], ")") : null
    }
  };
  const rotations = {
    front: {
      transform: "translateZ(-".concat(size / 2, "px) rotateY(").concat(completeRotations, "deg) rotateZ(").concat(arbitraryRotation, "deg) rotateX(").concat(completeRotations, "deg)")
    },
    back: {
      transform: "translateZ(-".concat(size / 2, "px) rotateY(").concat(completeRotations - 180, "deg) rotateZ(").concat(arbitraryRotation, "deg) rotateX(").concat(completeRotations, "deg)")
    },
    right: {
      transform: "translateZ(-".concat(size / 2, "px) rotateY(").concat(completeRotations - 90, "deg) rotateX(").concat(arbitraryRotation, "deg) rotateZ(").concat(completeRotations, "deg)")
    },
    left: {
      transform: "translateZ(-".concat(size / 2, "px) rotateY(").concat(completeRotations + 90, "deg) rotateX(").concat(arbitraryRotation, "deg) rotateZ(").concat(completeRotations, "deg)")
    },
    top: {
      transform: "translateZ(-".concat(size / 2, "px) rotateX(").concat(completeRotations - 90, "deg) rotateY(").concat(arbitraryRotation, "deg) rotateZ(").concat(completeRotations, "deg)")
    },
    bottom: {
      transform: "translateZ(-".concat(size / 2, "px) rotateX(").concat(completeRotations + 90, "deg) rotateY(").concat(arbitraryRotation, "deg)")
    }
  };
  console.log(completeRotations, arbitraryRotation);

  const Cube = /*#__PURE__*/_react.default.createElement("div", {
    className: "scene",
    style: {
      width,
      height,
      perspective: size * 2,
      margin: size * 0.4
    },
    onClick: () => {
      const newSide = Math.floor(Math.random() * sides.length);
      setComplete(Math.floor(Math.random() * 10 - 20) * 720); // setArbitrary(Math.floor(Math.random() * 10 - 20) * 360);

      setArbitrary(Math.floor(Math.random() * 1080 - 2160));
      console.log(newSide, sides[newSide]);
      setSide(sides[newSide]);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cube",
    style: _objectSpread(_objectSpread({}, rotations[side]), {}, {
      width,
      height
    })
  }, Object.keys(faces).map((side, i) => /*#__PURE__*/_react.default.createElement("div", {
    key: i,
    className: "cube__face",
    style: faces[side]
  }))));

  return Cube;
};

Dice.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Dice",
  "props": {
    "size": {
      "defaultValue": {
        "value": "200",
        "computed": false
      },
      "required": false
    }
  }
};
var _default = Dice;
exports.default = _default;
module.exports = exports.default;