<template>
<div class="container">
    <router-view></router-view>
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
