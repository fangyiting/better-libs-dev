<template>
  <div>
    <!--<div class="container">-->
      <!--<svg width="500" height="200" viewBox="0 0 500 200">-->
        <!--&lt;!&ndash;-->
          <!--[2, -1, 50] => 2*_x+(-1)*_y+50 = x-->
          <!--[1, 2, 0] => 1*_x+2*_y+0 = y-->


          <!--顶点坐标-->
          <!--[0, 0] => [50, 0]-->
          <!--[100, 0]  => [250, 100]-->
          <!--[100, 50] => [200, 200]-->
          <!--[0, 50] => [0, 100]-->
          <!--transform="matrix(2 1 -1 2 50 0)"-->
        <!--&ndash;&gt;-->
        <!--<rect-->
          <!--class="rect"-->
          <!--x="5"-->
          <!--y="5"-->
          <!--width="100"-->
          <!--height="50"-->
          <!--fill="none"-->
          <!--stroke="blue"-->
          <!--stroke-width="5"-->
          <!--&gt;</rect>-->
      <!--</svg>-->
    <!--</div>-->
    <!--<div class="container">-->
      <!--<svg width="440" height="440" viewBox="0 0 440 440">-->
        <!--<circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="transparent"></circle>-->
        <!--&lt;!&ndash;2*3.1415926*200 = 1257&ndash;&gt;-->
        <!--<circle class="circle" cx="220" cy="220" r="200" stroke="#00a5e0" stroke-width="20" fill="none"-->
          <!--transform="matrix(0 -1 1 0 0 440)"-->
        <!--&gt;</circle>-->
      <!--</svg>-->
    <!--</div>-->
    <div class="container">
      <svg viewBox="0 0 1024 1024" width="200" height="200">
        <path class="logo" d="M227.264 149.333333c2.261333 0.042667 4.181333 0.213333 6.101333 0.597334l2.986667 0.725333 3.968 0.938667c23.893333 6.186667 70.186667 26.645333 97.792 45.653333a363.754667 363.754667 0 0 1 173.653333-44.458667c200.106667 0 362.901333 161.92 362.901334 360.96C874.666667 712.746667 711.872 874.666667 511.786667 874.666667c-37.994667 0-74.453333-5.674667-108.586667-16.256a213.802667 213.802667 0 0 0 41.770667-55.296c21.546667 4.949333 43.968 7.552 67.029333 7.552 164.949333 0 298.666667-133.717333 298.666667-298.666667s-133.717333-298.666667-298.666667-298.666667c-66.410667 0-127.786667 21.674667-177.344 58.304-9.344-6.677333-18.773333-13.098667-28.266667-19.285333-11.84-7.68-20.906667-13.077333-27.2-16.192 2.197333 12.714667 3.285333 23.189333 3.285334 31.445333 0 7.701333-0.96 25.301333-2.858667 52.757334l-0.298667 4.373333a297.28 297.28 0 0 0-65.493333 170.133333 211.2 211.2 0 0 0-64.256 24.213334c-0.149333-4.693333-0.234667-9.386667-0.234667-14.144 0-15.146667 7.530667-82.026667 14.186667-100.778667 1.813333-8.661333 12.565333-51.413333 53.717333-103.509333 1.493333-20.202667 3.626667-71.786667-14.208-108.672a33.984 33.984 0 0 1-2.453333-9.813334l-0.256-3.072-0.298667-2.666666a25.344 25.344 0 0 1 4.821334-15.744 27.306667 27.306667 0 0 1 19.370666-11.264l0.96-0.021334 2.090667-0.064zM256 533.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 64a106.666667 106.666667 0 1 0 0 213.333334 106.666667 106.666667 0 0 0 0-213.333334z m32 24.384v56.384h49.28v64H256a32 32 0 0 1-32-32v-88.384h64zM501.333333 384a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32z m170.666667 0a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zM263.765333 170.88c0.085333 0.789333 0.149333 1.557333 0.192 2.346667l0.192 1.429333-0.213333-3.413333-0.170667-0.362667z" p-id="6454"></path></svg>
    </div>
    <div class="container">
      <svg class="line-container" viewBox="0 0 400 400" width="400" height="400">
        <line class="line" x1="0" y1="10" x2="400" y2="10" fill="none" stroke-width="5" stroke="red"></line>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to="blue" begin="3s"></set>
        </rect>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
          <animate attributeName="cx" attributeType="XML" from="0" to="100" dur="5s" repeatCount="1" fill="freeze"></animate>
          <animate attributeName="cy" attributeType="XML" from="0" to="50" dur="5s" repeatCount="1" fill="freeze"></animate>
          <animateTransform attributeName="transform" attributeType="XML" begin="0" dur="3s" type="scale" from="1" to="2" repeatCount="1"></animateTransform>
        </circle>
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze" repeatCount="1"></animate>
        </polygon>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            path="M10 10 L110 10 L110 110 L10 110 Z"
            dur="5s"
            rotate="0"
            fill="freeze"
            repeatCount="2"
          ></animateMotion>
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110 Z" fill="none" stroke="green"></path>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            id="forward-rect"
            path="M10 10 L110 10 L110 110 L10 110"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="0; backward-rect.end + 0.5s"
          ></animateMotion>
          <animateMotion
            id="backward-rect"
            path="M10 110 L110 110 L110 10 L10 10"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="forward-rect.end + 0.5s"
          ></animateMotion>
          <animate
            id="red-to-blue"
            attributeName="fill"
            attributeType="XML"
            from="red"
            to="blue"
            dur="2s"
            fill="freeze"
            begin="0; blue-to-red.end + 0.5s"
            ></animate>
          <animate
            id="blue-to-red"
            attributeName="fill"
            attributeType="XML"
            from="blue"
            to="red"
            dur="2s"
            fill="freeze"
            begin="red-to-blue.end + 0.5s"
          ></animate>
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110" fill="none" stroke="green"></path>
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
        <defs>
          <mask id="test-mask">
            <rect height="390" width="390" x="=5" y="5" fill="red"></rect>
            <circle r="50" ></circle>
          </mask>
          <linearGradient id="test-liner-gradient">
            <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
            <stop offset="50%" stop-color="green"></stop>
            <stop offset="100%" stop-color="blue" stop-opacity="0.5"></stop>
          </linearGradient>
          <radialGradient
            id="test-radial-gradient"
            cx="50%"
            cy="50%"
            fx="25%"
            fy="75%"
            r="50%"
          >
            <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="blue" stop-opacity="1.5"></stop>
          </radialGradient>
        </defs>
        <!--<rect x="5" y="5" width="390" height="390" fill="url(#test-radial-gradient)"></rect>-->
        <circle cx="200" cy="200" r="150" fill="url(#test-radial-gradient)"></circle>
        <!--<rect-->
          <!--x="5"-->
          <!--y="5"-->
          <!--width="390"-->
          <!--height="390"-->
          <!--fill="blue"-->
          <!--mask="url(#test-mask)"-->
        <!--&gt;</rect>-->
      </svg>
    </div>
  </div>

</template>

<script>
import { onMounted } from 'vue'
export default {
    name: "SvgAnimation",
    setup() {
        onMounted(() => {
            const logo = document.getElementsByClassName('logo')[0]
            // console.log(logo.getTotalLength())
        })
    }
}
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #000;
  }
}
.rect {
  stroke-dasharray: 10 20 30;
}
.circle {
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}
.logo {
  fill:none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 10s linear 1 forwards;
}
@keyframes logo {
  0% {
    fill: white;
    stroke-dasharray: 6490;
    stroke-dashoffset: 6490;
  }
  50% {
    fill: white;
    stroke-dasharray: 6490;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
    stroke: white;
  }
  100% {
    fill: blue;
  }
}
.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 0.5s ease-in-out;
}
.line-container {
  &:hover {
    .line {
      stroke-dashoffset: 0;
    }
  }
}
</style>
