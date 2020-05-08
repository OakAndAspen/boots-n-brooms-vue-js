<template>
    <div>
        <h1>Hello App!</h1>
        <p>
            <router-link to="/"> -> Home</router-link>
            <router-link to="/contact"> -> Contact</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    import RouteContact from "src/js/routes/RouteContact.vue";
    import RouteHome from "src/js/routes/RouteHome.vue";
    import VueRouter from "vue-router";
    import Vue from "vue/dist/vue";

    Vue.use(VueRouter);

    const routes = [
        {path: '/', component: RouteHome},
        {path: '/contact', component: RouteContact}
    ];

    const router = new VueRouter({
        routes,
        mode: 'history'
    });

    export default {
        name: "App",
        router
    };
</script>

<style scoped>
    h1 {
        color: cornflowerblue;
    }
</style>