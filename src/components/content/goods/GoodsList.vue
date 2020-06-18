<template>
    <div class="goods">
        <goods-item v-for="(item,index) in goods" :key="index" :itemdata="item"></goods-item>
    </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
    name: 'Goodslist',
    components: {
        GoodsItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>