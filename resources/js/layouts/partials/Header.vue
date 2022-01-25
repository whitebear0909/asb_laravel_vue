<template>
    <!-- Header -->
    <header id="page-header">
        <slot>
            <!-- Header Content -->
            <div class="content-header">
                <div class="d-flex"></div>
                <!-- Right Section -->
                <div v-if="user" class="d-flex align-items-center">
                    <!-- User Dropdown -->
                    <b-dropdown
                        size="sm"
                        variant="dual"
                        class="d-inline-block ml-2"
                        menu-class="p-0 border-0 dropdown-menu-md"
                        right
                        no-caret
                        ref="oneDropdownDefaultUser"
                    >
                        <template #button-content>
                            <div class="d-flex align-items-center">
                                <img
                                    v-if="user.avatar"
                                    class="rounded-circle"
                                    :src="user.avatar"
                                    alt="Header Avatar"
                                    style="width: 21px"
                                />
                                <img
                                    v-else
                                    class="rounded-circle"
                                    src="/images/default_user_avatar.png"
                                    alt="Header Avatar"
                                    style="width: 21px"
                                />
                                <span class="d-none d-sm-inline-block ml-2"
                                    >{{ user.first_name }}
                                    {{ user.second_name }}</span
                                >
                                <i
                                    class="fa fa-fw fa-angle-down d-none d-sm-inline-block ml-1 mt-1"
                                ></i>
                            </div>
                        </template>
                        <li @click="$refs.oneDropdownDefaultUser.hide(true)">
                            <div
                                class="p-3 text-center bg-primary-dark rounded-top"
                            >
                                <img
                                    v-if="user.avatar"
                                    class="img-avatar img-avatar48 img-avatar-thumb"
                                    :src="user.avatar"
                                    alt="Avatar"
                                />
                                <img
                                    v-else
                                    class="img-avatar img-avatar48 img-avatar-thumb"
                                    src="/images/default_user_avatar.png"
                                    alt="Avatar"
                                />
                                <p class="mt-2 mb-0 text-white font-w500">
                                    {{ user.first_name }} {{ user.second_name }}
                                </p>
                                <p class="mb-0 text-white-50 font-size-sm">
                                    {{ user.qualification }}
                                </p>
                            </div>
                            <div class="p-2">
                                <!-- <a
                                    class="dropdown-item d-flex align-items-center justify-content-between"
                                    href="javascript:void(0)"
                                >
                                    <span class="font-size-sm font-w500"
                                        >Inbox</span
                                    >
                                    <span
                                        class="badge badge-pill badge-primary ml-2"
                                        >3</span
                                    >
                                </a>
                                <router-link
                                    class="dropdown-item d-flex align-items-center justify-content-between"
                                    to="/backend/pages/generic/profile"
                                >
                                    <span class="font-size-sm font-w500"
                                        >Profile</span
                                    >
                                    <span
                                        class="badge badge-pill badge-primary ml-2"
                                        >1</span
                                    >
                                </router-link>
                                <a
                                    class="dropdown-item d-flex align-items-center justify-content-between"
                                    href="javascript:void(0)"
                                >
                                    <span class="font-size-sm font-w500"
                                        >Settings</span
                                    >
                                </a>
                                <div
                                    role="separator"
                                    class="dropdown-divider"
                                ></div>
                                <router-link
                                    class="dropdown-item d-flex align-items-center justify-content-between"
                                    to="/auth/lock"
                                >
                                    <span class="font-size-sm font-w500"
                                        >Lock Account</span
                                    >
                                </router-link> -->
                                <a
                                    href="javascript:void(0);"
                                    @click="logout"
                                    class="dropdown-item d-flex align-items-center justify-content-between"
                                >
                                    <span class="font-size-sm font-w500"
                                        >Log Out</span
                                    >
                                </a>
                            </div>
                        </li>
                    </b-dropdown>
                    <!-- END User Dropdown -->

                    <!-- Notifications Dropdown -->
                    <!-- <b-dropdown
                        size="sm"
                        variant="dual"
                        class="d-inline-block ml-2"
                        menu-class="dropdown-menu-lg p-0 border-0 font-size-sm"
                        right
                        no-caret
                    >
                        <template #button-content>
                            <i class="fa fa-fw fa-bell"></i>
                            <span
                                v-if="notifications.length"
                                class="text-primary"
                                >•</span
                            >
                        </template>
                        <li>
                            <div
                                class="p-2 bg-primary-dark text-center rounded-top"
                            >
                                <h5
                                    class="dropdown-header text-uppercase text-white"
                                >
                                    Notifications
                                </h5>
                            </div>
                            <ul class="nav-items mb-0">
                                <li
                                    v-for="(
                                        notification, index
                                    ) in notifications"
                                    :key="`notification-${index}`"
                                >
                                    <a
                                        class="text-dark media py-2"
                                        :href="`${notification.href}`"
                                    >
                                        <div class="mr-2 ml-3">
                                            <i
                                                :class="`${notification.icon}`"
                                            ></i>
                                        </div>
                                        <div class="media-body pr-2">
                                            <div class="font-w600">
                                                {{ notification.title }}
                                            </div>
                                            <span
                                                class="font-w500 text-muted"
                                                >{{ notification.time }}</span
                                            >
                                        </div>
                                    </a>
                                </li>
                                <li v-if="!notifications.length" class="p-2">
                                    <b-alert
                                        variant="warning"
                                        class="text-center m-0"
                                        show
                                    >
                                        <p class="mb-0">
                                            No new notifications!
                                        </p>
                                    </b-alert>
                                </li>
                            </ul>
                            <div
                                v-if="notifications.length"
                                class="p-2 border-top"
                            >
                                <b-button
                                    size="sm"
                                    variant="light"
                                    class="text-center"
                                    block
                                    href="javascript:void(0)"
                                >
                                    <i class="fa fa-fw fa-arrow-down mr-1"></i>
                                    Load More..
                                </b-button>
                            </div>
                        </li>
                    </b-dropdown> -->
                    <!-- END Notifications Dropdown -->

                    <!-- Toggle Side Overlay -->
                    <!-- <base-layout-modifier
                        action="sideOverlayToggle"
                        variant="dual"
                        size="sm"
                        class="ml-2"
                    >
                        <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
                    </base-layout-modifier> -->
                    <!-- END Toggle Side Overlay -->
                </div>
                <!-- END Right Section -->
            </div>
            <!-- END Header Content -->

            <!-- Header Search -->
            <!-- <div
                id="page-header-search"
                class="overlay-header bg-white"
                :class="{ show: $store.state.settings.headerSearch }"
                @keydown.esc="
                    () => $store.commit('headerSearch', { mode: 'off' })
                "
            >
                <div class="content-header">
                    <b-form @submit.stop.prevent="onSubmit" class="w-100">
                        <b-input-group>
                            <b-input-group-prepend>
                                <base-layout-modifier
                                    action="headerSearchOff"
                                    variant="alt-danger"
                                >
                                    <i class="fa fa-fw fa-times-circle"></i>
                                </base-layout-modifier>
                            </b-input-group-prepend>
                            <b-form-input
                                placeholder="Search or hit ESC.."
                                v-model="baseSearchTerm"
                            ></b-form-input>
                        </b-input-group>
                    </b-form>
                </div>
            </div> -->
            <!-- END Header Search -->

            <!-- Header Loader -->
            <div
                id="page-header-loader"
                class="overlay-header bg-white"
                :class="{ show: $store.state.settings.headerLoader }"
            >
                <div class="content-header">
                    <div class="w-100 text-center">
                        <i class="fa fa-fw fa-circle-notch fa-spin"></i>
                    </div>
                </div>
            </div>
            <!-- END Header Loader -->
        </slot>
    </header>
    <!-- END Header -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "BaseHeader",
    props: {
        classes: String,
    },
    data() {
        return {
            baseSearchTerm: "",
            notifications: [
                {
                    href: "javascript:void(0)",
                    icon: "fa fa-fw fa-check-circle text-success",
                    title: "You have a new follower",
                    time: "15 min ago",
                },
                {
                    href: "javascript:void(0)",
                    icon: "fa fa-fw fa-plus-circle text-primary",
                    title: "1 new sale, keep it up",
                    time: "22 min ago",
                },
                {
                    href: "javascript:void(0)",
                    icon: "fa fa-fw fa-times-circle text-danger",
                    title: "Update failed, restart server",
                    time: "26 min ago",
                },
                {
                    href: "javascript:void(0)",
                    icon: "fa fa-fw fa-plus-circle text-primary",
                    title: "2 new sales, keep it up",
                    time: "33 min ago",
                },
                {
                    href: "javascript:void(0)",
                    icon: "fa fa-fw fa-user-plus text-success",
                    title: "You have a new subscriber",
                    time: "41 min ago",
                },
                {
                    href: "javascript:void(0)",
                    icon: "fa fa-fw fa-check-circle text-success",
                    title: "You have a new follower",
                    time: "42 min ago",
                },
            ],
        };
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
    methods: {
        onSubmit() {
            this.$router.push(
                "/backend/pages/generic/search?" + this.baseSearchTerm
            );
        },
        eventHeaderSearch(event) {
            // When ESCAPE key is hit close the header search section
            if (event.which === 27) {
                event.preventDefault();
                this.$store.commit("headerSearch", { mode: "off" });
            }
        },
        logout() {
            this.$store.dispatch("auth/logout").then((res) => {
                console.log(res);
                this.$router.push("/login");
            });
        },
    },
    mounted() {
        document.addEventListener("keydown", this.eventHeaderSearch);
    },
    destroyed() {
        document.removeEventListener("keydown", this.eventHeaderSearch);
    },
};
</script>
