<template>
  <div
    class="project-visual"
    :style="computedStyle"
  >

  </div>
</template>

<script>
import projectsStore from '@/store/projects'

export default {
  computed: {
    img () {
      return projectsStore.state.activeProject.img
    },
    computedStyle () {
      return {
        'background-image': `url(${require('@/assets/projects/' + this.img)})`
      }
    }
  }
}
</script>

<style>
.project-visual {
  height: 80vh;
  background-size: cover;
  background-position: center center;
}

</style>
