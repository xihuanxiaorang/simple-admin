<script lang="ts" setup>
import { useAppStore } from '@/stores'

const { locale } = storeToRefs(useAppStore())
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
