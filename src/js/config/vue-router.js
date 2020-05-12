import {i18n} from "src/js/config/i18n.js";
import RouteAbout from "src/js/routes/RouteAbout.vue";
import RouteContact from "src/js/routes/RouteContact.vue";
import RouteHome from "src/js/routes/RouteHome.vue";
import RouteShop from "src/js/routes/RouteShop.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/fr'
    },
    {
        path: '/:lang',
        component: {
            template: '<router-view></router-view>'
        },
        beforeEnter(to, from, next) {
            const lang = to.params.lang;
            if (!["fr", "en"].includes(lang)) return next("fr");
            if (i18n.locale !== lang) i18n.locale = lang;
            return next();
        },
        children: [
            {
                path: '',
                name: 'home',
                component: RouteHome
            },
            {
                path: 'shop',
                name: 'shop',
                component: RouteShop
            },
            {
                path: 'a-propos',
                name: 'about',
                component: RouteAbout
            },
            {
                path: 'contact',
                name: 'contact',
                component: RouteContact
            }
        ]
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});