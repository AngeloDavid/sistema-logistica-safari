(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addroute-addroute-module"],{

/***/ "./src/app/addroute/addroute.module.ts":
/*!*********************************************!*\
  !*** ./src/app/addroute/addroute.module.ts ***!
  \*********************************************/
/*! exports provided: AddroutePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddroutePageModule", function() { return AddroutePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _addroute_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addroute.page */ "./src/app/addroute/addroute.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _addroute_page__WEBPACK_IMPORTED_MODULE_5__["AddroutePage"]
    }
];
var AddroutePageModule = /** @class */ (function () {
    function AddroutePageModule() {
    }
    AddroutePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_addroute_page__WEBPACK_IMPORTED_MODULE_5__["AddroutePage"]]
        })
    ], AddroutePageModule);
    return AddroutePageModule;
}());



/***/ }),

/***/ "./src/app/addroute/addroute.page.html":
/*!*********************************************!*\
  !*** ./src/app/addroute/addroute.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"start\" (click)=\"gotoaddRoute()\" >\n          <ion-button router-direction=\"back\" >\n              <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>      \n      </ion-buttons>\n    <ion-title>Programar Recorido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form (ngSubmit)=\"save()\">\n        <ion-list>\n          <ion-item>\n              <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n              <ion-label position=\"stacked\" >Fecha</ion-label>\n              <ion-datetime display-format=\"DD/MMM/YYYY\" cancelText=\"Cancelar\" doneText=\"Guardar\"\n              monthShortNames=\"Ene, Feb, Mar, Apr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic\"\n              [(ngModel)]=\"logistica.FECHA_LOG\" name=\"logistica.FECHA_LOG\" mode=\"ios\"\n              min=\"{{  now.format('YYYY-MM-DD') }}\"\n              ></ion-datetime>\n          </ion-item>\n          <ion-item>\n              <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n              <ion-label position=\"stacked\" >hora</ion-label>\n              <ion-datetime display-format=\"hh:mm A\"  doneText=\"Guardar\" cancelText=\"Cancelar\"\n              [(ngModel)]=\"logistica.TURNO_LOG \" name=\"logistica.TURNO_LOG\"  mode=\"ios\" max=\"12:00\"\n              ></ion-datetime>\n          </ion-item>\n          <ion-item>\n              <ion-icon name=\"git-compare\" slot=\"start\"></ion-icon>\n              <ion-label position=\"stacked\" >Tipo de Viaje</ion-label>\n              <ion-select  ok-text=\"Guardar\" cancel-text=\"Cancelar\"\n                 interface=\"popover\" [(ngModel)]=\"logistica.TIPO\" name=\"logistica.TIPO\" >\n                  <ion-select-option value=\"I\">Ingreso</ion-select-option>\n                  <ion-select-option value=\"S\">Salida</ion-select-option>              \n              </ion-select>\n          </ion-item>          \n          <ion-item>\n              <ion-icon name=\"list-box\" slot=\"start\"></ion-icon>\n              <ion-label position=\"stacked\" >Mensaje</ion-label>\n              <ion-textarea rows=\"4\" cols=\"20\" placeholder=\"Rerefencias del lugar\" \n              clearOnEdit=\"true\" [(ngModel)]=\"logistica.OBSERVACION_CLIENTE\" name=\"logistica.OBSERVACION_CLIENTE\"\n              ></ion-textarea>\n          </ion-item>          \n        </ion-list>\n        <ion-list *ngIf=\"false\">\n            <ion-item>\n                <ion-icon name=\"copy\" slot=\"start\"></ion-icon>\n                <ion-label >Repetir la programación</ion-label>\n                <ion-toggle color=\"primary\" [(ngModel)]=\"isrepeat\" name=\"isrepeat\" ></ion-toggle>\n              </ion-item>\n              <ion-item *ngIf=\"isrepeat\">\n                <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n                <ion-label position=\"stacked\" >Fecha Final</ion-label>\n                <ion-datetime display-format=\"DD/MMM/YYYY\" cancelText=\"Cancelar\" doneText=\"Guardar\"\n                monthShortNames=\"Ene, Feb, Mar, Apr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic\"\n                mode=\"ios\" [(ngModel)]=\"dateendst\" name=\"dateendst\" [min]=\"logistica.FECHA_LOG\"\n                ></ion-datetime>\n            </ion-item> \n        </ion-list>\n        <ion-button icon-start  color=\"primary\" expand=\"full\" size=\"large\"  type=\"submit\">                  \n            <ion-icon name=\"send\"></ion-icon>\n            Enviar\n          </ion-button>\n      </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addroute/addroute.page.scss":
/*!*********************************************!*\
  !*** ./src/app/addroute/addroute.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  background-color: #ff0000;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/addroute/addroute.page.ts":
/*!*******************************************!*\
  !*** ./src/app/addroute/addroute.page.ts ***!
  \*******************************************/
/*! exports provided: AddroutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddroutePage", function() { return AddroutePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/route.service */ "./src/app/api/route.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
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






