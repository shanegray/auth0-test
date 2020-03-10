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

@Module({
  dynamic: true,
  store,
  name: "user",
  preserveState: true
})
class User extends VuexModule implements UserState {
  isAuthenticated = true;
  roles: string[] = [];

  @Mutation
  SET_AUTH(auth: boolean) {
    this.isAuthenticated = auth;
  }

  @Mutation
  SET_ROLES(roles: string[]) {
    this.roles = roles;
  }

  @Action
  setAuth(auth: boolean) {
    this.SET_AUTH(auth);
  }

  @Action
  setRoles(roles: string[]) {
    this.SET_ROLES(roles);
  }
}

export default getModule(User);
