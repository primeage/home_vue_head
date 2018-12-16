<template>
  <div class="h4-title">
    <h4 align="left" >
      <slot></slot>
      <hr>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'h4-title'
}
</script>

<style scoped>
  .h4-title{
    color: navy;
  }
</style>
