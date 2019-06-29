<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wriper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
  // data () {
  //   return {
  //     /* weekendList: [{ */
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
  //       title: '成都必打卡',
  //       desc: '成都的标志，也是现代人对老成都的记忆'
  //     },
  //     {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
  //       title: '远离烧烤模式',
  //       desc: '与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会，艰辛会有的，可这都是值得的'
  //     },
  //     {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
  //       title: '摩崖石刻造像',
  //       desc: '诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
  //     },
  //     {
  //       id: '0004',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
  //       title: '成都文艺范儿',
  //       desc: '《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'
  //     },
  //     {
  //       id: '0005',
  //       imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
  //       title: '玩转主题乐园',
  //       desc: '乐园，与青春作伴'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    height: .8rem
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item-img-wriper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
		.item-img
			width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
