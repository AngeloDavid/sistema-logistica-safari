(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mp-change-pwd-mp-change-pwd-module"],{

/***/ "./src/app/mp-change-pwd/mp-change-pwd.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mp-change-pwd/mp-change-pwd.module.ts ***!
  \*******************************************************/
/*! exports provided: MpChangePwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MpChangePwdPageModule", function() { return MpChangePwdPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _mp_change_pwd_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mp-change-pwd.page */ "./src/app/mp-change-pwd/mp-change-pwd.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mp_change_pwd_page__WEBPACK_IMPORTED_MODULE_5__["MpChangePwdPage"]
    }
];
var MpChangePwdPageModule = /** @class */ (function () {
    function MpChangePwdPageModule() {
    }
    MpChangePwdPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mp_change_pwd_page__WEBPACK_IMPORTED_MODULE_5__["MpChangePwdPage"]]
        })
    ], MpChangePwdPageModule);
    return MpChangePwdPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=mp-change-pwd-mp-change-pwd-module.js.map