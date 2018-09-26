<template>
  <div class="form">
    <phone></phone>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Phone from './Phone.vue'

@Component({
  components:{
    Phone
  }
})
export default class FormComponent extends Vue {
  mounted () {
    console.log('form')
  }
}
</script>

<style lang="scss" scoped>
</style>