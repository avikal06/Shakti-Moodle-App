(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mainmenu-lazy-module"],{

/***/ "./src/core/features/mainmenu/mainmenu-lazy.module.ts":
/*!************************************************************!*\
  !*** ./src/core/features/mainmenu/mainmenu-lazy.module.ts ***!
  \************************************************************/
/*! exports provided: CoreMainMenuLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuLazyModule", function() { return CoreMainMenuLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _mainmenu_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainmenu-routing.module */ "./src/core/features/mainmenu/mainmenu-routing.module.ts");
/* harmony import */ var _pages_menu_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu/menu */ "./src/core/features/mainmenu/pages/menu/menu.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/core/features/mainmenu/services/handlers/mainmenu.ts");
/* harmony import */ var _services_mainmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/mainmenu */ "./src/core/features/mainmenu/services/mainmenu.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.









/**
 * Build module routes.
 *
 * @param injector Injector.
 * @returns Routes.
 */
function buildRoutes(injector) {
    const mainMenuRoutes = Object(_mainmenu_routing_module__WEBPACK_IMPORTED_MODULE_4__["resolveMainMenuRoutes"])(injector);
    return [
        {
            path: '',
            component: _pages_menu_menu__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuPage"],
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                },
                {
                    path: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__["CoreMainMenuHomeHandlerService"].PAGE_NAME,
                    loadChildren: () => Promise.all(/*! import() | mainmenu-home-lazy-module */[__webpack_require__.e("common"), __webpack_require__.e("mainmenu-home-lazy-module")]).then(__webpack_require__.bind(null, /*! ./mainmenu-home-lazy.module */ "./src/core/features/mainmenu/mainmenu-home-lazy.module.ts")).then(m => m.CoreMainMenuHomeLazyModule),
                },
                {
                    path: _services_mainmenu__WEBPACK_IMPORTED_MODULE_7__["CoreMainMenuProvider"].MORE_PAGE_NAME,
                    loadChildren: () => Promise.all(/*! import() | mainmenu-more-lazy-module */[__webpack_require__.e("common"), __webpack_require__.e("mainmenu-more-lazy-module")]).then(__webpack_require__.bind(null, /*! ./mainmenu-more-lazy.module */ "./src/core/features/mainmenu/mainmenu-more-lazy.module.ts")).then(m => m.CoreMainMenuMoreLazyModule),
                },
                ...mainMenuRoutes.children,
            ],
        },
        ...mainMenuRoutes.siblings,
    ];
}
let CoreMainMenuLazyModule = class CoreMainMenuLazyModule {
};
CoreMainMenuLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["CoreMainMenuComponentsModule"],
        ],
        declarations: [
            _pages_menu_menu__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuPage"],
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
    })
], CoreMainMenuLazyModule);



/***/ })

}]);
//# sourceMappingURL=mainmenu-lazy-module.js.map