<template>
  <div class="home">
    <div class="banner">
      <img src="http://s.waliwang.com/a/pc/20181101/images/9cc2e0b8967f.jpg" alt="">
    </div>
    <div class="photo-boxs">
      <div class="photo-box" v-for="info in photoList">
        <img :src="info.imgUrl + '_60.' + info.imgExtend ">
      </div>
    </div>
    <div class="footer">
      <img src="http://s.waliwang.com/a/pc/20181101/images/82575e835abf.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Axios from 'axios'

@Component
export default class HomeComponent extends Vue {
  photoList: any = []
  mounted () {
    let urls = '//prod.waliwang.com/rg/api/album/getImageByImgIds' + location.search
    // console.log(urls)
    Axios.get(urls, {})
    .then((response) => {
      console.log(response)
      this.photoList = response.data
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  overflow: hidden;
}
.banner{
  width:100%;
  img{
    display: block;
    width:100%;
  }
}
.photo-boxs{
  background:url('../images/bg.jpg') no-repeat;
  background-size: cover;
  min-height:5rem;
  padding:.30rem 0;
  .photo-box{
    margin:0 .50rem .20rem;
    background:#000;
    img{
      display:block;
      width:100%;
    }
  }
}
.footer{
  width:100%;
  img{
    display: block;
    width:100%;
  }
}
</style>