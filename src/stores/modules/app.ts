import { LanguageEnum } from '@/enums/LanguageEnum'
import defaultSettings from '@/settings'
import { store } from '@/stores'
import enUS from 'element-plus/es/locale/lang/en'
import zhCN from 'element-plus/es/locale/lang/zh-cn'

export const useAppStore = defineStore('app', () => {
  /**
   * 语言
   */
  const language = useStorage('language', defaultSettings.language)

  /**
   * 根据语言标识读取ElementPlus对应的语言包
   */
  const locale = computed(() => {
    return language.value === LanguageEnum.ZH_CN ? zhCN : enUS
  })

  /**
   * 切换语言
   *
   * @param lang 语言
   */
  const changeLanguage = (lang: string) => {
    language.value = lang
  }

  return { language, locale, changeLanguage }
})

/**
 * 用于在组件外使用 store
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export function useAppStoreHook() {
  return useAppStore(store)
}
