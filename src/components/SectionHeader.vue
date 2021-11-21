<template>
  <div
    class="section-header font-bold py-4"
  >
    <h2 class="font-secondary text-3xl">
      # <slot />
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: String
    }
  }
}
</script>

<style>

</style>
