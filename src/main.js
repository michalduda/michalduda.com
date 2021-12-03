import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import createStore from '@/store'
import App from './App.vue'
import 'windi.css'

const app = createApp(App)
const head = createHead()

createStore(app)

app.use(head)

app.mount('#app')
