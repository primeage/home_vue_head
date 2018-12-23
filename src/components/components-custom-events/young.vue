<template>
  <div><input @keyup="sendContent" type="text" v-model="content" placeholder="Input: ">
  内容是：{{ content }}</div>
</template>

<script>
export default {
  name: 'young',
  data: function () {
    return {
      content: ' '
    }
  },
  methods: {
    sendContent: function () {
      this.$parent.$emit('send_content', this.content)
    }
  }

}
</script>

<style scoped>

</style>
