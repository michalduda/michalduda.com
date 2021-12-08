<template>
  <div
    class="news-feed__wrapper fixed top-0 left-0 w-full h-full grid grid-cols-12 z-index-5
      md:z-index-7"
  >
    <div
      class="news-feed__overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="closeNewsFeed"
    ></div>
    <NewsContent
      class="relative col-span-12
      sm:col-start-4 sm:col-end-13
      lg:col-start-7
      xl:col-start-9
    "
    />
  </div>
</template>

<script>
import NewsContent from '@/components/NewsFeed/NewsContent'
import { mapActions } from 'pinia'
import { applicationStore } from '@/store/application'

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
    ...mapActions(applicationStore, ['closeNewsFeed']),
    handleHamburgerClick () {

    }
  }
}
</script>

<style>

</style>
