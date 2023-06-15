<template>
  <div class="header">
    <div class="">
      <IconSymbol name="back-arrow" />
      <!-- <IconSymbol class="logo" name="logo-small" /> -->
      <IconSymbol class="logo-full" name="logo-full" />
    </div>
    <!-- <div>
      <h1>Richy Rich</h1>
    </div> -->
    <div class="relative">
      <IconSymbol class="" name="notif" />
    </div>
  </div>
</template>

<script>
import IconSymbol from "./IconSymbol.vue";

export default {
  name: "HeaderComp",
  props: {
    msg: String,
  },
  components: { IconSymbol },
};
</script>

<style lang="scss" scoped>
.header {
  opacity: 0;
  background-color: $header-color;
  min-height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  .logo-full {
    margin-left: 15px;
  }
}
.back-arrow {
  // background-color: blue;
  //needs to be able to use the header-color variable ://
}
</style>
