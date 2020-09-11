"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoodsListInfo = void 0;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getGoodsListInfo = function getGoodsListInfo(searchParams) {
  return (0, _request["default"])({
    url: '/list',
    method: 'post',
    data: searchParams
  });
};

exports.getGoodsListInfo = getGoodsListInfo;