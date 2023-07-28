(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tag-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index-area/index-area.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index-area/index-area.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                {{ 'core.tag.itemstaggedwith' | translate: { $a: {tagarea: areaNameKey | translate, tag: tagName} } }}\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <core-dynamic-component [component]=\"areaComponent\" [data]=\"{items: items}\"></core-dynamic-component>\r\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMore($event)\" [error]=\"loadMoreError\">\r\n        </core-infinite-loading>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index/index.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index/index.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.tag.tag' | translate }}: {{ tagName }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"loaded\">\r\n            <ion-list *ngIf=\"hasUnsupportedAreas || areas.length\">\r\n                <ion-item *ngIf=\"hasUnsupportedAreas\" class=\"core-warning-item\">\r\n                    <ion-icon slot=\"start\" name=\"fas-triangle-exclamation\" color=\"warning\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label class=\"ion-text-wrap\">{{ 'core.tag.warningareasnotsupported' | translate }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let area of areas\" [attr.aria-label]=\"area.nameKey | translate\"\r\n                    (click)=\"openArea(area)\" [attr.aria-current]=\"area.id == selectedAreaId ? 'page' : 'false'\" button detail=\"true\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ area.nameKey | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"area.badge\">\r\n                        <span aria-hidden=\"true\">{{ area.badge }}</span>\r\n                        <span class=\"sr-only\">{{ 'core.tag.tagareabadgedescription' | translate:{ count: area.badge } }}</span>\r\n                    </ion-badge>\r\n                </ion-item>\r\n            </ion-list>\r\n            <core-empty-box icon=\"fas-tag\" *ngIf=\"!hasUnsupportedAreas && (!areas || !areas.length)\"\r\n                [message]=\"'core.tag.noresultsfor' | translate: { $a: tagName }\"></core-empty-box>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.tag.searchtags' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-grid class=\"safe-area-padding\">\r\n        <ion-row class=\"ion-no-padding ion-wrap\">\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\" [attr.col-sm-6]=\"collections && collections.length > 1 ? '' : null\">\r\n                <core-search-box (onSubmit)=\"searchTags($event)\" (onClear)=\"searchTags('')\" [initialSearch]=\"query\" [disabled]=\"searching\"\r\n                    autocorrect=\"off\" [spellcheck]=\"false\" [autoFocus]=\"false\" [lengthCheck]=\"0\" searchArea=\"CoreTag\"></core-search-box>\r\n            </ion-col>\r\n            <ion-col class=\"ion-no-padding\" size=\"12\" size-sm=\"6\" *ngIf=\"collections && collections.length > 1\">\r\n                <core-combobox [selection]=\"collectionId\" (onChange)=\"searchTags(query, $event)\" [disabled]=\"searching\">\r\n                    <ion-select-option class=\"ion-text-wrap\" [value]=\"0\">\r\n                        {{ 'core.tag.inalltagcoll' | translate }}\r\n                    </ion-select-option>\r\n                    <ion-select-option class=\"ion-text-wrap\" *ngFor=\"let collection of collections\" [value]=\"collection.id\">\r\n                        {{ collection.name }}</ion-select-option>\r\n                </core-combobox>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <core-loading [hideUntil]=\"loaded && !searching\">\r\n        <core-empty-box *ngIf=\"!cloud || !cloud!.tags || !cloud!.tags.length\" icon=\"fas-tags\"\r\n            [message]=\"'core.tag.notagsfound' | translate: {$a: query}\"></core-empty-box>\r\n\r\n        <ng-container *ngIf=\"cloud && cloud!.tags && cloud!.tags.length > 0\">\r\n            <div class=\"ion-text-center core-tag-cloud\">\r\n                <ion-badge *ngFor=\"let tag of cloud!.tags\" (click)=\"openTag(tag)\" class=\"ion-text-wrap\">\r\n                    <span [class]=\"'size' + tag.size\">{{ tag.name }}</span>\r\n                </ion-badge>\r\n            </div>\r\n            <p *ngIf=\"cloud!.tags.length < cloud!.totalcount\" class=\"ion-text-center\">\r\n                {{ 'core.tag.showingfirsttags' | translate: {$a: cloud!.tags.length} }}\r\n            </p>\r\n        </ng-container>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/tag/pages/index-area/index-area.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/tag/pages/index-area/index-area.ts ***!
  \**************************************************************/
/*! exports provided: CoreTagIndexAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexAreaPage", function() { return CoreTagIndexAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tag-area-delegate */ "./src/core/features/tag/services/tag-area-delegate.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the tag index area.
 */
let CoreTagIndexAreaPage = class CoreTagIndexAreaPage {
    constructor(route) {
        this.route = route;
        this.tagId = 0;
        this.tagName = '';
        this.collectionId = 0;
        this.areaId = 0;
        this.fromContextId = 0;
        this.contextId = 0;
        this.recursive = true;
        this.areaNameKey = '';
        this.loaded = false;
        this.items = [];
        this.nextPage = 0;
        this.canLoadMore = false;
        this.loadMoreError = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                this.loaded = false;
                this.tagId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('tagId') || this.tagId;
                this.tagName = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('tagName') || this.tagName;
                this.collectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('collectionId') || this.collectionId;
                this.areaId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('areaId') || this.areaId;
                this.fromContextId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('fromContextId') || this.fromContextId;
                this.contextId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('contextId') || this.contextId;
                this.recursive = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteBooleanParam('recursive')) !== null && _a !== void 0 ? _a : true;
                this.areaNameKey = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('areaNameKey') || '';
                // Pass the the following parameters to avoid fetching the first page.
                this.componentName = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('componentName');
                this.itemType = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('itemType');
                this.items = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('items') || [];
                this.nextPage = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('nextPage') || 0;
                this.canLoadMore = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteBooleanParam('canLoadMore') || false;
                try {
                    if (!this.componentName || !this.itemType || !this.items.length || this.nextPage == 0) {
                        yield this.fetchData(true);
                    }
                    if (this.componentName && this.itemType) {
                        this.areaComponent = yield _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreTagAreaDelegate"].getComponent(this.componentName, this.itemType);
                    }
                }
                finally {
                    this.loaded = true;
                }
            }));
        });
    }
    /**
     * Fetch next page of the tag index area.
     *
     * @param refresh Whether to refresh the data or fetch a new page.
     * @returns Resolved when done.
     */
    fetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            const page = refresh ? 0 : this.nextPage;
            try {
                const areas = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, page);
                const area = areas[0];
                const items = yield _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreTagAreaDelegate"].parseContent(area.component, area.itemtype, area.content);
                if (!items || !items.length) {
                    // Tag area not supported.
                    throw _singletons__WEBPACK_IMPORTED_MODULE_6__["Translate"].instant('core.tag.errorareanotsupported');
                }
                if (page == 0) {
                    this.items = items;
                }
                else {
                    this.items.push(...items);
                }
                this.componentName = area.component;
                this.itemType = area.itemtype;
                this.areaNameKey = _services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreTagAreaDelegate"].getDisplayNameKey(area.component, area.itemtype);
                this.canLoadMore = !!area.nextpageurl;
                this.nextPage = page + 1;
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tag index');
            }
        });
    }
    /**
     * Load more items.
     *
     * @param infiniteComplete Infinite scroll complete function.
     * @returns Resolved when done.
     */
    loadMore(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchData();
            }
            finally {
                infiniteComplete === null || infiniteComplete === void 0 ? void 0 : infiniteComplete();
            }
        });
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive);
            }
            finally {
                try {
                    yield this.fetchData(true);
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            }
        });
    }
};
CoreTagIndexAreaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CoreTagIndexAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-tag-index-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index-area.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index-area/index-area.html")).default,
    })
], CoreTagIndexAreaPage);



