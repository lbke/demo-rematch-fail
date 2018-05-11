import { init } from "@rematch/core";
import selectorsPlugin from "@rematch/select";
import models from "./models";

const select = selectorsPlugin();

const store = init({
  models,
  plugins: [select]
});

export default store;
