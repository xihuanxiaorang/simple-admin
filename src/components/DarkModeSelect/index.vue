<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    iconSize?: number | string
  }>(),
  { iconSize: 20 },
)

const isDark = useDark()

function toggleDark(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <el-icon :size="props.iconSize" class="cursor-pointer" @click="toggleDark">
    <template v-if="isDark">
      <i-ep-moon />
    </template>
    <template v-else>
      <i-ep-sunny />
    </template>
  </el-icon>
</template>
