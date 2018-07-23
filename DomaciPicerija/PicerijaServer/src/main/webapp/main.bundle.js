webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<!-- Fixed navbar -->\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"main\">Trattoria</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a href=\"main\">Home</a></li>\r\n        <li><a href=\"about\">About</a></li>\r\n        <li><a href=\"contact\">Contact</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav pull-right\">\r\n        <li *ngIf=\"!isLoggedIn()\"><a href=\"login\">Log in</a></li>\r\n\t\t\t\t<li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\">Logout</a></li>\r\n\t\t\t</ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid theme-showcase\" role=\"main\">\r\n    <div class=\"jumbotron\">\r\n        <h1>Trattoria La Campagna</h1>\r\n        <p>...perfect place to grab a quick bite and wash it down with some local wine...</p>\r\n      </div>\r\n    <router-outlet></router-outlet>\r\n</div>  \r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_token_interceptor_service__ = __webpack_require__("../../../../../src/app/service/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_can_activate_auth_guard__ = __webpack_require__("../../../../../src/app/service/can-activate-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_main_main_component__ = __webpack_require__("../../../../../src/app/page/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_details_details_component__ = __webpack_require__("../../../../../src/app/page/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_menu_service__ = __webpack_require__("../../../../../src/app/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_details_comment_service__ = __webpack_require__("../../../../../src/app/page/details/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_12__page_main_main_component__["a" /* MainComponent */] },
    { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_14__page_details_details_component__["a" /* DetailsComponent */] },
    // { path: 'main', component: MainComponent, canActivate:[CanActivateAuthGuard]},
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_14__page_details_details_component__["a" /* DetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: false
                })
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_10__service_token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_8__service_authentication_service_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_11__service_can_activate_auth_guard__["a" /* CanActivateAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__service_jwt_utils_service__["a" /* JwtUtilsService */],
                __WEBPACK_IMPORTED_MODULE_15__service_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_13__service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_16__page_details_comment_service__["a" /* CommentService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\r\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n        <label for=\"username\" class=\"sr-only\">Username</label>\r\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\"\r\n          required autofocus>\r\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\"\r\n          required>\r\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n      </form>\r\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\r\n        Wrong username or password.\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
var Menu = (function () {
    function Menu(menu) {
        this.id = menu.id;
        this.name = menu.name;
        this.category = menu.category;
        this.price = menu.price;
    }
    return Menu;
}());



/***/ }),

/***/ "../../../../../src/app/page/details/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = (function () {
    function CommentService(httpClient) {
        this.httpClient = httpClient;
    }
    CommentService.prototype.getComments = function (menuId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]();
        params = params.append('menuId', menuId.toString());
        return this.httpClient.get("api/comments", { params: params });
    };
    CommentService.prototype.saveCommentOnNews = function (comment) {
        return this.httpClient.post("api/comments", comment);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/page/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"menu\" class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h1>{{menu.name}}</h1>\r\n            <br/>\r\n            <p>{{menu.price}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n                <form (ngSubmit)=\"comment()\" class=\"form\">\r\n                        Korisnik:\r\n                        <input [(ngModel)]=\"newComment.authorName\" class=\"form-control\" type=\"text\" name=\"username\" /> \r\n                        Komentar:\r\n                        <input [(ngModel)]=\"newComment.content\" class=\"form-control\" type=\"text\" name=\"firstName\" />\r\n                        <br/>\r\n                        <input class=\"btn btn-primary\" type=\"submit\" value=\"Ostavi komentar\" />\r\n            \r\n                    </form>\r\n            \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n            <div class=\"col-md-8\">\r\n                <h4>Komentari</h4>\r\n                <table *ngIf=\"comment\" class=\"table table-striped\" >\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Korisnik</th>\r\n                            <th>Komentar</th>\r\n                            <th>Komentariši</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of comment let one = index\">\r\n                            <td>{{item.authorName}}</td>\r\n                            <td>{{item.content}}, {{}}</td>\r\n\r\n                        <!--    <td><b *ngIf=\"item.reference_comment\">&ensp;</b>{{item.details}}</td> -->\r\n                            <td><button  (click)=\"addComment(item.id)\" class=\"btn btn-default\">Komentariši</button></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        \r\n    "

/***/ }),

