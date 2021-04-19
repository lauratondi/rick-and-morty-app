import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Random from '@/views/Random.vue';
import Characters from '@/views/Characters.vue';
import CharacterPage from '@/views/CharacterPage.vue';
import Locations from '@/views/Locations.vue';
import LocationPage from '@/views/LocationPage.vue';

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
    name: 'CharacterPage',
    component: CharacterPage,
  },

  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
  {
    path: '/locations/:id',
    name: 'LocationPage',
    component: LocationPage,
  },
  {
    path: '/random',
    name: 'Random',
    component: Random,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
