import { LanguageEnum } from '@/enums/LanguageEnum'
import { SidebarStatusEnum } from '@/enums/SidebarStatusEnum'
import defaultSettings from '@/settings'
import enUS from 'element-plus/es/locale/lang/en'
import zhCN from 'element-plus/es/locale/lang/zh-cn'

export const useAppStore = defineStore('app', () => {
  /**
   * 语言
   */
  const language = useStorage('language', defaultSettings.language)
  /**
   * 侧边栏状态
   */
  const sidebarStatus = useStorage('sidebarStatus', SidebarStatusEnum.EXPANDED)

  /**
   * 是否折叠侧边栏
   */
  const isSidebarCollapsed = computed(
    () => sidebarStatus.value === SidebarStatusEnum.COLLAPSED,
  )

  /**
   * 切换侧边栏折叠状态
   */
  const toggleSidebar = () => {
    sidebarStatus.value = isSidebarCollapsed.value
      ? SidebarStatusEnum.EXPANDED
      : SidebarStatusEnum.COLLAPSED
  }

  /**
   * 展开侧边栏
   */
  const expandSidebar = () => {
    sidebarStatus.value = SidebarStatusEnum.EXPANDED
  }

  /**
   * 折叠侧边栏
   */
  const collapseSidebar = () => {
    sidebarStatus.value = SidebarStatusEnum.COLLAPSED
  }

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

  return {
    language,
    locale,
    sidebarStatus,
    isSidebarCollapsed,
    changeLanguage,
    toggleSidebar,
    expandSidebar,
    collapseSidebar,
  }
})
