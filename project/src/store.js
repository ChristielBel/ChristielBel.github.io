import { createStore } from 'vuex';

export default createStore({
    state: {
        isFormVisible: false,
        isButtonBlocked: false,
    },
    mutations: {
        showForm(state) {
            state.isFormVisible = true;
        },
        hideForm(state) {
            state.isFormVisible = false;
        },
        blockButton(state) {
            state.isButtonBlocked = true;
        },
        unblockButton(state) {
            state.isButtonBlocked = false;
        },
    },
    actions: {
        showForm({ commit }) {
            commit('showForm');
        },
        hideForm({ commit }) {
            commit('hideForm');
        },
        blockButton({ commit }) {
            commit('showForm');
        },
        unblockButton({ commit }) {
            commit('hideForm');
        },
    },
    getters: {
        isFormVisible: (state) => state.isFormVisible,
        isButtonBlocked: (state) => state.isButtonBlocked,
    },
});

