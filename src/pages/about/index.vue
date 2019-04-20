/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-03-16 20:36:40
 */
<template>
  <div class="container">
    <i-button type="success" @click="goTo('/pages/index/index')">这是ABOUT按钮</i-button>
    <i-tab-bar :current="current" color="#f759ab" :bindchange="handleChange" fixed="true">
        <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
        <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
        <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      current: 'group'
    }
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
