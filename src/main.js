import Vue from 'vue'
import App from './App.vue'
import './permission' // 直接引入一个js
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from './utils/requst' // 引入自己封装的一个axios
import Component from './components'
Vue.prototype.$axios = axios // 上面第一步赋值全局对象，这个不懂
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
