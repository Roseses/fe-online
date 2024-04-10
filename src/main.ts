import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from '@/store'
import router from './router'
import 'element-plus/dist/index.css'
import "nprogress/nprogress.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App).use(router).use(pinia).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // @ts-ignore
    app.component(key, component)
}
