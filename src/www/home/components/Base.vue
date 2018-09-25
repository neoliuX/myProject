<template>
<div class="container">
    <div class="header">
      <div class="logo">
        Neo Liu
      </div>
      header
    </div>
    <div class="content">
      <div class="left-box">
        <template v-for="i in 10">
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
        </template>
      </div>
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
.left-box{
  a{
    color:#333;
  }
}
</style>
