<template>
  <section
    class="section grid mt-14
      lg:mt-24"
  >
    <div
      class="col-span-12 text-xl
        sm:col-span-6
        md:text-2xl
        lg:text-3xl
        xxl:text-4xl"
    >
      <p class="self-end mb-4">
        I enjoy solving problems, creating products and working with commited people.
      </p>
      <p class="">
        I have more than 5 years of commercional experience as a developer and a team lead.
      </p>
    </div>
    <SelectWrapper
      class="col-span-12 text-xl mt-8 justify-self-start
        sm:col-span-5 sm:mt-0 sm:self-start sm:col-start-8
        md:text-2xl
        lg:text-3xl
        xxl:text-4xl"
    >
      "Code is like humor. When you have to explain it, it’s bad"
      <br /> - Cory House
    </SelectWrapper>
  </section>
</template>

<script>
import SelectWrapper from '@/components/SelectWrapper'

export default {
  components: {
    SelectWrapper
  }
}
</script>

<style lang="scss">
</style>
