import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ArticleView from '../views/ArticleView.vue';
import About from '../components/About.vue';
import GospelPlaylists from '../views/GospelPlaylists.vue';
import BibleEvidence from '../views/BibleEvidence.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    
    {
      path: '/bible-evidence',
      name: 'bible-evidence',
      component: BibleEvidence
    },{
      path: '/gospel-playlists',
      name: 'gospel',
      component: GospelPlaylists
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/About',
      name: 'about',
      component: About
    }
  ]
})

export default router
