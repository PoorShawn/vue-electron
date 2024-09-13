import { createRouter, createWebHistory } from 'vue-router';
import RootPage from '../pages/RootPage.vue';
import AboutPage from '../pages/About.vue';
import DefaultPage from "../pages/Default.vue";

import HomePage from '../pages/home/MainPage.vue';

const routes = [
    {
        path: '/',
        name: 'RootPage',
        component: RootPage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/default',
        name: 'Default',
        component: DefaultPage,

    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
