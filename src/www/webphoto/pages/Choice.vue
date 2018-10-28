<template>
  <div class="choice">
    <div class="left">
      <div class="photo" v-for="info in 6">
        <img :src="'http://via.placeholder.com/260x122'">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'
import Axios from 'axios'

@Component
export default class ChoicePhotoComponent extends Vue {
  @State(state => state.photo.choiceData) choiceData: any
}
</script>

<style lang="scss" scoped>
.choice{
  margin:0 auto;
  width:1302px;
  height:705px;
  background: url('../images/chicoeBg.jpg') no-repeat;
  position: relative;
  overflow: hidden;
}
.left{
  height:100%;
  width:204px;
  box-sizing: border-box;
  padding-top:38px;
  .photo{
    background:#fff;
    padding:4px;
    width:138px;
    height:88px;
    margin:0 auto 11px;
    img{
      display: block;
      max-width: 100%;
    }
  }
}
</style>