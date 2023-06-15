import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ArticleView from '../views/ArticleView.vue';
import About from '../components/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/Core-Christian-Living-Blog/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Core-Christian-Living-Blog/article/:id',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/Core-Christian-Living-Blog/About',
      name: 'about',
      component: About
    }
  ]
})

export default router
