<template>
  <div
    class="section-header section-header--with-border font-bold py-4"
    :class="{
      'border-b border-black': border
    }"
  >
    <h2
      class="font-secondary text-xl
        lg:text-2xl
        xl:text-3xl"
    >
      #{{text}}

    </h2>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    border: {
      type: Boolean
    }
  }
}
</script>

<style>

</style>
