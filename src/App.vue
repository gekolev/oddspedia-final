<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HeaderComp />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <MyTeamsComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import MyTeamsComp from "./components/MyTeamsComp.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HeaderComp,
    MyTeamsComp,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $frame-color;
  min-height: 100vh;
}
</style>
