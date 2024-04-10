import { createPinia } from 'pinia'
import watchPlugins from './plugins/watch'


const pinia = createPinia()
watchPlugins(pinia)


export * from './modules/app'
export default pinia
