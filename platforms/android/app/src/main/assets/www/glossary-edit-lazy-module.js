(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["glossary-edit-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"glossary\">\r\n                <core-format-text [text]=\"glossary.name\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <form #editFormEl *ngIf=\"glossary\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">{{ 'addon.mod_glossary.concept' | translate }}</ion-label>\r\n                <ion-input type=\"text\" [placeholder]=\"'addon.mod_glossary.concept' | translate\" [(ngModel)]=\"data.concept\" name=\"concept\">\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">{{ 'addon.mod_glossary.definition' | translate }}</ion-label>\r\n                <core-rich-text-editor [control]=\"definitionControl\" (contentChanged)=\"onDefinitionChange($event)\"\r\n                    [placeholder]=\"'addon.mod_glossary.definition' | translate\" name=\"addon_mod_glossary_edit\" [component]=\"component\"\r\n                    [componentId]=\"cmId\" [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" elementId=\"definition_editor\"\r\n                    [draftExtraParams]=\"editorExtraParams\">\r\n                </core-rich-text-editor>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"categories.length > 0\">\r\n                <ion-label position=\"stacked\">\r\n                    {{ 'addon.mod_glossary.categories' | translate }}\r\n                </ion-label>\r\n                <ion-select [(ngModel)]=\"data.categories\" multiple=\"true\" interface=\"action-sheet\"\r\n                    [placeholder]=\"'addon.mod_glossary.categories' | translate\" name=\"categories\" [cancelText]=\"'core.cancel' | translate\"\r\n                    [interfaceOptions]=\"{header: 'addon.mod_glossary.categories' | translate}\">\r\n                    <ion-select-option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n                        {{ category.name }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"showAliases\">\r\n                <ion-label position=\"stacked\">\r\n                    {{ 'addon.mod_glossary.aliases' | translate }}\r\n                </ion-label>\r\n                <ion-textarea [(ngModel)]=\"data.aliases\" rows=\"1\" [core-auto-rows]=\"data.aliases\" name=\"aliases\">\r\n                </ion-textarea>\r\n            </ion-item>\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_glossary.attachment' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <core-attachments [files]=\"data.attachments\" [component]=\"component\" [componentId]=\"glossary.coursemodule\" [allowOffline]=\"true\"\r\n                [courseId]=\"courseId\">\r\n            </core-attachments>\r\n            <ng-container *ngIf=\"glossary.usedynalink\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h2>{{ 'addon.mod_glossary.linking' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>{{ 'addon.mod_glossary.entryusedynalink' | translate }}</ion-label>\r\n                    <ion-toggle [(ngModel)]=\"data.usedynalink\" name=\"usedynalink\"></ion-toggle>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>{{ 'addon.mod_glossary.casesensitive' | translate }}</ion-label>\r\n                    <ion-toggle [disabled]=\"!data.usedynalink\" [(ngModel)]=\"data.casesensitive\" name=\"casesensitive\">\r\n                    </ion-toggle>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>{{ 'addon.mod_glossary.fullmatch' | translate }}</ion-label>\r\n                    <ion-toggle [disabled]=\"!data.usedynalink\" [(ngModel)]=\"data.fullmatch\" name=\"fullmatch\"></ion-toggle>\r\n                </ion-item>\r\n            </ng-container>\r\n            <ion-button class=\"ion-margin\" expand=\"block\" [disabled]=\"!data.concept || !data.definition\" (click)=\"save()\">\r\n                {{ 'core.save' | translate }}\r\n            </ion-button>\r\n        </form>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/glossary/glossary-edit-lazy.module.ts":
/*!**************************************************************!*\
  !*** ./src/addons/mod/glossary/glossary-edit-lazy.module.ts ***!
  \**************************************************************/
/*! exports provided: AddonModGlossaryEditLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEditLazyModule", function() { return AddonModGlossaryEditLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _addons_mod_glossary_pages_edit_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/mod/glossary/pages/edit/edit */ "./src/addons/mod/glossary/pages/edit/edit.ts");
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
        component: _addons_mod_glossary_pages_edit_edit__WEBPACK_IMPORTED_MODULE_6__["AddonModGlossaryEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    }];
let AddonModGlossaryEditLazyModule = class AddonModGlossaryEditLazyModule {
};
AddonModGlossaryEditLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _addons_mod_glossary_pages_edit_edit__WEBPACK_IMPORTED_MODULE_6__["AddonModGlossaryEditPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_3__["CoreEditorComponentsModule"],
        ],
    })
], AddonModGlossaryEditLazyModule);



