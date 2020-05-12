import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faBars, faCartPlus, faPaperPlane, faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars, faCartPlus, faSignInAlt, faUserPlus, faPaperPlane);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;