<template>
  <div>
    <h1>about</h1>
    <p>{{ msg }}</p>
    <input type="text">

    <!--计算属性和侦听器-->
    <h4-title>计算属性和侦听器</h4-title>
    <div id="example">
      {{ message.split('').reverse().join('') }}
    </div>
    <hr>
    <h4-title>计算属性和侦听器-实例2</h4-title>
    <div id="example1">
      <p>Original message: " {{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '我是 about 组件',
      message: 'application is running!',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split(' ').reverse().join(' ')
    }
  },
  watch: {

  }
}
</script>

<style scoped>

</style>
