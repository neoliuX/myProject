<template>
<div class="container">
    <div class="header">
      header
    </div>
    <div class="left">
      <div class="row">
        <h3 class="title">title</h3>
        <ul class="list">
          <li v-for="i in 5">list {{i}}</li>
        </ul>
      </div>
      <div class="row">
        <h3 class="title">title</h3>
        <ul class="list">
          <li v-for="i in 5">list {{i}}</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 80px;
  background:rgba(255,255,255, 0.7);
  border-bottom:1px solid #ddd;
}
.left{
  position: fixed;
  top:81px;
  left:0;
  bottom:0;
  width:230px;
  border-right:1px solid #ddd;
  overflow: hidden;
  overflow-y: auto;
}
.content{
  margin-top:81px;
  margin-left:231px;
}
</style>
