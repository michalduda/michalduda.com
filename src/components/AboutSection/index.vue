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
        <img
          src="@/assets/about-icons/rocket.png"
          alt=""
          class="inline-block h-4e ml-1"
        >
      </p>
      <p class="mb-4">
        I have more than {{ yearsOfExperience }} years of commercial experience
        <img
          src="@/assets/about-icons/skyline.png"
          alt=""
          class="inline-block h-4e ml-1"
        >
        as a developer, lead and solution architect.
      </p>
      <p class="mb-4">
        During this time, I've created landing pages, eCommerce content and web applications
        <img
          src="@/assets/about-icons/001-coding.png"
          alt=""
          class="inline-block h-4e ml-1"
        >.
      </p>
      <p class="mb-4">
        Apart from coding,
        I love rock climbing
        <img
          src="@/assets/about-icons/003-carabiner.png"
          alt=""
          class="inline-block h-4e"
        >,
        water sports
        <img
          src="@/assets/about-icons/002-snorkling.png"
          alt=""
          class="inline-block h-4e"
        >

        and being close to nature
        <img
          src="@/assets/about-icons/006-mountain-1.png"
          alt=""
          class="inline-block h-4e"
        >.
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
  },
  computed: {
    yearsOfExperience () {
      const dateFrom = new Date(2015, 5, 1)
      const dateTo = new Date()

      const deltaInYears = (dateTo.getTime() - dateFrom.getTime()) / 1000 / 60 / 60 / 24 / 365

      return Math.floor(deltaInYears)
    }
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
