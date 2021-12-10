<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index"
      class="list-square ml-6"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>

</style>
