/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-03-16 20:36:40
 */
<template>
  <div class="container">
    
<!--     <i-tab-bar :current="current" color="#f759ab" :bindchange="handleChange" fixed="true">
        <i-tab-bar-item key="index" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
        <i-tab-bar-item key="about" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
        <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar> -->
    <i-cell-group>
      <i-cell v-for="item in list" :key="item.aid" :title="item.title" is-link url="/pages/index/index"></i-cell>
    </i-cell-group>

    <i-page :current="pageCurrent" :total="pageTotal" @change="pageChange">
      <view slot="prev">
          <i-icon type="return"></i-icon>
          上一步
      </view>
      <view slot="next">
          下一步
          <i-icon type="enter"></i-icon>
      </view>
  </i-page>
  </div>
</template>

<script>

export default {
  data() {
    return {
      pageCurrent: 1,
      pageTotal:5,
      current: 'group',
      list: []
    }
  },
  // computed: {
  //   strtit: function (t) {
  //     return t.length > 15 ? t.substr(0, 3)+'...' : t
  //   } 
  // },
  methods: {
    goTo(url) {
      this.$router.push(url);
    },
    handleChange ({mp}) {
      let url = '/pages/' + mp.detail.key + '/index'
      this.$router.push(url)
    },
    pageChange ({mp}) {
      let type = mp.detail.type
      if (type === 'next') {
          this.pageCurrent = this.pageCurrent + 1
      } else if (type === 'prev') {
          this.pageCurrent = this.pageCurrent - 1
      }
      this.getData()
    },
    getData () {
      let self = this;
      let api = 'http://www.phonegap100.com/appapi.php';

      wx.request({
          url: api, //仅为示例，并非真实的接口地址
          data: {
              a: 'getPortalList' ,
              catid: '20',
              page:this.pageCurrent
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          success: function(res) {
              self.list = res.data.result
              //console.log(self.list)
          }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>

</style>
