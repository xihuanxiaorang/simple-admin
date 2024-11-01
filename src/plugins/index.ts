import type { App } from 'vue'
import { setupPinia } from './pinia'
import { setupRouter } from './router'

export default function setupPlugins(app: App<Element>) {
  setupRouter(app)
  setupPinia(app)
}
