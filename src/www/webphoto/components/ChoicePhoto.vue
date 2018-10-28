<template>
  <div class="choice-photo">
    <div class="photos">
      <div class="photo" v-for="info in choiceData">
        <img :src="info.photoUrl">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class HomeComponent extends Vue {
  @State(state => state.photo.choiceData) choiceData: any
}
</script>

<style lang="scss" scoped>
.choice-photo{
  height:100%;
}
.photos{
  overflow: hidden;
  text-align: center;
  padding-top:21px;
  .photo{
    padding:4px;
    margin:0 8px;
    display: inline-block;
  }
  img{
    display: block;
    width:142px;
    height:92px;
    background:#000;
  }
}
</style>