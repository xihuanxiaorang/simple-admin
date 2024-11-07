<script lang="ts" setup>
import { useAppStore } from '@/stores'

const { isSidebarCollapsed } = storeToRefs(useAppStore())
</script>

<template>
  <div class="logo">
    <transition enter-active-class="animate__animated animate__fadeInLeft">
      <!-- 强制在复用的视图之间进行过渡 https://router.vuejs.org/zh/guide/advanced/transitions.html -->
      <router-link
        :key="+isSidebarCollapsed"
        class="w-full h-full flex items-center justify-center"
        to="/"
      >
        <img alt="logo" class="w-5 h-5" src="@/assets/logo.png">
        <span
          v-if="!isSidebarCollapsed"
          class="ml-2.5 text-sm font-bold text-white flex-shrink-0"
        >Simple Admin</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  @apply w-full;

  height: $navbar-height;
  background-color: $sidebar-logo-background;
}
</style>
