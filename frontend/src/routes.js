import { getJwtToken } from './apis/auth';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import ProfileEdittingPage from './pages/ProfileEdittingPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import SearchPage from './pages/SearchPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/profile/edit',
    name: 'editprofile',
    component: ProfileEdittingPage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/search_result',
    name: 'search_result',
    component: SearchPage,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

router.beforeEach((to) => {
  if (to.name !== 'login' && !getJwtToken()) {
    return { name: 'login' };
  }
  if (to.name === 'login' && getJwtToken()) {
    return { name: 'home' };
  }
});

export { router };
