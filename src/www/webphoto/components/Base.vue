<template>
<div class="container">
    <div class="logo">
      <img src="http://s.waliwang.com/a/pc/20181101/images/76d17f38117d.png" alt="">
      <!-- <img src="http://s.waliwang.com/a/pc/20181101/images/e9d07f7c350b.png" alt=""> -->
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

@Component
export default class BaseComponent extends Vue {
  logoUrl: string = '../images/logo.png'
  mounted () {
    this.$router.push({ path: '/home' })
  }
}
</script>

<style lang="scss" scoped>
.container{
  width:100%;
  height:100%;
  overflow: hidden;
  min-width: 1600px;
  min-height: 1000px;
  // width:1920px;
  // height:1080px;
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
