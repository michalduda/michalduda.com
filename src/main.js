import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import createStore from '@/store'
import App from './App.vue'
import 'windi.css'

const app = createApp(App)

createStore(app)

const head = createHead()
app.use(head)

app.use(PerfectScrollbar)

app.mount('#app')
