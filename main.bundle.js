webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login-page', component: __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'home-page', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h6 (click)=\"goToHomePage()\" style=\"cursor:pointer\">RJ Shopping Demo</h6>\n\n\n\n\n\n<!--   <nav *ngIf=\"(user | async)?.uid\">\n    <div *ngIf=\"(user | async)?.uid\" class=\"nav-wrapper\">\n    <div class=\"chip\">\n    \n    {{userName}}\n  </div>  -->\n <!--  {{userName}} -->\n     <!-- <img src={{imageUrl}} style=\"border-radius:50%;margin-top:1%;margin-left:1%\" height=\"25 !important\" width=\"25 !important\"> -->\n      <!-- <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a (click)=\"logout()\">LogOut</a></li>\n        <li><a href=\"badges.html\">Components</a></li>\n      </ul>\n    </div>\n  </nav>\n<button (click)=\"login()\" *ngIf=\"!(user | async)?.uid\">Login</button> -->\n<router-outlet></router-outlet>\n\n\n<!-- <footer class=\"page-footer\">\n          <div class=\"footer-copyright\">\n            © 2017 RJ Shopping Demo \n          </div>\n        </footer> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let AppComponent = class AppComponent {
    constructor(afAuth, af, _productService, router) {
        this.afAuth = afAuth;
        this.af = af;
        this._productService = _productService;
        this.router = router;
        this.title = 'app';
        this.user = this.afAuth.authState;
    }
    ngOnInit() {
        this.issubCategorySelected = false;
        this.isCategorySelected = false;
        this.isDepartmentSelected = false;
        this.isProductSelected = false;
    }
    login() {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].GoogleAuthProvider());
        let fireBaseUser = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().currentUser;
        this.user.subscribe(data => {
            console.log(data);
            if (data != null) {
                this.imageUrl = data.photoURL;
                this.userName = data.displayName;
                console.log('Im in');
                this.isLoggedIn = true;
                this.router.navigateByUrl('home-page');
            }
            /* this.imageUrl = this.afAuth.auth.currentUser.photoURL; */
        });
    }
    setDepartment() {
        this.currentDepartment = this._productService.selectedDepartment;
        this.isDepartmentSelected = true;
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
    }
    setCategory() {
        this.currentCategory = this._productService.selectedCategory;
        this.isCategorySelected = true;
        this.issubCategorySelected = false;
    }
    setSubCategory() {
        this.currentSubCategory = this._productService.selectedSubCategory;
        this.issubCategorySelected = true;
    }
    setProduct() {
    }
    shiftToDepartment() {
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
        this.isDepartmentSelected = true;
    }
    shiftToCategory() {
        this.issubCategorySelected = false;
        this.isCategorySelected = true;
    }
    shiftToSubCategory() {
    }
    shiftToHome() {
        this.isDepartmentSelected = false;
    }
    logout() {
        this.afAuth.auth.signOut();
        this.imageUrl = "";
        this.userName = "";
        this.isLoggedIn = false;
        this.router.navigateByUrl("home-page");
    }
    call() {
        this.router.navigateByUrl("login-page");
    }
    goToHomePage() {
        this.router.navigateByUrl('home-page');
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { MdlModule } from '@angular-mdl/core';










const firebaseConfig = {
    apiKey: "AIzaSyCYozTNiEyOyUKVl_1DLoY9hJPgddlxKVE",
    authDomain: "shoppingdemo-e8235.firebaseapp.com",
    databaseURL: "https://shoppingdemo-e8235.firebaseio.com",
    storageBucket: "shoppingdemo-e8235",
    messagingSenderId: "383193231090"
};
/* unused harmony export firebaseConfig */

let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_11__services_product_service__["a" /* ProductService */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dept{\r\n    border: 1.5px solid darkorange !important;\r\n    padding: 2%;\r\n    margin: 1%;\r\n}\r\n\r\n.dept1{\r\n    border: 1.5px solid mediumseagreen;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 1%;\r\n    font-size: x-large;\r\n    margin: 0.5%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  text-align: center;\r\n}\r\n\r\n.bc{\r\n    cursor: pointer;\r\n}\r\n\r\n.dept1:hover{\r\n    border: 1.5px solid darkorange;\r\n\r\n}\r\n\r\n\r\n.dept1 {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  border-radius: 5px;\r\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.dept1::after {\r\n  content: \"\";\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n  opacity: 0;\r\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\r\n}\r\n\r\n.dept1:hover {\r\n  -webkit-transform: scale(0.90, 0.90);\r\n  transform: scale(0.90, 0.90);\r\n}\r\n\r\n.dept1:hover::after {\r\n    opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"background-color:darkorange\">\n  <div class=\"nav-wrapper\">\n    <div class=\"col s12\">\n      <a class=\"breadcrumb bc\" style=\"margin-left:1%\" (click)=\"shiftToHome()\">Home</a>\n      <a class=\"breadcrumb bc\" (click)=\"shiftToDepartment()\" *ngIf=\"isDepartmentSelected\">{{currentDepartment}}</a>\n      <a class=\"breadcrumb bc\" (click)='shiftToCategory()' *ngIf=\"isCategorySelected\">{{currentCategory}}</a>\n      <a class=\"breadcrumb bc\" (click)='shiftToSubCategory()' *ngIf=\"issubCategorySelected\">{{currentSubCategory}}</a>\n      <a class=\"breadcrumb bc\" *ngIf=\"showRouterOutlet\">{{currentProduct.productName}}</a>\n    </div>\n  </div>\n</nav>\n<marquee direction=\"right\" width=\"40%\">\n  <h6>{{selectText}}</h6>\n</marquee>\n\n\n\n\n<div *ngIf=\"!isDepartmentSelected && !isCategorySelected && !issubCategorySelected\">\n  <div class=\"row\" id=\"dept\">\n    <div class=\"department\" class=\"col s3 dept1\" style=\"width:24.5%\" *ngFor=\"let x of allDepartmentsList\">\n      <div class=\"animated fadeIn\" (click)=\"selectDepartment($event.target.innerText)\">\n        {{x}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"isDepartmentSelected && !isCategorySelected\">\n  <div class=\"row\" id=\"dept\">\n    <div class=\"category\" class=\"col s3 dept1\" style=\"width:24.5%\" *ngFor=\"let x of specificCategoriesList\">\n      <div class=\"animated fadeIn\" (click)=\"selectCategory($event.target.innerText)\">\n        {{x}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!issubCategorySelected && isCategorySelected\">\n  <div class=\"row\" id=\"dept\">\n    <div class=\"category\" class=\"col s3 dept1\" style=\"width:24.5%\" *ngFor=\"let x of specificSubCategoriesList\">\n      <div class=\"animated fadeIn\" (click)=\"selectSubCategory($event.target.innerText)\">\n        {{x}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"displayAllProductsFlag\">\n  <div class=\"col s6 m3\" *ngFor=\"let product of productsToBeDisplayed\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src={{product.productImage}} style=\"width:250px;height:250px;\" (click)=\"goToSpecificProduct(product)\">\n      </div>\n      <div class=\"card-content\">\n        <span class=\"card-title\" style=\"color:black\">{{product.productName}}</span>\n        <p style=\"color:lightskyblue\">{{product.productLongDescription}}</p>\n      </div>\n      <div class=\"card-action\">\n        <a>{{product.productBrand}}</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"noProductsFlag\">{{noProduct}}</div>\n\n\n\n\n\n\n<div class=\"row\" *ngIf=\"showRouterOutlet\">\n  <div class=\"col s6 m3\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src={{currentProduct.productImage}} style=\"width:350px;height:350px;\">\n      </div>\n      <div class=\"card-action\">\n        <a>{{currentProduct.productBrand}}</a>\n        <div><span class=\"card-title\" style=\"color:black\">{{currentProduct.productName}}</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col s6\">\n    <div class=\"row\">\n      <label class=\"x1\">Description:</label><span style=\"margin-left:1%\">{{currentProduct.productLongDescription}}</span>\n\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Features:</label>\n      <ul class=\"collection\">\n        <li *ngFor=\"let x of currentProduct.productFeatures\" class=\"collection-item\">{{x}}</li>\n      </ul>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Brand:</label><span style=\"margin-left:1%\">{{currentProduct.productBrand}}</span>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Name:</label><span style=\"margin-left:1%\">{{currentProduct.productName}}</span>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Price:</label><span style=\"margin-left:1%\">{{currentProduct.productCurrentPrice}}</span>\n    </div>\n    <div class=\"row\">\n      <label class=\"x1\">Short Desc.,:</label><span style=\"margin-left:1%\">{{currentProduct.productShortDescription}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let HomePageComponent = class HomePageComponent {
    constructor(router, db, fb, _productService) {
        this.router = router;
        this.db = db;
        this.fb = fb;
        this._productService = _productService;
        this.currentProduct = new __WEBPACK_IMPORTED_MODULE_4__models_product__["a" /* Product */]();
        this.allDepartmentsList = [];
        this.specificCategoriesList = [];
        this.specificSubCategoriesList = [];
        this.productsToBeDisplayed = new Array();
        this.noProduct = 'There are no products available in this section yet!!';
        this.ProductsList = this.db.list('/Products_List');
        //console.log(this.db.database.ref('/Products_Lists'));
    }
    ngOnInit() {
        this.issubCategorySelected = false;
        this.isCategorySelected = false;
        this.isDepartmentSelected = false;
        this.isProductSelected = false;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
        this.noProductsFlag = false;
        this.selectText = 'Select any Department to get Started';
        this.fb.fetchDepartments().subscribe(data => {
            //console.log(data);
            var x = Object.keys(data);
            //console.log(Object.values(data));
            for (var i = 0; i < x.length; i++) {
                this.allDepartmentsList.push(data[x[i]]);
            }
            ////console.log(this.allDepartmentsList);
        });
    }
    selectDepartment(value) {
        this.isDepartmentSelected = true;
        this.currentDepartment = value;
        ////console.log(value);
        this.fb.fetchSpecificDepartment(value).subscribe(data => {
            var x = Object.keys(data);
            //console.log(Object.values(data));
            this.specificCategoriesList = [];
            this.specificCategoriesList = x;
            this.selectText = 'Select a Category';
        });
    }
    selectCategory(value) {
        this.isCategorySelected = true;
        this.currentCategory = value;
        this.specificSubCategoriesList = [];
        this.fb.fetchSpecificCategory(this.currentDepartment, this.currentCategory).subscribe(data => {
            var x = Object.keys(data);
            //console.log(Object.values(data));
            for (var i = 0; i < x.length; i++) {
                if (data[x[i]] === '') {
                    continue;
                }
                else {
                    this.specificSubCategoriesList.push(x[i]);
                }
            }
            this.selectText = 'Select a Sub Category';
        });
    }
    selectSubCategory(value) {
        this.issubCategorySelected = true;
        this.noProductsFlag = false;
        this.displayAllProductsFlag = true;
        this.currentSubCategory = value;
        this.productsToBeDisplayed = [];
        this.fb.fetchSpecificSubCategory(this.currentDepartment, this.currentCategory, this.currentSubCategory).subscribe(data => {
            for (var prop in data) {
                this.productsToBeDisplayed.push(data[prop]);
            }
            for (var i = 0; i < this.productsToBeDisplayed.length; i++) {
                if (this.productsToBeDisplayed[i] === '') {
                    this.productsToBeDisplayed.splice(i, 1);
                }
            }
            if (this.productsToBeDisplayed.length === 0) {
                this.noProductsFlag = true;
            }
            else {
                this.noProductsFlag = false;
            }
            //console.log(this.productsToBeDisplayed);
        });
    }
    goToSpecificProduct(product) {
        ////console.log(product);
        this.isDepartmentSelected = true;
        this.isCategorySelected = true;
        this.issubCategorySelected = true;
        //this.productsToBeDisplayed = [];
        this.displayAllProductsFlag = false;
        this.showRouterOutlet = true;
        this._productService.setProduct(product);
        this.currentProduct = this._productService.getProduct();
        this.isProductSelected = true;
        //this.router.navigateByUrl('home-page/specific-product');
    }
    shiftToDepartment() {
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
        this.isDepartmentSelected = true;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
        this.noProductsFlag = false;
        this.selectText = 'Select any Department to get Started';
    }
    shiftToCategory() {
        this.noProductsFlag = false;
        this.issubCategorySelected = false;
        this.isCategorySelected = true;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
        this.selectText = 'Select a Category';
    }
    shiftToSubCategory() {
        this.noProductsFlag = false;
        this.selectText = 'Select a Sub Category';
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = true;
    }
    shiftToHome() {
        this.noProductsFlag = false;
        this.isDepartmentSelected = false;
        this.isCategorySelected = false;
        this.issubCategorySelected = false;
        this.showRouterOutlet = false;
        this.displayAllProductsFlag = false;
    }
    ngOnDestroy() {
        //console.log('im leaving');
        this.isDepartmentSelected = true;
        this.isCategorySelected = true;
        this.issubCategorySelected = true;
    }
};
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */]) === "function" && _d || Object])
], HomePageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button mdl-button mdl-button-type=\"raised\" mdl-ripple (click)=\"login()\" *ngIf=\"!(user | async)?.uid\">Login</button>\n  \n\n\n  <nav *ngIf=\"(user | async)?.uid\">\n    <div class=\"nav-wrapper\">\n       <div class=\"chip\" style=\"width:12%\">\n    {{userName}}\n  </div>\n    \n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a (click)=\"logout()\">LogOut</a></li>\n        <li><a href=\"badges.html\">Components</a></li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let LoginPageComponent = class LoginPageComponent {
    constructor(afAuth, af, router) {
        this.afAuth = afAuth;
        this.af = af;
        this.router = router;
        this.user = this.afAuth.authState;
    }
    ngOnInit() {
    }
    login() {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider());
        let fireBaseUser = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
        this.user.subscribe(data => {
            console.log(data);
            if (data != null) {
                this.imageUrl = data.photoURL;
                this.userName = data.displayName;
                console.log('Im in');
                this.isLoggedIn = true;
                this.router.navigateByUrl('home-page');
            }
            /* this.imageUrl = this.afAuth.auth.currentUser.photoURL; */
        });
    }
    fetch() {
        console.log(this.afAuth.auth.currentUser);
        this.imageUrl = this.afAuth.auth.currentUser.photoURL;
    }
    logout() {
        this.afAuth.auth.signOut();
        this.imageUrl = "";
        this.userName = "";
        this.isLoggedIn = false;
        this.router.navigateByUrl("home-page");
    }
};
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginPageComponent);

