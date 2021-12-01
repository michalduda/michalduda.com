<template>
  <div class="vertical-navigation">
    <NavigationList />
  </div>
</template>

<script>
import NavigationList from '@/components/PageNavigation/NavigationList'

export default {
  components: {
    NavigationList
  }
}
</script>

<style lang="scss">
.vertical-navigation {
  ul {
    @apply
      flex
      flex-col
      h-full
      justify-around;
  }
  li {
    @apply
      text-xl
      font-medium
      font-secondary;
  }
}
</style>
