import { defineStore } from 'pinia'

export const experienceStore = defineStore('experience', {
  state: () => ({
    experience: [
      {
        title: 'Full-stack Developer',
        companies: ['Freelance', 'Saatchi & Saatchi', 'Publicis Commerce'],
        tags: ['JavaScript', 'Full-stack', 'Lead'],
        summary: 'Over the years, I\'ve participated in numerous projects creating:',
        bullets: [
          'Landing Pages according to modern standards od HTML5, CSS3 and JS',
          'Web applications (SPA + API)',
          'CMS-driven websites, powered by Headless solutions like Contentful, Directus or Strapi ',
          'eCommerce content, like Rich Content Cards or Shop-in-shops',
          'Back-end applications, based on Node.js and frameworks like Express.js or Koa.js',
          'Web scrapping engines based on Puppeteer'
        ]
      },
      {
        title: 'Solutions Architect',
        companies: ['Freelance', 'Publicis Commerce'],
        tags: ['Web apps', 'Business value', 'End-2-end'],
        summary: 'I was designing web app solutions for interal and external clients. My responsibilities:',
        bullets: [
          'Defining business needs',
          'Identifying required software components',
          'Choosing infrastructure (AWS)',
          'Creating diagrams',
          'Discussing the solutions with the tech team'
        ]
      },
      {
        title: 'Head of technology',
        companies: ['Publicis Commerce'],
        tags: ['International', 'Strategy'],
        summary: 'My responsibilities were focused on managing the tech team and leading the efforts on a company and international (group) level, especially:',
        bullets: [
          'Consulting tech solutions and cooperating with other business and production teams',
          'Managing the priorities and distributing the tasks',
          'Overseeing the quality and ways-of-working'
        ]
      }

    ],
    keywords: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'ES6+',
      'Vue.js',
      'Nuxt.js',
      'SPA',
      'Web Apps',
      'API',
      'Node.js',
      'Git',
      'Jira',
      'Agile'
    ]
  })
})
