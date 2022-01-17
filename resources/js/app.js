import { createApp } from 'vue';
import axios from 'axios';

import { router } from './router';
import { store } from './store';

import App from './App';

const app = createApp(App);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = '/api';
app.config.globalProperties.$http = axios;

app.use(router);
app.use(store);

app.mount("#app");
