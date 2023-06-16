<template>
  <div class="header-holder">
    <div class="header">
      <div class="">
        <IconSymbol name="back-arrow" />
        <IconSymbol class="logo-full" name="logo-full" />
      </div>
      <div class="relative">
        <IconSymbol class="notif" name="notif" />
      </div>
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
.header-holder {
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
}
.header {
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
</style>
