(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["glossary-entry-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/entry/entry.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/entry/entry.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"entry\">\r\n                <core-format-text [text]=\"entry.concept\" contextLevel=\"module\" [contextInstanceId]=\"componentId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"entries\" class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ng-container *ngIf=\"entry && loaded\">\r\n            <ion-card *ngIf=\"offlineEntry\" class=\"core-warning-card\">\r\n                <ion-item>\r\n                    <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>{{ 'core.hasdatatosync' | translate: { $a: 'addon.mod_glossary.entry' | translate } }}</ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"showAuthor\">\r\n                <core-user-avatar [user]=\"entry\" slot=\"start\"></core-user-avatar>\r\n                <ion-label>\r\n                    <h2>\r\n                        <core-format-text [text]=\"entry.concept\" contextLevel=\"module\" [contextInstanceId]=\"componentId\"\r\n                            [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </h2>\r\n                    <p *ngIf=\"onlineEntry\">{{ onlineEntry.userfullname }}</p>\r\n                </ion-label>\r\n                <ion-note slot=\"end\" *ngIf=\"showDate && onlineEntry\">{{ onlineEntry.timemodified | coreDateDayOrTime }}</ion-note>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"!showAuthor\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">\r\n                        <core-format-text [text]=\"entry.concept\" contextLevel=\"module\" [contextInstanceId]=\"componentId\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n                <ion-note slot=\"end\" *ngIf=\"showDate && onlineEntry\">{{ onlineEntry.timemodified | coreDateDayOrTime }}</ion-note>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <core-format-text [component]=\"component\" [componentId]=\"componentId\" [text]=\"entry.definition\" contextLevel=\"module\"\r\n                        [contextInstanceId]=\"componentId\" [courseId]=\"courseId\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n            <div *ngIf=\"onlineEntry && onlineEntry.attachment\">\r\n                <core-file *ngFor=\"let file of onlineEntry.attachments\" [file]=\"file\" [component]=\"component\" [componentId]=\"componentId\">\r\n                </core-file>\r\n            </div>\r\n            <div *ngIf=\"offlineEntry && offlineEntry.attachments\">\r\n                <core-file *ngFor=\"let file of offlineEntry.attachments.online\" [file]=\"file\" [component]=\"component\"\r\n                    [componentId]=\"componentId\">\r\n                </core-file>\r\n            </div>\r\n            <div *ngIf=\"offlineEntry && offlineEntryFiles\">\r\n                <core-local-file *ngFor=\"let file of offlineEntryFiles\" [file]=\"file\">\r\n                </core-local-file>\r\n            </div>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"onlineEntry && tagsEnabled && entry && onlineEntry.tags && onlineEntry.tags.length > 0\">\r\n                <ion-label>\r\n                    <div slot=\"start\">{{ 'core.tag.tags' | translate }}:</div>\r\n                    <core-tag-list [tags]=\"onlineEntry.tags\"></core-tag-list>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"canDelete || canEdit\">\r\n                <div slot=\"end\">\r\n                    <ion-button *ngIf=\"canDelete\" fill=\"clear\" color=\"danger\" (click)=\"deleteEntry()\"\r\n                        [attr.aria-label]=\"'addon.mod_glossary.deleteentry' | translate\">\r\n                        <ion-icon slot=\"icon-only\" name=\"fas-trash\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"canEdit\" fill=\"clear\" (click)=\"editEntry()\"\r\n                        [attr.aria-label]=\"'addon.mod_glossary.editentry' | translate\">\r\n                        <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"onlineEntry && !onlineEntry.approved\">\r\n                <ion-label>\r\n                    <p><em>{{ 'addon.mod_glossary.entrypendingapproval' | translate }}</em></p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <core-comments *ngIf=\"glossary && glossary.allowcomments && onlineEntry && onlineEntry.id > 0 && commentsEnabled\"\r\n                contextLevel=\"module\" [instanceId]=\"glossary.coursemodule\" component=\"mod_glossary\" [itemId]=\"onlineEntry.id\"\r\n                area=\"glossary_entry\" [courseId]=\"glossary.course\" [showItem]=\"true\">\r\n            </core-comments>\r\n            <core-rating-rate *ngIf=\"glossary && ratingInfo && onlineEntry\" [ratingInfo]=\"ratingInfo\" contextLevel=\"module\"\r\n                [instanceId]=\"glossary.coursemodule\" [itemId]=\"onlineEntry.id\" [itemSetId]=\"0\" [courseId]=\"glossary.course\"\r\n                [aggregateMethod]=\"glossary.assessed\" [scaleId]=\"glossary.scale\" [userId]=\"entry.userid\" (onUpdate)=\"ratingUpdated()\">\r\n            </core-rating-rate>\r\n            <core-rating-aggregate *ngIf=\"glossary && ratingInfo && onlineEntry\" [ratingInfo]=\"ratingInfo\" contextLevel=\"module\"\r\n                [instanceId]=\"glossary.coursemodule\" [itemId]=\"onlineEntry.id\" [courseId]=\"glossary.course\"\r\n                [aggregateMethod]=\"glossary.assessed\" [scaleId]=\"glossary.scale\">\r\n            </core-rating-aggregate>\r\n        </ng-container>\r\n\r\n        <ion-card *ngIf=\"!entry\" class=\"core-warning-card\">\r\n            <ion-item>\r\n                <ion-label>{{ 'addon.mod_glossary.errorloadingentry' | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/glossary/glossary-entry-lazy.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/mod/glossary/glossary-entry-lazy.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonModGlossaryEntryLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEntryLazyModule", function() { return AddonModGlossaryEntryLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/comments/components/components.module */ "./src/core/features/comments/components/components.module.ts");
/* harmony import */ var _features_rating_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/rating/components/components.module */ "./src/core/features/rating/components/components.module.ts");
/* harmony import */ var _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/tag/components/components.module */ "./src/core/features/tag/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_glossary_pages_entry_entry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/mod/glossary/pages/entry/entry */ "./src/addons/mod/glossary/pages/entry/entry.ts");
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








const routes = [{
        path: '',
        component: _addons_mod_glossary_pages_entry_entry__WEBPACK_IMPORTED_MODULE_7__["AddonModGlossaryEntryPage"],
    }];
let AddonModGlossaryEntryLazyModule = class AddonModGlossaryEntryLazyModule {
};
AddonModGlossaryEntryLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _addons_mod_glossary_pages_entry_entry__WEBPACK_IMPORTED_MODULE_7__["AddonModGlossaryEntryPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_3__["CoreCommentsComponentsModule"],
            _features_rating_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreRatingComponentsModule"],
            _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreTagComponentsModule"],
        ],
    })
], AddonModGlossaryEntryLazyModule);



