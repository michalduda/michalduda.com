import { defineStore } from 'pinia'

export const attributionsStore = defineStore('attributions', {
  state: () => ({
    attributionsModalOpen: false,
    attributions: [
      {
        text: 'Abstract background photo created by rawpixel.com - www.freepik.com',
        link: 'https://www.freepik.com/photos/abstract-background'
      }
    ]
  }),
  actions: {
    closeAttributionsModal () {
      this.attributionsModalOpen = false
    }
  }
})
