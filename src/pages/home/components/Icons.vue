<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-doc">{{item.doc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HeomeIcons',
  data () {
    return {
      iconsList: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', doc: '景点门票'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', doc: '一日游'},
        {id: '0003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', doc: '成都必游'},
        {id: '0004', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png', doc: '川剧变脸'},
        {id: '0005', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/aae239efe3496602.png', doc: '成都火锅'},
        {id: '0006', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png', doc: '碧峰峡'},
        {id: '0007', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', doc: '游乐场'},
        {id: '0008', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png', doc: '熊猫基地'},
        {id: '0009', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png', doc: '熊猫基地'}
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    // overflow: hidden
    height: 0
    padding-bottom: 50%
  .icon
    position: relative;
    overflow: hidden;
    float: left
    width: 25%
    padding-bottom: 25%
    .icon-img
      position: absolute;
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-doc
      position: absolute;
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
