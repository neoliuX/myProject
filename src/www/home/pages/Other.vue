<template>
  <div class="home">
      other
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class OtherComponent extends Vue {
  mounted () {
    console.log('Other')
  }
}
</script>

<style lang="scss" scoped>
</style>