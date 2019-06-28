// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 初始化样式样式表
import 'styles/reset.css'
// 引入一像素问题解决的样式表
import 'styles/border.css'
// 引入字体图标样式表
import 'styles/iconfont.css'
// 引入轮播图插件的样式表
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 解决移动端300毫秒问题
fastClick.attach(document.body)
// 注册轮播图插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
