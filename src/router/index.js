import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue'
import Dates from '/src/views/examples/Dates.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dates',
    Name: 'Dates',
    component: Dates
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router