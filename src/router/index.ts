//从VueRouter中导入需要的函数模块
import {createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Nprogress from '@/utils/nprogress'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main/one'
  },
  {
    path: '/main',
    redirect: '/main/one',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: 'one',
        component: () => import('../views/main/one.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404.vue')
  }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 4. 拦截器
// @ts-ignore
router.beforeEach((to, from, next) => {
  Nprogress.inc();
  if (to.matched.length === 0) { // 如果未匹配到路由
    next('/404')
  } else {
    next() // 如果匹配到正确跳转
  }
});

router.afterEach(() => {
  Nprogress.done(true)
})

//导出router
export default router

