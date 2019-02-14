(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\" (click)=\"morechange()\">        \n        <ion-icon name=\"funnel\"></ion-icon>\n        <ion-icon name=\"arrow-down\" *ngIf=\"more\" ></ion-icon>        \n        <ion-icon name=\"arrow-up\" *ngIf=\"!more\" ></ion-icon>        \n    </ion-buttons> -->\n    <ion-title>\n      DobleVia\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content padding  class=\"homeback\">\n  <!-- <div col-12 class=\"date\">\n        {{dtoday.toLocaleDateString()}}\n  </div> -->\n<!-- <ion-grid class=\"ruta\" >\n    <ion-row *ngIf=\"more\">\n      <ion-col col-2>\n      <img src=\"../../assets/img/user.png\" style=\"height: 70px\">\n      </ion-col>\n      <ion-col col-8>\n        <h3>Juan Luis</h3>\n        <p>Entrada</p>\n      </ion-col>\n      <ion-col col-2>\n        <h4>6:00</h4>\n        <p><ion-icon name=\"time\"></ion-icon> 10:00:00 </p>\n      </ion-col>\n      \n    </ion-row>\n    <ion-row *ngIf=\"!more\">\n        <ion-col col-6 >\n            <h3 class=\"entrada\" >Entrada</h3>\n        </ion-col>\n        <ion-col col-6 class=\"endalign\">\n            <h4>6:00</h4>\n        </ion-col>\n    </ion-row>  \n    <ion-row *ngIf=\"!more\"  justify-content-center>\n        <ion-col col-2>\n            <img src=\"../../assets/img/user.png\" style=\"height: 60px\"><br>\n            <ion-button icon-start color=\"primary\" size=\"small\">\n                <ion-icon name=\"call\" ></ion-icon>\n                \n            </ion-button>             \n            <ion-button  icon-start color=\"success\" size=\"small\">\n                <ion-icon name=\"logo-whatsapp\"></ion-icon>      \n            </ion-button>             \n        </ion-col>\n        <ion-col col-8 class='startalign'>\n              <h4>Juan Luis</h4>\n              <p><ion-icon name=\"car\"></ion-icon> PBC-044 <br>\n                <ion-icon name=\"radio-button-on\"></ion-icon> Rojo <br>\n                <ion-icon name=\"radio\"></ion-icon>C6<br> </p>\n            </ion-col>\n            <ion-col col-2>\n              <p>Tiempo de llegada</p>              \n              <p><ion-icon name=\"time\"></ion-icon> 10:00:00 <br>\n                <ion-button  icon-start color=\"danger\" size=\"small\">\n                    <ion-icon name=\"close\"></ion-icon>                \n                    Cancelar\n                </ion-button> </p>\n            </ion-col>\n    </ion-row> \n</ion-grid>\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\"  (click)=\"loadMap()\" >\n    <ion-fab-button>\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <div id=\"map\">\n\n  </div> -->\n  <ion-grid style=\"height: 100%\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <h1>Bienvenido(a)</h1>   \n          </ion-col> \n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div text-center>\n              <img src=\"assets/img/user.png\" style=\"width: 140px;padding-top: 6%\">\n            </div>\n           </ion-col>           \n        </ion-row>\n        <ion-row>\n          <ion-col text-center>\n            <h2 no-margin> {{ NombreUnido (user.APELLIDOS, user.NOMBRES) }}</h2>\n            <p no-margin><strong>  {{ user.EMPRESA }}</strong></p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button shape=\"round\" expand=\"full\" (click)=\"openMenu()\">Empezar</ion-button>\n           </ion-col> \n        </ion-row>\n      </ion-grid>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  background-color: #ff0000;\n  color: white; }\n\n.date {\n  background: #322b2a;\n  color: white;\n  text-align: center;\n  padding-bottom: 1%;\n  padding-top: 1%; }\n\n.ruta {\n  background-color: #f2f2f2;\n  text-align: center; }\n\n.entrada {\n  text-align: start;\n  border-bottom: 2px #322b2a solid; }\n\n.startalign {\n  text-align: start; }\n\n.endalign {\n  text-align: end; }\n\nh3, h4, p {\n  margin-bottom: 8px;\n  margin-top: 4px; }\n\n#map {\n  display: block;\n  height: 100%;\n  width: 100%; }\n\n.homeback {\n  --background: url('fondo.jpg') !important;\n  -webkit-background: url('fondo.jpg') !important;\n  -moz-background: url('fondo.jpg') !important;\n  -webkit-background-repeat: repeat;\n  -webkit-background-position: left top;\n  background-repeat: repeat;\n  background-position: left top; }\n\nh1 {\n  font-size: 2.5em; }\n\nh2 {\n  font-size: 2em; }\n\np {\n  font-size: 1.5em; }\n\nion-button {\n  font-size: 1em; }\n"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var HomePage = /** @class */ (function () {
    function HomePage(
    //  private geolocation: Geolocation,
    loadinCtrl, alertCtrl, storage, router, menu, platform) {
        this.loadinCtrl = loadinCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.router = router;
        this.menu = menu;
        this.platform = platform;
        this.dtoday = new Date();
        this.more = true;
        this.myLatLng = {
            lat: 0,
            lng: 0
        };
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
    }
    HomePage.prototype.morechange = function () {
        this.more = !this.more;
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('userlogin').then(function (val) {
            if (val) {
                _this.user = val;
            }
        });
        // this.loadMap();
    };
    HomePage.prototype.openMenu = function () {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    };
    /*async loadMap () {
      // const loading = await this.loadinCtrl.create({
      //   message: `Cargando ...`,
      //   spinner: 'bubbles'
      // });
      // loading.present();
      await this.getposition().catch(() => {
        // loading.dismiss();
        this.alerta();
      } );
  
      const mapEle: HTMLElement = document.getElementById('map');
  
      // Create a map
      this.map = new google.maps.Map(mapEle, {
        center: this.myLatLng,
        zoom: 16
      });
      google.maps.event
      .addListenerOnce(this.map, 'idle', () => {
        // loading.dismiss();
        this.addMark(this.myLatLng.lat, this.myLatLng.lng);
      });
    }
  */
    /*private async getposition() {
      const rta = await this.geolocation.getCurrentPosition();
      this.myLatLng = {
        lat: rta.coords.latitude,
        lng: rta.coords.longitude
      };
      console.log(this.myLatLng);
    } */
    HomePage.prototype.addMark = function (lat, lng) {
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            zoom: 8,
            map: this.map,
            title: 'Hello World!'
        });
    };
    HomePage.prototype.alerta = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Error ',
                            subHeader: 'No se puede localizar su ubicacion',
                            message: 'Habilite su GPS',
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
    HomePage.prototype.MaysPrimera = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    HomePage.prototype.NombreUnido = function (apellido, nombre) {
        return this.MaysPrimera(nombre.split(' ', 1)[0].toLowerCase()) + ' ' + this.MaysPrimera(apellido.split(' ', 1)[0].toLowerCase());
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map