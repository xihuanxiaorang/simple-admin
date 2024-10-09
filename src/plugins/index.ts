import type { App } from 'vue'
import { setup as setupRouter } from '@/router/index'

export default function setupPlugins(app: App<Element>) {
  setupRouter(app)
}
