<template>
  <div>
    <h1>vuex状态树</h1>
    <span> 我是购物界面state:{{ $store.state.num }}</span><br>
    car。js的数据{{ $store.state.car.car }}
    <el-button @click="updata">
      切换
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    updata () {
      this.$store.commit('car/updata')
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  font-size: 50px;
}
</style>
