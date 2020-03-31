/* eslint-disable @typescript-eslint/no-explicit-any */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

import { domain, clientId, audience } from "../auth-config.json";
import { Auth0Plugin } from "./auth";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState: any) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

axios.interceptors.request.use(async config => {
  const token = await Vue.prototype.$auth.getTokenSilently();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
