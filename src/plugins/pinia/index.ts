import type { App } from 'vue'

/**
 * 注册Pinia插件
 * @param app Vue实例
 */
export function setupPinia(app: App) {
  app.use(createPinia())
}
