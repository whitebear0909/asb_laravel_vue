<template>
    <b-col md="6" xl="3">
        <router-link :to="{ name: 'UserEdit', params: { id: user.id } }">
          <base-block rounded title=" " class="text-center user-item">
            <template #options>
             <b-dropdown  class="m-2" no-caret variant="outline-primary">
             <template #button-content>
                <i class="fa fa-ellipsis-v" ></i>
            </template>
                <b-dropdown-item href="#"><router-link :to="{ name: 'UserEdit', params: { id: user.id } }" class="drop-button"><i class="fa fa-edit mr-2"></i>Edit</router-link></b-dropdown-item>
                <b-dropdown-item href="#"><span class="drop-button"><i class="fa fa-trash-alt mr-2 "></i>Delete</span></b-dropdown-item>
            </b-dropdown>
              <!-- <button type="button" class="btn-block-option">
                <i class="fa fa-ellipsis-v"></i>
              </button> -->
            </template>
            <img
                src="/"
                class="card-img-top"
                alt="avatar"
                width="100px"
                v-if="user.avatar"
            />
            <img
                v-else
                src="/images/default_user_avatar.png"
                class="card-img-top"
                alt="avatar"
                width="100px"
            />
            <h5 class="card-title">{{user.name}}</h5>
            <div class="card-qualification">{{user.qualification}}</div>
            <div class="d-flex justify-content-between">
                <b-col cols="2"><i class="pull-left fa fa-envelope primary"></i>
                </b-col>
                <b-col cols="10" class="card-email">
                    {{user.email}}
                </b-col>
            </div>
          </base-block>
          </router-link>
        </b-col>
</template>

<script>
export default {
    props: ["user"],
};
</script>
