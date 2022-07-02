import Vue from 'vue';
import VueRouter from 'vue-router'
import Error from '../Error';
Vue.use(VueRouter);

let allRoutes = [
    {path: '/', redirect: { name: 'index' }},
    {path: '/home', redirect: { name: 'index' }},
    {path: '*', name: 'error', component: Error},
];
import homeRouter from './home';
allRoutes = allRoutes.concat(homeRouter);

const router = new VueRouter({
    mode: 'history',
    // base: '/home',
    scrollBehavior(to, from, savedPosition) {
        //这里只有在mode=history模式下才有用，多好的功能，我们用不上
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: allRoutes
});

export default router;