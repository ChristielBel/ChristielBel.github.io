import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Popup from "@/views/Popup.vue";

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

export default router
