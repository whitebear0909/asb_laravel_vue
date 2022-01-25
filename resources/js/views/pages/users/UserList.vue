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
                <div class="mt-2">
                    <!-- Add Event Form -->
                    <b-form class="">
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
                                        v-model="searchStr"
                                        v-on:keydown="getUserBySearch($event)"
                                    ></b-form-input> </b-input-group
                            ></b-col>
                            <b-col lg="6" md="6" sm="6" xs="6" class="pb-2"
                                ><b-button
                                    variant="primary"
                                    class="mr-1"
                                    href="javascript:void(0)"
                                    @click="gotoCreatePage"
                                    v-click-ripple
                                >
                                    <i class="fa fa-user-plus mr-4"></i>
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
            <b-row class="text-center justify-content-start" v-else>
                <user-item
                    v-for="(item, index) in users.data"
                    :key="index"
                    :user="item"
                    :deleteUser="deleteUser"
                ></user-item>
            </b-row>
            <div>
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    class="float-right mb-5"
                ></b-pagination>
            </div>
        </div>
        <b-modal ref="alert-modal" hide-footer title="Alarm">
            <div class="d-block text-center">
                <h3>
                    Es ist Ihr Konto. Sie können dieses Konto nicht löschen!
                </h3>
            </div>
            <div class="text-center">
                <b-button
                    class="mt-2 w-40"
                    variant="danger"
                    @click="hideAlertModal"
                    >ok</b-button
                >
            </div>
        </b-modal>
        <!-- END Page Content -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserItem from "./components/UserItem";

export default {
    components: {
        UserItem,
    },
    data() {
        return { perPage: 12, currentPage: 1, searchStr: "", delUserId: "" };
    },
    computed: {
        ...mapGetters({
            users: "user/users",
            user: "auth/user",
        }),
        rows() {
            return this.users.length;
        },
    },
    mounted() {
        this.$store.dispatch("user/getUsers", "");
        this.$store.dispatch("auth/fetchUser");
    },
    created() {},
    methods: {
        gotoCreatePage() {
            this.$router.push("/users/create");
        },
        getUserBySearch(event) {
            if (event.keyCode === 13) {
                if (event) event.preventDefault();
                this.$store.dispatch("user/getUsers", this.searchStr);
            }
        },
        setDelUserId(id) {
            this.delUserId = id;
        },
        async deleteUser(id) {
            if (id == this.user.id) {
                this.$refs["alert-modal"].show();
            } else {
                var _this = this;
                try {
                    const result = await this.$bvModal.msgBoxConfirm(
                        "Möchten Sie diesen Benutzer löschen?", //do you want to delete this user?
                        {
                            title: "Bestätigung", //confirmation
                        }
                    );

                    if (result === true) {
                        _this.$store
                            .dispatch("user/deleteUser", {
                                id: id,
                            })
                            .then((res) => {
                                _this.$store.dispatch("user/getUsers", "");
                            });
                    }
                } catch {}
            }
        },
        hideAlertModal() {
            this.$refs["alert-modal"].hide();
        },
    },
};
</script>
