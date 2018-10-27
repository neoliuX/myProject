<template>
  <div class="choice-photo">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class HomeComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.choice-photo{
  background:#000;
  height:145px;
}
</style>