<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="(item,index) in Topimages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        Topimages: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.detail-swiper{
    height: 350px;
    overflow: hidden;
}
</style>