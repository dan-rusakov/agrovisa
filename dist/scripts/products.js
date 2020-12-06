(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Products.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Products.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Products',

  data() {
    return {
      products: [{
        id: 1,
        img: __webpack_require__(/*! ../assets/img/product-page-img1.jpg */ "./src/assets/img/product-page-img1.jpg"),
        name: 'Пшеница',
        description: 'Пшеница (ГОСТ 9353-2016): Ведущая зерновая культура во многих странах, активно используемая на всей территории нашей планеты. Основная область применения пшеницы – производство хлебобулочных изделий, круп и спирта. Одновременно пшеница используется в агрокомплексах в качестве основного и дополнительного кормового продукта. Ценность этого злака определяется содержанием полезных микроэлементов, самыми важными из которых являются белки, жиры и углеводы.  \n' + 'Показатели качества согласно прайс-листу. Зараженность не допускается. Без содержания ГМО.\n',
        pricePageUrl: 'PriceList'
      }, {
        id: 2,
        img: __webpack_require__(/*! ../assets/img/product-page-img2.jpg */ "./src/assets/img/product-page-img2.jpg"),
        name: 'Ячмень',
        description: 'Ячмень (ГОСТ 28672-90 / ГОСТ 53900-2010): Один из древнейших злаков, возделываемых человеком. Зерно ячменя широко используют для продовольственных, технических и кормовых целей, в том числе в пивоваренной промышленности, при производстве перловой и ячневой круп. Ячмень относится к ценнейшим концентрированным кормам для животных, так как содержит полноценный белок, богат крахмалом. \n' + 'Показатели качества согласно прайс-листу. Зараженность не допускается. Без содержания ГМО.\n',
        pricePageUrl: 'PriceList'
      }, {
        id: 3,
        img: __webpack_require__(/*! ../assets/img/product-page-img3.jpg */ "./src/assets/img/product-page-img3.jpg"),
        name: 'Кукуруза',
        description: 'Кукуруза (ГОСТ 13634-90): Широко распространенная агрокультура, применяемая в продовольственных и кормовых целях. Существует предположение, что кукуруза — самое древнее хлебное растение в мире. Главные природные достоинства кукурузы – высокое содержание калия, фосфора и витаминов дефицитной группы. Белок кукурузы содержит ряд аминокислот, являющихся незаменимыми для организма человека. Производство кукурузного масла и муки – ещё одна сторона польза этой культуры для пищевой промышленности.  \n' + 'Показатели качества согласно прайс-листу. Зараженность не допускается. Без содержания ГМО.',
        pricePageUrl: 'PriceList'
      }],
      activeProductIndex: 0
    };
  },

  methods: {
    changeProduct(direction) {
      let currentIndex = this.activeProductIndex;
      currentIndex += direction;

      if (currentIndex === -1) {
        currentIndex = this.products.length - 1;
      } else if (currentIndex === this.products.length) {
        currentIndex = 0;
      }

      this.activeProductIndex = currentIndex;
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Products.vue?vue&type=template&id=4d512e8c&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Products.vue?vue&type=template&id=4d512e8c& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('section',{staticClass:"products-page"},[_c('div',{staticClass:"products-page__wrapper"},[_c('h1',{staticClass:"products-page__title"},[_vm._v("Продукция")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"products-page__gallery"},[_c('div',{staticClass:"products-page__img-box"},_vm._l((_vm.products),function(product,index){return _c('img',{key:product.id,class:['products-page__img', {'products-page__img--active': index === _vm.activeProductIndex}],attrs:{"src":product.img,"alt":product.name}})}),0),_vm._v(" "),_c('div',{staticClass:"products-page__product-description-box"},[_c('p',{staticClass:"products-page__product-name"},[_vm._v(_vm._s(_vm.products[_vm.activeProductIndex].name))]),_vm._v(" "),_c('p',{staticClass:"products-page__product-description"},[_vm._v(_vm._s(_vm.products[_vm.activeProductIndex].description))]),_vm._v(" "),_c('div',{staticClass:"products-page__action-box"},[_c('router-link',{staticClass:"products-page__price-btn",attrs:{"to":{name: _vm.products[_vm.activeProductIndex].pricePageUrl},"tag":"a"}},[_vm._v("Прайс-лист")]),_vm._v(" "),_c('div',{staticClass:"products-page__navigation-box"},[_c('button',{staticClass:"products-page__navigation-btn",attrs:{"type":"button"},on:{"click":function($event){return _vm.changeProduct(-1)}}},[_c('svg',{staticClass:"products-page__navigation-icon",attrs:{"width":"14","height":"14"}},[_c('use',{attrs:{"xlink:href":"#icon-arrow"}})])]),_vm._v(" "),_c('button',{staticClass:"products-page__navigation-btn",attrs:{"type":"button"},on:{"click":function($event){return _vm.changeProduct(+1)}}},[_c('svg',{staticClass:"products-page__navigation-icon",attrs:{"width":"14","height":"14"}},[_c('use',{attrs:{"xlink:href":"#icon-arrow"}})])])])],1)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"products-page__description"},[_c('b',[_vm._v("АГРОВИЗА")]),_vm._v(" осуществляет оптовые закупки пшеницы, кукурузы, ячменя, бобовых и масличных культур при условии соответствия урожая актуальным государственным стандартам (ГОСТ 9353-2016, ГОСТ 13634-90, ГОСТ 28672-90/ГОСТ 53900-2010, ГОСТ 17109-88 и др.). Мы предлагаем оптимальные закупочные цены, удобные схемы работы, четкое соблюдение сроков оплаты и оперативное сопровождение всех своих поставок. ")])}]



/***/ }),

/***/ "./src/assets/img/product-page-img1.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/product-page-img1.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/wp-content/themes/agrovisa/dist/img/product-page-img1.jpg?v=95128db4023d44acb0ad2de13d3aa230";

/***/ }),

/***/ "./src/assets/img/product-page-img2.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/product-page-img2.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/wp-content/themes/agrovisa/dist/img/product-page-img2.jpg?v=4e3f0ae259b7a47c1947e26f2e61700a";

/***/ }),

/***/ "./src/assets/img/product-page-img3.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/product-page-img3.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/wp-content/themes/agrovisa/dist/img/product-page-img3.jpg?v=1200eb308d45761caddff45f924fb002";

/***/ }),

