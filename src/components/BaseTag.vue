<template>
  <span
    class="base-tag inline-block py-1 px-2 mr-3 mb-2 font-secondary font-sm
    lg:font-base"
    :class="{
      'base-tag--outlined': outlined
    }"
    :style="inlineStyle"
  >
    <slot />
  </span>
</template>

<script>
import isDarkColor from 'is-dark-color'

export default {
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    color: {
      default: '#000000'
    }
  },
  computed: {
    inlineStyle () {
      const options = {
        override: {
          '#f82013': true
        }
      }
      return {
        '--currentColor': this.color,
        '--textColor': isDarkColor(this.color, options) ? '#fff' : '#000'
      }
    }
  }
}
</script>

<style lang="scss">
.base-tag {
  border: 1px solid;
  border: 1px solid var(--currentColor);
  background: var(--currentColor);
  color: var(--textColor);
  &.base-tag--outlined {
    background: transparent;
    color: var(--currentColor);
  }
}
</style>
