// 对axios，进行一个封装
import axios from 'axios'
import router from '../router'// 就像鱼把路由实例对象直接给引进来了
import { Message } from 'element-ui' // 引入一个提示信息对象
// 请求拦截器
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值黑马头条默认地址
axios.interceptors.request.use(function (config) {
// 是执行成功时执行
// config 这个就是axios的所有配置
  let token = window.localStorage.getItem('user-token') // 获取token令牌
  config.headers.Authorization = `Bearer ${token}` // 同意注入我的令牌
  return config // 返回config就会作为新的请求选项去进行请求
}, function () {
// 执行请求失败时执行
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决当data不存在时 then中读取数据报错问题
}, function (error) {
  console.log(error)
  // 失败时执行
  let status = error.response.status // 获取状态码 根据状态码进行提示
  //   let configurl = error.request.url
  let message = '' // 提示信息
  switch (status) {
    case 400:
      message = '手机号或者验证码错误'
      break
    case 403:
      // 如果同样的状态码 但是不同意思需要请求我们的请求地址是哪个的响应 请求地址+状态码
      router.push('/login')
      break
    case 507:
      message = '服务器数据异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      router.push('/login')
      break
    default:break
  }
  Message({ type: 'warning', message: message })
//   状态码提示
})
export default axios
