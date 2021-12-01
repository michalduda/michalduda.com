<template>
  <section class="contact-section">
    <ContactStatus class="mt-6 mb-4" />
    <h3 class="text-3xl font-secondary font-medium">
      Want to get in touch ?<br> Drop me a line.
    </h3>
    <div class="mt-6">
      <a
        class="font-secondary text-xl "
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
