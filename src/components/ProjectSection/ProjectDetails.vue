<template>
  <transition
    :name="!breakpoints.sm ? transitionAnimationName : 'fade'"
    mode="out-in"
  >
    <div
      class="project-details"
      :key="activeProject.id"
    >
      <div class="project-details__tags mb-2">
        <BaseTag
          v-for="(tag, index) in activeProject.tags"
          :key="index"
          color="#f82013"
        >
          {{ tag }}
        </BaseTag>
      </div>
      <div
        class="project-details__header  font-secondary font-bold text-2xl
          lg:text-3xl
          xl:text-4xl"
      >
        {{ activeProject.title }}
      </div>
      <div
        class="project-details__year mt-1
        xl:text-xl"
      >
        {{ activeProject.year }}
      </div>
      <div
        class="project-details__description my-8
        xl:text-xl whitespace-pre-wrap"
      >
        {{ activeProject.description }}
      </div>
      <div
        class="project-details__link mt-8"
      >
        <a
          :href="activeProject.link"
          class="font-secondary underline text-sm"
          v-if="activeProject.link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Link<!--
         --><img
          class="inline"
          src="@/assets/chevron.svg"
          alt="Go to icon"
        >
        </a>
        <p
          v-else
          class="underline"
        >
          No public link available
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseTag from '@/components/BaseTag'
import { mapState } from 'pinia'
import { projectsStore } from '@/store/projects'
import { screenStore } from '@/store/screen'

export default {
  components: {
    BaseTag
  },
  computed: {
    ...mapState(projectsStore, ['activeProject', 'transitionAnimationName']),
    ...mapState(screenStore, ['breakpoints'])
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style>
.fade-x-up-enter-from,
.fade-x-up-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-x-up-enter-active,
.fade-x-up-leave-to {
  transition: opacity 0.3s, transform 0.5s;
}
</style>
