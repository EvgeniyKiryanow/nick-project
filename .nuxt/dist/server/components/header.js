exports.ids = [2];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("efeac3b2", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=731c7f83&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_vm._ssrNode("<div class=\"header__wrapper\"><div class=\"header__wrapper_logo\"><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt=\"logo\" loading=\"lazy\"> <div class=\"student\"><p>Only</p> <p>Student</p></div></div> <div class=\"header__consultation\"><button><div>Получить консультацию</div> <div class=\"circle\"><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt=\"arrow\" loading=\"lazy\"></div></button></div> <div class=\"header__navigation\"><div class=\"header__languages\"><div class=\"header__dropdown\"><button type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn btn-secondary dropdown-toggle\"><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt=\"ru icon\"> ru\n          </button> <ul aria-labelledby=\"dropdownMenuButton1\" class=\"dropdown-menu\"><li><a href=\"#\" class=\"dropdown-item\"><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt=\"en icon\">en</a></li> <li><a href=\"#\" class=\"dropdown-item\"><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"de icon\">de</a></li> <li><a href=\"#\" class=\"dropdown-item\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"ua icon\">ua</a></li></ul></div></div> <div class=\"header__menu\"><button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">\n          Mеню\n          <div class=\"lines\"></div></button></div> <div id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 id=\"exampleModalLabel\" class=\"modal-title\">Modal title</h5> <button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button></div> <div class=\"modal-body\">...</div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=731c7f83&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "595cbc3d"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(25).default})


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.81b01c7.png";

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgNkgxOU0xOSA2TDEzIDFNMTkgNkwxMyAxMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBpZDBDcIwDEWdqOJWKVduGaIDhA3YhBXYgGwAKzBJskG4MUNVCfNDK1BTEME86UuJ4v9jm6iAmR3kocQvAnSELH0CjwY68HdyjXlnjlxPmIVw3c+LTrJX8ThXIhmbpuuGfdsqktD3vM0DhDyEUEmNBzma/iQHXEhObNb6etZ825GAQa0iYQGO5Vu0jyQcvMDsn63gYqDwgzlmz2yeKaSmE78wF0EWOhUdpcnoyvo774Fewvh2F7sAAAAASUVORK5CYII="

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJLSURBVHgBpVNdSJNRGH7OtyF9dNGclBAmX2DRjbnyQpGCLTO7yMLoIoQiCAqC4IuKLW82CxHpbyMtEGozKbqJFkosKrekcP7E1hxhw+kqV1OUvm1NHG47bYdcsiFe+MALL+d5n+c9PJwD5KLsirpk3w3j3CvblE1ZQjPlN7S6Gs6bzRBEIXdcnu0EUQF5gT7diXKZDOBk2EA4RhGeV0VjcVWaP4MyrREJvgUBg5Th2IRdISjarx1zZMRYE1S8dK7STilVZA34bcV6dXdrhePuUQglhatKCzfx6NLW4uykTTW0u1rPDNJOQpXHKW45chhy8QJ6TxTjdOPePHHNnlLYddUov6eHrKAAlYP9YlqrxvuhCUsqRRki3i905kUvXYrF6JztDXUUlbKabL9DU8kE4yTnMF3GuD9kJD+6HrmIXK7K3bgw7sPPh49ZrzykgbKuNu9WRCYLkMwGrAMc1gkStDyZosmkkEv8GfMi1POM9cq6A6xyQRMJN95+9BmXQ4m4PXTW2keXfkt5ISZiC4yb7x/Ihuj5GjRztTU7rEin4L/eBk9jE+Znw9A9GMjb1tzxDsFFAt9lHSaa9UhIYZTv3NrCEUIcn46fNEWdo1i83Yn6nm94/tqbZzA8FkRDhwujp64iGY5iZH+9Ka0NsBCjCt7wtKrJXaftw/dfElbDdCiCi/cH0b394Of49Iwhc8YMNBaLdNPyQUNTMGEtUGpq6xxRa6QA2/T/NwaMmQMRu3TGokLeQDiuIg7674GRwGblxpdAygr/LcdKv781uR6Z/3EY/gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgBpZKxDcIwEEW/DYg2lOlCTYFHSCaAkcIEwASsQDZggxiJPumQqEJFgeC4I0hAAJE4T/pRLN//9tkGKhBRyFqwMnqSslasAL/gSY81p/9IjffNbKk+6VsI1Vv5YyfiVVT2lcGNSPMnhjtTCRjDnYk6HwtCC9TBjFoFaILOCQou4vUtB1ACR6gMwBqOXNGZad/uNhyyREPE41ubyzWij27MHdkG5u2JPfJ/DxhYW/TQjersRGrYHA7ZI2NVLdgbE2hcYu6QH5gyD5vcVCLnJS2/1t8AH8j9nShT00QAAAAASUVORK5CYII="

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBpZPbEYIwEEXvLhZgCXSgdgAVQCl2YOhAO8EO6AAcC5AS+HdI3KwwoB8OxPNFHueyeRG+MfcEkc3hkIEQD70NQA36voA5tPPpNIn1FhydQO6IXzg6w2pQNwWoTBWIdliGVGNTH8La1D8vlj17dbQCU8eI+IEgbMoiG4RiOfdLWFP6J4xsE+G5Rzgx2Zoc/mBD5FqfhDAalht3RTiN38QSoTgUTAdU8nHBWsQRt+WhaaAPZrF8GxxogCR10pkuquQ9J1EH89c4jtd6IkZG/AUb70g7bHapS57xAqS6Q7OrDh9oAAAAAElFTkSuQmCC"

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:768px){.header__languages{display:none}.header__wrapper_logo{margin-right:5%}.header__menu button{font-size:0!important}.header__consultation{padding:0!important}.footer__wrapper{display:flex;flex-direction:row-reverse;width:80%!important}.footer__payment{width:30%}.footer__payment--title{text-align:right}.footer__payment--body{display:block!important}.footer__payment--body img{width:auto!important;margin:0 30%!important}.footer__payment--body .img{width:100%!important}.footer .fields{width:60%}.footer__connect{padding-top:25px}}@media(max-width:550px){html{font-size:6px!important}.footer__wrapper{width:90%!important}.footer__payment--title{text-align:left}.footer__payment--body{display:block!important}.footer__payment--body img{width:auto!important;margin:0!important}.footer__payment--body .img{width:100%!important}}@media(max-width:375px){.footer__connect{padding-bottom:30px}.footer__connect--title{justify-content:center}.footer__connect--body .links{padding:10px 0}.footer__connect--body .links li{justify-content:center;display:flex}.footer button{margin:0 auto}.footer__about--title{text-align:center;padding-bottom:10px}.footer__about--body .links{display:flex;align-items:center;justify-content:center;padding-bottom:25px}.footer__about--body .links li{padding:0 15px}.footer__about--body .other-links li{padding:10px 0!important;text-align:center}.footer__wrapper{flex-direction:column-reverse;width:90%!important}.footer__payment{width:100%}.footer__payment--title{text-align:center}.footer__payment--body{display:flex!important;max-width:100%!important}.footer__payment--body img{width:15%!important}.footer__payment--body .img{width:20%!important;flex-wrap:nowrap}.footer__payment--body .img img{width:100%!important}.footer .fields{width:100%}}*,:after,:before{box-sizing:border-box}button{cursor:pointer}a{text-decoration:unset}blockquote,body,dd,dl,figcaption,figure,h1,h2,h3,h4,li,ol[class],p,ul[class]{margin:0}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5}ol[class],ul[class]{list-style:none}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}@media(prefers-reduced-motion:reduce){*{-webkit-animation-duration:.01ms!important;animation-duration:.01ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.header{background-color:rgba(1,7,29,.73);width:100%}.header__wrapper{max-width:1100px;width:100%;height:90px;margin:0 auto;justify-content:space-between}.header__navigation,.header__wrapper{display:flex;align-items:center}.header__nav{display:none}.header__wrapper_logo{position:relative;width:100px}.header__consultation button{padding-left:30px;display:flex;align-items:center;height:50px;position:relative;background:#010714;border:1px solid #f6e3ff;box-shadow:-2px -2px 10px rgba(182,27,255,.6),2px 2px 10px rgba(182,27,255,.6),2px -2px 10px rgba(182,27,255,.6),-2px 2px 10px rgba(182,27,255,.6);border-radius:40px}.header__consultation button .circle{position:relative;right:-7px;width:64px;height:64px;background:#b61bff;border-radius:50%;box-shadow:-2px 2px 10px rgba(182,27,255,.6),2px -2px 10px rgba(182,27,255,.6),-2px -2px 10px rgba(182,27,255,.6),-2px 2px 10px rgba(182,27,255,.6)}.header__consultation button .circle img{position:absolute;top:40%;right:40%}.header__consultation button:after{position:absolute;right:0;width:62px;height:62px;background:#b61bff;box-shadow:-2px 2px 10px rgba(182,27,255,.6),2px -2px 10px rgba(182,27,255,.6),-2px -2px 10px rgba(182,27,255,.6),-2px 2px 10px rgba(182,27,255,.6)}.header__consultation button:hover{background:#572370}.header__consultation button:active{background:#39104d}.header__consultation button div{font-weight:800;font-size:1.8em;line-height:124%;color:#fff}.header__consultation button div,.header__menu button{font-family:\"M PLUS 1p\",sans-serif;font-style:normal;display:flex;align-items:center;background:transparent}.header__menu button{border:unset;color:#ffebf8;font-weight:500;text-transform:uppercase;font-size:3em}.header__menu button .lines{position:relative;margin-left:10px;border-bottom:3px solid #fff;width:40px;height:30px}.header__menu button .lines:after{content:\"\";position:absolute;width:100%;top:50%;left:0;border-top:3px solid #fff}.header__menu button .lines:before{content:\"\";position:absolute;width:70%;top:0;left:0;border-top:3px solid #fff}.header__dropdown ul{background:transparent}.header__dropdown ul li:hover a{color:#000}.header #dropdownMenuButton1,.header__dropdown ul li a{display:flex;align-items:center;color:#ffebf8;font-family:\"M PLUS 1p\",sans-serif;font-style:normal;font-weight:500;text-transform:uppercase;font-size:1.8em}.header #dropdownMenuButton1{background:transparent;border:unset}.header .student{position:absolute;top:40%;right:-10%}.header .student p{font-family:Russo One;font-style:normal;font-weight:400;font-size:1.8em;letter-spacing:.095em;text-transform:uppercase;-webkit-text-stroke:1px #fff}.header .student p:first-child{text-align:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=header.js.map