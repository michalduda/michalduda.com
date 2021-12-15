<template>
  <section
    class="experience-section relative mt-14
      lg:mt-24"
  >
    <SectionHeader
      border
      text="Roles"
    />
    <ExperienceItem
      v-for="(item, index) in experience"
      :key="index"
      :item="item"
    />
    <img
      src="@/assets/bg-3.png"
      aria-hidden
      alt="Background splash"
      class="experience-section__background absolute -z-index-1"
    >
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import ExperienceItem from '@/components/ExperienceSection/ExperienceItem'
import { mapState } from 'pinia'
import { experienceStore } from '@/store/experience'

export default {
  components: {
    SectionHeader,
    ExperienceItem
  },
  computed: {
    ...mapState(experienceStore, ['experience'])
  }
}
</script>

<style lang="scss">
.experience-section__background {
  transform: translate(-50%, -50%) rotate(45deg);
  top:50%;
  left: 0;
}
</style>
