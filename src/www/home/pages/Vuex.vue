<template>
  <div class="vuex">
    <h3 class="title">vuex</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class VuexComponent extends Vue {
  mounted () {
    console.log('Vuex')
  }
}
</script>

<style lang="scss" scoped>
</style>