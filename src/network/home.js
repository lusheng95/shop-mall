import { request } from 'network/request'

// 引入网络请求，单独创建一个home页面的网络请求数据，便于管理
export function getHomedata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}