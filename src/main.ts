import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import MdButton from "vue-material/src/components/MdButton/MdButton.vue";
import "modern-css-reset/dist/reset.min.css";
import "vue-material/dist/vue-material.min.css";
import "./styles.scss";

createApp(App).use(store).use(router).mount("#app");