/***/ }),

/***/ "./src/core/features/tag/pages/index/index.ts":
/*!****************************************************!*\
  !*** ./src/core/features/tag/pages/index/index.ts ***!
  \****************************************************/
/*! exports provided: CoreTagIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexPage", function() { return CoreTagIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _features_tag_services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/tag/services/tag-area-delegate */ "./src/core/features/tag/services/tag-area-delegate.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
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
 * Page that displays the tag index.
 */
let CoreTagIndexPage = class CoreTagIndexPage {
    constructor() {
        this.tagId = 0;
        this.tagName = '';
        this.collectionId = 0;
        this.areaId = 0;
        this.fromContextId = 0;
        this.contextId = 0;
        this.recursive = true;
        this.loaded = false;
        this.hasUnsupportedAreas = false;
        this.areas = [];
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_7__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const params = {
                tc: this.collectionId || undefined,
                tag: this.tagName || undefined,
                ta: this.areaId || undefined,
                from: this.fromContextId || undefined,
                ctx: this.contextId || undefined,
            };
            _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_tag_get_tagindex_per_area',
                name: this.tagName || _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.tag.tag'),
                data: Object.assign(Object.assign({ id: this.tagId || undefined }, params), { category: 'tag' }),
                url: _services_utils_url__WEBPACK_IMPORTED_MODULE_10__["CoreUrlUtils"].addParamsToUrl('/tag/index.php', params),
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tagId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('tagId') || this.tagId;
            this.tagName = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('tagName') || this.tagName;
            this.collectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('collectionId') || this.collectionId;
            this.areaId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('areaId') || this.areaId;
            this.fromContextId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('fromContextId') || this.fromContextId;
            this.contextId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('contextId') || this.contextId;
            this.recursive = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('recursive')) !== null && _a !== void 0 ? _a : true;
            try {
                yield this.fetchData();
                if (_services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet && this.areas && this.areas.length > 0) {
                    const area = this.areas.find((area) => area.id == this.areaId);
                    this.openArea(area || this.areas[0]);
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Fetch first page of tag index per area.
     *
     * @returns Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const areas = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, 0);
                this.areas = [];
                this.hasUnsupportedAreas = false;
                const areasDisplay = [];
                yield Promise.all(areas.map((area) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const items = yield _features_tag_services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreTagAreaDelegate"].parseContent(area.component, area.itemtype, area.content);
                    if (!items || !items.length) {
                        // Tag area not supported, skip.
                        this.hasUnsupportedAreas = true;
                        return;
                    }
                    areasDisplay.push({
                        id: area.ta,
                        componentName: area.component,
                        itemType: area.itemtype,
                        nameKey: _features_tag_services_tag_area_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreTagAreaDelegate"].getDisplayNameKey(area.component, area.itemtype),
                        items,
                        canLoadMore: !!area.nextpageurl,
                        badge: items && items.length ? items.length + (area.nextpageurl ? '+' : '') : '',
                    });
                })));
                this.areas = areasDisplay;
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tag index');
            }
        });
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_3__["CoreTag"].invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive).finally(() => {
            this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Navigate to an index area.
     *
     * @param area Area.
     */
    openArea(area) {
        if (area.id === this.selectedAreaId) {
            // Already opened.
            return;
        }
        if (_services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet) {
            this.selectedAreaId = area.id;
        }
        const params = {
            tagId: this.tagId,
            tagName: this.tagName,
            collectionId: this.collectionId,
            areaId: area.id,
            fromContextId: this.fromContextId,
            contextId: this.contextId,
            recursive: this.recursive,
            areaNameKey: area.nameKey,
            componentName: area.componentName,
            itemType: area.itemType,
            items: area.items.slice(),
            canLoadMore: area.canLoadMore,
            nextPage: 1,
        };
        const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].isCurrentPathInTablet('**/tag/index/index-area');
        const path = (splitViewLoaded ? '../' : '') + 'index-area';
        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].navigate(path, { params });
    }
};
CoreTagIndexPage.ctorParameters = () => [];
CoreTagIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-tag-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/index/index.html")).default,
    })
], CoreTagIndexPage);



