<template>
  <div class="home">
    <div class="date">Update Time: {{updateDate}}</div>
    <div class="top">
      <div class="btn prev" @click="setCurPageFun('prev')"></div>
      <div class="photo-row">
        <div class="photo-boxs" :style="{width: photoRowWidth + 'px',marginLeft: '-' + (curPage - 1) * 1186 + 'px'}">
          <template  v-for="info in eachPageData">
            <photo-box :data="info"></photo-box>
          </template>
        </div>
      </div>
      <div class="btn next" @click="setCurPageFun('next')"></div>
      <page-com></page-com>
    </div>
    <div class="bottom">
      <choice-photo></choice-photo>
      <div class="go-to-next">
        <img src="../images/next.png" alt="" @click="goToNext">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'
import PageCom from '../components/Page.vue'
import PhotoBox from '../components/PhotoBox.vue'
import ChoicePhoto from '../components/ChoicePhoto.vue'
import Axios from 'axios'

@Component({
  components: {
    PhotoBox,
    PageCom,
    ChoicePhoto
  }
})
export default class HomeComponent extends Vue {
  @Mutation('setCurPage') setCurPageFun: Function
  @Mutation('getPageCount') getPageCountFun: Function
  @Mutation('getEwm') getEwmFun: Function
  @Action('getPhotoList') getPhotoListFun: Function
  @State(state => state.page.curPage) curPage: number
  @State(state => state.photo.eachPageData) eachPageData: any
  @State(state => state.photo.choiceData) choiceData: any
  @State(state => state.photo.isSetInterval) isSetInterval: boolean
  @State(state => state.photo.isLoadWeb) isLoadWeb: boolean
  @State(state => state.photo.updateDate) updateDate: string
  // @State(state => state.photo.eventIdDate) eventIdDate: any
  
  photoRowWidth: number = 0
  @Watch('eachPageData')
  onModelPhotoW () {
    this.photoRowWidth = this.eachPageData.length * 1186
    this.getPageCountFun(this.eachPageData.length)
  }
  // @Watch('eventIdDate')
  // onModeleventIdDate () {
  //   console.log(this.eventIdDate, 99999)
  // }
  goToNext () {
    this.getEwmFun()
    if(this.choiceData.length > 0) {
      this.$router.push({ path: '/choice' })
    }
  }
  mounted () {
    // console.log(this.eachPageData)
    this.photoRowWidth = this.eachPageData.length * 1186
    if(this.isLoadWeb) {
      console.log(8989899)
      this.getPageCountFun(this.eachPageData.length)
      this.getPhotoListFun()
      
      setInterval(() => {
        // console.log('循环111')
        if(this.isSetInterval) {
          // console.log('循环2222')
          this.getPhotoListFun()
        }
        // state.dispatch('getPhotoListFun')
      }, 5000)
      // console.log(this.eventIdDate, 8888) 
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  margin:0 auto;
  width:1302px;
  height:705px;
  background: url('../images/photoBg.jpg') no-repeat;
  position: relative;
  overflow: hidden;
}
.date{
  position: absolute;
  top:8px;
  left:58px;
  color:#000;
  font-size:17px;
  line-height: 60px;
}
.top{
  height:561px;
  padding:70px 58px 0;
  box-sizing: border-box;
  position: relative;
  // overflow: hidden;
  width:100%;
  box-sizing: border-box;
}
.btn{
  position:absolute;
  top:50%;
  cursor: pointer;
  width:39px;
  height:46px;
  margin-top:-23px;
}
.prev{
  background:url('../images/arrorleft.png') no-repeat;
  left:0;
}
.next{
  background:url('../images/arrorright.png') no-repeat;
  right:0;
}
.photo-row{
  overflow: hidden;
  width:1186px;
}
.photo-boxs{
  overflow: hidden;
  height: 426px;
  transition: all 0.3s ease-in;
}
.photo-box{
  float: left;
  width:1186px;
  min-height: 426px;
}
.bottom{
  position: relative;
  padding-right: 196px;
  background:#000;
  height:145px;
  .go-to-next{
    position: absolute;
    top:0;
    right:0;
    height:100%;
    width:196px;
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    img{
      display: block;
      cursor: pointer;
    }
  }
}
</style>