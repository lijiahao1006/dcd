<template>
  <div id="index">
    <div class="a">
      a
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
#index{
  // margin-top: 100px;
  .a{
    font-size: 50px;
    color: white;
  }
  width: 100%;
  height: 1000px;
  background: {
    image: url(/intro-bg.jpg);
    repeat:no-repeat;
    size: cover;
    position: center center;
    // attachment: fixed; // 图片不滚动
  };
}
</style>
