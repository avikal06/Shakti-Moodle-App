(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-user-user-course-lazy-module~grades-course-participants-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/participants/participants.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/participants/participants.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!participants.loaded || searchInProgress\" (ionRefresh)=\"refreshParticipants($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n\r\n        <core-search-box [disabled]=\"searchInProgress\" [spellcheck]=\"false\" [lengthCheck]=\"1\" autocorrect=\"off\"\r\n            searchArea=\"CoreUserParticipants\" (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\">\r\n        </core-search-box>\r\n\r\n        <core-loading [hideUntil]=\"participants.loaded\">\r\n            <core-empty-box *ngIf=\"participants.empty && !searchInProgress && !searchQuery\" icon=\"far-user\"\r\n                [message]=\"'core.user.noparticipants' | translate\">\r\n            </core-empty-box>\r\n\r\n            <core-empty-box *ngIf=\"participants.empty && !searchInProgress && searchQuery\" icon=\"fas-magnifying-glass\"\r\n                [message]=\"'core.noresults' | translate\">\r\n            </core-empty-box>\r\n\r\n            <ion-list *ngIf=\"!participants.empty\">\r\n                <ion-item *ngFor=\"let participant of participants.items\" class=\"ion-text-wrap\"\r\n                    [attr.aria-current]=\"participants.getItemAriaCurrent(participant)\" [attr.aria-label]=\"participant.fullname\"\r\n                    (click)=\"participants.select(participant)\" button detail=\"true\">\r\n\r\n                    <core-user-avatar [user]=\"participant\" [linkProfile]=\"false\" [checkOnline]=\"true\" slot=\"start\">\r\n                    </core-user-avatar>\r\n\r\n                    <ion-label>\r\n                        <ng-container *ngIf=\"!searchQuery\">\r\n                            <p class=\"item-heading\">{{ participant.fullname }}</p>\r\n                            <p *ngIf=\"participant.lastcourseaccess !== undefined\">\r\n                                <strong>{{ 'core.user.lastcourseaccess' | translate }}: </strong>\r\n                                <ng-container *ngIf=\"participant.lastcourseaccess\">{{ participant.lastcourseaccess | coreTimeAgo }}\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"!participant.lastcourseaccess\">{{ 'core.never' | translate }}</ng-container>\r\n                            </p>\r\n                            <p *ngIf=\"participant.lastcourseaccess === undefined && participant.lastaccess !== undefined\">\r\n                                <strong>{{ 'core.lastaccess' | translate }}: </strong>\r\n                                <ng-container *ngIf=\"participant.lastaccess\">{{ participant.lastaccess | coreTimeAgo }}</ng-container>\r\n                                <ng-container *ngIf=\"!participant.lastaccess\">{{ 'core.never' | translate }}</ng-container>\r\n                            </p>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"searchQuery\">\r\n                            <p class=\"item-heading\">\r\n                                <core-format-text [text]=\"participant.fullname\" [highlight]=\"searchQuery\" [filter]=\"false\">\r\n                                </core-format-text>\r\n                            </p>\r\n                        </ng-container>\r\n                    </ion-label>\r\n\r\n                </ion-item>\r\n            </ion-list>\r\n            <core-infinite-loading [enabled]=\"participants.loaded && !participants.completed\" (action)=\"fetchMoreParticipants($event)\"\r\n                [error]=\"fetchMoreParticipantsFailed\">\r\n            </core-infinite-loading>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/user/classes/participants-source.ts":
/*!***************************************************************!*\
  !*** ./src/core/features/user/classes/participants-source.ts ***!
  \***************************************************************/
/*! exports provided: CoreUserParticipantsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserParticipantsSource", function() { return CoreUserParticipantsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user */ "./src/core/features/user/services/user.ts");
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
 * Provides a collection of course participants.
 */
class CoreUserParticipantsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, searchQuery = null) {
        super();
        this.COURSE_ID = courseId;
        this.SEARCH_QUERY = searchQuery;
    }
    /**
     * @inheritdoc
     */
    static getSourceId(courseId, searchQuery = null) {
        searchQuery = searchQuery !== null && searchQuery !== void 0 ? searchQuery : '__empty__';
        return `participants-${courseId}-${searchQuery}`;
    }
    /**
     * @inheritdoc
     */
    getItemPath(user) {
        return user.id.toString();
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return { search: this.SEARCH_QUERY };
    }
    /**
     * @inheritdoc
     */
    loadPageItems(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.SEARCH_QUERY) {
                const { participants, canLoadMore } = yield _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].searchParticipants(this.COURSE_ID, this.SEARCH_QUERY, true, page, _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT);
                return {
                    items: participants,
                    hasMoreItems: canLoadMore,
                };
            }
            const { participants, canLoadMore } = yield _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getParticipants(this.COURSE_ID, page * _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT, _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT);
            return {
                items: participants,
                hasMoreItems: canLoadMore,
            };
        });
    }
    /**
     * @inheritdoc
     */
    getPageLength() {
        return _services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUserProvider"].PARTICIPANTS_LIST_LIMIT;
    }
}


