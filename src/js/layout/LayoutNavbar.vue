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
                            <font-awesome-icon icon="cart-plus"/>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/connexion">
                            Connexion
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/creer-compte">
                            Créer un compte
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <span @click="changeLanguage('fr')" class="pointer">FR</span>
                        <span class="mx-2">|</span>
                        <span @click="changeLanguage('en')" class="pointer">EN</span>
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
                    {label: "Accueil", link: "/"},
                    {label: "Shop", link: "/shop"},
                    {label: "À propos", link: "/a-propos"},
                    {label: "Contact", link: "/contact"}
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