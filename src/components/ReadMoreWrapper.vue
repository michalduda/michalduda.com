<template>
  <div class="read-more-wrapper">
    {{ showFullText ? text : shortenedText}}<!--
    --><span v-if="!showFullText">...</span>
    &nbsp;
    <button
      v-if="!showFullText"
      class="text-red"
      @click="showMore"
    >
      more
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
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
