import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


import home from './home'
import search from './search'
import detail from './detail'
import cart from './cart'

// const state = {}

// const mutations = {}

// const actions = {}

// const getters = {}

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    cart
  }
})