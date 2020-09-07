import request from './request'

export const getCartgoryList = () => {
  return request({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}
