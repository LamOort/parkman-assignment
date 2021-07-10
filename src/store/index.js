import { createStore, createLogger } from "vuex";
import review from "./modules/review";

export default createStore({
  modules: {
    review,
  },
  plugins: [createLogger()],
});
