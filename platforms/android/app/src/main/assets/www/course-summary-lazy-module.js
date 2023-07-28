(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-summary-lazy-module"],{

/***/ "./src/core/features/course/course-summary-lazy.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/course/course-summary-lazy.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreCourseSummaryLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSummaryLazyModule", function() { return CoreCourseSummaryLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_reminders_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/reminders/components/components.module */ "./src/core/features/reminders/components/components.module.ts");
/* harmony import */ var _features_course_pages_course_summary_course_summary_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/pages/course-summary/course-summary.page */ "./src/core/features/course/pages/course-summary/course-summary.page.ts");
/* harmony import */ var _features_course_pages_course_summary_course_summary_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/course/pages/course-summary/course-summary.module */ "./src/core/features/course/pages/course-summary/course-summary.module.ts");
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
        component: _features_course_pages_course_summary_course_summary_page__WEBPACK_IMPORTED_MODULE_5__["CoreCourseSummaryPage"],
    },
];
let CoreCourseSummaryLazyModule = class CoreCourseSummaryLazyModule {
};
CoreCourseSummaryLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_reminders_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreRemindersComponentsModule"],
            _features_course_pages_course_summary_course_summary_module__WEBPACK_IMPORTED_MODULE_6__["CoreCourseSummaryPageModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseSummaryLazyModule);



/***/ })

}]);
//# sourceMappingURL=course-summary-lazy-module.js.map