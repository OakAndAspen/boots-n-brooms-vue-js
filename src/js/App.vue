<template>
    <div class="App">
        <layout-header></layout-header>
        <section class="container py-4">
            <!--<p>Hello: {{ $t("hello") }}</p>-->
            <p>Hello: {{ $t("hello") }}</p>
            <router-view></router-view>
        </section>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
    import LayoutFooter from "src/js/layout/LayoutFooter.vue";
    import LayoutHeader from "src/js/layout/LayoutHeader.vue";
    import LayoutMenu from "src/js/layout/LayoutNavbar.vue";

    export default {
        name: "App",
        components: {LayoutMenu, LayoutFooter, LayoutHeader}
    };
</script>