<template>
    <v-container fluid class="pa-0">
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
        <v-row>
            <h1>heloow</h1>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>


.avatarCard{
    bottom: 50px;
    left: 50px;
}

</style>