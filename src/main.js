import { createApp } from 'vue'
import createStore from '@/store'
import App from './App.vue'
import 'windi.css'

const app = createApp(App)

createStore(app)

app.mount('#app')
