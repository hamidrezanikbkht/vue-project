import { createRouter, createWebHistory } from 'vue-router'
import maincourses from '@/views/maincourses.vue'
import sidedishes from '@/views/sidedishes.vue'
import drinks from '@/views/drinks.vue'
import other from '@/views/other.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/maincourses', component: maincourses },
    { path: '/sidedishes', component: sidedishes },
    { path: '/drinks', component: drinks },
    { path: '/other', component: other }
  
  ],
})

export default router
