<template>
<div class="container" id="container">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseComponent extends Vue {
  // logoUrl: string = '../images/logo.png'
}
</script>

<style lang="scss" scoped>
.container{
  background: #000;
  max-width: 750px;
  margin:0 auto;
  min-height: 10px;
  font-size:.24rem;
}
</style>
