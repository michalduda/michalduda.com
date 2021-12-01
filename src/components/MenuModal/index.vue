<template>
  <div class="menu-modal fixed grid justify-start w-full h-full top-0 left-0">
    <VerticalNavigation />
    <ContactIcons class="mt-24" />
    <TimezoneBox class="mt-12"/>
  </div>
</template>

<script>
import VerticalNavigation from '@/components/PageNavigation/VerticalNavigation'
import ContactIcons from '@/components/ContactIcons'
import TimezoneBox from '@/components/TimezoneBox'

export default {
  components: {
    VerticalNavigation,
    ContactIcons,
    TimezoneBox
  },
  mounted () {
    document.body.classList.add('no-scroll')
  },
  beforeUnmount () {
    document.body.classList.remove('no-scroll')
  }
}
</script>

<style>
.menu-modal {
  background: var(--light-gray);
  z-index: 3;
  padding: 78px var(--padding-x) var(--padding-x) var(--padding-x);
  padding-top: 78px;
  grid-template-rows: 1fr auto auto;
}
</style>
