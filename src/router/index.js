import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Login from "../components/Login.vue"
import Details from "../components/Details.vue"
import Cart from "../components/Cart.vue"
import SearchResult from "../components/SearchResult.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    // { path: '/book/:id', component: Details },
    {
      path: '/bookstore/:id',
      name: 'detail',
      component: Details
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    { path: '/book',
     component: SearchResult,
     props: (route) => ({ searchQuery: route.query.q }) }
  ]
})

export default router
