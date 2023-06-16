/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'



// Composables
import { createApp } from 'vue'

// keycloak service
import keycloak from '../src/keycloak.js'


// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App);
registerPlugins(app)
app.config.globalProperties.$keycloak = keycloak; // Make $keycloak available globally
app.mount('#app');

// keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
//   if (authenticated) {
//   }
// });
