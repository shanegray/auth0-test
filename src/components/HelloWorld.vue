<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Name: {{ user }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import User from "@/store/modules/user";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  get user() {
    return User.name;
  }
}
</script>
