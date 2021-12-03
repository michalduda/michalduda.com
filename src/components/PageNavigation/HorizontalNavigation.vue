<template>
  <div class="horizontal-navigation">
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
.horizontal-navigation {
  ul {
    @apply
      flex
      justify-between;
  }
  li {
    @apply
      font-medium
      font-secondary;
      &:last-of-type{
        @apply
          -mr-4;
      }
  }
  a {
    @apply
      inline-block
      px-4
      py-2;

  }
  @include lg {
    @apply
      w-5/12;
  }
}
</style>
