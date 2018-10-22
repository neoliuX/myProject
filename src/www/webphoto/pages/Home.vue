<template>
  <div class="home">
    <photo-box></photo-box>
    <page-com
    :count="count"
    :cur-page="curPage"
    @input="changePage"></page-com>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'
import PageCom from '@common/page/Page.vue'
import PhotoBox from '../components/PhotoBox.vue'

@Component({
  components: {
    PhotoBox,
    PageCom
  }
})
export default class HomeComponent extends Vue {
  @Mutation('setCurPage') setCurPageFun: Function
  @State(state => state.page.count) count: number
  @State(state => state.page.curPage) curPage: number
  
  changePage (index: number) {
    this.setCurPageFun(index)
  }
}
</script>

<style lang="scss" scoped>
</style>