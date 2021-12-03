<template>
  <div class="experience-item flex flex-wrap py-8">
    <div
      class="experience-item__header w-full
        sm:w-5/12
        lg:w-6/12"
    >
      <h3
        class="font-bold font-secondary text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          xxl:text-5xl"
      >
        {{ item.title }}
      </h3>
      <h4
        class="experience-item__companies font-secondary mt-2
            lg:text-xl lg:font-medium"
      >
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
    <div
      class="experience-item__desc w-full
        sm:w-7/12
        lg:w-6/12 lg:text-xl
        xxl:text-2xl"
    >
      <ReadMoreWrapper
        v-if="!breakpoints.md"
        :text="item.description"
      />

      <p v-else>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import BaseTag from '@/components/BaseTag'
import ReadMoreWrapper from '@/components/ReadMoreWrapper'
import { mapState } from 'pinia'
import { screenStore } from '@/store/screen'

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
  },
  computed: {
    ...mapState(screenStore, ['breakpoints'])
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
