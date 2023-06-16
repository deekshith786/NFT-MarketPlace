<template>
    <v-toolbar class="navbar px-10">
        <v-icon @click="$router.push('/')" icon="mdi mdi-storefront-outline" color="#8a38f5"></v-icon>
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"><span
                class="font-weight-bold mr-2">NFT</span>Marketplace</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="plain" class="mr-5 text-white" router to="/">Home</v-btn>
        <v-btn variant="plain" class="mr-5 text-white" router to="/market-place">Marketplace</v-btn>
        <v-btn variant="plain" class="mr-5 text-white" router to="/ranking">Rankings</v-btn>
        <v-btn variant="plain" class="mr-5 text-white" router to="/connect-wallet">Connect a wallet</v-btn>
        <!-- <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white" router to="/signup" v-if="$route.path === '/signup'">Sign
            Up</v-btn> -->
        <!-- <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white" router to="/signup">Sign
            Up</v-btn> -->
        <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white" v-if="!$keycloak.authenticated" @click="login" router to="/artist">Sign
            Up</v-btn>
        <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white"  v-if="$keycloak.authenticated" @click="logout" router
            to="/">logout
        </v-btn>

        <!-- <p v-else></p> -->
    </v-toolbar>
</template>
<!-- <script>


export default {
    name: "Navbar",
    
};
</script> -->
<script>
import keycloak from '../../src/keycloak.js'


export default {
    name: "Navbar",
    methods: {
        login() {
            keycloak
                .init({
                    onLoad: 'check-sso',
                })
                .then((authenticated) => {
                    if (!authenticated) {
                        keycloak.login();
                    } else {
                        console.log('User is already authenticated');
                    }
                })
                .catch((error) => {
                    console.error('Keycloak initialization error:', error);
                });
        },
        logout() {
            keycloak.logout();
        },
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
