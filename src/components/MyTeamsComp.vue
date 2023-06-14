<template>
  <div class="my-teams-comp">
    <div class="title">
      <h2 class="montserrat bold italic headline space">MY TEAMS</h2>
    </div>

    <!-- SHOW IF FOLLOWING TEAMS LIST IS EMPTY -->
    <div class="empty border-8">
      <span>You aren't following any teams yet.</span>
    </div>

    <!-- SHOW TEAMS WHICH YOU FOLLOW -->

    <div :key="item.id" v-for="item in listItems" class="team">
      <div class="following-team" v-if="item.is_following">
        <div class="circle-bg">
          <IconSymbol name="team" />
        </div>
        <span class="leagues">{{ item.name }} </span>

        <button @click="$emit('remove-team', item.id)" class="follow roboto">
          REMOVE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconSymbol from "./IconSymbol.vue";

export default {
  name: "MyTeamsComp",
  props: ["listItems"],
  components: { IconSymbol },
};
</script>

<style lang="scss" scoped>
.following-team {
  display: flex;
  align-items: center;
}
.my-teams-comp {
  background-color: $white;
}
.empty {
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
