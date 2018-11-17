import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import home from '../components/router-example/home'
import about from '../components/router-example/about'
import news from '../components/router-example/news'
import message from '../components/router-example/message'

// 告诉vue使用vueRouter
Vue.use(VueRouter)

const routers = [
  {
    path: '/home',
    component: home,
    children: [// 嵌套路由
      {
        path: '/home/news',
        component: news
      },
      {
        path: 'message', // /home/message 改为 message
        component: message
      }
    ]
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
