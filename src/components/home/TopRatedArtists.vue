<template>
    <v-container class="my-5 text-center">
        <v-row wrap class=" text-center ">
            <v-col v-for="team in creators" :key="team.name" cols="3">
                <v-card flat variant="tonal" rounded="xl" dark max-width="200px" min-width="100px" min-height="200px"
                    max-height="200px" class="border">
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
                { name: 'Carl', role: "Fullstack developer", avatar: '../gamer.png' },
                { name: 'Lana', role: "UI developer", avatar: './woman.png' },
                { name: 'Brook', role: "Backend developer", avatar: '../hacker.png' },
                { name: 'John', role: "AWSCloud developer", avatar: '../man.png' },
                { name: 'Jim', role: "Software developer", avatar: './kid.png' },
                { name: 'Diana', role: "AWS developer", avatar: './kid.png' },
            ])

        return {
            creators
        }
    }
}
</script>

<style scoped></style>