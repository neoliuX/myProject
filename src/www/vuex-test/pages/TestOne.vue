<template>
  <div class="test-one">
      one == {{countTwo}}
      <v-button @click="changeCount">点击改变 数字</v-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'
import VButton from '@common/form/VButton.vue'

@Component({
  components: {
    VButton
  }
})
export default class OneComponent extends Vue {
  // @Action('actionA') actionAFun: Function
  @Action('actionB') actionBFun: Function
  @Mutation('changeCount') changeCount: Function
  @State(state => state.testTwo.countTwo) countTwo: number
  mounted () {
    // this.actionAFun()
    this.actionBFun()
  }
}
</script>

<style lang="scss" scoped>
</style>