/***/ }),

/***/ "./src/addons/mod/glossary/pages/edit/edit.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/glossary/pages/edit/edit.ts ***!
  \****************************************************/
/*! exports provided: AddonModGlossaryEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEditPage", function() { return AddonModGlossaryEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _classes_errors_network_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/errors/network-error */ "./src/core/classes/errors/network-error.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_glossary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/glossary */ "./src/addons/mod/glossary/services/glossary.ts");
/* harmony import */ var _services_glossary_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/glossary-helper */ "./src/addons/mod/glossary/services/glossary-helper.ts");
/* harmony import */ var _services_glossary_offline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/glossary-offline */ "./src/addons/mod/glossary/services/glossary-offline.ts");
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
 * Page that displays the edit form.
 */
let AddonModGlossaryEditPage = class AddonModGlossaryEditPage {
    constructor(route, splitView) {
        this.route = route;
        this.splitView = splitView;
        this.component = _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossaryProvider"].COMPONENT;
        this.loaded = false;
        this.definitionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.categories = [];
        this.showAliases = true;
        this.editorExtraParams = {};
        this.data = {
            concept: '',
            definition: '',
            timecreated: 0,
            attachments: [],
            categories: [],
            aliases: '',
            usedynalink: false,
            casesensitive: false,
            fullmatch: false,
        };
        this.isDestroyed = false;
        this.saved = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const entrySlug = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteParam('entrySlug');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                if (entrySlug === null || entrySlug === void 0 ? void 0 : entrySlug.startsWith('new-')) {
                    const timecreated = Number(entrySlug.slice(4));
                    this.editorExtraParams.timecreated = timecreated;
                    this.handler = new AddonModGlossaryOfflineFormHandler(this, timecreated);
                }
                else if (entrySlug) {
                    const { entry } = yield _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossary"].getEntry(Number(entrySlug));
                    this.entry = entry;
                    this.editorExtraParams.timecreated = entry.timecreated;
                    this.handler = new AddonModGlossaryOnlineFormHandler(this, entry);
                }
                else {
                    this.handler = new AddonModGlossaryNewFormHandler(this);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModal(error);
                this.goBack();
                return;
            }
            this.fetchData();
        });
    }
    /**
     * Fetch required data.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.glossary = yield _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossary"].getGlossary(this.courseId, this.cmId);
                yield this.handler.loadData(this.glossary);
                this.loaded = true;
                if (this.handler instanceof AddonModGlossaryOfflineFormHandler) {
                    return;
                }
                _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalytics"].logEvent({
                    type: _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalyticsEventType"].VIEW_ITEM,
                    ws: 'mod_glossary_get_glossaries_by_courses',
                    name: this.glossary.name,
                    data: { id: this.glossary.id, category: 'glossary' },
                    url: '/mod/glossary/edit.php' + (this.entry ? `?cmid=${this.cmId}&id=${this.entry.id}` : ''),
                });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingglossary', true);
                this.goBack();
            }
        });
    }
    /**
     * Reset the form data.
     */
    resetForm() {
        this.originalData = undefined;
        this.data.concept = '';
        this.data.definition = '';
        this.data.timecreated = 0;
        this.data.categories = [];
        this.data.aliases = '';
        this.data.usedynalink = false;
        this.data.casesensitive = false;
        this.data.fullmatch = false;
        this.data.attachments.length = 0; // Empty the array.
        this.definitionControl.setValue('');
    }
    /**
     * Definition changed.
     *
     * @param text The new text.
     */
    onDefinitionChange(text) {
        this.data.definition = text;
    }
    /**
     * Check if we can leave the page or not.
     *
     * @returns Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.saved) {
                return true;
            }
            if (this.hasDataChanged()) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_14__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].clearTmpFiles(this.data.attachments);
            _singletons_form__WEBPACK_IMPORTED_MODULE_16__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Save the entry.
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.data.concept || !this.data.definition) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModal('addon.mod_glossary.fillfields', true);
                return;
            }
            if (!this.glossary) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                const savedOnline = yield this.handler.save(this.glossary);
                this.saved = true;
                _singletons_form__WEBPACK_IMPORTED_MODULE_16__["CoreForms"].triggerFormSubmittedEvent(this.formElement, savedOnline, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
                this.goBack();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.cannoteditentry', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Check if the form data has changed.
     *
     * @returns True if data has changed, false otherwise.
     */
    hasDataChanged() {
        if (!this.originalData || this.originalData.concept === undefined) {
            // There is no original data.
            return !!(this.data.definition || this.data.concept || this.data.attachments.length > 0);
        }
        if (this.originalData.definition != this.data.definition || this.originalData.concept != this.data.concept) {
            return true;
        }
        return _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].areFileListDifferent(this.data.attachments, this.originalData.attachments);
    }
    /**
     * Helper function to go back.
     */
    goBack() {
        var _a;
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigate('../../');
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].back();
        }
    }
};
AddonModGlossaryEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
AddonModGlossaryEditPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editFormEl',] }]
};
AddonModGlossaryEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-glossary-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html")).default,
    })
], AddonModGlossaryEditPage);

