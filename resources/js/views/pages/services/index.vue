<template>
    <div class="container">
        <b-row class="mt-3">
            <b-col cols="4">
                <div class="guard-content">
                    <div class="guard-title px-3 py-4">Wachen</div>
                    <div class="guard-list">
                        <guard-item
                            v-for="(item, index) in guards"
                            :guard="item"
                            :key="index"
                            :isActive="activeIndex === index"
                            @onToggle="onToggle(index)"
                        >
                        </guard-item>
                    </div>
                </div>
            </b-col>
            <b-col cols="8">
                <div class="guard-content">asdfas</div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

import GuardItem from "./components/GuardItem";

export default {
    components: { GuardItem },
    data() {
        return {
            activeIndex: null,
            guards: [
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
                { name: "asdfasdf" },
            ],
        };
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
        onToggle(index) {
            if (this.activeIndex === index) {
                this.activeIndex = null;
            } else {
                this.activeIndex = index;
            }
        },
    },
};
</script>
