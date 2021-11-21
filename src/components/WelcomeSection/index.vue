<template>
  <div class="section welcome-section">
    <PersonalLogo class="row-start-1"/>
    <PageNavigation class="row-start-1 justify-self-end col-span-2"/>
    <MainHeader class="row-start-2 col-span-2 self-center"/>
    <ContactIcons class="row-start-4 mb-6"/>
    <ContactStatus class="row-start-5"/>
    <TimezoneBox class="row-start-5 col-span-3 justify-self-end"/>
  </div>
</template>

<script>
import PersonalLogo from '@/components/PersonalLogo'
import PageNavigation from '@/components/PageNavigation'
import MainHeader from '@/components/WelcomeSection/MainHeader'
import ContactIcons from '@/components/ContactIcons'
import ContactStatus from '@/components/ContactStatus'
import TimezoneBox from '@/components/TimezoneBox'

export default {
  name: 'WelcomeSection',
  components: {
    PersonalLogo,
    PageNavigation,
    MainHeader,
    ContactIcons,
    ContactStatus,
    TimezoneBox
  }
}
</script>

<style  lang="scss">
.welcome-section {
  min-height: 100vh;
  padding: 15px 0 60px 0;
    display: grid;
  // grid-template-columns: repeat(12, 1fr);
  justify-items: left;
  grid-template-rows: auto 1fr auto auto;
  grid-template-columns: repeat(2, auto) minmax(auto, 25%);
}
.welcome-section__personal-logo {
  grid-row: 1;
}
.welcome-section__website-navigation {
  grid-row: 1;
}
</style>
