<template>
  <div id="app">
    <HeaderComp />
    <div class="max-width">
      <ProfileComp />
      <SearchComp />
      <MyTeamsComp />
    </div>
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
  margin: 0 auto;
}
.show-header {
  opacity: 0;
}
@media (min-width: 1280px) {
  .max-width {
    overflow: hidden;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 600px;
    border-radius: 8px;
  }
  .show-header {
    opacity: 1;
  }
}
</style>
