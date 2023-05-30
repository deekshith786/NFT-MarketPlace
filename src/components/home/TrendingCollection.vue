<template>
    <!-- <v-card max-width="auto" variant="text" class="pa-10 my-10 "> -->
    <v-container class="pa-10 my-10">
        <v-row class="pl-3 mb-3 text-h5 font-weight-bold">
            <div>Trending Collection</div>
        </v-row>
        <v-row class="pl-3 mb-10">
            <div>Checkout Our Weekly Updated Trending Collection.</div>
        </v-row>
        <v-row>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card rounded="xl" variant="text">
                    <v-img :src="card.src" max-height="300px" min-height="300px" cover></v-img>
                </v-card>
                <v-row class="mt-2 pa-2">
                    <v-col rounded="xl" v-for="card in cards" :key="card.title" :cols="card.flex">
                        <v-card rounded="xl" variant="text">
                            <v-img :src="card.src" max-height="100px" min-height="100px" cover></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <!-- </v-card> -->
</template>
    
<script>
import { ref } from 'vue'
export default {
    name: 'TrendingCollections',
    setup() {
        const cards = ref([
            {
                title: 'Pre-fab homes',
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                flex: 4,
            },
            {
                title: 'Favorite road trips',
                src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                flex: 4,
            },
            {
                title: 'Best airlines',
                src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                flex: 4,
            },
        ])


        return {
            cards,
        }
    }

}
</script>
    
<style scoped>
.v-card:hover {
    transform: scale(0.9);
}

.v-card {
    transition: transform 0.5s;
}
</style>