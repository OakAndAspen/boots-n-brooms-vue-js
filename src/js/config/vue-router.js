import {availableLanguages} from "src/js/config/constants.js";
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
            if (!availableLanguages.includes(lang)) return next("fr");
            if (i18n.locale === lang) return next();
            import('src/js/translations/' + lang + '.json').then(messages => {
                i18n.setLocaleMessage(lang, messages.default || messages);
                i18n.locale = lang;
                return next();
            });
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