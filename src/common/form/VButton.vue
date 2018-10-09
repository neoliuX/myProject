<template>
  <span class="button" @click="$emit('click')">
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
.button{
  cursor:pointer;
}
</style>
