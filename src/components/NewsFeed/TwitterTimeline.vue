<template>
  <div
    class="twitter-timeline"
    ref="twitterTimeline"
  >
  </div>
</template>

<script>
import createPageScript from '@/utils/createPageScript'

export default {
  props: {
    feedName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      observer: null
    }
  },
  async mounted () {
    await this.createTwitterScriptOnce()
    this.runTwitterScript()
    this.createObserver()
  },
  beforeUnmount () {
    this.destroyObserver()
    this.unbindRenderedEvent()
  },
  methods: {
    async createTwitterScriptOnce () {
      if (!window.twttr) {
        await createPageScript('//platform.twitter.com/widgets.js')
      }
    },
    bindRenderedEvent () {
      if (window.twttr?.events?.bind) {
        window.twttr.events.bind('rendered', (event) => {
          this.$emit('loaded')
        })
      }
    },
    createObserver () {
      this.observer = new ResizeObserver(entries => {
        this.$emit('loaded')
      })
      this.observer.observe(this.$refs.twitterTimeline)
    },
    unbindRenderedEvent () {
      if (window.twttr?.events?.unbind) {
        window.twttr.events.unbind('rendered')
      }
    },
    destroyObserver () {
      this.observer.disconnect()
    },
    createTimeline () {
      const root = this.$refs.twitterTimeline

      if (window.twttr?.widgets?.createTimeline) {
        const params = {
          sourceType: 'profile',
          screenName: this.feedName
        }
        const options = {
          chrome: ['noheader']
        }
        window.twttr.widgets.createTimeline(params, root, options)
      }
    },
    async runTwitterScript () {
      this.bindRenderedEvent()
      this.createTimeline()
    }
  }
}
</script>

<style>

</style>
