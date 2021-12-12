<template>
  <section
    class="contact-section
      sm:mt-12
      lg:mt-16
      xl:mt-22"
  >
    <ContactStatus class="mt-6 mb-4" />
    <h3
      class="text-3xl font-secondary font-medium
        sm:text-4xl
        xl:text-5xl"
    >
      Want to get in touch&nbsp;?<br class="md:hidden"> Drop me a line.
    </h3>
    <div class="mt-6">
      <a
        class="font-secondary text-xl
        md:text-2xl md:font-medium"
        href="mailto:this.michalduda@gmail.com"
      >
        this.michalduda@gmail.com
      </a>
    </div>

  </section>
</template>

<script>
import ContactStatus from '@/components/ContactStatus'

export default {
  components: {
    ContactStatus
  }
}
</script>

<style>

</style>
