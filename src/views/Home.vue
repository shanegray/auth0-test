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
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import axios from "axios";

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
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      console.log("token :", token);

      // // Use Axios to make a call to the API
      // const { data } = await axios.get("/api/private-scoped", {
      //   headers: {
      //     Authorization: `Bearer ${token}` // send the access token through the 'Authorization' header
      //   }
      // });

      // console.log("data :", data);
    }
  }
};
</script>
