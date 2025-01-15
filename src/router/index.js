import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/', name: 'Home', component: () => import('@/App.vue'),
    children: [
      { path: '/login', name: 'Login', component: () => import('@/views/Login.vue') },
      {
        path: 'home', name: 'Home', component: () => import('@/views/Home.vue'),
        children: [
          { path: 'about', name: 'About', component: () => import('@/views/About.vue'), },
          { path: 'account', name: 'Account', component: () => import('@/views/Account.vue') },
          { path: 'setting', name: 'Setting', component: () => import('@/views/Setting.vue') },
          { path: 'information', name: 'Information', component: () => import('@/views/Information.vue') },
          { path: 'order', name: 'Order', component: () => import('@/views/Order.vue') },
          { path: 'collection', name: 'Collection', component: () => import('@/views/Collection.vue') },
          { path: 'aboutOne', name: 'AboutOne', component: () => import('@/views/About/AboutOne.vue') },
          { path: 'aboutTwo', name: 'AboutTwo', component: () => import('@/views/About/AboutTwo.vue') },
          { path: 'aboutThree', name: 'AboutThree', component: () => import('@/views/About/AboutThree.vue') },
          { path: '', redirect: 'about' }
        ]
      },
      { path: '', redirect: '/home' },
    ]
  },

];

const router = new Router({
  routes,
  mode: 'history',
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     next('/login');
//   }
// })
export default router;
