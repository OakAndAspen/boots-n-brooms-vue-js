<template>
    <div id="RouteShop">
        <img :src="image" alt="I tried">
        <div class="row">
            <div class="col-4">
                <shop-menu/>
            </div>
            <div class="col-8">
                <div class="row">
                    <div class="col-4" v-for="p of products">
                        <div class="card text-center">
                            <img class="card-img-top" :src="p.image" :alt="p.label">
                            <div class="card-body">
                                <p class="card-text">{{p.label}}</p>
                                <h5 class="card-title">{{p.price}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShopMenu from "src/js/components/ShopMenu.vue";
    import logo from "src/images/logo-200.png";
    import knife from "src/images/icons/Icon3.png";
    import palandro from "src/images/icons/Icon4.png";
    import boots from "src/images/icons/Icon9.png";

    export default {
        name: "RouteShop",
        components: {ShopMenu},
        data() {
            return {
                image: logo,
                products: [
                    {
                        label: "Couteau multi",
                        price: "9.-",
                        image: knife
                    },
                    {
                        label: "Palandro",
                        price: "4.-",
                        image: palandro
                    },
                    {
                        label: "Bottes",
                        price: "29.-",
                        image: boots
                    }
                ]
            }
        }
    }
</script>