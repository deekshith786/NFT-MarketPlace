<template>
    <v-toolbar class="navbar px-10">
        <v-icon @click="$router.push('/')" icon="mdi mdi-storefront-outline" color="#8a38f5"></v-icon>
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"><span
                class="font-weight-bold mr-2">NFT</span>Marketplace</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="plain" class="mr-5 text-white" router to="/">Home</v-btn>
        <v-btn variant="plain" class="mr-5 text-white" router to="/market-place">Marketplace</v-btn>
        <v-btn variant="plain" class="mr-5 text-white" router to="/ranking">Rankings</v-btn>
        <v-btn variant="plain" class="mr-5 text-white" v-if="!isAuthenticated" router to="/connect-wallet">Connect a wallet</v-btn>
        <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white" @click="login" v-if="!isAuthenticated">Sign
            Up</v-btn>
        <v-menu min-width="200px" rounded theme="dark" v-else>
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-avatar color="customButton" size="large">
                        <v-icon icon="mdi mdi-account-outline"></v-icon>
                    </v-avatar>
                </v-btn>
            </template>
            <v-card fluid>
                <v-card-text >
                    <v-btn variant="text" router to = '/artist'> {{ $keycloak.tokenParsed.preferred_username }} </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn variant="text" @click="logout"> Logout </v-btn>
                </v-card-text>
            </v-card>
        </v-menu>
    </v-toolbar>
</template>
<script>
import { ref, onBeforeMount } from 'vue';
import keycloak from '../../src/keycloak.js'
import router from '@/router';


export default {
    name: "Navbar",
    setup() {
        const isAuthenticated = ref(false);

        onBeforeMount(async () => {
            try {
                await keycloak.init({ onLoad: 'check-sso' });
                isAuthenticated.value = keycloak.authenticated;
            } catch (error) {
                console.error('Keycloak Initialization Error:', error);
            }
        });

        const login = () => {
            if (!isAuthenticated.value) {
                keycloak.login();
                console.log('Keycloak Initialization Successful');
                console.log('Authenticated:', authenticated);
            } else {
                console.log('User is already authenticated');
            }
        };

        const logout = () => {
            isAuthenticated.value = false;
            router.push('/');
            keycloak.logout({ redirectUri: window.location.origin });
        };

        keycloak.onAuthSuccess = () => {
            isAuthenticated.value = true;
            router.push('/market-place');
        };
        keycloak.onAuthLogout = () => {
            isAuthenticated.value = false;
            router.push('/');
        };
        return {
            isAuthenticated,
            login,
            logout
        };
    },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
}

.navbar {
    background: rgb(var(--v-theme-myCustomTheme));
    color: white;
    padding: 10px;
}
</style>
