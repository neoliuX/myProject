<template>
  <div class="photo-box">
    <img src="http://via.placeholder.com/200x200" />
    <img src="http://via.placeholder.com/200x200" />
    <img src="http://via.placeholder.com/200x200" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace} from 'vuex-class'

@Component
export default class HomeComponent extends Vue {
}
</script>

<style lang="scss" scoped>
</style>