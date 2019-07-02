<template>
  <ul class="list">
    <li class="list-item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchstart"
        @touchmove="handleTouchmove"
        @touchend="handleTouchend"
        @click="handleClick"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      // 声明一个空数组
      const letters = []
      // 对cities对象进行循环遍历，是key值组成一个新的数组
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // 当数据更新完成后执行函数
  updated () {
    // 获取字母A到顶部的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 给每个字母选项绑定一个点击事件将其值传给父组件
    handleClick (e) {
      // 暴露一个事件，将值传给父组件
      this.$emit('change', e.target.innerText)
    },
    // 手指触摸时触发
    handleTouchstart () {
      this.touchStatus = true
    },
    // 手指滑动时触发
    handleTouchmove (e) {
      if (this.touchStatus) {
        // 设置节流阀，限制拖动速率
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取手指触摸屏幕到顶部搜索框下沿的高度
          const touchY = e.touches[0].clientY - 79
          // 计算手指触摸位置的字母索引
          const index = Math.floor((touchY - this.startY) / 20)
          // 判断index的范围
          if (index >= 0 && index < this.letters.length) {
            // 将其暴露给父组件
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    // 手指离开时触发
    handleTouchend () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    width .4rem
    text-align center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    .list-item
      line-height .44rem
      color $bgColor
</style>
