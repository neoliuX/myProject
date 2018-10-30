<template>
  <div class="choice">
    <div class="left">
      <div class="photo" v-for="info in choiceData">
        <img :src="info.imgUrl + '_60.' + info.imgExtend" @click="setCenterPhoto(info)">
      </div>
    </div>
    <div class="center">
      <div class="photo-box">
        <div class="photo">
          <img :src="showPhoto.imgUrl + '_60.' + showPhoto.imgExtend">
        </div>
      </div>
    </div>
    <div class="right">
      <h3 class="title">
        <img src="../images/text.png">
      </h3>
      <div class="ewm">
        <img :src="ewm">
      </div>
      <div class="printtxt">
        <template v-if="isPrintTxt">
          {{printTxt}}
        </template>
      </div>
      <div class="print" @click="getPrintFun">
        <img src="../images/print.png">
      </div>
      <div class="btns">
         <img src="../images/back.png" class="back" @click="$router.push({ path: '/home' })">
         <img src="../images/finish.png" class="finish" @click="finish">
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
  @Action('clearChoice') clearChoiceFun: Function
  @Mutation('getPrint') getPrintFun: Function
  @State(state => state.photo.choiceData) choiceData: any
  @State(state => state.photo.ewm) ewm: string
  @State(state => state.photo.printTxt) printTxt: string
  @State(state => state.photo.isPrintTxt) isPrintTxt: boolean
  showPhoto: string = ''
  setCenterPhoto (info: any) {
    this.showPhoto = info
  }
  finish () {
    this.clearChoiceFun()
    this.$router.push({ path: '/home' })
  }
  mounted () {
    this.showPhoto = this.choiceData[0]
  }
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
  float: left;
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
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
.center{
  float: left;
  position: relative;
  width:710px;
  height:705px;
  overflow: hidden;
  .photo-box{
    position: absolute;
    top:102px;
    left:-12px;
    background:url('../images/photoBg.png') no-repeat;
    width: 649px;
    height:473px;
    box-sizing: border-box;
    padding:48px 42px 0 39px;
  }
  .photo{
    width:552px;
    height:363px;
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img{
      display: block;
      max-width: 100%;
    }
  }
}
.right{
  width:388px;
  float: left;
  .title{
    margin-top:72px;
    height:142px;
    img{
      display: block;
      margin:0 auto;
    }
  }
  .ewm{
    height:173px;
    width:173px;
    background:#fff;
    margin:0 auto 60px;
    img{
      display: block;
      height:100%;
      width:100%;
    }
  }
  .print{
    width:266px;
    margin:0 auto 15px;
      cursor: pointer;
    img{
      display: block;
    }
  }
  .printtxt{
    text-align: center;
    font-size:12px;
    color:red;
    line-height: 36px;
    height:36px;
  }
  .btns{
    width:266px;
    overflow: hidden;
    margin:0 auto;
    .back{
      float:left;
      cursor: pointer;
    }
    .finish{
      float: right;
      cursor: pointer;
    }
  }
}
</style>