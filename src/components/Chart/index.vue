<script lang="ts" setup>
import type { ECOption } from '@/hooks/echarts'
import { useChart } from '@/hooks/echarts'

const props = withDefaults(
  defineProps<{
    options: ECOption
  }>(),
  {},
)
const { options } = toRefs(props)
const container = shallowRef<HTMLElement>()
useChart(container, options)
</script>

<template>
  <div ref="container" class="chat" />
</template>

<style scoped>
.chat {
  width: 100%;
  height: 100%;
}
</style>
