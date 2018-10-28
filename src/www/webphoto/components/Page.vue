<template>
  <ul class="page-box">
    <li class="prev">
      <template v-if="curPage <= 1">
          <span class="disabled"></span>
      </template>    
      <template v-else>
          <span @click="setCurPageFun(-1)"></span>
      </template>
    </li>
    <li class="pages">
      <div class="list" :style='{width: listWidth, marginLeft: "-" + (pageMargeLeft * 54) + "px"}'>
        <span
        v-for="i in count" 
        :class="i === curPage ? 'active':''"
        @click="setCurPageFun(i)">
        {{i}}</span>
      </div>
    </li>
    <li class="next">
      <template v-if="curPage >= count">
          <span class="disabled"></span>
      </template>    
      <template v-else>
          <span @click="setCurPageFun(+1)"></span>
      </template>
    </li>
  </ul>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class PageBoxComponent extends Vue {
  @Mutation('setCurPage') setCurPageFun: Function
  @State(state => state.page.count) count: number
  @State(state => state.page.curPage) curPage: number
  pageMargeLeft: number = 0
  listWidth: string = '100%'
  @Watch('count')
  onModelCount () {
    this.listWidth = this.count * 54 + 'px'
  }
  @Watch('curPage')
  onModelCurPage () {
    this.pageMargeLeft = this.curPage > 9 ? this.curPage - 9 : 0
  }
  // setCurPage (index: number) {
  //   this.nowPage = index > this.count ? 1 : index
  //   this.pageMargeLeft = index > 9 ? index - 9 : 0
  //   this.$emit('input', this.curPage)
  // }
  mounted () {
    this.listWidth = this.count * 54 + 'px'
  }
}
</script>

<style lang="scss" scoped>
.page-box{
  margin-top:6px;
  width:100%;
  overflow:hidden;
  position:relative;
  height:30px;
  text-align:center;
  user-select:none;
  .list{
    transition: all 0.1s ease-in;
  }
  li{
    display:inline-block;
    overflow:hidden;
    height:30px;
    span{
      height:30px;
      width:30px;
      text-align:center;
      line-height:30px;
      color:#fff;
      background: #000;
      border-radius:100%;
      margin:0 12px;
      display:inline-block;
      cursor:pointer;
      &:hover{
        background-color:#555;
      }
    }
    &.prev,
    &.next{
      span{
        background: url('../images/arrorblack.png') no-repeat;
      }
    }
    &.prev{
      transform: rotate(180deg);
    }
  }
  .disabled{
    background: url('../images/arrorgrey.png') no-repeat !important;
    cursor: text;
  }
  .active{
    background-color:#555;
  }
}
.pages{
  width:486px;
}
</style>
