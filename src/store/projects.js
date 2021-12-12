import { defineStore } from 'pinia'

const getNextIndex = (index, count) => {
  const max = count - 1

  return index < max
    ? index + 1
    : 0
}
const getPreviousIndex = (index, count) => {
  const max = count - 1

  return index > 0
    ? index - 1
    : max
}

const getInitialPreloadIndexes = (index, count) => {
  const next = getNextIndex(index, count)
  const prev = getPreviousIndex(index, count)

  return [...new Set([
    prev,
    index,
    next
  ])]
}

const getInitialState = () => {
  const state = {
    activeIndex: 0,
    projects: [
      {
        id: 1,
        tags: ['Web App', 'Vue.js', 'DDD', 'Vuetify'],
        title: 'eContent Suite - Storage',
        year: 2020,
        description: `A tailor-made eCommerce solution, acting as a PIM (Product Information Manager) and a DAM (Digital Assets Manager). Created in Vue.js, structured using Domain Driven Design and internal reusable plugins installed via NPM.
        \nI was resposible for architecting the application, leading the development team, taking care of the code quality, reviewing the merge requests and coding the front-end layer.`,
        img: '1.jpg',
        link: null
      },
      {
        id: 2,
        tags: ['Web App', 'Vue.js', 'DDD', 'Vuetify', 'Node.js', 'Express', 'Gulp'],
        title: 'eContent Suite - Builder',
        year: 2021,
        description: `An advanced aplication for creating HTML content (LP's, eCommerce Rich Content) by drag'n'drop of universal, reusable modules. Created in Vue.js, DDD approach and internal NPM packages. Connected to a worker service (Node.js, Express, Gulp) for exporting and posprocessing of HTML.
        \nI was resposible for architecting the application (SPA + backend worker), leading the development team, taking care of the code quality, reviewing the merge requests and coding (front-end SPA and back-end service).`,
        img: '2.jpg',
        link: null
      },
      {
        id: 3,
        tags: ['SPA', 'Vue.js', 'Nuxt', 'CMS', 'Directus'],
        title: 'Vayana',
        year: 2019,
        description: `A single page application for a tech company conncted to a CMS, optimized by SSR engine to boost SEO. Fully translatable (i18n).
        \nI was responsible for creating the whole codebase, setting up the CMS and implementing the solution on a dedicated server (PM2).`,
        img: '3.jpg',
        link: 'https://vayana.pl/'
      },
      {
        id: 4,
        tags: ['SPA', 'Vue.js', 'Tailwind'],
        title: 'Taurusmed',
        year: 2020,
        description: `A SPA for a medical company. Powered by Vue 3 and Tailwind. Utilizing CSS Grid and flexbox.
        \nI was responsible for creating the codebase and server deployment.  `,
        img: '5.jpg',
        link: 'https://224b0752-c580-4427-a2bd-6abaac088041.netlify.app/'
      },
      {
        id: 5,
        tags: ['SPA', 'Vue.js', 'Tailwind'],
        title: 'Medictel',
        year: 2021,
        description: `A SPA for a medical company. Powered by Vue 3 and Tailwind. Utilizing CSS Grid and flexbox.
        \nI was responsible for creating the codebase and server deployment.  `,
        img: '4.jpg',
        link: 'https://3db33874-15f7-4bf7-8b0f-9e519fb5cdb4.netlify.app/'
      }
    ],
    preloadIndexes: [],
    stepDirection: null
  }

  state.preloadIndexes = getInitialPreloadIndexes(state.activeIndex, state.projects.length)

  return state
}
export const DIRECTIONS = {
  prev: -1,
  next: 1
}

export const projectsStore = defineStore('projects', {
  state: () => getInitialState(),
  actions: {
    incrementIndex () {
      this.activeIndex = getNextIndex(this.activeIndex, this.count)
    },
    decrementIndex () {
      this.activeIndex = getPreviousIndex(this.activeIndex, this.count)
    },
    handleIncrement () {
      this.incrementIndex()
      this.stepDirection = DIRECTIONS.next
      this.addPreloadIndex(DIRECTIONS.next)
    },
    handleDecrement () {
      this.decrementIndex()
      this.stepDirection = DIRECTIONS.prev
      this.addPreloadIndex(DIRECTIONS.prev)
    },
    addPreloadIndex (direction) {
      let newIndex

      if (direction === DIRECTIONS.next) {
        newIndex = getNextIndex(this.activeIndex, this.count)
      } else if (direction === DIRECTIONS.prev) {
        newIndex = getPreviousIndex(this.activeIndex, this.count)
      }

      if (newIndex && !this.preloadIndexes.includes(newIndex)) {
        this.preloadIndexes.push(newIndex)
      }
    }
  },
  getters: {
    activeProject () {
      return this.projects[this.activeIndex]
    },
    count () {
      return this.projects.length
    },
    assetsToPreload () {
      return this.preloadIndexes.map(itemIndex => {
        return this.projects[itemIndex].img
      }, this)
    },
    transitionAnimationName () {
      return this.stepDirection !== DIRECTIONS.next
        ? 'fade-x-right'
        : 'fade-x-left'
    }
  }
})
