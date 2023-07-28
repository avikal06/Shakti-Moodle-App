(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-user-user-course-lazy-module"],{

/***/ "./src/core/features/user/user-course-lazy.module.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/user/user-course-lazy.module.ts ***!
  \***********************************************************/
/*! exports provided: CoreUserCourseLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserCourseLazyModule", function() { return CoreUserCourseLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_participants_participants_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/participants/participants.page */ "./src/core/features/user/pages/participants/participants.page.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _features_user_pages_participants_participants_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/user/pages/participants/participants.module */ "./src/core/features/user/pages/participants/participants.module.ts");
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
        path: '',
        component: _pages_participants_participants_page__WEBPACK_IMPORTED_MODULE_3__["CoreUserParticipantsPage"],
        children: Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])([
            {
                path: ':userId',
                loadChildren: () => __webpack_require__.e(/*! import() | features-user-user-profile-lazy-module */ "user-profile-lazy-module").then(__webpack_require__.bind(null, /*! @features/user/user-profile-lazy.module */ "./src/core/features/user/user-profile-lazy.module.ts")).then(m => m.CoreUserProfileLazyModule),
                data: { swipeManagerSource: 'participants' },
            },
        ], () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
    },
];
let CoreUserCourseLazyModule = class CoreUserCourseLazyModule {
};
CoreUserCourseLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _features_user_pages_participants_participants_module__WEBPACK_IMPORTED_MODULE_6__["CoreUserParticipantsPageModule"],
        ],
    })
], CoreUserCourseLazyModule);



/***/ })

}]);
//# sourceMappingURL=features-user-user-course-lazy-module.js.map