import request from './request'

import mockRequest from '@/network/mockRequest'

export const getCartgoryList = () => {
  return request({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

export const getBannerList = () => {
  return mockRequest({
    url: '/banners',
    method: 'get'
  })
}

export const getFloorList = () => {
  return mockRequest({
    url: '/floors',
    method: "get"
  })
}
