<template>
  <div>
    我是嵌套uesrs父亲
    <el-row>
      <el-col :span="4">
        <ul>
          <li v-for="i in 5" :key="i">
            <el-button class="el-btn" type="info" round @click="routerHan(i)">
              按钮--{{ i }}
            </el-button>
          </li>
        </ul>
      </el-col>
      <el-col :span="20">
        <nuxt-child />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    routerHan (i) {
      this.$router.push({ path: `/users/${i}` })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  flex-direction:column;
  li{
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
