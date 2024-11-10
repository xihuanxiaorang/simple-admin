<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import { resolvePath } from '@/utils'

defineProps<{
  item: RouteRecordRaw
  basePath: string
}>()

/**
 * 可见的唯一子节点
 */
const onlyOneChild = ref<RouteRecordRaw & { noShowingChildren?: boolean }>()

/**
 * 判断当前路由是否只具有一个显示的子路由
 * 1. 如果当前路由下只有一个显示的子路由，则返回 true
 * 2. 如果当前路由下没有显示的子路由，则显示当前路由并返回 true
 * 3. 如果当前路由下有多个显示的子路由，则返回 false
 * @param children 子路由数组
 * @param parent 当前路由
 * @returns 是否只具有一个显示的子路由
 */
function hasOneShowingChild(
  children: RouteRecordRaw[] = [],
  parent: RouteRecordRaw,
) {
  const showingChildren = children.filter((route) => {
    if (!route.meta || route.meta.hidden) {
      return false
    }
    onlyOneChild.value = route
    return true
  })
  if (showingChildren.length === 1) {
    return true
  }
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }
  return false
}
</script>

<template>
  <template v-if="!item.meta || !item.meta.hidden">
    <template
      v-if="
        (hasOneShowingChild(item.children, item)
          && (!onlyOneChild?.children || onlyOneChild.noShowingChildren)
          && !item.meta?.alwaysShow)
          || (item.meta?.alwaysShow && !item.children)
      "
    >
      <AppLink
        v-if="onlyOneChild?.meta"
        :to="resolvePath(onlyOneChild.path, basePath)"
      >
        <el-menu-item :index="resolvePath(onlyOneChild.path, basePath)">
          <el-icon>
            <svg-icon
              v-if="onlyOneChild.meta.icon"
              :icon-class="onlyOneChild.meta.icon"
            />
            <svg-icon v-else icon-class="menu" />
          </el-icon>
          <template #title>
            {{ onlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </AppLink>
    </template>
    <template v-else>
      <el-sub-menu :index="resolvePath(item.path, basePath)" teleported>
        <template #title>
          <el-icon>
            <svg-icon v-if="item.meta?.icon" :icon-class="item.meta.icon" />
            <svg-icon v-else icon-class="menu" />
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
        <SidebarMenuItem
          v-for="child in item.children"
          :key="child.path"
          :base-path="resolvePath(child.path, basePath)"
          :item="child"
        />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