/***/ }),

/***/ "./src/addons/mod/glossary/pages/entry/entry.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/glossary/pages/entry/entry.ts ***!
  \******************************************************/
/*! exports provided: AddonModGlossaryEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEntryPage", function() { return AddonModGlossaryEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _addons_mod_glossary_services_glossary_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @addons/mod/glossary/services/glossary-helper */ "./src/addons/mod/glossary/services/glossary-helper.ts");
/* harmony import */ var _addons_mod_glossary_services_glossary_offline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addons/mod/glossary/services/glossary-offline */ "./src/addons/mod/glossary/services/glossary-offline.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_comments_components_comments_comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/comments/components/comments/comments */ "./src/core/features/comments/components/comments/comments.ts");
/* harmony import */ var _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/comments/services/comments */ "./src/core/features/comments/services/comments.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_glossary_entries_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../classes/glossary-entries-source */ "./src/addons/mod/glossary/classes/glossary-entries-source.ts");
/* harmony import */ var _services_glossary__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/glossary */ "./src/addons/mod/glossary/services/glossary.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays a glossary entry.
 */
let AddonModGlossaryEntryPage = class AddonModGlossaryEntryPage {
    constructor(splitView, route) {
        this.splitView = splitView;
        this.route = route;
        this.component = _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryProvider"].COMPONENT;
        this.loaded = false;
        this.showAuthor = false;
        this.showDate = false;
        this.tagsEnabled = false;
        this.canEdit = false;
        this.canDelete = false;
        this.commentsEnabled = false;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_19__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.onlineEntry || !this.glossary || !this.componentId) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].logEntryView(this.onlineEntry.id, this.componentId));
            this.analyticsLogEvent('mod_glossary_get_entry_by_id', `/mod/glossary/showentry.php?eid=${this.onlineEntry.id}`);
        }));
    }
    get entry() {
        var _a;
        return (_a = this.onlineEntry) !== null && _a !== void 0 ? _a : this.offlineEntry;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onlineEntryId = null;
            let offlineEntryTimeCreated = null;
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.tagsEnabled = _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_10__["CoreTag"].areTagsAvailableInSite();
                this.commentsEnabled = !_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_9__["CoreComments"].areCommentsDisabledInSite();
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                const entrySlug = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRequiredRouteParam('entrySlug');
                const routeData = this.route.snapshot.data;
                const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_glossary_entries_source__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossaryEntriesSource"], [this.courseId, this.cmId, (_a = routeData.glossaryPathPrefix) !== null && _a !== void 0 ? _a : '']);
                this.entries = new AddonModGlossaryEntryEntriesSwipeManager(source);
                yield this.entries.start();
                if (entrySlug.startsWith('new-')) {
                    offlineEntryTimeCreated = Number(entrySlug.slice(4));
                }
                else {
                    onlineEntryId = Number(entrySlug);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
                return;
            }
            this.entryUpdatedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_16__["CoreEvents"].on(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["GLOSSARY_ENTRY_UPDATED"], data => {
                var _a;
                if (data.glossaryId !== ((_a = this.glossary) === null || _a === void 0 ? void 0 : _a.id)) {
                    return;
                }
                if ((this.onlineEntry && this.onlineEntry.id === data.entryId) ||
                    (this.offlineEntry && this.offlineEntry.timecreated === data.timecreated)) {
                    this.doRefresh();
                }
            });
            try {
                if (onlineEntryId) {
                    yield this.loadOnlineEntry(onlineEntryId);
                }
                else if (offlineEntryTimeCreated) {
                    yield this.loadOfflineEntry(offlineEntryTimeCreated);
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        this.entries.destroy();
        (_a = this.entryUpdatedObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
    /**
     * Edit entry.
     */
    editEntry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('./edit');
        });
    }
    /**
     * Delete entry.
     */
    deleteEntry() {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Log analytics even if the user cancels for consistency with LMS.
            this.analyticsLogEvent('mod_glossary_delete_entry', `/mod/glossary/deleteentry.php?id=${(_a = this.glossary) === null || _a === void 0 ? void 0 : _a.id}&mode=delete&entry=${(_b = this.onlineEntry) === null || _b === void 0 ? void 0 : _b.id}`);
            const glossaryId = (_c = this.glossary) === null || _c === void 0 ? void 0 : _c.id;
            const cancelled = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].promiseFails(_services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.mod_glossary.areyousuredelete')));
            if (!glossaryId || cancelled) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showModalLoading();
            try {
                if (this.onlineEntry) {
                    const entryId = this.onlineEntry.id;
                    yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].deleteEntry(glossaryId, entryId);
                    yield Promise.all([
                        _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntry(entryId)),
                        _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntriesByLetter(glossaryId)),
                        _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntriesByAuthor(glossaryId)),
                        _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntriesByCategory(glossaryId)),
                        _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntriesByDate(glossaryId, 'CREATION')),
                        _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntriesByDate(glossaryId, 'UPDATE')),
                        _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(this.entries.getSource().invalidateCache(false)),
                    ]);
                }
                else if (this.offlineEntry) {
                    const concept = this.offlineEntry.concept;
                    const timecreated = this.offlineEntry.timecreated;
                    yield _addons_mod_glossary_services_glossary_offline__WEBPACK_IMPORTED_MODULE_2__["AddonModGlossaryOffline"].deleteOfflineEntry(glossaryId, timecreated);
                    yield _addons_mod_glossary_services_glossary_helper__WEBPACK_IMPORTED_MODULE_1__["AddonModGlossaryHelper"].deleteStoredFiles(glossaryId, concept, timecreated);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showToast('addon.mod_glossary.entrydeleted', true, _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["ToastDuration"].LONG);
                if ((_d = this.splitView) === null || _d === void 0 ? void 0 : _d.outletActivated) {
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('../../');
                }
                else {
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.errordeleting', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @returns Promise resolved when done.
     */
    doRefresh(refresher) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.onlineEntry && ((_a = this.glossary) === null || _a === void 0 ? void 0 : _a.allowcomments) && this.onlineEntry.id > 0 && this.commentsEnabled && this.comments) {
                // Refresh comments asynchronously (without blocking the current promise).
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(this.comments.doRefresh());
            }
            try {
                if (this.onlineEntry) {
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntry(this.onlineEntry.id));
                    yield this.loadOnlineEntry(this.onlineEntry.id);
                }
                else if (this.offlineEntry) {
                    const entrySlug = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRequiredRouteParam('entrySlug');
                    const timecreated = Number(entrySlug.slice(4));
                    yield this.loadOfflineEntry(timecreated);
                }
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Load online entry data.
     */
    loadOnlineEntry(entryId) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].getEntry(entryId);
                const canDeleteEntries = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].isOnline() && (yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].canDeleteEntries());
                const canUpdateEntries = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].isOnline() && (yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].canUpdateEntries());
                this.onlineEntry = result.entry;
                this.ratingInfo = result.ratinginfo;
                this.canDelete = canDeleteEntries && !!((_a = result.permissions) === null || _a === void 0 ? void 0 : _a.candelete);
                this.canEdit = canUpdateEntries && !!((_b = result.permissions) === null || _b === void 0 ? void 0 : _b.canupdate);
                yield this.loadGlossary();
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingentry', true);
            }
        });
    }
    /**
     * Load offline entry data.
     *
     * @param timecreated Entry Timecreated.
     */
    loadOfflineEntry(timecreated) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const glossary = yield this.loadGlossary();
                this.offlineEntry = yield _addons_mod_glossary_services_glossary_offline__WEBPACK_IMPORTED_MODULE_2__["AddonModGlossaryOffline"].getOfflineEntry(glossary.id, timecreated);
                this.offlineEntryFiles = this.offlineEntry.attachments && this.offlineEntry.attachments.offline > 0
                    ? yield _addons_mod_glossary_services_glossary_helper__WEBPACK_IMPORTED_MODULE_1__["AddonModGlossaryHelper"].getStoredFiles(glossary.id, this.offlineEntry.concept, timecreated)
                    : undefined;
                this.canEdit = true;
                this.canDelete = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingentry', true);
            }
        });
    }
    /**
     * Load glossary data.
     *
     * @returns Glossary.
     */
    loadGlossary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.glossary) {
                return this.glossary;
            }
            this.glossary = yield _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].getGlossary(this.courseId, this.cmId);
            this.componentId = this.glossary.coursemodule;
            switch (this.glossary.displayformat) {
                case 'fullwithauthor':
                case 'encyclopedia':
                    this.showAuthor = true;
                    this.showDate = true;
                    break;
                case 'fullwithoutauthor':
                    this.showAuthor = false;
                    this.showDate = true;
                    break;
                default: // Default, and faq, simple, entrylist, continuous.
                    this.showAuthor = false;
                    this.showDate = false;
            }
            return this.glossary;
        });
    }
    /**
     * Function called when rating is updated online.
     */
    ratingUpdated() {
        if (!this.onlineEntry) {
            return;
        }
        _services_glossary__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossary"].invalidateEntry(this.onlineEntry.id);
    }
    /**
     * Log analytics event.
     *
     * @param wsName WS name.
     * @param url URL.
     */
    analyticsLogEvent(wsName, url) {
        if (!this.onlineEntry || !this.glossary) {
            return;
        }
        _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalytics"].logEvent({
            type: _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalyticsEventType"].VIEW_ITEM,
            ws: wsName,
            name: this.onlineEntry.concept,
            data: { id: this.onlineEntry.id, glossaryid: this.glossary.id, category: 'glossary' },
            url,
        });
    }
};
AddonModGlossaryEntryPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_7__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddonModGlossaryEntryPage.propDecorators = {
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_features_comments_components_comments_comments__WEBPACK_IMPORTED_MODULE_8__["CoreCommentsCommentsComponent"],] }]
};
AddonModGlossaryEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-addon-mod-glossary-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entry.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/entry/entry.html")).default,
    })
], AddonModGlossaryEntryPage);

