<template>
    <v-container class="my-5 text-center">
        <v-row class="my-5">
            <v-col class="text-start">
                <h1>Top Creators</h1>
                <p class="font-weight-light my-2">Checkout Top Rated Created On The NFT Marketplace</p>
            </v-col>
            <v-col class="text-end">
                <v-btn height="60px" width="250px" variant="outlined" color="customButton"
                    prepend-icon="mdi mdi-rocket-launch-outline" rounded href="/ranking">
                    <!-- <p class="text-white" variant="text" @click="$router.push('/ranking')"> View Rankings</p> -->
                    <p class="text-white" variant="text"> View Rankings</p>
                </v-btn>
            </v-col>
        </v-row>
        <v-row wrap class="text-center">
            <v-col v-for="team in creators" :key="team.name" cols="3">
                <v-card flat variant="tonal" rounded="xl" dark class="border" href="/artist">
                    <v-avatar size="100" class="mt-6">
                        <img :src="team.avatar" width="100" height="100">
                    </v-avatar>
                    <v-card-text>
                        <div class="font-weight-regular">{{ team.name }}</div>
                        <div class="font-weight-light">{{ team.role }}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "TopCreators",
    setup() {
        const creators = ref(
            [
                { name: 'Carl', role: "Total Sales: 34.53 ETH", avatar: '../gamer.png' },
                { name: 'Lana', role: "Total Sales: 34.53 ETH", avatar: './woman.png' },
                { name: 'Brook', role: "Total Sales: 34.53 ETH", avatar: '../hacker.png' },
                { name: 'John', role: "Total Sales: 34.53 ETH", avatar: '../man.png' },
                { name: 'Diana', role: "Total Sales: 34.53 ETH", avatar: './kid.png' },
                { name: 'Lana', role: "Total Sales: 34.53 ETH", avatar: './woman.png' },
                { name: 'Jim', role: "Total Sales: 34.53 ETH", avatar: './kid.png' },
                { name: 'Brook', role: "Total Sales: 34.53 ETH", avatar: '../hacker.png' },
                { name: 'John', role: "Total Sales: 34.53 ETH", avatar: '../man.png' },
                { name: 'Jim', role: "Total Sales: 34.53 ETH", avatar: './kid.png' },
                { name: 'John', role: "Total Sales: 34.53 ETH", avatar: '../man.png' },
                { name: 'Diana', role: "Total Sales: 34.53 ETH", avatar: './kid.png' },
            ])

        return {
            creators
        }
    }
}
</script>

<style scoped>
.v-btn {
    text-transform: none;
}

.v-card:hover {
    transform: scale(0.9);
}

.v-card {
    transition: transform 0.5s;
}
</style>