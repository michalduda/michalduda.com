<template>
  <section class="section welcome-section grid relative">
    <MainHeader
      class="col-span-12 mt-14 self-center
      lg:col-span-12
      xl:col-span-10"
    />
    <ContactIcons
      class="col-span-12 mt-12 items-center
      lg:self-end"
    />
    <ContactStatus
      class="col-span-12 mt-12 mb-6
        sm:col-span-6
        md:mb-8
        xl:mb-10"
    />
    <TimezoneBox
      v-if="breakpoints.sm"
      class="col-span-6 justify-self-end self-center mb-6
        sm:col-span-6
        md:mb-8
        xl:mb-10"
    />
    <img
      src="@/assets/bg-1.png"
      aria-hidden="true"
      alt="Background splash"
      class="welcome-section__background absolute -z-index-1"
    >
  </section>
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
.welcome-section {
  min-height: calc(100vh - 60px - 57px);
  grid-template-rows: min-content auto min-content;
  @include sm {
    min-height: calc(100vh - 60px);
  }
  @media (min-height: 666px) {
    grid-template-rows: 1fr min-content min-content;
  }
  @include lg {
    grid-template-rows: 4fr 1fr min-content;
  }
}
.welcome-section__background {
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
