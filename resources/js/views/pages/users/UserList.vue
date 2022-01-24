<template>
    <div>
        <!-- Hero -->
        <div class="content">
            <div
                class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left"
            >
                <div class="flex-sm-fill">
                    <h1 class="h3 font-w700 mb-2">Benutzerverwaltung</h1>
                </div>
                <div class="mt-3 mt-sm-0 ml-sm-3">
                    <!-- Add Event Form -->
                    <b-form @submit.prevent="addNewEvent" class="push">
                        <b-row>
                            <b-col lg="6" md="6" sm="6" xs="6" class="pb-2"
                                ><b-input-group>
                                    <b-input-group-prepend>
                                        <b-button variant="primary">
                                            <i class="fa fa-search mr-1"></i>
                                        </b-button>
                                    </b-input-group-prepend>
                                    <b-form-input
                                        placeholder="Benutzer suchen..."
                                    ></b-form-input> </b-input-group
                            ></b-col>
                            <b-col lg="6" md="6" sm="6" xs="6" class="pb-2"
                                ><b-button
                                    variant="primary"
                                    class="mr-1"
                                    href="javascript:void(0)"
                                    v-click-ripple
                                >
                                    <i class="fa fa-user mr-4"></i>
                                    Benutzer hinzufügen
                                </b-button></b-col
                            >
                        </b-row>
                    </b-form>
                    <!-- END Add Event Form -->
                </div>
            </div>
        </div>
        <div class="content">
            <div class="text-center" v-if="users.isLoading === true">
                <b-spinner label="Loading..."></b-spinner>
            </div>
            <b-row class="text-center justify-content-between" v-else>
                <user-item
                    v-for="(item, index) in users.data"
                    :key="index"
                    :user="item"
                ></user-item>
            </b-row>
            <div>
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    class="float-right"
                ></b-pagination>
            </div>
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserItem from "./UserItem";

export default {
    components: {
        UserItem,
    },
    data() {
        return { perPage: 12, currentPage: 1 };
    },
    computed: {
        ...mapGetters({
            users: "user/users",
        }),
        rows() {
            return this.users.length;
        },
    },
    mounted() {
        this.$store.dispatch("user/getUsers");
    },
    created() {},
};
</script>
