import type { RouteRecordRaw } from 'vue-router'

/**
 * 动态路由
 */
const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/system',
    component: () => import('@/layout/index.vue'),
    redirect: '/system/user',
    name: '/system',
    meta: {
      title: '系统管理',
      icon: 'system',
      hidden: false,
      alwaysShow: true,
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'user',
          hidden: false,
        },
      },
      {
        path: 'role',
        component: () => import('@/views/system/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'role',
          hidden: false,
        },
      },
      {
        path: 'menu',
        component: () => import('@/views/system/menu/index.vue'),
        name: 'Menu',
        meta: {
          title: '菜单管理',
          icon: 'menu',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/doc',
    component: () => import('@/layout/index.vue'),
    redirect: '/doc/internal-doc',
    name: '/doc',
    meta: {
      title: '平台文档',
      icon: 'document',
      hidden: false,
      alwaysShow: false,
    },
    children: [
      {
        path: 'internal-doc',
        component: () => import('@/views/demo/internal-doc/index.vue'),
        name: 'InternalDoc',
        meta: {
          title: '平台文档(内嵌)',
          icon: 'document',
          hidden: false,
        },
      },
      {
        path: 'https://docs.xiaorang.fun',
        name: 'Https://docs.xiaorang.fun',
        component: () => import('@/views/error/404/index.vue'),
        meta: {
          title: '平台文档(外链)',
          icon: 'link',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/multi-level',
    component: () => import('@/layout/index.vue'),
    name: '/multiLevel',
    meta: {
      title: '多级菜单',
      icon: 'cascader',
      hidden: false,
      alwaysShow: false,
    },
    children: [
      {
        path: 'multi-level1',
        component: () => import('@/views/demo/multi-level/level1.vue'),
        name: 'MultiLevel1',
        meta: {
          title: '菜单一级',
          icon: '',
          hidden: false,
          alwaysShow: true,
        },
        children: [
          {
            path: 'multi-level2',
            component: () =>
              import('@/views/demo/multi-level/children/level2.vue'),
            name: 'MultiLevel2',
            meta: {
              title: '菜单二级',
              icon: '',
              hidden: false,
              alwaysShow: false,
            },
            children: [
              {
                path: 'multi-level3-1',
                component: () =>
                  import(
                    '@/views/demo/multi-level/children/children/level3-1.vue'
                  ),
                name: 'MultiLevel31',
                meta: {
                  title: '菜单三级-1',
                  icon: '',
                  hidden: false,
                  alwaysShow: false,
                },
              },
              {
                path: 'multi-level3-2',
                component: import(
                  '@/views/demo/multi-level/children/children/level3-2.vue'
                ),
                name: 'MultiLevel32',
                meta: {
                  title: '菜单三级-2',
                  icon: '',
                  hidden: false,
                  alwaysShow: false,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/demo',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/demo/test/index.vue'),
        meta: { title: '演示页面', icon: 'slide' },
      },
    ],
  },
]

export default dynamicRoutes
