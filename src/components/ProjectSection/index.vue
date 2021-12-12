<template>
  <section
    class="projects-section section grid border-b border-black
      sm:border-t"
  >
    <SectionHeader
      class="col-span-12 mt-4"
      text="Selected projects"
      v-if="!breakpoints.sm"
    />

    <div
      class="col-span-12 stretch-to-edge overflow-hidden
        sm:col-span-5 sm:row-start-2 sm:col-start-8
        lg:col-span-6 lg:col-start-7"
    >
      <ProjectVisual />
    </div>
    <ProjectDetails
      class="col-span-12 mt-4
        sm:col-span-6 sm:row-start-2 sm:my-8
        lg:col-span-5"
    />
    <div
      class="projects-section__buttons-container col-span-12 stretch-to-edge"
      v-if="!breakpoints.sm"
    >
      <SlideControls class="mb-4"/>
    </div>
  </section>
</template>

<script>
import ProjectDetails from '@/components/ProjectSection/ProjectDetails'
import ProjectVisual from '@/components/ProjectSection/ProjectVisual'
import SlideControls from '@/components/ProjectSection/SlideControls'
import SectionHeader from '@/components/SectionHeader'
import { mapState } from 'pinia'
import { screenStore } from '@/store/screen'

export default {
  components: {
    ProjectDetails,
    ProjectVisual,
    SlideControls,
    SectionHeader
  },
  computed: {
    ...mapState(screenStore, ['breakpoints'])
  }
}
</script>

<style>

/* .projects-section__buttons-container {
  position: sticky;
  top: calc(50vh - 22px);
  mix-blend-mode: exclusion;
  color: white;
} */
</style>
