<template>
    <v-container class="my-5 text-center">
        <v-row class="my-5">
            <v-col class="text-start">
                <h1>Browse Marketplace</h1>
                <h3 class="font-weight-regular mt-2 mb-15">Browse through more than 50k NFTs on the NFT Marketplace.</h3>
                <v-text-field  append-inner-icon="mdi mdi-magnify" variant="outlined" placeholder="Search your favorite NFTs"></v-text-field>
            </v-col>
        </v-row>
        <v-row wrap class="text-center">
            <ArtistCardsSection />
        </v-row>
    </v-container>
</template>

<script>
import ArtistCardsSection from '@/components/artist/ArtistCardsSection.vue';

    export default {
    name: "MarketPlace",
    components: { ArtistCardsSection }
}
</script>

<style scoped>

</style>