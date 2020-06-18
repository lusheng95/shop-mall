<template>
    <div>
        <detail-navbar></detail-navbar>
        <detail-swiper :Topimages="Topimage"></detail-swiper>
        <detail-base-info :Goods="Goods"></detail-base-info>
    </div>
</template>

<script>
import DetailNavbar from './childcomp/DetailNavbar'
import DetailSwiper from './childcomp/DetailSwiper'
import DetailBaseInfo from './childcomp/DetailBaseInfo'

import {getDetaildata, Goods} from 'network/detail'

export default {
    name: 'Detail',
    components: {
      DetailNavbar,
      DetailSwiper,
      DetailBaseInfo
    },
    data() {
        return {
            iid: null,
            Topimage: [],
            Goods: {}
        }
    },
    created() {
        // 获取该商品的id 
        this.iid = this.$route.params.iid
        // 请求数据
        getDetaildata(this.iid).then(res => {
            const data = res.result
            // 将轮播图的数据请求并赋予给当前的Topimage
            this.Topimage = data.itemInfo.topImages
            console.log(res);
            // 数据请求中创建的Goods对象创建后通过指定的路径筛选出需要的数据并赋予给当前的Goods对象
            this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        })
    },
}
</script>

<style  scoped>

</style>