import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BaseLayout from '@/vue-app/layout/BaseLayout.vue';
import ContactView from '@/vue-app/views/ContactView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: BaseLayout,
    children: [{ path: '/', component: HomeView, name: 'home' }],
  },
  {
    path: '/contact',
    component: BaseLayout,
    children: [{ path: '/', name: 'contact', component: ContactView }],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
