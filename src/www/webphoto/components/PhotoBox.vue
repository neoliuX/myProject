<template>
  <div class="photo-box">
    <div
      v-for="info in data" @click="choicePhotoFun(info)"
      class="photo"
      :class="choiceDataIds.indexOf(info.photoId) !== -1 ? 'active' : ''">
      <img :src="info.photoUrl" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class HomeComponent extends Vue {
  @Prop() data: any
  @Mutation('choicePhoto') choicePhotoFun: Function
  @State(state => state.photo.choiceData) choiceData: any
  choiceDataIds: any = []
  // setChoiceClass (info: any) {
  //   console.log(info, 888888)
  // }
  @Watch('choiceData')
  onModelChoiceData () {
    this.choiceDataIds = []
    this.choiceData.map((item: any) => {
      this.choiceDataIds.push(item.photoId)
    })
  }
}
</script>

<style lang="scss" scoped>
.photo-box{
  overflow: hidden;
}
.photo{
  cursor: pointer;
  display: block;
  float:left;
  padding:7px;
  height:169px;
  width:260px;
  margin-right:30px;
  margin-bottom:30px;
  background:#fff;
  box-shadow: 10px 10px 3px rgba(151,96,114,0.2);
  &:nth-child(4n){
    margin-right:0;
  }
  img{
    height:100%;
    max-width:100%;
    margin:0 auto;
    display: block;
  }
}
.active{
  position: relative;
  &:after{
    content: '';
    display: block;
    width:109px;
    height:107px;
    background:url('../images/tag_selected.png') no-repeat;
    position: absolute;
    top:0;
    left:0;
    z-index: 5;
  }
}
</style>