var _a, _b, _c;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Product {
    constructor() {
        this.productFeatures = [];
        this.productPriceArray = [];
        this.productComments = [];
        this.productInWishLists = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Product;

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AuthService {
    constructor() {
        this.currentUser = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AuthService;

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let FirebaseService = class FirebaseService {
    constructor(http) {
        this.http = http;
    }
    fetchCategories() {
        return this.http.get('https://samplesite-dd655.firebaseio.com/Lists/CategoriesList.json').map(res => res.json());
    }
    fetchDepartments() {
        return this.http.get('https://samplesite-dd655.firebaseio.com/Lists/DepartmentsList.json').map(res => res.json());
    }
    fetchSubCategories() {
        return this.http.get('https://samplesite-dd655.firebaseio.com/Lists/SubCategoriesList.json').map(res => res.json());
    }
    fetchClasses() {
        return this.http.get('https://samplesite-dd655.firebaseio.com/Lists/ProductsList.json').map(res => res.json());
    }
    fetchSpecificDepartment(department) {
        return this.http.get('https://samplesite-dd655.firebaseio.com/Products_List/' + department + '.json').map(res => res.json());
    }
    fetchSpecificCategory(department, category) {
        return this.http.get('https://samplesite-dd655.firebaseio.com/Products_List/' + department + '/' + category + '/' + '.json').map(res => res.json());
    }
    fetchSpecificSubCategory(d, c, s) {
        return this.http.get('https://samplesite-dd655.firebaseio.com/Products_List/' + d + '/' + c + '/' + s + '/' + '.json').map(res => res.json());
    }
};
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProductService = class ProductService {
    constructor() { }
    setProduct(product) {
        this.productToBeLoaded = product;
    }
    getProduct() {
        return this.productToBeLoaded;
    }
};
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProductService);

//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map