/**
 * Helper to manage form data.
 */
class AddonModGlossaryFormHandler {
    constructor(page) {
        this.page = page;
    }
    /**
     * Load form categories.
     *
     * @param glossary Glossary.
     */
    loadCategories(glossary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.page.categories = yield _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossary"].getAllCategories(glossary.id, {
                cmId: this.page.cmId,
            });
        });
    }
    /**
     * Upload attachments online.
     *
     * @param glossary Glossary.
     * @returns Uploaded attachments item id.
     */
    uploadAttachments(glossary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.page.data;
            const itemId = yield _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].uploadOrReuploadFiles(data.attachments, _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossaryProvider"].COMPONENT, glossary.id);
            return itemId;
        });
    }
    /**
     * Store attachments offline.
     *
     * @param glossary Glossary.
     * @param timecreated Entry time created.
     * @returns Storage result.
     */
    storeAttachments(glossary, timecreated) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.page.data;
            const result = yield _services_glossary_helper__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryHelper"].storeFiles(glossary.id, data.concept, timecreated, data.attachments);
            return result;
        });
    }
    /**
     * Make sure that the new entry won't create any duplicates.
     *
     * @param glossary Glossary.
     */
    checkDuplicates(glossary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (glossary.allowduplicatedentries) {
                return;
            }
            const data = this.page.data;
            const isUsed = yield _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossary"].isConceptUsed(glossary.id, data.concept, {
                timeCreated: data.timecreated,
                cmId: this.page.cmId,
            });
            if (isUsed) {
                // There's a entry with same name, reject with error message.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_14__["Translate"].instant('addon.mod_glossary.errconceptalreadyexists'));
            }
        });
    }
    /**
     * Get additional options to save an entry.
     *
     * @param glossary Glossary.
     * @returns Options.
     */
    getSaveOptions(glossary) {
        const data = this.page.data;
        const options = {};
        if (this.page.showAliases) {
            options.aliases = data.aliases;
        }
        if (this.page.categories.length > 0) {
            options.categories = data.categories.join(',');
        }
        if (glossary.usedynalink) {
            options.usedynalink = data.usedynalink ? 1 : 0;
            if (data.usedynalink) {
                options.casesensitive = data.casesensitive ? 1 : 0;
                options.fullmatch = data.fullmatch ? 1 : 0;
            }
        }
        return options;
    }
}
/**
 * Helper to manage the form data for an offline entry.
 */
