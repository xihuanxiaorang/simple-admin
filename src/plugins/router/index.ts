import type { App } from 'vue'
import router from '@/router'

/**
 * 注册路由插件
 * @param app Vue实例
 */
export function setupRouter(app: App) {
  app.use(router)
}
