import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      counter: 0,
      colorCode: "blue",
    };
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      // state.counter++;
      // console.log("randomNumber: ", randomNumber);
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      // console.log("increaseCounter (action)");
      // Api call using axios
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
        // console.log("response: ", response);
      });
    },
    decreaseCounter({ commit }) {
      // console.log("increaseCounter (action)");
      // Api call using axios
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("decreaseCounter", response.data);
        // console.log("response: ", response);
      });
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  //ansynchronous code in ACTIONS i.e. using API's here
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});

export default store;
