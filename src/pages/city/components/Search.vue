<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list " :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配的数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeSearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let item in this.cities) {
          this.cities[item].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: .1rem
    background-color: $bgColor
    .search-input
      box-sizing border-box
      width: 100%
      height .62rem
      line-height .62rem
      margin-top .05rem
      padding 0 .1rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    position absolute
    z-index 100
    overflow hidden
    top 1.78rem
    left 0
    right 0
    bottom 0
    background-color #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background-color #fff
</style>
