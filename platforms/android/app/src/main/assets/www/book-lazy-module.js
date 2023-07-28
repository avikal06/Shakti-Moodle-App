(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/book/pages/contents/contents.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/book/pages/contents/contents.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"showToc()\" [attr.aria-label]=\"'addon.mod_book.toc' | translate\" aria-haspopup=\"true\" *ngIf=\"loaded\">\r\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <div class=\"safe-area-padding-horizontal core-swipe-slides-container\">\r\n            <ion-card class=\"core-warning-card\" *ngIf=\"warning\">\r\n                <ion-item>\r\n                    <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label><span [innerHTML]=\"warning\"></span></ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <core-swipe-slides [manager]=\"manager\" [options]=\"slidesOpts\">\r\n                <ng-template let-chapter=\"item\" let-active=\"active\">\r\n                    <div class=\"ion-padding\">\r\n                        <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"chapter.content\" contextLevel=\"module\"\r\n                            [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [disabled]=\"!active\"></core-format-text>\r\n                        <div class=\"ion-margin-top\" *ngIf=\"chapter.tags?.length > 0\">\r\n                            <strong>{{ 'core.tag.tags' | translate }}: </strong>\r\n                            <core-tag-list [tags]=\"chapter.tags\"></core-tag-list>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </core-swipe-slides>\r\n        </div>\r\n    </core-loading>\r\n\r\n    <core-navigation-bar collapsible-footer appearOnBottom *ngIf=\"loaded && displayNavBar && navigationItems.length > 1\"\r\n        [items]=\"navigationItems\" previousTranslate=\"addon.mod_book.navprevtitle\" nextTranslate=\"addon.mod_book.navnexttitle\"\r\n        (action)=\"changeChapter($event.id)\" slot=\"fixed\">\r\n    </core-navigation-bar>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/book/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/book/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-book-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\">\r\n    </addon-mod-book-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/book/book-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/book/book-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModBookLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModBookLazyModule", function() { return AddonModBookLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/book/components/components.module.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index */ "./src/addons/mod/book/pages/index/index.ts");
/* harmony import */ var _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/tag/components/components.module */ "./src/core/features/tag/components/components.module.ts");
/* harmony import */ var _addons_mod_book_pages_contents_contents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/mod/book/pages/contents/contents */ "./src/addons/mod/book/pages/contents/contents.ts");
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
        path: ':courseId/:cmId',
        component: _pages_index__WEBPACK_IMPORTED_MODULE_5__["AddonModBookIndexPage"],
    },
    {
        path: ':courseId/:cmId/contents',
        component: _addons_mod_book_pages_contents_contents__WEBPACK_IMPORTED_MODULE_7__["AddonModBookContentsPage"],
    },
];
let AddonModBookLazyModule = class AddonModBookLazyModule {
};
AddonModBookLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModBookComponentsModule"],
            _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreTagComponentsModule"],
        ],
        declarations: [
            _pages_index__WEBPACK_IMPORTED_MODULE_5__["AddonModBookIndexPage"],
            _addons_mod_book_pages_contents_contents__WEBPACK_IMPORTED_MODULE_7__["AddonModBookContentsPage"],
        ],
    })
], AddonModBookLazyModule);



/***/ }),

/***/ "./src/addons/mod/book/pages/contents/contents.scss":
/*!**********************************************************!*\
  !*** ./src/addons/mod/book/pages/contents/contents.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-swipe-slides-container ion-card {\n  flex: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2Jvb2svcGFnZXMvY29udGVudHMvY29udGVudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFVBQUE7QUFEWiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9ib29rL3BhZ2VzL2NvbnRlbnRzL2NvbnRlbnRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuY29yZS1zd2lwZS1zbGlkZXMtY29udGFpbmVyIHtcclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/mod/book/pages/contents/contents.ts":
/*!********************************************************!*\
  !*** ./src/addons/mod/book/pages/contents/contents.ts ***!
  \********************************************************/
/*! exports provided: AddonModBookContentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModBookContentsPage", function() { return AddonModBookContentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _classes_items_management_swipe_slides_items_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/items-management/swipe-slides-items-manager */ "./src/core/classes/items-management/swipe-slides-items-manager.ts");
/* harmony import */ var _classes_items_management_swipe_slides_items_manager_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/items-management/swipe-slides-items-manager-source */ "./src/core/classes/items-management/swipe-slides-items-manager-source.ts");
/* harmony import */ var _components_swipe_slides_swipe_slides__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/swipe-slides/swipe-slides */ "./src/core/components/swipe-slides/swipe-slides.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _components_toc_toc__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/toc/toc */ "./src/addons/mod/book/components/toc/toc.ts");
/* harmony import */ var _services_book__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/book */ "./src/addons/mod/book/services/book.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
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
 * Page that displays a book contents.
 */
