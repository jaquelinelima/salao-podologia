import { createRouter, createWebHistory } from "vue-router"
import Home from "/src/views/Home.vue"
import Contato from "/src/views/Contato.vue"
import About from "/src/views/About.vue"
import Tratamentos from "/src/views/Tratamentos.vue"

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
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: () => import('../views/Error.vue'),
  },
  {
    path: '/tratamentos',
    name: 'Tratamentos',
    component: Tratamentos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;