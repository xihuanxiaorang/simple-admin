<script lang="ts" setup>
import constantRoutes from '@/router/constant'
import dynamicRoutes from '@/router/dynamic'

const menuList = ref([...constantRoutes, ...dynamicRoutes])
</script>

<template>
  <div class="sidebar">
    <SidebarLogo />
    <el-scrollbar>
      <SidebarMenu :menu-list="menuList" base-path="" />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.el-scrollbar {
  height: calc(100vh - $navbar-height);
}
</style>
