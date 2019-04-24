global.webpackJsonp([2],Array(60).concat([
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c98582d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(63);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c98582d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c98582d4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\about_detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c98582d4", Component.options)
  } else {
    hotAPI.reload("data-v-c98582d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__ = __webpack_require__(77);
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
	name: 'NewsDetail',
	components: {
		wxParse: __WEBPACK_IMPORTED_MODULE_0_mpvue_wxparse__["a" /* default */]
	},
	data: function data() {
		return {
			spinShow: true,
			detail: []
		};
	},

	methods: {
		getData: function getData(aid) {
			var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid;
			var self = this;
			wx.request({
				url: api, //仅为示例，并非真实的接口地址
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function success(res) {
					self.detail = res.data.result[0];
					self.spinShow = false;
				}
			});
		}
	},
	onLoad: function onLoad(options) {
		this.getData(options.aid);
	}
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-panel', {
    attrs: {
      "title": _vm.detail.title,
      "mpcomid": '2'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "10rpx"
    }
  }, [_c('wxParse', {
    attrs: {
      "content": _vm.detail.content,
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.spinShow) ? _c('i-spin', {
    attrs: {
      "size": "large",
      "fix": "",
      "mpcomid": '1'
    }
  }) : _vm._e()], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c98582d4", esExports)
  }
}

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseImg_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_239a2a6d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseImg_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseImg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_239a2a6d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseImg_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseImg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseImg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-239a2a6d", Component.options)
  } else {
    hotAPI.reload("data-v-239a2a6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseVideo_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_4c536ea5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseVideo_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseVideo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_4c536ea5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseVideo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseVideo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseVideo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c536ea5", Component.options)
  } else {
    hotAPI.reload("data-v-4c536ea5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseAudio_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_0817d080_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseAudio_vue__ = __webpack_require__(127);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseAudio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_0817d080_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseAudio_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseAudio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseAudio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0817d080", Component.options)
  } else {
    hotAPI.reload("data-v-0817d080", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParse_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_637a3956_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParse_vue__ = __webpack_require__(140);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParse_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_637a3956_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParse_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\wxParse.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParse.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-637a3956", Component.options)
  } else {
    hotAPI.reload("data-v-637a3956", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_html2json__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_wxParseTemplate0__ = __webpack_require__(83);
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
  name: 'wxParse',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    noData: {
      type: String,
      default: '<div style="color: red;">数据不能为空</div>'
    },
    startHandler: {
      type: Function,
      default: function _default() {
        return function (node) {
          node.attr.class = null;
          node.attr.style = null;
        };
      }
    },
    endHandler: {
      type: Function,
      default: null
    },
    charsHandler: {
      type: Function,
      default: null
    },
    imageProp: {
      type: Object,
      default: function _default() {
        return {
          mode: 'aspectFit',
          padding: 0,
          lazyLoad: false,
          domain: ''
        };
      }
    }
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_1__components_wxParseTemplate0__["a" /* default */]
  },
  data: function data() {
    return {
      imageUrls: []
    };
  },

  computed: {
    nodes: function nodes() {
      var content = this.content,
          noData = this.noData,
          imageProp = this.imageProp,
          startHandler = this.startHandler,
          endHandler = this.endHandler,
          charsHandler = this.charsHandler;

      var parseData = content || noData;
      var customHandler = {
        start: startHandler,
        end: endHandler,
        chars: charsHandler
      };
      var results = Object(__WEBPACK_IMPORTED_MODULE_0__libs_html2json__["a" /* default */])(parseData, customHandler, imageProp, this);
      this.imageUrls = results.imageUrls;
      return results.nodes;
    }
  },
  methods: {
    navigate: function navigate(href, $event) {
      this.$emit('navigate', href, $event);
    },
    preview: function preview(src, $event) {
      if (!this.imageUrls.length) return;
      wx.previewImage({
        current: src,
        urls: this.imageUrls
      });
      this.$emit('preview', src, $event);
    },
    removeImageUrl: function removeImageUrl(src) {
      var imageUrls = this.imageUrls;

      imageUrls.splice(imageUrls.indexOf(src), 1);
    }
  }
});

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate0_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2e878ea0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate0_vue__ = __webpack_require__(139);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate0_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2e878ea0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate0_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate0.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate0.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e878ea0", Component.options)
  } else {
    hotAPI.reload("data-v-2e878ea0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate1__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
  name: 'wxParseTemplate0',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate1__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate1_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2e95a621_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate1_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2e95a621_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate1_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e95a621", Component.options)
  } else {
    hotAPI.reload("data-v-2e95a621", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate2__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate1',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate2__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate2_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ea3bda2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate2_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ea3bda2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate2_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ea3bda2", Component.options)
  } else {
    hotAPI.reload("data-v-2ea3bda2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate3__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate2',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate3__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate3_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2eb1d523_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate3_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate3_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2eb1d523_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate3_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate3.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate3.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2eb1d523", Component.options)
  } else {
    hotAPI.reload("data-v-2eb1d523", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate4__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate3',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate4__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate4_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ebfeca4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate4_vue__ = __webpack_require__(135);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate4_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ebfeca4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate4_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate4.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate4.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ebfeca4", Component.options)
  } else {
    hotAPI.reload("data-v-2ebfeca4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate5__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate4',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate5__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate5_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ece0425_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate5_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate5_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ece0425_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate5_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate5.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate5.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ece0425", Component.options)
  } else {
    hotAPI.reload("data-v-2ece0425", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate6__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate5',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate6__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate6_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2edc1ba6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate6_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate6_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2edc1ba6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate6_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate6.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate6.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2edc1ba6", Component.options)
  } else {
    hotAPI.reload("data-v-2edc1ba6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate7__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate6',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate7__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate7_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2eea3327_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate7_vue__ = __webpack_require__(132);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate7_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2eea3327_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate7_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate7.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate7.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2eea3327", Component.options)
  } else {
    hotAPI.reload("data-v-2eea3327", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate8__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate7',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate8__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate8_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ef84aa8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate8_vue__ = __webpack_require__(131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(108)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate8_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2ef84aa8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate8_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate8.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate8.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ef84aa8", Component.options)
  } else {
    hotAPI.reload("data-v-2ef84aa8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate9__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate8',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate9__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate9_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2f066229_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate9_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate9_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_2f066229_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate9_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate9.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate9.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f066229", Component.options)
  } else {
    hotAPI.reload("data-v-2f066229", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate10__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate9',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate10__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate10_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_b7cacf42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate10_vue__ = __webpack_require__(129);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate10_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_b7cacf42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate10_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate10.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate10.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7cacf42", Component.options)
  } else {
    hotAPI.reload("data-v-b7cacf42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate11__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__ = __webpack_require__(76);
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
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseTemplate10',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate: __WEBPACK_IMPORTED_MODULE_0__wxParseTemplate11__["a" /* default */],
    wxParseImg: __WEBPACK_IMPORTED_MODULE_1__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_2__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_3__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate11_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_b7aea040_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate11_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_wxParseTemplate11_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_b7aea040_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_wxParseTemplate11_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-wxparse\\src\\components\\wxParseTemplate11.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] wxParseTemplate11.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7aea040", Component.options)
  } else {
    hotAPI.reload("data-v-b7aea040", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wxParseImg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxParseVideo__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wxParseAudio__ = __webpack_require__(76);
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
  name: 'wxParseTemplate11',
  props: {
    node: {}
  },
  components: {
    wxParseImg: __WEBPACK_IMPORTED_MODULE_0__wxParseImg__["a" /* default */],
    wxParseVideo: __WEBPACK_IMPORTED_MODULE_1__wxParseVideo__["a" /* default */],
    wxParseAudio: __WEBPACK_IMPORTED_MODULE_2__wxParseAudio__["a" /* default */]
  },
  methods: {
    wxParseATap: function wxParseATap(e) {
      var href = e.target.dataset.href;

      if (!href) return;
      this.node.$host.navigate(href, e);
    }
  }
});

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseImg',
  data: function data() {
    return {
      newStyleStr: '',
      preview: true
    };
  },

  props: {
    node: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    wxParseImgTap: function wxParseImgTap(e) {
      if (!this.preview) return;
      var src = e.target.dataset.src;

      if (!src) return;
      this.node.$host.preview(src, e);
    },

    // 图片视觉宽高计算函数区
    wxParseImgLoad: function wxParseImgLoad(e) {
      var src = e.target.dataset.src;

      if (!src) return;
      var _e$mp$detail = e.mp.detail,
          width = _e$mp$detail.width,
          height = _e$mp$detail.height;

      var recal = this.wxAutoImageCal(width, height);
      var imageheight = recal.imageheight,
          imageWidth = recal.imageWidth;
      var _node$attr = this.node.attr,
          padding = _node$attr.padding,
          mode = _node$attr.mode;
      var styleStr = this.node.styleStr;

      var imageHeightStyle = mode === 'widthFix' ? '' : 'height: ' + imageheight + 'px;';
      this.newStyleStr = styleStr + '; ' + imageHeightStyle + '; width: ' + imageWidth + 'px; padding: 0 ' + +padding + 'px;';
    },

    // 计算视觉优先的图片宽高
    wxAutoImageCal: function wxAutoImageCal(originalWidth, originalHeight) {
      // 获取图片的原始长宽
      var padding = this.node.attr.padding;

      var windowWidth = this.node.$screen.width - 2 * padding;
      var results = {};

      if (originalWidth < 60 || originalHeight < 60) {
        var src = this.node.attr.src;

        this.node.$host.removeImageUrl(src);
        this.preview = false;
      }

      // 判断按照那种方式进行缩放
      if (originalWidth > windowWidth) {
        // 在图片width大于手机屏幕width时候
        results.imageWidth = windowWidth;
        results.imageheight = windowWidth * (originalHeight / originalWidth);
      } else {
        // 否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }

      return results;
    }
  }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    class: _vm.node.classStr,
    style: (_vm.newStyleStr || _vm.node.styleStr),
    attrs: {
      "mode": _vm.node.attr.mode,
      "lazy-load": _vm.node.attr.lazyLoad,
      "data-src": _vm.node.attr.src,
      "src": _vm.node.attr.src,
      "eventid": '0'
    },
    on: {
      "tap": _vm.wxParseImgTap,
      "load": _vm.wxParseImgLoad
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-239a2a6d", esExports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseVideo',
  props: {
    node: {}
  }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, [_c('video', {
    staticClass: "video-video",
    class: _vm.node.classStr,
    attrs: {
      "src": _vm.node.attr.src
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c536ea5", esExports)
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'wxParseAudio',
  props: {
    node: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('audio', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "id": _vm.node.attr.id,
      "src": _vm.node.attr.src,
      "loop": _vm.node.attr.loop,
      "poster": _vm.node.attr.poster,
      "name": _vm.node.attr.name,
      "author": _vm.node.attr.author,
      "controls": ""
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0817d080", esExports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  })], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, [_vm._v("\n      " + _vm._s(_vm.node.text) + "\n    ")])]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '0'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '1'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, [_vm._v("\n      " + _vm._s(_vm.node.text) + "\n    ")])]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, [_vm._v("\n      " + _vm._s(_vm.node.text) + "\n    ")])])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b7aea040", esExports)
  }
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b7cacf42", esExports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f066229", esExports)
  }
}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ef84aa8", esExports)
  }
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2eea3327", esExports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2edc1ba6", esExports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ece0425", esExports)
  }
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ebfeca4", esExports)
  }
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2eb1d523", esExports)
  }
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ea3bda2", esExports)
  }
}

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e95a621", esExports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.node.node == 'element') ? _c('block', [(_vm.node.tag == 'button') ? _c('block', [_c('button', {
    attrs: {
      "type": "default",
      "size": "mini"
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  }))], 1) : (_vm.node.tag == 'li') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'video') ? _c('block', [_c('wx-parse-video', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '2'
    }
  })], 1) : (_vm.node.tag == 'audio') ? _c('block', [_c('wx-parse-audio', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '3'
    }
  })], 1) : (_vm.node.tag == 'img') ? _c('block', [_c('wx-parse-img', {
    attrs: {
      "node": _vm.node,
      "mpcomid": '4'
    }
  })], 1) : (_vm.node.tag == 'a') ? _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr),
    attrs: {
      "data-href": _vm.node.attr.href,
      "eventid": '0'
    },
    on: {
      "click": _vm.wxParseATap
    }
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '5-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'table') ? _c('block', [_c('view', {
    staticClass: "table",
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '6-' + index
      }
    })], 1)
  }))]) : (_vm.node.tag == 'br') ? _c('block', [_c('text', [_vm._v("\\n")])]) : _c('block', [_c('view', {
    class: _vm.node.classStr,
    style: (_vm.node.styleStr)
  }, _vm._l((_vm.node.nodes), function(node, index) {
    return _c('block', {
      key: index
    }, [_c('wx-parse-template', {
      attrs: {
        "node": node,
        "mpcomid": '7-' + index
      }
    })], 1)
  }))])], 1) : (_vm.node.node == 'text') ? _c('block', [_vm._v(_vm._s(_vm.node.text))]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e878ea0", esExports)
  }
}

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.loading) ? _c('div', {
    staticClass: "wxParse",
    class: _vm.className
  }, _vm._l((_vm.nodes), function(node, index) {
    return _c('block', {
      key: node.index
    }, [_c('wxParseTemplate', {
      attrs: {
        "node": node,
        "mpcomid": '0-' + index
      }
    })], 1)
  })) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-637a3956", esExports)
  }
}

/***/ })
]),[68]);
//# sourceMappingURL=index.js.map