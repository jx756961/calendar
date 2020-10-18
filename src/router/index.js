import { createRouter, createWebHistory } from 'vue-router';
import DayPage from '@/views/Day';

const routes = [
    {
        path: '/',
        name: 'day',
        component: DayPage // 初始化加载页
    },
    {
        path: '/month',
        name: 'month',
        component: () => import( // 路由切换加载 -- 懒加载
            '../views/Month.vue'
            )
    },
    {
        path: '/year',
        name: 'year',
        component: () => import(
            '../views/Year.vue'
            )
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
