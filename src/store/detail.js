
import { getGoodsDetailInfo } from '@/network/search'
import { RECEIVEGOODSDETAILINFO } from './contant'

let state = {
  goodsDetailInfo: {}
}

let mutations = {
  [RECEIVEGOODSDETAILINFO](state,goodsDetailInfo) {
    state.goodsDetailInfo = goodsDetailInfo
  }
}

let actions = {
  async getGoodsDetailInfo({commit},skuId) {
    let result = await getGoodsDetailInfo(skuId)
    if(result.code === 200) {
      commit(RECEIVEGOODSDETAILINFO,result.data)
    }
  }
}

let getters = {
  categoryView(state) {  
    return state.goodsDetailInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsDetailInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodsDetailInfo.spuSaleAttrList || []
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}