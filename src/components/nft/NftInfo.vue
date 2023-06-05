<template>
    <v-container fluid class="pa-0 mb-5">
        <v-row>
            <v-img src="/public/NFT/NftInfo.png" max-height="500px" cover></v-img>
        </v-row>
        <v-row class="mt-12">
            <v-col class="d-flex justify-space-evenly">
                <v-card variant="text">
                    <v-card-text class="text-h3">The Orbitians</v-card-text>
                    <v-card-subtitle class="text-h6 pt-5">Minted On Sep 30, 2022</v-card-subtitle>
                    <v-card-subtitle class="text-h6 pt-10">Created By</v-card-subtitle>
                    <v-card-text class=" text-h6 font-weight-bold">
                        <v-avatar size="x-small">
                            <v-img src="/public/Avatar.png" alt="John" class="pa-1"></v-img>
                        </v-avatar>Orbitians
                    </v-card-text>
                    <v-card-subtitle class="text-h6 pt-3">Description</v-card-subtitle>
                    <v-card-text>The Orbitians is a collection of 10,000 unique NFTs on Etherum blockchain.</v-card-text>
                    <v-card-text>There are all sorts of beings in the NFT Universe.</v-card-text>
                    <v-card-text>There are all sorts of beings in the NFT Universe.</v-card-text>
                    <v-card-subtitle class="text-h6 pt-3">Details</v-card-subtitle>
                    <v-card-text class="text-h6">
                        <v-icon icon="mdi mdi-web" color="grey" class="pr-3">
                        </v-icon>Orbitians
                    </v-card-text>
                    <v-card-text class=" text-h6">
                        <v-icon icon="mdi mdi-web" color="grey" class="pr-3">
                        </v-icon>Orbitians
                    </v-card-text>
                    <v-card-subtitle class="text-h6 my-3">Tags</v-card-subtitle>
                    <v-chip class="ma-2"> Animation </v-chip>
                    <v-chip class="ma-2"> Illustration </v-chip>
                    <v-chip class="ma-2"> Moon </v-chip>
                    <v-chip class="ma-2"> Moon </v-chip>
                </v-card>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col class="d-flex justify-space-evenly">
                <v-card variant="tonal" width="295px" height="225px" rounded="xl">
                    <v-card-title>Auction ends in:</v-card-title>
                    <v-card-title>Timer</v-card-title>
                    <v-card-actions class="d-flex justify-space-around align-self-end">
                        <v-btn min-height="60px" min-width="235px" rounded variant="flat" color="customButton">Place
                            Bid</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-divider></v-divider>
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
</style>