/***/ "../../../../../src/app/page/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_menu_service__ = __webpack_require__("../../../../../src/app/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_service__ = __webpack_require__("../../../../../src/app/page/details/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = (function () {
    function DetailsComponent(menuService, commentService, route) {
        this.menuService = menuService;
        this.commentService = commentService;
        this.route = route;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.loadData();
        //this.route.params.subscribe((params)=>{
        //var id = +params['id'];
        //this.menuService.getMenu(id).subscribe((resp)=>{
        //this.menu = resp;
        //})
        //})
    };
    DetailsComponent.prototype.loadData = function () {
        var _this = this;
        this.menuService.getMenu(this.route.snapshot.params.id).subscribe(function (data) {
            _this.menu = data;
        });
        this.commentService.getComments(this.route.snapshot.params.id).subscribe(function (data) {
            _this.comment = data;
        });
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("../../../../../src/app/page/details/details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/details/details.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_3__comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"filter()\" class=\"form form-inline\">\r\n  Name:\r\n  <input name=\"name\" [(ngModel)]=\"searchName\" type=\"text\" class=\"form-control\"/>\r\n  <input type=\"submit\" value=\"filter\" class=\"form-control\"/>\r\n</form>\r\n{{currentPage}}\r\n<div class=\"row\">\r\n  \r\n<div *ngIf=\"page\" class=\"{{getTableClass()}}\">\r\n  <button  (click)=\"changePage(-1)\" class=\"btn pull-right\">b</button>\r\n  <button  (click)=\"changePage(1)\" class=\"btn pull-right\">f</button>\r\n  <table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Category</th>\r\n      <th>Price</th>\r\n      <th *ngIf=\"isLoggedIn()\">Action</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of page.content\">\r\n      <td>{{item.name}}</td>\r\n      <td>{{item.category.name}}</td>\r\n      <td>{{item.price}} <a class=\"btn btn-primary\" href=\"news/{{item.id}}\">detalji</a>\r\n      </td>\r\n      <td *ngIf=\"isLoggedIn()\">\r\n          <button *ngIf=\"isLoggedIn()\" (click)=\"delete(item)\" class=\"btn btn-danger\">delete</button>\r\n          <button *ngIf=\"isLoggedIn()\" (click)=\"edit(item)\" class=\"btn btn-default\">edit</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n<div class=\"col-md-4\" *ngIf=\"isLoggedIn()\">\r\n<form  (ngSubmit)=\"save()\" class=\"form\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\"> Name:</label>\r\n    <input [(ngModel)]=\"menuToAdd.name\" id =\"name\" class=\"form-control\" type=\"text\" name=\"name\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    \r\n    <label for=\"category\">Category:</label>\r\n    <select [compareWith]=\"byId\" id=\"category\" [(ngModel)]=\"menuToAdd.category\" name=\"category\" class=\"form-control\">\r\n      <option *ngFor=\"let category of categories;\" [ngValue]=\"category\">{{category.name}}</option>\r\n    </select>  \r\n  </div>\r\n  <div class=\"form-group\">\r\n    Price:<input [(ngModel)]=\"menuToAdd.price\" class=\"form-control\" type=\"number\" name=\"price\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input class=\"btn btn-primary\" type=\"submit\" value=\"save\"/>\r\n    <button (click)=\"reset()\">reset</button>\r\n  </div>\r\n</form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/page/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_menu_service__ = __webpack_require__("../../../../../src/app/service/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(menuService, categoryService, authenticationService) {
        this.menuService = menuService;
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.currentPage = 0;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.reset();
    };
    MainComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    MainComponent.prototype.loadData = function () {
        var _this = this;
        this.menuService.getMenues(this.currentPage).subscribe(function (data) {
            _this.page = data;
            _this.totalPages = data['totalPages'];
        });
        this.categoryService.get().subscribe(function (data) {
            _this.categories = data;
        });
    };
    MainComponent.prototype.filter = function () {
        var _this = this;
        this.menuService.filter(this.searchName).subscribe(function (data) {
            _this.page.content = data;
        });
    };
    MainComponent.prototype.save = function (menuToAdd) {
        var _this = this;
        if (this.menuToAdd.id) {
            this.menuService.editMenu(this.menuToAdd).subscribe(function (data) {
                _this.loadData();
                _this.reset();
            });
        }
        else {
            this.menuService.addMenu(this.menuToAdd).subscribe(function (data) {
                _this.loadData();
                _this.reset();
            });
        }
    };
    MainComponent.prototype.reset = function () {
        this.menuToAdd = new __WEBPACK_IMPORTED_MODULE_3__model_model__["a" /* Menu */]({
            name: '',
            price: 0,
            category: {
                name: ''
            }
        });
    };
    MainComponent.prototype.edit = function (menu) {
        this.menuToAdd = menu;
    };
    MainComponent.prototype.delete = function (menu) {
        var _this = this;
        this.menuService.deleteMenu(menu)
            .subscribe(function () {
            _this.loadData();
        });
    };
    MainComponent.prototype.byId = function (category1, category2) {
        return category1.id === category2.id;
    };
    MainComponent.prototype.getTableClass = function () {
        if (this.isLoggedIn() === true) {
            return "col-md-8";
        }
        else {
            return "col-md-12";
        }
    };
    MainComponent.prototype.changePage = function (i) {
        this.currentPage += i;
        this.loadData();
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/page/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/main/main.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1__service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Wrong page buddy :)\r\n</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/authentication-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            if (error.status === 400) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw('Ilegal login');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
            }
        });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__["a" /* JwtUtilsService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/service/can-activate-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/service/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(httpClient) {
        this.httpClient = httpClient;
        this.path = "/api/categories";
    }
    CategoryService.prototype.get = function () {
        return this.httpClient.get("/api/categories")
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.message || 'Server Error');
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/service/jwt-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtUtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtUtilsService = (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "../../../../../src/app/service/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
    }
    MenuService.prototype.getMenues = function (page) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]();
        params = params.append('page', page.toString());
        return this.http.get('api/menu', { params: params });
    };
    MenuService.prototype.getMenu = function (id) {
        return this.http.get("api/menu/" + id)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.message || 'Server Error');
        });
    };
    MenuService.prototype.deleteMenu = function (menu) {
        return this.http.delete("api/menu/" + menu.id, { responseType: 'text' }).
            catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.message || 'Server error');
        });
    };
    MenuService.prototype.editMenu = function (menu) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.put("api/menu/" + menu.id, JSON.stringify(menu), { headers: headers })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.message || 'Server Error');
        });
    };
    MenuService.prototype.addMenu = function (menu) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post('api/menu', JSON.stringify(menu), { headers: headers })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.message || 'Server Error');
        });
    };
    MenuService.prototype.filter = function (menuName) {
        var params;
        return this.http.get("api/menu?menuName=" + menuName)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.message || 'Server Error');
        });
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "../../../../../src/app/service/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map