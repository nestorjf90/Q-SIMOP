import { route } from 'quasar/wrappers';
import { useStore } from '../stores/login';
import { apiLogin } from '../boot/axios';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Router.beforeEach((to, from, next) => {
    const store = useStore();
    apiLogin.defaults.headers.Authorization = `Bearer ${store.token}`;
    next();
  });

  return Router;
});
