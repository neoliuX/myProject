<template>
  <div class="test-one">
      one == {{countTwo}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class OneComponent extends Vue {
  @State(state => state.testTwo.countTwo) countTwo: number
  mounted () {
    console.log('One')
  }
}
</script>

<style lang="scss" scoped>
</style>