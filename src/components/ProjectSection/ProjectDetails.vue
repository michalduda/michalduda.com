<template>
  <div class="project-details">
    <div class="project-details__tags mb-2">
      <BaseTag
        v-for="(tag, index) in project.tags"
        :key="index"
        color="#f82013"
      >
        {{ tag }}
      </BaseTag>
    </div>
    <div class="project-details__header text-2xl font-secondary font-bold">
      {{ project.title }}
    </div>
    <div class="project-details__year mt-1">
      {{ project.year }}
    </div>
    <div class="project-details__description my-8">
      {{ project.description }}
    </div>
    <div class="project-details__link mt-8">
      <a
        :href="project.link"
        class="font-secondary underline text-sm"
      >
        Link<!--
         --><img
          class="inline"
          src="@/assets/chevron.svg"
          alt="Go to icon"
        >
      </a>
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
