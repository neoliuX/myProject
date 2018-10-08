<template>
<div class="container">
    <ul class="nav">
      <li><router-link :to="'/vuex'">vuex</router-link></li>
      <li><router-link :to="'/other'">other</router-link></li>
    </ul>
    <div class="content">
      <!-- <router-view></router-view> -->
      <test-one></test-one>
      <test-two></test-two>
    </div>
  </div>
</template>

<script>
import TestOne from '../pages/TestOne.vue'
import TestTwo from '../pages/TestTwo.vue'
export default {
  components: {
    TestOne,
    TestTwo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  overflow: hidden;
  margin: 20px;
  li{
    list-style: none;
    float: left;
    margin-right:10px;
    background: #999;
    a{
      text-decoration: none;
      display: block;
      line-height: 30px;
      padding:0 20px;
      background-color:#000;
      color:#fff;
    }
    .router-link-active{
      background:#5b5e60;
      color:#fff;
    }
  }
}

.content{
  margin: 20px;
}
</style>
