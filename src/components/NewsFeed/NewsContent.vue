<template>
  <div
    class="news-content relative w-full bg-white pt-14
    md:pt-0"
  >
    <CloseButton
      class="absolute p-3 z-index-2"
      @click="closeNewsFeed"
    />
    <perfect-scrollbar
      class="
      h-screen"
      ref="ps"
    >
      <div class="news-content__wrapper">
        <TwitterTimeline
          feedName="thismichalduda"
          @loaded="handleLoaded"
        />
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import TwitterTimeline from '@/components/NewsFeed/TwitterTimeline'
import CloseButton from '@/components/NewsFeed/CloseButton'
import { mapState, mapActions } from 'pinia'
import { screenStore } from '@/store/screen'
import { applicationStore } from '@/store/application'

export default {
  components: {
    TwitterTimeline,
    CloseButton
  },
  computed: {
    ...mapState(screenStore, ['breakpoints'])
  },
  methods: {
    ...mapActions(applicationStore, ['closeNewsFeed']),
    handleLoaded () {
      this.$refs.ps.update()
    }
  }
}
</script>

<style scoped>
.news-content__wrapper {
  padding: var(--padding-x);
}
</style>
