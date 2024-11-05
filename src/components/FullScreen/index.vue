<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    iconSize?: number | string
  }>(),
  { iconSize: 20 },
)

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <el-icon :size="props.iconSize" class="cursor-pointer" @click="toggle">
    <svg-icon :icon-class="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
  </el-icon>
</template>
