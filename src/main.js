import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import store from "./store/store.js";

createApp(App).use(store).mount("#app");
