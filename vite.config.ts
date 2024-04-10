import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader';
import { Plugin as importToCDN, autoComplete } from "vite-plugin-cdn-import";
// import eslintPlugin, { Options } from 'vite-plugin-eslint'; // 引入
import checker from 'vite-plugin-checker';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    // vite.config.js
    build: {
        minify: 'terser', // 启用 terser 压缩
        terserOptions: {
            compress: {
                pure_funcs: ['console.log'], // 只删除 console.log
                //drop_console: true, // 删除所有 console
                drop_debugger: true, // 删除 debugger
            }
        },
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
                entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
                assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
            }
        }
    },
    plugins: [
        VueDevTools(),
        vue(),
        checker({
            typescript: true,
            // vueTsc: true
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        svgLoader(),
        importToCDN({
            modules: [
                // autoComplete('axios'),
                autoComplete('vue'), // vue2 use autoComplete('vue2')
                // autoComplete('@vueuse/shared'),
                // autoComplete('@vueuse/core')
                //将pinia也通过cdn引入
                {
                    name: 'vue-demi', // vue版本选好 不然会报错
                    var: 'VueDemi',
                    path: 'https://unpkg.com/vue-demi@0.14.7'
                },
                {
                    name: 'pinia',
                    var: 'Pinia',
                    path: 'https://cdn.jsdelivr.net/npm/pinia@2.1.7/dist/pinia.iife.min.js'
                }
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