class AddonModGlossaryOfflineFormHandler extends AddonModGlossaryFormHandler {
    constructor(page, timecreated) {
        super(page);
        this.timecreated = timecreated;
    }
    /**
     * @inheritdoc
     */
    loadData(glossary) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.page.data;
            const entry = yield _services_glossary_offline__WEBPACK_IMPORTED_MODULE_19__["AddonModGlossaryOffline"].getOfflineEntry(glossary.id, this.timecreated);
            data.concept = entry.concept || '';
            data.definition = entry.definition || '';
            data.timecreated = entry.timecreated;
            if (entry.options) {
                data.categories = ((_b = (_a = entry.options.categories) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : []).map(id => Number(id));
                data.aliases = (_c = entry.options.aliases) !== null && _c !== void 0 ? _c : '';
                data.usedynalink = !!entry.options.usedynalink;
                if (data.usedynalink) {
                    data.casesensitive = !!entry.options.casesensitive;
                    data.fullmatch = !!entry.options.fullmatch;
                }
            }
            // Treat offline attachments if any.
            if ((_d = entry.attachments) === null || _d === void 0 ? void 0 : _d.offline) {
                data.attachments = yield _services_glossary_helper__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryHelper"].getStoredFiles(glossary.id, entry.concept, entry.timecreated);
            }
            this.page.originalData = {
                concept: data.concept,
                definition: data.definition,
                attachments: data.attachments.slice(),
                timecreated: data.timecreated,
                categories: data.categories.slice(),
                aliases: data.aliases,
                usedynalink: data.usedynalink,
                casesensitive: data.casesensitive,
                fullmatch: data.fullmatch,
            };
            this.page.definitionControl.setValue(data.definition);
            yield this.loadCategories(glossary);
        });
    }
    /**
     * @inheritdoc
     */
    save(glossary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const originalData = this.page.data;
            const data = this.page.data;
            // Upload attachments first if any.
            let offlineAttachments = undefined;
            if (data.attachments.length) {
                offlineAttachments = yield this.storeAttachments(glossary, data.timecreated);
            }
            if (originalData.concept !== data.concept) {
                yield _services_glossary_helper__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryHelper"].deleteStoredFiles(glossary.id, originalData.concept, data.timecreated);
            }
            // Save entry data.
            yield this.updateOfflineEntry(glossary, offlineAttachments);
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].clearTmpFiles(data.attachments);
            return false;
        });
    }
    /**
     * Update an offline entry.
     *
     * @param glossary Glossary.
     * @param uploadedAttachments Uploaded attachments.
     */
    updateOfflineEntry(glossary, uploadedAttachments) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const originalData = this.page.originalData;
            const data = this.page.data;
            const options = this.getSaveOptions(glossary);
            const definition = _services_utils_text__WEBPACK_IMPORTED_MODULE_12__["CoreTextUtils"].formatHtmlLines(data.definition);
            if (!originalData) {
                return;
            }
            yield this.checkDuplicates(glossary);
            yield _services_glossary_offline__WEBPACK_IMPORTED_MODULE_19__["AddonModGlossaryOffline"].updateOfflineEntry({
                glossaryid: glossary.id,
                courseid: this.page.courseId,
                concept: originalData.concept,
                timecreated: originalData.timecreated,
            }, data.concept, definition, options, uploadedAttachments);
        });
    }
}
/**
 * Helper to manage the form data for creating a new entry.
 */
