<template>
  <div class="project-details">
    <div class="project-details__tags mt-4">
      <BaseTag
        v-for="(tag, index) in project.tags"
        :key="index"
        color="#f82013"
      >
        {{ tag }}
      </BaseTag>
    </div>
    <div class="project-details__header text-3xl font-secondary font-bold">
      {{ project.title }}
    </div>
    <div class="project-details__year text-3xl mt-1">
      {{ project.year }}
    </div>
    <div class="project-details__description mt-4">
      {{ project.description }}
    </div>
  </div>
</template>

<script>
import projectsStore from '@/store/projects'
import BaseTag from '@/components/BaseTag'

export default {
  components: {
    BaseTag
  },
  computed: {
    project () {
      return projectsStore.state.activeProject
    }
  }
}
</script>

<style>

</style>
