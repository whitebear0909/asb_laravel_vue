<template>
    <div>
        <div class="content">
            <div
                class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left"
            >
                <div class="flex-sm-fill">
                    <h1 class="h3 font-w700 mb-2">Benutzerverwaltung</h1>
                </div>
            </div>
        </div>
        <div class="content useredit-content">
            <div class="flex-sm-fill d-flex mb-5">
                <a class="back-btn mr-4" href="javascript:void(0)" @click="goBack"
                    ><i class="fa fa-arrow-left mr-4"></i
                ></a>

                <h3 class="font-w700 mb-2">Benutzerverwaltung</h3>
            </div>
            <div class="text-center" v-if="user.isLoading === true">
                <b-spinner label="Loading..."></b-spinner>
            </div>
            <div v-else>
              <b-form @submit.stop.prevent="onSubmit">
                <div class="py-2 px-2">
                    <div class="d-flex justify-between">
                        <b-col cols="8">
                            <div>
                                <h4 class="font-w700 mb-2">Informationen</h4>
                                <div class="d-flex justify-between">
                                    <b-col cols="6">
                                        <b-form-group label="VORNAME" label-for="first-name">
                                            <b-form-input 
                                            v-model="$v.form.first_name.$model"
                                            :state="!$v.form.first_name.$error && null"
                                            id="first-name" type="text" placeholder="Ihr Vorname..."></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-form-group label="NACHNAME" label-for="second-name">
                                            <b-form-input 
                                            v-model="$v.form.second_name.$model"
                                            :state="!$v.form.second_name.$error && null"
                                            id="second-name" type="text" placeholder="Dein Familienname..."></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    
                                </div>
                                <div class="d-flex justify-between">
                                    <b-col cols="6">
                                        <b-form-group 
                                            label="QUALIFIKATION" label-for="qualification">
                                            <b-form-input
                                            v-model="$v.form.qualification.$model"
                                            :state="!$v.form.qualification.$error && null" 
                                            id="qualification" type="text" placeholder="qualifikation..."></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-form-group label="STAMMWACHE" label-for="guard">
                                            <b-form-input v-model="$v.form.guard.$model"
                                            :state="!$v.form.guard.$error && null"
                                            id="guard" type="text" placeholder="stammwache..."></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-w700 mb-2">KONTAKT</h4>
                                <div class="d-flex justify-between">
                                    <b-col cols="6">
                                        <b-form-group label="E-MAIL" label-for="email">
                                            <b-form-input v-model="$v.form.email.$model"
                                            :state="!$v.form.email.$error && null"
                                            id="email" type="email" placeholder="email..."></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-form-group label="TELEFON" label-for="telephone">
                                            <b-form-input 
                                            v-model="$v.form.telephone.$model"
                                            :state="!$v.form.telephone.$error && null"
                                            id="telephone" type="text" placeholder="telefon..."></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="4">
                            asdf
                        </b-col>
                    </div>
                    <div>
                        <h4 class="font-w700 mb-2">BESCHÄFTIGUNGSVERHÄLTNIS</h4>  
                        <div class="d-flex justify-between">
                            <b-col cols="4">
                                <b-form-group label="ANSTELLUNGSART" label-for="emp-type">
                                    <b-form-input 
                                      v-model="$v.form.emp_type.$model"
                                      :state="!$v.form.emp_type.$error && null"
                                            id="emp-type" type="text" placeholder="astellungsart..."></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="4">
                                <b-form-group label="WÖCHENTL. ARBEITSZEIT" label-for="weekly-work-hour">
                                    <b-form-input 
                                    v-model="$v.form.weekly_work_hour.$model"
                                    :state="!$v.form.weekly_work_hour.$error && null"
                                    id="weekly-work-hour" type="text" placeholder="wochentl. arbeitszeit..."></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="4">
                                <b-form-group label=" " label-for="create-btn">
                                    <b-button class="mt-4" id="create-btn" type="submit" variant="primary"><i class="fa fa-user mr-3"></i>Benutzer anlegen</b-button>
                                </b-form-group>
                            </b-col>
                        </div>
                    </div>
                </div>
              </b-form>
            </div>
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data () {
        return {
            form: {
                first_name: null,
                second_name: null,
                qualification: null,
                guard: null,
                email: null,
                telephone: null,
                empt_ype: null,
                weekly_work_hour: null
            }
        }
    },
    validations: {
        form: {
            first_name: {
                required,
                minLength: minLength(3)
            },
            second_name: {
                required,
                minLength: minLength(3)
            },
            qualification: {
                required,
                minLength: minLength(1)
            },
            guard: {
              required,
              minLength: minLength(1)
            },
            telephone: {
                required,
                minLength: minLength(5)
            },
            emp_type: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            weekly_work_hour: {
                required,
                minLength: minLength(2)
            },
        }
    },
    components: {},
    computed: {
        ...mapGetters({
            user: "user/user",
        }),
    },
    mounted() {
        var _this = this;
        this.$store.dispatch("user/getUser", this.$route.params.id).then((data) => {
          _this.form = data;
        });
    },
    created() {},
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        onSubmit() {
            console.log("submit");
            this.$v.form.$touch();

            if (this.$v.form.$anyError) {
                return;
            }

            var _this = this;
            if(this.$route.params.id){
              this.$store.dispatch("user/saveUser", {id: this.$route.params.id, data: this.form}).then((res) => {
                  console.log(res);
              });
            }
            

            // Form submit logic
            // this.$router.push('/backend/pages/auth/all')
        },
    },
};
</script>
