<template>
    <!-- Sidebar -->
    <!--
    Sidebar Mini Mode - Display Helper classes

    Adding 'smini-hide' class to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
    Adding 'smini-show' class to an element will make it visible (opacity: 1) when the sidebar is in mini mode
    If you would like to disable the transition animation, make sure to also add the 'no-transition' class to your element

    Adding 'smini-hidden' to an element will hide it when the sidebar is in mini mode
    Adding 'smini-visible' to an element will show it (display: inline-block) only when the sidebar is in mini mode
    Adding 'smini-visible-block' to an element will show it (display: block) only when the sidebar is in mini mode
    -->
    <nav id="sidebar" aria-label="Main Navigation">
        <slot>
            <!-- Side Header -->
            <div class="content-header">
                <!-- Logo -->
                <div class="text-center mt-4">
                    <router-link to="/dashboard" class="logo-link">
                        <!-- <span class="smini-visible">
                        <i class="fa fa-circle-notch text-primary"></i>
                    </span>
                    <span class="smini-hide font-size-h5 tracking-wider">
                        OneUI <span class="font-w400">Vue</span>
                    </span> -->

                        <img class="sidebar-logo-img" src="/images/logo.svg" />
                    </router-link>
                </div>

                <!-- END Logo -->
            </div>
            <!-- END Side Header -->

            <!-- Sidebar Scrolling -->
            <!-- <simplebar class=""> -->
            <simplebar class="js-sidebar-scroll">
                <!-- Side Navigation -->
                <div class="content-side">
                    <base-navigation :nodes="navigation"></base-navigation>
                </div>
                <!-- END Side Navigation -->

                <div v-if="user" class="profile-bar mt-2">
                    <div
                        v-if="user.avatar"
                        class="imagePreviewWrapper mb-3"
                        :style="{
                            'background-image': `url(${user.avatar})`,
                        }"
                    ></div>
                    <div
                        v-else
                        class="imagePreviewWrapper mb-3"
                        :style="{
                            'background-image': `url('/images/default_user_avatar.png')`,
                        }"
                    ></div>
                    <div class="side-profile-name">
                        {{ user.first_name }} {{ user.second_name }}
                    </div>
                    <div class="side-profile-qualification">
                        {{ user.qualification }}
                    </div>
                </div>
                <div class="email-bar mt-2">
                    <div class="contact-email mb-2">
                        <i class="fa fa-envelope mr-1"></i>Support kontaktieren
                    </div>
                    <div class="contact-info">
                        © Yannik Herrmann & Langer and Friends Holding GmbH 2022
                    </div>
                </div>
            </simplebar>
            <!-- END Sidebar Scrolling -->
        </slot>
    </nav>
    <!-- END Sidebar -->
</template>
<style scoped lang="scss"></style>
<script>
// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from "simplebar-vue";

// Get navigation data
import menuList from "@/data/menu";

import { mapGetters } from "vuex";

export default {
    name: "BaseSidebar",
    props: {
        classes: String,
    },
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
    components: {
        simplebar,
    },
    data() {
        return {
            // Get main navigation
            navigation: menuList.main,
            previewImage: null,
        };
    },
};
</script>
