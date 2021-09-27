import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio'
import ClubeLista from '../views/ClubeLista'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/classificacao',
    name: 'Classificação',
    component: ClubeLista
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
