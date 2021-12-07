<template>
  <div class="news-content w-full bg-white">
    <perfect-scrollbar
      class="h-screen"
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
// import Tweet from '@/models/Tweet'
import TwitterTimeline from '@/components/NewsFeed/TwitterTimeline.vue'

export default {
  components: {
    TwitterTimeline
  },
  methods: {
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
