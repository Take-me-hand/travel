<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id">
        <div class="item-img-wriper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
  //       title: '成都海昌极地海洋公园',
  //       desc: '蠢萌企鹅陪你嗨翻这个秋'
  //     },
  //     {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg	',
  //       title: '成都大熊猫繁育研究基地',
  //       desc: '看！熊猫宝宝在向你招手呢'
  //     },
  //     {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/1d/e74e796e4e21275427ffdd838619f45f.water.jpg_200x200_d994e778.jpg',
  //       title: '成都欢乐谷',
  //       desc: '超级旋转过山车刺激到让你怀疑人生'
  //     },
  //     {
  //       id: '0004',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
  //       title: '国色天乡·陆地乐园',
  //       desc: '镇园之宝眼镜蛇过山车'
  //     },
  //     {
  //       id: '0005',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
  //       title: '青城山',
  //       desc: '青城山下白素贞，洞中千年修此身'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    height: .8rem
    margin-top: .2rem
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    height: 1.9rem
    display: flex
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        background-color: #ff9300
        padding: .1rem
        border-radius: .06rem
        margin-top: .16rem
        line-height: .44rem
</style>
