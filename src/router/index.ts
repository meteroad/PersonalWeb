import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue'),
    },
    {
      path: '/mir',
      name: 'mir',
      component: () => import('../views/MirView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/MusicView.vue'),
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('../views/PhotosView.vue'),
    },
    {
      path: '/visual',
      name: 'visual',
      component: () => import('../views/VisualView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/poems',
      name: 'poems',
      component: () => import('../views/PoemsView.vue'),
    },
    {
      path: '/poems/:id',
      name: 'poem-detail',
      component: () => import('../views/PoemDetailView.vue'),
    },
    {
      path: '/essays',
      name: 'essays',
      component: () => import('../views/EssaysView.vue'),
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue'),
    },
  ],
})

export default router
