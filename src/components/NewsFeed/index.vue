<template>
  <div class="news-feed__wrapper fixed top-0 left-0 w-full h-full grid grid-cols-12 z-index-5">
    <div
      class="news-feed__overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="closeNewsFeed"
    ></div>
    <NewsContent class="relative col-span-4 col-end-13"/>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { applicationStore } from '@/store/application'
import NewsContent from '@/components/NewsFeed/NewsContent'

export default {
  components: {
    NewsContent
  },
  mounted () {
    document.body.classList.add('no-scroll')
  },
  beforeUnmount () {
    document.body.classList.remove('no-scroll')
  },
  methods: {
    ...mapActions(applicationStore, ['closeNewsFeed'])
  }
}
</script>

<style>

</style>
