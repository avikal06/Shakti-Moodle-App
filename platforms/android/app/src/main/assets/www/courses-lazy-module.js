(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/categories/categories.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/categories/categories.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"coursecat\" [contextInstanceId]=\"currentCategory && currentCategory!.id\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-context-menu>\r\n                <core-context-menu-item *ngIf=\"downloadCourseEnabled || downloadCoursesEnabled\" [priority]=\"1000\"\r\n                    [content]=\"'core.settings.showdownloadoptions' | translate\" (action)=\"toggleDownload()\" iconAction=\"toggle\"\r\n                    [(toggle)]=\"downloadEnabled\"></core-context-menu-item>\r\n                <core-context-menu-item [priority]=\"900\" [content]=\"'core.courses.showonlyenrolled' | translate\" (action)=\"filterEnrolled()\"\r\n                    iconAction=\"toggle\" [(toggle)]=\"showOnlyEnrolled\"></core-context-menu-item>\r\n            </core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!categoriesLoaded\" (ionRefresh)=\"refreshCategories($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"categoriesLoaded\">\r\n        <ion-list class=\"list-item-limited-width\">\r\n            <ion-item *ngIf=\"currentCategory\" class=\"ion-text-wrap\">\r\n                <ion-icon name=\"fas-folder\" slot=\"start\" [attr.aria-label]=\"'core.category' | translate\"></ion-icon>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">\r\n                        <core-format-text [text]=\"currentCategory.name\" contextLevel=\"coursecat\" [contextInstanceId]=\"currentCategory.id\">\r\n                        </core-format-text>\r\n                    </p>\r\n                    <p *ngIf=\"currentCategory.description\">\r\n                        <core-format-text [text]=\"currentCategory.description\" collapsible-item contextLevel=\"coursecat\"\r\n                            [contextInstanceId]=\"currentCategory.id\"></core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ng-container *ngIf=\"categories.length > 0\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h2 class=\"big\">{{ 'core.courses.categories' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-card *ngFor=\"let category of categories\">\r\n                    <ion-item button class=\"ion-text-wrap\" (click)=\"openCategory(category.id)\" [attr.aria-label]=\"category.name\"\r\n                        detail=\"true\">\r\n                        <ion-icon name=\"fas-folder\" slot=\"start\" [attr.aria-label]=\"'core.category' | translate\"></ion-icon>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">\r\n                                <core-format-text [text]=\"category.name\" contextLevel=\"coursecat\" [contextInstanceId]=\"category.id\">\r\n                                </core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                        <ion-badge slot=\"end\" *ngIf=\"!showOnlyEnrolled && category.coursecount > 0\" color=\"light\">\r\n                            <span aria-hidden=\"true\">{{ category.coursecount }}</span>\r\n                            <span class=\"sr-only\">{{ 'core.courses.therearecourses' | translate:{ $a: category.coursecount } }}</span>\r\n                        </ion-badge>\r\n                    </ion-item>\r\n                </ion-card>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"courses.length > 0\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h2 *ngIf=\"!showOnlyEnrolled\" class=\"big\">{{ 'core.courses.courses' | translate }}</h2>\r\n                        <h2 *ngIf=\"showOnlyEnrolled\" class=\"big\">{{ 'core.courses.mycourses' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <core-courses-course-list-item *ngFor=\"let course of courses\" [course]=\"course\" [showDownload]=\"downloadEnabled\">\r\n                </core-courses-course-list-item>\r\n            </ng-container>\r\n        </ion-list>\r\n        <core-empty-box *ngIf=\"!categories.length && !courses.length\" icon=\"fas-graduation-cap\"\r\n            [message]=\"'core.courses.nocoursesyet' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/list/list.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/list/list.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"!showOnlyEnrolled\">{{ 'core.courses.availablecourses' | translate }}</h1>\r\n            <h1 *ngIf=\"showOnlyEnrolled\">{{ 'core.courses.mycourses' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-context-menu>\r\n                <core-context-menu-item *ngIf=\"downloadCourseEnabled || downloadCoursesEnabled\" [priority]=\"1000\"\r\n                    [content]=\"'core.settings.showdownloadoptions' | translate\" (action)=\"toggleDownload()\" iconAction=\"toggle\"\r\n                    [(toggle)]=\"downloadEnabled\"></core-context-menu-item>\r\n                <core-context-menu-item [priority]=\"900\" [content]=\"'core.courses.showonlyenrolled' | translate\" (action)=\"toggleEnrolled()\"\r\n                    iconAction=\"toggle\" [(toggle)]=\"showOnlyEnrolled\"></core-context-menu-item>\r\n            </core-context-menu>\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshCourses($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-search-box *ngIf=\"searchEnabled\" (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\"\r\n        [placeholder]=\"'core.courses.search' | translate\" [searchLabel]=\"'core.courses.search' | translate\" [autoFocus]=\"searchMode\"\r\n        searchArea=\"CoreCoursesSearch\"></core-search-box>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ng-container *ngIf=\"searchMode && searchTotal > 0\">\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'core.courses.totalcoursesearchresults' | translate:{$a: searchTotal} }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n        </ng-container>\r\n\r\n        <ion-list class=\"list-item-limited-width\">\r\n            <core-courses-course-list-item *ngFor=\"let course of courses\" [course]=\"course\" [showDownload]=\"downloadEnabled\">\r\n            </core-courses-course-list-item>\r\n        </ion-list>\r\n\r\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreCourses($event)\" [error]=\"loadMoreError\">\r\n        </core-infinite-loading>\r\n\r\n\r\n        <core-empty-box *ngIf=\"searchMode && !courses.length\" icon=\"fas-magnifying-glass\"\r\n            [message]=\"'core.courses.nosearchresults' | translate\">\r\n        </core-empty-box>\r\n\r\n        <core-empty-box *ngIf=\"!searchMode && !courses.length\" icon=\"fas-graduation-cap\" [message]=\"'core.courses.nocourses' | translate\">\r\n        </core-empty-box>\r\n\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/courses/courses-lazy.module.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/courses/courses-lazy.module.ts ***!
  \**********************************************************/
/*! exports provided: CoreCoursesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesLazyModule", function() { return CoreCoursesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_courses_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/courses/components/components.module */ "./src/core/features/courses/components/components.module.ts");
/* harmony import */ var _features_courses_pages_categories_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/courses/pages/categories/categories */ "./src/core/features/courses/pages/categories/categories.ts");
/* harmony import */ var _features_courses_pages_list_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/pages/list/list */ "./src/core/features/courses/pages/list/list.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _services_courses_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _services_handlers_my_courses_mainmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/handlers/my-courses-mainmenu */ "./src/core/features/courses/services/handlers/my-courses-mainmenu.ts");
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
    return [
        {
            path: 'my',
            data: {
                mainMenuTabRoot: _services_handlers_my_courses_mainmenu__WEBPACK_IMPORTED_MODULE_11__["CoreCoursesMyCoursesMainMenuHandlerService"].PAGE_NAME,
            },
            loadChildren: () => _services_courses_helper__WEBPACK_IMPORTED_MODULE_10__["CoreCoursesHelper"].getMyRouteModule(),
        },
        {
            path: 'categories',
            redirectTo: 'categories/root',
            pathMatch: 'full',
        },
        {
            path: 'categories/:id',
            component: _features_courses_pages_categories_categories__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesCategoriesPage"],
        },
        {
            path: 'list',
            component: _features_courses_pages_list_list__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesListPage"],
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_8__["buildTabMainRoutes"])(injector, {
            redirectTo: 'my',
            pathMatch: 'full',
        }),
    ];
}
let CoreCoursesLazyModule = class CoreCoursesLazyModule {
};
CoreCoursesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _features_courses_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCoursesComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreMainMenuComponentsModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_9__["CoreSearchComponentsModule"],
        ],
        declarations: [
            _features_courses_pages_categories_categories__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesCategoriesPage"],
            _features_courses_pages_list_list__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesListPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], CoreCoursesLazyModule);



