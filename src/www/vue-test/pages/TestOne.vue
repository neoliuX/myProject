<template>
  <div class="test-one">
      one -- {{countTwo}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'one',
      countTwo: this.$store.state.testTwo.state.countTwo
    }
  },
  watch: {
    countTwo: function () {
      console.log(89898)
    }
  },
  mounted () {
    // console.log(this.$store.state.testOne.state.count)
  }
}
</script>

<style lang="scss" scoped>
</style>