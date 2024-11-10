import 'vue-router'

export {}

declare module 'vue-router' {
  // https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
  interface RouteMeta {
    /**
     * 菜单名称
     * @example 'Dashboard'
     */
    title?: string

    /**
     * 菜单图标
     * @example 'i-ep-edit'
     */
    icon?: string

    /**
     * 是否隐藏菜单项
     * true: 隐藏 false:显示
     * @default false
     */
    hidden?: boolean

    /**
     * 始终显示父级菜单，即使只有一个子菜单
     * true 显示父级菜单, false 隐藏父级菜单，显示唯一子节点
     * @default false
     */
    alwaysShow?: boolean
  }
}
