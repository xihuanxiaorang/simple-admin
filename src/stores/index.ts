import type { App } from 'vue'

const store = createPinia()

/**
 * 注册Pinia插件
 * @param app Vue实例
 */
export function setupPinia(app: App) {
  app.use(store)
}

export * from './modules/app'
export * from './modules/counter'
export { store }
