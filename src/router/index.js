import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Home2 from '../views/home/tome'
// import Commont from '../views/comment/'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    // 主页
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Home2
    }, {
      // 二级路由表
      path: 'comment',
      component: () => import('../views/comment/index.vue')
    }]
  }, {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
