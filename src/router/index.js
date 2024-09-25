import { createRouter, createWebHistory } from 'vue-router'
import Authors from '../components/Authors.vue'
import Books from '../components/Books.vue'
import Publishers from '../components/Publishers.vue'

const routes = [
  { path: '/authors', component: Authors },
  { path: '/books', component: Books },
  { path: '/publishers', component: Publishers }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
