<template>
    <div class="goodsitem" @click="itemclick">
        <img :src="itemdata.show.img" alt="" @load="imgload">
        <div class="goodstitle">
            <p>{{itemdata.title}}</p>
            <span class="price">{{itemdata.price}}</span>
            <span class="collect">{{itemdata.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsItem',
    props: {
        itemdata: {
            type: Object,
            default() {
                return []
            }
        }
    },
    methods: {
        // 在main.js里创建一个$bus事件，通过该事件向外发射一个图片加载完成的事件
        imgload() {
            this.$bus.$emit('itemimgload')
        },
        itemclick() {
            this.$router.push('/detail' + this.itemdata.iid)
        }
    },
}
</script>

<style scoped>
.goodsitem{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}
.goodsitem img{
    width: 100%;
    border-radius: 5px;
}
.goodstitle{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goodstitle p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.collect{
    position: relative;
}
.collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
}
</style>