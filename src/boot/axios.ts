import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
const api = axios.create({ baseURL: process.env.API });
const apiLogin = axios.create({
  baseURL: process.env.API,
  headers: { Authorization: '' },
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
  app.config.globalProperties.$apiLogin = apiLogin;
});

export { api, apiLogin };
