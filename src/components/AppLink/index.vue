<script lang="ts" setup>
import { isExternal } from '@/utils'

defineOptions({
  name: 'AppLink',
  inheritAttrs: false,
})

const props = defineProps<{
  to: string
}>()

const isExternalLink = computed(() => isExternal(props.to))

const linkType = computed(() => (isExternalLink.value ? 'a' : 'router-link'))

function linkProps(to: string) {
  return isExternalLink.value
    ? {
        href: to,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : { to }
}
</script>

<template>
  <component :is="linkType" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<style lang="scss" scoped></style>
