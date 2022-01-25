<template>
    <b-col md="6" xl="3">
        <router-link :to="{ name: 'UserEdit', params: { id: user.id } }">
            <div class="user-item-card mb-5">
                <b-dropdown
                    class="m-2 setting-drop"
                    no-caret
                    variant="outline-secondary"
                >
                    <template #button-content>
                        <i class="fa fa-ellipsis-v"></i>
                    </template>
                    <b-dropdown-item href="#"
                        ><router-link
                            :to="{
                                name: 'UserEdit',
                                params: { id: user.id },
                            }"
                            class="drop-button"
                            ><i class="fa fa-edit mr-2"></i>Edit</router-link
                        ></b-dropdown-item
                    >
                    <b-dropdown-item href="#"
                        ><a
                            @click="deleteUser(user.id)"
                            href="javascript:void(0)"
                            ><span class="drop-button"
                                ><i class="fa fa-trash-alt mr-2"></i
                                >Delete</span
                            ></a
                        ></b-dropdown-item
                    >
                </b-dropdown>

                <div class="img-block mb-2">
                    <img
                        :src="user.avatar"
                        class="card-img-top"
                        alt="avatar"
                        width="100px"
                        height="120px"
                        v-if="user.avatar"
                    />
                    <img
                        v-else
                        src="/images/default_user_avatar.png"
                        class="card-img-top"
                        alt="avatar"
                        width="100px"
                        height="120px"
                    />
                </div>

                <div class="card-title mb-2">
                    {{ user.first_name }} {{ user.second_name }}
                </div>

                <div class="card-qualification mb-4">
                    {{ user.qualification ? user.qualification : "unbekannt" }}
                </div>

                <div class="d-flex justify-content-start">
                    <b-col cols="2"
                        ><i class="pull-left fa fa-envelope primary"></i>
                    </b-col>
                    <b-col cols="10" class="card-email mb-2">
                        {{ user.email }}
                    </b-col>
                </div>
            </div>
        </router-link>
    </b-col>
</template>

<script>
export default {
    props: ["user", "deleteUser"],
};
</script>
