import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "src/js/translations/en.json";
import fr from "src/js/translations/fr.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: "fr",
    fallbackLocale: "fr",
    messages: {en, fr}
});