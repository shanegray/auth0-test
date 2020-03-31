<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>

      <div v-if="$auth.isAuthenticated">
        <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
      </div>

      <div class="mt-4">
        <v-btn @click="something">Click Me</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    async something() {
      // // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();
      // const claims = await this.$auth.getIdTokenClaims();
      // const parsed = this.parseJwt(token);

      console.log("token :", token);
      // console.log("parsed :", parsed);

      const user = await this.$auth.getIdTokenClaims();
      console.log("id claims :", user);

      // try {
      //   const response = await axios.get("/api/orders");
      //   console.log("response :", response);
      // } catch (e) {
      //   console.error(e);
      // }

      // // Use Axios to make a call to the API
      // const { data } = await axios.get("/api/private-scoped", {
      //   headers: {
      //     Authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
      //   }
      // });

      // console.log("data :", data);
    },
    parseJwt(token) {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    }
  }
};
</script>
