<template>
  <div class="projects-section">
    <ProjectDetails class="col-start-1"/>
    <ProjectVisual class="col-start-2"/>
  </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectSection/ProjectDetails'
import ProjectVisual from '@/components/ProjectSection/ProjectVisual'

export default {
  components: {
    ProjectDetails,
    ProjectVisual
  }
}
</script>

<style>
.projects-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

</style>
