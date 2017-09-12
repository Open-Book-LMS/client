import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../pages/dashboard';
import coursePage from '../pages/course';
import courseTool from '../components/courseTool';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'SplashPage',
    //   component: SplashPage,
    // },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/course/:courseId',
      name: 'coursePage',
      component: coursePage,
      children: [
        {
          path: 'content/:assignId',
          name: 'courseTool',
          component: courseTool,
        },
      ],
    },
  ],
});
