<template>
  <div class="contact-icons">
    <a
      href=""
      v-for="(icon, index) in icons"
      :key="index"
      class="contact-icon"
    >
      <img
        :src="require('@/assets/icons/' + icon.src)"
        alt=""
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
          src: 'twitter.svg'
        },
        {
          label: 'LinkedIn',
          src: 'linkedin.svg'
        },
        {
          label: 'GitHub',
          src: 'github.svg'
        },
        {
          label: 'CodeWars',
          src: 'codewars.svg'
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
