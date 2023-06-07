<template>
    <v-container fluid class="pa-0 mb-5 mt-1">
        <v-row>
            <v-img src="/public/artist_bg.png" max-height="370px" cover></v-img>
        </v-row>
        <v-row>
            <v-card variant="text" class="avatarCard">
                <v-avatar size="100" rounded="0">
                    <img src="/public/Avatar.png" width="100" height="100">
                </v-avatar>
            </v-card>
        </v-row>
        <v-row class="pl-15">
            <v-col>
                <h1>Stealth spidy</h1>
                <v-card variant="text">
                    <v-card-actions class="pa-0 mt-2">
                        <div class=" mr-5 font-weight-bold text-h6">250k+
                            <div class="font-weight-light">Volume</div>
                        </div>
                        <div class=" pa-5 font-weight-bold text-h6">50+
                            <div class="font-weight-light">NFTs Sold</div>
                        </div>
                        <div class="pa-5 font-weight-bold text-h6">3000k+
                            <div class="font-weight-light">Followers</div>
                        </div>
                    </v-card-actions>
                    <v-card-subtitle class="pa-0 mt-2">Bio</v-card-subtitle>
                    <v-card-title class="pa-0 mt-2 font-weight-regular">The Internet's Friendliest Designer
                        Kid.</v-card-title>
                    <v-card-subtitle class=" pa-0 mt-2 font-weight-bold text-body">Links</v-card-subtitle>
                    <v-card-subtitle class=" pa-0 font-weight-bold text-body">
                        <span class="mdi mdi-web"></span>
                        <span class="mdi mdi-reddit ml-1"></span>
                        <span class="mdi mdi-youtube ml-1"></span>
                        <span class="mdi mdi-twitter ml-1"></span>
                        <span class="mdi mdi-instagram ml-1"></span>
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex justify-space-evenly">
                <v-btn color="customButton" flat rounded width="186px" height="60px">0xc0E3...B79C</v-btn>
                <v-btn color="customButton" flat rounded variant="outlined" width="186px" height="60px"
                    prepend-icon="mdi mdi-plus">follow</v-btn>
            </v-col>
            <v-divider></v-divider>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ArtistInfo",

}
</script>

<style scoped>
.avatarCard {
    bottom: 50px;
    left: 70px;
}
</style>