"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// High Order Component (HOC) - A component (HOC) that renders another component
var Tracker = function Tracker(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "This is my tracker component"), /*#__PURE__*/_react["default"].createElement(WrappedComponent, props));
  };
};
var _default = exports["default"] = Tracker;