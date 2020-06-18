<template>
    <div>
        <navbar>
            <div slot="left" @click="backclick">
                <img src="~assets/image/common/back.svg" class="backimg" alt="">
            </div>
            <div slot="center" class="title">
               <div 
               v-for="(item,index) in title" 
               :key="index" 
               class="titleitem" 
               :class="{active:index === titlestyle}"
               @click="itemclick(index)"
               >{{item}}</div>
            </div>
        </navbar>
    </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

export default {
    name: 'DetailNavbar',
    components: {
        Navbar
    },
    data() {
        return {
            title: ['商品','参数','评论','推荐'],
            titlestyle: 0
        }
    },
    methods: {
        itemclick(index) {
            this.titlestyle = index
        },
        backclick() {
            this.$router.go(-1)
        }
    },
}
</script>

<style  scoped>
  .title{
      display: flex;
      font-size: 12px;
  }
  .titleitem{
      flex: 1;
  }
  .active{
      color: var(--color-high-text);
  }
  .backimg{
      margin-top: 10px;
  }
</style>