import type { App } from 'vue'
import { LanguageEnum } from '@/enums/LanguageEnum'
import { useAppStoreHook } from '@/stores'
import { createI18n } from 'vue-i18n'
// 本地语言包
import enUS from './package/en-us'
import zhCN from './package/zh-cn'

export type MessageSchema = typeof zhCN
const appStore = useAppStoreHook()

const i18n = createI18n<
  [MessageSchema],
  LanguageEnum.ZH_CN | LanguageEnum.EN_US
>({
  legacy: false,
  locale: appStore.language,
  fallbackLocale: LanguageEnum.ZH_CN,
  messages: {
    [LanguageEnum.ZH_CN]: zhCN,
    [LanguageEnum.EN_US]: enUS,
  },
  globalInjection: true,
})

/**
 * 注册i18n插件
 * @param app Vue实例
 */
export function setupI18n(app: App) {
  app.use(i18n)
}
