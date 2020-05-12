import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "src/css/style.css";
import Vue from "vue";
import {i18n} from "src/js/config/i18n.js";
import {router} from "src/js/config/vue-router.js";
import "src/js/config/font-awesome.js";
import App from "src/js/App.vue";

const app = new Vue({
    el: "#root",
    router,
    i18n,
    render: (h) => h(App)
});