<template>
  <button
    class="hamburger hamburger--elastic"
    :class="{ 'is-active': active }"
    @click="$emit('toggle')"
    type="button"
  >
    <span
      class="hamburger-box"
    >
      <span
        class="hamburger-inner"
      ></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/hamburgers/hamburgers.scss';
.hamburger {
  &:focus {
    outline: none;
  }
}
</style>
