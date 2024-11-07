import type { RouteRecordRaw } from 'vue-router'

/**
 * 静态路由
 */
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/test',
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test/index.vue'),
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

export default constantRoutes
