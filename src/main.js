import { createApp } from 'vue';
import App from './components/App.vue';
import router from './plugins/router.js'; // 引入刚刚创建的路由配置
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router); // 使用路由
app.use(pinia)

app.mount('#app');
