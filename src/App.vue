<template>
  <div id="app">
    <HeaderComp />
    <SearchComp :listItems="listItems" @add-team="addTeam" />
    <MyTeamsComp :listItems="listItems" @remove-team="removeTeam" />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import MyTeamsComp from "./components/MyTeamsComp.vue";
import SearchComp from "./components/SearchComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    SearchComp,
    MyTeamsComp,
  },
  data() {
    return {
      listItems: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch(
        "https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28"
      );
      const finalRes = await res.json();
      this.listItems = finalRes;
    },
    addTeam(teamId) {
      this.listItems.find((item) => item.id === teamId).is_following = true;
      console.log(this.listItems);
    },
    removeTeam(teamId) {
      this.listItems.find((item) => item.id === teamId).is_following = false;
    },
  },
  mounted() {
    this.getData();
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
