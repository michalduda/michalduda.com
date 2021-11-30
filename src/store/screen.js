// stores/counter.js
import { defineStore } from 'pinia'

export const screenStore = defineStore('screen', {
  state: () => ({
    breakpointWidths: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    currentWidth: 0
  }),
  actions: {
    setWidth (width) {
      this.currentWidth = width
    }
  },
  getters: {
    breakpoints () {
      const breakpointsState = {}

      Object.entries(this.breakpointWidths)
        .forEach(([key, value]) => {
          breakpointsState[key] = this.currentWidth >= value
        })

      return breakpointsState
    }
  }
})

export const initScreenStoreValues = () => {
  const store = screenStore()
  store.setWidth(window.innerWidth)

  window.addEventListener('resize', () => {
    store.setWidth(window.innerWidth)
  })
}
