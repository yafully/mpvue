<template>
  <div class="container">
    <i-button type="success">iView-weapp按钮组件</i-button>
    <a href="/pages/about/index" class="counter">去往About</a>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }
}
</script>

<style scoped>

</style>
