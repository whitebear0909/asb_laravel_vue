import * as types from "../mutation-types";

// state
export const state = {
    users: {
        isLoading: false,
        data: [],
    },
    user: {
        isLoading: false,
        data: null,
    },
};

// getters
export const getters = {
    users: (state) => state.users,
    user: (state) => state.user,
};

// mutations
export const mutations = {
    //GET USERS
    [types.GET_USERS_REQUEST](state, {}) {
        state.users.isLoading = true;
    },
    [types.GET_USERS_SUCCESS](state, { data }) {
        state.users.data = data;
        state.users.isLoading = false;
    },
    [types.GET_USERS_FAIL](state, {}) {
        state.users.isLoading = false;
    },
    //GET USER
    [types.GET_USER_REQUEST](state, {}) {
        state.user.isLoading = true;
    },
    [types.GET_USER_SUCCESS](state, { data }) {
        state.user.data = data;
        state.user.isLoading = false;
    },
    [types.GET_USER_FAIL](state, {}) {
        state.user.isLoading = false;
    },
    //SAVE USER
    [types.SAVE_USER_REQUEST](state, {}) {
        state.user.isLoading = true;
    },
    [types.SAVE_USER_SUCCESS](state, { data }) {
        state.user.data = data;
        state.user.isLoading = false;
    },
    [types.SAVE_USER_FAIL](state, {}) {
        state.user.isLoading = false;
    },
    //DELETE USER
    [types.DELETE_USER_REQUEST](state, {}) {},
    [types.DELETE_USER_SUCCESS](state, {}) {},
    [types.DELETE_USER_FAIL](state, {}) {},
};

// actions
export const actions = {
    async getUsers({ commit }, payload) {
        try {
            const params = new URLSearchParams();
            params.append("sch_str", payload);
            commit(types.GET_USERS_REQUEST, {});
            const { data } = await axios.get("/users", {
                params: params,
            });
            commit(types.GET_USERS_SUCCESS, { data: data });
        } catch (e) {
            commit(types.GET_USERS_FAIL);
        }
    },
    async getUser({ commit }, payload) {
        try {
            commit(types.GET_USER_REQUEST, {});
            const { data } = await axios.get(`/users/${payload}`);
            commit(types.GET_USER_SUCCESS, { data: data });
            return data;
        } catch (e) {
            commit(types.GET_USER_FAIL);
        }
    },
    async saveUser({ commit }, payload) {
        try {
            commit(types.GET_USER_REQUEST, {});
            if (payload.id) {
                const { data } = await axios.post(
                    `/users/${payload.id}`,
                    payload.data
                );
                commit(types.SAVE_USER_SUCCESS, { data: data });
            } else {
                const { data } = await axios.post(`/users`, payload.data);
                commit(types.SAVE_USER_SUCCESS, { data: data });
            }
        } catch (e) {
            commit(types.SAVE_USER_FAIL);
        }
    },
    async deleteUser({ commit }, payload) {
        try {
            commit(types.DELETE_USER_REQUEST, {});
            await axios.delete(`/users/${payload.id}`);
            commit(types.DELETE_USER_SUCCESS, {});
        } catch (e) {
            commit(types.DELETE_USER_FAIL);
        }
    },
};
