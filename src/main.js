import Vue from 'vue'
import App from '@/App'
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App
})

app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue demo',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    }
    ,
    "tabBar": {
      color:"blue",
      selectedColor:'red',
      "list": [{
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath":"static/images/home1.png",
        "selectedIconPath": "static/images/home2.png"
      },{
        "pagePath": "pages/about/index",
        "text": "新闻",
        "iconPath":"static/images/news1.png",
        "selectedIconPath": "static/images/news2.png"
      }]
    }
  }
}
