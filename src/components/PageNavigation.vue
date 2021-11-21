<template>
  <ul class="website-navigation">
    <li
      v-for="(link, index) in links"
      :key="index"
    >
      <a
        href=""
        class="website-navigation__link p-4"
      >
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          label: 'News'
        },
        {
          label: 'About'
        },
        {
          label: 'Experience'
        },
        {
          label: 'Works'
        },
        {
          label: 'Contact'
        }
      ]
    }
  }
}
</script>

<style>
.website-navigation{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
}
.website-navigation__link {
  display: block;
}
</style>
