import { reactive } from 'vue'

export const state = reactive({
  activeProject: {},
  projects: [
    {
      tags: ['Lorem', 'Ipsum'],
      title: 'Hello World',
      year: 2020,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti culpa exercitationem maxime ad numquam labore assumenda temporibus. Corporis, distinctio.',
      img: 'example.png',
      link: 'https://google.com'
    }
  ]
})

state.activeProject = state.projects[0]

export default {
  state
}
