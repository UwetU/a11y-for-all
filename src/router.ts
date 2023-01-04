import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Introdution',
        component: import('./pages/IntrodutionPage.vue')
    },
    {
        path: '/tutorials',
        name: 'Tutorials',
        component: import('./pages/TutorialsPage.vue')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes
});
