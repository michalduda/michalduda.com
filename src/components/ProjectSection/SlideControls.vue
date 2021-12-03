<template>
  <div class="slide-controls font-secondary flex justify-end text-lg">
    <button
      class="slide-controls__prev px-3 py-2 mr-1"
      @click="handleDecrement"
    >
      Prev
    </button>
    <button
      class="slide-controls__next px-3 py-2 mr-1"
      @click="handleIncrement"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { projectsStore } from '@/store/projects'

export default {
  methods: {
    ...mapActions(projectsStore, ['handleDecrement', 'handleIncrement'])
  }
}
</script>

<style>

</style>
