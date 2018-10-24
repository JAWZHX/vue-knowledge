import Vue from 'vue';
import App from './App.vue';

import './src/assets/logo.png';

// 创建挂在的元素
const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root);