import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/columnDetail/:id',
        name: 'columnDetail',
        component: () => import('@/views/column/columnDetail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const createAppRoute = (app: any) => {
    console.log(app)
    app.use(router)
}

export default createAppRoute
