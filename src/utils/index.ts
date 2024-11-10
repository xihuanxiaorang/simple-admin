import path from 'path-browserify'

/**
 * 检查路径是否为外部链接
 * @param path 要检查的路径
 * @returns 如果是外部链接，则为 true，否则为 false
 */
export function isExternal(path: string) {
  return /^https?:|http?:|mailto:|tel:/.test(path)
}

/**
 * 解析路由路径（相对路径 -> 绝对路径）
 * @param routePath 路由路径
 * @param basePath 父路由路径
 * @returns 解析后的绝对路由路径
 */
export function resolvePath(routePath: string, basePath: string) {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(basePath)) {
    return basePath
  }
  // 完整路由路径（/system/user）= 父路由路径（/system） + 当前路由路径（user）
  return path.resolve(basePath, routePath)
}
