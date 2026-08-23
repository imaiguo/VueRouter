import { createRouter, createWebHistory, type RouteRecordInfo } from 'vue-router'

// -------------------------- 类型定义（编译期，运行会被抹除） --------------------------
export interface RouteNamedMap {
  home: RouteRecordInfo<
    'home',
    '/',
    Record<never, never>,
    Record<never, never>,
    never
  >
  user: RouteRecordInfo<
    'user',
    '/user/:userId',
    { userId: string | number },
    { userId: string },
    'user-profile' | 'user-setting'
  >
  'user-profile': RouteRecordInfo<
    'user-profile',
    '/user/:userId/profile',
    { userId: string | number },
    { userId: string },
    never
  >
  'user-setting': RouteRecordInfo<
    'user-setting',
    '/user/:userId/setting',
    { userId: string | number },
    { userId: string },
    never
  >
  article: RouteRecordInfo<
    'article',
    '/article/:id+',
    { id: Array<string | number> },
    { id: string[] },
    never
  >
  category: RouteRecordInfo<
    'category',
    '/category/:catId?',
    { catId?: string | number },
    { catId?: string },
    never
  >
  'not-found': RouteRecordInfo<
    'not-found',
    '/:path(.*)',
    { path: string },
    { path: string },
    never
  >
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}

export type RouteName = keyof RouteNamedMap

// -------------------------- 运行时真实路由数组，传给 createRouter --------------------------
const routes = [
  {
    name: 'home' satisfies RouteName,
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'user' satisfies RouteName,
    path: '/user/:userId',
    component: () => import('@/views/User.vue'),
    children: [
      {
        name: 'user-profile' satisfies RouteName,
        path: 'profile',
        component: () => import('@/views/UserProfile.vue')
      },
      {
        name: 'user-setting' satisfies RouteName,
        path: 'setting',
        component: () => import('@/views/UserSetting.vue')
      }
    ]
  },
  {
    name: 'article' satisfies RouteName,
    path: '/article/:id+',
    component: () => import('@/views/Article.vue')
  },
  {
    name: 'category' satisfies RouteName,
    path: '/category/:catId?',
    component: () => import('@/views/Category.vue')
  },
  {
    name: 'not-found' satisfies RouteName,
    path: '/:path(.*)',
    component: () => import('@/views/NotFound.vue')
  }
]

// ✅ createRouter 接收 routes【真实数组】，不是 routes.types.ts 文件
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
