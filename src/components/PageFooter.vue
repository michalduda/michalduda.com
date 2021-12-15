<template>
  <footer
    class="pb-6
      sm:flex sm:justify-between sm:pt-20"
  >
    <ContactIcons
      class="mt-8
        sm:mt-0"
    />
    <p
      class="font-secondary text-sm mt-24
        sm:mt-0"
    >
      Made with ❤ &amp; Vue.js by me, <br class="sm:hidden">designed by <a
        class="underline"
        href="https://dribbble.com/PaulinaJadeszko"
        target="_blank"
        rel="noreferrer noopener"
      >Paulina</a>
    </p>
  </footer>
</template>

<script>
import ContactIcons from '@/components/ContactIcons'

export default {
  components: {
    ContactIcons
  }
}
</script>

<style>

</style>
