<template>
    <div>
        <v-container class="pa-10 my-10">
            <v-row>
                <v-col>
                    <v-card variant="text">
                        <v-card-item>
                            <div class="text-h1 font-weight-bold text-white">Discover
                                Digital Art
                                & Collect Nfts</div>
                            <v-card-subtitle></v-card-subtitle>
                        </v-card-item>
                        <v-card-text class="text-body-1 font-weight-regular ">
                            NFT Marketplace UI Created with Anima For Figma. Collect, Buy And Sell Art Collections from More
                            Than 20k
                            NFT Artists.
                        </v-card-text>
                        <v-card-text>
                            <v-btn height="60px" width="200px" prepend-icon="mdi mdi-rocket-launch-outline" color="customButton" rounded flat
                                class="text-white" router to="/signup">Get Started</v-btn>
                        </v-card-text>
                    </v-card>

                    <v-card-actions>
                        <div class="ma-2 pa-2 font-weight-bold text-h4">240k+
                            <div class="font-weight-light">Total sale</div>
                        </div>
                        <div class="ma-2 pa-2  font-weight-bold text-h4">100+
                            <div class="font-weight-light">Auctions</div>
                        </div>
                        <div class="ma-2 pa-2 font-weight-bold text-h4">240k+
                            <div class="font-weight-light">Artists</div>
                        </div>
                    </v-card-actions>
                </v-col>
                <v-col>
                    <v-card variant="tonal" max-width="auto" rounded="xl">
                        <v-img src="/public/heroImage.png" height="auto" cover></v-img>
                        <v-card-title>
                            Space Walking
                        </v-card-title>
                        <v-card-text class="d-flex">
                            <v-avatar>
                                <v-img src="/public/Avatar.png" alt="John"></v-img>
                            </v-avatar>
                            <p class="ml-2 pa-2">Animakid</p>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-btn {
    text-transform: none;
}

</style>