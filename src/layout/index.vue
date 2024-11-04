<script lang="ts" setup>
import NavBar from './components/NavBar/index.vue'
import Sidebar from './components/Sidebar/index.vue'
</script>

<template>
  <div
    class="w-screen h-screen grid grid-rows-[50px_1fr] grid-cols-[210px_1fr]"
  >
    <NavBar />
    <Sidebar />
    <div class="app-main">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  background-color: var(--el-bg-color-page);
}
</style>
