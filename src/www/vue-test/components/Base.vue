<template>
  <div class="container">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseComponents extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
