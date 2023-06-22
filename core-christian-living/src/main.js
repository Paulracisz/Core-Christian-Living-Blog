import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './views/HomeView.vue';
import ArticleView  from './views/ArticleView.vue';
import AboutView  from './views/AboutView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import router from './router'

createApp(App)
  .use(router)
  .mount('#app');

// Register components globally
App.component('HomeView', HomeView);
App.component('ArticleView', ArticleView);
App.component('AboutView', AboutView);


