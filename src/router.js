import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Navbar.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/home',
            name: 'dashboard',
            component: () => import('./components/Sidebar.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/neovis',
            name: 'home',
            component: () => import('./components/Neovis.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
          path: '/d3-graph',
          name: 'D3',
          component: () => import('./components/D3.vue'),
          meta: {
              requiresAuth: true
          }
        },
        {
          path: '/ppt',
          name: 'Cy',
          component: () => import('./components/Cy.vue'),
          meta: {
              requiresAuth: true
          },
        },
        {
          path: '/cypher',
          name: 'cypher',
          component: () => import('./components/Cypher.vue'),
          meta: {
              requiresAuth: true
          },
        },
        {
          path: '/sigma',
          name: 'sigma',
          component: () => import('./components/Sigma.vue'),
          meta: {
              requiresAuth: true
          },
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('./components/Dashboard.vue'),
          meta: {
              requiresAuth: true
        },
      }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/register');
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/');
      } else {
        next();
      }
    } else {
      next()
    }
  });
export default router