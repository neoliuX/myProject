<template>
  <div class="photo-boxs">
    <div class="photo-box" v-for="i in 8">
      <img src="http://via.placeholder.com/200x200" />
    </div>
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
.photo-boxs{
  overflow: hidden;
}
.photo-box{
  margin: 10px;
  display: block;
  float:left;
}
</style>