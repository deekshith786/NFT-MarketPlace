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
            <MarketplaceCards />
        </v-row>
    </v-container>
</template>

<script>
import MarketplaceCards from '@/components/MarketplaceCards.vue';

    export default {
    name: "MarketPlace",
    components: { MarketplaceCards }
}
</script>

<style scoped>

</style>