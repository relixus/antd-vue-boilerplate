//create vue router file
// Path: src\router\index.js

import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { isObjectEmpty } from '@/commons/object_helpers'

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/default/DefaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/HomePage.vue')
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/AboutPage.vue')
            }
        ]
    },
    {
        path: '/auth',
        component: () => import('@/layouts/bare/BareLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/Auth/LoginPage.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
  
    if (to.name !== 'Login' && isObjectEmpty(authStore.getUser)) next({ name: 'Login' })
    else if(to.name === 'Login' && !isObjectEmpty(authStore.getUser)) next({ name: 'Home' })
    else next()
});

export default router