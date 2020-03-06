import { VuexModule, Module, getModule } from "vuex-module-decorators";
import { make } from "vuex-pathify";
import store from "@/store";

// TODO : this will be removed if auth0 works fine
export interface UserState {
  name: string;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements UserState {
  public name = "shane gray";
}

User.mutations = {
  ...make.mutations(User.state),
  ...User.mutations
};

export default getModule(User);
