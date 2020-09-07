import { getCartgoryList } from '@/network/home'

import { RECEIVECARTGORYLIST } from './contant'

const state = {
  cartgoryList: []
}

const mutations = {
  [RECEIVECARTGORYLIST] (state, cartgoryList)  {
    state.cartgoryList = cartgoryList
  }
}

const actions = {
  async getCartgoryList({commit}) {
    let cartgoryList = await getCartgoryList()
    commit(RECEIVECARTGORYLIST,cartgoryList.data)
  }
}

const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}