let AddonModBookContentsPage = class AddonModBookContentsPage {
    constructor() {
        this.title = '';
        this.component = _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBookProvider"].COMPONENT;
        this.warning = '';
        this.displayNavBar = true;
        this.navigationItems = [];
        this.slidesOpts = {
            autoHeight: true,
            observer: true,
            observeParents: true,
            scrollOnChange: 'top',
        };
        this.loaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.initialChapterId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('chapterId');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
            return;
        }
        const source = new AddonModBookSlidesItemsManagerSource(this.courseId, this.cmId, _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_9__["CoreTag"].areTagsAvailableInSite(), this.initialChapterId);
        this.manager = new _classes_items_management_swipe_slides_items_manager__WEBPACK_IMPORTED_MODULE_4__["CoreSwipeSlidesItemsManager"](source);
        this.managerUnsubscribe = this.manager.addListener({
            onSelectedItemUpdated: (item) => {
                this.onChapterViewed(item.id);
            },
        });
        this.fetchContent();
    }
    get module() {
        var _a;
        return (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().module;
    }
    get book() {
        var _a;
        return (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().book;
    }
    get chapters() {
        var _a;
        return ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().chapters) || [];
    }
    /**
     * Download book contents and load the current chapter.
     *
     * @param refresh Whether we're refreshing data.
     * @returns Promise resolved when done.
     */
    fetchContent(refresh = false) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const source = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource();
                if (!source) {
                    return;
                }
                const { module, book } = yield source.loadBookData();
                const downloadResult = yield this.downloadResourceIfNeeded(module, refresh);
                this.displayNavBar = book.navstyle != 0 /* TOC_ONLY */;
                this.title = book.name;
                // Get contents. No need to refresh, it has been done in downloadResourceIfNeeded.
                yield source.loadContents();
                yield source.load();
                if (downloadResult === null || downloadResult === void 0 ? void 0 : downloadResult.failed) {
                    const error = _services_utils_text__WEBPACK_IMPORTED_MODULE_13__["CoreTextUtils"].getErrorMessageFromError(downloadResult.error) || downloadResult.error;
                    this.warning = _singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('core.errordownloadingsomefiles') + (error ? ' ' + error : '');
                }
                else {
                    this.warning = '';
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Download a resource if needed.
     * If the download call fails the promise won't be rejected, but the error will be included in the returned object.
     * If module.contents cannot be loaded then the Promise will be rejected.
     *
     * @param module Module to download.
     * @param refresh Whether we're refreshing data.
     * @returns Promise resolved when done.
     */
    downloadResourceIfNeeded(module, refresh = false) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = {
                failed: false,
            };
            let contentsAlreadyLoaded = false;
            // Get module status to determine if it needs to be downloaded.
            const status = yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreCourseModulePrefetchDelegate"].getModuleStatus(module, this.courseId, undefined, refresh);
            if (status !== _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].DOWNLOADED) {
                // Download content. This function also loads module contents if needed.
                try {
                    yield _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreCourseModulePrefetchDelegate"].downloadModule(module, this.courseId);
                    // If we reach here it means the download process already loaded the contents, no need to do it again.
                    contentsAlreadyLoaded = true;
                }
                catch (error) {
                    // Mark download as failed but go on since the main files could have been downloaded.
                    result.failed = true;
                    result.error = error;
                }
            }
            if (!((_a = module.contents) === null || _a === void 0 ? void 0 : _a.length) || (refresh && !contentsAlreadyLoaded)) {
                // Try to load the contents.
                const ignoreCache = refresh && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
                try {
                    yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourse"].loadModuleContents(module, undefined, undefined, false, ignoreCache);
                }
                catch (error) {
                    // Error loading contents. If we ignored cache, try to get the cached value.
                    if (ignoreCache && !module.contents) {
                        yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourse"].loadModuleContents(module);
                    }
                    else if (!module.contents) {
                        // Not able to load contents, throw the error.
                        throw error;
                    }
                }
            }
            return result;
        });
    }
    /**
     * Change the current chapter.
     *
     * @param chapterId Chapter to load.
     */
    changeChapter(chapterId) {
        var _a;
        if (!chapterId) {
            return;
        }
        (_a = this.slides) === null || _a === void 0 ? void 0 : _a.slideToItem({ id: chapterId });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @returns Promise resolved when done.
     */
    doRefresh(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.manager) {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(Promise.all([
                    this.manager.getSource().invalidateContent(),
                    _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_8__["CoreCourseModulePrefetchDelegate"].invalidateCourseUpdates(this.courseId),
                ]));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(this.fetchContent(true));
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Show the TOC.
     */
    showToc() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create the toc modal.
            const visibleChapter = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_12__["CoreDomUtils"].openSideModal({
                component: _components_toc_toc__WEBPACK_IMPORTED_MODULE_16__["AddonModBookTocComponent"],
                componentProps: {
                    moduleId: this.cmId,
                    chapters: this.chapters,
                    selected: visibleChapter === null || visibleChapter === void 0 ? void 0 : visibleChapter.id,
                    courseId: this.courseId,
                    book: this.book,
                },
            });
            if (modalData) {
                this.changeChapter(modalData);
            }
        });
    }
    /**
     * Update data related to chapter being viewed.
     *
     * @param chapterId Chapter viewed.
     * @returns Promise resolved when done.
     */
    onChapterViewed(chapterId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.displayNavBar) {
                this.navigationItems = this.getNavigationItems(chapterId);
            }
            if (this.book) {
                _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].storeLastChapterViewed(this.book.id, chapterId, this.courseId);
            }
            if (!this.module) {
                return;
            }
            // Chapter loaded, log view.
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].logView(this.module.instance, chapterId));
            _services_analytics__WEBPACK_IMPORTED_MODULE_18__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_18__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_book_view_book',
                name: this.module.name,
                data: { id: this.module.instance, category: 'book', chapterid: chapterId },
                url: _services_utils_url__WEBPACK_IMPORTED_MODULE_19__["CoreUrlUtils"].addParamsToUrl(`/mod/book/view.php?id=${this.module.id}`, { chapterid: chapterId }),
            });
            const currentChapterIndex = this.chapters.findIndex((chapter) => chapter.id == chapterId);
            const isLastChapter = currentChapterIndex < 0 || this.chapters[currentChapterIndex + 1] === undefined;
            // Module is completed when last chapter is viewed, so we only check completion if the last is reached.
            if (isLastChapter) {
                _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourse"].checkModuleCompletion(this.courseId, this.module.completiondata);
            }
        });
    }
    /**
     * Converts chapters to navigation items.
     *
     * @param chapterId Current chapter Id.
     * @returns Navigation items.
     */
    getNavigationItems(chapterId) {
        return this.chapters.map((chapter) => ({
            item: chapter,
            title: chapter.title,
            current: chapter.id == chapterId,
            enabled: true,
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.manager) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.managerUnsubscribe) === null || _b === void 0 ? void 0 : _b.call(this);
        delete this.manager;
    }
};
AddonModBookContentsPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_components_swipe_slides_swipe_slides__WEBPACK_IMPORTED_MODULE_6__["CoreSwipeSlidesComponent"],] }]
};
AddonModBookContentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-book-contents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contents.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/book/pages/contents/contents.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contents.scss */ "./src/addons/mod/book/pages/contents/contents.scss")).default]
    })
], AddonModBookContentsPage);

