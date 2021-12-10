<template>
  <div
    class="read-more-wrapper"
    v-if="enabled && !showFullText"
  >
    <p>
      {{ shortenedText}}<!--
    --><span>...</span>
      &nbsp;
      <button
        class="text-red"
        @click="showMore"
      >
        more
      </button>
    </p>
  </div>
  <slot v-else />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean
    }
  },
  data () {
    return {
      maxLength: 80,
      showFullText: false
    }
  },
  computed: {
    shortenedText () {
      const content = this.text

      return content.substr(0, this.maxLength)
    }
  },
  methods: {
    showMore () {
      this.showFullText = true
    }
  }
}
</script>

<style>

</style>
