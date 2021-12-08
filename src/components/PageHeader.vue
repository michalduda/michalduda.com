<template>
  <header
    class="page-header grid align-center mt-4 relative z-index-6 items-center
      md:mt-6
      xl:mt-8"
  >
    <PersonalLogo
      class="row-start-1 col-span-6
      sm:col-span-4"
    />
    <HamburgerIcon
      v-if="!breakpoints.md"
      :active="menuModalOpen"
      @click="handleHamburgerClick"
      class="col-end-13"
    />
    <HorizontalNavigation
      v-if="breakpoints.md"
      class="row-start-1
        sm:col-span-8
        lg:col-span-6 lg:col-end-13"
    />
  </header>
</template>

<script>
import PersonalLogo from '@/components/PersonalLogo'
import HamburgerIcon from '@/components/HamburgerIcon'
import HorizontalNavigation from '@/components/PageNavigation/HorizontalNavigation'
import { mapState, mapActions } from 'pinia'
import { screenStore } from '@/store/screen'
import { applicationStore } from '@/store/application'

export default {
  components: {
    PersonalLogo,
    HamburgerIcon,
    HorizontalNavigation
  },
  computed: {
    ...mapState(screenStore, ['breakpoints']),
    ...mapState(applicationStore, ['menuModalOpen'])
  },
  methods: {
    ...mapActions(applicationStore, ['toggleMobileMenu', 'closeNewsFeed']),
    handleHamburgerClick () {
      this.toggleMobileMenu()
      this.closeNewsFeed()
    }
  }
}
</script>

<style>

</style>
