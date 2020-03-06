<template>
  <v-app>
    <v-app-bar app hide-on-scroll color="primary" dark clipped-left>
      <v-container>
        <v-row dense>
          <v-toolbar-title>Grady's Auth Test</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text outlined @click="setAuth">Set Authenticated</v-btn>
          <v-btn text outlined @click="setUnauth">Set Unauthenticated</v-btn>
          <!-- <v-btn text outlined @click="setAdmin">Set Admin</v-btn>
          <v-btn text outlined @click="setViewer">Set Viewer</v-btn>
          <v-btn text outlined @click="setAdminViewer">
            Set Admin & Viewer
          </v-btn> -->
        </v-row>
      </v-container>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/authenticated">Authenticated</v-tab>
          <v-tab to="/admin">Admin</v-tab>
          <v-tab to="/admin-viewer">Admin Viewer</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <span class="subtitle-2">
              Authenticated: {{ isAuthenticated }}
            </span>
          </v-col>
          <v-col>
            <span class="subtitle-2">Roles: {{ roles }} </span>
          </v-col>
        </v-row>

        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import user from "@/store/modules/user";

@Component
export default class extends Vue {
  get isAuthenticated() {
    return user.isAuthenticated;
  }
  get roles() {
    return user.roles;
  }
  setAuth() {
    user.setAuth(true);
  }
  setUnauth() {
    user.setAuth(false);
  }
  // setAdmin() {
  //   this.$store.dispatch("setRoles", ["admin"]);
  // }
  // setViewer() {
  //   this.$store.dispatch("user/setRoles", ["viewer"]);
  // }
  // setAdminViewer() {
  //   this.$store.dispatch("user/setRoles", ["admin", "viewer"]);
  // }
}
</script>
