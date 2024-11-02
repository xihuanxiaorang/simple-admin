<script lang="ts" setup>
import { LanguageEnum } from '@/enums/LanguageEnum'
import { useAppStore } from '@/stores'
import { useI18n } from 'vue-i18n'

const props = withDefaults(
  defineProps<{
    iconSize?: number | string
  }>(),
  { iconSize: 20 },
)

const langOptions = [
  { label: '中文', value: LanguageEnum.ZH_CN },
  { label: 'English', value: LanguageEnum.EN_US },
]
const { locale, t } = useI18n()
const appStore = useAppStore()

function changeLanguage(lang: string) {
  locale.value = lang
  appStore.changeLanguage(lang)
  ElMessage.success(t('langSelect.message.success'))
}
</script>

<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <el-icon :size="props.iconSize">
      <i-icon-park-outline-translate />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langOptions"
          :key="item.value"
          :command="item.value"
          :disabled="item.value === locale"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
