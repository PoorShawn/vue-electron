import { createRouter, createWebHistory } from 'vue-router';
import RootPage from '../pages/RootPage.vue';
import AboutPage from '../pages/About.vue';
import DefaultPage from "../pages/Default.vue";

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

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
