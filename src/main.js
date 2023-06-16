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
import KeyCloakService from "./security/KeycloakService";

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

KeyCloakService.CallLogin(app);
