import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../pages/dashboard';
import coursePage from '../pages/course';
import courseTool from '../components/courseTool';
import gradebook from '../pages/gradebook';
import assignmentGradebook from '../components/assignmentGradebook';
import rosterGradebook from '../components/rosterGradebook';

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
    {
      path: '/gradebook',
      name: 'gradebook',
      component: gradebook,
      children: [
        {
          path: 'assignment',
          name: 'assignmentGradebook',
          component: assignmentGradebook,
        },
        {
          path: 'roster',
          name: 'roster',
          component: rosterGradebook,
        },
      ],
    },
  ],
});
