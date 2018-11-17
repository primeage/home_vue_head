// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import router from './router/router'
import store from './vuex/store'
// import hi from './mixins/mixin_simple'
import mixinConflict from './mixins/minxin_conflicting'

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router: router,
  // store是vuex
  store,
  // render: h => h(App),
  components: { App },
  template: '<App/>',
  // 混入 mixin
  // mixins: [hi],
  mixins: [mixinConflict],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  },
  mounted () {
    console.log('I\'m Vue in main.js')
  }
})

vm.foo()
vm.bar()
vm.conflicting()
