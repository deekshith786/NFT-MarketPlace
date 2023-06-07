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
                <v-card rounded="xl" variant="text" href="/nft-page">
                    <v-img :src="card.src" max-height="330px" min-height="330px" cover></v-img>
                </v-card>
                <v-row class="mt-2 pa-2">
                    <v-col rounded="xl" v-for="card in cards" :key="card.title" :cols="card.flex">
                        <v-card rounded="xl" variant="text" href="/nft-page">
                            <v-img :src="card.src" max-height="100px" min-height="100px" cover></v-img>
                        </v-card>
                    </v-col>
                    <v-card-item>
                        <v-card-title class="mb-2">{{ card.title }}</v-card-title>
                        <v-avatar image="https://images.goodsmile.info/cgm/images/product/20180306/7104/50679/large/900bd82e872f32e9671dedfb0e0a7381.jpg"></v-avatar>
                        <span class="ml-3">{{ card.name }}</span>
                    </v-card-item>
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
                title: 'DSGN Animals',
                name: 'MrFox',
                src: '/cardImageOne.png',
                flex: 4,
                avatar: '',
            },
            {
                title: 'Magic Mushrooms',
                name: 'Shroomie',
                src: '/cardImageTwo.png',
                flex: 4,
                avatar: '',
            },
            {
                title: 'Disco Machines',
                name: 'Bekind2Robots',
                src: '/cardImageThree.png',
                flex: 4,
                avatar: '',
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