"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = void 0;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addToCart = function addToCart(skuId, skuNum) {
  return (0, _request["default"])({
    url: "/cart/addToCart/".concat(skuId, "/").concat(skuNum),
    method: 'post'
  });
};

exports.addToCart = addToCart;