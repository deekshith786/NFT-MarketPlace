<template>
    <div>
        <v-container fluid class="pa-0">
            <v-row class="pa-10 ma-10">
                <v-col>
                    <v-img src="public/login.png"></v-img>
                </v-col>
                <v-col class="pl-15">
                    <div>
                        <h1>Create Account</h1>
                        <h2 class="font-weight-light my-2">Welcome! Enter Your Details And Start Creating, Collection And
                            Selling
                            NFTs. </h2>
                    </div>
                    <form>
                        <v-responsive max-width="350">
                            <v-text-field bg-color="#ffffff" class="text-black" rounded="xl" v-model="userName.value.value"
                                label="username"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="350">
                            <v-text-field bg-color="#ffffff" class="text-black" rounded="xl" v-model="email.value.value"
                                label="email"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="350">
                            <v-text-field bg-color="#ffffff" class="text-black" rounded="xl" v-model="password.value.value"
                                label="password"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="350">
                            <v-text-field bg-color="#ffffff" class="text-black" rounded="xl"
                                v-model="confirmPassword.value.value" label="Confirm Password"></v-text-field>
                        </v-responsive>
                        <v-btn class="text-white" flat type="submit" color="customButton" width="350px" height="50px"
                            rounded>Create
                            Account</v-btn>
                    </form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { useField, useForm } from 'vee-validate'

export default {
    name: "SignUp",

    setup() {

        const userName = useField('userName')
        const email = useField('email')
        const password = useField('password')
        const confirmPassword = useField('confirmPassword')

        return {
            userName, email, password, confirmPassword
        }
    }

}
</script>

<style scoped></style>