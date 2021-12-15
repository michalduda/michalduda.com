<template>
  <div
    class="project-visual h-full flex"
  >
    <MouseWrapper class="flex">
      <transition
        :name="transitionAnimationName"
        mode="out-in"
      >
        <img
          :key="activeProject.id"
          :src="require('@/assets/projects/' + activeProject.img)"
          :alt="activeProject.title + 'cover'"
          class="sm:object-cover"
        />
      </transition>
    </MouseWrapper>
  </div>
</template>

<script>
import MouseWrapper from '@/components/MouseWrapper'
import { mapState } from 'pinia'
import { projectsStore } from '@/store/projects'
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

export default {
  components: {
    MouseWrapper
  },
  computed: {
    ...mapState(projectsStore, ['activeIndex', 'activeProject', 'assetsToPreload', 'transitionAnimationName'])
  },
  setup () {
    useHead({
      link: computed(() => {
        const store = projectsStore()

        return store.assetsToPreload.map(url => ({
          rel: 'preload',
          as: 'image',
          href: require('@/assets/projects/' + url)
        }))
      })
    })
  }
}
</script>
