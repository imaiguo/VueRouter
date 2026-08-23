// src/router/routes.types.ts
import type { RouteRecordInfo } from 'vue-router'

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
