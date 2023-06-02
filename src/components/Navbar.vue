<template>
    <v-toolbar class="navbar px-10">
        <v-icon @click="$router.push('/')" icon="mdi mdi-storefront-outline" color="#8a38f5"></v-icon>
        <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"><span class="font-weight-bold mr-2">NFT</span>Marketplace</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text="Asdf">Marketplace</v-btn>
        <v-btn>Rankings</v-btn>
        <v-btn>Connect a wallet</v-btn>
        <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white" router to="/signup" v-if="$route.path==='/signup'">Sign
            Up</v-btn>
        <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white" router to="/signup" v-else-if="$route.path==='/'">Sign
            Up</v-btn>
        <v-btn prepend-icon="mdi mdi-account-outline" height="55px" width="150px" rounded variant="flat"
            color="customButton" class="text-white" router to="/signup" v-else>Getting Started
            Up</v-btn>
    </v-toolbar>
</template>
<script>
export default {
    name: "Navbar",
    setup() {

    }
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
