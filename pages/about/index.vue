<template>
  <div class="about">
    <my-card :title="'简介'" :font="'body'" :content="content.introduce" />
    <my-card :title="'联系方式'" :content="content.touch" @hook:created="dosome" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: {
        introduce: ['李伽皓个人web｜日常练习项目、周末实践、记录笔记...便于同技术的盆友们分享探讨前端技术'],
        touch: ['GitHub: https://github.com/lijiahao1006', '码云(Gitee): https://gitee.com/leejoyful']
      }
    }
  },
  methods: {
    dosome () {
      console.log('我是父亲我出发了 字creared')
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  width: 100%;
  min-height: 300px;
}
</style>
