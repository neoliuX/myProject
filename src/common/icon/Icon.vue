<template>
<i class="iconfont">
  <slot></slot>
</i>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class IconComponent extends Vue {
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 844999 */
  src: url('//at.alicdn.com/t/font_844999_ds6yfhw8ieq.eot');
  src: url('//at.alicdn.com/t/font_844999_ds6yfhw8ieq.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_844999_ds6yfhw8ieq.woff') format('woff'),
  url('//at.alicdn.com/t/font_844999_ds6yfhw8ieq.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_844999_ds6yfhw8ieq.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
