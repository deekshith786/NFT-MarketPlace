<template>
    <v-container>
        <v-row class="pa-2 ma-2">
            <v-col>
                <v-img src="public/Fingerprint.png"></v-img>
            </v-col>
            <v-col>
                <div>
                    <h1>Connect Wallet</h1>
                    <h2 class="font-weight-light mb-5">Welcome! Enter Your Details And Start Creating, Collection And
                        Selling
                        NFTs. </h2>
                </div>
                <v-col>
                    <v-btn variant="tonal" min-height="72px" min-width="320px" rounded="xl" class="text-h6">
                        <v-avatar class="mr-10"> <v-img src="/public/Metamask.png"></v-img></v-avatar>
                        MetaMask</v-btn>
                </v-col>
                <v-col>
                    <v-btn variant="tonal" min-height="72px" min-width="320px" rounded="xl" class="text-h6">
                        <v-avatar class="mr-10"> <v-img src="/public/WalletConnect.png"></v-img></v-avatar>
                        WalletCon</v-btn>
                </v-col>
                <v-col>
                    <v-btn variant="tonal" min-height="72px" min-width="320px" rounded="xl" class="text-h6">
                        <v-avatar class="mr-10" size="36px">
                            <v-img alt="Avatar" src="/public/Coinbase.png"></v-img>
                        </v-avatar>
                        Coinbase
                        </v-btn>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-btn {
    text-transform: none;
}
.v-btn:hover {
    transform: scale(1.1);
}

.v-btn {
    transition: transform 0.5s;
}
</style>