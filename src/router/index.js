import Vue from 'vue'
import Router from 'vue-router'
import head from '@/components/head'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'head',
      component: head
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
