<template>
  <div class="contact-icons">
    <a
      v-for="(icon, index) in icons"
      :href="icon.href"
      :key="index"
      class="contact-icon"
      target="_blank"
    >
      <img
        :src="require('@/assets/icons/' + icon.src)"
        :alt="icon.label + ' icon'"
        class="w-6"
      >
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        {
          label: 'Twitter',
          src: 'twitter.svg',
          href: 'https://twitter.com/thismichalduda'
        },
        {
          label: 'LinkedIn',
          src: 'linkedin.svg',
          href: 'https://www.linkedin.com/in/micha%C5%82-krzysztof-duda-286a6952/'
        },
        {
          label: 'GitHub',
          src: 'github.svg',
          href: 'https://github.com/michalduda'
        },
        {
          label: 'CodeWars',
          src: 'codewars.svg',
          href: 'https://www.codewars.com/users/michalduda'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.contact-icons {
  display: flex;
}
.contact-icon {
  &:not(:last-child) {
    margin-right: 20px;;
  }
}
</style>
