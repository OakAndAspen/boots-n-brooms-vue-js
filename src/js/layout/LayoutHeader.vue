<template>
    <header id="LayoutHeader">
        <layout-navbar></layout-navbar>
    </header>
</template>

<script>
    import LayoutNavbar from "src/js/layout/LayoutNavbar.vue";

    export default {
        name: "LayoutHeader",
        components: {LayoutNavbar}
    }
</script>

<style scoped>
    #LayoutHeader {
        background-image: url("~src/images/header.jpg");
        background-position: center center;
        background-size: cover;
        height: 400px;
    }
</style>