import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home.vue';
import Characters from '@/components/Characters.vue';
import Character from '@/components/Character.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },

  {
    path: '/characters/:id',
    name: 'Character',
    component: Character,
  },
  // {
  //   path: '/random',
  //   name: 'Random',
  //   component: Random,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
