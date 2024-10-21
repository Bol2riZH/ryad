import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;
library.add(fab);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
});
