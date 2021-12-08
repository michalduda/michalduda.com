import { defineStore } from 'pinia'

export const applicationStore = defineStore('application', {
  state: () => ({
    menuModalOpen: false,
    newsFeedOpen: false,
    navigationLinks: [
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
    },
    closeMobileMenu () {
      this.menuModalOpen = false
    },
    openNewsFeed () {
      this.newsFeedOpen = true
    },
    closeNewsFeed () {
      this.newsFeedOpen = false
    }
  }
})
