import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueDevTools from 'vite-plugin-vue-devtools'

const pathSrc = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver(),
      ],
      // 自动导入项目中的公共组件
      dirs: ['src/components', 'src/**/components'],
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      // 自动导入 VueRouter 相关函数，如：useRouter 等
      // 自动导入 Pinia 相关函数，如：createPinia，defineStore，storeToRefs 等
      // 自动导入 @vueuse/core 相关函数，如：useStorage、useTitle 等
      // 参考自： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      // 是否在 vue 模板中自动导入
      vueTemplate: true,
      // 指定自动导入函数TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
      dts: resolve(pathSrc, 'types', 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          // 只启用 element-plus 图标集，其他图标库 https://icon-sets.iconify.design/
          enabledCollections: ['ep'],
        }),
      ],
      // 组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      // 指定自定义组件位置(默认:src/components)
      dirs: ['src/components', 'src/**/components'],
      // 指定自动导入组件TS类型声明文件路径，为true时在项目根目录自动创建，为false时关闭自动生成
      dts: resolve(pathSrc, 'types', 'components.d.ts'),
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(pathSrc, 'assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
    hmr: true,
  },
})
