import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation
} from "vuex-module-decorators";
import store from "@/store";

export interface UserState {
  isAuthenticated: boolean;
  roles: string[];
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements UserState {
  isAuthenticated = true;
  roles: string[] = [];

  @Mutation
  SET_AUTH(auth: boolean) {
    this.isAuthenticated = auth;
  }

  @Action
  setAuth(auth: boolean) {
    this.SET_AUTH(auth);
  }
}

export default getModule(User);
