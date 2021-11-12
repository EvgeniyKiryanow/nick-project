exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("735611c3", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=11ccad40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer__wrapper row \"><div class=\"footer__payment  col-md-4\"><div class=\"footer__payment--title title\">Принимаем к оплате</div> <div class=\"footer__payment--body\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"visa\"> <img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt=\"mastercard\"> <img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt=\"privat\"> <div class=\"img wrapper\"><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt=\"world\"> <img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt=\"liqpay\"></div></div></div> <div class=\"fields col-md-8  row \"><div class=\"footer__about  col-md-6\"><div class=\"footer__about--title title\">О Нас</div> <div class=\"footer__about--body\"><ul class=\"links\"><li><a href=\"#\">Статьи</a></li> <li><a href=\"#\">Отзывы</a></li> <li><a href=\"#\">Услуги</a></li></ul> <ul class=\"other-links\"><li><a href=\"#\">Помощь с репетиторами</a></li> <li><a href=\"#\">Помощь с учебными работами</a></li> <li><a href=\"#\">Политика конфиденциальности</a></li> <li><a href=\"#\">Договор публичной оферты</a></li></ul></div></div> <div class=\"footer__connect  col-md-6 \"><div class=\"footer__connect--title title\">\n        Связаться с нами\n        <img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt=\"mail\"></div> <div class=\"footer__connect--body\"><ul class=\"links\"><li><a href=\"#\">support@only-student.com\n              <img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"mail\"></a></li> <li><a href=\"#\">Исполнителям и Партнерам</a></li></ul> <button><div>Регистрация</div></button></div></div></div></div> <div class=\"footer__copyrighting row\">\n    © 2017-2021 «only-student». Все права защищены.\n  </div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=11ccad40&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
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
  "382a584b"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(26).default})


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/visa.5f2df3a.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mastercard.a1de55e.png";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/privat.8f994d0.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/world.f09c007.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/liqpay.2010340.png";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chat.2434704.png";

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgBvZSxTgJBEIYHHkBPazBb2xg7S3wITagggUS0ASqjzZ0NwUI4EqMUkDsbTfQhzjfQN+AEa+58gnVm3SV4rnB6p38ysLvs/h+ZnVkAFOfcwDAxAp5cIwwHg5F3Rg68Xn/I7OsB+JNXSCK2kYNycR/M46aP020CuHZ/WGqeWpCm7JYF9VrlLIvj50at4juXHUFPKmN1Bbotk8xDnIZikdKEYVECu1cDzrZ2OKzlfhQG2+Rm+4JPgzCQXoYyLyi6BLmjl7HYTIfiGgfhG/0/e2asvOXNe+rWo6DyUTOOsRM5X5CeXADIhMw0G7Wguf2eJgMeQRsnIuMfAM1BHcij3xYYu2RstTuz1H4BUNAF06ZvQIWIsWhQuth5YxVawDzIvb1X3WlGQAuNYwE0oBFVsYQFDq4tK2dSRnys52GZqAmxIcUYOx/88fInhU8nEBvwGxEgC3+sfwGEaTxyUUlPnwC9+kEV0lapuEdfjxn5OD1Z5x12c/cQqzoWieVzUD+sYMVVfZzuikXV6rLWk+rTc/0Ol4OOwwvq5YkAAAAASUVORK5CYII="

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(max-width:768px){.header__languages{display:none}.header__wrapper_logo{margin-right:5%}.header__menu button{font-size:0!important}.header__consultation{padding:0!important}.footer__wrapper{display:flex;flex-direction:row-reverse;width:80%!important}.footer__payment{width:30%}.footer__payment--title{text-align:right}.footer__payment--body{display:block!important}.footer__payment--body img{width:auto!important;margin:0 30%!important}.footer__payment--body .img{width:100%!important}.footer .fields{width:60%}.footer__connect{padding-top:25px}}@media(max-width:550px){html{font-size:6px!important}.footer__wrapper{width:90%!important}.footer__payment--title{text-align:left}.footer__payment--body{display:block!important}.footer__payment--body img{width:auto!important;margin:0!important}.footer__payment--body .img{width:100%!important}}@media(max-width:375px){.footer__connect{padding-bottom:30px}.footer__connect--title{justify-content:center}.footer__connect--body .links{padding:10px 0}.footer__connect--body .links li{justify-content:center;display:flex}.footer button{margin:0 auto}.footer__about--title{text-align:center;padding-bottom:10px}.footer__about--body .links{display:flex;align-items:center;justify-content:center;padding-bottom:25px}.footer__about--body .links li{padding:0 15px}.footer__about--body .other-links li{padding:10px 0!important;text-align:center}.footer__wrapper{flex-direction:column-reverse;width:90%!important}.footer__payment{width:100%}.footer__payment--title{text-align:center}.footer__payment--body{display:flex!important;max-width:100%!important}.footer__payment--body img{width:15%!important}.footer__payment--body .img{width:20%!important;flex-wrap:nowrap}.footer__payment--body .img img{width:100%!important}.footer .fields{width:100%}}*,:after,:before{box-sizing:border-box}button{cursor:pointer}a{text-decoration:unset}blockquote,body,dd,dl,figcaption,figure,h1,h2,h3,h4,li,ol[class],p,ul[class]{margin:0}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5}ol[class],ul[class]{list-style:none}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}@media(prefers-reduced-motion:reduce){*{-webkit-animation-duration:.01ms!important;animation-duration:.01ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.footer{width:100%}.footer__wrapper{max-width:1110px;width:100%;margin:0 auto}.footer__payment--body{display:flex;flex-wrap:wrap;max-width:250px;max-height:160px;width:100%;height:100%}.footer__payment--body img{width:40%;margin:2%;-o-object-fit:contain;object-fit:contain}.footer__payment--body div{margin:2%;width:40%;display:flex;flex-wrap:wrap}.footer__payment--body div img{margin:0;width:90%}.footer__about--body .links{display:flex;align-items:center;padding:0}.footer__about--body .links li{padding-right:5px}.footer__about--body .links li a{color:#fff;font-family:\"M PLUS 1p\",sans-serif;font-style:normal;font-weight:800;font-size:1.8em}.footer__about--body .other-links{padding:0}.footer__about--body .other-links li{padding:5px 0}.footer__about--body .other-links li a{color:#fff;font-family:\"M PLUS 1p\",sans-serif;font-style:normal;font-weight:800;font-size:1.8em}.footer__connect--title{display:flex;align-items:center}.footer__connect--title img{width:25px}.footer__connect--body .links{padding-left:0;padding-bottom:20px}.footer__connect--body .links li:first-child{padding:25px 0}.footer__connect--body .links li a{display:flex;align-items:center;color:#fff;font-family:\"M PLUS 1p\",sans-serif;font-style:normal;font-weight:800;font-size:1.8em}.footer__connect--body button{display:flex;align-items:center;height:50px;position:relative;background:#010714;border:1px solid #f6e3ff;box-shadow:-2px -2px 10px rgba(255,0,168,.5),2px 2px 10px rgba(255,0,168,.5),2px -2px 10px rgba(255,0,168,.5),-2px 2px 10px rgba(255,0,168,.5);border-radius:40px;padding:20px;height:40px}.footer__connect--body button .circle{position:relative;right:-7px;width:64px;height:64px;background:#b61bff;border-radius:50%;box-shadow:-2px 2px 10px rgba(255,0,168,.5),2px -2px 10px rgba(255,0,168,.5),-2px -2px 10px rgba(255,0,168,.5),-2px 2px 10px rgba(255,0,168,.5)}.footer__connect--body button .circle img{position:absolute;top:40%;right:40%}.footer__connect--body button:after{position:absolute;right:0;width:62px;height:62px;background:#b61bff;box-shadow:-2px 2px 10px rgba(255,0,168,.5),2px -2px 10px rgba(255,0,168,.5),-2px -2px 10px rgba(255,0,168,.5),-2px 2px 10px rgba(255,0,168,.5)}.footer__connect--body button:hover{background:#820357}.footer__connect--body button:active{background:#5c023e}.footer__connect--body button div{font-size:1.8em;line-height:124%;display:flex;align-items:center;background:transparent}.footer .title,.footer__connect--body button div{font-family:\"M PLUS 1p\",sans-serif;font-style:normal;font-weight:800;color:#fff}.footer .title{font-size:2.4em}.footer__copyrighting{justify-content:center;display:flex;font-family:\"Montserrat\",sans-serif;font-style:normal;font-weight:600;font-size:1.8em;line-height:22px;color:#fff;padding:25px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footer.js.map