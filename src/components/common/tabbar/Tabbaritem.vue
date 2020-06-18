<template>
  <div class="tab-bar-item" @click="Tabbarclick">
    <div v-if="isactive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  props: {
    path: String, // 传入点击的页面
    activecolor: {
      type: String,
      defult: 'red'
    }
  },
  data () {
    return {}
  },
  methods: {
    Tabbarclick () {
      this.$router.push(this.path) // 跳转页面
    }
  },
  computed: {
    isactive () {
      return this.$route.path.indexOf(this.path) === -1 // 判断当前活跃页面的路径和当前组件中的path是否相等改变v-if显示的图片
    },
    activestyle () {
      return this.isactive ? {} : { color: this.activecolor } // 获取数据动态给文字绑定style
    }
  }
}
</script>

<style>
  .tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 12px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
</style>
