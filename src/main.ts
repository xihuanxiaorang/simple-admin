import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugins'
// 本地SVG图标
import 'virtual:svg-icons-register'
// 样式
import '@/styles/index.scss'

const app = createApp(App)
setupPlugins(app)
app.mount('#app')
