<template>
    <div id="RouteAbout" class="text-center">
        <h1>Boots & Brooms</h1>
        <h3 class="text-secondary small-caps">Fournit les aventuriers depuis 1491</h3>
        <div class="row py-4">
            <div class="col-6">
                <h3>Tradition</h3>
                <p>Notre philosophie est basée sur des centaines d'années d'expériences transmises de père en fils.</p>
            </div>
            <div class="col-6">
                <img :src="logo" alt="Boots & Brooms">
            </div>
        </div>
        <div class="row py-4">
            <div class="col-6">
                <img :src="image1" alt="Boots & Brooms">
            </div>
            <div class="col-6">
                <h3>Savoir-faire</h3>
                <p>De la recherche de produits au service après-vente, en passant par la gestion des stocks et le marketing, notre savoir faire n'est plus à démontrer.</p>
            </div>
        </div>
        <div class="row py-4">
            <div class="col-6">
                <h3>Innovation</h3>
                <p>Une entreprise si ancienne pourrait facilement se reposer sur ses lauriers. Pas nous! Nous avons de tous temps su nous adapter à la mode et aux nouvelles technologies.</p>
            </div>
            <div class="col-6">
                <img :src="image2" alt="Boots & Brooms">
            </div>
        </div>
    </div>
</template>

<script>
    import logo from "src/images/logo-1500.png";
    import image1 from "src/images/PageHome.png";
    import image2 from "src/images/PageShop.png";
    export default {
        name: "RouteAbout",
        data() {
            return {
                logo,
                image1,
                image2
            }
        }
    }
</script>