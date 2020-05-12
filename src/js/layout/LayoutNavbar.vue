<template>
    <nav id="LayoutNavbar">
        <div class="container py-4 text-center">
            <div class="d-flex  justify-content-between flex-column flex-md-row">
                <router-link id="LayoutNavbarLogo" to="/" class="mr-4 mb-4 mb-md-0">
                    <img :src="logo" alt="Boots & Brooms Logo" class="img-fluid">
                    <img :src="brand" alt="Boots & Brooms Brand" class="img-fluid">
                </router-link>
                <ul id="LayoutNavbarMenu1" class="nav align-items-center flex-column flex-md-row">
                    <li class="nav-item" v-for="entry of menu">
                        <router-link class="nav-link" :to="entry.link">{{entry.label}}</router-link>
                    </li>
                </ul>
                <ul id="LayoutNavbarMenu2" class="nav align-items-center flex-column flex-md-row">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">
                            <font-awesome-icon icon="cart-plus" title="Votre panier"/>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/connexion">
                            <font-awesome-icon icon="sign-in-alt" title="Se connecter"/>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/creer-compte">
                            <font-awesome-icon icon="user-plus" title="Créer un compte"/>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link">
                            <span @click="changeLanguage('fr')"
                                  class="pointer" title="Français">
                                FR
                            </span>
                            <span>|</span>
                            <span @click="changeLanguage('en')"
                                  class="pointer" title="English">
                                EN
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import brand from "src/images/brand-200.png";
    import logo from "src/images/logo-200.png";

    export default {
        name: "LayoutNavbar",
        data() {
            return {
                logo: logo,
                brand: brand,
                menu: [
                    {label: "Accueil", link: "/fr/"},
                    {label: "Shop", link: "/fr/shop"},
                    {label: "À propos", link: "/fr/a-propos"},
                    {label: "Contact", link: "/fr/contact"}
                ]
            }
        },
        methods: {
            changeLanguage(lang) {
                this.$i18n.locale = lang;
            }
        }
    }
</script>

<style scoped>
    #LayoutNavbar {
        background-color: rgba(255, 255, 255, 0.8);
    }

    #LayoutNavbar, #LayoutNavbar a {
        color: #444444;
        font-variant: small-caps;
    }

    #LayoutNavbar a:hover {
        text-decoration: underline;
    }

    #LayoutNavbar img {
        max-height: 50px;
    }

    #LayoutNavbar .nav-item {
        height: auto;
    }
</style>