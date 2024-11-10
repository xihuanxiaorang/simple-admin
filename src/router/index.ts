import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import constantRoutes from './constant'
import dynamicRoutes from './dynamic'

/**
 * 创建路由实例
 */
const router = createRouter({
  // 路由模式
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由配置
  routes: [...constantRoutes, ...dynamicRoutes],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * 注册路由插件
 * @param app Vue实例
 */
export function setupRouter(app: App) {
  app.use(router)
}

export default router
