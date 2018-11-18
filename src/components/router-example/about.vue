<template>
  <div>
    <h1>about</h1>
    <p>{{ msg }}</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '我是 about 组件'
    }
  }
}
</script>

<style scoped>

</style>
