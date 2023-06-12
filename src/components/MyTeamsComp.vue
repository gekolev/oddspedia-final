<template>
  <div>
    <div class="">
      <h2 class="montserrat bold italic headline space">MY TEAMS</h2>
    </div>

    <!-- SHOW IF FOLLOWING TEAMS LIST IS EMPTY -->
    <div class="empty border-8">
      <span>You aren't following any teams yet.</span>
    </div>

    <!-- SHOW TEAMS WHICH YOU FOLLOW -->

    <div class="single-team">
      <div>
        <div class="circle-bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <defs>
              <pattern
                id="pattern"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                viewBox="0 0 90 90"
              >
                <image
                  width="90"
                  height="90"
                  xlink:href="data:image/png;base64,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"
                />
              </pattern>
            </defs>
            <rect
              id="team-placeholder"
              width="28"
              height="28"
              fill="url(#pattern)"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTeamsComp",
};
</script>

<style lang="scss" scoped>
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
</style>
