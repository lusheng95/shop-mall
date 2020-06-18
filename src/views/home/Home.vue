<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
    <tab-control @tabclick="tabclick" class="controlpos" :controllist="['流行','新款','精品']" ref="tabcontrol2" v-show="swipershow"></tab-control>
    <scroll class="content" 
            ref="scr" 
            :probe-type="3" 
            @scroll="scrolltop"
            :pull-up-load="true"
            @pullingUp="moreload"
            >
      <home-swiper :bannerlist='bannerlist' @swiperimg="swiperimg"></home-swiper>
      <home-recommend :recommends='recommends'></home-recommend>
      <img-view></img-view>
      <tab-control @tabclick="tabclick" class="controlpos" :controllist="['流行','新款','精品']" ref="tabcontrol1"></tab-control>
      <goods-list class="goodsitem" :goods="showgoods"></goods-list>
    </scroll>
    <back-top @click.native="backtopclick" v-show="topshow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backtop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import ImgView from './childComps/ImgView'

import { getHomedata, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    ImgView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return {
      bannerlist: [],
      recommends: [],
      // 创建一个对象用于管理商品数据
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      // 储存control当前点击的类型
      controldata: 'pop',
      topshow: false,
      swpoffsetTop: 0,
      swipershow: false,
      scrollY: 0
    }
  },
  computed: {
    showgoods() {
      return this.goods[this.controldata].list
    }
  },
  activated() {
    this.$refs.scr.scroll.scrollTo(0, this.scrollY ,0) // 返回页面时直接跳转到当时记录的y轴坐标
    this.$refs.scr.scroll.refresh() // 进行一次刷新防止scroll滚动失效
    console.log(this.scrollY);
    
  },
  deactivated() {
    this.scrollY = this.$refs.scr.getscrollY() // 将切换页面时当前scroll的y轴坐标记录在数据中
  },
  created () {
    this.getHomedata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // 接受goodsitem发送的图片加载完成的事件 
    this.$bus.$on('itemimgload',() => {
      this.$refs.scr.scroll.refresh()
    })
  },
  methods: {
    // 获取当前离tabcontrol的距离 根据这个距离判断创建的另一个tabcontrol是否显示 使得其吸顶
    swiperimg() {
      this.swpoffsetTop = this.$refs.tabcontrol1.$el.offsetTop
    },
    // 监听control点击的变化
    tabclick(index) {
      switch (index) {
        case 0:
          this.controldata = 'pop'
          break
        case 1:
          this.controldata = 'new'
          break
        case 2:
          this.controldata = 'sell'
          break
      }
      this.$refs.tabcontrol1.controlindex = index
      this.$refs.tabcontrol2.controlindex = index
    },
    getHomedata() {
      // 网络请求会返回一个promise函数,所以直接.then请求
      getHomedata().then(res => {
        this.bannerlist = res.data.banner.list
        this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type) {
      // 创建一个page对象 使每次使用完函数后page+1 
      const page = this.goods[type].page + 1
      // 获取接口data数据
      getHomeGoods(type,page).then(res => {
        // 将接口数据里的内容加入到goods对象对应的key中
        this.goods[type].list.push(...res.data.list)
        // 并使得当前page+1
        this.goods[type].page += 1
        // 调用scroll中的方法
        this.$refs.scr.finishPullUp()
      })
    },
    backtopclick() {
      // 通过ref定位获取scroll组件 并调用里面的topclick函数
      this.$refs.scr.topclick(0, 0)
    },
    scrolltop(postion) {
    // 监听滚动区域的y轴是否超出一千 超出则将backtop组件改成显示
      this.topshow = (-postion.y) > 1000

      this.swipershow = (-postion.y) > this.swpoffsetTop 
    },
    // 监听事件使得触发下拉加载更多的时候向服务器请求下面的数据
    moreload() {
      this.getHomeGoods(this.controldata)
    }
  },  
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.navbar{
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9; 
}
.controlpos{
  /*该定位类型可将滚动定位至选定的位置*/
  position: relative;
  z-index: 9;
}
.goodsitem{
  display: flex;
  /*使一行中按元素的宽度包裹元素 */
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
