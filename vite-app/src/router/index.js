import { createRouter, createWebHistory } from "vue-router"
import Home from "/src/views/Home.vue"
import Contato from "/src/views/Contato.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;