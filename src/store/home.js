import { getCartgoryList , getBannerList, getFloorList} from '@/network/home'

import { RECEIVECARTGORYLIST ,RECEIVEBANNERLIST, RECEIVEFLOORLIST} from './contant'

const state = {
  cartgoryList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  [RECEIVECARTGORYLIST] (state, cartgoryList)  {
    state.cartgoryList = cartgoryList
  },
  [RECEIVEBANNERLIST] (state, bannerList)  {
    state.bannerList = bannerList
  },
  [RECEIVEFLOORLIST] (state, floorList)  {
    state.floorList = floorList
  }
}

const actions = {
  async getCartgoryList({commit}) {
    let result = await getCartgoryList()
    if(result.code == 200) {
      commit(RECEIVECARTGORYLIST,result.data)
    }
  },
  async getBannerList({commit}) {
    let result = await getBannerList()
    if(result.code == 200) {
      commit(RECEIVEBANNERLIST, result.data)
    }
  },
  async getFloorList({commit}) {
    let result = await getFloorList()
    if(result.code == 200) {
      commit(RECEIVEFLOORLIST, result.data)
    }
  }
}

const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}