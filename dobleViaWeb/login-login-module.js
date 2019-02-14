(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding class=\"homeback\" [forceOverscroll]=\"true\">\n  <ion-grid>\n      <ion-row justify-content-center align-items-center >\n          <ion-col>\n            <div text-center>\n              <img src=\"assets/img/logo.png\" style=\"width: 245px; padding-top: 14%\">\n            </div>\n          </ion-col>                 \n      </ion-row>\n      <ion-row justify-content-center align-items-center>\n        <ion-col >\n            <form padding [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" >\n            <ion-list lines=\"full\" >        \n                <ion-item align-self-center >\n                    <ion-icon color=\"primary\" name=\"person\" size=\"large\" slot=\"start\"></ion-icon>\n                    <!-- <ion-label color=\"primary\" position=\"floating\">Usuario</ion-label> -->\n                    <ion-input color=\"primary\" type=\"text\" name=\"idUser\" placeholder=\"Usuario\"  required [formControl]=\"idUser\" ></ion-input>\n                </ion-item>\n                <div *ngIf=\"loginForm.get('idUser').errors && loginForm.get('idUser').dirty\" >\n                    <p id=\"form-text-err\" *ngIf=\"loginForm.get('idUser').hasError('required')\">* campo es requerido</p>                        \n                </div>\n                <ion-item >\n                    <ion-icon color=\"primary\" name=\"lock\" slot=\"start\"></ion-icon>\n                    <!-- <ion-label color=\"primary\" position=\"floating\">Contraseña</ion-label> -->\n                    <ion-input color=\"primary\" type=\"password\"   required name=\"pwdUser\" placeholder=\"Contraseña\" [formControl]=\"pwdUser\"></ion-input>\n                </ion-item>\n                <div *ngIf=\"loginForm.get('pwdUser').errors && loginForm.get('pwdUser').dirty\" >\n                        <p id=\"form-text-err\" *ngIf=\"loginForm.get('pwdUser').hasError('required')\">* campo es requerido</p>                        \n                    </div>\n              </ion-list>\n              <ion-button color=\"danger\" size=\"large\" expand=\"full\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">Ingresar</ion-button>\n              </form>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  vertical-align: center;\n  padding-top: 1.6em; }\n\n.homeback {\n  --background: url('fondo.jpg') !important;\n  background-repeat: repeat;\n  background-position: left top;\n  -webkit-background: url('fondo.jpg') !important;\n  -moz-background: url('fondo.jpg') !important;\n  -webkit-background-repeat: repeat;\n  -webkit-background-position: left top;\n  padding-bottom: 0 !important; }\n\nform {\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n#form-text-err {\n  color: #ff0000;\n  padding-left: 42px;\n  font-size: 0.9em;\n  margin-top: 4%;\n  margin-bottom: 3%; }\n"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_authGuard1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/authGuard1.service */ "./src/app/api/authGuard1.service.ts");
/* harmony import */ var _api_authGuard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/authGuard.service */ "./src/app/api/authGuard.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mp_change_pwd_mp_change_pwd_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mp-change-pwd/mp-change-pwd.page */ "./src/app/mp-change-pwd/mp-change-pwd.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var LoginPage = /** @class */ (function () {
    function LoginPage(userSer, events, modalController, storage, router, alertCtrl, fb, loadCtrl, authguard1, authguard) {
        this.userSer = userSer;
        this.events = events;
        this.modalController = modalController;
        this.storage = storage;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.loadCtrl = loadCtrl;
        this.authguard1 = authguard1;
        this.authguard = authguard;
        this.loginForm = fb.group({
            'idUser': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            'pwdUser': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
        });
        this.idUser = this.loginForm.controls['idUser'];
        this.pwdUser = this.loginForm.controls['pwdUser'];
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cargando;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: "Ingresando ...",
                            spinner: 'bubbles'
                        })];
                    case 1:
                        cargando = _a.sent();
                        return [4 /*yield*/, cargando.present()];
                    case 2:
                        _a.sent();
                        console.log('loginuser', this.idUser);
                        this.userSer.loginUser(this.idUser.value, this.pwdUser.value).subscribe(function (res) {
                            if (res.CODE === 400) {
                                cargando.dismiss();
                                _this.msgmostrar(res.MSG, 'Error de ingreso');
                            }
                            else {
                                _this.user = res.value[0];
                                _this.user.USUARIO_APP = _this.idUser.value;
                                _this.storage.set('userlogin', _this.user);
                                _this.events.publish('userlogin', _this.user);
                                if (_this.user.CAMBIAR_PASSWD === '0') {
                                    _this.CambiarPwd();
                                }
                                cargando.dismiss();
                                _this.authguard1.setEnablelogin(false);
                                _this.authguard.setEnablelogin(true);
                                _this.router.navigateByUrl('/members/home');
                                _this.loginForm.reset();
                            }
                        }, function (err) {
                            cargando.dismiss();
                            _this.msgmostrar('Intente de nuevo por favor', 'Error de conexion');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.msgmostrar = function (msg, title) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.CambiarPwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _mp_change_pwd_mp_change_pwd_page__WEBPACK_IMPORTED_MODULE_8__["MpChangePwdPage"],
                            componentProps: { value: this.user.CODIGO_NOMINA, origin: 'login' }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")],
        }),
        __metadata("design:paramtypes", [_api_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _api_authGuard1_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard1"],
            _api_authGuard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map