<script lang="ts" setup></script>

<template>
  <div class="flex justify-between items-center px-3 nav-bar">
    <div />
    <div class="flex items-center justify-center gap-3">
      <FullScreen />
      <DarkModeSelect />
      <LangSelect />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar {
  background-color: var(--el-bg-color);
}
</style>
