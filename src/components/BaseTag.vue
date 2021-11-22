<template>
  <span
    class="base-tag inline-block p-1 mr-3 mb-3 font-secondary"
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
      return {
        '--currentColor': this.color,
        '--textColor': isDarkColor(this.color) ? '#fff' : '#000'
      }
    }
  }
}
</script>

<style lang="scss">
.base-tag {
  border: 1px solid;
  font-size: 0.8em;
  border: 1px solid var(--currentColor);
  background: var(--currentColor);
  color: var(--textColor);
  &.base-tag--outlined {
    background: transparent;
    color: var(--textColor);
  }
}
</style>
