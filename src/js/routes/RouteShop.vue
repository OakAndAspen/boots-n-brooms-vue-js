<template>
    <div id="RouteShop">
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
    import knife from "src/images/products/knife.png";
    import palandro from "src/images/products/palandro.png";
    import boots from "src/images/products/boots.png";

    export default {
        name: "RouteShop",
        components: {ShopMenu},
        data() {
            return {
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