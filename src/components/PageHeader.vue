<template>
  <header
    class="page-header flex justify-between align-center mt-4 relative z-index-4
      md:mt-6
      xl:mt-8"
  >
    <PersonalLogo class="row-start-1"/>
    <HamburgerIcon
      v-if="!breakpoints.md"
      :active="menuModalOpen"
      @toggle="toggleMobileMenu"
    />
    <HorizontalNavigation
      v-if="breakpoints.md"
      class="row-start-1 justify-self-end col-span-2"
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
    ...mapActions(applicationStore, ['toggleMobileMenu'])
  }
}
</script>

<style>

</style>
