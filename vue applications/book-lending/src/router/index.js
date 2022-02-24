import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/add',
    name: 'AddBook',
    component: () => import('../views/AddBook.vue')
  },

  {
    path: '/edit/:id',
    name: 'EditBook',
    component: () => import('../views/EditBook.vue'),
    props : true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
