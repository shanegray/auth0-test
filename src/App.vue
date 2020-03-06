<template>
  <v-app>
    <v-app-bar app hide-on-scroll color="primary" dark clipped-left>
      <v-container>
        <v-toolbar-title>Grady's Auth Test</v-toolbar-title>
      </v-container>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
