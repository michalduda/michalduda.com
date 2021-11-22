<template>
  <div class="about-section">
    <div class="row-start-1 col-start-1 text-3xl">
      <p class=" self-end mb-4 font-secondary">
        I enjoy solving problems, creating products and working with commited people.
      </p>
      <p class="">
        I have more than 5 years of commercional experience as a developer and a team lead.
      </p>
    </div>
    <SelectWrapper class="row-start-2 col-start-3 text-2xl row-start-1">
      "Code is like humor. When you have to explain it, it’s bad"
      <br /> - Cory House
    </SelectWrapper>
  </div>
</template>

<script>
import SelectWrapper from '@/components/SelectWrapper'

export default {
  components: {
    SelectWrapper
  }
}
</script>

<style>
.about-section {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 30px 1fr;
  padding: 20vh 0;
}
</style>
