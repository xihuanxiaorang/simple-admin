import { LanguageEnum } from '@/enums/LanguageEnum'
import defaultSettings from '@/settings'
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
