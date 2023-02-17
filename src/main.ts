import { createApp } from "vue";
import App from "./App.vue";
import Components from "./my-components/stack-components";
const app = createApp(App);
Components.forEach((el) => app.component(el.name, el));
app.mount("#app");
