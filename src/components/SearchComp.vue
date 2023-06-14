<template>
  <div class="search-comp">
    <div class="title">
      <h2 class="montserrat bold italic headline">SEARCH TEAMS</h2>
    </div>

    <!-- SEARCH INPUT -->
    <form action="">
      <input
        class="search-field"
        type="text"
        v-model="search"
        placeholder="Search for a team"
        @keydown="handleKeyDown"
      />
      <button type="submit"></button>
    </form>
    <div>
      <div
        v-for="(item, index) in filtered"
        :class="{ team: true, focused: index === focusedIndex }"
        :key="index"
        ref="teamItem"
        :tabindex="index === focusedIndex ? 0 : -1"
        @mouseover="focusedIndex = index"
        @mouseleave="focusedIndex = -1"
      >
        <div class="all-center">
          <div class="circle-bg">
            <IconSymbol name="team" />
          </div>

          <div class="team-info-holder">
            <div class="leagues">
              <span>{{ item.leagues[0] }}</span>
              <span v-if="item.leagues[1]">, {{ item.leagues[1] }}</span>
            </div>
            <div>
              <span class="name" v-html="highlight(item.name) || item.name" />
              <span class="pipe"></span>
              <IconSymbol class="stadium-icon" name="stadium" />
              <span
                class="stadium"
                v-html="highlight(item.stadium) || item.stadium"
              />
            </div>
          </div>
        </div>

        <button
          @click="addFavouriteTeam(item.id)"
          v-if="!item.is_following"
          class="follow roboto"
        >
          FOLLOW
        </button>
        <button
          @click="removeFavouriteTeam(item.id)"
          v-if="item.is_following"
          class="follow roboto"
        >
          FOLLOWING
        </button>
      </div>
    </div>
    <div class="no-teams" v-if="filtered.length == 0 && search.length > 0">
      <IconSymbol name="no-teams-found" />
      <span>No Teams Found</span>
    </div>
  </div>
</template>

<script>
import IconSymbol from "./IconSymbol.vue";
import { mapState } from "vuex";

export default {
  name: "SearchComp",
  props: ["listItems"],
  data() {
    return {
      search: "",
      focusedIndex: -1,
    };
  },
  methods: {
    handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        this.moveFocusUp();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        this.moveFocusDown();
      } else if (event.key === "Enter") {
        event.preventDefault();

        if (
          this.focusedIndex != -1 &&
          !this.filtered[this.focusedIndex].is_following
        )
          this.addFavouriteTeam(this.filtered[this.focusedIndex].id);
        else if (this.focusedIndex != -1)
          this.removeFavouriteTeam(this.filtered[this.focusedIndex].id);
      } else {
        this.focusedIndex = -1;
      }
    },
    moveFocusUp() {
      if (this.focusedIndex > -1) {
        this.focusedIndex--;
      } else {
        this.focusedIndex = this.filtered.length - 1;
      }
    },
    moveFocusDown() {
      if (this.focusedIndex === this.filtered.length - 1) {
        this.focusedIndex = -1;
      } else {
        this.focusedIndex++;
      }
      return;
    },
    highlight(data) {
      if (!this.search) return;
      const pattern = new RegExp(this.search, "i");
      const matched = data.match(pattern);
      const highlightedData = data.replace(
        pattern,
        `<span class="search-match">${
          matched ? matched[0] : this.search
        }</span>`
      );
      return highlightedData;
    },
    addFavouriteTeam(teamId) {
      this.$store.commit("addFavouriteTeam", teamId);
    },
    removeFavouriteTeam(teamId) {
      this.$store.commit("removeFavouriteTeam", teamId);
    },
  },
  computed: {
    filtered() {
      if (!this.search) return [];
      const pattern = new RegExp(this.search, "i");
      return this.$store.state.teams
        .filter((team) => {
          return (
            team.name.match(pattern) ||
            team.stadium.match(pattern) ||
            (team.leagues &&
              team.leagues.some((league) => league.match(pattern)))
          );
        })
        .splice(0, 3);
    },
    ...mapState(["teams"]),
  },
  components: { IconSymbol },
};
</script>

<style lang="scss" scoped>
.search-comp {
  margin: 8px 0px;
  background-color: $white;
}

.search-field {
  width: 95%;
  height: 36px;
  background-color: $input-background-color;
  border-radius: 80px;
  border: none;
  padding-left: 25px;
  //   margin: 0 15px 10px 15px;
}
.team {
  padding: 5px 0px 5px 10px;
  //   padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.team.focused {
  background-color: $input-background-color;
}

.team.focused .circle-bg {
  background-color: $white;
}

.team-info-holder {
  margin-left: 15px;
  .leagues {
    font-size: 11px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    color: $inactive-color;
  }
  .name {
    font-size: 14px;
    font-weight: 600;
    color: $text-color;
  }
  .pipe {
    display: inline-block;
    margin: 0px 5px;
    width: 1px;
    height: 10px;
    background-color: $frame-color;
    // color: black;
    // color: $frame-color;
  }
  .stadium-icon {
    margin-right: 7px;
  }
  .stadium {
    color: $inactive-color;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }
}

.follow {
  background-color: rgb(56, 197, 245);
  color: white;
  padding: 10px;
  border-radius: 80px;
  border: none;
}
.no-teams {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin-top: 15px;
  }
}
</style>
