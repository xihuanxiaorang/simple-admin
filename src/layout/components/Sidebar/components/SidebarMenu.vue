<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/stores'
import { resolvePath } from '@/utils'

defineProps<{
  menuList: RouteRecordRaw[]
  basePath: string
}>()

const appStore = useAppStore()
const route = useRoute()
</script>

<template>
  <el-menu
    :collapse="appStore.isSidebarCollapsed"
    :collapse-transition="false"
    :default-active="route.path"
    :unique-opened="false"
    class="!border-r-0 !w-auto"
  >
    <SidebarMenuItem
      v-for="menu in menuList"
      :key="menu.path"
      :base-path="resolvePath(menu.path, basePath)"
      :item="menu"
    />
  </el-menu>
</template>

<style lang="scss" scoped></style>
