/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-03-16 20:36:40
 */
<template>
  <div class="container">
    <i-button type="success" @click="goTo('/pages/index/index')">这是ABOUT按钮</i-button>

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
