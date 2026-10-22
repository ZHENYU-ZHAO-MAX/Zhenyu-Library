import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import AddBookView from '../views/AddBookView.vue'
import BookListView from '../views/BookList.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from "@/views/WeatherView.vue";
import CountBookAPI from "@/views/CountBookAPI.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
  path: '/dashboard',
  component: DashboardView
},
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView,
  },
  {
    path: '/denied',
    name: 'denied',
    component: AccessDeniedView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
  path:'/addbook',
  component:AddBookView
},
{
  path:'/books',
  component: BookListView
},
{
    path: '/bookcount',
    name: 'bookcount',
    component: GetBookCountView
},
{
    path: "/WeatherCheck",
    name: "GetWeather",
    component: WeatherView
},
{
    path: "/CountBookAPI",
    name: "CountBookAPI",
    component: CountBookAPI
}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (
    to.meta.requiresAuth &&
    !isAuthenticated
  ) {next('/login')
  } else {next()
  }
})