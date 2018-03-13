import Vue from 'vue'
import Router from 'vue-router'
import ComingPlay from '../components/comePlay/ComingPlay'
import HottingPlay from '../components/hotPlay/HottingPlay'
import Home from '../components/home/Home'
import Ticket from '../components/ticket/Ticket'

import Login from '../components/header/DetailView'
import Main from '../components/header/Main'
import View from '../components/header/View'
Vue.use(Router)

let router = new Router({
  routes: [
    {path: '/hotPlay', name: 'HottingPlay', component: HottingPlay},
    {path: '/comePlay', name: 'ComingPlay', component: ComingPlay},
    {path: '/home', name: 'Home', component: Home},
    {path: '/ticket', name: 'Ticket', component: Ticket},
    {path: '/login', name: 'Login', component: Login},
    {path: '/main', name: 'Main', component: Main},
    {path: '/view', name: 'View', component: View}
  ],
  linkActiveClass: 'active'
})

router.push('/hotPlay')

export default router
