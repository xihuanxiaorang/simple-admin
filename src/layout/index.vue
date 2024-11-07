<script lang="ts" setup>
import { useAppStore } from '@/stores'
import NavBar from './components/NavBar/index.vue'
import Sidebar from './components/Sidebar/index.vue'

const { isSidebarCollapsed } = storeToRefs(useAppStore())
</script>

<template>
  <el-container class="layout">
    <el-aside
      :class="{ collapsed: isSidebarCollapsed }"
      class="sidebar-container"
    >
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="header-container">
        <NavBar />
      </el-header>
      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  @apply w-screen h-screen;

  .sidebar-container {
    @apply transition-[width] duration-300 ease-in-out;

    width: $sidebar-width;
    color: $sidebar-text;
    background-color: $sidebar-background;

    &.collapsed {
      width: $sidebar-width-collapsed;
    }
  }

  .header-container {
    @apply px-0;

    height: $navbar-height;
    background-color: var(--el-bg-color);
  }

  .app-main {
    background-color: var(--el-bg-color-page);
  }
}
</style>