/***/ }),

/***/ "./src/core/features/tag/pages/search/search.scss":
/*!********************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host core-search-box ion-card {\n  width: 100% !important;\n  margin: 0 !important;\n}\n:host .core-tag-cloud ion-badge {\n  margin: 8px;\n  cursor: pointer;\n}\n:host .core-tag-cloud ion-badge .size20 {\n  font-size: 3.4rem;\n}\n:host .core-tag-cloud ion-badge .size19 {\n  font-size: 3.3rem;\n}\n:host .core-tag-cloud ion-badge .size18 {\n  font-size: 3.2rem;\n}\n:host .core-tag-cloud ion-badge .size17 {\n  font-size: 3.1rem;\n}\n:host .core-tag-cloud ion-badge .size16 {\n  font-size: 3rem;\n}\n:host .core-tag-cloud ion-badge .size15 {\n  font-size: 2.9rem;\n}\n:host .core-tag-cloud ion-badge .size14 {\n  font-size: 2.8rem;\n}\n:host .core-tag-cloud ion-badge .size13 {\n  font-size: 2.7rem;\n}\n:host .core-tag-cloud ion-badge .size12 {\n  font-size: 2.6rem;\n}\n:host .core-tag-cloud ion-badge .size11 {\n  font-size: 2.5rem;\n}\n:host .core-tag-cloud ion-badge .size10 {\n  font-size: 2.4rem;\n}\n:host .core-tag-cloud ion-badge .size9 {\n  font-size: 2.3rem;\n}\n:host .core-tag-cloud ion-badge .size8 {\n  font-size: 2.2rem;\n}\n:host .core-tag-cloud ion-badge .size7 {\n  font-size: 2.1rem;\n}\n:host .core-tag-cloud ion-badge .size6 {\n  font-size: 2rem;\n}\n:host .core-tag-cloud ion-badge .size5 {\n  font-size: 1.9rem;\n}\n:host .core-tag-cloud ion-badge .size4 {\n  font-size: 1.8rem;\n}\n:host .core-tag-cloud ion-badge .size3 {\n  font-size: 1.7rem;\n}\n:host .core-tag-cloud ion-badge .size2 {\n  font-size: 1.6rem;\n}\n:host .core-tag-cloud ion-badge .size1 {\n  font-size: 1.5rem;\n}\n:host .core-tag-cloud ion-badge .size0 {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3RhZy9wYWdlcy9zZWFyY2gvc2VhcmNoLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRFI7QUFHUTtFQUNJLGlCQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFLUTtFQUNJLGlCQUFBO0FBSFo7QUFNUTtFQUNJLGlCQUFBO0FBSlo7QUFPUTtFQUNJLGVBQUE7QUFMWjtBQVFRO0VBQ0ksaUJBQUE7QUFOWjtBQVNRO0VBQ0ksaUJBQUE7QUFQWjtBQVVRO0VBQ0ksaUJBQUE7QUFSWjtBQVdRO0VBQ0ksaUJBQUE7QUFUWjtBQVlRO0VBQ0ksaUJBQUE7QUFWWjtBQWFRO0VBQ0ksaUJBQUE7QUFYWjtBQWNRO0VBQ0ksaUJBQUE7QUFaWjtBQWVRO0VBQ0ksaUJBQUE7QUFiWjtBQWdCUTtFQUNJLGlCQUFBO0FBZFo7QUFpQlE7RUFDSSxlQUFBO0FBZlo7QUFrQlE7RUFDSSxpQkFBQTtBQWhCWjtBQW1CUTtFQUNJLGlCQUFBO0FBakJaO0FBb0JRO0VBQ0ksaUJBQUE7QUFsQlo7QUFxQlE7RUFDSSxpQkFBQTtBQW5CWjtBQXNCUTtFQUNJLGlCQUFBO0FBcEJaO0FBdUJRO0VBQ0ksaUJBQUE7QUFyQloiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvdGFnL3BhZ2VzL3NlYXJjaC9zZWFyY2guc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGNvcmUtc2VhcmNoLWJveCBpb24tY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29yZS10YWctY2xvdWQgaW9uLWJhZGdlIHtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIC5zaXplMjAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMuMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMTYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTE1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTE0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTEzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTEyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTExIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTEwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplOCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemU3IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemUzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZTIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXplMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpemUwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/tag/pages/search/search.ts":
/*!******************************************************!*\
  !*** ./src/core/features/tag/pages/search/search.ts ***!
  \******************************************************/
