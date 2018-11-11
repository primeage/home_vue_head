<template>
    <div>
      我是具名插槽标题
      <slot name="first">first</slot>
      <slot name="second"></slot>
      <slot name="third"></slot>
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'slot-named'
}
</script>

<style scoped>

</style>
