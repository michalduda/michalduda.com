<template>
  <button
    class="hamburger hamburger--elastic"
    :class="{ 'is-active': active }"
    @click="toggle"
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
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
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