/*! exports provided: CoreTagSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagSearchPage", function() { return CoreTagSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays most used tags and allows searching.
 */
let CoreTagSearchPage = class CoreTagSearchPage {
    constructor() {
        this.collections = [];
        this.loaded = false;
        this.searching = false;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_11__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_analytics__WEBPACK_IMPORTED_MODULE_12__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_12__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_tag_get_tag_cloud',
                name: _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('core.tag.searchtags'),
                data: { category: 'tag' },
                url: '/tag/search.php',
            });
        }));
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.collectionId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('collectionId') || 0;
        this.query = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteParam('query') || '';
        const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_10__["CoreMainMenuDeepLinkManager"]();
        deepLinkManager.treatLink();
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield Promise.all([
                    this.fetchCollections(),
                    this.fetchTags(),
                ]);
                if (!this.query) {
                    this.logView();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tags.');
            }
        });
    }
    /**
     * Fetch tag collections.
     *
     * @returns Resolved when done.
     */
    fetchCollections() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const collections = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].getTagCollections();
            collections.forEach((collection) => {
                if (!collection.name && collection.isdefault) {
                    collection.name = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('core.tag.defautltagcoll');
                }
            });
            this.collections = collections;
        });
    }
    /**
     * Fetch tags.
     *
     * @returns Resolved when done.
     */
    fetchTags() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cloud = yield _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].getTagCloud(this.collectionId, undefined, undefined, this.query);
            (_a = this.logSearch) === null || _a === void 0 ? void 0 : _a.call(this);
        });
    }
    /**
     * Go to tag index page.
     */
    openTag(tag) {
        const url = _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].decodeURI(tag.viewurl);
        _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_8__["CoreContentLinksHelper"].handleLink(url);
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher event.
     */
    refreshData(refresher) {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].allPromises([
            _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].invalidateTagCollections(),
            _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_6__["CoreTag"].invalidateTagCloud(this.collectionId, undefined, undefined, this.query),
        ]).finally(() => this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        }));
    }
    /**
     * Search tags.
     *
     * @param query Search query.
     * @param collectionId Collection ID to use.
     * @returns Resolved when done.
     */
    searchTags(query, collectionId) {
        this.searching = true;
        this.query = query;
        if (collectionId !== undefined) {
            this.collectionId = collectionId;
        }
        this.logSearch = _singletons_time__WEBPACK_IMPORTED_MODULE_11__["CoreTime"].once(() => this.performLogSearch());
        _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].closeKeyboard();
        return this.fetchTags().catch((error) => {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading tags.');
        }).finally(() => {
            this.searching = false;
        });
    }
    /**
     * Log search.
     */
    performLogSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.query) {
                return;
            }
            _services_analytics__WEBPACK_IMPORTED_MODULE_12__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_12__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_tag_get_tag_cloud',
                name: _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('core.tag.searchtags'),
                data: { category: 'tag' },
                url: `/tag/search.php&query=${this.query}&tc=${this.collectionId}&go=${_singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('core.search')}`,
            });
        });
    }
};
CoreTagSearchPage.ctorParameters = () => [];
CoreTagSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-tag-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/tag/pages/search/search.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.scss */ "./src/core/features/tag/pages/search/search.scss")).default]
    })
], CoreTagSearchPage);



