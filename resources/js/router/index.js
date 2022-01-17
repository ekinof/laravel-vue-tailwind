import { createRouter, createWebHashHistory } from 'vue-router';

import App from '../App';
import Home from '../components/Home';

const routes = [
    { path: '/', component: App },
    { path: '/home', component: Home },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
