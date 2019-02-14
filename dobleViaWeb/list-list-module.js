(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" (click)=\"refresh()\">        \n        <ion-icon name=\"refresh\"  slot=\"icon-only\" ></ion-icon>     \n    </ion-buttons>\n    <ion-title>\n      Recoridos\n    </ion-title>\n  </ion-toolbar>\n  <div col-12 class=\"date\" [ngSwitch]=\"dtoday.getDay()\" >\n      <span *ngSwitchCase=\"'0'\">Domingo</span>\n      <span *ngSwitchCase=\"'1'\">Lunes</span>\n      <span *ngSwitchCase=\"'2'\">Martes</span>\n      <span *ngSwitchCase=\"'3'\">Miercoles</span>\n      <span *ngSwitchCase=\"'4'\">Jueves</span>\n      <span *ngSwitchCase=\"'5'\">Viernes</span>\n      <span *ngSwitchCase=\"'6'\">Sabado</span>\n      , {{ dtoday.toLocaleDateString()}}\n  </div>\n  <div padding  >\n      <div class=\"calendar-header\">\n          <ion-grid>\n              <ion-row class=\"calendar-month\">\n                  <ion-col col-2 (click)=\"goToLastMonth()\"><ion-icon name=\"arrow-dropleft-circle\"></ion-icon></ion-col>\n                  <ion-col col-8 text-center>{{currentMonth}} {{currentYear}}</ion-col>\n                  <ion-col col-2 (click)=\"goToNextMonth()\" text-right ><ion-icon name=\"arrow-dropright-circle\"></ion-icon></ion-col>\n                </ion-row>\n          </ion-grid>        \n        </div>\n        <div class=\"calendar-body\">\n            <ion-grid no-padding>\n              <ion-row class=\"calendar-weekday\">\n                <ion-col>Do</ion-col>\n                <ion-col>Lu</ion-col>\n                <ion-col>Ma</ion-col>\n                <ion-col>Mi</ion-col>\n                <ion-col>Ju</ion-col>\n                <ion-col>Vi</ion-col>\n                <ion-col>Sa</ion-col>\n              </ion-row>\n              <ion-row class=\"calendar-date\">\n                <ion-col col-1 *ngFor=\"let lastDay of daysInLastMonth\" class=\"last-month\">{{lastDay}}</ion-col>\n                <ion-col col-1 *ngFor=\"let day of daysInThisMonth\"  (click)=\"selectDate(day)\" >\n                    <span class=\"currentDate\" *ngIf=\"currentDate === day; else otherDate\">{{day}}</span>\n                    <ng-template #otherDate>\n                        <div [ngSwitch]=\"day\">\n                            <span class=\"currentDate\" *ngSwitchCase=\"currentDate\">{{day}} </span>                    \n                            <span class=\"selected-date\" *ngSwitchCase=\"selectDay \">{{day}}</span>                    \n                            <div *ngSwitchDefault>\n                                <span>{{day}}</span>\n                                <div *ngIf=\"eventList != null \" >\n                                    <div class=\"event-bullet\" *ngIf=\"checkEvent(day)\"></div>\n                                  </div>\n                            </div>\n                          </div>\n                    </ng-template>                                    \n                </ion-col>\n                <ion-col col-1 *ngFor=\"let nextDay of daysInNextMonth\" class=\"next-month\">{{nextDay}}</ion-col>\n              </ion-row>\n            </ion-grid>\n        </div>\n  </div>\n  \n</ion-header>\n\n<ion-content padding>  \n    <div *ngIf=\"isSelected\">\n        <ion-card  *ngFor=\"let se of selectedEvent;let i= index  \">\n            <ion-card-header>\n              <ion-grid>\n                <ion-row no-padding>\n                  <ion-col size=\"7\" no-padding >                      \n                      <ion-card-subtitle *ngIf=\"se.TIPO == 'S'\" >Salida</ion-card-subtitle>\n                      <ion-card-subtitle *ngIf=\"se.TIPO == 'I'\" >Ingreso</ion-card-subtitle>\n                      <ion-card-title>{{StringtoDate(se.TURNO_LOG).toLocaleTimeString() }}</ion-card-title>\n                  </ion-col>                    \n                  <ion-col size=\"5\" no-padding >\n                    \n                    <ion-row align-items-end no-padding >\n                      <ion-col no-padding text-center>\n                          <ion-avatar text-center>\n                            <img src=\"assets/img/userDriver.png\" *ngIf=\"se.FOTO == null\" style=\"width: 100%\">\n                            <img src=\"{{ urlservice }}{{ se.FOTO }}\" *ngIf=\"se.FOTO != null\" style=\"width: 100%\">\n                          </ion-avatar>\n                          <!-- <ion-button  *ngIf=\"se.FONO_CELULAR != null\"  shape=\"round\" color=\"danger\" size=\"small\" (click)=\"llamar(se.FONO_CELULAR)\" ><ion-icon name=\"call\"></ion-icon></ion-button> -->\n                          <!-- <ion-button   shape=\"round\" color=\"danger\" size=\"small\" (click)=\"gotoaddRoute('edit',se.CODIGO_LOG)\" ><ion-icon name=\"build\"></ion-icon></ion-button>\n                          <ion-button   shape=\"round\"  color=\"danger\" size=\"small\" (click)=\"deleteEvent(se.CODIGO_LOG,se.FECHA_LOG)\" ><ion-icon name=\"close\"></ion-icon></ion-button>                           -->\n                      </ion-col>                      \n                    </ion-row>                                \n                  </ion-col>\n                </ion-row>                \n              </ion-grid>              \n            </ion-card-header>\n          \n            <ion-card-content padding-horizontal >\n              <ion-list>\n                  <ion-item-divider>\n                      <ion-label>Información del Viaje</ion-label>\n                    </ion-item-divider>\n                  <ion-item class=\"activated\">\n                      <ion-icon name=\"Person\" slot=\"start\"></ion-icon>\n                      <ion-label>Conductor</ion-label>\n                      {{ se.CONDUCTOR }}\n                    </ion-item>                \n                    <ion-item >\n                      <ion-icon name=\"car\" slot=\"start\"></ion-icon>\n                      <ion-label>Placa</ion-label>\n                      {{ se.NUMPLACA }}\n                    </ion-item>                  \n                    <ion-item class=\"activated\">\n                      <ion-icon name=\"clock\" slot=\"start\"></ion-icon>\n                      <ion-label>Hora de llegada</ion-label>\n                      {{ se.HORA_LLEGADA }}\n                    </ion-item> \n                    <ion-item>\n                        <ion-button  slot=\"start\" *ngIf=\"se.FONO_CELULAR != null\"  shape=\"round\" color=\"danger\" size=\"small\" (click)=\"llamar(se.FONO_CELULAR)\" ><ion-icon name=\"call\"></ion-icon></ion-button>\n                        <ion-icon name=\"call\" slot=\"start\" *ngIf=\"se.FONO_CELULAR == null\" ></ion-icon>\n                      <ion-label>Telefono</ion-label>\n                      {{ se.FONO_CELULAR }}\n                    </ion-item>\n                    <ion-item class=\"activated\" >                      \n                      <ion-icon name=\"star\" slot=\"start\" ></ion-icon>\n                      <ion-label>Calificación</ion-label>\n                    </ion-item>\n              </ion-list>                \n            </ion-card-content>\n          </ion-card>   \n    </div>\n    <div *ngIf=\"!isSelected\" >\n      <ion-card color=\"light\">\n        <ion-card-content>\n          <h2> No tiene Recoridos programados para este dia </h2>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"gotoaddRoute('new','')\">        \n        <ion-fab-button >\n            <ion-icon name=\"create\"></ion-icon>\n        </ion-fab-button>        \n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[col-1] {\n  flex: 0 0 14.285714285714286%;\n  width: 14.285714285714286%;\n  max-width: 14.285714285714286%; }\n\n.col {\n  text-align: center;\n  padding: 5px; }\n\nion-avatar {\n  margin: auto; }\n\n.last-month, .next-month {\n  color: #999999;\n  font-size: 90%; }\n\n.currentDate, .otherDate, .selected-date {\n  padding: 5px; }\n\n.currentDate {\n  font-weight: bold;\n  background-color: red;\n  color: white;\n  border-radius: 30px; }\n\n.calendar-header {\n  background-color: #21196e;\n  color: #FFFFFF; }\n\n.event-bullet {\n  margin: 2px auto;\n  height: 5px;\n  width: 5px;\n  background-color: #54419d;\n  border-radius: 30px; }\n\n.selected-date {\n  background: #54419d;\n  color: #FFFFFF;\n  border-radius: 30px;\n  border-color: #54419d;\n  border-style: solid;\n  border-width: 1.5px;\n  font-weight: bold; }\n\n.unselected-date {\n  border: none; }\n\n.calendar-body .grid {\n  padding: 0; }\n\n.calendar-body .col:last-child {\n  border-right: none; }\n\n.calendar-body .calendar-weekday, .calendar-body .calendar-date {\n  text-align: center;\n  margin: 0; }\n\n.calendar-body .calendar-weekday {\n  font-weight: bold;\n  border-bottom: solid 1px #21196e;\n  background-color: #28256b;\n  color: #FFFFFF; }\n\n.calendar-body .calendar-date {\n  border-top: solid 1px #21196e;\n  border-bottom: solid 1px #21196e; }\n\nion-header {\n  background-color: #FFFFFF; }\n\n.date {\n  background: #21196e;\n  color: white;\n  text-align: center;\n  padding-bottom: 1%;\n  padding-top: 1%; }\n"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/route.service */ "./src/app/api/route.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/params */ "./src/app/api/params.ts");
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








var ListPage = /** @class */ (function () {
    // constructor
    function ListPage(router, routeParms, alertCtrl, loadCtrl, storage, routersv, events, callNumber, global) {
        var _this = this;
        this.router = router;
        this.routeParms = routeParms;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.storage = storage;
        this.routersv = routersv;
        this.events = events;
        this.callNumber = callNumber;
        this.global = global;
        this.dtoday = new Date();
        this.datei = new Date();
        this.datef = new Date();
        this.urlservice = global.urlApi;
        this.monthNames = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.date = new Date();
        this.datei.setMonth(this.date.getMonth() - 3);
        this.datef.setMonth(this.date.getMonth() + 3);
        this.datei.setDate(1);
        this.datef.setDate(0);
        this.storage.get('userlogin').then(function (val) {
            _this.user = val;
        });
        this.events.subscribe('userlogin', function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        this.routeParms.params.subscribe(function (data) {
            if (Object.keys(data).length !== 0) {
                if (data.refreshlist === 1) {
                    if (data.datenow != null) {
                        _this.date = new Date(data.datenow);
                        _this.dtoday = new Date(data.datenow);
                    }
                    _this.refresh();
                }
            }
        });
    }
    ListPage.prototype.ngOnInit = function () {
        console.log('cargando');
        this.refresh();
    };
    ListPage.prototype.gotoaddRoute = function (action, codelg) {
        var item = {
            action: action,
            CODIGO_LOG: codelg,
            dateNow: this.dtoday >= this.date ? this.dtoday : this.date
        };
        this.router.navigate(['members', 'addroute', item]);
    };
    // refresh
    ListPage.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: "Cargando ...",
                            spinner: 'bubbles'
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.loadEventThisMonth(alert);
                        return [2 /*return*/];
                }
            });
        });
    };
    // metodos calendario
    ListPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    ListPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        if (this.datei < this.date) {
            this.selectDay = null;
            this.getDaysOfMonth();
        }
    };
    ListPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        if (this.datef > this.date) {
            this.selectDay = null;
            this.getDaysOfMonth();
        }
    };
    ListPage.prototype.loadEventThisMonth = function (alert) {
        var _this = this;
        this.eventList = new Array();
        this.getDaysOfMonth();
        // coregir este detalle para que sea por anio
        this.routersv.getalllogistcs(moment__WEBPACK_IMPORTED_MODULE_6__(this.datei.toISOString(), moment__WEBPACK_IMPORTED_MODULE_6__["ISO_8601"]).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_6__(this.datef.toISOString(), moment__WEBPACK_IMPORTED_MODULE_6__["ISO_8601"]).format('YYYY-MM-DD'), this.user.CODIGO_NOMINA)
            .subscribe(function (data) {
            if (data.CODE === 200) {
                _this.eventList = data.value;
                _this.selectDate(_this.date.getDate());
                alert.dismiss();
            }
            else {
                alert.dismiss();
                console.log('cambiar');
            }
        }, function (error) {
            alert.dismiss();
            _this.presentAlert('ERROR', 'Problemas de conexion con el servidor');
        });
        // this.storage.get('listlog').then( (val) => {
        //   console.log(val);
        //   this.eventList = val;
        //  }).then(() => {
        //   this.getDaysOfMonth();
        //  }).then( () => {
        //   this.selectDate(this.date.getDate());
        //  });
    };
    ListPage.prototype.StringtoDate = function (value) {
        return new Date(value.substring(0, 10) + ' ' + value.substring(11, 16));
    };
    ListPage.prototype.checkEvent = function (day) {
        var hasEvent = false;
        var thisDate1 = new Date(this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00');
        var thisDate2 = new Date(this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59');
        // console.log( this.eventList != null );
        if (this.eventList != null) {
            this.eventList.forEach(function (et) {
                if (et.FECHA_LOG != null) {
                    var dt = et.FECHA_LOG.substring(0, 10) + ' ' + et.FECHA_LOG.substring(11, 16);
                    if ((new Date(dt) >= thisDate1) && (new Date(dt) <= thisDate2)) {
                        hasEvent = true;
                    }
                }
            });
        }
        return hasEvent;
    };
    ListPage.prototype.selectDate = function (day) {
        var _this = this;
        this.isSelected = false;
        this.selectedEvent = new Array();
        var thisDate1 = new Date(this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 00:00:00');
        var thisDate2 = new Date(this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + day + ' 23:59:59');
        this.dtoday = thisDate1;
        this.selectDay = day;
        if (this.eventList != null) {
            this.eventList.forEach(function (et) {
                if (et.FECHA_LOG != null) {
                    var dt = et.FECHA_LOG.substring(0, 10) + ' ' + et.FECHA_LOG.substring(11, 16);
                    if ((new Date(dt) >= thisDate1) && (new Date(dt) <= thisDate2)) {
                        _this.isSelected = true;
                        _this.selectedEvent.push(et);
                    }
                }
            });
        }
    };
    ListPage.prototype.llamar = function (numbercall) {
        var _this = this;
        if (numbercall != null) {
            this.callNumber.callNumber(numbercall, true)
                .then(function (res) {
                _this.presentAlert('LLamada Exitosa', '');
            })
                .catch(function (err) { _this.presentAlert('error', err); });
        }
    };
    ListPage.prototype.deleteEvent = function (ilog, fecha) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('index', ilog, fecha);
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: '¿Desea cancelar este recorrido?',
                                buttons: [
                                    {
                                        text: 'No',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Si',
                                        handler: function () {
                                            var indexj = -1;
                                            for (var index = 0; index < _this.eventList.length; index++) {
                                                var logistic = _this.eventList[index];
                                                if (logistic.CODIGO_LOG === ilog) {
                                                    indexj = index;
                                                }
                                            }
                                            _this.eventList.splice(indexj, 1);
                                            console.log(_this.eventList, 'preuba');
                                            _this.storage.set('listlog', _this.eventList);
                                            _this.selectDate(new Date(fecha).getDate());
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
    ListPage.prototype.presentAlert = function (title, ms) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
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
                                        console.log('Confirm Okay');
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
    ListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _api_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
            _api_params__WEBPACK_IMPORTED_MODULE_7__["Global"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map