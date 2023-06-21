import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './views/HomeView.vue';
import ArticleView  from './views/ArticleView.vue';
import AboutView  from './views/AboutView.vue';
import router from './router'

const app = createApp(App)

app.use(router)



import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
// Register components globally
app.component('HomeView', HomeView);
app.component('ArticleView', ArticleView);
app.component('AboutView', AboutView);

app.mount('#app')
