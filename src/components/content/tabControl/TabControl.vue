<template>
    <div class="controlbox">
      <div v-for="(item,index) in controllist" :key="index" class="controlitem" :class="{active: index === controlindex}" @click="itemclick(index)">
          <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    data() { 
      return {
          controlindex: 0
      }
    },
    methods: {
      //根据选中的item当前的index值更改data数据中controlindex的值 使其选中一个item 便将class赋予这个item
      itemclick(index) {
        this.controlindex = index
        this.$emit('tabclick',index)
      }
    },
    props: {
      controllist:{
        type: Array,
          defalut() {
            return []
          }
      }
    }
}
</script>

<style scoped>
.controlbox{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
}
.controlitem{
    flex: 1;
}
.controlitem span{
    padding: 0px 3px 3px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>