<template>
  <div class="phone">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class PhoneComponent extends Vue {
  mounted () {
    console.log('form')
  }
}
</script>

<style lang="scss" scoped>
</style>