<template>
  <section
    class="keywords-section section grid mt-8 mb-14
    sm:my-16
    md:my-18
    xl:my-20
    xxl:my-24
  "
  >
    <SectionHeader
      class="col-span-12
        sm:col-span-5
        lg:col-span-6"
      text="Keywords"
    />
    <KeywordsList
      class="col-span-12 mt-2
        sm:col-span-7
        lg:col-span-6"
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
