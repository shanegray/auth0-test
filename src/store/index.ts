import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { UserState } from "./modules/user";

// install vuex-persist and see if we can get it running individually

Vue.use(Vuex);

export interface RootState {
  user: UserState;
}

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage
});

export default new Vuex.Store<RootState>({
  plugins: [vuexLocal.plugin]
});
