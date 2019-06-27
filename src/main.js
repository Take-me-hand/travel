// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 初始化样式文件
import 'styles/reset.css'
// 引入一像素问题解决文件
import 'styles/border.css'
// 引入字体图标样式表
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 解决移动端300毫秒问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
