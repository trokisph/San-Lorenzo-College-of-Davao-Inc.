import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/calendar',
    name: 'CalendarPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalendarPage.vue')
  },
  {
    path: '/why-us',
    name: 'WhyUsPage',
    component: () => import(/* webpackChunkName: "why-us" */ '../views/WhyUsPage.vue')
  },
  {
    path: '/our-programs',
    name: 'OurProgramsPage',
    component: () => import(/* webpackChunkName: "our-programs" */ '../views/OurProgramsPage.vue')
  },
  {
    path: '/faculty-and-staff',
    name: 'FacultyStaffPage',
    component: () => import(/* webpackChunkName: "faculty-and-staff" */ '../views/FacultyStaffPage.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUsPage',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/ContactUsPage.vue')
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
