<template>
  <div class="home">
      {{text}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class HomeComponent extends Vue {
  text: string = 'home'
  mounted() {
    setTimeout(() => {
      this.text = 'homeText'
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
</style>