import { createStore } from 'vuex';

export default createStore({
    state: {
        isFormVisible: false,
    },
    mutations: {
        showForm(state) {
            state.isFormVisible = true;
        },
        hideForm(state) {
            state.isFormVisible = false;
        },
    },
    actions: {
        showForm({ commit }) {
            commit('showForm');
        },
        hideForm({ commit }) {
            commit('hideForm');
        },
    },
    getters: {
        isFormVisible: (state) => state.isFormVisible,
    },
});

