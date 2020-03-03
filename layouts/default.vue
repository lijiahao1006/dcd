<template>
  <div>
    <div class="wrap">
      <n-link to="/">
        <div class="link-font">
          首页
        </div>
      </n-link>
      <n-link to="/users">
        <div class="link-font">
          用户
        </div>
      </n-link>
      <n-link to="/shopping">
        <div class="link-font">
          购物
        </div>
      </n-link>
      <n-link to="/login">
        <div class="link-font">
          登录
        </div>
      </n-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(204, 196, 134);
  .link-font{
    width: 100px;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
}
</style>
