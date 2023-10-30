import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from  '../views/Tabs.vue'
import Inicio from  '../views/Inicio.vue'
import Consolas from  '../views/Consolas.vue'
import Juegos from  '../views/Juegos.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/inicio'
  },
  {
    path: '/tabs/',
    name: 'Tabs',
    component: Tabs,
    children:[
      {
        path: 'inicio',
        name: 'inicio',
        component: Inicio,
      },
      {
        path: 'consolas',
        name: 'consolas',
        component: Consolas,
      },
      {
        path: 'juego/:consola/:id',
        name: 'juego',
        component: Juegos,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
