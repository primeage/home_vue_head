<template>
  <div>
    <button @click="sayHi(me)">ex mixin</button>
    <div v-if="this.visible">Toggle显示</div>
  </div>
</template>

<script>
import mixinP1 from '../../mixins/mixin-p1'

export default {
  name: 'mixin_ex',
  mixins: [mixinP1],
  methods: {
    sayHi: function (eme) {
      this.hello(eme)
      console.log(eme)
      this.visible = !this.visible
    }
  },
  data: function () {
    return {
      me: '我是 mixin_ex组件',
      visible: false,
      record: 'haha'
    }
  }
}
</script>

<style scoped>

</style>
