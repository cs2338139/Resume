import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import './style.css'
import App from './App.vue'

const routes = [
    { path: '/', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App)
app.use(router);

app.mount('#app')
// createApp(App).mount('#app')