/**
 * Helper to manage swiping within a collection of chapters.
 */
class AddonModBookSlidesItemsManagerSource extends _classes_items_management_swipe_slides_items_manager_source__WEBPACK_IMPORTED_MODULE_5__["CoreSwipeSlidesItemsManagerSource"] {
    constructor(courseId, cmId, tagsEnabled, initialChapterId) {
        super(initialChapterId ? { id: initialChapterId } : undefined);
        this.chapters = [];
        this.contentsMap = {};
        this.COURSE_ID = courseId;
        this.CM_ID = cmId;
        this.TAGS_ENABLED = tagsEnabled;
    }
    /**
     * @inheritdoc
     */
    getItemId(item) {
        return item.id;
    }
    /**
     * Load book data from WS.
     *
     * @returns Promise resolved when done.
     */
    loadBookData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.module = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourse"].getModule(this.CM_ID, this.COURSE_ID);
            this.book = yield _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].getBook(this.COURSE_ID, this.CM_ID);
            if (!this.initialItem) {
                // No chapter ID specified. Calculate last viewed.
                const lastViewed = yield _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].getLastChapterViewed(this.book.id);
                if (lastViewed) {
                    this.initialItem = { id: lastViewed };
                }
            }
            return {
                module: this.module,
                book: this.book,
            };
        });
    }
    /**
     * Load module contents.
     */
    loadContents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.module) {
                return;
            }
            const contents = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourse"].getModuleContents(this.module, this.COURSE_ID);
            this.contentsMap = _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].getContentsMap(contents);
            this.chapters = _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].getTocList(contents);
        });
    }
    /**
     * @inheritdoc
     */
    loadItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newChapters = yield Promise.all(this.chapters.map((chapter) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const content = yield _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].getChapterContent(this.contentsMap, chapter.id, this.CM_ID);
                    return {
                        id: chapter.id,
                        content,
                        tags: this.TAGS_ENABLED ? this.contentsMap[chapter.id].tags : [],
                    };
                })));
                return newChapters;
            }
            catch (error) {
                if (!_services_utils_text__WEBPACK_IMPORTED_MODULE_13__["CoreTextUtils"].getErrorMessageFromError(error)) {
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.mod_book.errorchapter'));
                }
                throw error;
            }
        });
    }
    /**
     * Perform the invalidate content function.
     *
     * @returns Resolved when done.
     */
    invalidateContent() {
        return _services_book__WEBPACK_IMPORTED_MODULE_17__["AddonModBook"].invalidateContent(this.CM_ID, this.COURSE_ID);
    }
}


/***/ }),

/***/ "./src/addons/mod/book/pages/index/index.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/book/pages/index/index.ts ***!
  \**************************************************/
/*! exports provided: AddonModBookIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModBookIndexPage", function() { return AddonModBookIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/book/components/index/index.ts");
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
 * Page that displays a book entry page.
 */
let AddonModBookIndexPage = class AddonModBookIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModBookIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModBookIndexComponent"],] }]
};
AddonModBookIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-book-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/book/pages/index/index.html")).default,
    })
], AddonModBookIndexPage);



/***/ })

}]);
//# sourceMappingURL=book-lazy-module.js.map