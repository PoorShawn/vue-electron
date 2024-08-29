import { createMemoryHistory, createRouter} from "vue-router";

import HomeView from '../components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
