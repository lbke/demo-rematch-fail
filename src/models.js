import store from "./store";
console.log("store", store);
const models = {
  foobar: {
    name: "foobar",
    state: 1,
    reducers: {
      inc(state) {
        return state + 1;
      }
    },
    effects: {
      test() {
        console.log(
          "here I need store.dispatch to dispatch another model`s action but it is undefined"
        );
      }
    }
  }
};
export default models;
