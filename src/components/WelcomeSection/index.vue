<template>
  <div class="section grid">
    <MainHeader class="col-span-12 mt-14"/>
    <ContactIcons class="col-span-12 mt-12"/>
    <ContactStatus class="col-span-12 mt-12"/>
    <TimezoneBox
      v-if="breakpoints.md"
      class="row-start-5 col-span-3 justify-self-end"
    />
  </div>
</template>

<script>
import MainHeader from '@/components/WelcomeSection/MainHeader'
import ContactIcons from '@/components/ContactIcons'
import ContactStatus from '@/components/ContactStatus'
import TimezoneBox from '@/components/TimezoneBox'
import { mapState } from 'pinia'
import { screenStore } from '@/store/screen'

export default {
  name: 'WelcomeSection',
  components: {
    MainHeader,
    ContactIcons,
    ContactStatus,
    TimezoneBox
  },
  computed: {
    ...mapState(screenStore, ['breakpoints'])
  }
}
</script>

<style  lang="scss">
</style>
