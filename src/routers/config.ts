import { ComponentType } from 'react';
import { lazy } from 'react';

import UserLayout from '@/layout/UserLayout';
import SecurtiyLayout from '@/layout/SecurtiyLayout';
import BasicLayout from '@/layout/BasicLayout';

export type RouteProps = {
  path: string;
  component?: ComponentType<any>;
  routes?: RoutesProps;
  title?: string;
  redirect?: string;
  exact?: boolean;
  strict?: boolean;
  keepAlive?: boolean;
};

export type RoutesProps = RouteProps[];

const config: RoutesProps = [
  {
    path: '/user',
    component: UserLayout,
    routes: [
      {
        path: '/user/login',
        component: lazy(() => import('@/pages/Login')),
      },
    ],
    title: '登陆',
  },
  {
    path: '/',
    component: SecurtiyLayout,
    routes: [
      {
        path: '/',
        component: BasicLayout,
        routes: [
          {
            path: '/first/welcome',
            title: '欢迎',
            component: lazy(() => import('@/pages/Welcome')),
            keepAlive: true,
          },
          {
            path: '/first/table',
            title: '表格',
            component: lazy(() => import('@/pages/First/Table')),
            keepAlive: true,
          },
          {
            path: '/first/todo',
            title: '表单',
            component: lazy(() => import('@/pages/First/TodoLists')),
            keepAlive: true,
          },
          {
            path: '/second/com1',
            title: '测试1',
            component: lazy(() => import('@/pages/Second/Com1')),
            keepAlive: true,
          },
          {
            path: '/second/com2',
            title: '测试2',
            component: lazy(() => import('@/pages/Second/Com2')),
            keepAlive: true,
          },
          {
            path: '/',
            exact: true,
            redirect: '/first/welcome',
          },
        ],
      },
    ],
  },

  // 兜底
];

export default config;
