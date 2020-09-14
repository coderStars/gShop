"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cart = require("@/network/cart");

var state = {};
var mutations = {};
var actions = {
  addToCart: function addToCart(_ref, _ref2) {
    var commit, skuId, skuNum, result;
    return regeneratorRuntime.async(function addToCart$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            skuId = _ref2.skuId, skuNum = _ref2.skuNum;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _cart.addToCart)(skuId, skuNum));

          case 4:
            result = _context.sent;

            if (!(result.code === 200)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", 'ok');

          case 9:
            return _context.abrupt("return", Promise.reject(new Error('failed')));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var getters = {};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;