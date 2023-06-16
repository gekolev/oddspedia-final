<template>
  <div class="my-teams-comp">
    <!-- TITLE -->
    <div class="title">
      <h2 class="montserrat bold italic headline space">MY TEAMS</h2>
    </div>
    <!-- END :: TITLE -->

    <!-- SHOW IF FOLLOWING TEAMS LIST IS EMPTY -->
    <div class="empty border-8" v-if="!isEveryTeamFollowed">
      <span>You aren't following any teams yet.</span>
    </div>

    <!-- SHOW TEAMS WHICH YOU FOLLOW -->

    <div :key="item.id" v-for="item in teams" class="team">
      <div class="following-team" v-if="item.is_following">
        <div class="circle-bg">
          <IconSymbol name="team" />
        </div>
        <span class="following-team-name">{{ item.name }} </span>

        <!-- <button @click="removeFavouriteTeam(item.id)" class="follow roboto">
          REMOVE
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import IconSymbol from "./IconSymbol.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "MyTeamsComp",
  components: { IconSymbol },
  methods: {
    removeFavouriteTeam(teamId) {
      this.$store.commit("removeFavouriteTeam", teamId);
    },
  },
  computed: {
    ...mapGetters(["isEveryTeamFollowed"]),
    ...mapState(["teams"]),
  },
};
</script>

<style lang="scss" scoped>
.following-team {
  display: flex;
  align-items: center;
  padding: 10px;
  .following-team-name {
    font-weight: 600;
    font-size: 14px;
    margin-left: 10px;
  }
}
.my-teams-comp {
  background-color: $white;
  padding-bottom: 5px;
}
.empty {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  min-height: 90px;
  //   width: 100%;
  background-color: $input-background-color;
  margin: 0 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: $inactive-color;
  }
}
.single-team {
  .single-team-block {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 500;
      margin-left: 10px;
    }
  }
}
</style>
