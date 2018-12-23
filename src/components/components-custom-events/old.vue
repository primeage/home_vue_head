<template>
  <div>
    young内容：{{ young_content }}
  </div>
</template>

<script>
export default {
  name: 'old',
  data: function () {
    return {
      young_content: ' '
    }
  },
  mounted: function () {
    // this.$parent的使用
    // old和young组件在共同的父组件下面
    this.$parent.$on('send_content', function (data) {
      this.young_content = data
    }.bind(this))
  }
}
</script>

<style scoped>

</style>
