import Vue from "vue";
import Vuex from "vuex";
import { UserState } from "./modules/user";

// install vuex-persist and see if we can get it running individually

Vue.use(Vuex);

export interface RootState {
  user: UserState;
}

export default new Vuex.Store<RootState>({});
