import { defineStore } from 'pinia'

export const experienceStore = defineStore('experience', {
  state: () => ({
    experience: [
      {
        title: 'Head of technology',
        companies: ['Publicis Groupe'],
        tags: ['International', 'Leadership'],
        description: 'Eaque odit enim veritatis cupiditate incidunt ab dolore, cum odio! Dolore eligendi assumenda magni doloribus ducimus laborum debitis repellendus quis voluptatem aliquam, perferendis eum ex numquam cum odio facere incidunt! Assumenda expedita architecto, eum id incidunt omnis aliquam veniam sint impedit est cum officiis accusamus modi laborum.'
      },
      {
        title: 'Head of technology',
        companies: ['Publicis Groupe'],
        tags: ['International', 'Leadership'],
        description: 'Eaque odit enim veritatis cupiditate incidunt ab dolore, cum odio! Dolore eligendi assumenda magni doloribus ducimus laborum debitis repellendus quis voluptatem aliquam, perferendis eum ex numquam cum odio facere incidunt! Assumenda expedita architecto, eum id incidunt omnis aliquam veniam sint impedit est cum officiis accusamus modi laborum.'
      },
      {
        title: 'Head of technology',
        companies: ['Publicis Groupe'],
        tags: ['International', 'Leadership'],
        description: 'Eaque odit enim veritatis cupiditate incidunt ab dolore, cum odio! Dolore eligendi assumenda magni doloribus ducimus laborum debitis repellendus quis voluptatem aliquam, perferendis eum ex numquam cum odio facere incidunt! Assumenda expedita architecto, eum id incidunt omnis aliquam veniam sint impedit est cum officiis accusamus modi laborum.'
      }
    ]
  })
})
