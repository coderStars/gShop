"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("@/router"));

var _store = _interopRequireDefault(require("@/store"));

require("@/mock");

var _TypeNav = _interopRequireDefault(require("@/components/TypeNav"));

var _SliderLoop = _interopRequireDefault(require("@/components/SliderLoop"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_vue["default"].component('TypeNav', _TypeNav["default"]);

_vue["default"].component('SliderLoop', _SliderLoop["default"]);

new _vue["default"]({
  beforeCreate: function beforeCreate() {
    _vue["default"].prototype.$bus = this;
  },
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"]
}).$mount('#app');