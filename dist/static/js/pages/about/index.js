global.webpackJsonp([2],{

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d0f7f70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(59);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d0f7f70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d0f7f70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\about\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d0f7f70", Component.options)
  } else {
    hotAPI.reload("data-v-6d0f7f70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      pageCurrent: 1,
      pageTotal: 5,
      current: 'group',
      list: []
    };
  },

  // computed: {
  //   strtit: function (t) {
  //     return t.length > 15 ? t.substr(0, 3)+'...' : t
  //   } 
  // },
  methods: {
    goTo: function goTo(url) {
      this.$router.push(url);
    },
    handleChange: function handleChange(_ref) {
      var mp = _ref.mp;

      var url = '/pages/' + mp.detail.key + '/index';
      this.$router.push(url);
    },
    pageChange: function pageChange(_ref2) {
      var mp = _ref2.mp;

      var type = mp.detail.type;
      if (type === 'next') {
        this.pageCurrent = this.pageCurrent + 1;
      } else if (type === 'prev') {
        this.pageCurrent = this.pageCurrent - 1;
      }
      this.getData();
    },
    getData: function getData() {
      var self = this;
      var api = 'http://www.phonegap100.com/appapi.php';

      wx.request({
        url: api, //仅为示例，并非真实的接口地址
        data: {
          a: 'getPortalList',
          catid: '20',
          page: this.pageCurrent
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          self.list = res.data.result;
          //console.log(self.list)
        }
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '1'
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('i-cell', {
      key: item.aid,
      attrs: {
        "title": item.title,
        "is-link": "",
        "url": "/pages/index/index",
        "mpcomid": '0-' + index
      }
    })
  })), _vm._v(" "), _c('i-page', {
    attrs: {
      "current": _vm.pageCurrent,
      "total": _vm.pageTotal,
      "eventid": '0',
      "mpcomid": '4'
    },
    on: {
      "change": _vm.pageChange
    }
  }, [_c('view', {
    slot: "prev"
  }, [_c('i-icon', {
    attrs: {
      "type": "return",
      "mpcomid": '2'
    }
  }), _vm._v("\n          上一步\n      ")], 1), _vm._v(" "), _c('view', {
    slot: "next"
  }, [_vm._v("\n          下一步\n          "), _c('i-icon', {
    attrs: {
      "type": "enter",
      "mpcomid": '3'
    }
  })], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d0f7f70", esExports)
  }
}

/***/ })

},[63]);
//# sourceMappingURL=index.js.map