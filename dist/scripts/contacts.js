(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Contacts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Contacts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Contacts',
  components: {
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default())
  },

  data() {
    return {
      name: null,
      phoneEmail: null,
      message: null,
      formSent: false,
      regions: [{
        name: 'Самарская область',
        slug: 'samarskaya_oblast'
      }, {
        name: 'Оренбургская область',
        slug: 'orenburgskaja_oblast'
      }, {
        name: 'Республика Татарстан',
        slug: 'respublika_tatarstan'
      }, {
        name: 'Республика Башкирия',
        slug: 'respublika_bashkirija'
      }, {
        name: 'Саратовская область',
        slug: 'saratovskaja_oblast'
      }, {
        name: 'Тамбовская область',
        slug: 'tambovskaja_oblast'
      }, {
        name: 'Ульяновская область',
        slug: 'uljanovskaja_oblast'
      }, {
        name: 'Пензенская область',
        slug: 'penzenskaja_oblast'
      }, {
        name: 'Республика Мордовия',
        slug: 'respublika_mordovija'
      }, {
        name: 'Курская область',
        slug: 'kurskaja_oblast'
      }, {
        name: 'Орловская область',
        slug: 'orlovskaja_oblast'
      }, {
        name: 'Липецкая область',
        slug: 'lipeckaja_oblast'
      }, {
        name: 'Воронежская область',
        slug: 'voronezhskaja_oblast'
      }, {
        name: 'Волгоградская область',
        slug: 'volgogradskaja_oblast'
      }, {
        name: 'Белгородская область',
        slug: 'belgorodskaja_oblast'
      }],
      selectedRegion: null,
      baseContacts: {
        title: 'По всей России',
        phone: '8 (800) 555-28-26',
        email: 'info@agrovisa.ru '
      },
      managers: [{
        name: 'Дмитрий',
        phone: '+7 939 714-55-55',
        email: 'd.kiselev@agrovisa.ru',
        regions: ['samarskaya_oblast', 'orenburgskaja_oblast', 'respublika_tatarstan', 'respublika_bashkirija']
      }, {
        name: 'Данила',
        phone: '+7 937 208-55-55',
        email: 'd.zoteev@agrovisa.ru',
        regions: ['saratovskaja_oblast', 'tambovskaja_oblast', 'uljanovskaja_oblast', 'penzenskaja_oblast', 'respublika_mordovija']
      }, {
        name: 'Владислав',
        phone: '+7 918 535-49-00',
        email: 'v.prokudin@agrovisa.ru',
        regions: ['kurskaja_oblast', 'orlovskaja_oblast', 'lipeckaja_oblast']
      }, {
        name: 'Кирилл',
        phone: '+7 989 702-07-87',
        email: 'k.reukov@agrovisa.ru',
        regions: ['voronezhskaja_oblast', 'volgogradskaja_oblast', 'belgorodskaja_oblast']
      }]
    };
  },

  methods: {
    sendForm() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/send-email', {
        name: this.name,
        phoneEmail: this.phoneEmail,
        message: this.message
      }).then(() => {
        this.formSent = true;
        this.name = null;
        this.phoneEmail = null;
        this.message = null;
      }).catch(error => {
        if (!error.response) {
          alert('Ошибка сети. Проверьте ваше подключение к интернету.');
          console.log(error);
        } else {
          alert(error.response.data.message || error.message);
        }
      });
    }

  },
  computed: {
    selectedManager() {
      let newManager = null;
      this.managers.forEach(manager => {
        if (manager.regions.includes(this.selectedRegion.slug)) {
          newManager = manager;
        }
      });
      return newManager;
    },

    btnText() {
      return this.formSent ? 'Отправлено' : 'Отправить';
    },

    sortedRegions() {
      const newRegions = JSON.parse(JSON.stringify(this.regions));
      return newRegions.sort(function (a, b) {
        const regionA = a.name.toLowerCase();
        const regionB = b.name.toLowerCase();

        if (regionA < regionB) {
          return -1;
        }

        if (regionA > regionB) {
          return 1;
        }

        return 0;
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Contacts.vue?vue&type=template&id=38f6037e&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Contacts.vue?vue&type=template&id=38f6037e& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('section',{staticClass:"contacts-page"},[_c('div',{staticClass:"contacts-page__wrapper"},[_c('h1',{staticClass:"contacts-page__title"},[_vm._v("Контакты")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contacts-page__content-box"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contacts-page__text-box"},[_c('div',{staticClass:"contacts-page__region-contacts-box"},[_c('multiselect',{staticClass:"price-list__multiselect contacts-page__multiselect",attrs:{"options":_vm.sortedRegions,"searchable":false,"close-on-select":true,"show-labels":false,"placeholder":"Регион","label":"name"},scopedSlots:_vm._u([{key:"option",fn:function(props){return [_c('span',{staticClass:"price-list__checkbox"}),_vm._v(" "),_c('p',{staticClass:"price-list__option-text"},[_vm._v(_vm._s(props.option.name))])]}}]),model:{value:(_vm.selectedRegion),callback:function ($$v) {_vm.selectedRegion=$$v},expression:"selectedRegion"}}),_vm._v(" "),(_vm.selectedRegion)?[_c('div',{staticClass:"contacts__form-text-box"},[_c('p',{staticClass:"contacts__form-text"},[_vm._v(_vm._s(_vm.selectedManager.name))])]),_vm._v(" "),_c('div',{staticClass:"contacts__form-text-box"},[_c('p',{staticClass:"contacts__form-mark"},[_vm._v("Телефон")]),_vm._v(" "),_c('p',{staticClass:"contacts__form-text"},[_vm._v(_vm._s(_vm.selectedManager.phone))])]),_vm._v(" "),_c('div',{staticClass:"contacts__form-text-box"},[_c('p',{staticClass:"contacts__form-mark"},[_vm._v("Email")]),_vm._v(" "),_c('p',{staticClass:"contacts__form-text"},[_vm._v(_vm._s(_vm.selectedManager.email))])])]:[_c('div',{staticClass:"contacts__form-text-box"},[_c('p',{staticClass:"contacts__form-text"},[_vm._v(_vm._s(_vm.baseContacts.title))])]),_vm._v(" "),_c('div',{staticClass:"contacts__form-text-box"},[_c('p',{staticClass:"contacts__form-mark"},[_vm._v("Телефон")]),_vm._v(" "),_c('p',{staticClass:"contacts__form-text"},[_vm._v(_vm._s(_vm.baseContacts.phone))])]),_vm._v(" "),_c('div',{staticClass:"contacts__form-text-box"},[_c('p',{staticClass:"contacts__form-mark"},[_vm._v("Email")]),_vm._v(" "),_c('p',{staticClass:"contacts__form-text"},[_vm._v(_vm._s(_vm.baseContacts.email))])])]],2),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('form',{staticClass:"contacts__form",attrs:{"action":"/send-email","method":"post"},on:{"submit":function($event){$event.preventDefault();return _vm.sendForm($event)}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],staticClass:"contacts__input",attrs:{"type":"text","placeholder":"Имя","name":"name","required":""},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.phoneEmail),expression:"phoneEmail"}],staticClass:"contacts__input",attrs:{"type":"text","placeholder":"Телефон/Email","name":"phone-email","required":""},domProps:{"value":(_vm.phoneEmail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.phoneEmail=$event.target.value}}}),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.message),expression:"message"}],staticClass:"contacts__textarea",attrs:{"placeholder":"Сообщение","name":"message"},domProps:{"value":(_vm.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.message=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"contacts__submit-btn",attrs:{"type":"submit"}},[_vm._v(_vm._s(_vm.btnText))])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"contacts-page__description"},[_vm._v("Главный офис компании АГРОВИЗА расположен в г. Тольятти, а обособленное подразделение в г. Ростов-на-Дону. Чтобы связаться с нашими сотрудниками, вы можете позвонить по телефону "),_c('b',{staticStyle:{"white-space":"nowrap"}},[_vm._v("8 (800) 555-28-26")]),_vm._v(" либо написать на электронную почту info@agrovisa.ru и уточнить любую интересующую вас информацию.")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contacts-page__map-box"},[_c('iframe',{attrs:{"src":"https://yandex.ru/map-widget/v1/?um=constructor%3A15d0ac972cf629e07d62754a74c869147baa07d44f21629b845d9e97802cedb5&source=constructor","width":"100%","height":"100%","frameborder":"0"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contacts__form-text-box"},[_c('p',{staticClass:"contacts__form-mark"},[_vm._v("Адрес")]),_vm._v(" "),_c('p',{staticClass:"contacts__form-text"},[_vm._v("445140, г. Тольятти, ул. Коммунальная, 7")])])}]



/***/ }),

/***/ "./src/views/Contacts.vue":
/*!********************************!*\
  !*** ./src/views/Contacts.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contacts_vue_vue_type_template_id_38f6037e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts.vue?vue&type=template&id=38f6037e& */ "./src/views/Contacts.vue?vue&type=template&id=38f6037e&");
/* harmony import */ var _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contacts.vue?vue&type=script&lang=js& */ "./src/views/Contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contacts_vue_vue_type_template_id_38f6037e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contacts_vue_vue_type_template_id_38f6037e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Contacts.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Contacts.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./Contacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Contacts.vue?vue&type=template&id=38f6037e&":
/*!***************************************************************!*\
  !*** ./src/views/Contacts.vue?vue&type=template&id=38f6037e& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_38f6037e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Contacts.vue?vue&type=template&id=38f6037e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Contacts.vue?vue&type=template&id=38f6037e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_38f6037e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_38f6037e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQ29udGFjdHMudnVlPzIxMWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvQ29udGFjdHMudnVlPzczYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NvbnRhY3RzLnZ1ZT9lOWUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJGQTtBQUNBO0FBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBOztBQUtBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHNCQUZBO0FBR0EsbUJBSEE7QUFJQSxxQkFKQTtBQUtBLGdCQUNBO0FBQ0EsaUNBREE7QUFFQTtBQUZBLE9BREEsRUFLQTtBQUNBLG9DQURBO0FBRUE7QUFGQSxPQUxBLEVBU0E7QUFDQSxvQ0FEQTtBQUVBO0FBRkEsT0FUQSxFQWFBO0FBQ0EsbUNBREE7QUFFQTtBQUZBLE9BYkEsRUFpQkE7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsT0FqQkEsRUFxQkE7QUFDQSxrQ0FEQTtBQUVBO0FBRkEsT0FyQkEsRUF5QkE7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsT0F6QkEsRUE2QkE7QUFDQSxrQ0FEQTtBQUVBO0FBRkEsT0E3QkEsRUFpQ0E7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsT0FqQ0EsRUFxQ0E7QUFDQSwrQkFEQTtBQUVBO0FBRkEsT0FyQ0EsRUF5Q0E7QUFDQSxpQ0FEQTtBQUVBO0FBRkEsT0F6Q0EsRUE2Q0E7QUFDQSxnQ0FEQTtBQUVBO0FBRkEsT0E3Q0EsRUFpREE7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsT0FqREEsRUFxREE7QUFDQSxxQ0FE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aUJBQWlCLHNDQUFzQyxVQUFVLGtDQUFrQyx3Q0FBd0Msa0NBQWtDLHlEQUF5RDs7Ozs7Ozs7Ozs7Ozs7QUNEdHFDO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7OztBQUd2RDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLGdGOzs7Ozs7Ozs7Ozs7QUNsQmY7QUFBQTtBQUFBLHdDQUFnTCxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic2NyaXB0cy9jb250YWN0cy5qcz92PWM5ZjllODI4Zjc2YjdjOWU5ZjAxIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRhY3RzLXBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLXBhZ2VfX3dyYXBwZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0cy1wYWdlX190aXRsZVwiPtCa0L7QvdGC0LDQutGC0Ys8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY29udGFjdHMtcGFnZV9fZGVzY3JpcHRpb25cIj7Qk9C70LDQstC90YvQuSDQvtGE0LjRgSDQutC+0LzQv9Cw0L3QuNC4INCQ0JPQoNCe0JLQmNCX0JAg0YDQsNGB0L/QvtC70L7QttC10L0g0LIg0LMuINCi0L7Qu9GM0Y/RgtGC0LgsINCwINC+0LHQvtGB0L7QsdC70LXQvdC90L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtSDQsiDQsy4g0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMuINCn0YLQvtCx0Ysg0YHQstGP0LfQsNGC0YzRgdGPINGBINC90LDRiNC40LzQuCDRgdC+0YLRgNGD0LTQvdC40LrQsNC80LgsINCy0Ysg0LzQvtC20LXRgtC1INC/0L7Qt9Cy0L7QvdC40YLRjCDQv9C+INGC0LXQu9C10YTQvtC90YMgPGIgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogbm93cmFwO1wiPjggKDgwMCkgNTU1LTI4LTI2PC9iPiDQu9C40LHQviDQvdCw0L/QuNGB0LDRgtGMINC90LAg0Y3Qu9C10LrRgtGA0L7QvdC90YPRjiDQv9C+0YfRgtGDIGluZm9AYWdyb3Zpc2EucnUg0Lgg0YPRgtC+0YfQvdC40YLRjCDQu9GO0LHRg9GOINC40L3RgtC10YDQtdGB0YPRjtGJ0YPRjiDQstCw0YEg0LjQvdGE0L7RgNC80LDRhtC40Y4uPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0cy1wYWdlX19jb250ZW50LWJveFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLXBhZ2VfX21hcC1ib3hcIj5cclxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3lhbmRleC5ydS9tYXAtd2lkZ2V0L3YxLz91bT1jb25zdHJ1Y3RvciUzQTE1ZDBhYzk3MmNmNjI5ZTA3ZDYyNzU0YTc0Yzg2OTE0N2JhYTA3ZDQ0ZjIxNjI5Yjg0NWQ5ZTk3ODAyY2VkYjUmYW1wO3NvdXJjZT1jb25zdHJ1Y3RvclwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmcmFtZWJvcmRlcj1cIjBcIj48L2lmcmFtZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzLXBhZ2VfX3RleHQtYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0cy1wYWdlX19yZWdpb24tY29udGFjdHMtYm94XCI+XHJcbiAgICAgICAgICAgICAgPG11bHRpc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFJlZ2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic29ydGVkUmVnaW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgIDpzZWFyY2hhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xvc2Utb24tc2VsZWN0PVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDpzaG93LWxhYmVscz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQoNC10LPQuNC+0L1cIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInByaWNlLWxpc3RfX211bHRpc2VsZWN0IGNvbnRhY3RzLXBhZ2VfX211bHRpc2VsZWN0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm9wdGlvblwiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLWxpc3RfX2NoZWNrYm94XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlLWxpc3RfX29wdGlvbi10ZXh0XCI+e3twcm9wcy5vcHRpb24ubmFtZX19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L211bHRpc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic2VsZWN0ZWRSZWdpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0c19fZm9ybS10ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RzX19mb3JtLXRleHRcIj57eyBzZWxlY3RlZE1hbmFnZXIubmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzX19mb3JtLXRleHQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdHNfX2Zvcm0tbWFya1wiPtCi0LXQu9C10YTQvtC9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RzX19mb3JtLXRleHRcIj57eyBzZWxlY3RlZE1hbmFnZXIucGhvbmUgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0c19fZm9ybS10ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RzX19mb3JtLW1hcmtcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0c19fZm9ybS10ZXh0XCI+e3sgc2VsZWN0ZWRNYW5hZ2VyLmVtYWlsIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzX19mb3JtLXRleHQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdHNfX2Zvcm0tdGV4dFwiPnt7IGJhc2VDb250YWN0cy50aXRsZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RzX19mb3JtLXRleHQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdHNfX2Zvcm0tbWFya1wiPtCi0LXQu9C10YTQvtC9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RzX19mb3JtLXRleHRcIj57eyBiYXNlQ29udGFjdHMucGhvbmUgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0c19fZm9ybS10ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RzX19mb3JtLW1hcmtcIj5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0c19fZm9ybS10ZXh0XCI+e3sgYmFzZUNvbnRhY3RzLmVtYWlsIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0c19fZm9ybS10ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdHNfX2Zvcm0tbWFya1wiPtCQ0LTRgNC10YE8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0c19fZm9ybS10ZXh0XCI+NDQ1MTQwLCDQsy4g0KLQvtC70YzRj9GC0YLQuCwg0YPQuy4g0JrQvtC80LzRg9C90LDQu9GM0L3QsNGPLCA3PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL3NlbmQtZW1haWxcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJjb250YWN0c19fZm9ybVwiIEBzdWJtaXQucHJldmVudD1cInNlbmRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb250YWN0c19faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRj1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbnRhY3RzX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KLQtdC70LXRhNC+0L0vRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmUtZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGhvbmVFbWFpbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbnRhY3RzX190ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KHQvtC+0LHRidC10L3QuNC1XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJjb250YWN0c19fc3VibWl0LWJ0blwiPnt7IGJ0blRleHQgfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbiAgaW1wb3J0IE11bHRpc2VsZWN0IGZyb20gJ3Z1ZS1tdWx0aXNlbGVjdCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdDb250YWN0cycsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIE11bHRpc2VsZWN0LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBwaG9uZUVtYWlsOiBudWxsLFxyXG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgZm9ybVNlbnQ6IGZhbHNlLFxyXG4gICAgICAgIHJlZ2lvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ9Ch0LDQvNCw0YDRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXHJcbiAgICAgICAgICAgIHNsdWc6ICdzYW1hcnNrYXlhX29ibGFzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn0J7RgNC10L3QsdGD0YDQs9GB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ29yZW5idXJnc2thamFfb2JsYXN0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQoNC10YHQv9GD0LHQu9C40LrQsCDQotCw0YLQsNGA0YHRgtCw0L0nLFxyXG4gICAgICAgICAgICBzbHVnOiAncmVzcHVibGlrYV90YXRhcnN0YW4nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ9Cg0LXRgdC/0YPQsdC70LjQutCwINCR0LDRiNC60LjRgNC40Y8nLFxyXG4gICAgICAgICAgICBzbHVnOiAncmVzcHVibGlrYV9iYXNoa2lyaWphJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQodCw0YDQsNGC0L7QstGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ3NhcmF0b3Zza2FqYV9vYmxhc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ9Ci0LDQvNCx0L7QstGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ3RhbWJvdnNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn0KPQu9GM0Y/QvdC+0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXHJcbiAgICAgICAgICAgIHNsdWc6ICd1bGphbm92c2thamFfb2JsYXN0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQn9C10L3Qt9C10L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXHJcbiAgICAgICAgICAgIHNsdWc6ICdwZW56ZW5za2FqYV9vYmxhc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ9Cg0LXRgdC/0YPQsdC70LjQutCwINCc0L7RgNC00L7QstC40Y8nLFxyXG4gICAgICAgICAgICBzbHVnOiAncmVzcHVibGlrYV9tb3Jkb3ZpamEnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ9Ca0YPRgNGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ2t1cnNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn0J7RgNC70L7QstGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ29ybG92c2thamFfb2JsYXN0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQm9C40L/QtdGG0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ2xpcGVja2FqYV9vYmxhc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ9CS0L7RgNC+0L3QtdC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwnLFxyXG4gICAgICAgICAgICBzbHVnOiAndm9yb25lemhza2FqYV9vYmxhc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ9CS0L7Qu9Cz0L7Qs9GA0LDQtNGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ3ZvbGdvZ3JhZHNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn0JHQtdC70LPQvtGA0L7QtNGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMJyxcclxuICAgICAgICAgICAgc2x1ZzogJ2JlbGdvcm9kc2thamFfb2JsYXN0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3RlZFJlZ2lvbjogbnVsbCxcclxuICAgICAgICBiYXNlQ29udGFjdHM6IHtcclxuICAgICAgICAgIHRpdGxlOiAn0J/QviDQstGB0LXQuSDQoNC+0YHRgdC40LgnLFxyXG4gICAgICAgICAgcGhvbmU6ICc4ICg4MDApIDU1NS0yOC0yNicsXHJcbiAgICAgICAgICBlbWFpbDogJ2luZm9AYWdyb3Zpc2EucnUgJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hbmFnZXJzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQlNC80LjRgtGA0LjQuScsXHJcbiAgICAgICAgICAgIHBob25lOiAnKzcgOTM5IDcxNC01NS01NScsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnZC5raXNlbGV2QGFncm92aXNhLnJ1JyxcclxuICAgICAgICAgICAgcmVnaW9uczogW1xyXG4gICAgICAgICAgICAgICdzYW1hcnNrYXlhX29ibGFzdCcsXHJcbiAgICAgICAgICAgICAgJ29yZW5idXJnc2thamFfb2JsYXN0JyxcclxuICAgICAgICAgICAgICAncmVzcHVibGlrYV90YXRhcnN0YW4nLFxyXG4gICAgICAgICAgICAgICdyZXNwdWJsaWthX2Jhc2hraXJpamEnLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn0JTQsNC90LjQu9CwJyxcclxuICAgICAgICAgICAgcGhvbmU6ICcrNyA5MzcgMjA4LTU1LTU1JyxcclxuICAgICAgICAgICAgZW1haWw6ICdkLnpvdGVldkBhZ3JvdmlzYS5ydScsXHJcbiAgICAgICAgICAgIHJlZ2lvbnM6IFtcclxuICAgICAgICAgICAgICAnc2FyYXRvdnNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICAgICAgJ3RhbWJvdnNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICAgICAgJ3VsamFub3Zza2FqYV9vYmxhc3QnLFxyXG4gICAgICAgICAgICAgICdwZW56ZW5za2FqYV9vYmxhc3QnLFxyXG4gICAgICAgICAgICAgICdyZXNwdWJsaWthX21vcmRvdmlqYScsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQktC70LDQtNC40YHQu9Cw0LInLFxyXG4gICAgICAgICAgICBwaG9uZTogJys3IDkxOCA1MzUtNDktMDAnLFxyXG4gICAgICAgICAgICBlbWFpbDogJ3YucHJva3VkaW5AYWdyb3Zpc2EucnUnLFxyXG4gICAgICAgICAgICByZWdpb25zOiBbXHJcbiAgICAgICAgICAgICAgJ2t1cnNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICAgICAgJ29ybG92c2thamFfb2JsYXN0JyxcclxuICAgICAgICAgICAgICAnbGlwZWNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfQmtC40YDQuNC70LsnLFxyXG4gICAgICAgICAgICBwaG9uZTogJys3IDk4OSA3MDItMDctODcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJ2sucmV1a292QGFncm92aXNhLnJ1JyxcclxuICAgICAgICAgICAgcmVnaW9uczogW1xyXG4gICAgICAgICAgICAgICd2b3JvbmV6aHNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICAgICAgJ3ZvbGdvZ3JhZHNrYWphX29ibGFzdCcsXHJcbiAgICAgICAgICAgICAgJ2JlbGdvcm9kc2thamFfb2JsYXN0JyxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHNlbmRGb3JtKCkge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9zZW5kLWVtYWlsJywge1xyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGhvbmVFbWFpbDogdGhpcy5waG9uZUVtYWlsLFxyXG4gICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybVNlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnBob25lRW1haWwgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwINGB0LXRgtC4LiDQn9GA0L7QstC10YDRjNGC0LUg0LLQsNGI0LUg0L/QvtC00LrQu9GO0YfQtdC90LjQtSDQuiDQuNC90YLQtdGA0L3QtdGC0YMuJyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIHNlbGVjdGVkTWFuYWdlcigpIHtcclxuICAgICAgICBsZXQgbmV3TWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubWFuYWdlcnMuZm9yRWFjaChtYW5hZ2VyID0+IHtcclxuICAgICAgICAgIGlmIChtYW5hZ2VyLnJlZ2lvbnMuaW5jbHVkZXModGhpcy5zZWxlY3RlZFJlZ2lvbi5zbHVnKSkge1xyXG4gICAgICAgICAgICBuZXdNYW5hZ2VyID0gbWFuYWdlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld01hbmFnZXI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0blRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybVNlbnQgPyAn0J7RgtC/0YDQsNCy0LvQtdC90L4nIDogJ9Ce0YLQv9GA0LDQstC40YLRjCc7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNvcnRlZFJlZ2lvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3UmVnaW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5yZWdpb25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdSZWdpb25zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgY29uc3QgcmVnaW9uQSA9IGEubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgY29uc3QgcmVnaW9uQiA9IGIubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgIGlmIChyZWdpb25BIDwgcmVnaW9uQikge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHJlZ2lvbkEgPiByZWdpb25CKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250ZW50XCJ9LFtfYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwiY29udGFjdHMtcGFnZVwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFjdHMtcGFnZV9fd3JhcHBlclwifSxbX2MoJ2gxJyx7c3RhdGljQ2xhc3M6XCJjb250YWN0cy1wYWdlX190aXRsZVwifSxbX3ZtLl92KFwi0JrQvtC90YLQsNC60YLRi1wiKV0pLF92bS5fdihcIiBcIiksX3ZtLl9tKDApLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFjdHMtcGFnZV9fY29udGVudC1ib3hcIn0sW192bS5fbSgxKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzLXBhZ2VfX3RleHQtYm94XCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWN0cy1wYWdlX19yZWdpb24tY29udGFjdHMtYm94XCJ9LFtfYygnbXVsdGlzZWxlY3QnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX211bHRpc2VsZWN0IGNvbnRhY3RzLXBhZ2VfX211bHRpc2VsZWN0XCIsYXR0cnM6e1wib3B0aW9uc1wiOl92bS5zb3J0ZWRSZWdpb25zLFwic2VhcmNoYWJsZVwiOmZhbHNlLFwiY2xvc2Utb24tc2VsZWN0XCI6dHJ1ZSxcInNob3ctbGFiZWxzXCI6ZmFsc2UsXCJwbGFjZWhvbGRlclwiOlwi0KDQtdCz0LjQvtC9XCIsXCJsYWJlbFwiOlwibmFtZVwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJvcHRpb25cIixmbjpmdW5jdGlvbihwcm9wcyl7cmV0dXJuIFtfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwicHJpY2UtbGlzdF9fY2hlY2tib3hcIn0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcInByaWNlLWxpc3RfX29wdGlvbi10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKHByb3BzLm9wdGlvbi5uYW1lKSldKV19fV0pLG1vZGVsOnt2YWx1ZTooX3ZtLnNlbGVjdGVkUmVnaW9uKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnNlbGVjdGVkUmVnaW9uPSQkdn0sZXhwcmVzc2lvbjpcInNlbGVjdGVkUmVnaW9uXCJ9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLnNlbGVjdGVkUmVnaW9uKT9bX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFjdHNfX2Zvcm0tdGV4dC1ib3hcIn0sW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJjb250YWN0c19fZm9ybS10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5zZWxlY3RlZE1hbmFnZXIubmFtZSkpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzX19mb3JtLXRleHQtYm94XCJ9LFtfYygncCcse3N0YXRpY0NsYXNzOlwiY29udGFjdHNfX2Zvcm0tbWFya1wifSxbX3ZtLl92KFwi0KLQtdC70LXRhNC+0L1cIildKSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJjb250YWN0c19fZm9ybS10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5zZWxlY3RlZE1hbmFnZXIucGhvbmUpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWN0c19fZm9ybS10ZXh0LWJveFwifSxbX2MoJ3AnLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzX19mb3JtLW1hcmtcIn0sW192bS5fdihcIkVtYWlsXCIpXSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwiY29udGFjdHNfX2Zvcm0tdGV4dFwifSxbX3ZtLl92KF92bS5fcyhfdm0uc2VsZWN0ZWRNYW5hZ2VyLmVtYWlsKSldKV0pXTpbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFjdHNfX2Zvcm0tdGV4dC1ib3hcIn0sW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJjb250YWN0c19fZm9ybS10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5iYXNlQ29udGFjdHMudGl0bGUpKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWN0c19fZm9ybS10ZXh0LWJveFwifSxbX2MoJ3AnLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzX19mb3JtLW1hcmtcIn0sW192bS5fdihcItCi0LXQu9C10YTQvtC9XCIpXSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwiY29udGFjdHNfX2Zvcm0tdGV4dFwifSxbX3ZtLl92KF92bS5fcyhfdm0uYmFzZUNvbnRhY3RzLnBob25lKSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFjdHNfX2Zvcm0tdGV4dC1ib3hcIn0sW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJjb250YWN0c19fZm9ybS1tYXJrXCJ9LFtfdm0uX3YoXCJFbWFpbFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzX19mb3JtLXRleHRcIn0sW192bS5fdihfdm0uX3MoX3ZtLmJhc2VDb250YWN0cy5lbWFpbCkpXSldKV1dLDIpLF92bS5fdihcIiBcIiksX3ZtLl9tKDIpLF92bS5fdihcIiBcIiksX2MoJ2Zvcm0nLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzX19mb3JtXCIsYXR0cnM6e1wiYWN0aW9uXCI6XCIvc2VuZC1lbWFpbFwiLFwibWV0aG9kXCI6XCJwb3N0XCJ9LG9uOntcInN1Ym1pdFwiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIF92bS5zZW5kRm9ybSgkZXZlbnQpfX19LFtfYygnaW5wdXQnLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTooX3ZtLm5hbWUpLGV4cHJlc3Npb246XCJuYW1lXCJ9XSxzdGF0aWNDbGFzczpcImNvbnRhY3RzX19pbnB1dFwiLGF0dHJzOntcInR5cGVcIjpcInRleHRcIixcInBsYWNlaG9sZGVyXCI6XCLQmNC80Y9cIixcIm5hbWVcIjpcIm5hbWVcIixcInJlcXVpcmVkXCI6XCJcIn0sZG9tUHJvcHM6e1widmFsdWVcIjooX3ZtLm5hbWUpfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7aWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpeyByZXR1cm47IH1fdm0ubmFtZT0kZXZlbnQudGFyZ2V0LnZhbHVlfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOihfdm0ucGhvbmVFbWFpbCksZXhwcmVzc2lvbjpcInBob25lRW1haWxcIn1dLHN0YXRpY0NsYXNzOlwiY29udGFjdHNfX2lucHV0XCIsYXR0cnM6e1widHlwZVwiOlwidGV4dFwiLFwicGxhY2Vob2xkZXJcIjpcItCi0LXQu9C10YTQvtC9L0VtYWlsXCIsXCJuYW1lXCI6XCJwaG9uZS1lbWFpbFwiLFwicmVxdWlyZWRcIjpcIlwifSxkb21Qcm9wczp7XCJ2YWx1ZVwiOihfdm0ucGhvbmVFbWFpbCl9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZyl7IHJldHVybjsgfV92bS5waG9uZUVtYWlsPSRldmVudC50YXJnZXQudmFsdWV9fX0pLF92bS5fdihcIiBcIiksX2MoJ3RleHRhcmVhJyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6KF92bS5tZXNzYWdlKSxleHByZXNzaW9uOlwibWVzc2FnZVwifV0sc3RhdGljQ2xhc3M6XCJjb250YWN0c19fdGV4dGFyZWFcIixhdHRyczp7XCJwbGFjZWhvbGRlclwiOlwi0KHQvtC+0LHRidC10L3QuNC1XCIsXCJuYW1lXCI6XCJtZXNzYWdlXCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5tZXNzYWdlKX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe2lmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXsgcmV0dXJuOyB9X3ZtLm1lc3NhZ2U9JGV2ZW50LnRhcmdldC52YWx1ZX19fSksX3ZtLl92KFwiIFwiKSxfYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjb250YWN0c19fc3VibWl0LWJ0blwiLGF0dHJzOntcInR5cGVcIjpcInN1Ym1pdFwifX0sW192bS5fdihfdm0uX3MoX3ZtLmJ0blRleHQpKV0pXSldKV0pXSldKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJjb250YWN0cy1wYWdlX19kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwi0JPQu9Cw0LLQvdGL0Lkg0L7RhNC40YEg0LrQvtC80L/QsNC90LjQuCDQkNCT0KDQntCS0JjQl9CQINGA0LDRgdC/0L7Qu9C+0LbQtdC9INCyINCzLiDQotC+0LvRjNGP0YLRgtC4LCDQsCDQvtCx0L7RgdC+0LHQu9C10L3QvdC+0LUg0L/QvtC00YDQsNC30LTQtdC70LXQvdC40LUg0LIg0LMuINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLiDQp9GC0L7QsdGLINGB0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0YjQuNC80Lgg0YHQvtGC0YDRg9C00L3QuNC60LDQvNC4LCDQstGLINC80L7QttC10YLQtSDQv9C+0LfQstC+0L3QuNGC0Ywg0L/QviDRgtC10LvQtdGE0L7QvdGDIFwiKSxfYygnYicse3N0YXRpY1N0eWxlOntcIndoaXRlLXNwYWNlXCI6XCJub3dyYXBcIn19LFtfdm0uX3YoXCI4ICg4MDApIDU1NS0yOC0yNlwiKV0pLF92bS5fdihcIiDQu9C40LHQviDQvdCw0L/QuNGB0LDRgtGMINC90LAg0Y3Qu9C10LrRgtGA0L7QvdC90YPRjiDQv9C+0YfRgtGDIGluZm9AYWdyb3Zpc2EucnUg0Lgg0YPRgtC+0YfQvdC40YLRjCDQu9GO0LHRg9GOINC40L3RgtC10YDQtdGB0YPRjtGJ0YPRjiDQstCw0YEg0LjQvdGE0L7RgNC80LDRhtC40Y4uXCIpXSl9LGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFjdHMtcGFnZV9fbWFwLWJveFwifSxbX2MoJ2lmcmFtZScse2F0dHJzOntcInNyY1wiOlwiaHR0cHM6Ly95YW5kZXgucnUvbWFwLXdpZGdldC92MS8/dW09Y29uc3RydWN0b3IlM0ExNWQwYWM5NzJjZjYyOWUwN2Q2Mjc1NGE3NGM4NjkxNDdiYWEwN2Q0NGYyMTYyOWI4NDVkOWU5NzgwMmNlZGI1JnNvdXJjZT1jb25zdHJ1Y3RvclwiLFwid2lkdGhcIjpcIjEwMCVcIixcImhlaWdodFwiOlwiMTAwJVwiLFwiZnJhbWVib3JkZXJcIjpcIjBcIn19KV0pfSxmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzX19mb3JtLXRleHQtYm94XCJ9LFtfYygncCcse3N0YXRpY0NsYXNzOlwiY29udGFjdHNfX2Zvcm0tbWFya1wifSxbX3ZtLl92KFwi0JDQtNGA0LXRgVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcImNvbnRhY3RzX19mb3JtLXRleHRcIn0sW192bS5fdihcIjQ0NTE0MCwg0LMuINCi0L7Qu9GM0Y/RgtGC0LgsINGD0LsuINCa0L7QvNC80YPQvdCw0LvRjNC90LDRjywgN1wiKV0pXSl9XVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzhmNjAzN2UmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnRhY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnRhY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOGY2MDM3ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=