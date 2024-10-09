import type { App } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

/**
 * 静态路由
 */
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/default/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/error/404/index.vue'),
  },
]

/**
 * 创建路由实例
 */
const router = createRouter({
  // 路由模式
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由配置
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * 用于将路由实例注册到Vue实例上
 * @param app Vue实例
 */
export function setup(app: App<Element>) {
  app.use(router)
}

export default router
