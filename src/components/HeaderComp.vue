<template>
  <div>
    <div class="back-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.121"
        height="16"
        viewBox="0 0 9.121 16"
      >
        <path
          id="arrow-left"
          d="M7.207,105.931l-6.88-6.88a1.12,1.12,0,0,1,1.584-1.585L8,103.554l6.087-6.087a1.12,1.12,0,0,1,1.585,1.585l-6.88,6.88a1.12,1.12,0,0,1-1.584,0Z"
          transform="translate(106.259 0.001) rotate(90)"
          fill="#fff"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.back-arrow {
  background-color: blue;
  // background-color: $header-color;
  //needs to be able to use the header-color variable ://
}
</style>
