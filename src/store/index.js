import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams: [],
  },
  getters: {
    isEveryTeamFollowed(state) {
      return state.teams.some((item) => item.is_following);
    },
  },
  mutations: {
    addFavouriteTeam(state, teamId) {
      state.teams.find((item) => item.id === teamId).is_following = true;
      console.log(state.teams);
    },
    removeFavouriteTeam(state, teamId) {
      state.teams.find((item) => item.id === teamId).is_following = false;
    },
    setTeams(state, teams) {
      state.teams = teams;
    },
  },
  actions: {
    fetchTeams() {
      fetch("https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28")
        .then((res) => res.json())
        .then((res) => {
          this.commit("setTeams", res);
        });
    },
  },
  modules: {},
});
