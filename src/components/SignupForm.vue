<template>
    <div>
        <v-container fluid>
            <v-row class="pa-2 ma-2">
                <v-col>
                    <v-img src="public/login.png"></v-img>
                </v-col>
                <v-col>
                    <div>
                        <h1>Create Account</h1>
                        <h2 class="font-weight-light my-2">Welcome! Enter Your Details And Start Creating, Collection And
                            Selling
                            NFTs. </h2>
                    </div>
                    <form @submit.prevent="submit">
                        <v-responsive max-width="500">
                            <v-text-field variant="outline" prepend-inner-icon="mdi mdi-account-outline" bg-color="#ffffff"
                                class="text-black" rounded="xl" v-model="userName.value.value"
                                placeholder="username"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="500">
                            <v-text-field variant="outline" prepend-inner-icon="mdi mdi-email-outline" bg-color="#ffffff"
                                class="text-black" rounded="xl" v-model="email.value.value"
                                placeholder="email"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="500">
                            <v-text-field variant="outline" prepend-inner-icon="mdi mdi-lock-outline" bg-color="#ffffff"
                                class="text-black" rounded="xl" v-model="password.value.value"
                                placeholder="password"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="500">
                            <v-text-field variant="outline" prepend-inner-icon="mdi mdi-lock-outline" bg-color="#ffffff"
                                class="text-black" rounded="xl" v-model="confirmPassword.value.value"
                                placeholder="Confirm Password"></v-text-field>
                        </v-responsive>
                        <v-btn class="text-white" flat type="submit" color="customButton" width="500px" height="50px"
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



        const { handleSubmit, handleReset } = useForm({
            validationSchema: {
                name(value) {
                    if (value?.length >= 2) return true

                    return 'Name needs to be at least 2 characters.'
                },
                phone(value) {
                    if (value?.length > 9 && /[0-9-]+/.test(value)) return true

                    return 'Phone number needs to be at least 9 digits.'
                },
                email(value) {
                    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

                    return 'Must be a valid e-mail.'
                },
                select(value) {
                    if (value) return true

                    return 'Select an item.'
                },
                checkbox(value) {
                    if (value === '1') return true

                    return 'Must be checked.'
                },
            },
        })
        const submit = handleSubmit(values => {
            alert(JSON.stringify(values, null, 2))
        })

        return {
            userName, email, password, confirmPassword, submit, handleReset
        }
    }

}
</script>

<style scoped></style>