<template>
  <div>
    <h1>hello my name is one-users</h1>
    <a href="#" title="hello,66666666666">123</a>
    {{ c }}
  </div>
</template>

<script>

export default {
  data () {
    return {
      a: [22, 33, 14, 50, -6, 7, 8],
      b: {
        0: 18,
        1: 'lee',
        a: 'xinhe',
        length: 4
      },
      c: ''
    }
  },
  mounted () {
    // this.a.splice(1, 0, 55, 11)
    this.add()
    console.log(this.a)
  },
  methods: {
    add () {
      // hhhhhh
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
