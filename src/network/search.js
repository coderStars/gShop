import request from './request'

export const getGoodsListInfo = (searchParams) => {
  return request({
    url: '/list',
    method: 'post',
    data: searchParams
  })
}

export const getGoodsDetailInfo = (skuId) => {
  return request({
    url: `item/${skuId}`,
    method: 'get'
  })
}