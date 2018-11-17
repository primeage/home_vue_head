<template>
  <div>
    <h1>home</h1>
    <p>{{ homeMsg }}</p>
    <hr>
    <!--创建news和message标签-->
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
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