/**
 * Helper to manage swiping within a collection of glossary entries.
 */
class AddonModGlossaryEntryEntriesSwipeManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_6__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return `${this.getSource().GLOSSARY_PATH_PREFIX}entry/${route.params.entrySlug}`;
    }
}


/***/ }),

/***/ "./src/core/classes/items-management/swipe-navigation-items-manager.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/classes/items-management/swipe-navigation-items-manager.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSwipeNavigationItemsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSwipeNavigationItemsManager", function() { return CoreSwipeNavigationItemsManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routed-items-manager */ "./src/core/classes/items-management/routed-items-manager.ts");
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
 * Helper class to manage the state and routing of a swipeable page.
 */
class CoreSwipeNavigationItemsManager extends _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManager"] {
    /**
     * Process page started operations.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateSelectedItem();
        });
    }
    /**
     * Navigate to the next item.
     */
    navigateToNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(1, 'forward');
        });
    }
    /**
     * Navigate to the previous item.
     */
    navigateToPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(-1, 'back');
        });
    }
    /**
     * Has a next item.
     *
     * @returns If has next item.
     */
    hasNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(1);
            return !!item;
        });
    }
    /**
     * Has a previous item.
     *
     * @returns If has previous item.
     */
    hasPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(-1);
            return !!item;
        });
    }
    /**
     * @inheritdoc
     */
    getCurrentPageRoute() {
        return _services_navigator__WEBPACK_IMPORTED_MODULE_1__["CoreNavigator"].getCurrentRoute();
    }
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        const segments = [];
        while (route) {
            segments.push(...route.url);
            if (!route.firstChild) {
                break;
            }
            route = route.firstChild;
        }
        return segments.map(segment => segment.path).join('/').replace(/\/+/, '/').trim() || null;
    }
    /**
     * Navigate to an item by an offset.
     *
     * @param delta Index offset.
     * @param animationDirection Animation direction.
     */
    navigateToItemBy(delta, animationDirection) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(delta);
            if (!item) {
                return;
            }
            yield this.navigateToItem(item, { animationDirection, replace: true });
        });
    }
    /**
     * Get item by an offset.
     *
     * @param delta Index offset.
     * @returns The item or null if none.
     */
    getItemBy(delta) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const items = this.getSource().getItems();
            const selectedIndex = (_a = (this.selectedItem && (items === null || items === void 0 ? void 0 : items.indexOf(this.selectedItem)))) !== null && _a !== void 0 ? _a : -1;
            if (selectedIndex === -1 || items === null) {
                return null;
            }
            const deltaStep = delta > 0 ? 1 : -1;
            let nextIndex = selectedIndex;
            let deltaMoved = 0;
            while (deltaMoved !== delta) {
                nextIndex += deltaStep;
                if (nextIndex < 0) {
                    return null;
                }
                if (nextIndex >= items.length) {
                    break;
                }
                if (this.skipItemInSwipe(items[nextIndex])) {
                    continue;
                }
                deltaMoved += deltaStep;
            }
            if (deltaMoved === delta) {
                return items[nextIndex];
            }
            if (!this.getSource().isCompleted()) {
                yield this.getSource().load();
                return this.getItemBy(delta);
            }
            return null;
        });
    }
    /**
     * Check if an item should be skipped during swipe navigation.
     *
     * @param item Item.
     * @returns Whether to skip this item during swipe navigation.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    skipItemInSwipe(item) {
        return false;
    }
}


/***/ })

}]);
//# sourceMappingURL=glossary-entry-lazy-module.js.map