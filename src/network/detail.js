import { request } from 'network/request'

export function getDetaildata(iid) {
  return request ({
      url: '/detail',
      params: {
          iid
      }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discout = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice 
      this.disbgColor = itemInfo.discountBgColor
  }
}