<template>
    <div id="RouteContact">
        <div class="row">

            <div class="col-md-6 text-center">
                <h2 class="mb-4">Où nous trouver</h2>

                <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                        <h5 class="card-title">Boots & Brooms</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <p>Venez nous retrouver dans notre boutique dans la vieille ville de Mahr Tigny! N'hésitez pas à
                                nous contacter par email, téléphone ou via notre formulaire de contact.</p>
                        </li>
                        <li class="list-group-item">
                            Rue des Chaudrons Brûlants 13<br/>
                            1920 Mahr Tigny<br/>
                            Suisse<br/>
                        </li>
                        <li class="list-group-item">
                            <span class="text-info">contact@bootsnbrooms.ch</span><br/>
                            079 666 13 13
                        </li>
                    </ul>
                </div>

            </div>

            <div class="col-md-6">
                <h2 class="mb-4 text-center">Contactez-nous!</h2>
                <input type="text" class="form-control mb-4" placeholder="Votre adresse email"/>
                <input type="text" class="form-control mb-4" placeholder="Votre nom"/>
                <textarea type="text" class="form-control mb-4" placeholder="Votre message"/>
                <button class="btn btn-info w-100">
                    <font-awesome-icon icon="paper-plane"/>
                    <span class="ml-2">Envoyer</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "RouteContact"
    }
</script>