<template>
  <header class="page-header flex justify-between align-center mt-4">
    <PersonalLogo class="row-start-1"/>
    <HamburgerIcon
      v-if="!breakpoints.md"
    />
    <PageNavigation
      v-if="breakpoints.md"
      class="row-start-1 justify-self-end col-span-2"
    />
  </header>
</template>

<script>
import PersonalLogo from '@/components/PersonalLogo'
import HamburgerIcon from '@/components/WelcomeSection/HamburgerIcon'
import PageNavigation from '@/components/PageNavigation'
import { mapState } from 'pinia'
import { screenStore } from '@/store/screen'

export default {
  components: {
    PersonalLogo,
    HamburgerIcon,
    PageNavigation
  },
  computed: {
    ...mapState(screenStore, ['breakpoints'])
  }
}
</script>

<style>

</style>
