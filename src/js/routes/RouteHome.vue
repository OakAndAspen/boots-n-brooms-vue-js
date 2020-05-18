<template>
    <div id="RouteHome" class="text-center">

        <h3 class="small-caps py-4">{{$t("pages.home.title")}}</h3>
        <p>{{$t("pages.home.text")}}</p>

        <div class="row py-4">
            <div class="col-12 col-lg-8 mx-auto">
                <div class="row">
                    <div class="col-4" v-for="cat of categories">
                        <font-awesome-icon :icon="['fal', cat.icon]" class="d-block mx-auto display-3 my-4"/>
                        <span class="small-caps">{{cat.label}}</span>
                    </div>
                </div>
            </div>
        </div>

        <p class="my-4">{{$t("pages.home.bottom")}}</p>
        <router-link to="/fr/shop" class="btn btn-info my-4 small-caps">
            {{$t("pages.home.button")}}
        </router-link>

    </div>
</template>

<script>
    export default {
        name: "RouteHome",
        data() {
            return {
                categories: [
                    {label: "Armes", icon: "sword"},
                    {label: "Armure", icon: "helmet-battle"},
                    {label: "Vêtements", icon: "hood-cloak"},
                    {label: "Nourriture & Boissons", icon: "pie"},
                    {label: "Potions", icon: "flask-potion"},
                    {label: "Reliques", icon: "ring"},
                    {label: "Equipement magique", icon: "staff"},
                    {label: "Livres", icon: "books"},
                    {label: "Familiers", icon: "cat"}
                ]
            }
        }
    }
</script>