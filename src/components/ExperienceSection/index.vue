<template>
  <section class="mt-14">
    <SectionHeader
      border
    >
      Experience
    </SectionHeader>
    <ExperienceItem
      v-for="(item, index) in experience"
      :key="index"
      :item="item"
    />
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import ExperienceItem from '@/components/ExperienceSection/ExperienceItem'

export default {
  components: {
    SectionHeader,
    ExperienceItem
  },
  data () {
    return {
      experience: [
        {
          title: 'Head of technology',
          companies: ['Publicis Groupe'],
          tags: ['International', 'Leadership'],
          description: 'Eaque odit enim veritatis cupiditate incidunt ab dolore, cum odio! Dolore eligendi assumenda magni doloribus ducimus laborum debitis repellendus quis voluptatem aliquam, perferendis eum ex numquam cum odio facere incidunt! Assumenda expedita architecto, eum id incidunt omnis aliquam veniam sint impedit est cum officiis accusamus modi laborum, repellat nihil eos beatae unde doloremque magni ex libero ullam.'
        },
        {
          title: 'Head of technology',
          companies: ['Publicis Groupe'],
          tags: ['International', 'Leadership'],
          description: 'Eaque odit enim veritatis cupiditate incidunt ab dolore, cum odio! Dolore eligendi assumenda magni doloribus ducimus laborum debitis repellendus quis voluptatem aliquam, perferendis eum ex numquam cum odio facere incidunt! Assumenda expedita architecto, eum id incidunt omnis aliquam veniam sint impedit est cum officiis accusamus modi laborum, repellat nihil eos beatae unde doloremque magni ex libero ullam.'
        },
        {
          title: 'Head of technology',
          companies: ['Publicis Groupe'],
          tags: ['International', 'Leadership'],
          description: 'Eaque odit enim veritatis cupiditate incidunt ab dolore, cum odio! Dolore eligendi assumenda magni doloribus ducimus laborum debitis repellendus quis voluptatem aliquam, perferendis eum ex numquam cum odio facere incidunt! Assumenda expedita architecto, eum id incidunt omnis aliquam veniam sint impedit est cum officiis accusamus modi laborum, repellat nihil eos beatae unde doloremque magni ex libero ullam.'
        }
      ]
    }
  }
}
</script>

<style>

</style>
