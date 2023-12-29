import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          name: 'business',
          component: import('@/pages/business.vue')
        }
      ]
    }
  ]
})

export default router
