<template>
    <v-container>
        <h1>Top Creators</h1>
        <h3 class="font-weight-regular mt-2 mb-15">Check out top ranking NFT artist on the NFT Marketplace.</h3>
        <v-card variant="text">
            <v-tabs v-model="tab" align-tabs="center" grow>
                <v-tab value=1 class="text-h6">Today</v-tab>
                <v-spacer></v-spacer>
                <v-tab value=2 class="text-h6">This Week</v-tab>
                <v-spacer></v-spacer>
                <v-tab value=3 class="text-h6">This Month</v-tab>
                <v-spacer></v-spacer>
                <v-tab value=3 class="text-h6">All Time</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item v-for="n in 4" :key="n" :value="n">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-card variant="outlined" color="grey" class="d-flex text-center" rounded="xl">
                                        <v-col>
                                            <v-card-title># Artist</v-card-title>
                                        </v-col>
                                        <v-col>
                                            <v-card-title>Change</v-card-title>
                                        </v-col>
                                        <v-col>
                                            <v-card-title>NFTs Sold</v-card-title>
                                        </v-col>
                                        <v-col>
                                            <v-card-title>volume</v-card-title>
                                        </v-col>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col v-for="(team, index) in ranking" :key="index">
                                    <v-card variant="tonal" rounded="xl" class="d-flex text-center">
                                        <v-col>
                                            <div class="d-flex">
                                                <v-badge :content="index + 1" inline class="mt-3 mr-2"></v-badge>
                                                <v-avatar>
                                                    <v-img :src="team.image" alt="John"></v-img>
                                                </v-avatar>
                                                <v-card-title>{{ team.name }}</v-card-title>
                                            </div>
                                        </v-col>
                                        <v-col>
                                            <v-card-title>{{ team.change }}</v-card-title>
                                        </v-col>
                                        <v-col>
                                            <v-card-title>{{ team.NFTs_Sold }}</v-card-title>
                                        </v-col>
                                        <v-col>
                                            <v-card-title>{{ team.volume }}</v-card-title>
                                        </v-col>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "RankingPage",
    setup() {
        const tab = ref(null)
        const ranking = ref(
            [
                { name: 'Jaydon Bothman', change: "+1.14%", image: "/public/Artist/ArtistOne.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'Life On Edena', change: "+1.14%", image: "/public/Artist/ArtistTwo.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'AstroFiction', change: "+1.14%", image: "/public/Artist/ArtistThree.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'CryptoCity', change: "+1.14%", image: "/public/Artist/ArtistOne.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'ColorfulDog 052', change: "+1.14%", image: "/public/Artist/ArtistOne.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'Space Tales', change: "+1.14%", image: "/public/Artist/ArtistOne.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'Cherry Blossom ', change: "+1.14%", image: "/public/Artist/ArtistOne.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'Dancing Robots', change: "+1.14%", image: "/public/Artist/ArtistOne.png", volume: "12.4 ETH", NFTs_Sold: "602" },
                { name: 'IceCream Ape', change: "+1.14%", image: "/public/Artist/ArtistOne.png", volume: "12.4 ETH", NFTs_Sold: "602" },
            ])

        return {
            tab,
            ranking,
        }
    }
}
</script>

<style scoped></style>