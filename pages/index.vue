<template>
  <div>
    <h1>我是首页</h1>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1500)
      console.log(1)
    })
  }
}
</script>

<style lang="scss" scoped>
h1{
  font-size: 50px;
  color: salmon;
}
</style>
