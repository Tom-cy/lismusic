import Vue from 'vue'
import App from './App'
import router from './router'


// 引入Svg
import '@/icons'
// 引入基本css配置
import 'styles/reset.css'
import 'styles/border.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
