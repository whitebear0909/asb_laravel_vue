<template>
    <!-- Page Content -->
    <div class="hero-static d-flex align-items-center bg-login">
        <div class="w-100">
            <!-- Sign In Section -->
            <div class="">
                <div class="content content-full">
                    <b-row class="justify-content-center">
                        <b-col md="6" lg="4" xl="4" class="py-4 login-blur">
                            <!-- Header -->
                            <div class="text-center mb-4">
                                <img src="/images/logo-text.png" />
                                <h4 class="mb-1">Abeiter-Samariter-Bund</h4>
                            </div>
                            <div class="text-center mb-4 welcome-area">
                                <h1 class="mb-1 welcome-text">Willkommen!</h1>
                                <p class="title-text mb-3">
                                    Bitte logge dich in Deinen Account ein.
                                </p>
                            </div>

                            <!-- END Header -->

                            <!-- Sign In Form -->
                            <b-form
                                class="login-form-area"
                                @submit.stop.prevent="onSubmit"
                            >
                                <div class="form-group">
                                    <label for="email">BENUTZERNAME</label>
                                    <b-form-input
                                        size="lg"
                                        class="input-radius font-weight-bold form-control-alt py-4"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        v-model="$v.form.email.$model"
                                        :state="!$v.form.email.$error && null"
                                        aria-describedby="username-feedback"
                                    ></b-form-input>
                                    <span v-if="$v.form.email.$error">
                                        <small
                                            v-if="!$v.form.email.required"
                                            class="text-danger"
                                            >Email is required.</small
                                        >
                                        <small
                                            v-if="!$v.form.email.email"
                                            class="text-danger"
                                            >Please enter a valid email
                                            address.</small
                                        >
                                    </span>
                                </div>
                                <div class="form-group">
                                    <label for="password">PASSWORT</label>
                                    <b-form-input
                                        type="password"
                                        size="lg"
                                        class="input-radius form-control-alt py-4"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        v-model="$v.form.password.$model"
                                        :state="
                                            !$v.form.password.$error && null
                                        "
                                        aria-describedby="password-feedback"
                                    ></b-form-input>
                                    <span v-if="$v.form.password.$error">
                                        <small
                                            v-if="!$v.form.password.required"
                                            class="text-danger"
                                            >Password is required.</small
                                        >
                                    </span>
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="btn login-btn btn-default-primary"
                                        :disabled="is_loading"
                                    >
                                        <span v-if="is_loading">
                                            <i class="fa fa-cog fa-spin"></i
                                            >&nbsp;Warten Sie mal...
                                        </span>
                                        <span v-else> LOGIN </span>
                                    </button>
                                </div>
                                <div class="form-group text-center">
                                    <router-link
                                        to="/forgotten-password"
                                        class="font-size-sm text-white mb-1"
                                        >Passwort vergessen?</router-link
                                    >
                                </div>
                            </b-form>
                            <!-- END Sign In Form -->
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!-- END Sign In Section -->

            <!-- Footer -->
            <div class="font-size-sm text-center text-muted py-3">
                <strong>{{
                    $store.getters.appName + " " + $store.getters.appVersion
                }}</strong>
                &copy; {{ $store.getters.appCopyright }}
            </div>
            <!-- END Footer -->
        </div>
    </div>
    <!-- END Page Content -->
</template>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
            is_loading: false,
        };
    },
    validations: {
        form: {
            email: {
                required,
                email,
            },
            password: {
                required,
            },
        },
    },
    methods: {
        onSubmit() {
            this.$v.form.$touch();

            if (this.$v.form.$anyError) {
                return;
            }
            console.log(this.form);
            this.is_loading = true;

            this.$store
                .dispatch("auth/signin", this.form)
                .then((res) => {
                    this.is_loading = false;

                    if (res) {
                        this.$router.push({ name: "Dashboard" });
                    } else {
                        this.$swal(
                            "",
                            "Your credentials do not match our records",
                            "error"
                        );
                    }
                })
                .catch(() => {
                    this.is_loading = false;
                });
        },
    },
};
</script>
