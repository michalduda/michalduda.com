<template>
  <ul class="navigation-list">
    <li
      v-for="(link, index) in navigationLinks"
      :key="index"
    >
      <a
        :href="link.target"
        class="block"
        @click.prevent="handleScroll($event, link.target)"
      >
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { applicationStore } from '@/store/application'
import { screenStore } from '@/store/screen'
import scrollToElement from '@/utils/scrollToElement'

export default {
  computed: {
    ...mapState(applicationStore, ['navigationLinks']),
    ...mapState(screenStore, ['breakpoints'])
  },
  methods: {
    ...mapActions(applicationStore, ['toggleMobileMenu']),
    handleScroll (event, target) {
      if (!this.breakpoints.sm) {
        this.toggleMobileMenu()
      }
      this.$nextTick(() => {
        scrollToElement(event, target, -20)
      })
    }
  }
}
</script>

<style>
.navigation-list{
  margin: 0;
  padding: 0;
}

</style>