var AddroutePage = /** @class */ (function () {
    // constructor
    function AddroutePage(router, routeParms, loadCtrl, alertCtrl, routerserv, storage) {
        var _this = this;
        this.router = router;
        this.routeParms = routeParms;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.routerserv = routerserv;
        this.storage = storage;
        // event = { title: '', location: '', message: '', startDate: '', endDate: '' };
        this.datenow = new Date();
        this.dateend = new Date();
        this.now = moment__WEBPACK_IMPORTED_MODULE_5__();
        this.isnew = true;
        this.logistica = {
            CODIGO_LOG: '',
            CODIGO_CLIE: '',
            CODIGO_NOMINA: '',
            TIPO: 'I',
            FECHA_LOG: this.datenow.toISOString(),
            TURNO_LOG: this.datenow.toISOString(),
            OBSERVACION_CLIENTE: ''
        };
        this.storage.get('userlogin').then(function (val) {
            _this.logistica.CODIGO_CLIE = val.CODIGO_CLIE;
            _this.logistica.CODIGO_NOMINA = val.CODIGO_NOMINA;
            _this.logistica.FECHA_LOG = moment__WEBPACK_IMPORTED_MODULE_5__(_this.now.format(), moment__WEBPACK_IMPORTED_MODULE_5__["ISO_8601"]).format();
            _this.logistica.TURNO_LOG = moment__WEBPACK_IMPORTED_MODULE_5__(_this.now.format(), moment__WEBPACK_IMPORTED_MODULE_5__["ISO_8601"]).format();
        });
        this.isrepeat = false;
        this.dateend.setDate(this.datenow.getDate() + 1);
        this.dateendst = this.dateend.toISOString();
    }
    AddroutePage.prototype.ngOnInit = function () {
        var _this = this;
        // revisar listlog si es necesario
        this.storage.get('listlog').then(function (val) {
            _this.Listlg = val != null ? val : new Array();
            /// console.log (this.Listlg );
            _this.routeParms.params.subscribe(function (data) {
                // console.log(data);
                if (data.action === 'edit') {
                    _this.isnew = false;
                    _this.Listlg.forEach(function (element) {
                        if (element.CODIGO_LOG === data.CODIGO_LOG) {
                            _this.logistica = element;
                        }
                    });
                }
                else {
                    var fecha = new Date(data.dateNow);
                    fecha.setHours(0);
                    fecha.setMinutes(0);
                    fecha.setSeconds(0);
                    _this.datenow = fecha;
                    _this.isnew = true;
                    _this.logistica.FECHA_LOG = fecha.toISOString();
                }
            });
        });
    };
    AddroutePage.prototype.gotoaddRoute = function () {
        this.router.navigate(['members', 'list', { refreshlist: 1 }]);
    };
    AddroutePage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert, fecha1, fecha2, fecha3, dif, log, index;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: "Enviando ...",
                            spinner: 'bubbles'
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        fecha1 = new Date(this.logistica.TURNO_LOG);
                        fecha2 = new Date(this.logistica.FECHA_LOG);
                        fecha2.setHours(fecha1.getHours(), fecha1.getMinutes(), 0, 0);
                        this.logistica.FECHA_LOG = moment__WEBPACK_IMPORTED_MODULE_5__(fecha2, moment__WEBPACK_IMPORTED_MODULE_5__["ISO_8601"]).format();
                        if (this.isnew) {
                            // repetir programacion -- arreglar fecha
                            if (false) {}
                            else {
                                // servicio para insertar registros
                                this.routerserv.addLogist(this.logistica).subscribe(function (data) {
                                    console.log(data);
                                    if (data.CODE === 200) {
                                        _this.logistica.CODIGO_LOG = data.NUM_RECORRIDO;
                                        console.log('index log', _this.logistica);
                                        _this.Listlg.push(_this.logistica);
                                        _this.storage.set('listlog', _this.Listlg);
                                        alert.dismiss();
                                        _this.presentAlert('FELICIDADES', data.MSG, true);
                                    }
                                    else {
                                        alert.dismiss();
                                        _this.presentAlert('ERROR', data.MSG, false);
                                    }
                                }, function (error) {
                                    alert.dismiss();
                                    _this.presentAlert('ERROR', 'Problemas de conexion con el servidor', false);
                                });
                            }
                        }
                        else {
                            this.Listlg.forEach(function (elet) {
                                if (elet.CODIGO_LOG === _this.logistica.CODIGO_LOG) {
                                    console.log('edut', _this.logistica);
                                    elet = _this.logistica;
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // parametros: titulo, mensaje, ir a lista = true
    AddroutePage.prototype.presentAlert = function (title, ms, gotoList) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: title,
                            message: ms,
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        if (gotoList) {
                                            _this.router.navigate(['members', 'list', { refreshlist: 1, date: _this.datenow }]);
                                        }
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
    AddroutePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addroute',
            template: __webpack_require__(/*! ./addroute.page.html */ "./src/app/addroute/addroute.page.html"),
            styles: [__webpack_require__(/*! ./addroute.page.scss */ "./src/app/addroute/addroute.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _api_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], AddroutePage);
    return AddroutePage;
}());



/***/ })

}]);
//# sourceMappingURL=addroute-addroute-module.js.map