(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["price-list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PriceList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PriceList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CallbackPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CallbackPopup */ "./src/components/CallbackPopup.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PriceList',
  components: {
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default()),
    CallbackPopup: _components_CallbackPopup__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    return {
      openCallbackPopup: false,
      regions: null,
      selectedRegion: null,
      elevators: null,
      selectedElevator: null,
      productsFilter: null,
      selectedProduct: null,
      products: null
    };
  },

  methods: {
    resetFilter() {
      this.selectedRegion = null;
      this.selectedElevator = null;
      this.selectedProduct = null;
    }

  },
  computed: {
    filteredProducts() {
      let productsList = this.products;

      if (this.selectedRegion) {
        productsList = productsList.filter(item => item.regions.some(region => region.id === this.selectedRegion.id));
      }

      if (this.selectedElevator) {
        productsList = productsList.filter(item => item.elevators.some(elevator => elevator.id === this.selectedElevator.id));
      }

      if (this.selectedProduct) {
        productsList = productsList.filter(item => item.product.product_type === this.selectedProduct.id);
      }

      return productsList;
    },

    sortedRegions() {
      const newRegions = JSON.parse(JSON.stringify(this.regions));
      return newRegions.sort(function (a, b) {
        const regionA = a.Name.toLowerCase();
        const regionB = b.Name.toLowerCase();

        if (regionA < regionB) {
          return -1;
        }

        if (regionA > regionB) {
          return 1;
        }

        return 0;
      });
    },

    sortedElevators() {
      const newElevators = JSON.parse(JSON.stringify(this.elevators));
      return newElevators.sort(function (a, b) {
        const elevatorA = a.Name.toLowerCase();
        const elevatorB = b.Name.toLowerCase();

        if (elevatorA < elevatorB) {
          return -1;
        }

        if (elevatorA > elevatorB) {
          return 1;
        }

        return 0;
      });
    }

  },
  filters: {
    formattedPrice(value) {
      return value ? value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.') + ' р/т' : '-';
    }

  },

  beforeCreate() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3001/api/price-lists').then(response => {
      this.products = response.data;
    }).catch(error => {
      this.products = [];
      console.log(error);
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3001/api/regions').then(response => {
      this.regions = response.data;
    }).catch(error => {
      this.regions = [];
      console.log(error);
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3001/api/elevators').then(response => {
      this.elevators = response.data;
    }).catch(error => {
      this.elevators = [];
      console.log(error);
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3001/api/product-types').then(response => {
      this.productsFilter = response.data;
    }).catch(error => {
      this.productsFilter = [];
      console.log(error);
    });
  }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PriceList.vue?vue&type=template&id=fd6457b4&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PriceList.vue?vue&type=template&id=fd6457b4& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('section',{staticClass:"price-list"},[_c('div',{staticClass:"price-list__wrapper"},[_c('div',{staticClass:"price-list__filter"},[(_vm.regions)?_c('multiselect',{staticClass:"price-list__multiselect",attrs:{"options":_vm.sortedRegions,"searchable":false,"close-on-select":true,"show-labels":false,"placeholder":"Область","label":"Name"},scopedSlots:_vm._u([{key:"option",fn:function(props){return [_c('span',{staticClass:"price-list__checkbox"}),_vm._v(" "),_c('p',{staticClass:"price-list__option-text"},[_vm._v(_vm._s(props.option.Name))])]}}],null,false,3553495877),model:{value:(_vm.selectedRegion),callback:function ($$v) {_vm.selectedRegion=$$v},expression:"selectedRegion"}}):_vm._e(),_vm._v(" "),(_vm.elevators)?_c('multiselect',{staticClass:"price-list__multiselect",attrs:{"options":_vm.sortedElevators,"searchable":false,"close-on-select":true,"show-labels":false,"placeholder":"Элеватор","label":"Name"},scopedSlots:_vm._u([{key:"option",fn:function(props){return [_c('span',{staticClass:"price-list__checkbox"}),_vm._v(" "),_c('p',{staticClass:"price-list__option-text"},[_vm._v(_vm._s(props.option.Name))])]}}],null,false,3553495877),model:{value:(_vm.selectedElevator),callback:function ($$v) {_vm.selectedElevator=$$v},expression:"selectedElevator"}}):_vm._e(),_vm._v(" "),(_vm.productsFilter)?_c('multiselect',{staticClass:"price-list__multiselect",attrs:{"options":_vm.productsFilter,"searchable":false,"close-on-select":true,"show-labels":false,"placeholder":"С/Х культура","label":"Name"},scopedSlots:_vm._u([{key:"option",fn:function(props){return [_c('span',{staticClass:"price-list__checkbox"}),_vm._v(" "),_c('p',{staticClass:"price-list__option-text"},[_vm._v(_vm._s(props.option.Name))])]}}],null,false,3553495877),model:{value:(_vm.selectedProduct),callback:function ($$v) {_vm.selectedProduct=$$v},expression:"selectedProduct"}}):_vm._e(),_vm._v(" "),_c('button',{staticClass:"price-list__reset-btn",attrs:{"type":"button"},on:{"click":_vm.resetFilter}},[_vm._v("Сбросить фильтр")])],1),_vm._v(" "),_c('div',{staticClass:"price-list__results"},[_c('div',{staticClass:"price-list__company-info"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"price-list__company-right-box"},[_c('button',{staticClass:"price-list__contact-btn",on:{"click":function($event){_vm.openCallbackPopup = true}}},[_vm._v("Связаться с нами")])])]),_vm._v(" "),(_vm.products)?_c('table',{staticClass:"price-list__result-table"},[_vm._m(1),_vm._v(" "),_vm._l((_vm.filteredProducts),function(product){return _c('tr',{key:product.id},[_c('td',[_c('p',{staticClass:"price-list__table-title"},[_vm._v(_vm._s(product.product.Name))]),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(product.product.Description),expression:"product.product.Description"}],staticClass:"price-list__table-text"},[_vm._v(_vm._s(product.product.Description))]),_vm._v(" "),_c('div',{staticClass:"price-list__table-regions"},_vm._l((product.regions),function(region){return _c('p',{key:region.id,staticClass:"price-list__table-region"},[_vm._v(_vm._s(region.Name))])}),0),_vm._v(" "),_c('div',{staticClass:"price-list__table-elevators"},_vm._l((product.elevators),function(elevator){return _c('p',{key:elevator.id,staticClass:"price-list__table-elevator"},[_vm._v(_vm._s(elevator.Name))])}),0)]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("formattedPrice")(product.Price)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("formattedPrice")(product.PriceVAT)))])])})],2):_vm._e()])])]),_vm._v(" "),_c('CallbackPopup',{attrs:{"opened":_vm.openCallbackPopup},on:{"close-popup":function($event){_vm.openCallbackPopup = false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"price-list__company-left-box"},[_c('p',{staticClass:"price-list__company-description"},[_vm._v("Цены (руб/т) действуют с 14.07.2020 с 00:00")]),_vm._v(" "),_c('p',{staticClass:"price-list__company-description"},[_vm._v("Базис поставки - СРТ")]),_vm._v(" "),_c('p',{staticClass:"price-list__company-description"},[_vm._v("Ждем Ваших звонков:")]),_vm._v(" "),_c('p',{staticClass:"price-list__company-description"},[_vm._v("тел. +7 939 714-55-55 (Дмитрий)")]),_vm._v(" "),_c('p',{staticClass:"price-list__company-description"},[_vm._v("8 (800) 555-28-26")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',[_vm._v("Продукция")]),_vm._v(" "),_c('th',[_vm._v("Цена")]),_vm._v(" "),_c('th',[_vm._v("Цена + НДС")])])}]



/***/ }),

/***/ "./src/views/PriceList.vue":
/*!*********************************!*\
  !*** ./src/views/PriceList.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceList_vue_vue_type_template_id_fd6457b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceList.vue?vue&type=template&id=fd6457b4& */ "./src/views/PriceList.vue?vue&type=template&id=fd6457b4&");
/* harmony import */ var _PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceList.vue?vue&type=script&lang=js& */ "./src/views/PriceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PriceList_vue_vue_type_template_id_fd6457b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PriceList_vue_vue_type_template_id_fd6457b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/PriceList.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/views/PriceList.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PriceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/PriceList.vue?vue&type=template&id=fd6457b4&":
/*!****************************************************************!*\
  !*** ./src/views/PriceList.vue?vue&type=template&id=fd6457b4& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_fd6457b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=template&id=fd6457b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/PriceList.vue?vue&type=template&id=fd6457b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_fd6457b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_fd6457b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL1ByaWNlTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1ByaWNlTGlzdC52dWU/ZDY3OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUHJpY2VMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUHJpY2VMaXN0LnZ1ZT9iMTMyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9QcmljZUxpc3QudnVlPzQ4YjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLG1CQURBO0FBRUE7QUFDQSx5RUFEQTtBQUVBO0FBRkEsR0FGQTs7QUFNQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxtQkFGQTtBQUdBLDBCQUhBO0FBSUEscUJBSkE7QUFLQSw0QkFMQTtBQU1BLDBCQU5BO0FBT0EsMkJBUEE7QUFRQTtBQVJBO0FBVUEsR0FqQkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQSxHQWxCQTtBQXlCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQWpCQTs7QUFrQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FiQTtBQWNBLEtBbkNBOztBQW9DQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQWJBO0FBY0E7O0FBckRBLEdBekJBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBaEZBOztBQXFGQTtBQUNBLDhGQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsS0FIQSxFQUlBLEtBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsMEZBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxLQUhBLEVBSUEsS0FKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFTQSw0RkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBLEtBSEEsRUFJQSxLQUpBLENBSUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLGdHQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsS0FIQSxFQUlBLEtBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUE7O0FBekhBLEc7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUFBO0FBQUE7QUFBQSwwQkFBMEIsYUFBYSwwQkFBMEIsd0JBQXdCLGlCQUFpQixzQkFBc0IsZ0JBQWdCLHlCQUF5QixZQUFZLGtDQUFrQyxZQUFZLGlDQUFpQyxrQ0FBa0MsNkNBQTZDLGlJQUFpSSxzQkFBc0IsZ0NBQWdDLG1CQUFtQixtQ0FBbUMsc0JBQXNCLHNDQUFzQyx3Q0FBd0MsZ0NBQWdDLG9EQUFvRCx1QkFBdUIsOEJBQThCLHlEQUF5RCw2Q0FBNkMsb0lBQW9JLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLG1DQUFtQyxzQkFBc0Isc0NBQXNDLHdDQUF3QyxnQ0FBZ0Msc0RBQXNELHlCQUF5QixnQ0FBZ0MsOERBQThELDZDQUE2Qyx1SUFBdUksc0JBQXNCLGdDQUFnQyxtQkFBbUIsbUNBQW1DLHNCQUFzQixzQ0FBc0Msd0NBQXdDLGdDQUFnQyxxREFBcUQsd0JBQXdCLCtCQUErQixvQ0FBb0MsMkNBQTJDLGdCQUFnQixLQUFLLHlCQUF5Qix3REFBd0Qsa0NBQWtDLFlBQVksdUNBQXVDLGtDQUFrQyw0Q0FBNEMsZUFBZSwwQ0FBMEMseUJBQXlCLCtCQUErQiwwRUFBMEUsdUNBQXVDLHdFQUF3RSxnQkFBZ0IsZUFBZSxtQkFBbUIsc0NBQXNDLDZEQUE2RCxhQUFhLDBHQUEwRyx1Q0FBdUMsc0VBQXNFLHdDQUF3QywyQ0FBMkMsZUFBZSxxREFBcUQsZ0NBQWdDLDJCQUEyQiwwQ0FBMEMsK0NBQStDLGVBQWUseURBQXlELGtDQUFrQywwS0FBMEsscURBQXFELE9BQU8sK0JBQStCLEtBQUssK0JBQStCLGdDQUFnQztBQUM3cEgsb0NBQW9DLGFBQWEsMEJBQTBCLHdCQUF3QixpQkFBaUIsMkNBQTJDLFVBQVUsOENBQThDLDhFQUE4RSw4Q0FBOEMsdURBQXVELDhDQUE4QyxzREFBc0QsOENBQThDLGtFQUFrRSw4Q0FBOEMsa0NBQWtDLGNBQWMsYUFBYSwwQkFBMEIsd0JBQXdCLG1JQUFtSTs7Ozs7Ozs7Ozs7Ozs7QUNEOTNCO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGdGOzs7Ozs7Ozs7Ozs7QUNsQmY7QUFBQTtBQUFBLHdDQUFpTCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic2NyaXB0cy9wcmljZS1saXN0LmpzP3Y9NzY3NTUzMzgyYzJlMTgzNjA2ODYiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwcmljZS1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtbGlzdF9fd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtbGlzdF9fZmlsdGVyXCI+XG4gICAgICAgICAgPG11bHRpc2VsZWN0XG4gICAgICAgICAgICAgIHYtaWY9XCJyZWdpb25zXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkUmVnaW9uXCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzb3J0ZWRSZWdpb25zXCJcbiAgICAgICAgICAgICAgOnNlYXJjaGFibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIDpjbG9zZS1vbi1zZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgOnNob3ctbGFiZWxzPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCe0LHQu9Cw0YHRgtGMXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwcmljZS1saXN0X19tdWx0aXNlbGVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25cIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1saXN0X19jaGVja2JveFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZS1saXN0X19vcHRpb24tdGV4dFwiPnt7cHJvcHMub3B0aW9uLk5hbWV9fTwvcD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9tdWx0aXNlbGVjdD5cbiAgICAgICAgICA8bXVsdGlzZWxlY3RcbiAgICAgICAgICAgICAgdi1pZj1cImVsZXZhdG9yc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZEVsZXZhdG9yXCJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzb3J0ZWRFbGV2YXRvcnNcIlxuICAgICAgICAgICAgICA6c2VhcmNoYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgOmNsb3NlLW9uLXNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgICA6c2hvdy1sYWJlbHM9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0K3Qu9C10LLQsNGC0L7RgFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicHJpY2UtbGlzdF9fbXVsdGlzZWxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwib3B0aW9uXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGlzdF9fY2hlY2tib3hcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2UtbGlzdF9fb3B0aW9uLXRleHRcIj57e3Byb3BzLm9wdGlvbi5OYW1lfX08L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvbXVsdGlzZWxlY3Q+XG4gICAgICAgICAgPG11bHRpc2VsZWN0XG4gICAgICAgICAgICAgIHYtaWY9XCJwcm9kdWN0c0ZpbHRlclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFByb2R1Y3RcIlxuICAgICAgICAgICAgICA6b3B0aW9ucz1cInByb2R1Y3RzRmlsdGVyXCJcbiAgICAgICAgICAgICAgOnNlYXJjaGFibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIDpjbG9zZS1vbi1zZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgOnNob3ctbGFiZWxzPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItChL9ClINC60YPQu9GM0YLRg9GA0LBcIlxuICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICBjbGFzcz1cInByaWNlLWxpc3RfX211bHRpc2VsZWN0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm9wdGlvblwiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLWxpc3RfX2NoZWNrYm94XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlLWxpc3RfX29wdGlvbi10ZXh0XCI+e3twcm9wcy5vcHRpb24uTmFtZX19PC9wPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L211bHRpc2VsZWN0PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJpY2UtbGlzdF9fcmVzZXQtYnRuXCIgQGNsaWNrPVwicmVzZXRGaWx0ZXJcIj7QodCx0YDQvtGB0LjRgtGMINGE0LjQu9GM0YLRgDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLWxpc3RfX3Jlc3VsdHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtbGlzdF9fY29tcGFueS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtbGlzdF9fY29tcGFueS1sZWZ0LWJveFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlLWxpc3RfX2NvbXBhbnktZGVzY3JpcHRpb25cIj7QptC10L3RiyAo0YDRg9CxL9GCKSDQtNC10LnRgdGC0LLRg9GO0YIg0YEgMTQuMDcuMjAyMCDRgSAwMDowMDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZS1saXN0X19jb21wYW55LWRlc2NyaXB0aW9uXCI+0JHQsNC30LjRgSDQv9C+0YHRgtCw0LLQutC4IC0g0KHQoNCiPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlLWxpc3RfX2NvbXBhbnktZGVzY3JpcHRpb25cIj7QltC00LXQvCDQktCw0YjQuNGFINC30LLQvtC90LrQvtCyOjwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZS1saXN0X19jb21wYW55LWRlc2NyaXB0aW9uXCI+0YLQtdC7LiArNyA5MzkgNzE0LTU1LTU1ICjQlNC80LjRgtGA0LjQuSk8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2UtbGlzdF9fY29tcGFueS1kZXNjcmlwdGlvblwiPjggKDgwMCkgNTU1LTI4LTI2PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2UtbGlzdF9fY29tcGFueS1yaWdodC1ib3hcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaWNlLWxpc3RfX2NvbnRhY3QtYnRuXCIgQGNsaWNrPVwib3BlbkNhbGxiYWNrUG9wdXAgPSB0cnVlXCI+0KHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJwcmljZS1saXN0X19yZXN1bHQtdGFibGVcIiB2LWlmPVwicHJvZHVjdHNcIj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPtCf0YDQvtC00YPQutGG0LjRjzwvdGg+XG4gICAgICAgICAgICAgIDx0aD7QptC10L3QsDwvdGg+XG4gICAgICAgICAgICAgIDx0aD7QptC10L3QsCArINCd0JTQoTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIHYtZm9yPVwicHJvZHVjdCBpbiBmaWx0ZXJlZFByb2R1Y3RzXCIgOmtleT1cInByb2R1Y3QuaWRcIj5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2UtbGlzdF9fdGFibGUtdGl0bGVcIj57eyBwcm9kdWN0LnByb2R1Y3QuTmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlLWxpc3RfX3RhYmxlLXRleHRcIiB2LXNob3c9XCJwcm9kdWN0LnByb2R1Y3QuRGVzY3JpcHRpb25cIj57eyBwcm9kdWN0LnByb2R1Y3QuRGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLWxpc3RfX3RhYmxlLXJlZ2lvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2UtbGlzdF9fdGFibGUtcmVnaW9uXCIgdi1mb3I9XCJyZWdpb24gaW4gcHJvZHVjdC5yZWdpb25zXCIgOmtleT1cInJlZ2lvbi5pZFwiPnt7IHJlZ2lvbi5OYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1saXN0X190YWJsZS1lbGV2YXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2UtbGlzdF9fdGFibGUtZWxldmF0b3JcIiB2LWZvcj1cImVsZXZhdG9yIGluIHByb2R1Y3QuZWxldmF0b3JzXCIgOmtleT1cImVsZXZhdG9yLmlkXCI+e3sgZWxldmF0b3IuTmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt7IHByb2R1Y3QuUHJpY2UgfCBmb3JtYXR0ZWRQcmljZSB9fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57eyBwcm9kdWN0LlByaWNlVkFUIHwgZm9ybWF0dGVkUHJpY2UgfX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Q2FsbGJhY2tQb3B1cCA6b3BlbmVkPVwib3BlbkNhbGxiYWNrUG9wdXBcIiBAY2xvc2UtcG9wdXA9XCJvcGVuQ2FsbGJhY2tQb3B1cCA9IGZhbHNlXCIvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBNdWx0aXNlbGVjdCBmcm9tICd2dWUtbXVsdGlzZWxlY3QnXG4gIGltcG9ydCBDYWxsYmFja1BvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsbGJhY2tQb3B1cCdcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnUHJpY2VMaXN0JyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBNdWx0aXNlbGVjdCxcbiAgICAgIENhbGxiYWNrUG9wdXAsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BlbkNhbGxiYWNrUG9wdXA6IGZhbHNlLFxuICAgICAgICByZWdpb25zOiBudWxsLFxuICAgICAgICBzZWxlY3RlZFJlZ2lvbjogbnVsbCxcbiAgICAgICAgZWxldmF0b3JzOiBudWxsLFxuICAgICAgICBzZWxlY3RlZEVsZXZhdG9yOiBudWxsLFxuICAgICAgICBwcm9kdWN0c0ZpbHRlcjogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0OiBudWxsLFxuICAgICAgICBwcm9kdWN0czogbnVsbCxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHJlc2V0RmlsdGVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVsZXZhdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3QgPSBudWxsO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBmaWx0ZXJlZFByb2R1Y3RzKCkge1xuICAgICAgICBsZXQgcHJvZHVjdHNMaXN0ID0gdGhpcy5wcm9kdWN0cztcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFJlZ2lvbikge1xuICAgICAgICAgIHByb2R1Y3RzTGlzdCA9IHByb2R1Y3RzTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlZ2lvbnMuc29tZShyZWdpb24gPT4gcmVnaW9uLmlkID09PSB0aGlzLnNlbGVjdGVkUmVnaW9uLmlkKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEVsZXZhdG9yKSB7XG4gICAgICAgICAgcHJvZHVjdHNMaXN0ID0gcHJvZHVjdHNMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uZWxldmF0b3JzLnNvbWUoZWxldmF0b3IgPT4gZWxldmF0b3IuaWQgPT09IHRoaXMuc2VsZWN0ZWRFbGV2YXRvci5pZCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm9kdWN0KSB7XG4gICAgICAgICAgcHJvZHVjdHNMaXN0ID0gcHJvZHVjdHNMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ucHJvZHVjdC5wcm9kdWN0X3R5cGUgPT09IHRoaXMuc2VsZWN0ZWRQcm9kdWN0LmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9kdWN0c0xpc3Q7XG4gICAgICB9LFxuICAgICAgc29ydGVkUmVnaW9ucygpIHtcbiAgICAgICAgY29uc3QgbmV3UmVnaW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5yZWdpb25zKSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1JlZ2lvbnMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgY29uc3QgcmVnaW9uQSA9IGEuTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGNvbnN0IHJlZ2lvbkIgPSBiLk5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChyZWdpb25BIDwgcmVnaW9uQikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZWdpb25BID4gcmVnaW9uQikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc29ydGVkRWxldmF0b3JzKCkge1xuICAgICAgICBjb25zdCBuZXdFbGV2YXRvcnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZWxldmF0b3JzKSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZXZhdG9ycy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICBjb25zdCBlbGV2YXRvckEgPSBhLk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBjb25zdCBlbGV2YXRvckIgPSBiLk5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChlbGV2YXRvckEgPCBlbGV2YXRvckIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWxldmF0b3JBID4gZWxldmF0b3JCKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBmb3JtYXR0ZWRQcmljZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxLicpICsgJyDRgC/RgicgOiAnLSc7XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvcHJpY2UtbGlzdHMnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9yZWdpb25zJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMucmVnaW9ucyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5yZWdpb25zID0gW107XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2VsZXZhdG9ycycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLmVsZXZhdG9ycyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5lbGV2YXRvcnMgPSBbXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvcHJvZHVjdC10eXBlcycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzRmlsdGVyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzRmlsdGVyID0gW107XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGVudFwifSxbX2MoJ3NlY3Rpb24nLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX3dyYXBwZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX2ZpbHRlclwifSxbKF92bS5yZWdpb25zKT9fYygnbXVsdGlzZWxlY3QnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX211bHRpc2VsZWN0XCIsYXR0cnM6e1wib3B0aW9uc1wiOl92bS5zb3J0ZWRSZWdpb25zLFwic2VhcmNoYWJsZVwiOmZhbHNlLFwiY2xvc2Utb24tc2VsZWN0XCI6dHJ1ZSxcInNob3ctbGFiZWxzXCI6ZmFsc2UsXCJwbGFjZWhvbGRlclwiOlwi0J7QsdC70LDRgdGC0YxcIixcImxhYmVsXCI6XCJOYW1lXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcIm9wdGlvblwiLGZuOmZ1bmN0aW9uKHByb3BzKXtyZXR1cm4gW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X19jaGVja2JveFwifSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fb3B0aW9uLXRleHRcIn0sW192bS5fdihfdm0uX3MocHJvcHMub3B0aW9uLk5hbWUpKV0pXX19XSxudWxsLGZhbHNlLDM1NTM0OTU4NzcpLG1vZGVsOnt2YWx1ZTooX3ZtLnNlbGVjdGVkUmVnaW9uKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnNlbGVjdGVkUmVnaW9uPSQkdn0sZXhwcmVzc2lvbjpcInNlbGVjdGVkUmVnaW9uXCJ9fSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmVsZXZhdG9ycyk/X2MoJ211bHRpc2VsZWN0Jyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X19tdWx0aXNlbGVjdFwiLGF0dHJzOntcIm9wdGlvbnNcIjpfdm0uc29ydGVkRWxldmF0b3JzLFwic2VhcmNoYWJsZVwiOmZhbHNlLFwiY2xvc2Utb24tc2VsZWN0XCI6dHJ1ZSxcInNob3ctbGFiZWxzXCI6ZmFsc2UsXCJwbGFjZWhvbGRlclwiOlwi0K3Qu9C10LLQsNGC0L7RgFwiLFwibGFiZWxcIjpcIk5hbWVcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5Olwib3B0aW9uXCIsZm46ZnVuY3Rpb24ocHJvcHMpe3JldHVybiBbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX2NoZWNrYm94XCJ9KSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X19vcHRpb24tdGV4dFwifSxbX3ZtLl92KF92bS5fcyhwcm9wcy5vcHRpb24uTmFtZSkpXSldfX1dLG51bGwsZmFsc2UsMzU1MzQ5NTg3NyksbW9kZWw6e3ZhbHVlOihfdm0uc2VsZWN0ZWRFbGV2YXRvciksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5zZWxlY3RlZEVsZXZhdG9yPSQkdn0sZXhwcmVzc2lvbjpcInNlbGVjdGVkRWxldmF0b3JcIn19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0ucHJvZHVjdHNGaWx0ZXIpP19jKCdtdWx0aXNlbGVjdCcse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fbXVsdGlzZWxlY3RcIixhdHRyczp7XCJvcHRpb25zXCI6X3ZtLnByb2R1Y3RzRmlsdGVyLFwic2VhcmNoYWJsZVwiOmZhbHNlLFwiY2xvc2Utb24tc2VsZWN0XCI6dHJ1ZSxcInNob3ctbGFiZWxzXCI6ZmFsc2UsXCJwbGFjZWhvbGRlclwiOlwi0KEv0KUg0LrRg9C70YzRgtGD0YDQsFwiLFwibGFiZWxcIjpcIk5hbWVcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5Olwib3B0aW9uXCIsZm46ZnVuY3Rpb24ocHJvcHMpe3JldHVybiBbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX2NoZWNrYm94XCJ9KSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X19vcHRpb24tdGV4dFwifSxbX3ZtLl92KF92bS5fcyhwcm9wcy5vcHRpb24uTmFtZSkpXSldfX1dLG51bGwsZmFsc2UsMzU1MzQ5NTg3NyksbW9kZWw6e3ZhbHVlOihfdm0uc2VsZWN0ZWRQcm9kdWN0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnNlbGVjdGVkUHJvZHVjdD0kJHZ9LGV4cHJlc3Npb246XCJzZWxlY3RlZFByb2R1Y3RcIn19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX3Jlc2V0LWJ0blwiLGF0dHJzOntcInR5cGVcIjpcImJ1dHRvblwifSxvbjp7XCJjbGlja1wiOl92bS5yZXNldEZpbHRlcn19LFtfdm0uX3YoXCLQodCx0YDQvtGB0LjRgtGMINGE0LjQu9GM0YLRgFwiKV0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX3Jlc3VsdHNcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX2NvbXBhbnktaW5mb1wifSxbX3ZtLl9tKDApLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fY29tcGFueS1yaWdodC1ib3hcIn0sW19jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX2NvbnRhY3QtYnRuXCIsb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5vcGVuQ2FsbGJhY2tQb3B1cCA9IHRydWV9fX0sW192bS5fdihcItCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuFwiKV0pXSldKSxfdm0uX3YoXCIgXCIpLChfdm0ucHJvZHVjdHMpP19jKCd0YWJsZScse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fcmVzdWx0LXRhYmxlXCJ9LFtfdm0uX20oMSksX3ZtLl92KFwiIFwiKSxfdm0uX2woKF92bS5maWx0ZXJlZFByb2R1Y3RzKSxmdW5jdGlvbihwcm9kdWN0KXtyZXR1cm4gX2MoJ3RyJyx7a2V5OnByb2R1Y3QuaWR9LFtfYygndGQnLFtfYygncCcse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fdGFibGUtdGl0bGVcIn0sW192bS5fdihfdm0uX3MocHJvZHVjdC5wcm9kdWN0Lk5hbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6KHByb2R1Y3QucHJvZHVjdC5EZXNjcmlwdGlvbiksZXhwcmVzc2lvbjpcInByb2R1Y3QucHJvZHVjdC5EZXNjcmlwdGlvblwifV0sc3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X190YWJsZS10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKHByb2R1Y3QucHJvZHVjdC5EZXNjcmlwdGlvbikpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X190YWJsZS1yZWdpb25zXCJ9LF92bS5fbCgocHJvZHVjdC5yZWdpb25zKSxmdW5jdGlvbihyZWdpb24pe3JldHVybiBfYygncCcse2tleTpyZWdpb24uaWQsc3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X190YWJsZS1yZWdpb25cIn0sW192bS5fdihfdm0uX3MocmVnaW9uLk5hbWUpKV0pfSksMCksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X190YWJsZS1lbGV2YXRvcnNcIn0sX3ZtLl9sKChwcm9kdWN0LmVsZXZhdG9ycyksZnVuY3Rpb24oZWxldmF0b3Ipe3JldHVybiBfYygncCcse2tleTplbGV2YXRvci5pZCxzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX3RhYmxlLWVsZXZhdG9yXCJ9LFtfdm0uX3YoX3ZtLl9zKGVsZXZhdG9yLk5hbWUpKV0pfSksMCldKSxfdm0uX3YoXCIgXCIpLF9jKCd0ZCcsW192bS5fdihfdm0uX3MoX3ZtLl9mKFwiZm9ybWF0dGVkUHJpY2VcIikocHJvZHVjdC5QcmljZSkpKV0pLF92bS5fdihcIiBcIiksX2MoJ3RkJyxbX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJmb3JtYXR0ZWRQcmljZVwiKShwcm9kdWN0LlByaWNlVkFUKSkpXSldKX0pXSwyKTpfdm0uX2UoKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdDYWxsYmFja1BvcHVwJyx7YXR0cnM6e1wib3BlbmVkXCI6X3ZtLm9wZW5DYWxsYmFja1BvcHVwfSxvbjp7XCJjbG9zZS1wb3B1cFwiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLm9wZW5DYWxsYmFja1BvcHVwID0gZmFsc2V9fX0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X19jb21wYW55LWxlZnQtYm94XCJ9LFtfYygncCcse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fY29tcGFueS1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwi0KbQtdC90YsgKNGA0YPQsS/Rgikg0LTQtdC50YHRgtCy0YPRjtGCINGBIDE0LjA3LjIwMjAg0YEgMDA6MDBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X19jb21wYW55LWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCLQkdCw0LfQuNGBINC/0L7RgdGC0LDQstC60LggLSDQodCg0KJcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJwcmljZS1saXN0X19jb21wYW55LWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCLQltC00LXQvCDQktCw0YjQuNGFINC30LLQvtC90LrQvtCyOlwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX2NvbXBhbnktZGVzY3JpcHRpb25cIn0sW192bS5fdihcItGC0LXQuy4gKzcgOTM5IDcxNC01NS01NSAo0JTQvNC40YLRgNC40LkpXCIpXSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fY29tcGFueS1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwiOCAoODAwKSA1NTUtMjgtMjZcIildKV0pfSxmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd0cicsW19jKCd0aCcsW192bS5fdihcItCf0YDQvtC00YPQutGG0LjRj1wiKV0pLF92bS5fdihcIiBcIiksX2MoJ3RoJyxbX3ZtLl92KFwi0KbQtdC90LBcIildKSxfdm0uX3YoXCIgXCIpLF9jKCd0aCcsW192bS5fdihcItCm0LXQvdCwICsg0J3QlNChXCIpXSldKX1dXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ByaWNlTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmQ2NDU3YjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJpY2VMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJpY2VMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpY2VMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpY2VMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmljZUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZkNjQ1N2I0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==