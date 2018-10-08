<template>
<div class="container">
    <div class="header">
      <div class="logo">
        Neo Liu
      </div>
      header
    </div>
    <div class="content">
      <div class="right-box">
        <test-one></test-one>
        <test-two></test-two>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import TestOne from '../pages/TestOne.vue'
import TestTwo from '../pages/TestTwo.vue'

@Component({
  components: {
    TestOne,
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
