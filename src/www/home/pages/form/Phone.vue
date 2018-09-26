<template>
  <div class="phone">
    <input type="number" v-model="phoneNumber">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormComponent extends Vue {
  phoneNumber: number | string = '请输入手机号'
  mounted () {
    console.log('form')
  }
}
</script>

<style lang="scss" scoped>
</style>