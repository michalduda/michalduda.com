<template>
  <div
    class="mouse-wrapper relative"
    ref="target"
    @click="handleClick"
  >
    <slot />
    <transition name="scale">
      <div
        v-if="!isOutside"
        class="mouse-wrapper__cursor"
        :style="computedStyle"
      >
        <img
          src="@/assets/arrow.svg"
          alt="Arrow"
          aria-hidden
          class="transform w-24 max-w-none"
          :class="{
            'rotate-90': isLeftHalf,
            '-rotate-90': !isLeftHalf,
          }"
        >
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import { projectsStore } from '@/store/projects'

export default {
  setup () {
    const target = ref(null)

    const { elementWidth, elementX, elementY, isOutside } = useMouseInElement(target)

    const computedStyle = computed(() => ({
      top: elementY.value + 'px',
      left: elementX.value + 'px'
    }))

    const isLeftHalf = computed(() => (elementX.value < elementWidth.value / 2))

    const { handleIncrement, handleDecrement } = projectsStore()
    const handleClick = () => {
      if (isLeftHalf.value) {
        handleDecrement()
      } else {
        handleIncrement()
      }
    }

    return { handleClick, target, computedStyle, isOutside, isLeftHalf }
  }
}
</script>

<style lang="scss">
.mouse-wrapper {
  cursor: none
}
.mouse-wrapper__cursor {
  position: absolute;
  transform: translate(-50%, -50%) scale(100%,100%);
  mix-blend-mode: exclusion;

}

.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;

}

.scale-enter-from,
.scale-leave-to {
  transform: translate(-50%, -50%) scale(50%,50%);
  opacity: 0;
}
</style>
