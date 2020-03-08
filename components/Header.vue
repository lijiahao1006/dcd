<template>
  <div>
    <div class="navbar">
      <div class="container">
        <div class="navbar-title">
          个人博客
        </div>
        <div class="navbar-span">
          <ul>
            <li v-for="(v, k) in tabdata" :key="k" :class="{'cur': $route.name == k}" @click="RouterHan(k)">
              {{ v }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabdata: {
        index: '首页',
        shopping: '购物',
        users: '用户',
        login: '登录'

      }
    }
  },
  methods: {
    RouterHan (value) {
      this.$router.push({ name: value })
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin title {
  color: #fff;
  font-weight: 550;
  height: 70px;
  margin-right: 10px;
  line-height: 70px;
  text-align: center;
  cursor: pointer;
}
@mixin Pseudo {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -25px;
  height: 3px;
  background-color:#fff;
}
.navbar{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  .container{
    width: 1200px;
    height: 70px;
    // border: 1px solid springgreen;
    .navbar-title{
      @include title;
      position: relative;
      font-size: 40px;
      width: 170px;
      float: left;
      &:hover{
        color: darkkhaki;
        transition: all 500ms ease
      }
      &::before{
        @include Pseudo;
        width: 0;
        left: 30px;
      }
      &:hover::before{
        width: 170px;
        background-color: darkkhaki;
        transition: all 500ms ease

      }
    }
    .navbar-span{
      height: 100px;
      width: 500px;
      float: right;
      ul{
        display: flex;
        justify-content: flex-end;
        @media screen and (max-width: 800px){
          display: none;
        }
        li{
          @include title;
          position: relative;
          width: 90px;
          font-size: 20px;
          &.cur::before{
            @include Pseudo;
            width: 50px;
          }
          &::before{
            @include Pseudo;
            width: 0;
          }
          &:hover::before{
            width: 60px;
            transition: all 500ms ease
          }
        }
      }

    }
  }
}
</style>
