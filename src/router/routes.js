//   第一个是默认的首页
// import MySwiper from "@/components/swiper/";
// console.log(MySwiper)
module.exports = [
	{
	  path: 'pages/index/index',
	  name: 'index',
	  config: {
	    navigationBarTitleText: '首页',
	    enablePullDownRefresh: false,
	    usingComponents: {
	      'i-button': '../../iView/button/index'
	    }
	  }
	},
	{
	  path: 'pages/about/index',
	  name: 'about',
	  config: {
	    navigationBarTitleText: '关于我们',
	    enablePullDownRefresh: false,
	    usingComponents: {
	      'i-button': '../../iView/button/index'
	    }
	  }
	}
]
