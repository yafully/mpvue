<template>
  <div class="container">
    <!--@调用原生组件-->
    <sliders :images="bannerData" :height="bannerHeight" :interval="5000"></sliders>

    <i-button type="success">iView-weapp按钮组件</i-button>
    <a href="/pages/about_detail/index" class="counter">去往About</a>
    <navigator url="/pages/about/index" open-type="switchTab" delta="1">跳转tabBar</navigator>
<!--     <i-tab-bar :current="current" color="#f759ab" @change="handleChange" fixed="true">
        <i-tab-bar-item key="index" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
        <i-tab-bar-item key="about" icon="group" current-icon="group_fill" title="关于我们"></i-tab-bar-item>
        <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar> -->
  </div>
</template>

<script>
import Sliders from "@/components/swiper/index"
export default {
  components: { Sliders },
  data() {
    return {
      current: 'homepage',
      bannerData: [
        {
          "id": "0001",
          "name": "Hot",
          "url": "https://cdn.fishingsir.com/media/ipbanners/11.11_fishing_reel_.jpg",
          "link": "http://www.baidu.com"
        }, {
          "id": "0002",
          "name": "New",
          "url": "https://cdn.fishingsir.com/media/ipbanners/fishingsir_new_arrival.jpg",
          "link": ""
        }
      ],
      bannerHeight:null
    }
  },
  computed: {
  },
  methods: {
    goTo(url) {
      // console.log(url)

      // this.$router.push(url)
      
      wx.navigateTo({
        url: '/pages/about/index'
      })
    },
    handleChange ({mp}) {
      let url = '/pages/' + mp.detail.key + '/index'
      this.$router.push(url)
    }
  },
  mounted () {
    let self = this
    wx.getSystemInfo({
      success: function(res) {
        self.bannerHeight = res.screenWidth / 640 * 345
      }
    }) 
  }
}

</script>

<style lang="less">
  //@import "../../../static/less/main.less";
  .counter{
    font-size:100rpx;color:#f00;text-decoration: underline
  }  
</style>
