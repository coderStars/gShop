"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = _interopRequireDefault(require("vuex"));

var _vue = _interopRequireDefault(require("vue"));

var _home = _interopRequireDefault(require("./home"));

var _search = _interopRequireDefault(require("./search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

// const state = {}
// const mutations = {}
// const actions = {}
// const getters = {}
var _default = new _vuex["default"].Store({
  modules: {
    home: _home["default"],
    search: _search["default"]
  }
});

exports["default"] = _default;