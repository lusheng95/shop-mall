<template>
    <div  class="recombox">
        <div v-for="(item,index) in recommends" :key="index" class="recomitem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        recommends:{
          type: Array,
          default() {
            return []
          }
        }
    }
}
</script>

<style scoped>
.recombox{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 5px 0 15px;
    border-bottom: 5px solid #eee;
}
.recomitem{
    flex: 1;
}
.recomitem img{
    width: 72px;
    height: 72px;
    margin-bottom: 5px;
}
</style>