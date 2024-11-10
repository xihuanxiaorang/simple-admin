import type { RouteRecordRaw } from 'vue-router'

/**
 * 静态路由
 */
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'home' },
      },
      {
        path: '401',
        component: () => import('@/views/error/401/index.vue'),
      },
      {
        path: '404',
        component: () => import('@/views/error/404/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
]

export default constantRoutes
