<template>
  <div class="experience-item">
    <div class="experience-item__header">
      <h3 class="font-bold font-secondary text-5xl">
        {{ item.title }}
      </h3>
      <h4 class="experience-item__companies font-secondary mt-1">
        {{ item.companies.join(', ') }}
      </h4>
      <div class="experience-item__tags mt-4">
        <BaseTag
          v-for="(tag, index) in item.tags"
          :key="index"
          outlined
          color="#f82013"
        >
          {{ tag }}
        </BaseTag>
      </div>
    </div>
    <p class="experience-item__desc">
      {{ item.description }}
    </p>
  </div>
</template>

<script>
import BaseTag from '@/components/BaseTag'

export default {
  components: {
    BaseTag
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.experience-item{
  display: flex;
  border-bottom: 1px solid black;
  padding: 30px 0;
}
.experience-item__header,
.experience-item__desc{
  width: 50%;
}
</style>
