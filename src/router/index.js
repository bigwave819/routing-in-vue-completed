import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView  from '../views/AboutView.vue'
import jobs from "../views/jobs/jobs.vue"
import notFound from "../views/notFound.vue"
import jobDetail from "../views/jobs/jobDetails.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetail',
    component: jobDetail,
    props: true
  },
  {
    path: '/:catchAll()',
    name: 'notFound',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
