<template>
  <div id="footer">
    <div class="footer-inner">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="footer-theme">
            <div class="icon">
              <div class="icon-img" />
              <div class="icon-title">
                关于自己
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="footer-theme">
            2
          </div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="footer-theme">
            3
          </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="footer-theme">
            4
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#footer{
  background-color: #2e3951;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  .footer-inner{
    height: 100px;
    padding: 40px 20px;
  }
  .footer-theme{
    // border: 1px solid springgreen;
    .icon{
      height: 100px;
      display: flex;
      justify-content: space-between;
      .icon-img{
        width: 80px;
        height: 80px;
        background: url(/jianli.png);
        background: {
          repeat:no-repeat;
          size: cover;
          position: center center;
          // attachment: fixed;
        };
      }
      .icon-title{
        font-size: 16px;
        width: 20px;
        color: white;
        margin-right: 30px;
      }
    }
  }
}
</style>
