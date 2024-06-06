import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/',
        component: () => import('pages/Login/Inicio_sesion.vue'),
        meta: { libre: true },
      },
    ],
  },
  {
    path: '/ejecucion_monitoreada',
    component: () => import('layouts/MainMenu.vue'),
    children: [
      {
        path: '/ejecucion_monitoreada',
        component: () =>
          import('src/pages/Ejecucion/Ejecucion_monitoreada.vue'),
        meta: { libre: true },
      },
      {
        path: '/ingreso_monitoreo/:id',
        component: () => import('src/pages/Ejecucion/Ingreso_monitoreo.vue'),
        meta: { libre: true },
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
