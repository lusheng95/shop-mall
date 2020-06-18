<template>
    <div class="goods-box">
        <div class="goods-title">
            {{Goods.title}}
        </div>
        <div class="price">
          <span class="new-price">{{Goods.newPrice}}</span>
          <span class="old-price">{{Goods.oldPrice}}</span>
          <!--给span动态绑定背景颜色属性 需要注意绑定的属性要加引号-->
          <span class="price-txt" :style="{ 'background': priceTxt }">{{Goods.discout}}</span> 
        </div>
        <div class="detail-title1">
            <span v-for="(item,index) in Goods.columns" :key="index">{{item}}</span>
        </div>
        <div class="detail-title2">
            <span v-for="(item,index) in Goods.services" :key="index">
                <img :src="item.icon" alt="">
                <p>{{item.name}}</p>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        Goods: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        priceTxt() {
            return this.Goods.disbgColor
        }
    },
}
</script>

<style  scoped>
  .goods-box{
    margin:10px 8px 0 8px;
  }
  .goods-title{
    font-size:18px;
    color: black;
    margin-bottom: 8px;
  }
  .price{
      height: 50px;
      display: flex;
  }
  .new-price{
      display: flex;
      font-size: 35px;
      color: var(--color-tint);
      align-items: flex-end;
  }
  .old-price{
      display: flex;
      text-decoration: line-through;
      font-size: 20px;
      margin-left: 4px;
      margin-top: 23px;
  }
  .price-txt{
      padding: 0 5px 0;
      display: flex;
      height: 30px;
      color: #fff;
      font-size: 14px;
      margin-left: 5px;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
      border-radius: 10px; /* 将值设置成高度的一半就可以实现椭圆*/
  }
  .detail-title1{
      display: flex;
      font-size: 13px;
      margin-top: 15px;
      width: 100%;
      /*使得左右两端对齐*/ 
      align-items: center;
      justify-content: space-between;
  }
  .detail-title2{
      height: 12px;
      display: flex;
      font-size: 12px;
      margin-top: 15px;
      width: 100%;
      /*使得左右两端对齐*/ 
      align-items: center;
      justify-content: space-between;
  }
  .detail-title2 img{
      width: 12px;
      vertical-align: middle
  }
  .detail-title2 p {
      display: inline-block;
      margin-left: 2px;
      line-height: 12px;
  }
</style>