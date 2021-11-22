<template>
  <div class="keywords-section">
    <SectionHeader>
      Keywords
    </SectionHeader>
    <KeywordsList class="py-4"/>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import KeywordsList from '@/components/KeywordsSection/KeywordsList'

export default {
  components: {
    SectionHeader,
    KeywordsList
  }
}
</script>

<style>
.keywords-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
}
</style>
