<template>
  <div class="keywords-section section grid mt-8 mb-14">
    <SectionHeader class="col-span-12">
      Keywords
    </SectionHeader>
    <KeywordsList class="col-span-12 mt-2"/>
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
