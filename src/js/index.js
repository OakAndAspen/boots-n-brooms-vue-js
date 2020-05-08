import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "src/css/style.css";
import Vue from "vue/dist/vue";
import App from "src/js/App.vue";

const app = new Vue({
    el: "#root",
    template: "<App/>",
    components: {App}
});