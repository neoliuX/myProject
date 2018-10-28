<template>
  <div class="home">
    <div class="date">Update Time: 2018/11/12   10:21 AM</div>
    <div class="top">
      <div class="btn prev" @click="setCurPageFun(-1)"></div>
      <div class="photo-row">
        <div class="photo-boxs" :style="{width: photoRowWidth + 'px',marginLeft: '-' + (curPage - 1) * 1186 + 'px'}">
          <template  v-for="info in eachPageData">
            <photo-box :data="info"></photo-box>
          </template>
        </div>
      </div>
      <div class="btn next" @click="setCurPageFun(+1)"></div>
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
  @Action('getPhotoList') getPhotoListFun: Function
  @State(state => state.page.curPage) curPage: number
  @State(state => state.photo.eachPageData) eachPageData: any
  @State(state => state.photo.choiceData) choiceData: any
  photoRowWidth: number = 0
  @Watch('eachPageData')
  onModelPhotoW () {
    this.photoRowWidth = this.eachPageData.length * 1186
    this.getPageCountFun(this.eachPageData.length)
  }
  goToNext () {
    if(this.choiceData.length > 0) {
      this.$router.push({ path: '/choice' })
    }
  }
  mounted () {
    this.getPhotoListFun()
    // Axios.get('https://micro-admin.gtarcade.com/clientapi/wallet/searchhistory?type=1&startDay=2018-10-20&endDay=2018-10-26&account=&searchtype=&pagesize=10&page=1&order_id=').then((response) => {
    //   console.log(response);
    // })
    // console.log(Math.ceil(this.photoNumber/8))
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