<template>
  <div class="choice-photo">
    <div class="photos">
      <div class="photo" v-for="info in choiceData">
        <img :src="info.imgUrl + '_60.' + info.imgExtend ">
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
    width:142px;
    height:92px;
    background:#fff;
  }
  img{
    display: block;
    background:#000;
    height:100%;
    margin:0 auto;
  }
}
</style>