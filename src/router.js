import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]
})

export default router