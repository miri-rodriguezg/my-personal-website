function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 49,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", ""], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], [1, "scrollable"], ["align", "center", "cellpadding", "20"], ["align", "center"], ["href", "https://github.com/miri-rodriguezg", "target", "_blank"], ["src", "assets/images/github.png", "width", "120", "height", "45"], ["href", "https://www.linkedin.com/in/miriam-rodriguez-garcia/", "target", "_blank"], ["src", "assets/images/linkedin.jpg", "width", "120", "height", "40"], ["href", "assets/files/resume.pdf", "target", "_blank", "type", "application/pdf"], ["src", "assets/images/resume.png", "width", "170", "height", "50"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Hello! Welcome to my little corner of the internet \uD83D\uDC4B. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " I am a Spanish computer science undergraduate, studying in London, with a one year placement in Silicon Valley and completing my final year thesis with BMW as my client. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Throughout my professional development, I have grown as a fast-learning and pro-active individual that can adapt to different working environments and expectations. I love working as a Software Engineer and being part of the dynamic changing world of technology as it guarantees continuous thriving and varied challenges thoughout my career, making my work very exciting! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " I love building projects, automating tedious workloads and learning new innovative technologies for people to benefit from higher efficiency, simplicity and flexibility. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["p[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 20px;\n  text-align: center;\n  margin-top: 0;\n}\n\n.scrollable[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: justify;\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICBcbn1cblxuLnNjcm9sbGFibGV7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB3aWR0aDogNjAlXG5cbn0iLCJwIHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnNjcm9sbGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDYwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home/home.component */
    "./src/app/home/home/home.component.ts");
    /* harmony import */


    var _coding_main_coding_main_coding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coding/main-coding/main-coding.component */
    "./src/app/coding/main-coding/main-coding.component.ts");
    /* harmony import */


    var _other_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./other/page-not-found/page-not-found.component */
    "./src/app/other/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _coding_web_apps_web_apps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./coding/web-apps/web-apps.component */
    "./src/app/coding/web-apps/web-apps.component.ts");
    /* harmony import */


    var _coding_mobile_apps_mobile_apps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coding/mobile-apps/mobile-apps.component */
    "./src/app/coding/mobile-apps/mobile-apps.component.ts");
    /* harmony import */


    var _coding_gaming_apps_gaming_apps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./coding/gaming-apps/gaming-apps.component */
    "./src/app/coding/gaming-apps/gaming-apps.component.ts");
    /* harmony import */


    var _work_experience_main_work_main_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./work-experience/main-work/main-work.component */
    "./src/app/work-experience/main-work/main-work.component.ts");
    /* harmony import */


    var _hobbies_main_hobbies_main_hobbies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hobbies/main-hobbies/main-hobbies.component */
    "./src/app/hobbies/main-hobbies/main-hobbies.component.ts");
    /* harmony import */


    var _hobbies_performing_performing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hobbies/performing/performing.component */
    "./src/app/hobbies/performing/performing.component.ts");
    /* harmony import */


    var _hobbies_travelling_travelling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hobbies/travelling/travelling.component */
    "./src/app/hobbies/travelling/travelling.component.ts");
    /* harmony import */


    var _hobbies_sports_sports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./hobbies/sports/sports.component */
    "./src/app/hobbies/sports/sports.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var routes = [{
      path: "",
      component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "about",
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]
    }, {
      path: "coding",
      component: _coding_main_coding_main_coding_component__WEBPACK_IMPORTED_MODULE_3__["MainCodingComponent"]
    }, {
      path: "work",
      component: _work_experience_main_work_main_work_component__WEBPACK_IMPORTED_MODULE_8__["MainWorkComponent"]
    }, {
      path: "extracurricular",
      component: _hobbies_main_hobbies_main_hobbies_component__WEBPACK_IMPORTED_MODULE_9__["MainHobbiesComponent"]
    }, {
      path: "projects/web",
      component: _coding_web_apps_web_apps_component__WEBPACK_IMPORTED_MODULE_5__["WebAppsComponent"]
    }, {
      path: "projects/mobile",
      component: _coding_mobile_apps_mobile_apps_component__WEBPACK_IMPORTED_MODULE_6__["MobileAppsComponent"]
    }, {
      path: "projects/gaming",
      component: _coding_gaming_apps_gaming_apps_component__WEBPACK_IMPORTED_MODULE_7__["GamingAppsComponent"]
    }, {
      path: "activities/performing",
      component: _hobbies_performing_performing_component__WEBPACK_IMPORTED_MODULE_10__["PerformingComponent"]
    }, {
      path: "activities/travelling",
      component: _hobbies_travelling_travelling_component__WEBPACK_IMPORTED_MODULE_11__["TravellingComponent"]
    }, {
      path: "activities/sports",
      component: _hobbies_sports_sports_component__WEBPACK_IMPORTED_MODULE_12__["SportsComponent"]
    }, {
      path: "page-not-found",
      component: _other_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }, {
      path: "**",
      redirectTo: "page-not-found",
      pathMatch: "full"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'my-personal-website';
      }

      _createClass(AppComponent, [{
        key: "onActivate",
        value: function onActivate(event) {
          window.scroll(0, 0);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      consts: [[3, "activate"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_0_listener($event) {
            return ctx.onActivate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _coding_main_coding_main_coding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./coding/main-coding/main-coding.component */
    "./src/app/coding/main-coding/main-coding.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _other_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./other/page-not-found/page-not-found.component */
    "./src/app/other/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _home_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home/home.component */
    "./src/app/home/home/home.component.ts");
    /* harmony import */


    var _coding_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./coding/projects/projects.component */
    "./src/app/coding/projects/projects.component.ts");
    /* harmony import */


    var _home_home_sections_home_sections_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home-sections/home-sections.component */
    "./src/app/home/home-sections/home-sections.component.ts");
    /* harmony import */


    var _coding_web_apps_web_apps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./coding/web-apps/web-apps.component */
    "./src/app/coding/web-apps/web-apps.component.ts");
    /* harmony import */


    var _coding_mobile_apps_mobile_apps_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./coding/mobile-apps/mobile-apps.component */
    "./src/app/coding/mobile-apps/mobile-apps.component.ts");
    /* harmony import */


    var _coding_gaming_apps_gaming_apps_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./coding/gaming-apps/gaming-apps.component */
    "./src/app/coding/gaming-apps/gaming-apps.component.ts");
    /* harmony import */


    var _work_experience_main_work_main_work_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./work-experience/main-work/main-work.component */
    "./src/app/work-experience/main-work/main-work.component.ts");
    /* harmony import */


    var _hobbies_main_hobbies_main_hobbies_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./hobbies/main-hobbies/main-hobbies.component */
    "./src/app/hobbies/main-hobbies/main-hobbies.component.ts");
    /* harmony import */


    var _hobbies_activities_activities_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./hobbies/activities/activities.component */
    "./src/app/hobbies/activities/activities.component.ts");
    /* harmony import */


    var _hobbies_performing_performing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./hobbies/performing/performing.component */
    "./src/app/hobbies/performing/performing.component.ts");
    /* harmony import */


    var _hobbies_travelling_travelling_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./hobbies/travelling/travelling.component */
    "./src/app/hobbies/travelling/travelling.component.ts");
    /* harmony import */


    var _hobbies_sports_sports_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./hobbies/sports/sports.component */
    "./src/app/hobbies/sports/sports.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: "",
        component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_8__["CustomHeaderComponent"], _other_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _home_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _home_home_sections_home_sections_component__WEBPACK_IMPORTED_MODULE_12__["HomeSectionsComponent"], _coding_main_coding_main_coding_component__WEBPACK_IMPORTED_MODULE_5__["MainCodingComponent"], _coding_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"], _work_experience_main_work_main_work_component__WEBPACK_IMPORTED_MODULE_16__["MainWorkComponent"], _coding_web_apps_web_apps_component__WEBPACK_IMPORTED_MODULE_13__["WebAppsComponent"], _coding_mobile_apps_mobile_apps_component__WEBPACK_IMPORTED_MODULE_14__["MobileAppsComponent"], _coding_gaming_apps_gaming_apps_component__WEBPACK_IMPORTED_MODULE_15__["GamingAppsComponent"], _hobbies_main_hobbies_main_hobbies_component__WEBPACK_IMPORTED_MODULE_17__["MainHobbiesComponent"], _hobbies_activities_activities_component__WEBPACK_IMPORTED_MODULE_18__["ActivitiesComponent"], _hobbies_performing_performing_component__WEBPACK_IMPORTED_MODULE_19__["PerformingComponent"], _hobbies_travelling_travelling_component__WEBPACK_IMPORTED_MODULE_20__["TravellingComponent"], _hobbies_sports_sports_component__WEBPACK_IMPORTED_MODULE_21__["SportsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_8__["CustomHeaderComponent"], _other_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], _home_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _home_home_sections_home_sections_component__WEBPACK_IMPORTED_MODULE_12__["HomeSectionsComponent"], _coding_main_coding_main_coding_component__WEBPACK_IMPORTED_MODULE_5__["MainCodingComponent"], _coding_projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"], _work_experience_main_work_main_work_component__WEBPACK_IMPORTED_MODULE_16__["MainWorkComponent"], _coding_web_apps_web_apps_component__WEBPACK_IMPORTED_MODULE_13__["WebAppsComponent"], _coding_mobile_apps_mobile_apps_component__WEBPACK_IMPORTED_MODULE_14__["MobileAppsComponent"], _coding_gaming_apps_gaming_apps_component__WEBPACK_IMPORTED_MODULE_15__["GamingAppsComponent"], _hobbies_main_hobbies_main_hobbies_component__WEBPACK_IMPORTED_MODULE_17__["MainHobbiesComponent"], _hobbies_activities_activities_component__WEBPACK_IMPORTED_MODULE_18__["ActivitiesComponent"], _hobbies_performing_performing_component__WEBPACK_IMPORTED_MODULE_19__["PerformingComponent"], _hobbies_travelling_travelling_component__WEBPACK_IMPORTED_MODULE_20__["TravellingComponent"], _hobbies_sports_sports_component__WEBPACK_IMPORTED_MODULE_21__["SportsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
            path: "",
            component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
          }])],
          exports: [],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/coding/gaming-apps/gaming-apps.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/coding/gaming-apps/gaming-apps.component.ts ***!
    \*************************************************************/

  /*! exports provided: GamingAppsComponent */

  /***/
  function srcAppCodingGamingAppsGamingAppsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamingAppsComponent", function () {
      return GamingAppsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GamingAppsComponent = /*#__PURE__*/function () {
      function GamingAppsComponent() {
        _classCallCheck(this, GamingAppsComponent);
      }

      _createClass(GamingAppsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GamingAppsComponent;
    }();

    GamingAppsComponent.ɵfac = function GamingAppsComponent_Factory(t) {
      return new (t || GamingAppsComponent)();
    };

    GamingAppsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GamingAppsComponent,
      selectors: [["gaming-apps"]],
      decls: 115,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["align", "left"], ["routerLink", "/projects/mobile"], ["align", "center"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], ["align", "right"], ["routerLink", "/projects/web"], [1, "scrollable"], ["align", "center", "cellpadding", "20"], ["href", "https://github.com/miri-rodriguezg/shooting-game", "target", "_blank"], ["src", "assets/gifs/bunny-shoot.gif", "width", "550", "height", "400"], [1, "flip-box"], [1, "flip-box-inner"], [1, "flip-box-front"], ["src", "assets/images/pygame.png", "width", "120", "height", "50"], ["src", "assets/images/python.png", "width", "60", "height", "70"], [1, "flip-box-back"], ["href", "https://github.com/miri-rodriguezg/multi-level-game", "target", "_blank"], ["src", "assets/gifs/rats-uni.gif", "width", "550", "height", "400"], ["src", "assets/images/city-logo.jpg", "width", "60", "height", "80"], ["src", "assets/images/java.png", "width", "90", "height", "90"], ["href", "https://github.com/miri-rodriguezg/bubble-pop-game-using-processing-language", "target", "_blank"], ["src", "assets/gifs/bubbles.gif", "width", "550", "height", "400"], ["src", "assets/images/processing-logo.jpg", "width", "65", "height", "75"]],
      template: function GamingAppsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "< Go to Mobile Applications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Go to Web Applications >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "January 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Shooting Bunny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "London, United Kingdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Shooting Bunny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Taught 7-13 year old kids how to develop various computer games using key handling and collision detecting events to shoot at enemies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "October 2018 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Rats in Uni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "London, United Kingdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Rats in Uni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Developed a multi-player computer game using JFrames and City University's custom library to store high score ranking files as the rats in uni feed themselves with student's snacks.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "September 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Bubble Popping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "London, United Kingdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Bubble Popping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Used timeouts to increase the speed and shrink the size of falling balls, making them harder to pop before they disappear off the screen.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h4[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  border: 2px solid lightsteelblue;\n  display: inline-block;\n  border-style: dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9jb2RpbmcvZ2FtaW5nLWFwcHMvZ2FtaW5nLWFwcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvZGluZy9nYW1pbmctYXBwcy9nYW1pbmctYXBwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9nYW1pbmctYXBwcy9nYW1pbmctYXBwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDR7XG4gICAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICB9IiwiaDQge1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamingAppsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'gaming-apps',
          templateUrl: './gaming-apps.component.html',
          styleUrls: ['./gaming-apps.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/coding/main-coding/main-coding.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/coding/main-coding/main-coding.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainCodingComponent */

  /***/
  function srcAppCodingMainCodingMainCodingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainCodingComponent", function () {
      return MainCodingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projects/projects.component */
    "./src/app/coding/projects/projects.component.ts");

    var MainCodingComponent = /*#__PURE__*/function () {
      function MainCodingComponent() {
        _classCallCheck(this, MainCodingComponent);
      }

      _createClass(MainCodingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainCodingComponent;
    }();

    MainCodingComponent.ɵfac = function MainCodingComponent_Factory(t) {
      return new (t || MainCodingComponent)();
    };

    MainCodingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainCodingComponent,
      selectors: [["main-coding"]],
      decls: 25,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding", "routerLinkActive", "active"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], ["align", "center"]],
      template: function MainCodingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9tYWluLWNvZGluZy9tYWluLWNvZGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainCodingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-coding',
          templateUrl: './main-coding.component.html',
          styleUrls: ['./main-coding.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/coding/mobile-apps/mobile-apps.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/coding/mobile-apps/mobile-apps.component.ts ***!
    \*************************************************************/

  /*! exports provided: MobileAppsComponent */

  /***/
  function srcAppCodingMobileAppsMobileAppsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileAppsComponent", function () {
      return MobileAppsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MobileAppsComponent = /*#__PURE__*/function () {
      function MobileAppsComponent() {
        _classCallCheck(this, MobileAppsComponent);
      }

      _createClass(MobileAppsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MobileAppsComponent;
    }();

    MobileAppsComponent.ɵfac = function MobileAppsComponent_Factory(t) {
      return new (t || MobileAppsComponent)();
    };

    MobileAppsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MobileAppsComponent,
      selectors: [["mobile-apps"]],
      decls: 85,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["align", "right"], ["routerLink", "/projects/web"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], ["routerLink", "/projects/gaming"], [1, "scrollable"], ["align", "center", "cellpadding", "20"], ["src", "assets/gifs/medical.gif", "width", "250", "height", "500"], [1, "flip-box"], [1, "flip-box-inner"], [1, "flip-box-front"], ["align", "center"], ["src", "assets/images/webex-teams-logo.png", "width", "65", "height", "80"], ["src", "assets/images/dialogflow.png", "width", "80", "height", "80"], [1, "flip-box-back"], ["href", "https://github.com/miri-rodriguezg/ios-booze-alert-app", "target", "_blank"], ["src", "assets/gifs/booze.gif", "width", "250", "height", "500"], ["src", "assets/images/swift.jpg", "width", "65", "height", "80"]],
      template: function MobileAppsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "< Go to Web Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Go to Gaming Applications >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "October 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Medical Solution Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "London, United Kingdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Medical Solution Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Developed a WebexTeams bot to resolve quick medical queries and contribute to remote medical services.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "January 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Booze Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "London, United Kingdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Booze Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Built an iOS app to calculate alcohol intake and judge whether driving is legally permitted to avoid the average number of road accidents. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h4[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  border: 2px solid lightsteelblue;\n  display: inline-block;\n  border-style: dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9jb2RpbmcvbW9iaWxlLWFwcHMvbW9iaWxlLWFwcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvZGluZy9tb2JpbGUtYXBwcy9tb2JpbGUtYXBwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9tb2JpbGUtYXBwcy9tb2JpbGUtYXBwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgfSIsImg0IHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileAppsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mobile-apps',
          templateUrl: './mobile-apps.component.html',
          styleUrls: ['./mobile-apps.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/coding/projects/projects.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/coding/projects/projects.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppCodingProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["projects"]],
      decls: 70,
      vars: 0,
      consts: [[1, "scrollable"], ["align", "center", "cellspacing", "10"], ["routerLink", "/projects/web"], ["src", "assets/images/web.png", "width", "300", "height", "230"], ["routerLink", "/projects/mobile"], ["src", "assets/images/mobile.png", "width", "230", "height", "230"], ["routerLink", "/projects/gaming"], ["src", "assets/images/gaming.jpg", "width", "250", "height", "260"], ["align", "center"], ["src", "assets/images/angular.png", "width", "70", "height", "70"], ["src", "assets/images/nextJS.png", "width", "60", "height", "60"], ["src", "assets/images/html.png", "width", "60", "height", "60"], ["src", "assets/images/css.png", "width", "40", "height", "55"], ["src", "assets/images/js.png", "width", "58", "height", "55"], ["src", "assets/images/swift.jpg", "width", "70", "height", "80"], ["align", "center", "cellpadding", "0"], ["src", "assets/images/python.png", "width", "70", "height", "80"], ["src", "assets/images/java.png", "width", "80", "height", "80"], ["src", "assets/images/c++.png", "width", "90", "height", "90"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Web Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Gaming Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developed as university and personal projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "see more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Learnt and built during hackathons and workshops.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "see more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Built for teaching purposes and university projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "see more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["th[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 25px;\n  text-align: center;\n  margin-top: 0;\n  width: 30%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 19px;\n  text-align: center;\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 22px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\nh2[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 15px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\n@media only screen and (max-width: 900px) {\n  \n  .scrollable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9jb2RpbmcvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvZGluZy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FER0E7RUFDRSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQTtJQUNJLGNBQUE7SUFDQSxXQUFBO0VDQUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgd2lkdGg6IDMwJTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cblxuaDF7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDJ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAvKiBzdGFjayBoZXJlICovXG4gIC5zY3JvbGxhYmxlIHRhYmxlLCB0aHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCJ0aCB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdpZHRoOiAzMCU7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5oMSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLyogc3RhY2sgaGVyZSAqL1xuICAuc2Nyb2xsYWJsZSB0YWJsZSwgdGgge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/coding/web-apps/web-apps.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/coding/web-apps/web-apps.component.ts ***!
    \*******************************************************/

  /*! exports provided: WebAppsComponent */

  /***/
  function srcAppCodingWebAppsWebAppsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebAppsComponent", function () {
      return WebAppsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WebAppsComponent = /*#__PURE__*/function () {
      function WebAppsComponent() {
        _classCallCheck(this, WebAppsComponent);
      }

      _createClass(WebAppsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WebAppsComponent;
    }();

    WebAppsComponent.ɵfac = function WebAppsComponent_Factory(t) {
      return new (t || WebAppsComponent)();
    };

    WebAppsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebAppsComponent,
      selectors: [["web-apps"]],
      decls: 87,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", "/projects/gaming"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], ["routerLink", "/projects/mobile"], [1, "scrollable"], ["align", "center", "cellpadding", "20"], ["href", "https://github.com/miri-rodriguezg/java-server-pages-web-app", "target", "_blank"], ["src", "assets/gifs/rsvp.gif", "width", "500", "height", "500"], [1, "flip-box", 2, "margin-bottom", "30%"], [1, "flip-box-inner"], [1, "flip-box-front"], ["align", "center"], ["src", "assets/images/angular.png", "width", "80", "height", "80"], ["src", "assets/images/nextJS.png", "width", "80", "height", "60"], ["src", "assets/images/firestore.png", "width", "120", "height", "80"], ["src", "assets/images/html.png", "width", "80", "height", "80"], ["src", "assets/images/css.png", "width", "55", "height", "75"], [1, "flip-box-back"], ["src", "assets/gifs/uni-web.gif", "width", "500", "height", "500"], [1, "flip-box"], ["src", "assets/images/java.png", "width", "90", "height", "90"], ["src", "assets/images/mysql.jpg", "width", "80", "height", "60"]],
      template: function WebAppsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "< Go to Gaming Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Go to Mobile Applications >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "March 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "RSVP Management Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Munich, Germany");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "RSVP Management Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Developed an event invitation design tool with atendee management features to keep track of invites and atendees using Google Authentication and Calendar. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "March 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "University Module Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "London, United Kingdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "University Module Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Developed various web applications with priviledged access and security restrictions for admin users to add/remove database records and regular users to acces these with different filtering criterias. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h4[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  border: 2px solid lightsteelblue;\n  display: inline-block;\n  border-style: dashed;\n}\n\n@media only screen and (max-width: 702px) {\n  .scrollable[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: white;\n    top: 200px;\n    width: 100%;\n    z-index: 100;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9jb2Rpbmcvd2ViLWFwcHMvd2ViLWFwcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvZGluZy93ZWItYXBwcy93ZWItYXBwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy93ZWItYXBwcy93ZWItYXBwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAycHgpIHtcbiAgICAuc2Nyb2xsYWJsZXtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgdG9wOjIwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gIH1cbiAgfSIsImg0IHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAycHgpIHtcbiAgLnNjcm9sbGFibGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebAppsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'web-apps',
          templateUrl: './web-apps.component.html',
          styleUrls: ['./web-apps.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hobbies/activities/activities.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/hobbies/activities/activities.component.ts ***!
    \************************************************************/

  /*! exports provided: ActivitiesComponent */

  /***/
  function srcAppHobbiesActivitiesActivitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function () {
      return ActivitiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ActivitiesComponent = /*#__PURE__*/function () {
      function ActivitiesComponent() {
        _classCallCheck(this, ActivitiesComponent);
      }

      _createClass(ActivitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActivitiesComponent;
    }();

    ActivitiesComponent.ɵfac = function ActivitiesComponent_Factory(t) {
      return new (t || ActivitiesComponent)();
    };

    ActivitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivitiesComponent,
      selectors: [["activities"]],
      decls: 52,
      vars: 0,
      consts: [["align", "center", "cellspacing", "10"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["routerLink", "/activities/performing"], ["src", "assets/images/guiano2.png", "width", "250", "height", "270"], ["routerLink", "/activities/travelling"], ["src", "assets/images/world-map.png", "width", "430", "height", "250"], ["routerLink", "/activities/sports"], ["src", "assets/images/sport.png", "width", "320", "height", "260"], ["align", "center"]],
      template: function ActivitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Performing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Travelling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Trying to take my musical skills on a more professional level by forming a rock band.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Self teach guitar, piano and love performing and attending live shows.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Curious to learn about people's cultures and create travel experiences around the world.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Have great appreciation for nature and backpacking.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Take every opportunity I can to practice water and mountain sports when I'm off the screen.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Currently pursuing full motorcycle and diving licenses. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["th[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 25px;\n  text-align: center;\n  margin-top: 0;\n  width: 30%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 19px;\n  text-align: center;\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 22px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\nh2[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 15px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9ob2JiaWVzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9iYmllcy9hY3Rpdml0aWVzL2FjdGl2aXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdFO0VBQ0UsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHRTtFQUNFLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob2JiaWVzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcbiAgICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIFxuICBwIHtcbiAgICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcblxuICBoMXtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBoMntcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH0iLCJ0aCB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdpZHRoOiAzMCU7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5oMSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'activities',
          templateUrl: './activities.component.html',
          styleUrls: ['./activities.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hobbies/main-hobbies/main-hobbies.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/hobbies/main-hobbies/main-hobbies.component.ts ***!
    \****************************************************************/

  /*! exports provided: MainHobbiesComponent */

  /***/
  function srcAppHobbiesMainHobbiesMainHobbiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHobbiesComponent", function () {
      return MainHobbiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _activities_activities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../activities/activities.component */
    "./src/app/hobbies/activities/activities.component.ts");

    var MainHobbiesComponent = /*#__PURE__*/function () {
      function MainHobbiesComponent() {
        _classCallCheck(this, MainHobbiesComponent);
      }

      _createClass(MainHobbiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainHobbiesComponent;
    }();

    MainHobbiesComponent.ɵfac = function MainHobbiesComponent_Factory(t) {
      return new (t || MainHobbiesComponent)();
    };

    MainHobbiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainHobbiesComponent,
      selectors: [["main-hobbies"]],
      decls: 26,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular", "routerLinkActive", "active"], [1, "scrollable"], ["align", "center"]],
      template: function MainHobbiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _activities_activities_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesComponent"]],
      styles: ["a[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\na.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n}\n\n.scrollable[_ngcontent-%COMP%] {\n  margin-top: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9ob2JiaWVzL21haW4taG9iYmllcy9tYWluLWhvYmJpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvYmJpZXMvbWFpbi1ob2JiaWVzL21haW4taG9iYmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLHVDQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob2JiaWVzL21haW4taG9iYmllcy9tYWluLWhvYmJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYS5hY3RpdmUge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuc2Nyb2xsYWJsZXtcbiAgICBtYXJnaW4tdG9wOjE3MHB4O1xuICB9IiwiYSB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2Nyb2xsYWJsZSB7XG4gIG1hcmdpbi10b3A6IDE3MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainHobbiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-hobbies',
          templateUrl: './main-hobbies.component.html',
          styleUrls: ['./main-hobbies.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hobbies/performing/performing.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/hobbies/performing/performing.component.ts ***!
    \************************************************************/

  /*! exports provided: PerformingComponent */

  /***/
  function srcAppHobbiesPerformingPerformingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerformingComponent", function () {
      return PerformingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PerformingComponent = /*#__PURE__*/function () {
      function PerformingComponent() {
        _classCallCheck(this, PerformingComponent);
      }

      _createClass(PerformingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PerformingComponent;
    }();

    PerformingComponent.ɵfac = function PerformingComponent_Factory(t) {
      return new (t || PerformingComponent)();
    };

    PerformingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerformingComponent,
      selectors: [["app-performing"]],
      decls: 68,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", "/activities/sports"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], ["routerLink", "/activities/travelling"], [1, "scrollable"], ["align", "center", "cellpadding", "20"], ["controls", "controls", "width", "550", "height", "310"], ["src", "assets/videos/asturias.mp4"], [1, "description"], ["src", "assets/videos/bohemian.MOV"], ["src", "assets/videos/street.mov"]],
      template: function PerformingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "< Go to Sport Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "extracurricular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Go to Travelling Activities >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "video", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Guitar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Received 2 year guitar lessons and have been self-teaching it ever since with YouTube and online tutorials.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "I love learning rock riffs with my electric guitar and fingerstyle and spanish traditional strumming styles with my acoustic and classic guitars. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "video", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "source", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Piano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "I first started learning piano with an interactive keyboard and continued self-teaching it with online tutorials.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "I can barely read musical sheets, but I love how the hands easily remember which keys to play and improvise otherwise!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "video", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "source", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Public Performing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Played in two of Madrid's city center hotspots, Plaza del Sol and Retiro Park, where I got to make some money and jam with tourists and strangers passing by!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "I performed in several school talent shows and events, receiving first and second place awards.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h4[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  border: 2px solid lightsteelblue;\n  display: inline-block;\n  border-style: dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9ob2JiaWVzL3BlcmZvcm1pbmcvcGVyZm9ybWluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9iYmllcy9wZXJmb3JtaW5nL3BlcmZvcm1pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob2JiaWVzL3BlcmZvcm1pbmcvcGVyZm9ybWluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDR7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufVxuXG4iLCJoNCB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-performing',
          templateUrl: './performing.component.html',
          styleUrls: ['./performing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hobbies/sports/sports.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/hobbies/sports/sports.component.ts ***!
    \****************************************************/

  /*! exports provided: SportsComponent */

  /***/
  function srcAppHobbiesSportsSportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SportsComponent", function () {
      return SportsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SportsComponent = /*#__PURE__*/function () {
      function SportsComponent() {
        _classCallCheck(this, SportsComponent);
      }

      _createClass(SportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SportsComponent;
    }();

    SportsComponent.ɵfac = function SportsComponent_Factory(t) {
      return new (t || SportsComponent)();
    };

    SportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SportsComponent,
      selectors: [["app-sports"]],
      decls: 67,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", "/activities/travelling"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], ["routerLink", "/activities/performing"], [1, "scrollable"], ["align", "center", "cellpadding", "20"], ["align", "center"], ["src", "assets/gifs/surf.gif", "width", "450", "height", "300"], [1, "description"], ["src", "assets/gifs/skii.gif", "width", "450", "height", "300"], ["src", "assets/gifs/jetskiing.gif", "width", "450", "height", "300"]],
      template: function SportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "< Go to Travelling Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "extracurricular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Go to Performing Activities >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Surfing & Kite Surfing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Went to a surfing summer camp for 3 years, in Biarritz, France, where I started learning and growing a passion for surf.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ever since, I try going surfing every summer and managed to practice every other month when I lived in California over the last year.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "I completed a few kite surfing courses in Sylt, Germany when I was 16 and practiced every other year since. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Skiing & Snowboarding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "I first started skiing when I was 12 in school organised trips to the Spanish, French and Andorran Pyrenees.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "I continued skiing over the last years in the Austrian and German Alps, where I also began to learn snowboarding. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Motorcycles & Jet Skii");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Started attending motorcycle events and went on a motorcycle roadtrip across the UK, Wales and Scotland.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Perhaps less dangerous but equally as exciting, I love renting and speeding with jet skiis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h4[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  border: 2px solid lightsteelblue;\n  display: inline-block;\n  border-style: dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9ob2JiaWVzL3Nwb3J0cy9zcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvYmJpZXMvc3BvcnRzL3Nwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvYmJpZXMvc3BvcnRzL3Nwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDR7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufSIsImg0IHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sports',
          templateUrl: './sports.component.html',
          styleUrls: ['./sports.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hobbies/travelling/travelling.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/hobbies/travelling/travelling.component.ts ***!
    \************************************************************/

  /*! exports provided: TravellingComponent */

  /***/
  function srcAppHobbiesTravellingTravellingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravellingComponent", function () {
      return TravellingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TravellingComponent = /*#__PURE__*/function () {
      function TravellingComponent() {
        _classCallCheck(this, TravellingComponent);
      }

      _createClass(TravellingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TravellingComponent;
    }();

    TravellingComponent.ɵfac = function TravellingComponent_Factory(t) {
      return new (t || TravellingComponent)();
    };

    TravellingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TravellingComponent,
      selectors: [["app-travelling"]],
      decls: 69,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", "/activities/performing"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"], ["routerLink", "/activities/sports"], [1, "scrollable"], ["align", "center", "cellpadding", "20"], ["align", "center"], ["src", "assets/images/languages.jpg", "width", "400", "height", "300"], [1, "description"], ["src", "assets/images/carcamping.jpg", "width", "400", "height", "450"], ["src", "assets/images/spheres.jpg", "width", "350", "height", "400"]],
      template: function TravellingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "< Go to Performing Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "extracurricular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Go to Sports Activities >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "I grew up with a bilingual education and graduated school with both Spanish and English high school diplomas and proficiency in both languages.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "I learnt French as an extracurricular and attending summer camps, achieving the equivalent of a B2 level.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "I did a one month exchange program in Germany and continued self-teaching the language, receiving the equivalent of an A2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Van Life & Camping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Spent weeks living in my 1997 old car, roadtripping across all the US West Coast and National Parks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "I love being in contact with nature and try to go camping once a year where I get to go on hikes, sleep under the stars, swim in lakes and stay in the wilderness.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CouchSurfing Community");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "I am a member of the couchsurfing community where I host and go to other people's houses for free with the sole purposes of making travelling easier and cheaper for people who share this passion.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "I got to meet people from all over the world and hear about their cultures, travelling experiences and create new ones by going on hikes or showing eachother around our cities. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h4[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  border: 2px solid lightsteelblue;\n  display: inline-block;\n  border-style: dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9ob2JiaWVzL3RyYXZlbGxpbmcvdHJhdmVsbGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9iYmllcy90cmF2ZWxsaW5nL3RyYXZlbGxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob2JiaWVzL3RyYXZlbGxpbmcvdHJhdmVsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDR7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufSIsImg0IHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravellingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-travelling',
          templateUrl: './travelling.component.html',
          styleUrls: ['./travelling.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-sections/home-sections.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/home/home-sections/home-sections.component.ts ***!
    \***************************************************************/

  /*! exports provided: HomeSectionsComponent */

  /***/
  function srcAppHomeHomeSectionsHomeSectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeSectionsComponent", function () {
      return HomeSectionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeSectionsComponent = /*#__PURE__*/function () {
      function HomeSectionsComponent() {
        _classCallCheck(this, HomeSectionsComponent);
      }

      _createClass(HomeSectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeSectionsComponent;
    }();

    HomeSectionsComponent.ɵfac = function HomeSectionsComponent_Factory(t) {
      return new (t || HomeSectionsComponent)();
    };

    HomeSectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeSectionsComponent,
      selectors: [["home-sections"]],
      decls: 48,
      vars: 0,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "scrollable"], ["align", "center", "cellspacing", "10"], ["routerLink", "/coding"], ["src", "assets/images/coding.jpg", "width", "400", "height", "300"], ["routerLink", "/work"], ["src", "assets/images/office.png", "width", "400", "height", "300"], ["routerLink", "/extracurricular"], ["src", "assets/images/leisure.jpeg", "width", "400", "height", "300"], ["align", "center"]],
      template: function HomeSectionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Currently focusing on full-stack web and mobile app development.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Experienced with REST APIs, cloud solutions and app containerization.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Constantly combining my passions for Business and Technology through the automation of systems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Love learning languages and am open for job relocations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Extracurricular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Spend most of my free time self-teaching musical instruments or practicing extreme sports.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "I am passionate about travelling, visited over 20 countries and lived in 4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["td[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 25px;\n  text-align: center;\n  margin-top: 0;\n  width: 30%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 19px;\n  text-align: center;\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 22px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\nh2[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 15px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\n@media only screen and (max-width: 1250px) {\n  .scrollable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    float: left;\n  }\n\n  .scrollable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .scrollable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    padding: 40px;\n  }\n\n  .scrollable[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .scrollable[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9ob21lL2hvbWUtc2VjdGlvbnMvaG9tZS1zZWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLXNlY3Rpb25zL2hvbWUtc2VjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdFO0VBQ0UsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHRTtFQUNFLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0U7RUFFRTtJQUFpQixjQUFBO0lBQWdCLFdBQUE7RUNDbkM7O0VEQ0U7SUFBaUIsY0FBQTtFQ0duQjs7RURERTtJQUFpQixjQUFBO0lBQWlCLGFBQUE7RUNNcEM7O0VESEU7SUFDRSxlQUFBO0VDTUo7O0VESEU7SUFDRSxlQUFBO0VDTUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1zZWN0aW9ucy9ob21lLXNlY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuXG4gIGgxe1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGgye1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcblxuICAgIC5zY3JvbGxhYmxlIHRyIHsgZGlzcGxheTogYmxvY2s7IGZsb2F0OiBsZWZ0IDtcbiAgICB9XG4gICAgLnNjcm9sbGFibGUgdGggeyBkaXNwbGF5OiBibG9jazsgfVxuXG4gICAgLnNjcm9sbGFibGUgdGQgeyBkaXNwbGF5OiBibG9jazsgIHBhZGRpbmc6IDQwcHg7XG4gICAgfVxuXG4gICAgLnNjcm9sbGFibGUgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9IFxuXG4gICAgLnNjcm9sbGFibGUgaDF7XG4gICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgfSBcbiAgfVxuXG4iLCJ0ZCB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdpZHRoOiAzMCU7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5oMSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5zY3JvbGxhYmxlIHRyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5zY3JvbGxhYmxlIHRoIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zY3JvbGxhYmxlIHRkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG5cbiAgLnNjcm9sbGFibGUgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLnNjcm9sbGFibGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSectionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home-sections',
          templateUrl: './home-sections.component.html',
          styleUrls: ['./home-sections.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_sections_home_sections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home-sections/home-sections.component */
    "./src/app/home/home-sections/home-sections.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["home"]],
      decls: 23,
      vars: 0,
      consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "navigation"], ["align", "center", "cellpadding", "4"], ["routerLink", "", "routerLinkActive", "active"], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work"], ["routerLink", "/extracurricular"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "home-sections");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _home_sections_home_sections_component__WEBPACK_IMPORTED_MODULE_3__["HomeSectionsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/other/custom-header/custom-header.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/other/custom-header/custom-header.component.ts ***!
    \****************************************************************/

  /*! exports provided: CustomHeaderComponent */

  /***/
  function srcAppOtherCustomHeaderCustomHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHeaderComponent", function () {
      return CustomHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CustomHeaderComponent = /*#__PURE__*/function () {
      function CustomHeaderComponent() {
        _classCallCheck(this, CustomHeaderComponent);
      }

      _createClass(CustomHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomHeaderComponent;
    }();

    CustomHeaderComponent.ɵfac = function CustomHeaderComponent_Factory(t) {
      return new (t || CustomHeaderComponent)();
    };

    CustomHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomHeaderComponent,
      selectors: [["custom-header"]],
      decls: 22,
      vars: 0,
      consts: [["charset", "utf-8"], ["href", "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap", "rel", "stylesheet"], ["id", "bg-border"], ["id", "bg"], ["routerLink", "/about"], ["align", "center", "cellpadding", "0"]],
      template: function CustomHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MIRIAM RODRIGUEZ GARCIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBB Software Engineer \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xA0\uD83C\uDDEA\uD83C\uDDF8 Madrid, Spain\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0\uD83D\uDCCD London, UK \xA0\xA0\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 200;\n  font-size: 50px;\n  text-align: center;\n  margin-top: 5;\n  margin-bottom: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\na[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\n#bg-border[_ngcontent-%COMP%] {\n  border: 5px solid lightsteelblue;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9vdGhlci9jdXN0b20taGVhZGVyL2N1c3RvbS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL290aGVyL2N1c3RvbS1oZWFkZXIvY3VzdG9tLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQ0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL290aGVyL2N1c3RvbS1oZWFkZXIvY3VzdG9tLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBcbiAgYSB7XG4gICAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgI2JnLWJvcmRlciB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAiLCJoMSB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jYmctYm9yZGVyIHtcbiAgYm9yZGVyOiA1cHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIG1hcmdpbi10b3A6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'custom-header',
          templateUrl: './custom-header.component.html',
          styleUrls: ['./custom-header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/other/page-not-found/page-not-found.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/other/page-not-found/page-not-found.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppOtherPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["page-not-found"]],
      decls: 16,
      vars: 2,
      consts: [[1, "scrollable"], ["align", "center", 1, "boxed"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [3, "routerLink"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Page not found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Go to home page \u2192");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\uD83E\uDD7A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 200;\n  font-size: 250px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: lightsteelblue;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 200;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 200;\n  font-size: 50px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\na[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 200;\n  font-size: 15px;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: steelblue;\n}\n\n.boxed[_ngcontent-%COMP%] {\n  border: 5px solid lightsteelblue;\n  border-style: solid;\n  margin-top: 0;\n}\n\n.scrollable[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  position: fixed;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9vdGhlci9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3RoZXIvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0U7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL290aGVyL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiAyNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcbiAgfVxuICBcbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgaDQge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgXG4gIGEge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcbiAgfVxuICBcbiAgLmJveGVkIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBsaWdodHN0ZWVsYmx1ZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgXG4gIC5zY3JvbGxhYmxle1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDoxMDAlXG4gIH0iLCJoMSB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogbGlnaHRzdGVlbGJsdWU7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5hIHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuLmJveGVkIHtcbiAgYm9yZGVyOiA1cHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5zY3JvbGxhYmxlIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/work-experience/main-work/main-work.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/work-experience/main-work/main-work.component.ts ***!
    \******************************************************************/

  /*! exports provided: MainWorkComponent */

  /***/
  function srcAppWorkExperienceMainWorkMainWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainWorkComponent", function () {
      return MainWorkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../other/custom-header/custom-header.component */
    "./src/app/other/custom-header/custom-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainWorkComponent = /*#__PURE__*/function () {
      function MainWorkComponent() {
        _classCallCheck(this, MainWorkComponent);
      }

      _createClass(MainWorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainWorkComponent;
    }();

    MainWorkComponent.ɵfac = function MainWorkComponent_Factory(t) {
      return new (t || MainWorkComponent)();
    };

    MainWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainWorkComponent,
      selectors: [["main-work"]],
      decls: 126,
      vars: 0,
      consts: [[1, "navigation"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["align", "center", "cellpadding", "4"], ["routerLink", ""], ["routerLink", "/about"], ["routerLink", "/coding"], ["routerLink", "/work", "routerLinkActive", "active"], ["routerLink", "/extracurricular"], [1, "scrollable"], ["align", "center", "cellpadding", "5"], ["align", "center"], ["src", "assets/images/bmw.png", "width", "150", "height", "140"], [1, "flip-box"], [1, "flip-box-inner"], [1, "flip-box-front"], ["src", "assets/images/angular.png", "width", "60", "height", "60"], ["src", "assets/images/ExpressJS.png", "width", "100", "height", "30"], ["src", "assets/images/oracle.png", "width", "100", "height", "30"], [1, "flip-box-back"], ["src", "assets/images/cisco.png", "width", "200", "height", "110"], ["src", "assets/images/django.jpg", "width", "60", "height", "60"], ["src", "assets/images/msp.png", "width", "60", "height", "50"], ["src", "assets/images/salesforce.png", "width", "55", "height", "45"], ["src", "assets/images/lucan.png", "width", "130", "height", "150"], ["src", "assets/images/python.png", "width", "55", "height", "60"], ["src", "assets/images/bml-logo.png", "width", "200", "height", "130"], ["src", "assets/images/vba.png", "width", "60", "height", "60"], ["src", "assets/images/wordpress.png", "width", "100", "height", "60"], ["href", "http://bringmorelight.com/", "target", "_blank"]],
      template: function MainWorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "custom-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "coding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "extracurricular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "2020-Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Full-Stack Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Munich, Germany");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Full-Stack Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Developing an internal communication tool to provide control and direction to the multi-project planning team, by graphically representing cost data and facilitating the monitoring, allocation and analysis process of sub-departmental costs, to meet yearly budget goals.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2019-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Full-Stack Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "San Jose, California");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Full-Stack Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Created a Request for Proposal web automation portal, annualy saving up to $250,000 on external licenses, by integrating various systems through APIs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Built and improved Cisco's Knowledge base content through a quality control and visual web tool.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "2018-2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Python Tutor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "London, United Kingdom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Python Tutor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Teach secondary school students how to build web and gaming applications twice a week, covering Object Oriented programming concepts and REST API technologies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Madrid, Spain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Built a self-updating database system holding 10,000+ sales records across different database sources, using Macro technology.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Created company's main recruiting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " website.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_other_custom_header_custom_header_component__WEBPACK_IMPORTED_MODULE_1__["CustomHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["a[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 0;\n  color: black;\n  text-decoration: none;\n}\n\na.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid lightsteelblue;\n  display: inline-block;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-top: 10;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 20px;\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: \"kozuka-gothic-pro\", sans-serif;\n  font-style: normal;\n  font-weight: 100;\n  font-size: 15px;\n  text-align: center;\n  margin-top: 0;\n}\n\n.flip-box[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 300px;\n  height: 200px;\n  perspective: 1000px;\n}\n\n.flip-box-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n.flip-box[_ngcontent-%COMP%]:hover   .flip-box-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.flip-box-front[_ngcontent-%COMP%], .flip-box-back[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-box-back[_ngcontent-%COMP%] {\n  color: black;\n  transform: rotateY(180deg);\n}\n\n.scrollable[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n\n@media only screen and (max-width: 702px) {\n  .scrollable[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: white;\n    top: 50px;\n    width: 100%;\n    z-index: 100;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xNTA4NDEwL0RvY3VtZW50cy9Kb2IgQXBwbGljYXRpb25zL215LXBlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC93b3JrLWV4cGVyaWVuY2UvbWFpbi13b3JrL21haW4td29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd29yay1leHBlcmllbmNlL21haW4td29yay9tYWluLXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSx1Q0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNFSjs7QURBRTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNHSjs7QURBRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0dKOztBREFFO0VBQ0UsMEJBQUE7QUNHSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDR0o7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0FDSUo7O0FEREU7RUFDRTtJQUNFLGVBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ0lKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93b3JrLWV4cGVyaWVuY2UvbWFpbi13b3JrL21haW4td29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBhLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGxpZ2h0c3RlZWxibHVlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIHRhYmxle1xuICAgIG1hcmdpbi10b3A6IDEwO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLmZsaXAtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICB9XG4gIFxuICAuZmxpcC1ib3gtaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cbiAgXG4gIC5mbGlwLWJveDpob3ZlciAuZmxpcC1ib3gtaW5uZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIFxuICAuZmxpcC1ib3gtZnJvbnQsIC5mbGlwLWJveC1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZsaXAtYm94LWJhY2sge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAuc2Nyb2xsYWJsZXtcbiAgICBtYXJnaW4tdG9wOjIwMHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDJweCkge1xuICAgIC5zY3JvbGxhYmxle1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB0b3A6NTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMTAwO1xuICB9XG4gIH1cbiIsImEge1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgbGlnaHRzdGVlbGJsdWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxudGFibGUge1xuICBtYXJnaW4tdG9wOiAxMDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJrb3p1a2EtZ290aGljLXByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcImtvenVrYS1nb3RoaWMtcHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmgzIHtcbiAgZm9udC1mYW1pbHk6IFwia296dWthLWdvdGhpYy1wcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmZsaXAtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLmZsaXAtYm94LWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uZmxpcC1ib3g6aG92ZXIgLmZsaXAtYm94LWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWJveC1mcm9udCwgLmZsaXAtYm94LWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5mbGlwLWJveC1iYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLnNjcm9sbGFibGUge1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDJweCkge1xuICAuc2Nyb2xsYWJsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRvcDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-work',
          templateUrl: './main-work.component.html',
          styleUrls: ['./main-work.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/q508410/Documents/Job Applications/my-personal-website/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map