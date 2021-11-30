import { createPinia } from 'pinia'
import { initScreenStoreValues } from '@/store/screen'

export default (app) => {
  app.use(createPinia())
  initScreenStoreValues()
}