/***/ }),

/***/ "./src/core/features/tag/tag-lazy.module.ts":
/*!**************************************************!*\
  !*** ./src/core/features/tag/tag-lazy.module.ts ***!
  \**************************************************/
/*! exports provided: CoreTagLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagLazyModule", function() { return CoreTagLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _features_tag_pages_index_area_index_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/tag/pages/index-area/index-area */ "./src/core/features/tag/pages/index-area/index-area.ts");
/* harmony import */ var _features_tag_pages_index_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/tag/pages/index/index */ "./src/core/features/tag/pages/index/index.ts");
/* harmony import */ var _features_tag_pages_search_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/tag/pages/search/search */ "./src/core/features/tag/pages/search/search.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/core/features/tag/services/handlers/mainmenu.ts");
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













const indexAreaRoute = {
    path: 'index-area',
    component: _features_tag_pages_index_area_index_area__WEBPACK_IMPORTED_MODULE_8__["CoreTagIndexAreaPage"],
};
/**
 * Build module routes.
 *
 * @param injector Injector.
 * @returns Routes.
 */
function buildRoutes(injector) {
    const mobileRoutes = [
        {
            path: 'index',
            component: _features_tag_pages_index_index__WEBPACK_IMPORTED_MODULE_9__["CoreTagIndexPage"],
        },
        Object.assign(Object.assign({}, indexAreaRoute), { path: `index/${indexAreaRoute.path}` }),
    ];
    const tabletRoutes = [
        {
            path: 'index',
            component: _features_tag_pages_index_index__WEBPACK_IMPORTED_MODULE_9__["CoreTagIndexPage"],
            children: [
                indexAreaRoute,
            ],
        },
    ];
    return [
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_11__["CoreScreen"].isMobile),
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_11__["CoreScreen"].isTablet),
        {
            path: 'search',
            data: { mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_12__["CoreTagMainMenuHandlerService"].PAGE_NAME },
            component: _features_tag_pages_search_search__WEBPACK_IMPORTED_MODULE_10__["CoreTagSearchPage"],
        },
        indexAreaRoute,
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_6__["buildTabMainRoutes"])(injector, {
            redirectTo: 'search',
            pathMatch: 'full',
        }),
    ];
}
let CoreTagLazyModule = class CoreTagLazyModule {
};
CoreTagLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreSearchComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreMainMenuComponentsModule"],
        ],
        declarations: [
            _features_tag_pages_index_index__WEBPACK_IMPORTED_MODULE_9__["CoreTagIndexPage"],
            _features_tag_pages_search_search__WEBPACK_IMPORTED_MODULE_10__["CoreTagSearchPage"],
            _features_tag_pages_index_area_index_area__WEBPACK_IMPORTED_MODULE_8__["CoreTagIndexAreaPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], CoreTagLazyModule);



/***/ })

}]);
//# sourceMappingURL=tag-lazy-module.js.map