// Vue
import App from "./App.vue";
import { createApp } from "vue";

// Tailwind
import "./assets/main.css";
// Stores
import store from "@/store/notebookStore";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
	components,
	directives,
});
const app = createApp(App);
app.use(vuetify);
app.use(store);
app.mount("#app");
