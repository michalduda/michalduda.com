<template>
  <section
    class="section about-section grid mt-14 relative
      lg:mt-24
      xxl:my-32"
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
        I have more than 5 years of commercional experience as a developer, solution architect and a team lead.
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
    <img
      src="@/assets/bg-2.png"
      alt=""
      class="about-section__background absolute"
    >
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
.about-section__background {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 33%;
}
</style>
