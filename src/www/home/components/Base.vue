<template>
<div class="container">
    <div class="header">
      header
    </div>
    <div class="left">
      <div class="row" v-for="info in leftData">

        <h3 class="title">{{info.title}}</h3>

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
  .row{
    border-top: 1px solid #ddd;
    &:first-child{
      border:none;
    }
  }
  .title{
    line-height: 35px;
    padding:0 15px;
    border-bottom: 1px solid #ddd;
  }
  .list li a{
    display: block;
    padding:0 20px;
    line-height: 30px;
    color:#666;
  }
}
.content{
  margin-top:81px;
  margin-left:231px;
}
</style>
