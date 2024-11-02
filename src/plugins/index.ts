import type { App } from 'vue'
import { setupI18n } from '@/lang'
import { setupRouter } from '@/router'
import { setupPinia } from '@/stores'

export function setupPlugins(app: App) {
  /**
   * 路由(router)
   */
  setupRouter(app)
  /**
   * 状态管理(store)
   */
  setupPinia(app)
  /**
   * 国际化
   */
  setupI18n(app)
}
