(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\" >\n      <ion-buttons  slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Perfil</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\" align-self-center >\n          <img src=\"assets/img/user.png\">\n          <ion-icon name=\"camera\" size=\"10\" class=\"iconcam\"></ion-icon>\n      </ion-col>\n      <ion-col >        \n        <h2>{{ NombreUnido (user.APELLIDOS, user.NOMBRES) }}</h2> \n        <p>\n          {{ user.AREA_TRABAJO}} <br> <strong>{{ user.EMPRESA}} </strong> <br>\n            <strong>RUTA  </strong> {{ user.RUTA }}\n         </p>        \n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col align-self-center text-center >\n          <img src=\"assets/img/qr.jpeg\">\n      </ion-col>\n    </ion-row> \n  </ion-grid>\n  <ion-list>\n      <ion-list-header color=\"light\">\n          <ion-label>Datos Personales</ion-label>\n        </ion-list-header>\n      <ion-item *ngFor=\"let opt of listop; let i= index ;\" >\n        <ion-icon [name]=\"opt.icon\" slot=\"start\"></ion-icon>\n        <ion-label position=\"stacked\">{{ opt.descp }}</ion-label>\n        <ion-input class=\"{{opt.type}}\" type=\"{{opt.type}}\"   [(ngModel)]=\"opt.value\" [disabled]='opt.isdisabled' [clearInput]= 'opt.optional' [required]=\"!opt.optional\"  ></ion-input>\n      </ion-item>     \n  </ion-list>  \n  <ion-grid >\n      <ion-row align-items-center justify-content-center>\n        <ion-col size=\"6\" align-self-center>\n            <ion-button icon-start color=\"primary\" (click)=\"editar()\" >\n                <ion-icon name=\"create\"></ion-icon>\n                Guardar\n              </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" align-self-center>\n            <ion-button icon-start color=\"danger\" (click)=\"CambiarPwd()\" >\n                <ion-icon name=\"key\"></ion-icon>\n                Cambiar<br> Contraseña\n              </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>             \n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 0%; }\n\n.iconcam {\n  position: absolute;\n  bottom: 4.5%;\n  right: 8.5%;\n  font-size: 1.8em; }\n\n.text {\n  text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _mp_change_pwd_mp_change_pwd_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mp-change-pwd/mp-change-pwd.page */ "./src/app/mp-change-pwd/mp-change-pwd.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
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





var ProfilePage = /** @class */ (function () {
    function ProfilePage(modalController, alertCtrl, userSer, events, storage) {
        var _this = this;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.userSer = userSer;
        this.events = events;
        this.storage = storage;
        this.user = {
            CODIGO_CLIE: '',
            CODIGO_NOMINA: '',
            APELLIDOS: '',
            NOMBRES: '',
            AREA_TRABAJO: '',
            BARRIO: '',
            CALLE_PRINCIPAL: '',
            NUM_CASA: '',
            CALLE_SECUNDARIA: '',
            REFERENCIA: '',
            FONO_CELULAR: '',
            RUTA: '',
            USUARIO_APP: '',
            PASSWD_APP: '',
            EMAIL: '',
            CAMBIAR_PASSWD: '',
            EMPRESA: ''
        };
        this.listop = [];
        this.storage.get('userlogin').then(function (val) {
            // this.userSer.loginUser(val.USUARIO_APP )
            console.log(val);
            _this.user = val;
            _this.listop = [
                {
                    id: 1,
                    tipo: 'input',
                    type: 'text',
                    descp: 'Nombres',
                    value: _this.user.NOMBRES,
                    icon: 'person',
                    model: 'NOMBRES',
                    isdisabled: true,
                    optional: false
                },
                {
                    id: 1,
                    tipo: 'input',
                    type: 'text',
                    descp: 'Apellidos',
                    value: _this.user.APELLIDOS,
                    icon: '',
                    model: 'APELLIDOS',
                    isdisabled: true,
                    optional: false
                },
                {
                    id: 1,
                    tipo: 'input',
                    type: 'tel',
                    descp: 'Celular',
                    value: _this.user.FONO_CELULAR,
                    icon: 'phone-portrait',
                    model: 'FONO_CELULAR',
                    isdisabled: false,
                    optional: false
                },
                {
                    id: 2,
                    tipo: 'input',
                    type: 'tel',
                    descp: 'Telefono Casa',
                    value: _this.user.FONO_CASA,
                    icon: 'call',
                    model: 'FONO_CASA',
                    isdisabled: false,
                    optional: true
                },
                {
                    id: 3,
                    tipo: 'input',
                    type: 'email',
                    descp: 'E-mail',
                    value: _this.user.EMAIL,
                    icon: 'mail',
                    model: 'EMAIL',
                    isdisabled: false,
                    optional: false
                },
                {
                    id: 4,
                    tipo: 'input',
                    type: 'text',
                    descp: 'Barrio',
                    value: _this.user.BARRIO,
                    icon: 'business',
                    model: 'BARRIO',
                    isdisabled: true,
                    optional: false
                },
                {
                    id: 5,
                    tipo: 'input',
                    type: 'text',
                    descp: 'Calle Principal',
                    value: _this.user.CALLE_PRINCIPAL,
                    icon: 'home',
                    model: 'CALLE_PRINCIPAL',
                    isdisabled: true,
                    optional: false
                },
                {
                    id: 6,
                    tipo: 'input',
                    type: 'text',
                    descp: 'Número Casa',
                    value: _this.user.NUM_CASA,
                    icon: '',
                    model: 'NUM_CASA',
                    isdisabled: true,
                    optional: true
                },
                {
                    id: 7,
                    tipo: 'input',
                    type: 'text',
                    descp: 'Calle Secundaria',
                    value: _this.user.CALLE_SECUNDARIA,
                    icon: '',
                    model: 'CALLE_SECUNDARIA',
                    isdisabled: true,
                    optional: true
                },
                {
                    id: 8,
                    tipo: 'input',
                    type: 'text',
                    descp: 'Referencia',
                    value: _this.user.REFERENCIA,
                    icon: '',
                    model: 'REFERENCIA',
                    isdisabled: true,
                    optional: true
                }
            ];
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
        console.log('Hola perfil');
    };
    ProfilePage.prototype.MaysPrimera = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    ProfilePage.prototype.NombreUnido = function (apellido, nombre) {
        return this.MaysPrimera(nombre.split(' ', 1)[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split(' ', 1)[0].toLowerCase());
    };
    ProfilePage.prototype.editar = function () {
        this.presentAlertConfirm();
    };
    ProfilePage.prototype.guardardatos = function (action) {
        var _this = this;
        if (action === 'send') {
            // CAMBIAR DATOS VARIABLES
            this.listop.forEach(function (opt) {
                _this.user[opt.model] = opt.value;
            });
            // CAMBIAR DATOS VARIABLES GLOBAL
            this.userSer.updateUser(this.user).subscribe(function (data) {
                _this.storage.set('userlogin', _this.user);
                _this.events.publish('userlogin', _this.user);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.listop.forEach(function (opt) {
                opt.value = _this.user[opt.model];
            });
        }
        console.log(this.user);
    };
    ProfilePage.prototype.CambiarPwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _mp_change_pwd_mp_change_pwd_page__WEBPACK_IMPORTED_MODULE_2__["MpChangePwdPage"],
                            componentProps: { value: this.user.CODIGO_NOMINA, origin: 'profile' }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: '¿Desea Actualizar sus datos?',
                            /*message: '¿Desea Actualizar sus datos?',*/
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        _this.guardardatos('recive');
                                    }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.guardardatos('send');
                                    }
                                }
                            ]
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
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _api_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map