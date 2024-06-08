<template>
  <q-layout view="lHh lpR lFF" class="shadow-2 rounded-borders">
    <q-header elevated reveal class="bg-white text-black">
      <q-toolbar class="col-12">
        <div class="col-2 col-md-5"></div>
        <div class="col-12 col-md-3" v-if="$q.screen.gt.xs">
          <q-toolbar-title shrink class="row items-center no-wrap">
            <img src="/logo.jpg" style="height: 60px; max-width: 980px" />
          </q-toolbar-title>
        </div>
        <div class="col-10 col-md-4" align="right">
          <label style="color: #81a1cd; padding: 10px">{{ nombre }}</label>
          <q-btn-dropdown
            flat
            style="padding: 3px"
            color="accent"
            dropdown-icon="widgets"
            size="15px"
            push
            transition-show="slide-left"
            transition-hide="slide-right"
            transition-duration="700"
          >
            <!-- <q-list
              bordered
              v-ripple
              style="border-color: #62645d7c #62645d7c; color: rgb(0, 0, 0)"
            >
              <q-separator spaced inset="item"></q-separator>
              <q-item
                clickable
                v-close-popup
                @click="redirect()"
                style="border-color: #fb7e52"
              >
                <q-item-section top avatar>
                  <q-avatar
                    style="background-color: #81a1cd; color: azure"
                    icon="person"
                  >
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Usuario </q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced inset="item"></q-separator>
              <q-item clickable v-close-popup @click="logout()">
                <q-item-section @click="logout()">
                  <q-item-label>Cerrar Sesión</q-item-label>
                </q-item-section>
              </q-item>
            </q-list> -->
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated class="bg-blue-8 text-white">
      <q-tabs v-model="tab" class="text-white">
        <q-tab
          name="programas"
          icon="home"
          label="Priorización"
          @click="redirect('/ejecucion_monitoreada')"
        ></q-tab>
        <q-tab
          name="ingresos"
          icon="more"
          label="Monitoreos"
          @click="redirect('/ingresos')"
        ></q-tab>
        <q-tab
          name="session"
          icon="exit_to_app"
          label="Logout"
          @click="logout()"
        ></q-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '../stores/login';
export default {
  name: 'GoogleNewsLayout',

  setup() {
    const store = useStore();
    const leftDrawerOpen = ref(false);
    const search = ref('');
    const showAdvanced = ref(false);
    const showDateOptions = ref(false);
    const exactPhrase = ref('');
    const hasWords = ref('');
    const excludeWords = ref('');
    const byWebsite = ref('');
    const byDate = ref('Any time');
    const modoClaro = ref(false);
    const nombre = '';
    function onClear() {
      exactPhrase.value = '';
      hasWords.value = '';
      excludeWords.value = '';
      byWebsite.value = '';
      byDate.value = 'Any time';
    }
    function changeDate(option) {
      byDate.value = option;
      showDateOptions.value = false;
    }
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function toggleModoClaro() {
      modoClaro.value = !modoClaro.value;
    }
    return {
      leftDrawerOpen,
      modoClaro,
      store,
      search,
      nombre,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      byDate,
      open: '',
      // links: ref('Inicio'),
      listadolinks: {
        // links1: [
        //   {
        //     icon: 'person',
        //     link: '/ejecucion_monitoreada',
        //     text: 'Usuarios',
        //   },
        //   { icon: 'group', text: 'Clientes', link: '/list_customers' },
        //   { icon: 'groups', text: 'Asegurados', link: '/list_insured' },
        //   { icon: 'list_alt', text: 'Póliza', link: '/list_policy' },
        //   { icon: 'show_chart', text: 'Reportes', link: '/root' },
        // ],
        opciones: [
          { text: 'Priorización de Programas', link: '/ejecucion_monitoreada' },
          { text: 'Monitoreos', link: '/ingresos' },
          // { text: 'Ocupación', link: '/new_occupation' },
        ],
      },
      onClear,
      changeDate,
      toggleLeftDrawer,
      toggleModoClaro,
    };
  },
  methods: {
    redirect(redirect) {
      this.$router.push(redirect);
    },
    logout() {
      this.store.$reset();
      this.$router.push('/');
    },
  },
  created() {
    this.nombre = this.store.user.name;
  },
};
</script>
<style scoped>
#scrol {
  height: calc(100%);
  border-right: 1px solid rgba(221, 221, 221, 0.644);
}
</style>
<style lang="sass">
.my-menu-link
    color: white
    background: #F2C037
.q-drawer
  .q-router-link--exact-active
        color: black !important
        font-weight: bold
        background-attachment: fixed
        background-color: #ffff
         border-top: 1px inset #1d274f
        border-bottom: 1px inset #1d274f
        opacity: 1.5
        margin: 0
</style>

<style>
.GNL__drawer-item {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: rgba(255, 255, 255, 0);
  transition: background-color 0.3s, transform 0.3s;
  margin: 0;
}
.GNL__drawer-item:hover {
  transform: scale(0.9, 0.9);
}
#header-foto {
  height: 160px;
  border: 1px inset #353542;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  border-bottom-right-radius: 210px;
  border-top-left-radius: 210px;
}

.modo-oscuro {
  /* background-color: rgba(0, 0, 0, 0.651); */
  background-color: #263238;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  padding: 20px;
  opacity: 0.7;
  /* opacity: 1.5 */
  transition: opacity 0.5s;
  box-sizing: border-box;
}
.modo-claro {
  background-color: #0d47a1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: rgb(255, 253, 253);
  padding: 20px;
  opacity: 0.6;
  /* opacity: 1.5 */
  transition: opacity 0.8s;
  box-sizing: border-box;
}
.user {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
}
/* Estilos para el icono de chat */
.chat-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #81a1cd;
  color: white;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.5s;
}

.chat-icon:hover {
  background-color: #81a1cd;
  transform: scale(1.11);
}
</style>
