<template>
  <div id="app">
    <HeaderComp />
    <ProfileComp />
    <SearchComp />
    <MyTeamsComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import ProfileComp from "./components/ProfileComp.vue";
import MyTeamsComp from "./components/MyTeamsComp.vue";
import SearchComp from "./components/SearchComp.vue";

export default {
  name: "App",
  components: {
    ProfileComp,
    HeaderComp,
    SearchComp,
    MyTeamsComp,
  },
  mounted() {
    this.$store.dispatch("fetchTeams");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: $frame-color;
  min-height: 100vh;
}
</style>
