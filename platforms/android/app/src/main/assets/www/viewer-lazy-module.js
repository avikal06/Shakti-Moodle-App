(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewer-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/viewer/pages/iframe/iframe.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/viewer/pages/iframe/iframe.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ title }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"url\">\r\n        <core-iframe *ngIf=\"url\" [src]=\"url\" [allowAutoLogin]=\"autoLogin\"></core-iframe>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/viewer/pages/iframe/iframe.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/viewer/pages/iframe/iframe.ts ***!
  \*********************************************************/
/*! exports provided: CoreViewerIframePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreViewerIframePage", function() { return CoreViewerIframePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page to display a URL in an iframe.
 */
let CoreViewerIframePage = class CoreViewerIframePage {
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('title');
            this.url = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('url');
            const autoLoginParam = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_2__["CoreNavigator"].getRouteParam('autoLogin')) !== null && _a !== void 0 ? _a : true;
            this.autoLogin = typeof autoLoginParam === 'boolean' ?
                autoLoginParam :
                autoLoginParam !== 'no'; // Support deprecated values yes/no/check.
        });
    }
};
CoreViewerIframePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-viewer-iframe',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./iframe.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/viewer/pages/iframe/iframe.html")).default,
    })
], CoreViewerIframePage);



/***/ }),

/***/ "./src/core/features/viewer/viewer-lazy.module.ts":
/*!********************************************************!*\
  !*** ./src/core/features/viewer/viewer-lazy.module.ts ***!
  \********************************************************/
/*! exports provided: CoreViewerLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreViewerLazyModule", function() { return CoreViewerLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_viewer_pages_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/viewer/pages/iframe/iframe */ "./src/core/features/viewer/pages/iframe/iframe.ts");
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





const routes = [
    {
        path: 'iframe',
        component: _features_viewer_pages_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__["CoreViewerIframePage"],
    },
];
let CoreViewerLazyModule = class CoreViewerLazyModule {
};
CoreViewerLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
        ],
        declarations: [
            _features_viewer_pages_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__["CoreViewerIframePage"],
        ],
    })
], CoreViewerLazyModule);



/***/ })

}]);
//# sourceMappingURL=viewer-lazy-module.js.map