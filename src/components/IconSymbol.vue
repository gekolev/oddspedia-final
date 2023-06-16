<template>
  <svg
    v-if="name === 'stadium'"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="12.65"
    viewBox="0 0 14 12.65"
  >
    <path
      id="stadium_1_"
      data-name="stadium (1)"
      d="M30.968,27.978v0c0-1.118-1.306-2.055-3.335-2.565v-.541l1.578-.92a.381.381,0,0,0,0-.661l-1.767-1a.381.381,0,0,0-.569.332v2.626a16.151,16.151,0,0,0-2.9-.25,15.814,15.814,0,0,0-3.193.307v-.433l1.578-.92a.381.381,0,0,0,0-.661l-1.767-1a.381.381,0,0,0-.569.332v2.868c-1.862.524-3.043,1.424-3.044,2.488h0a1.467,1.467,0,0,0,.119.571l1.362,6.041a.381.381,0,0,0,.372.3H29.114a.382.382,0,0,0,.372-.3l1.363-6.042a1.468,1.468,0,0,0,.119-.571Zm-3.335-4.7.621.351-.621.362Zm-6.858,0,.621.351-.621.362Zm3.193,2.485c3.676,0,6.237,1.17,6.237,2.219a.877.877,0,0,1-.21.531c-1-.991-3.26-1.651-6.027-1.651s-5.03.66-6.027,1.651a.877.877,0,0,1-.21-.531C17.731,26.929,20.292,25.76,23.968,25.76Zm5.456,3.248A10.752,10.752,0,0,1,23.968,30.2a10.75,10.75,0,0,1-5.456-1.191c.787-.741,2.811-1.385,5.456-1.385S28.637,28.267,29.424,29.008Zm-4.418,5.119H22.93v-.866a1.038,1.038,0,0,1,2.076,0v.866Zm3.8,0H25.769v-.866a1.8,1.8,0,0,0-3.6,0v.866H19.127l-1-4.451h.017a11.427,11.427,0,0,0,5.828,1.286A11.428,11.428,0,0,0,29.8,29.675h.018Z"
      transform="translate(-16.968 -22.24)"
      fill="#6f8caa"
    />
  </svg>
  <svg
    v-else-if="name === 'team'"
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
    <rect id="team-placeholder" width="28" height="28" fill="url(#pattern)" />
  </svg>
  <svg
    v-else-if="name === 'no-teams-found'"
    xmlns="http://www.w3.org/2000/svg"
    width="144.116"
    height="78.342"
    viewBox="0 0 144.116 78.342"
  >
    <g id="no-results" transform="translate(0)">
      <g id="Group_9707" data-name="Group 9707">
        <path
          id="Path_5391"
          data-name="Path 5391"
          d="M364.114,392.424S381.82,374.455,367.108,355c-13.053-17.261-28.272-16.081-39.438-9.076-4.756,2.983-18.467.368-30.137-17.2-15.915-23.952-71.081-9.425-61.022,27.426,4.868,17.833-14.814,18.481-4.786,36.307Z"
          transform="translate(-228.835 -317)"
          fill="#e1e7ed"
        />
        <path
          id="Path_5392"
          data-name="Path 5392"
          d="M10.5,0H142.482"
          transform="translate(-6.928 77.342)"
          fill="none"
          stroke="#b9c7d6"
          stroke-width="2"
        />
        <g
          id="search_3_"
          data-name="search (3)"
          transform="translate(31.631 4.511)"
        >
          <path
            id="Path_5393"
            data-name="Path 5393"
            d="M306.161,310.062l1.673,1.673,1.956,1.946.754.759,3.9-3.9-4.375-4.382Z"
            transform="translate(-265.456 -265.451)"
            fill="#b9c7d6"
          />
          <path
            id="Path_5394"
            data-name="Path 5394"
            d="M346.829,338.918,360.3,352.383a5.593,5.593,0,1,1-7.909,7.911l-13.465-13.467Z"
            transform="translate(-293.86 -293.86)"
            fill="#b9c7d6"
          />
          <g id="Group_8050" data-name="Group 8050">
            <path
              id="Path_5396"
              data-name="Path 5396"
              d="M331.3,339.221l7.909-7.911-.59-.591a1.959,1.959,0,0,0-2.769,0l-5.143,5.146a1.951,1.951,0,0,0,0,2.764Z"
              transform="translate(-286.245 -286.253)"
              fill="#98acc1"
            />
            <path
              id="Path_5397"
              data-name="Path 5397"
              d="M0,25.285A25.284,25.284,0,1,1,25.285,50.573,25.283,25.283,0,0,1,0,25.285Z"
              transform="translate(0 -0.005)"
              fill="#98acc1"
            />
          </g>
          <path
            id="Path_5398"
            data-name="Path 5398"
            d="M43.129,65.686A22.547,22.547,0,1,0,20.582,43.139,22.547,22.547,0,0,0,43.129,65.686Z"
            transform="translate(-17.845 -17.857)"
            fill="#d0dae4"
          />
          <path
            id="Path_5399"
            data-name="Path 5399"
            d="M54.9,75.646A20.742,20.742,0,1,0,34.156,54.9,20.742,20.742,0,0,0,54.9,75.646Z"
            transform="translate(-29.615 -29.622)"
            fill="#edeff2"
          />
          <path
            id="Path_6426"
            data-name="Path 6426"
            d="M41.484,20.742A20.742,20.742,0,0,0,0,20.742C0,32.2,9.446-4.182,41.484,20.742Z"
            transform="translate(0.157 40.297) rotate(-74.991)"
            fill="#fff"
            opacity="0.66"
          />
        </g>
        <g
          id="Group_9706"
          data-name="Group 9706"
          transform="translate(45.97 22.422)"
          opacity="0.75"
        >
          <g id="Group_9683" data-name="Group 9683">
            <g id="Group_9682" data-name="Group 9682">
              <g
                id="Group_9680"
                data-name="Group 9680"
                transform="translate(0 0.17)"
              >
                <line
                  id="Line_95"
                  data-name="Line 95"
                  x2="5.868"
                  y2="5.732"
                  transform="translate(0 0.068)"
                  fill="none"
                  stroke="#98acc1"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  id="Line_96"
                  data-name="Line 96"
                  y1="5.868"
                  x2="5.732"
                  transform="translate(0.068)"
                  fill="none"
                  stroke="#98acc1"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
              <g
                id="Group_9681"
                data-name="Group 9681"
                transform="translate(15.365)"
              >
                <line
                  id="Line_97"
                  data-name="Line 97"
                  x2="5.868"
                  y2="5.732"
                  transform="translate(0 0.068)"
                  fill="none"
                  stroke="#98acc1"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <line
                  id="Line_98"
                  data-name="Line 98"
                  y1="5.868"
                  x2="5.732"
                  transform="translate(0.068)"
                  fill="none"
                  stroke="#98acc1"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </g>
              <path
                id="Path_6425"
                data-name="Path 6425"
                d="M114.225,224a13.374,13.374,0,0,0-9.962,4.43,1.022,1.022,0,1,0,1.523,1.364,11.373,11.373,0,0,1,16.878,0,1.022,1.022,0,1,0,1.523-1.364A13.376,13.376,0,0,0,114.225,224Z"
                transform="translate(-103.343 -211.296)"
                fill="#98acc1"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  <svg
    v-else-if="name === 'back-arrow'"
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
  <svg
    v-else-if="name === 'notif'"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 28"
  >
    <g id="ACTION">
      <g id="notification">
        <path
          d="m5.33,1.6L4,.2C1.61,2.11.16,4.95,0,8h1.9c.11-2.54,1.37-4.9,3.43-6.4Zm12.77,6.4h1.9c-.12-3.04-1.54-5.88-3.9-7.8l-1.33,1.4c2,1.54,3.22,3.88,3.33,6.4Zm-1.9.5c.06-2.95-1.91-5.55-4.76-6.3v-.7c0-.8-.63-1.47-1.44-1.5-.8.04-1.43.7-1.43,1.5v.7c-2.85.75-4.82,3.35-4.76,6.3v5.5l-1.9,2v1h16.19v-1l-1.9-2v-5.5Zm-6.2,11.5h.38c.64-.11,1.16-.58,1.33-1.2.12-.25.18-.52.19-.8h-3.8c-.02,1.07.83,1.97,1.9,2Z"
          style="fill: #fff"
        />
      </g>
      <g id="NOTIFICATIONS">
        <g id="Ellipse_208-2" data-name="Ellipse 208-2">
          <circle cx="20" cy="19" r="7" style="fill: #45abe0" />
          <path
            d="m20,28c-4.96,0-9-4.04-9-9s4.04-9,9-9,9,4.04,9,9-4.04,9-9,9Zm0-16c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7-3.14-7-7-7Z"
            style="fill: #1e3554"
          />
        </g>
        <g id="_2" data-name=" 2" style="fill: none; isolation: isolate">
          <g style="fill: none; isolation: isolate">
            <path
              d="m18.98,21.9h3.22l-.23,1.1h-5.15l.17-.87,3.3-2.61c.87-.69,1.13-1.11,1.13-1.62,0-.54-.39-.89-1.2-.89-.62,0-1.22.27-1.66.75l-.88-.7c.58-.7,1.58-1.16,2.72-1.16,1.46,0,2.34.76,2.34,1.82,0,.82-.36,1.52-1.58,2.47l-2.18,1.71Z"
              style="fill: #fff"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
  <svg
    v-else-if="name === 'logo-small'"
    xmlns="http://www.w3.org/2000/svg"
    width="32.723"
    height="18.039"
    viewBox="0 0 32.723 18.039"
  >
    <g id="logo" transform="translate(-33.812 -17.324)">
      <path
        id="Path_4877"
        data-name="Path 4877"
        d="M262.406,130.783a8.5,8.5,0,0,0,.709-1.772l2.212-7.727q.753-2.59-.195-3.545-.84-.864-3.612-.864h-5.636a10.333,10.333,0,0,0-2.961.341,4.333,4.333,0,0,0-2.59,2.091,9.441,9.441,0,0,0-.777,1.977l-2.211,7.723h3.325l-9.079,4.231h15.252a10.312,10.312,0,0,0,2.961-.341,4.421,4.421,0,0,0,2.6-2.113Zm-4.359-1.772h-5.636l2.2-7.7h7.545l-2.282,1.309Z"
        transform="translate(-207.778 -97.875)"
        fill="#00b1ff"
        fill-rule="evenodd"
      />
      <path
        id="Path_4879"
        data-name="Path 4879"
        d="M662.386,124.523l5.593-6.545h-3.717Z"
        transform="translate(-601.444 -100.654)"
        fill="#fff"
      />
    </g>
  </svg>

  <svg
    v-else-if="name === 'logo-full'"
    xmlns="http://www.w3.org/2000/svg"
    width="162.307"
    height="18"
    viewBox="0 0 162.307 18"
  >
    <g id="LOGO" transform="translate(-235.59 -116.875)">
      <path
        id="Path_4876"
        data-name="Path 4876"
        d="M455.678,118.549,451,135.952h-5.4l1.865-6.962h-6.006l-1.866,6.962h-5.4l3.512-13.1a5.413,5.413,0,0,1,2.35-3.5,8.754,8.754,0,0,1,4.214-.8Zm-117.5,2.514a7.78,7.78,0,0,1-.315,1.982l-2.2,8.194a6.313,6.313,0,0,1-2.253,3.819,8.269,8.269,0,0,1-4.408.894H317.57l4.675-17.4h11.432a9.21,9.21,0,0,1,2.931.338,2.136,2.136,0,0,1,1.574,2.175Zm-5.716,1.982h-6.031l-2.2,8.194h6.031l2.2-8.194Zm24.511-1.982a2.136,2.136,0,0,0-1.574-2.175,9.207,9.207,0,0,0-2.931-.338H341.04l-4.675,17.4H347.8a8.267,8.267,0,0,0,4.408-.894,6.31,6.31,0,0,0,2.252-3.819l2.2-8.194a7.769,7.769,0,0,0,.315-1.982Zm-5.716,1.982-2.2,8.194h-6.031l2.2-8.194Zm24.1-4.5-1.211,4.5H363.832l-.606,2.272h7.048q3.295,0,3.294,2.368a22.962,22.962,0,0,1-.8,3.554,7.069,7.069,0,0,1-1.986,3.686,6.3,6.3,0,0,1-4,1.027H355.04l1.26-4.713h11.142l.606-2.248H361a4.541,4.541,0,0,1-2.834-.628,1.815,1.815,0,0,1-.533-1.451,25.922,25.922,0,0,1,.872-3.868,6.316,6.316,0,0,1,1.986-3.5,6.5,6.5,0,0,1,3.948-.991ZM393.5,120.99a2.066,2.066,0,0,0-1.259-2.079,6.85,6.85,0,0,0-2.592-.363H377.88l-4.675,17.4h5.4l1.84-6.816h6.976a5.665,5.665,0,0,0,2.81-.628,4.948,4.948,0,0,0,2.325-3.191l.581-2.127a9.132,9.132,0,0,0,.363-2.2Zm-5.74,2.055-.63,2.393h-5.692l.63-2.393Zm22.937-4.5-1.211,4.5h-9.3l-.606,2.272h8.478l-.993,3.674h-8.477l-.606,2.248h9.3l-1.26,4.713H391.25l4.675-17.4Zm17.705,2.514a2.136,2.136,0,0,0-1.574-2.175,9.208,9.208,0,0,0-2.931-.338H412.468l-4.675,17.4h11.432a8.266,8.266,0,0,0,4.408-.894,6.31,6.31,0,0,0,2.253-3.819l2.2-8.194a7.764,7.764,0,0,0,.315-1.982Zm-5.716,1.982-2.2,8.194h-6.031l2.2-8.194Zm26.425-.194h-6.007l-.7,2.659h6.006Z"
        transform="translate(-57.78 -1.134)"
        fill="#fff"
        fill-rule="evenodd"
      />
      <path
        id="Path_4877"
        data-name="Path 4877"
        d="M264.462,132.127a9.31,9.31,0,0,0,.779-1.944l2.431-8.474q.828-2.84-.214-3.887-.923-.947-3.969-.947H257.3a11.375,11.375,0,0,0-3.254.374,4.759,4.759,0,0,0-2.846,2.293,10.342,10.342,0,0,0-.854,2.168l-2.429,8.469h3.654l-9.976,4.64h16.758a11.352,11.352,0,0,0,3.254-.374,4.856,4.856,0,0,0,2.86-2.318Zm-4.79-1.944H253.48l2.417-8.448h8.29l-2.508,1.436Z"
        transform="translate(-6)"
        fill="#00b1ff"
        fill-rule="evenodd"
      />
      <g
        id="Group_6183"
        data-name="Group 6183"
        transform="translate(368.803 117.231)"
      >
        <path
          id="Path_4878"
          data-name="Path 4878"
          d="M655.376,142.933h5.411l4.112-14.213-8.133,9.517Z"
          transform="translate(-655.376 -125.289)"
          fill="#fff"
        />
        <path
          id="Path_4879"
          data-name="Path 4879"
          d="M662.386,127.153l7.841-9.175h-5.21Z"
          transform="translate(-660.124 -117.978)"
          fill="#00b1ff"
        />
      </g>
    </g>
  </svg>

  <svg
    v-else-if="name === 'search'"
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
  >
    <g id="Group_8438" data-name="Group 8438" transform="translate(-30 2)">
      <path
        id="Path_4936"
        data-name="Path 4936"
        d="M18.972,22.869a6.788,6.788,0,1,1,6.788-6.789A6.8,6.8,0,0,1,18.972,22.869Zm0-11.723a4.934,4.934,0,1,0,4.935,4.933A4.938,4.938,0,0,0,18.972,11.146Z"
        transform="translate(17.816 -11.294)"
        fill="#00b1ff"
      />
      <path
        id="Path_4937"
        data-name="Path 4937"
        d="M22.614,20.649a.931.931,0,0,1-.656-.271L17.9,16.316a.927.927,0,1,1,1.311-1.311l4.062,4.062a.926.926,0,0,1-.654,1.581Z"
        transform="translate(23.461 -5.649)"
        fill="#00b1ff"
      />
    </g>
  </svg>
  <svg
    v-else-if="name === 'del'"
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
  >
    <path
      id="close"
      d="M7.1,6.136l4.673-4.673a.777.777,0,0,0-1.1-1.1L6,5.037,1.327.364a.777.777,0,0,0-1.1,1.1L4.9,6.136.228,10.809a.777.777,0,1,0,1.1,1.1L6,7.235l4.673,4.673a.777.777,0,1,0,1.1-1.1Zm0,0"
      transform="translate(0 -0.136)"
      fill="#98acc1"
    />
  </svg>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style lang="scss" scoped></style>
