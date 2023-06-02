<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374" max-height="470" rounded="xl">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

        <v-card-item>
            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-subtitle>
                <v-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                </v-avatar>
                <span class="ml-3">Animakid</span>
            </v-card-subtitle>
        </v-card-item>

        <v-card-item class="d-flex">
            <div>
                <v-card-subtitle>price</v-card-subtitle>
                <v-card-title>1.63 ETH</v-card-title>
            </div>
            <div>
                <v-card-subtitle>price</v-card-subtitle>
                <v-card-title>1.63 ETH</v-card-title>
            </div>
        </v-card-item>
    </v-card>
</template>
<script>
export default {
    name: "ArtistCardSection",


}
</script>
  