import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Popup from "@/views/Popup.vue";
import store from "@/store.js";

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/form',
                component: Popup,
                name: 'form',
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    if (from.path === '/form') {
        store.commit('hideForm');
    }
    next();
});

export default router
