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
      />
      <button type="submit"></button>
    </form>
    <div>
      <div :key="item.id" v-for="item in filtered" class="team">
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

        <button @click="$emit('add-team', item.id)" class="follow roboto">
          FOLLOW
        </button>
      </div>
    </div>
    <div class="no-teams">
      <IconSymbol name="no-teams-found" />
      <span>No Teams Found</span>
    </div>
  </div>
</template>

<script>
import IconSymbol from "./IconSymbol.vue";

export default {
  name: "SearchComp",
  props: ["listItems"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
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
  },
  computed: {
    filtered() {
      if (!this.search) return [];
      const pattern = new RegExp(this.search, "i");
      return this.listItems
        .filter((post) => {
          return post.name.match(pattern) || post.stadium.match(pattern);
        })
        .splice(0, 3);
    },
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
  &:hover {
    background-color: $input-background-color;
    .circle-bg {
      background-color: $white;
    }
  }
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
