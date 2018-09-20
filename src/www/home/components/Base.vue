<template>
<div class="container">
    <div class="header">
      <div class="logo">
        Neo Liu
      </div>
      header
    </div>
    <div class="left">
      <div class="row" v-for="info in leftData">
        <h3 class="title">
          <router-link :to="'/home'">{{info.title}}</router-link>
        </h3>
        <ul class="list" v-if="info.children">
          <template v-for="item in info.children">
            <li>
              <router-link :to="item.path">{{item.title}}</router-link>
            </li>
          </template>
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
  leftData: any = [
    {
      'title': '表单',
      'children': [
        {
          'title': '表单验证',
          'path': '/form'
        },
        {
          'title': '表单验证',
          'path': '/sss'
        }
      ]
    },
    {
      'title': '表单',
      'children': [
        {
          'title': '表单验证',
          'path': '/form'
        },
        {
          'title': '表单验证',
          'path': '/sss'
        }
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  z-index: 2;
  top:0;
  left:0;
  width:100%;
  height: 60px;
  background:rgba(255,255,255, 0.7);
  border-bottom:1px solid #ddd;
}
.logo{
  background-color:#1893ee;
  position: absolute;
  top:0;
  left:0;
  height: 60px;
  line-height: 60px;
  width:200px;
  text-align: center;
  color:#fff;
  font-size:24px;
}
.left{
  position: fixed;
  z-index: 3;
  top:60px;
  left:0;
  bottom:0;
  width:200px;
  background-color:#232323;
  overflow-y: auto;
  .row{
    border-top: 1px solid #303030;
    &:first-child{
      border:none;
    }
  }
  .title{
    line-height: 45px;
    border-bottom: 1px solid #303030;
    a{
      color:#717171;
      display: block;
      padding-left:50px;
      position: relative;
      &:before{
        content:'';
        position: absolute;
        top:50%;
        left:30px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent #717171;
        margin-top:-5px;
      }
    }
  }
  .list li a{
    display: block;
    padding:0 20px;
    line-height: 30px;
    // color:#999;
  }
}
.content{
  margin-top:81px;
  margin-left:231px;
}
</style>
