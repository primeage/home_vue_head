import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import home from '../components/router-example/home'
import about from '../components/router-example/about'

// 告诉vue使用vueRouter
Vue.use(VueRouter)

const routers = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/about',
    component: about
  }
]

var router = new VueRouter({
  routes: routers // 重点: 是routes而不是routers
})

export default router
