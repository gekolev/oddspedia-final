<template>
  <div class="profile-comp">
    <div class="profile-comp-bar">
      <div class="">
        <IconSymbol name="back-arrow" />
        <IconSymbol class="logo-small" name="logo-small" />
      </div>
      <div>
        <h1 class="profile-name">RichyRich</h1>
      </div>
      <div>
        <IconSymbol class="notif" name="notif" />
      </div>
    </div>
    <div class="profile-pic">
      <div class="profile-pic-block">
        <div>
          <div>
            <img class="circle-image" src="https://i.imgur.com/WnWvX2N.jpg" />
          </div>
          <div>
            <div class="level">Level 5</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="items-holder active">
        <div class="items">MY TEAMS</div>
        <div class="blue-underline"></div>
      </div>
      <div class="items-holder inactive">
        <div class="items">ABOUT</div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSymbol from "./IconSymbol.vue";

export default {
  name: "ProfileComp",
  components: { IconSymbol },
};
</script>

<style lang="scss" scoped>
.notif {
  position: relative;
  top: 3px;
  width: 27px;
  height: 26px;
}
.profile-comp-bar {
  padding: 0px 15px;
  display: flex;
  background-color: $header-color;
  justify-content: space-between;
  align-items: center;
}
.tabs {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: $profile-color;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
  .items-holder {
    margin: 0px 13px;
    .items {
      font-size: 11px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
  }
}
.active {
  position: relative;
  color: $white;
}
.blue-underline {
  background-color: $machted-text-color;
  border-radius: 100px;
  width: 120%;
  height: 6px;
  position: absolute;
  bottom: -16px;
  left: -6px;
}
.inactive {
  color: #6f8caa;
}
.circle-image {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.logo-small {
  margin-left: 10px;
}

.profile-name {
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  color: $white;
}
.profile-pic-block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 150px;
  background-color: $profile-color;
}
.level {
  text-align: center;
  padding: 3px;
  color: $white;
  font-size: 10px;
  border-radius: 40px;
  background-color: #1d3451;
}
</style>
