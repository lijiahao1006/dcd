<template>
  <div>
    <div class="header">
      <Header />
    </div>
    <nuxt />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
}
.footer{
  position: relative;
  left: 50%;
  margin-left: -650px;
  margin-top: 50px;
  width: 1300px;
}

</style>
