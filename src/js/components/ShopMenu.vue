<template>
    <div id="ShopMenu">
        <ul class="nav flex-column">
            <li class="nav-item" v-for="spe of specials">
                <a class="nav-link active" href="#">
                            <span style="width: 25px" class="text-center d-inline-block">
                                <font-awesome-icon :icon="['fal', spe.icon]"/>
                            </span>
                    <span>{{spe.label}}</span>
                </a>
            </li>
            <li class="dropdown-divider mr-4"/>
            <li class="nav-item" v-for="cat of categories">
                <a class="nav-link active" href="#">
                            <span style="width: 25px" class="text-center d-inline-block">
                                <font-awesome-icon :icon="['fal', cat.icon]"/>
                            </span>
                    <span>{{cat.label}}</span>
                </a>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "ShopMenu",
        data() {
            return {
                specials: [
                    {label: "En vedette", icon: "star"},
                    {label: "En action", icon: "percentage"}
                ],
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

<style scoped>

    #ShopMenu {
        border-right: 1px solid #AAAAAA;
    }

    #ShopMenu a {
        color: #444444;
    }

    #ShopMenu a:hover {
        color: #000000;
    }

    #ShopMenu .dropdown-divider {
        border-top-color: #AAAAAA;
    }

</style>