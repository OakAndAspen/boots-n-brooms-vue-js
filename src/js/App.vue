<template>
    <div class="App">
        <layout-header></layout-header>
        <section class="container py-4">
            <router-view></router-view>
        </section>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
    import LayoutFooter from "src/js/layout/LayoutFooter.vue";
    import LayoutHeader from "src/js/layout/LayoutHeader.vue";
    import LayoutMenu from "src/js/layout/LayoutNavbar.vue";
    import RouteContact from "src/js/routes/RouteContact.vue";
    import RouteHome from "src/js/routes/RouteHome.vue";
    import VueRouter from "vue-router";
    import Vue from "vue/dist/vue";
    import "@fortawesome/fontawesome-free";

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
        components: {LayoutMenu, LayoutFooter, LayoutHeader},
        router
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap');

    * {
        font-family: "Josefin Sans", sans-serif !important;
    }
</style>