import Vue from 'vue';
import Router from 'vue-router';
import Favorites from '../pages/favorites/Favorites.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})