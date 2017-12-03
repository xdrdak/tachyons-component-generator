import Vue from 'vue';
import Router from 'vue-router';
import componentRoutes from '@/router/components-routes-map';
import Explore from '@/components/Explore';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Explore',
      component: Explore,
    },
    ...componentRoutes,
  ],
});
