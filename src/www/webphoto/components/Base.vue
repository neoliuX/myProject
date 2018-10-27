<template>
<div class="container">
    <div class="logo">
      <img src="../images/logo.png" alt="">
    </div>
    <div class="content">
      <div class="right-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TestTwo from '../pages/TestTwo.vue'

@Component({
  components: {
    TestTwo
  }
})
export default class BaseComponent extends Vue {
  logoUrl: string = '../images/logo.png'
}
</script>

<style lang="scss" scoped>
.container{
  width:1920px;
  height:1080px;
  background: url('../images/bg.jpg') no-repeat;
  background-size: cover;
}
.logo{
  padding:64px 0 48px;
  img{
    display: block;
    margin:0 auto;
  }
}
.right-box{
  padding: 20px 80px;
}
</style>
