<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in bannerlist" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperimg">
        </a>
      </swiper-item>
    </swiper> 
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
    name: 'HomeSwiper',
    data() {
      return {
        isimg: false
      }
    },
    props: {
      bannerlist: {
          type: Array,
          // 给一个默认的值 一个空数组
          default() {
              return []
          }
      }
    },
    methods: {
      // 设置一个if事件使得加载完成的信息只会发送出去一次
      swiperimg() {
        if(!this.isimg) {
          this.$emit('swiperimg')
          this.isimg = true
        }
      }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>