<script lang="ts" setup></script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <Hamburger />
    </div>
    <div class="navbar-right">
      <FullScreen />
      <DarkModeSelect />
      <LangSelect />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @apply w-full h-full flex justify-between items-center px-4;

  .navbar-left {
    @apply flex items-center;
  }

  .navbar-right {
    @apply flex items-center justify-center gap-3;
  }
}
</style>
