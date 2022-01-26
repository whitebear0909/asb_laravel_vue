<template>
    <div class="guard-item" @click="toggleActive" :class="{ active: isActive }">
        <div class="d-flex">
            <b-col cols="10" class="guard-item-text"> asdfasdf </b-col>
            <b-col cols="2" class="text-center">
                <a class="guard-item-btn-edit" href="javascript:void(0)"
                    ><i class="fa fa-pen"></i></a
            ></b-col>
        </div>
    </div>
</template>
<script>
export default {
    props: ["guard", "isActive"],
    methods: {
        toggleActive() {
            this.$emit("onToggle");
        },
    },
};
</script>
