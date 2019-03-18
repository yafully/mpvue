<template>
  <div class="container">
    <!--@调用原生组件-->
    <sliders :images="bannerData" :height="bannerHeight" :interval="5000"></sliders>

    <i-button type="success">iView-weapp按钮组件</i-button>
    <a href="/pages/about/index" class="counter">去往About</a>
  </div>
</template>

<script>
import Sliders from "@/components/swiper/index"
export default {
  components: { Sliders },
  data() {
    return {
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
      this.$router.push(url);
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
