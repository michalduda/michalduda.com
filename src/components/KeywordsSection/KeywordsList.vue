<template>
  <p class="keyword-list">
    <span
      class="keyword-list__item font-secondary text-2xl font-bold"
      v-for="(item, index) in keywords"
      :key="index"
    >
      {{ item }}
    </span>
  </p>
</template>

<script>
import { mapState } from 'pinia'
import { experienceStore } from '@/store/experience'

export default {
  computed: {
    ...mapState(experienceStore, ['keywords'])
  }
}
</script>

<style lang="scss">
.keyword-list__item:not(:last-child):after {
  content: ", ";
}
</style>
