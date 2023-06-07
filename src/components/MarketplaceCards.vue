<template>
    <v-card variant="text">
        <v-tabs v-model="tab" align-tabs="center" grow>
            <v-tab value=1 class="text-h6">NFTs</v-tab>
            <v-spacer></v-spacer>
            <v-tab value=2 class="text-h6">Collection</v-tab>
        </v-tabs>
        <v-card-text>
            <v-window v-model="tab">
                <v-window-item v-for="n in 3" :key="n" :value="n">
                    <v-container>
                        <v-row>
                            <v-col v-for="team in markets" :key="team.name">
                                <v-card class="mx-auto my-12" max-width="330" max-height="470" rounded="xl" variant="tonal">
                                    <template v-slot:loader="{ isActive }">
                                        <v-progress-linear :active="isActive" color="deep-purple" height="4"
                                            indeterminate></v-progress-linear>
                                    </template>
                                    <v-img cover height="295" width="330" :src=team.image></v-img>
                                    <v-card-item class="text-left">
                                        <v-card-title>{{ team.name }}</v-card-title>
                                        <v-avatar>
                                            <v-img src="/public/Avatar.png" alt="John"></v-img>
                                        </v-avatar>
                                        <span class="ml-3">Stealth Spidy</span>
                                    </v-card-item>
                                    <v-card-actions class="d-flex">
                                        <div>
                                            <v-card-subtitle>price</v-card-subtitle>
                                            <v-card-title>1.63 ETH</v-card-title>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <div>
                                            <v-card-subtitle>price</v-card-subtitle>
                                            <v-card-title>1.63 ETH</v-card-title>
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>
<script>
import { ref } from 'vue'

export default {
    name: "MarketPlaceCard",
    setup() {
        const tab = ref(null)
        const markets = ref(
            [
                { name: 'Life On Edena', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistTwo.png" },
                { name: 'AstroFiction', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistThree.png" },
                { name: 'CryptoCity', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistFour.png" },
                { name: 'ColorfulDog 0524', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistFive.png" },
                { name: 'Distant Galaxy', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistOne.png" },
                { name: 'Space Tales', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistSix.png" },
                { name: 'Cherry Blossom Girl 037', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistSeven.png" },
                { name: 'Dancing Robots 0987', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistEight.png" },
                { name: 'IceCream Ape', role: "Total Sales: 34.53 ETH", avatar: '/public/Avatar.png', image: "/ArtistNine.png" },
            ])
        return {
            markets,
            tab
        }
    }
}
</script>  

<style scoped>
.v-tab {
    text-transform: none;
}
</style>