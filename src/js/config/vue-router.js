import Vue from "vue";
import VueRouter from "vue-router";
import RouteContact from "src/js/routes/RouteContact.vue";
import RouteHome from "src/js/routes/RouteHome.vue";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: RouteHome},
    {path: '/contact', component: RouteContact}
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});