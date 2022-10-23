import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BaseLayout from '@/vue-app/layout/BaseLayout.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: BaseLayout,
    children: [{ path: '/', component: HomeView, name: 'home' }],
  },
  {
    path: '/contact',
    children: [
      {
        path: '/',
        name: 'contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
