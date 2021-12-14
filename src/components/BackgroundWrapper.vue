<template>
  <div
    class="relative"
    ref="el"
  >
    <slot />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      :height="height + 'px'"
      class="absolute w-full bottom-0 -z-index-1"
    >
      <defs>
        <radialGradient
          id="rgrad"
          cx="50%"
          cy="50%"
          r="50%"
        >

          <stop
            offset="0%"
            style="stop-color:rgb(248,32,19);stop-opacity:0.40"
          />
          <stop
            offset="80%"
            style="stop-color:rgb(248,32,19);stop-opacity:0.00"
          />
          <stop
            offset="100%"
            style="stop-color:rgb(248,32,19);stop-opacity:0.00"
          />

        </radialGradient>
      </defs>
      <ellipse
        cx="50%"
        cy="100%"
        rx="65%"
        :ry="height + 'px'"
        style="fill:url(#rgrad)"
      />
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

export default {
  setup () {
    const el = ref(null)
    const { height } = useElementBounding(el)

    return {
      el,
      height
    }
  }
}
</script>

<style>

</style>
