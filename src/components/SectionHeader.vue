<template>
  <div
    class="section-header section-header--with-border font-bold py-4"
    :class="{
      'border-b border-black': border
    }"
  >
    <h2 class="font-secondary text-xl">
      # <slot />
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean
    }
  }
}
</script>

<style>

</style>
