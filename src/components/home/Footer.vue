<template>
    <v-card variant="tonal" class="pa-15 ">
        <v-row>
            <v-col>
                <div variant="plain" flat>
                    <v-card-title><span class="font-weight-bold mr-2">
                            <v-icon icon="mdi mdi-storefront-outline" color="#8a38f5"></v-icon>
                            NFT</span>Marketplace</v-card-title>
                    <v-card-text class="mt-5 text-grey">NFT marketplace UI created with Vue.JS using Vuetify</v-card-text>
                    <v-card-text class="text-grey font-weight-bold text-h6">Join our community </v-card-text>
                    <v-card-subtitle class="font-weight-bold text-h6">
                        <span class="mdi mdi-web"></span>
                        <span class="mdi mdi-reddit ml-1"></span>
                        <span class="mdi mdi-youtube ml-1"></span>
                        <span class="mdi mdi-twitter ml-1"></span>
                        <span class="mdi mdi-instagram ml-1"></span>
                    </v-card-subtitle>
                </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-card-title class="text-h5 mb-5">Trending Collections</v-card-title>
                <v-card-subtitle class="mt-3">Magic Mushrooms</v-card-subtitle>
                <v-card-subtitle class="mt-3">Disco Machines</v-card-subtitle>
                <v-card-subtitle class="mt-3">DSGN Animals</v-card-subtitle>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-card-title class="text-h5 mb-5">Explore</v-card-title>
                <v-card-subtitle class="mt-3">Marketplace</v-card-subtitle>
                <v-card-subtitle class="mt-3">Rankings</v-card-subtitle>
                <v-card-subtitle class="mt-3">Connect a wallet</v-card-subtitle>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-card-title class="text-h5 mb-5">Join Our weekly Digest</v-card-title>
                <v-card-text>Get exclusive promotions & updates straight to your inbox.</v-card-text>
                <v-text-field variant="outlined" placeholder="Enter your email here" class="text-end"> </v-text-field>
                <!-- <v-btn color="customButton" rounded="xl">Connect a wallet</v-btn> -->
                <v-btn height="60px" width="200px" color="customButton" rounded flat
                                class="text-white" href="/connect-wallet">Connect a wallet</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped></style>