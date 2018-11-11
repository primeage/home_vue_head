<template>
   <div>
     <slot say="Hello, 我是slot-scope实例"></slot>
   </div>
</template>

<script>
export default {
  name: 'slot-scoped'
}
</script>

<style scoped>

</style>