class AddonModGlossaryNewFormHandler extends AddonModGlossaryFormHandler {
    /**
     * @inheritdoc
     */
    loadData(glossary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadCategories(glossary);
        });
    }
    /**
     * @inheritdoc
     */
    save(glossary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.page.data;
            const timecreated = Date.now();
            // Upload attachments first if any.
            let onlineAttachments = undefined;
            let offlineAttachments = undefined;
            if (data.attachments.length) {
                try {
                    onlineAttachments = yield this.uploadAttachments(glossary);
                }
                catch (error) {
                    if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_13__["CoreUtils"].isWebServiceError(error)) {
                        throw error;
                    }
                    offlineAttachments = yield this.storeAttachments(glossary, timecreated);
                }
            }
            // Save entry data.
            const entryId = offlineAttachments
                ? yield this.createOfflineEntry(glossary, timecreated, offlineAttachments)
                : yield this.createOnlineEntry(glossary, timecreated, onlineAttachments, !data.attachments.length);
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].clearTmpFiles(data.attachments);
            if (entryId) {
                // Data sent to server, delete stored files (if any).
                _services_glossary_helper__WEBPACK_IMPORTED_MODULE_18__["AddonModGlossaryHelper"].deleteStoredFiles(glossary.id, data.concept, timecreated);
                _singletons_events__WEBPACK_IMPORTED_MODULE_15__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_15__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'glossary' });
            }
            return !!entryId;
        });
    }
    /**
     * Create an offline entry.
     *
     * @param glossary Glossary.
     * @param timecreated Time created.
     * @param uploadedAttachments Uploaded attachments.
     */
    createOfflineEntry(glossary, timecreated, uploadedAttachments) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.page.data;
            const options = this.getSaveOptions(glossary);
            const definition = _services_utils_text__WEBPACK_IMPORTED_MODULE_12__["CoreTextUtils"].formatHtmlLines(data.definition);
            yield this.checkDuplicates(glossary);
            yield _services_glossary_offline__WEBPACK_IMPORTED_MODULE_19__["AddonModGlossaryOffline"].addOfflineEntry(glossary.id, data.concept, definition, this.page.courseId, timecreated, options, uploadedAttachments, undefined, undefined);
        });
    }
    /**
     * Create an online entry.
     *
     * @param glossary Glossary.
     * @param timecreated Time created.
     * @param uploadedAttachmentsId Id of the uploaded attachments.
     * @param allowOffline Allow falling back to creating the entry offline.
     * @returns Entry id.
     */
    createOnlineEntry(glossary, timecreated, uploadedAttachmentsId, allowOffline) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.page.data;
            const options = this.getSaveOptions(glossary);
            const definition = _services_utils_text__WEBPACK_IMPORTED_MODULE_12__["CoreTextUtils"].formatHtmlLines(data.definition);
            const entryId = yield _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossary"].addEntry(glossary.id, data.concept, definition, this.page.courseId, options, uploadedAttachmentsId, {
                timeCreated: timecreated,
                allowOffline: allowOffline,
                checkDuplicates: !glossary.allowduplicatedentries,
            });
            return entryId;
        });
    }
}
/**
 * Helper to manage the form data for an online entry.
 */
class AddonModGlossaryOnlineFormHandler extends AddonModGlossaryFormHandler {
    constructor(page, entry) {
        super(page);
        this.entry = entry;
    }
    /**
     * @inheritdoc
     */
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = this.page.data;
            data.concept = this.entry.concept;
            data.definition = this.entry.definition || '';
            data.timecreated = this.entry.timecreated;
            data.usedynalink = this.entry.usedynalink;
            if (data.usedynalink) {
                data.casesensitive = this.entry.casesensitive;
                data.fullmatch = this.entry.fullmatch;
            }
            // Treat offline attachments if any.
            if (this.entry.attachments) {
                data.attachments = this.entry.attachments;
            }
            this.page.originalData = {
                concept: data.concept,
                definition: data.definition,
                attachments: data.attachments.slice(),
                timecreated: data.timecreated,
                categories: data.categories.slice(),
                aliases: data.aliases,
                usedynalink: data.usedynalink,
                casesensitive: data.casesensitive,
                fullmatch: data.fullmatch,
            };
            this.page.definitionControl.setValue(data.definition);
            this.page.showAliases = false;
        });
    }
    /**
     * @inheritdoc
     */
    save(glossary) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!_services_network__WEBPACK_IMPORTED_MODULE_9__["CoreNetwork"].isOnline()) {
                throw new _classes_errors_network_error__WEBPACK_IMPORTED_MODULE_5__["CoreNetworkError"]();
            }
            const data = this.page.data;
            const options = this.getSaveOptions(glossary);
            const definition = _services_utils_text__WEBPACK_IMPORTED_MODULE_12__["CoreTextUtils"].formatHtmlLines(data.definition);
            // Upload attachments, if any.
            let attachmentsId = undefined;
            if (data.attachments.length) {
                attachmentsId = yield this.uploadAttachments(glossary);
            }
            // Save entry data.
            yield _services_glossary__WEBPACK_IMPORTED_MODULE_17__["AddonModGlossary"].updateEntry(glossary.id, this.entry.id, data.concept, definition, options, attachmentsId);
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_7__["CoreFileUploader"].clearTmpFiles(data.attachments);
            _singletons_events__WEBPACK_IMPORTED_MODULE_15__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_15__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'glossary' });
            return true;
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=glossary-edit-lazy-module.js.map