/***/ "./src/views/Products.vue":
/*!********************************!*\
  !*** ./src/views/Products.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_4d512e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=4d512e8c& */ "./src/views/Products.vue?vue&type=template&id=4d512e8c&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./src/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_4d512e8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_4d512e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Products.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Products.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Products.vue?vue&type=template&id=4d512e8c&":
/*!***************************************************************!*\
  !*** ./src/views/Products.vue?vue&type=template&id=4d512e8c& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_4d512e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=4d512e8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Products.vue?vue&type=template&id=4d512e8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_4d512e8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_4d512e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL1Byb2R1Y3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUHJvZHVjdHMudnVlP2FlYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWcvcHJvZHVjdC1wYWdlLWltZzEuanBnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL3Byb2R1Y3QtcGFnZS1pbWcyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9wcm9kdWN0LXBhZ2UtaW1nMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1Byb2R1Y3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUHJvZHVjdHMudnVlPzdkOGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1Byb2R1Y3RzLnZ1ZT80YTA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0Esa0JBREE7O0FBRUE7QUFDQTtBQUNBLGlCQUNBO0FBQ0EsYUFEQTtBQUVBLHFIQUZBO0FBR0EsdUJBSEE7QUFJQSxvZUFDQSw4RkFMQTtBQU1BO0FBTkEsT0FEQSxFQVNBO0FBQ0EsYUFEQTtBQUVBLHFIQUZBO0FBR0Esc0JBSEE7QUFJQSw0WkFDQSw4RkFMQTtBQU1BO0FBTkEsT0FUQSxFQWlCQTtBQUNBLGFBREE7QUFFQSxxSEFGQTtBQUdBLHdCQUhBO0FBSUEsNGdCQUNBLDRGQUxBO0FBTUE7QUFOQSxPQWpCQSxDQURBO0FBMkJBO0FBM0JBO0FBNkJBLEdBaENBOztBQWlDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQVpBO0FBakNBLEc7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLGlCQUFpQixzQkFBc0IsZ0JBQWdCLDRCQUE0QixZQUFZLHFDQUFxQyxXQUFXLG1DQUFtQyxvRUFBb0UscUNBQXFDLFlBQVkscUNBQXFDLCtDQUErQyxpQkFBaUIsNkNBQTZDLCtEQUErRCxTQUFTLHNDQUFzQyxFQUFFLDJCQUEyQixxREFBcUQsVUFBVSwwQ0FBMEMsa0ZBQWtGLGlEQUFpRCwyRkFBMkYsd0NBQXdDLG9CQUFvQiw4Q0FBOEMsTUFBTSx3REFBd0QsWUFBWSwrQ0FBK0MsNENBQTRDLGVBQWUsbURBQW1ELGdCQUFnQixLQUFLLHlCQUF5QiwrQkFBK0IsWUFBWSxvREFBb0QsNEJBQTRCLFlBQVksT0FBTyw0QkFBNEIsK0JBQStCLG1EQUFtRCxnQkFBZ0IsS0FBSyx5QkFBeUIsK0JBQStCLFlBQVksb0RBQW9ELDRCQUE0QixZQUFZLE9BQU8sNEJBQTRCO0FBQ3Z6RCxvQ0FBb0MsYUFBYSwwQkFBMEIsd0JBQXdCLGVBQWUseUNBQXlDLDhhQUE4YTs7Ozs7Ozs7Ozs7OztBQ0R6a0IsaUg7Ozs7Ozs7Ozs7O0FDQUEsaUg7Ozs7Ozs7Ozs7O0FDQUEsaUg7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7OztBQUd2RDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGdGOzs7Ozs7Ozs7Ozs7QUNsQmY7QUFBQTtBQUFBLHdDQUFnTCxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic2NyaXB0cy9wcm9kdWN0cy5qcz92PTkyYjQ5MGFkNDgxYTZjMzNhMzlmIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VfX3dyYXBwZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX190aXRsZVwiPtCf0YDQvtC00YPQutGG0LjRjzwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19kZXNjcmlwdGlvblwiPjxiPtCQ0JPQoNCe0JLQmNCX0JA8L2I+INC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgiDQvtC/0YLQvtCy0YvQtSDQt9Cw0LrRg9C/0LrQuCDQv9GI0LXQvdC40YbRiywg0LrRg9C60YPRgNGD0LfRiywg0Y/Rh9C80LXQvdGPLCDQsdC+0LHQvtCy0YvRhSDQuCDQvNCw0YHQu9C40YfQvdGL0YUg0LrRg9C70YzRgtGD0YAg0L/RgNC4INGD0YHQu9C+0LLQuNC4INGB0L7QvtGC0LLQtdGC0YHRgtCy0LjRjyDRg9GA0L7QttCw0Y8g0LDQutGC0YPQsNC70YzQvdGL0Lwg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C8INGB0YLQsNC90LTQsNGA0YLQsNC8ICjQk9Ce0KHQoiA5MzUzLTIwMTYsINCT0J7QodCiIDEzNjM0LTkwLCDQk9Ce0KHQoiAyODY3Mi05MC/Qk9Ce0KHQoiA1MzkwMC0yMDEwLCDQk9Ce0KHQoiAxNzEwOS04OCDQuCDQtNGALikuINCc0Ysg0L/RgNC10LTQu9Cw0LPQsNC10Lwg0L7Qv9GC0LjQvNCw0LvRjNC90YvQtSDQt9Cw0LrRg9C/0L7Rh9C90YvQtSDRhtC10L3Riywg0YPQtNC+0LHQvdGL0LUg0YHRhdC10LzRiyDRgNCw0LHQvtGC0YssINGH0LXRgtC60L7QtSDRgdC+0LHQu9GO0LTQtdC90LjQtSDRgdGA0L7QutC+0LIg0L7Qv9C70LDRgtGLINC4INC+0L/QtdGA0LDRgtC40LLQvdC+0LUg0YHQvtC/0YDQvtCy0L7QttC00LXQvdC40LUg0LLRgdC10YUg0YHQstC+0LjRhSDQv9C+0YHRgtCw0LLQvtC6LiA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VfX2dhbGxlcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19pbWctYm94XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIDpzcmM9XCJwcm9kdWN0LmltZ1wiXHJcbiAgICAgICAgICAgICAgICA6YWx0PVwicHJvZHVjdC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsncHJvZHVjdHMtcGFnZV9faW1nJywgeydwcm9kdWN0cy1wYWdlX19pbWctLWFjdGl2ZSc6IGluZGV4ID09PSBhY3RpdmVQcm9kdWN0SW5kZXh9XVwiXHJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cInByb2R1Y3QuaWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19wcm9kdWN0LWRlc2NyaXB0aW9uLWJveFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RzLXBhZ2VfX3Byb2R1Y3QtbmFtZVwiPnt7IHByb2R1Y3RzW2FjdGl2ZVByb2R1Y3RJbmRleF0ubmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19wcm9kdWN0LWRlc2NyaXB0aW9uXCI+e3sgcHJvZHVjdHNbYWN0aXZlUHJvZHVjdEluZGV4XS5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VfX2FjdGlvbi1ib3hcIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcclxuICAgICAgICAgICAgICAgICAgOnRvPVwie25hbWU6IHByb2R1Y3RzW2FjdGl2ZVByb2R1Y3RJbmRleF0ucHJpY2VQYWdlVXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdHMtcGFnZV9fcHJpY2UtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgdGFnPVwiYVwiXHJcbiAgICAgICAgICAgICAgPtCf0YDQsNC50YEt0LvQuNGB0YI8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19uYXZpZ2F0aW9uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19uYXZpZ2F0aW9uLWJ0blwiIEBjbGljaz1cImNoYW5nZVByb2R1Y3QoLTEpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19uYXZpZ2F0aW9uLWljb25cIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1hcnJvd1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19uYXZpZ2F0aW9uLWJ0blwiIEBjbGljaz1cImNoYW5nZVByb2R1Y3QoKzEpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJwcm9kdWN0cy1wYWdlX19uYXZpZ2F0aW9uLWljb25cIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1hcnJvd1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1Byb2R1Y3RzJyxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIGltZzogcmVxdWlyZSgnLi4vYXNzZXRzL2ltZy9wcm9kdWN0LXBhZ2UtaW1nMS5qcGcnKSxcclxuICAgICAgICAgICAgbmFtZTogJ9Cf0YjQtdC90LjRhtCwJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQn9GI0LXQvdC40YbQsCAo0JPQntCh0KIgOTM1My0yMDE2KTog0JLQtdC00YPRidCw0Y8g0LfQtdGA0L3QvtCy0LDRjyDQutGD0LvRjNGC0YPRgNCwINCy0L4g0LzQvdC+0LPQuNGFINGB0YLRgNCw0L3QsNGFLCDQsNC60YLQuNCy0L3QviDQuNGB0L/QvtC70YzQt9GD0LXQvNCw0Y8g0L3QsCDQstGB0LXQuSDRgtC10YDRgNC40YLQvtGA0LjQuCDQvdCw0YjQtdC5INC/0LvQsNC90LXRgtGLLiDQntGB0L3QvtCy0L3QsNGPINC+0LHQu9Cw0YHRgtGMINC/0YDQuNC80LXQvdC10L3QuNGPINC/0YjQtdC90LjRhtGLIOKAkyDQv9GA0L7QuNC30LLQvtC00YHRgtCy0L4g0YXQu9C10LHQvtCx0YPQu9C+0YfQvdGL0YUg0LjQt9C00LXQu9C40LksINC60YDRg9C/INC4INGB0L/QuNGA0YLQsC4g0J7QtNC90L7QstGA0LXQvNC10L3QvdC+INC/0YjQtdC90LjRhtCwINC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQsiDQsNCz0YDQvtC60L7QvNC/0LvQtdC60YHQsNGFINCyINC60LDRh9C10YHRgtCy0LUg0L7RgdC90L7QstC90L7Qs9C+INC4INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQutC+0YDQvNC+0LLQvtCz0L4g0L/RgNC+0LTRg9C60YLQsC4g0KbQtdC90L3QvtGB0YLRjCDRjdGC0L7Qs9C+INC30LvQsNC60LAg0L7Qv9GA0LXQtNC10LvRj9C10YLRgdGPINGB0L7QtNC10YDQttCw0L3QuNC10Lwg0L/QvtC70LXQt9C90YvRhSDQvNC40LrRgNC+0Y3Qu9C10LzQtdC90YLQvtCyLCDRgdCw0LzRi9C80Lgg0LLQsNC20L3Ri9C80Lgg0LjQtyDQutC+0YLQvtGA0YvRhSDRj9Cy0LvRj9GO0YLRgdGPINCx0LXQu9C60LgsINC20LjRgNGLINC4INGD0LPQu9C10LLQvtC00YsuICBcXG4nICtcclxuICAgICAgICAgICAgICAn0J/QvtC60LDQt9Cw0YLQtdC70Lgg0LrQsNGH0LXRgdGC0LLQsCDRgdC+0LPQu9Cw0YHQvdC+INC/0YDQsNC50YEt0LvQuNGB0YLRgy4g0JfQsNGA0LDQttC10L3QvdC+0YHRgtGMINC90LUg0LTQvtC/0YPRgdC60LDQtdGC0YHRjy4g0JHQtdC3INGB0L7QtNC10YDQttCw0L3QuNGPINCT0JzQni5cXG4nLFxyXG4gICAgICAgICAgICBwcmljZVBhZ2VVcmw6ICdQcmljZUxpc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGltZzogcmVxdWlyZSgnLi4vYXNzZXRzL2ltZy9wcm9kdWN0LXBhZ2UtaW1nMi5qcGcnKSxcclxuICAgICAgICAgICAgbmFtZTogJ9Cv0YfQvNC10L3RjCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0K/Rh9C80LXQvdGMICjQk9Ce0KHQoiAyODY3Mi05MCAvINCT0J7QodCiIDUzOTAwLTIwMTApOiDQntC00LjQvSDQuNC3INC00YDQtdCy0L3QtdC50YjQuNGFINC30LvQsNC60L7Qsiwg0LLQvtC30LTQtdC70YvQstCw0LXQvNGL0YUg0YfQtdC70L7QstC10LrQvtC8LiDQl9C10YDQvdC+INGP0YfQvNC10L3RjyDRiNC40YDQvtC60L4g0LjRgdC/0L7Qu9GM0LfRg9GO0YIg0LTQu9GPINC/0YDQvtC00L7QstC+0LvRjNGB0YLQstC10L3QvdGL0YUsINGC0LXRhdC90LjRh9C10YHQutC40YUg0Lgg0LrQvtGA0LzQvtCy0YvRhSDRhtC10LvQtdC5LCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQsiDQv9C40LLQvtCy0LDRgNC10L3QvdC+0Lkg0L/RgNC+0LzRi9GI0LvQtdC90L3QvtGB0YLQuCwg0L/RgNC4INC/0YDQvtC40LfQstC+0LTRgdGC0LLQtSDQv9C10YDQu9C+0LLQvtC5INC4INGP0YfQvdC10LLQvtC5INC60YDRg9C/LiDQr9GH0LzQtdC90Ywg0L7RgtC90L7RgdC40YLRgdGPINC6INGG0LXQvdC90LXQudGI0LjQvCDQutC+0L3RhtC10L3RgtGA0LjRgNC+0LLQsNC90L3Ri9C8INC60L7RgNC80LDQvCDQtNC70Y8g0LbQuNCy0L7RgtC90YvRhSwg0YLQsNC6INC60LDQuiDRgdC+0LTQtdGA0LbQuNGCINC/0L7Qu9C90L7RhtC10L3QvdGL0Lkg0LHQtdC70L7Quiwg0LHQvtCz0LDRgiDQutGA0LDRhdC80LDQu9C+0LwuIFxcbicgK1xyXG4gICAgICAgICAgICAgICfQn9C+0LrQsNC30LDRgtC10LvQuCDQutCw0YfQtdGB0YLQstCwINGB0L7Qs9C70LDRgdC90L4g0L/RgNCw0LnRgS3Qu9C40YHRgtGDLiDQl9Cw0YDQsNC20LXQvdC90L7RgdGC0Ywg0L3QtSDQtNC+0L/Rg9GB0LrQsNC10YLRgdGPLiDQkdC10Lcg0YHQvtC00LXRgNC20LDQvdC40Y8g0JPQnNCeLlxcbicsXHJcbiAgICAgICAgICAgIHByaWNlUGFnZVVybDogJ1ByaWNlTGlzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgaW1nOiByZXF1aXJlKCcuLi9hc3NldHMvaW1nL3Byb2R1Y3QtcGFnZS1pbWczLmpwZycpLFxyXG4gICAgICAgICAgICBuYW1lOiAn0JrRg9C60YPRgNGD0LfQsCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0JrRg9C60YPRgNGD0LfQsCAo0JPQntCh0KIgMTM2MzQtOTApOiDQqNC40YDQvtC60L4g0YDQsNGB0L/RgNC+0YHRgtGA0LDQvdC10L3QvdCw0Y8g0LDQs9GA0L7QutGD0LvRjNGC0YPRgNCwLCDQv9GA0LjQvNC10L3Rj9C10LzQsNGPINCyINC/0YDQvtC00L7QstC+0LvRjNGB0YLQstC10L3QvdGL0YUg0Lgg0LrQvtGA0LzQvtCy0YvRhSDRhtC10LvRj9GFLiDQodGD0YnQtdGB0YLQstGD0LXRgiDQv9GA0LXQtNC/0L7Qu9C+0LbQtdC90LjQtSwg0YfRgtC+INC60YPQutGD0YDRg9C30LAg4oCUINGB0LDQvNC+0LUg0LTRgNC10LLQvdC10LUg0YXQu9C10LHQvdC+0LUg0YDQsNGB0YLQtdC90LjQtSDQsiDQvNC40YDQtS4g0JPQu9Cw0LLQvdGL0LUg0L/RgNC40YDQvtC00L3Ri9C1INC00L7RgdGC0L7QuNC90YHRgtCy0LAg0LrRg9C60YPRgNGD0LfRiyDigJMg0LLRi9GB0L7QutC+0LUg0YHQvtC00LXRgNC20LDQvdC40LUg0LrQsNC70LjRjywg0YTQvtGB0YTQvtGA0LAg0Lgg0LLQuNGC0LDQvNC40L3QvtCyINC00LXRhNC40YbQuNGC0L3QvtC5INCz0YDRg9C/0L/Riy4g0JHQtdC70L7QuiDQutGD0LrRg9GA0YPQt9GLINGB0L7QtNC10YDQttC40YIg0YDRj9C0INCw0LzQuNC90L7QutC40YHQu9C+0YIsINGP0LLQu9GP0Y7RidC40YXRgdGPINC90LXQt9Cw0LzQtdC90LjQvNGL0LzQuCDQtNC70Y8g0L7RgNCz0LDQvdC40LfQvNCwINGH0LXQu9C+0LLQtdC60LAuINCf0YDQvtC40LfQstC+0LTRgdGC0LLQviDQutGD0LrRg9GA0YPQt9C90L7Qs9C+INC80LDRgdC70LAg0Lgg0LzRg9C60Lgg4oCTINC10YnRkSDQvtC00L3QsCDRgdGC0L7RgNC+0L3QsCDQv9C+0LvRjNC30LAg0Y3RgtC+0Lkg0LrRg9C70YzRgtGD0YDRiyDQtNC70Y8g0L/QuNGJ0LXQstC+0Lkg0L/RgNC+0LzRi9GI0LvQtdC90L3QvtGB0YLQuC4gIFxcbicgK1xyXG4gICAgICAgICAgICAgICfQn9C+0LrQsNC30LDRgtC10LvQuCDQutCw0YfQtdGB0YLQstCwINGB0L7Qs9C70LDRgdC90L4g0L/RgNCw0LnRgS3Qu9C40YHRgtGDLiDQl9Cw0YDQsNC20LXQvdC90L7RgdGC0Ywg0L3QtSDQtNC+0L/Rg9GB0LrQsNC10YLRgdGPLiDQkdC10Lcg0YHQvtC00LXRgNC20LDQvdC40Y8g0JPQnNCeLicsXHJcbiAgICAgICAgICAgIHByaWNlUGFnZVVybDogJ1ByaWNlTGlzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYWN0aXZlUHJvZHVjdEluZGV4OiAwLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBjaGFuZ2VQcm9kdWN0KGRpcmVjdGlvbikge1xyXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmFjdGl2ZVByb2R1Y3RJbmRleDtcclxuICAgICAgICBjdXJyZW50SW5kZXggKz0gZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gdGhpcy5wcm9kdWN0cy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09PSB0aGlzLnByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUHJvZHVjdEluZGV4ID0gY3VycmVudEluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRlbnRcIn0sW19jKCdzZWN0aW9uJyx7c3RhdGljQ2xhc3M6XCJwcm9kdWN0cy1wYWdlXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwcm9kdWN0cy1wYWdlX193cmFwcGVyXCJ9LFtfYygnaDEnLHtzdGF0aWNDbGFzczpcInByb2R1Y3RzLXBhZ2VfX3RpdGxlXCJ9LFtfdm0uX3YoXCLQn9GA0L7QtNGD0LrRhtC40Y9cIildKSxfdm0uX3YoXCIgXCIpLF92bS5fbSgwKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInByb2R1Y3RzLXBhZ2VfX2dhbGxlcnlcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInByb2R1Y3RzLXBhZ2VfX2ltZy1ib3hcIn0sX3ZtLl9sKChfdm0ucHJvZHVjdHMpLGZ1bmN0aW9uKHByb2R1Y3QsaW5kZXgpe3JldHVybiBfYygnaW1nJyx7a2V5OnByb2R1Y3QuaWQsY2xhc3M6Wydwcm9kdWN0cy1wYWdlX19pbWcnLCB7J3Byb2R1Y3RzLXBhZ2VfX2ltZy0tYWN0aXZlJzogaW5kZXggPT09IF92bS5hY3RpdmVQcm9kdWN0SW5kZXh9XSxhdHRyczp7XCJzcmNcIjpwcm9kdWN0LmltZyxcImFsdFwiOnByb2R1Y3QubmFtZX19KX0pLDApLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicHJvZHVjdHMtcGFnZV9fcHJvZHVjdC1kZXNjcmlwdGlvbi1ib3hcIn0sW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJwcm9kdWN0cy1wYWdlX19wcm9kdWN0LW5hbWVcIn0sW192bS5fdihfdm0uX3MoX3ZtLnByb2R1Y3RzW192bS5hY3RpdmVQcm9kdWN0SW5kZXhdLm5hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcInByb2R1Y3RzLXBhZ2VfX3Byb2R1Y3QtZGVzY3JpcHRpb25cIn0sW192bS5fdihfdm0uX3MoX3ZtLnByb2R1Y3RzW192bS5hY3RpdmVQcm9kdWN0SW5kZXhdLmRlc2NyaXB0aW9uKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInByb2R1Y3RzLXBhZ2VfX2FjdGlvbi1ib3hcIn0sW19jKCdyb3V0ZXItbGluaycse3N0YXRpY0NsYXNzOlwicHJvZHVjdHMtcGFnZV9fcHJpY2UtYnRuXCIsYXR0cnM6e1widG9cIjp7bmFtZTogX3ZtLnByb2R1Y3RzW192bS5hY3RpdmVQcm9kdWN0SW5kZXhdLnByaWNlUGFnZVVybH0sXCJ0YWdcIjpcImFcIn19LFtfdm0uX3YoXCLQn9GA0LDQudGBLdC70LjRgdGCXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwcm9kdWN0cy1wYWdlX19uYXZpZ2F0aW9uLWJveFwifSxbX2MoJ2J1dHRvbicse3N0YXRpY0NsYXNzOlwicHJvZHVjdHMtcGFnZV9fbmF2aWdhdGlvbi1idG5cIixhdHRyczp7XCJ0eXBlXCI6XCJidXR0b25cIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlUHJvZHVjdCgtMSl9fX0sW19jKCdzdmcnLHtzdGF0aWNDbGFzczpcInByb2R1Y3RzLXBhZ2VfX25hdmlnYXRpb24taWNvblwiLGF0dHJzOntcIndpZHRoXCI6XCIxNFwiLFwiaGVpZ2h0XCI6XCIxNFwifX0sW19jKCd1c2UnLHthdHRyczp7XCJ4bGluazpocmVmXCI6XCIjaWNvbi1hcnJvd1wifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcInByb2R1Y3RzLXBhZ2VfX25hdmlnYXRpb24tYnRuXCIsYXR0cnM6e1widHlwZVwiOlwiYnV0dG9uXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVByb2R1Y3QoKzEpfX19LFtfYygnc3ZnJyx7c3RhdGljQ2xhc3M6XCJwcm9kdWN0cy1wYWdlX19uYXZpZ2F0aW9uLWljb25cIixhdHRyczp7XCJ3aWR0aFwiOlwiMTRcIixcImhlaWdodFwiOlwiMTRcIn19LFtfYygndXNlJyx7YXR0cnM6e1wieGxpbms6aHJlZlwiOlwiI2ljb24tYXJyb3dcIn19KV0pXSldKV0sMSldKV0pXSldKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJwcm9kdWN0cy1wYWdlX19kZXNjcmlwdGlvblwifSxbX2MoJ2InLFtfdm0uX3YoXCLQkNCT0KDQntCS0JjQl9CQXCIpXSksX3ZtLl92KFwiINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgiDQvtC/0YLQvtCy0YvQtSDQt9Cw0LrRg9C/0LrQuCDQv9GI0LXQvdC40YbRiywg0LrRg9C60YPRgNGD0LfRiywg0Y/Rh9C80LXQvdGPLCDQsdC+0LHQvtCy0YvRhSDQuCDQvNCw0YHQu9C40YfQvdGL0YUg0LrRg9C70YzRgtGD0YAg0L/RgNC4INGD0YHQu9C+0LLQuNC4INGB0L7QvtGC0LLQtdGC0YHRgtCy0LjRjyDRg9GA0L7QttCw0Y8g0LDQutGC0YPQsNC70YzQvdGL0Lwg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C8INGB0YLQsNC90LTQsNGA0YLQsNC8ICjQk9Ce0KHQoiA5MzUzLTIwMTYsINCT0J7QodCiIDEzNjM0LTkwLCDQk9Ce0KHQoiAyODY3Mi05MC/Qk9Ce0KHQoiA1MzkwMC0yMDEwLCDQk9Ce0KHQoiAxNzEwOS04OCDQuCDQtNGALikuINCc0Ysg0L/RgNC10LTQu9Cw0LPQsNC10Lwg0L7Qv9GC0LjQvNCw0LvRjNC90YvQtSDQt9Cw0LrRg9C/0L7Rh9C90YvQtSDRhtC10L3Riywg0YPQtNC+0LHQvdGL0LUg0YHRhdC10LzRiyDRgNCw0LHQvtGC0YssINGH0LXRgtC60L7QtSDRgdC+0LHQu9GO0LTQtdC90LjQtSDRgdGA0L7QutC+0LIg0L7Qv9C70LDRgtGLINC4INC+0L/QtdGA0LDRgtC40LLQvdC+0LUg0YHQvtC/0YDQvtCy0L7QttC00LXQvdC40LUg0LLRgdC10YUg0YHQstC+0LjRhSDQv9C+0YHRgtCw0LLQvtC6LiBcIildKX1dXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL3dwLWNvbnRlbnQvdGhlbWVzL2Fncm92aXNhL2Rpc3QvaW1nL3Byb2R1Y3QtcGFnZS1pbWcxLmpwZz92PTk1MTI4ZGI0MDIzZDQ0YWNiMGFkMmRlMTNkM2FhMjMwXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi93cC1jb250ZW50L3RoZW1lcy9hZ3JvdmlzYS9kaXN0L2ltZy9wcm9kdWN0LXBhZ2UtaW1nMi5qcGc/dj00ZTNmMGFlMjU5YjdhNDdjMTk0N2UyNmYyZTYxNzAwYVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvd3AtY29udGVudC90aGVtZXMvYWdyb3Zpc2EvZGlzdC9pbWcvcHJvZHVjdC1wYWdlLWltZzMuanBnP3Y9MTIwMGViMzA4ZDQ1NzYxY2FkZGZmNDVmOTI0ZmIwMDJcIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2R1Y3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDUxMmU4YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9kdWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2R1Y3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZHVjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9kdWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZHVjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkNTEyZThjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==