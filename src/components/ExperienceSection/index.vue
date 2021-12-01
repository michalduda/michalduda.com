<template>
  <section class="mt-14">
    <SectionHeader
      border
    >
      Experience
    </SectionHeader>
    <ExperienceItem
      v-for="(item, index) in experience"
      :key="index"
      :item="item"
    />
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

<style>

</style>
