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
        tags: ['Lorem', 'Ipsum'],
        title: 'Hello World',
        year: 2020,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti culpa exercitationem maxime ad numquam labore assumenda temporibus. Corporis, distinctio.',
        img: 'example.png',
        link: 'https://google.com'
      },
      {
        id: 2,
        tags: ['Sit', 'Amet'],
        title: 'Hello World 2',
        year: 2021,
        description: 'Sit amet consectetur adipisicing elit. Veniam deleniti culpa exercitationem maxime ad numquam labore assumenda temporibus. Corporis, distinctio.',
        img: 'example2.png',
        link: 'https://google.com'
      },
      {
        id: 3,
        tags: ['Sit', 'Amet'],
        title: 'Hello World 2',
        year: 2021,
        description: 'Sit amet consectetur adipisicing elit. Veniam deleniti culpa exercitationem maxime ad numquam labore assumenda temporibus. Corporis, distinctio.',
        img: 'example3.png',
        link: 'https://google.com'
      },
      {
        id: 4,
        tags: ['Sit', 'Amet'],
        title: 'Hello World 2',
        year: 2021,
        description: 'Sit amet consectetur adipisicing elit. Veniam deleniti culpa exercitationem maxime ad numquam labore assumenda temporibus. Corporis, distinctio.',
        img: 'example4.png',
        link: 'https://google.com'
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
