/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faLocationDot,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

library.add([
  faMagnifyingGlass,
  faAngleDown,
  faAngleUp,
  faLocationDot,
  faBuilding,
]);

import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import store from "@/store";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
