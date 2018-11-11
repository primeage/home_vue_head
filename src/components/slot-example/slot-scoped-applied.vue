<template>
  <div>
    <ul>
      <li v-for="list in lists" :key="list.id">
        <slot :b="list"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'slot-scoped-applied',
  props: ['lists']
}
</script>

<style scoped>

</style>
