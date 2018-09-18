<template>
<div class="container">
    <div class="content">
      <ul class="nav">
        <li><router-link :to="'/home'">home</router-link></li>
        <li><router-link :to="'/other'">other</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseComponent extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
