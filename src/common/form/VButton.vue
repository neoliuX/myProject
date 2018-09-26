<template>
  <span class="button">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonComponent extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