/***/ }),

/***/ "./src/core/features/user/pages/participants/participants.module.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/user/pages/participants/participants.module.ts ***!
  \**************************************************************************/
/*! exports provided: CoreUserParticipantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserParticipantsPageModule", function() { return CoreUserParticipantsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _participants_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participants.page */ "./src/core/features/user/pages/participants/participants.page.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
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





let CoreUserParticipantsPageModule = class CoreUserParticipantsPageModule {
};
CoreUserParticipantsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreSearchComponentsModule"],
        ],
        declarations: [
            _participants_page__WEBPACK_IMPORTED_MODULE_3__["CoreUserParticipantsPage"],
        ],
    })
], CoreUserParticipantsPageModule);



/***/ }),

/***/ "./src/core/features/user/pages/participants/participants.page.ts":
/*!************************************************************************!*\
  !*** ./src/core/features/user/pages/participants/participants.page.ts ***!
  \************************************************************************/
/*! exports provided: CoreUserParticipantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserParticipantsPage", function() { return CoreUserParticipantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_user_classes_participants_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/user/classes/participants-source */ "./src/core/features/user/classes/participants-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
var CoreUserParticipantsPage_1;













/**
 * Page that displays the list of course participants.
 */
let CoreUserParticipantsPage = CoreUserParticipantsPage_1 = class CoreUserParticipantsPage {
    constructor() {
        this.searchQuery = null;
        this.searchInProgress = false;
        this.searchEnabled = false;
        this.fetchMoreParticipantsFailed = false;
        try {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.participants = new CoreUserParticipantsManager(_classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_10__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_user_classes_participants_source__WEBPACK_IMPORTED_MODULE_9__["CoreUserParticipantsSource"], [this.courseId]), CoreUserParticipantsPage_1);
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
            return;
        }
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.searchEnabled = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].canSearchParticipantsInSite();
        });
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchInitialParticipants();
            yield this.participants.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.participants.start();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.participants.destroy();
    }
    /**
     * Clear search.
     */
    clearSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.searchQuery === null) {
                // Nothing to clear.
                return;
            }
            const newSource = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_10__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_user_classes_participants_source__WEBPACK_IMPORTED_MODULE_9__["CoreUserParticipantsSource"], [this.courseId]);
            this.searchQuery = null;
            this.searchInProgress = false;
            this.participants.setSource(newSource);
            yield this.fetchInitialParticipants();
        });
    }
    /**
     * Start a new search.
     *
     * @param query Text to search for.
     */
    search(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_2__["CoreApp"].closeKeyboard();
            const newSource = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_10__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_user_classes_participants_source__WEBPACK_IMPORTED_MODULE_9__["CoreUserParticipantsSource"], [this.courseId, query]);
            this.searchInProgress = true;
            this.searchQuery = query;
            this.participants.setSource(newSource);
            yield this.fetchInitialParticipants();
            this.searchInProgress = false;
        });
    }
    /**
     * Refresh participants.
     *
     * @param refresher Refresher.
     */
    refreshParticipants(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].invalidateParticipantsList(this.courseId));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(this.fetchParticipants(true));
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Load a new batch of participants.
     *
     * @param complete Completion callback.
     */
    fetchMoreParticipants(complete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchParticipants(false);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading more participants');
                this.fetchMoreParticipantsFailed = true;
            }
            complete();
        });
    }
    /**
     * Obtain the initial batch of participants.
     */
    fetchInitialParticipants() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchParticipants(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading participants');
                this.participants.reset();
            }
        });
    }
    /**
     * Update the list of participants.
     *
     * @param reload Whether to reload the list or load the next page.
     */
    fetchParticipants(reload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            reload
                ? yield this.participants.reload()
                : yield this.participants.load();
            this.fetchMoreParticipantsFailed = false;
        });
    }
};
CoreUserParticipantsPage.ctorParameters = () => [];
CoreUserParticipantsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__["CoreSplitViewComponent"],] }]
};
CoreUserParticipantsPage = CoreUserParticipantsPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-participants',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./participants.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/participants/participants.html")).default,
    })
], CoreUserParticipantsPage);

/**
 * Helper to manage the list of participants.
 */
class CoreUserParticipantsManager extends _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_5__["CoreListItemsManager"] {
    /**
     * @inheritdoc
     */
    logActivity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].logParticipantsView(this.getSource().COURSE_ID));
            _services_analytics__WEBPACK_IMPORTED_MODULE_11__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_11__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_user_view_user_list',
                name: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.user.participants'),
                data: { courseid: this.getSource().COURSE_ID, category: 'user' },
                url: `/user/index.php?id=${this.getSource().COURSE_ID}`,
            });
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=default~features-user-user-course-lazy-module~grades-course-participants-lazy-module.js.map