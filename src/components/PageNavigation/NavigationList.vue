<template>
  <ul class="navigation-list">
    <li
      v-for="(link, index) in navigaionLinksWithActions"
      :key="index"
    >
      <a
        :href="link.target || '#'"
        class="block"
        @click.prevent="link.action($event)"
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
    ...mapState(screenStore, ['breakpoints']),
    navigaionLinksWithActions () {
      const customLinksWithActions = [
        {
          label: 'News',
          action: this.openNewsFeed
        }
      ]

      const navigationLinksWithActions = this.navigationLinks.map(({ label, target }) => {
        return {
          label,
          target,
          action: this.createScrollHandler(target)
        }
      })

      return [
        ...customLinksWithActions,
        ...navigationLinksWithActions
      ]
    }
  },
  methods: {
    ...mapActions(applicationStore, ['toggleMobileMenu', 'openNewsFeed']),
    createScrollHandler (target) {
      return (event) => {
        if (!this.breakpoints.sm) {
          this.toggleMobileMenu()
        }
        this.$nextTick(() => {
          scrollToElement(event, target, -20)
        })
      }
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
