/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-04-24 17:00:21
 */
<template>
  <div>
	<i-panel :title="detail.title">
	    <view style="padding: 10rpx;">
	    	<wxParse :content="detail.content"/>
	    	<i-spin size="large" fix v-if="spinShow"></i-spin>
	    </view>
	</i-panel>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
export default {
	name: 'NewsDetail',
	components: {
	    wxParse
	  },
	data () {
		return {
		  spinShow: true,
		  detail: []
		}
	},
	methods: {
		getData (aid) {
			let api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid;
			let self = this;
			wx.request({
	          url: api, //仅为示例，并非真实的接口地址
	          header: {
	              'content-type': 'application/json' // 默认值
	          },
	          success: function(res) {
	              self.detail = res.data.result[0]
	              self.spinShow = false
	          }
	      })
		}
	},
	onLoad (options) {
		this.getData(options.aid)
	}
}
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.article{padding:10rpx;}
</style>
