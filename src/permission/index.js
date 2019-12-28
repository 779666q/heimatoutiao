// 这里桌权限拦截，（导航守卫）
import router from '../router'
// 全局前置守卫
router.beforeEach(function (to, form, next) {
  // console.log(to)
  // 我要去拦截谁 判断我的拦截地址
  //   startswith，是以什么什么为开头的意思
  if (to.path !== '/login') {
    // 进行权限判断，判断有误token，如果有就直接放过，如果没有让他直接返回登录页
    //   取到我的token
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('./login') // 强制跳转到登录页面去吧
    }
  } else {
    next() // 是直接放行的意思
  }
})
