<template>
  <div class="test-two">
      two -- {{countTwo}}
      sss == {{count}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class TwoComponent extends Vue {
  // @Mutation('testFun') testFun: Function
  @Mutation('increment') increment: Function
  @State(state => state.counter.count) count: number
  @State(state => state.testTwo.countTwo) countTwo: number
  
  @Watch('countTwo')
  onModelTwo () {
    console.log(89888989)
  }
  mounted () {
    setTimeout(() => {
      console.log(111111)
      this.increment()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
</style>