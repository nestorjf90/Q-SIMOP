import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store = createPinia();
store.use(piniaPluginPersistedstate);
export default boot(({ app }) => {
  app.use(store);
});
