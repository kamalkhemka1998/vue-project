<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <counter />
  <div class="buttons">
    <button @click="$store.dispatch('decreaseCounter')">-</button>
    <button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
  <div>
    <input v-model="colorCode" placeholder="Enter color code" type="text" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
  components: {
    counter: require("@/components/Counter.vue").default,
  },
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },

  // methods: {
  //   increaseCounter() {
  //     this.counter++;
  //   },
  //   decreaseCounter() {
  //     this.counter--;
  //   },
  // },

  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
