<script lang="ts" setup>
import { useAppStore } from '@/stores'

const props = withDefaults(
  defineProps<{
    iconSize?: number | string
  }>(),
  { iconSize: 20 },
)

const appStore = useAppStore()
</script>

<template>
  <div
    class="flex items-center justify-center text-[var(--el-text-color-regular)]"
    @click="appStore.toggleSidebar"
  >
    <el-icon :size="props.iconSize" class="cursor-pointer">
      <svg-icon
        :class="{ collapsed: appStore.isSidebarCollapsed }"
        class="hamburger"
        icon-class="collapse"
      />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  vertical-align: middle;

  &.collapsed {
    transform: rotate(180deg);
  }
}
</style>
