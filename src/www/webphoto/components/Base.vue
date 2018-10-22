<template>
<div class="container">
    <div class="content">
      <div class="right-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TestTwo from '../pages/TestTwo.vue'

@Component({
  components: {
    TestTwo
  }
})
export default class BaseComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.right-box{
  padding: 20px 80px;
}
</style>
