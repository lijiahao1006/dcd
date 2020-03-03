<template>
  <div>
    <h1>我是登录login</h1>
    <el-button @click="login">
      点击登录
    </el-button>
  </div>
</template>

<script>
export default {
  layout: 'login',
  methods: {
    login () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  font-size: 60px;
  color: black;
  font-weight: bold;
}
</style>