/***/ }),

/***/ "./src/core/features/courses/pages/categories/categories.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/courses/pages/categories/categories.ts ***!
  \******************************************************************/
/*! exports provided: CoreCoursesCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesCategoriesPage", function() { return CoreCoursesCategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
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
 * Page that displays a list of categories and the courses in the current category if any.
 */
let CoreCoursesCategoriesPage = class CoreCoursesCategoriesPage {
    constructor() {
        this.categories = [];
        this.courses = [];
        this.categoriesLoaded = false;
        this.showOnlyEnrolled = false;
        this.downloadEnabled = false;
        this.downloadCourseEnabled = false;
        this.downloadCoursesEnabled = false;
        this.categoryCourses = [];
        this.categoryId = 0;
        this.isDestroyed = false;
        this.title = _singletons__WEBPACK_IMPORTED_MODULE_6__["Translate"].instant('core.courses.categories');
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getRequiredCurrentSite().getId();
        // Update list if user enrols in a course.
        this.myCoursesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesProvider"].EVENT_MY_COURSES_UPDATED, (data) => {
            if (data.action == _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesProvider"].ACTION_ENROL) {
                this.fetchCategories();
            }
        }, this.currentSiteId);
        // Refresh the enabled flags if site is updated.
        this.siteUpdatedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].SITE_UPDATED, () => {
            this.downloadCourseEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].isDownloadCoursesDisabledInSite();
            this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && this.downloadEnabled;
        }, this.currentSiteId);
        this.downloadEnabledObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesProvider"].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, (data) => {
            this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && data.enabled;
        });
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_10__["CoreTime"].once(() => {
            _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_course_get_categories',
                name: this.title,
                data: { categoryid: this.categoryId, category: 'course' },
                url: '/course/index.php' + (this.categoryId > 0 ? `?categoryid=${this.categoryId}` : ''),
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.categoryId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('id') || 0;
        this.showOnlyEnrolled = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteBooleanParam('enrolled') || this.showOnlyEnrolled;
        this.downloadCourseEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].isDownloadCourseDisabledInSite();
        this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].isDownloadCoursesDisabledInSite();
        this.downloadEnabled =
            (this.downloadCourseEnabled || this.downloadCoursesEnabled) && _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCourseDownloadOptionsEnabled();
        this.fetchCategories().finally(() => {
            this.categoriesLoaded = true;
        });
    }
    /**
     * Fetch the categories.
     *
     * @returns Promise resolved when done.
     */
    fetchCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const categories = yield _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCategories(this.categoryId, true);
                this.currentCategory = undefined;
                const index = categories.findIndex((category) => category.id == this.categoryId);
                if (index >= 0) {
                    this.currentCategory = categories[index];
                    // Delete current Category to avoid problems with the formatTree.
                    delete categories[index];
                }
                // Sort by depth and sortorder to avoid problems formatting Tree.
                categories.sort((a, b) => {
                    if (a.depth == b.depth) {
                        return (a.sortorder > b.sortorder) ? 1 : ((b.sortorder > a.sortorder) ? -1 : 0);
                    }
                    return a.depth > b.depth ? 1 : -1;
                });
                this.categories = _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].formatTree(categories, 'parent', 'id', this.categoryId);
                if (this.currentCategory) {
                    this.title = this.currentCategory.name;
                    try {
                        this.categoryCourses = yield _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCoursesByField('category', this.categoryId);
                        yield this.filterEnrolled();
                    }
                    catch (error) {
                        !this.isDestroyed && _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
                    }
                }
                this.logView();
            }
            catch (error) {
                !this.isDestroyed && _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorloadcategories', true);
            }
        });
    }
    /**
     * Refresh the categories.
     *
     * @param refresher Refresher.
     */
    refreshCategories(refresher) {
        const promises = [];
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateUserCourses());
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCategories(this.categoryId, true));
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCoursesByField('category', this.categoryId));
        promises.push(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getRequiredCurrentSite().invalidateConfig());
        Promise.all(promises).finally(() => {
            this.fetchCategories().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Open a category.
     *
     * @param categoryId Category Id.
     */
    openCategory(categoryId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSitePath('courses/categories/' + categoryId, { params: {
                enrolled: this.showOnlyEnrolled,
            } });
    }
    /**
     * Filter my courses or not.
     */
    filterEnrolled() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.showOnlyEnrolled) {
                this.courses = this.categoryCourses;
            }
            else {
                yield Promise.all(this.categoryCourses.map((course) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const isEnrolled = course.progress !== undefined;
                    if (!isEnrolled) {
                        try {
                            const userCourse = yield _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getUserCourse(course.id);
                            course.progress = userCourse.progress;
                            course.completionusertracked = userCourse.completionusertracked;
                        }
                        catch (_a) {
                            // Ignore errors.
                        }
                    }
                })));
                this.courses = this.categoryCourses.filter((course) => 'progress' in course);
            }
        });
    }
    /**
     * Toggle download enabled.
     */
    toggleDownload() {
        _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].setCourseDownloadOptionsEnabled(this.downloadEnabled);
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.myCoursesObserver.off();
        this.siteUpdatedObserver.off();
        this.downloadEnabledObserver.off();
        this.isDestroyed = true;
    }
};
CoreCoursesCategoriesPage.ctorParameters = () => [];
CoreCoursesCategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/categories/categories.html")).default,
    })
], CoreCoursesCategoriesPage);



