<template>
    <div class="wrapper" ref="wra">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null,
        }
    },
    props:{
        probeType: {
                type: Number,
                default() {
                  return 0
                }
            },
        pullUpLoad: {
                type: Boolean,
                default() {
                  return false
                }
            }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wra,{
            click: true,
            // 数字0，1不监听、数字3监听
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        // 监听当前滚动到的区域 将值发送给父组件
        this.scroll.on('scroll',postion => {
            this.$emit('scroll',postion)
        })
        // 监听上拉加载更多
        this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
        })
    },
    methods: {
        // 使当前页面回到顶部 默认时间3毫秒
        topclick(x, y, time=500) {
            this.scroll.scrollTo(x, y, time)
        },
        // 使下拉加载完数据后 可以再一次拉取数据
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        getscrollY() {
            //判断是否有scroll值 有则返回scroll的y 
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>
<style scoped>

</style>