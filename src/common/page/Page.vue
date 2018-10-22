<template>
  <ul class="page-box">
    <li class="prev">
      <template v-if="nowPage <= 1">
          <span class="disabled">前</span>
      </template>    
      <template v-else>
          <span @click="setNowPage(--nowPage)">前</span>
      </template>
    </li>
    <li class="pages">
      <div class="list" :style='{width: listWidth}'>
        <span
        v-for="i in pageCount" 
        :class="i === nowPage ? 'active':''"
        @click="setNowPage(i)">
        {{i}}</span>
      </div>
    </li>
    <li class="next">
      <template v-if="nowPage >= pageCount">
          <span class="disabled">后</span>
      </template>    
      <template v-else>
          <span @click="setNowPage(++nowPage)">后</span>
      </template>
    </li>
  </ul>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PageBoxComponent extends Vue {
  @Prop() count: number
  @Prop() curPage: number
  pageCount: number = this.count
  nowPage: number = this.curPage
  listWidth: string = '100%'
  setNowPage (index: number) {
    this.nowPage = index > this.pageCount ? 1 : index
    this.$emit('input', this.nowPage)
  }
  mounted () {
    this.listWidth = this.pageCount * 54 + 'px'
  }
}
</script>

<style lang="scss" scoped>
.page-box{
  width:100%;
  overflow:hidden;
  position:relative;
  height:30px;
  text-align:center;
  user-select:none;
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
      background-color:#000;
      border-radius:3px;
      margin:0 12px;
      display:inline-block;
      cursor:pointer;
      &:hover{
        background-color:#555;
      }
    }
  }
  .disabled{
    background-color:#bbb2b8 !important;
    cursor: text;
  }
  .active{
    background-color:#555;
  }
}
.pages{
  // width:486px;
}
</style>
