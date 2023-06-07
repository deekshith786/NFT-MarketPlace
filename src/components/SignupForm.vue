<template>
    <div>
        <v-container fluid>
            <v-row class="pa-2 ma-2">
                <v-col>
                    <v-img src="/public/login.png"></v-img>
                </v-col>
                <v-col>
                    <div>
                        <h1>Create Account</h1>
                        <h2 class="font-weight-light mb-5">Welcome! Enter Your Details And Start Creating, Collection And
                            Selling
                            NFTs. </h2>
                    </div>
                    <form @submit.prevent="submit">
                        <v-responsive max-width="500">
                            <v-text-field prepend-inner-icon="mdi mdi-account-outline" bg-color="#ffffff" class="text-black"
                                rounded="xl" width="20" v-model="name.value.value" :counter="10" variant="solo"
                                :error-messages="name.errorMessage.value" label="userName"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="500">
                            <v-text-field prepend-inner-icon="mdi mdi-email-outline" bg-color="#ffffff" class="text-black"
                                rounded="xl" width="20" v-model="email.value.value" :counter="10" variant="solo"
                                :error-messages="email.errorMessage.value" label="email"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="500">
                            <v-text-field type="password" prepend-inner-icon="mdi mdi-lock-outline" bg-color="#ffffff"
                                class="text-black" rounded="xl" width="20" v-model="password.value.value" :counter="10"
                                variant="solo" :error-messages="password.errorMessage.value"
                                label="password"></v-text-field>
                        </v-responsive>
                        <v-responsive max-width="500">
                            <v-text-field type="password" prepend-inner-icon="mdi mdi-lock-outline" bg-color="#ffffff"
                                class="text-black" rounded="xl" width="20" v-model="confirmPassword.value.value"
                                :counter="10" variant="solo" :error-messages="confirmPassword.errorMessage.value"
                                label="confirm password"></v-text-field>
                        </v-responsive>
                        <v-btn type="submit" class="text-white" flat color="customButton" width="500px" height="50px"
                            rounded>
                            Create Account </v-btn>
                    </form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
import { useField, useForm } from 'vee-validate'

export default {
    setup() {
        const { handleSubmit, handleReset } = useForm({
            validationSchema: {
                name(value) {
                    if (value?.length >= 2) return true

                    return 'Name needs to be at least 2 characters.'
                },
                email(value) {
                    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

                    return 'Must be a valid e-mail.'
                },
                password(value) {
                    if (value?.length >= 6) return true

                    return 'Name needs to be at least 6 characters.'
                },
                confirmPassword(value) {
                    if (value?.length >= 6) return true

                    return 'Name needs to be at least 6 characters.'
                },
            },
        })
        const name = useField('name')
        const email = useField('email')
        const password = useField('password')
        const confirmPassword = useField('confirmPassword')


        const submit = handleSubmit(values => {
            alert(JSON.stringify(values, null, 2))
        })

        return {
            name,
            email,
            password,
            confirmPassword,
            submit,
            handleReset,
        }
    },
}
</script>

<style scoped></style>