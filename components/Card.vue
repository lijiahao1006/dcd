<template>
  <div id="card">
    <el-card class="box-card" shadow="hover">
      <div class="title">
        <img :src="`${font}.png`" alt="">{{ title }}
      </div>
      <hr>
      <div class="content">
        <span v-for="item in content" :key="item">
          {{ item }}
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: Array,
      default: function a () {
        return ['nihao']
      }
    },
    font: {
      type: String,
      default: 'phone'
    }
  },
  created () {
    console.log('woshi zi')
  }
}
</script>

<style lang="scss" scoped>
#card{
  width: 450px;
  height: 180px;
  margin: 20px auto;
}
.box-card {
  width: 450px;
  height: 180px;
  .title{
    font-size: 17px;
    img{
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
  .content{
    font-size: 15px;
    text-indent: 2em;
    span{
      display: block;
      margin-top: 5px;
    }
  }
}
</style>
