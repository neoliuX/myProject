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
        <!--<template v-for="i in 3">-->
        <div class="row" v-for="info in leftData">
          <h3 class="title">
            <router-link :to="info.path"><icon>&#xe62c;</icon>{{info.title}}</router-link>
          </h3>
          <ul class="list" v-if="info.children">
            <template v-for="item in info.children">
              <li>
                <router-link :to="item.path">{{item.title}}</router-link>
              </li>
            </template>
          </ul>
        </div>
        <!--</template>-->
      </div>
      <div class="right-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Icon from '@common/icon/Icon.vue'

@Component({
  components: {
    Icon
  }
})
export default class BaseComponent extends Vue {
  leftData: any = [
    // {
    //   'title': '表单',
    //   'path': '/form'
    // }
    {
      'title': 'vuex',
      'path': '/vuex'
    }
  ]
}
</script>

<style lang="scss" scoped>
.left-box{
  box-sizing: border-box;
  padding-top:10px;
  .row{
    margin-bottom:20px;
  }
  .title{
    font-size: 16px;
  }
  a{
    color:#333;
    padding-left:10px;
    i{
      margin-right:5px;
    }
  }
  .list a{
    line-height:28px;
    padding-left:30px;
  }
}
</style>
