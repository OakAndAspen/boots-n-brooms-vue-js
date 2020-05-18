<template>
    <div id="RouteShop">
        <div class="row">
            <div class="col-4">
                <shop-menu/>
            </div>
            <div class="col-8">

            </div>
        </div>
    </div>
</template>

<script>
    import ShopMenu from "src/js/components/ShopMenu.vue";
    export default {
        name: "RouteShop",
        components: {ShopMenu}
    }
</script>