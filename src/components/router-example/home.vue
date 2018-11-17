<template>
  <div>
    <h1>home</h1>
    <p>{{ homeMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      homeMsg: '我是home组件'
    }
  }
}
</script>

<style scoped>

</style>
