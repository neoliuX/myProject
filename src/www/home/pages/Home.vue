<template>
  <div class="home">
      {{text}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class HomeComponent extends Vue {
  text: string = 'homes'
  mounted() {
    setTimeout(() => {
      this.text = 'homeTexta'
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
</style>