/***/ }),

/***/ "./src/core/features/courses/pages/list/list.ts":
/*!******************************************************!*\
  !*** ./src/core/features/courses/pages/list/list.ts ***!
  \******************************************************/
/*! exports provided: CoreCoursesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesListPage", function() { return CoreCoursesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that shows a list of courses.
 */
let CoreCoursesListPage = class CoreCoursesListPage {
    constructor() {
        this.downloadAllCoursesEnabled = false;
        this.searchEnabled = false;
        this.searchMode = false;
        this.searchTotal = 0;
        this.downloadEnabled = false;
        this.downloadCourseEnabled = false;
        this.downloadCoursesEnabled = false;
        this.courses = [];
        this.loaded = false;
        this.coursesLoaded = 0;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.showOnlyEnrolled = false;
        this.loadedCourses = [];
        this.loadCoursesPerPage = 20;
        this.searchPage = 0;
        this.searchText = '';
        this.courseIds = '';
        this.isDestroyed = false;
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getRequiredCurrentSite().getId();
        this.frontpageCourseId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getRequiredCurrentSite().getSiteHomeId();
        // Update list if user enrols in a course.
        this.myCoursesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCoursesProvider"].EVENT_MY_COURSES_UPDATED, (data) => {
            if (data.action == _services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCoursesProvider"].ACTION_ENROL) {
                this.fetchCourses();
            }
        }, this.currentSiteId);
        // Refresh the enabled flags if site is updated.
        this.siteUpdatedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].SITE_UPDATED, () => {
            this.searchEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isSearchCoursesDisabledInSite();
            this.downloadCourseEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isDownloadCoursesDisabledInSite();
            this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && this.downloadEnabled;
            if (!this.searchEnabled && this.searchMode) {
                this.searchMode = false;
                this.fetchCourses();
            }
        }, this.currentSiteId);
        this.downloadEnabledObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCoursesProvider"].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, (data) => {
            this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && data.enabled;
        });
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_8__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.showOnlyEnrolled) {
                _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                    type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                    ws: 'core_enrol_get_users_courses',
                    name: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.courses.mycourses'),
                    data: { category: 'course' },
                    url: '/my/courses.php',
                });
            }
            else {
                _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                    type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                    ws: 'core_course_get_courses_by_field',
                    name: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.courses.availablecourses'),
                    data: { category: 'course' },
                    url: '/course/index.php',
                });
            }
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.downloadCourseEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isDownloadCourseDisabledInSite();
        this.downloadCoursesEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isDownloadCoursesDisabledInSite();
        this.downloadEnabled =
            (this.downloadCourseEnabled || this.downloadCoursesEnabled) && _services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getCourseDownloadOptionsEnabled();
        const mode = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('mode') || 'my';
        if (mode == 'search') {
            this.searchMode = true;
        }
        if (mode == 'my') {
            this.showOnlyEnrolled = true;
        }
        this.searchEnabled = !_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].isSearchCoursesDisabledInSite();
        if (!this.searchEnabled) {
            this.searchMode = false;
        }
        this.fetchCourses();
    }
    /**
     * Load the course list.
     *
     * @returns Promise resolved when done.
     */
    fetchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.searchMode) {
                    if (this.searchText) {
                        yield this.searchCourses();
                    }
                }
                else {
                    yield this.loadCourses(true);
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Fetch the courses.
     *
     * @param clearTheList If list needs to be reloaded.
     * @returns Promise resolved when done.
     */
    loadCourses(clearTheList = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            try {
                if (clearTheList) {
                    if (this.showOnlyEnrolled) {
                        this.loadedCourses = yield _services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getUserCourses();
                    }
                    else {
                        const courses = yield _services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].getCoursesByField();
                        this.loadedCourses = courses.filter((course) => course.id != this.frontpageCourseId);
                    }
                    this.coursesLoaded = 0;
                    this.courses = [];
                }
                const addCourses = this.loadedCourses.slice(this.coursesLoaded, this.coursesLoaded + this.loadCoursesPerPage);
                yield _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_2__["CoreCoursesHelper"].loadCoursesExtraInfo(addCourses, true);
                this.courses = this.courses.concat(addCourses);
                this.courseIds = this.courses.map((course) => course.id).join(',');
                this.coursesLoaded = this.courses.length;
                this.canLoadMore = this.loadedCourses.length > this.courses.length;
                this.logView();
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                !this.isDestroyed && _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
            }
        });
    }
    /**
     * Refresh the courses.
     *
     * @param refresher Refresher.
     */
    refreshCourses(refresher) {
        const promises = [];
        if (!this.searchMode) {
            if (this.showOnlyEnrolled) {
                promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateUserCourses());
            }
            else {
                promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateCoursesByField());
            }
            if (this.courseIds) {
                promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].invalidateCoursesByField('ids', this.courseIds));
            }
        }
        Promise.all(promises).finally(() => {
            this.fetchCourses().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Search a new text.
     *
     * @param text The text to search.
     */
    search(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.searchMode = true;
            this.searchText = text;
            this.courses = [];
            this.searchPage = 0;
            this.searchTotal = 0;
            this.logSearch = _singletons_time__WEBPACK_IMPORTED_MODULE_8__["CoreTime"].once(() => this.performLogSearch());
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showModalLoading('core.searching', true);
            yield this.searchCourses().finally(() => {
                modal.dismiss();
            });
        });
    }
    /**
     * Clear search box.
     */
    clearSearch() {
        this.searchText = '';
        this.courses = [];
        this.searchPage = 0;
        this.searchTotal = 0;
        this.searchMode = false;
        this.loaded = false;
        this.fetchCourses();
    }
    /**
     * Log search.
     */
    performLogSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.searchMode) {
                return;
            }
            _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_course_search_courses',
                name: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.courses.availablecourses'),
                data: { search: this.searchText, category: 'course' },
                url: `/course/search.php?search=${this.searchText}`,
            });
        });
    }
    /**
     * Load more courses.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     */
    loadMoreCourses(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.searchMode) {
                    yield this.searchCourses();
                }
                else {
                    yield this.loadCourses();
                }
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Search courses or load the next page of current search.
     *
     * @returns Promise resolved when done.
     */
    searchCourses() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            try {
                const response = yield _services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].search(this.searchText, this.searchPage, undefined, this.showOnlyEnrolled);
                if (this.searchPage === 0) {
                    this.courses = response.courses;
                }
                else {
                    this.courses = this.courses.concat(response.courses);
                }
                this.searchTotal = response.total;
                this.searchPage++;
                this.canLoadMore = this.courses.length < this.searchTotal;
                (_a = this.logSearch) === null || _a === void 0 ? void 0 : _a.call(this);
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                !this.isDestroyed && _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorsearching', true);
            }
        });
    }
    /**
     * Toggle show only my courses.
     */
    toggleEnrolled() {
        this.loaded = false;
        this.fetchCourses();
    }
    /**
     * Toggle download enabled.
     */
    toggleDownload() {
        _services_courses__WEBPACK_IMPORTED_MODULE_7__["CoreCourses"].setCourseDownloadOptionsEnabled(this.downloadEnabled);
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.myCoursesObserver.off();
        this.siteUpdatedObserver.off();
        this.downloadEnabledObserver.off();
        this.isDestroyed = true;
    }
};
CoreCoursesListPage.ctorParameters = () => [];
CoreCoursesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/list/list.html")).default,
    })
], CoreCoursesListPage);



/***/ })

}]);
//# sourceMappingURL=courses-lazy-module.js.map