import { addToCart } from '@/network/cart'

let state = {

}

let mutations = {

}

let actions = {
  async addToCart({commit},{skuId,skuNum}) {
    let result = await addToCart(skuId,skuNum) 
    if(result.code === 200) {
      return 'ok'
    }else {
      return Promise.reject(new Error('failed'))
    }
  }
}

let getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}