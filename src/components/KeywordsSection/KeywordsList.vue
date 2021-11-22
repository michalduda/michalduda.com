<template>
  <p class="keyword-list">
    <span
      class="keyword-list__item font-secondary text-5xl font-bold"
      v-for="(item, index) in keywords"
      :key="index"
    >
      {{ item }}
    </span>
  </p>
</template>

<script>
export default {
  data () {
    return {
      keywords: [
        'JavaScript',
        'ES6+',
        'Vue.js',
        'SPA',
        'Web App',
        'Node.js',
        'SCSS',
        'Git',
        'Jira',
        'SCRUM',
        'Agile'
      ]
    }
  }
}
</script>

<style lang="scss">
.keyword-list__item:not(:last-child):after {
  content: ", ";
}
</style>
