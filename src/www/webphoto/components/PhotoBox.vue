<template>
  <div class="photo-boxs">
    <div class="photo-box" v-for="i in 8">
      <img src="http://via.placeholder.com/260x170" />
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
    width:100%;
  }
}
</style>