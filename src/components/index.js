import LayoutAside from './home/layout-aside'
import BreadCrumb from './common/bread-crumb'
import LayoutHeader from './home/layout-header'
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAside)
    Vue.component('layout-header', LayoutHeader)
    Vue.component('bread-crumb', BreadCrumb) // 全局注册一个面包屑
  }
}
