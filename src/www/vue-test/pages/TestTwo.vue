<template>
  <div class="test-two">
      two -- {{countTwo}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'two',
      countTwo: this.$store.state.testTwo.state.countTwo
    }
  },
  mounted () {
    setTimeout(function(){
      this.countTwo++
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
</style>