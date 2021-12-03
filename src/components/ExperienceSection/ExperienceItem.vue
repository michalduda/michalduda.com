<template>
  <div class="experience-item flex flex-wrap py-8">
    <div
      class="experience-item__header w-full
        sm:w-5/12"
    >
      <h3 class="font-bold font-secondary text-xl">
        {{ item.title }}
      </h3>
      <h4 class="experience-item__companies font-secondary mt-2">
        {{ item.companies.join(', ') }}
      </h4>
      <div class="experience-item__tags mt-4 mb-2">
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
    <p
      class="experience-item__desc w-full
        sm:w-7/12"
    >
      <ReadMoreWrapper :text="item.description" />
    </p>
  </div>
</template>

<script>
import BaseTag from '@/components/BaseTag'
import ReadMoreWrapper from '@/components/ReadMoreWrapper'

export default {
  components: {
    BaseTag,
    ReadMoreWrapper
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
  border-bottom: 1px solid black;
}
.experience-item__header,
.experience-item__desc{
  width: 50%;
}
</style>
