import { defineStore } from 'pinia'

export const applicationStore = defineStore('application', {
  state: () => ({
    menuModalOpen: false,
    navigationLinks: [
      {
        label: 'News',
        target: ''
      },
      {
        label: 'About',
        target: '#about'
      },
      {
        label: 'Experience',
        target: '#experience'
      },
      {
        label: 'Works',
        target: '#works'
      },
      {
        label: 'Contact',
        target: '#contact'
      }
    ]
  }),
  actions: {
    toggleMobileMenu () {
      this.menuModalOpen = !this.menuModalOpen
    }
  }
})
