(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-member-routing-module"],{

/***/ "./src/app/members/member-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/members/member-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MemberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function() { return MemberRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: '../list/list.module#ListPageModule'
    },
    { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
    { path: 'mpChangePwd', loadChildren: '../mp-change-pwd/mp-change-pwd.module#MpChangePwdPageModule' },
    { path: 'addroute', loadChildren: '../addroute/addroute.module#AddroutePageModule' },
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=members-member-routing-module.js.map