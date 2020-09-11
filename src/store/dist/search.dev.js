"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _search = require("@/network/search");

var _contant = require("./contant");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  goodsListInfo: {}
};

var mutations = _defineProperty({}, _contant.RECEIVEGOODSLISTINFO, function (state, goodsListInfo) {
  state.goodsListInfo = goodsListInfo;
});

var actions = {
  getGoodsListInfo: function getGoodsListInfo(_ref, searchParams) {
    var commit, result;
    return regeneratorRuntime.async(function getGoodsListInfo$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _search.getGoodsListInfo)(searchParams));

          case 3:
            result = _context.sent;

            if (result.code == 200) {
              commit(_contant.RECEIVEGOODSLISTINFO, result.data);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var getters = {
  goodsList: function goodsList(state) {
    return state.goodsListInfo.goodsList || [];
  },
  attrsList: function attrsList(state) {
    return state.goodsListInfo.attrsList || [];
  },
  trademarkList: function trademarkList(state) {
    return state.goodsListInfo.trademarkList || [];
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;