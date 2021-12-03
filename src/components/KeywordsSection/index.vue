<template>
  <section class="keywords-section section grid mt-8 mb-14">
    <SectionHeader
      class="col-span-12
        sm:col-span-5"
    >
      Keywords
    </SectionHeader>
    <KeywordsList
      class="col-span-12 mt-2
        sm:col-span-7"
    />
  </section>
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
</style>
