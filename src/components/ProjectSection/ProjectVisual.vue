<template>
  <div
    class="project-visual h-full flex"
  >
    <transition
      :name="transitionAnimationName"
      mode="out-in"
    >
      <img
        :key="activeProject.id"
        :src="require('@/assets/projects/' + activeProject.img)"
        :alt="activeProject.name"
        class="
          sm:object-cover
        "
      />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { projectsStore } from '@/store/projects'
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

export default {
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
