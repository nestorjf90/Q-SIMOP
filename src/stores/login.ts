import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import { apiLogin } from 'boot/axios';

export const useStore = defineStore('storeId', {
  state: () => ({
    usuario: null,
    isLogged: false,
    token: null,
  }),
  getters: {
    user: (state) => state.usuario,
  },

  actions: {
    guardarToken(token: string) {
      this.usuario = jwtDecode(token);
      this.isLogged = true;
      token = token;

      apiLogin.defaults.headers.Authorization = `Bearer ${token}`;
    },
    $salirToken() {
      this.usuario = null;
      this.isLogged = false;
      this.token = null;
      apiLogin.defaults.headers.common.Authorization = null;
    },
  },
  persist: true,
});
