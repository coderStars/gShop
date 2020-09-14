import request from './request'

export const addToCart = (skuId, skuNum ) => {
  return request({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
}