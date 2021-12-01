<template>
  <div class="projects-section section">
    <SectionHeader class="col-span-12 mt-4">
      Selected projects
    </SectionHeader>
    <ProjectDetails class="col-span-12 mt-4"/>
    <div class="projects-section__buttons-container col-span-12 stretch-to-edge">
      <SlideControls class="mb-4"/>
    </div>
    <div class="col-span-12 stretch-to-edge">
      <ProjectVisual />
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import ProjectDetails from '@/components/ProjectSection/ProjectDetails'
import ProjectVisual from '@/components/ProjectSection/ProjectVisual'
import SlideControls from '@/components/ProjectSection/SlideControls'

export default {
  components: {
    ProjectDetails,
    ProjectVisual,
    SectionHeader,
    SlideControls
  }
}
</script>

<style>
.projects-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid black;
}
.projects-section__buttons-container {
  position: sticky;
  top: calc(50vh - 22px);
  mix-blend-mode: exclusion;
  color: white;
}
</style>
