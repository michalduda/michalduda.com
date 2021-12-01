<template>
  <ul class="website-navigation">
    <li
      v-for="(link, index) in navigationLinks"
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
import { mapState } from 'pinia'
import { applicationStore } from '@/store/application'

export default {
  computed: {
    ...mapState(applicationStore, ['navigationLinks'])
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
