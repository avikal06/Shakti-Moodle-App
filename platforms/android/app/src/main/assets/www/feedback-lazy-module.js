(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempt/attempt.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempt/attempt.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"attempt\">{{ attempt.fullname }}</h1>\r\n            <h1 *ngIf=\"anonAttempt\">{{ 'addon.mod_feedback.anonymous_user' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"attempts\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"ion-no-margin\" *ngIf=\"attempt || anonAttempt\">\r\n            <ion-item *ngIf=\"attempt\" class=\"ion-text-wrap\" core-user-link [userId]=\"attempt.userid\"\r\n                [attr.aria-label]=\"'core.user.viewprofile' | translate\" [courseId]=\"attempt.courseid\">\r\n                <core-user-avatar [user]=\"attempt\" slot=\"start\" [linkProfile]=\"false\"></core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{attempt.fullname}}</h2>\r\n                    <p *ngIf=\"attempt.timemodified\">{{attempt.timemodified * 1000 | coreFormatDate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"anonAttempt\">\r\n                <core-user-avatar [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_feedback.anonymous_user' |translate }}</h2>\r\n                    <p>{{ 'addon.mod_feedback.response_nr' | translate }}: {{anonAttempt.number}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ng-container *ngIf=\"items && items.length\">\r\n                <ng-container *ngFor=\"let item of items\">\r\n                    <core-spacer *ngIf=\"item.typ == 'pagebreak'\"></core-spacer>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"item.typ != 'pagebreak'\" [color]=\"item.dependitem > 0 ? 'light' : ''\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\" *ngIf=\"item.name\" [core-mark-required]=\"item.required\">\r\n                                <span *ngIf=\"feedback!.autonumbering && item.itemnumber\">{{item.itemnumber}}. </span>\r\n                                <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.name\" contextLevel=\"module\"\r\n                                    [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                                </core-format-text>\r\n                            </p>\r\n                            <p *ngIf=\"item.submittedValue\">\r\n                                <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.submittedValue\"\r\n                                    contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                                </core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempts/attempts.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempts/attempts.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_feedback.responses' |translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!attempts || !attempts.loaded\" (ionRefresh)=\"refreshFeedback($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"attempts && attempts.loaded\">\r\n            <ion-list class=\"ion-no-margin\">\r\n                <core-group-selector [groupInfo]=\"groupInfo\" [(selected)]=\"selectedGroup\" (selectedChange)=\"reloadAttempts()\"\r\n                    [courseId]=\"courseId\">\r\n                </core-group-selector>\r\n\r\n                <ng-container *ngIf=\"identifiableAttemptsTotal > 0\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2>{{ 'addon.mod_feedback.non_anonymous_entries' | translate : {$a: identifiableAttemptsTotal } }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item *ngFor=\"let attempt of identifiableAttempts\" class=\"ion-text-wrap\" button detail=\"true\"\r\n                        (click)=\"attempts?.select(attempt)\" [attr.aria-current]=\"attempts?.getItemAriaCurrent(attempt)\">\r\n                        <core-user-avatar [user]=\"attempt\" [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ attempt.fullname }}</p>\r\n                            <p *ngIf=\"attempt.timemodified\">{{ attempt.timemodified * 1000 | coreFormatDate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"identifiableAttemptsTotal === identifiableAttempts.length && anonymousAttemptsTotal > 0\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2>{{ 'addon.mod_feedback.anonymous_entries' | translate : {$a: anonymousAttemptsTotal } }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item *ngFor=\"let attempt of anonymousAttempts\" class=\"ion-text-wrap\" button detail=\"true\"\r\n                        (click)=\"attempts?.select(attempt)\" [attr.aria-current]=\"attempts?.getItemAriaCurrent(attempt)\">\r\n                        <core-user-avatar [linkProfile]=\"false\" slot=\"start\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_feedback.anonymous_user' | translate }}</p>\r\n                            <p>{{ 'addon.mod_feedback.response_nr' | translate }}: {{attempt.number}}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n\r\n                <core-infinite-loading [enabled]=\"attempts && attempts.loaded && !attempts.completed\" [error]=\"fetchFailed\"\r\n                    (action)=\"fetchMoreAttempts($event)\">\r\n                </core-infinite-loading>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/form/form.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/form/form.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"feedbackLoaded\" class=\"has-spacer\">\r\n        <ng-container *ngIf=\"items && items.length\">\r\n            <ion-list class=\"ion-no-margin has-spacer\">\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_feedback.mode' | translate }}</p>\r\n                        <p *ngIf=\"access!.isanonymous\">{{ 'addon.mod_feedback.anonymous' | translate }}</p>\r\n                        <p *ngIf=\"!access!.isanonymous\">{{ 'addon.mod_feedback.non_anonymous' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ng-container *ngFor=\"let item of items\">\r\n                    <core-spacer *ngIf=\"item.typ == 'pagebreak'\"></core-spacer>\r\n                    <ng-container *ngIf=\"item.typ != 'pagebreak'\">\r\n                        <ion-item class=\"ion-text-wrap addon-mod_feedback-item\" [color]=\"item.dependitem > 0 ? 'light' : ''\"\r\n                            [class.core-danger-item]=\"item.isEmpty || item.hasError\">\r\n                            <ion-label [position]=\"item.hasTextInput ? 'stacked' : undefined\">\r\n                                <p *ngIf=\"item.name\" [core-mark-required]=\"item.required\">\r\n                                    <span *ngIf=\"feedback!.autonumbering && item.itemnumber\">{{item.itemnumber}}. </span>\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.name\" contextLevel=\"module\"\r\n                                        [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [wsNotFiltered]=\"true\">\r\n                                    </core-format-text>\r\n                                    <span *ngIf=\"item.postfix\" class=\"addon-mod_feedback-postfix\">{{item.postfix}}</span>\r\n                                </p>\r\n                                <p *ngIf=\"item.templateName == 'label'\">\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"item.presentation\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </p>\r\n                            </ion-label>\r\n\r\n                            <ion-input *ngIf=\"item.templateName == 'textfield'\" type=\"text\" [(ngModel)]=\"item.value\" autocorrect=\"off\"\r\n                                name=\"{{item.typ}}_{{item.id}}\" maxlength=\"{{item.length}}\" [required]=\"item.required\">\r\n                            </ion-input>\r\n\r\n                            <ng-container *ngIf=\"item.templateName == 'numeric'\">\r\n                                <ion-input type=\"number\" [(ngModel)]=\"item.value\" name=\"{{item.typ}}_{{item.id}}\"\r\n                                    [required]=\"item.required\">\r\n                                </ion-input>\r\n                                <ion-text *ngIf=\"item.hasError\" color=\"danger\" class=\"addon-mod_feedback-item-error\">\r\n                                    {{ 'addon.mod_feedback.numberoutofrange' | translate }} [{{item.rangefrom}}\r\n                                    <span *ngIf=\"item.rangefrom && item.rangeto\">, </span>{{item.rangeto}}]\r\n                                </ion-text>\r\n                            </ng-container>\r\n\r\n                            <ion-textarea *ngIf=\"item.templateName == 'textarea'\" [required]=\"item.required\" name=\"{{item.typ}}_{{item.id}}\"\r\n                                [(ngModel)]=\"item.value\">\r\n                            </ion-textarea>\r\n\r\n                            <ion-select *ngIf=\"item.templateName == 'multichoice-d'\" [required]=\"item.required\"\r\n                                name=\"{{item.typ}}_{{item.id}}\" [(ngModel)]=\"item.value\" interface=\"action-sheet\"\r\n                                [cancelText]=\"'core.cancel' | translate\" [interfaceOptions]=\"{header: item.name}\">\r\n                                <ion-select-option *ngFor=\"let option of item.choices\" [value]=\"option.value\">\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"option.label\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n\r\n                        <ion-radio-group *ngIf=\"item.templateName == 'multichoice-r'\" [(ngModel)]=\"item.value\" [required]=\"item.required\"\r\n                            name=\"{{item.typ}}_{{item.id}}\">\r\n                            <ion-item *ngFor=\"let option of item.choices\">\r\n                                <ion-label>\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"option.label\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </ion-label>\r\n                                <ion-radio slot=\"start\" [value]=\"option.value\"></ion-radio>\r\n                            </ion-item>\r\n                        </ion-radio-group>\r\n\r\n                        <ng-container *ngIf=\"item.templateName == 'multichoice-c'\">\r\n                            <ion-item *ngFor=\"let option of item.choices\">\r\n                                <ion-label>\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"option.label\"\r\n                                        contextLevel=\"module\" [contextInstanceId]=\"cmId\" [wsNotFiltered]=\"true\" [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </ion-label>\r\n                                <ion-checkbox [required]=\"item.required\" name=\"{{item.typ}}_{{item.id}}\" [(ngModel)]=\"option.checked\"\r\n                                    value=\"option.value\">\r\n                                </ion-checkbox>\r\n                            </ion-item>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"item.templateName == 'captcha'\">\r\n                            <core-recaptcha *ngIf=\"!preview && !offline\" [publicKey]=\"item.captcha.recaptchapublickey\" [model]=\"item\"\r\n                                modelValueName=\"value\">\r\n                            </core-recaptcha>\r\n                            <div *ngIf=\"!preview && (!item.captcha || offline)\" class=\"core-warning-card\">\r\n                                <ion-item>\r\n                                    <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                                    <ion-label>{{ 'addon.mod_feedback.captchaofflinewarning' | translate }}</ion-label>\r\n                                </ion-item>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <ion-row class=\"ion-align-items-center spacer-top\" *ngIf=\"!preview\">\r\n                    <ion-col *ngIf=\"hasPrevPage\">\r\n                        <ion-button expand=\"block\" fill=\"outline\" (click)=\"gotoPage(true)\" class=\"ion-text-wrap\">\r\n                            <ion-icon name=\"fas-chevron-left\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ 'core.previous' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"hasNextPage\">\r\n                        <ion-button expand=\"block\" (click)=\"gotoPage(false)\" class=\"ion-text-wrap\">\r\n                            {{ 'core.next' | translate }}\r\n                            <ion-icon name=\"fas-chevron-right\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col *ngIf=\"!hasNextPage\">\r\n                        <ion-button expand=\"block\" (click)=\"gotoPage(false)\" class=\"ion-text-wrap\">\r\n                            {{ 'core.submit' | translate }}\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-list>\r\n        </ng-container>\r\n\r\n        <ion-card class=\"core-success-card\" *ngIf=\"completed\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-icon name=\"fas-check\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    <p *ngIf=\"!completionPageContents && !completedOffline\">\r\n                        {{ 'addon.mod_feedback.this_feedback_is_already_submitted' | translate }}\r\n                    </p>\r\n                    <p *ngIf=\"!completionPageContents && completedOffline\">\r\n                        {{ 'addon.mod_feedback.feedback_submitted_offline' | translate }}\r\n                    </p>\r\n                    <core-format-text *ngIf=\"completionPageContents\" [component]=\"component\" componentId=\"componentId\"\r\n                        [text]=\"completionPageContents\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <div collapsible-footer *ngIf=\"feedbackLoaded && completed\" slot=\"fixed\" appearOnBottom>\r\n            <div class=\"list-item-limited-width adaptable-buttons-row\">\r\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"showAnalysis()\" class=\"ion-text-wrap ion-margin\"\r\n                    *ngIf=\"access!.canviewanalysis\">\r\n                    <ion-icon name=\"fas-chart-bar\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'addon.mod_feedback.completed_feedbacks' | translate }}\r\n                </ion-button>\r\n                <ion-button expand=\"block\" (click)=\"continue()\" class=\"ion-text-wrap ion-margin\">\r\n                    <ng-container *ngIf=\"!siteAfterSubmit\">{{ 'core.continue' | translate }}</ng-container>\r\n                    <ng-container *ngIf=\"siteAfterSubmit\">{{ 'core.course.nextactivity' | translate }}</ng-container>\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-feedback-index [module]=\"module\" [courseId]=\"courseId\" [group]=\"selectedGroup\" [tab]=\"selectedTab\"\r\n        (dataRetrieved)=\"updateData($event)\"></addon-mod-feedback-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_feedback.responses' |translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshFeedback($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"ion-no-margin\">\r\n            <core-group-selector [groupInfo]=\"groupInfo\" [(selected)]=\"selectedGroup\" (selectedChange)=\"loadAttempts(selectedGroup)\"\r\n                [courseId]=\"courseId\">\r\n            </core-group-selector>\r\n\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_feedback.non_respondents_students' | translate : {$a: total } }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ng-container *ngIf=\"total > 0\">\r\n                <ion-item *ngFor=\"let user of users\" class=\"ion-text-wrap\">\r\n                    <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ user.fullname }}</p>\r\n                        <p>\r\n                            <ion-badge color=\"success\" *ngIf=\"user.started\">\r\n                                {{ 'addon.mod_feedback.started' | translate}}\r\n                            </ion-badge>\r\n                            <ion-badge color=\"danger\" *ngIf=\"!user.started\">\r\n                                {{ 'addon.mod_feedback.not_started' | translate}}\r\n                            </ion-badge>\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadAttempts(undefined, $event)\" [error]=\"loadMoreError\">\r\n            </core-infinite-loading>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/feedback/classes/feedback-attempts-source.ts":
/*!*********************************************************************!*\
  !*** ./src/addons/mod/feedback/classes/feedback-attempts-source.ts ***!
  \*********************************************************************/
/*! exports provided: AddonModFeedbackAttemptsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptsSource", function() { return AddonModFeedbackAttemptsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
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
 * Feedback attempts.
 */
class AddonModFeedbackAttemptsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, cmId) {
        super();
        this.COURSE_ID = courseId;
        this.CM_ID = cmId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(attempt) {
        return attempt.id.toString();
    }
    /**
     * @inheritdoc
     */
    getPagesLoaded() {
        if (!this.identifiable || !this.anonymous) {
            return 0;
        }
        const pageLength = this.getPageLength();
        return Math.ceil(Math.max(this.anonymous.length, this.identifiable.length) / pageLength);
    }
    /**
     * Type guard to infer AddonModFeedbackWSAttempt objects.
     *
     * @param attempt Attempt to check.
     * @returns Whether the item is an identifieable attempt.
     */
    isIdentifiableAttempt(attempt) {
        return 'fullname' in attempt;
    }
    /**
     * Type guard to infer AddonModFeedbackWSAnonAttempt objects.
     *
     * @param attempt Attempt to check.
     * @returns Whether the item is an anonymous attempt.
     */
    isAnonymousAttempt(attempt) {
        return 'number' in attempt;
    }
    /**
     * Invalidate feedback cache.
     */
    invalidateCache() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all([
                _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].invalidateActivityGroupInfo(this.CM_ID),
                this.feedback && _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedback"].invalidateResponsesAnalysisData(this.feedback.id),
            ]);
        });
    }
    /**
     * Load feedback.
     */
    loadFeedback() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedback"].getFeedback(this.COURSE_ID, this.CM_ID);
            this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].getActivityGroupInfo(this.CM_ID);
            this.selectedGroup = _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].validateGroupId(this.selectedGroup, this.groupInfo);
        });
    }
    /**
     * @inheritdoc
     */
    getPageLength() {
        return _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedbackProvider"].PER_PAGE;
    }
    /**
     * @inheritdoc
     */
    loadPageItems(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.feedback) {
                throw new Error('Can\'t load attempts without feeback');
            }
            const result = yield _services_feedback_helper__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackHelper"].getResponsesAnalysis(this.feedback.id, {
                page,
                groupId: this.selectedGroup,
                cmId: this.CM_ID,
            });
            if (page === 0) {
                this.identifiableTotal = result.totalattempts;
                this.anonymousTotal = result.totalanonattempts;
            }
            const totalItemsLoaded = this.getPageLength() * (page + 1);
            const pageAttempts = [
                // The page argument is ignored in the webservice when there is only one page,
                // so we should ignore the responses of pages beyond the first if that's the case.
                ...(page === 0 || result.totalattempts > _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedbackProvider"].PER_PAGE)
                    ? result.attempts
                    : [],
                ...(page === 0 || result.totalanonattempts > _services_feedback__WEBPACK_IMPORTED_MODULE_3__["AddonModFeedbackProvider"].PER_PAGE)
                    ? result.anonattempts
                    : [],
            ];
            return {
                items: pageAttempts,
                hasMoreItems: result.totalattempts > totalItemsLoaded || result.totalanonattempts > totalItemsLoaded,
            };
        });
    }
    /**
     * @inheritdoc
     */
    setItems(attempts, hasMoreItems) {
        this.identifiable = attempts.filter(this.isIdentifiableAttempt);
        this.anonymous = attempts.filter(this.isAnonymousAttempt);
        super.setItems(this.identifiable.concat(this.anonymous), hasMoreItems);
    }
}


/***/ }),

/***/ "./src/addons/mod/feedback/feedback-lazy.module.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/feedback/feedback-lazy.module.ts ***!
  \*********************************************************/
/*! exports provided: AddonModFeedbackLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackLazyModule", function() { return AddonModFeedbackLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/feedback/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/feedback/pages/index/index.ts");
/* harmony import */ var _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/attempts/attempts */ "./src/addons/mod/feedback/pages/attempts/attempts.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _addons_mod_feedback_pages_attempt_attempt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/mod/feedback/pages/attempt/attempt */ "./src/addons/mod/feedback/pages/attempt/attempt.ts");
/* harmony import */ var _addons_mod_feedback_pages_form_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @addons/mod/feedback/pages/form/form */ "./src/addons/mod/feedback/pages/form/form.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _addons_mod_feedback_pages_nonrespondents_nonrespondents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @addons/mod/feedback/pages/nonrespondents/nonrespondents */ "./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.ts");
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













const commonRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackIndexPage"],
    },
    {
        path: ':courseId/:cmId/form',
        component: _addons_mod_feedback_pages_form_form__WEBPACK_IMPORTED_MODULE_10__["AddonModFeedbackFormPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_11__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/nonrespondents',
        component: _addons_mod_feedback_pages_nonrespondents_nonrespondents__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackNonRespondentsPage"],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/attempts',
        component: _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackAttemptsPage"],
    },
    {
        path: ':courseId/:cmId/attempts/:attemptId',
        component: _addons_mod_feedback_pages_attempt_attempt__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedbackAttemptPage"],
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/attempts',
        component: _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackAttemptsPage"],
        children: [
            {
                path: ':attemptId',
                component: _addons_mod_feedback_pages_attempt_attempt__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedbackAttemptPage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet),
];
let AddonModFeedbackLazyModule = class AddonModFeedbackLazyModule {
};
AddonModFeedbackLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackComponentsModule"],
        ],
        declarations: [
            _pages_attempts_attempts__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedbackAttemptsPage"],
            _addons_mod_feedback_pages_form_form__WEBPACK_IMPORTED_MODULE_10__["AddonModFeedbackFormPage"],
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModFeedbackIndexPage"],
            _addons_mod_feedback_pages_nonrespondents_nonrespondents__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackNonRespondentsPage"],
            _addons_mod_feedback_pages_attempt_attempt__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedbackAttemptPage"],
        ],
    })
], AddonModFeedbackLazyModule);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/attempt/attempt.ts":
/*!**********************************************************!*\
  !*** ./src/addons/mod/feedback/pages/attempt/attempt.ts ***!
  \**********************************************************/
/*! exports provided: AddonModFeedbackAttemptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptPage", function() { return AddonModFeedbackAttemptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../classes/feedback-attempts-source */ "./src/addons/mod/feedback/classes/feedback-attempts-source.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays a feedback attempt review.
 */
let AddonModFeedbackAttemptPage = class AddonModFeedbackAttemptPage {
    constructor() {
        this.items = [];
        this.component = _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedbackProvider"].COMPONENT;
        this.loaded = false;
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
        this.attemptId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('attemptId');
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_7__["AddonModFeedbackAttemptsSource"], [this.courseId, this.cmId]);
        this.attempts = new AddonModFeedbackAttemptsSwipeManager(source);
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_10__["CoreTime"].once(() => {
            if (!this.feedback) {
                return;
            }
            _services_analytics__WEBPACK_IMPORTED_MODULE_11__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_11__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_feedback_get_responses_analysis',
                name: this.feedback.name,
                data: { id: this.attemptId, feedbackid: this.feedback.id, category: 'feedback' },
                url: `/mod/feedback/show_entries.php?id=${this.cmId}` +
                    (this.attempt ? `userid=${this.attempt.userid}` : '') + `&showcompleted=${this.attemptId}`,
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.attempts.start();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
                return;
            }
            this.fetchData();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.attempts.destroy();
    }
    /**
     * Fetch all the data required for the view.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedback"].getFeedback(this.courseId, this.cmId);
                const attempt = yield _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedback"].getAttempt(this.feedback.id, this.attemptId, { cmId: this.cmId });
                if (this.isAnonAttempt(attempt)) {
                    this.anonAttempt = attempt;
                    delete this.attempt;
                }
                else {
                    this.attempt = (yield _services_feedback_helper__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedbackHelper"].addImageProfile([attempt]))[0];
                    delete this.anonAttempt;
                }
                const items = yield _services_feedback__WEBPACK_IMPORTED_MODULE_8__["AddonModFeedback"].getItems(this.feedback.id, { cmId: this.cmId });
                // Add responses and format items.
                this.items = items.items.map((item) => {
                    const formItem = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_9__["AddonModFeedbackHelper"].getItemForm(item, true);
                    if (!formItem) {
                        return;
                    }
                    const attemptItem = formItem;
                    if (item.typ == 'label') {
                        attemptItem.submittedValue = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].replacePluginfileUrls(item.presentation, item.itemfiles);
                    }
                    else {
                        for (const x in attempt.responses) {
                            if (attempt.responses[x].id == item.id) {
                                attemptItem.submittedValue = attempt.responses[x].printval;
                                break;
                            }
                        }
                    }
                    return attemptItem;
                }).filter((itemData) => itemData); // Filter items with errors.
                this.logView();
            }
            catch (message) {
                // Some call failed on fetch, go back.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Check if an attempt is anonymous or not.
     *
     * @param attempt Attempt to check.
     * @returns If attempt is anonymous.
     */
    isAnonAttempt(attempt) {
        return !('fullname' in attempt);
    }
};
AddonModFeedbackAttemptPage.ctorParameters = () => [];
AddonModFeedbackAttemptPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-attempt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attempt.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempt/attempt.html")).default,
    })
], AddonModFeedbackAttemptPage);

/**
 * Helper to manage swiping within a collection of discussions.
 */
class AddonModFeedbackAttemptsSwipeManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_3__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return route.params.attemptId;
    }
}


/***/ }),

/***/ "./src/addons/mod/feedback/pages/attempts/attempts.ts":
/*!************************************************************!*\
  !*** ./src/addons/mod/feedback/pages/attempts/attempts.ts ***!
  \************************************************************/
/*! exports provided: AddonModFeedbackAttemptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptsPage", function() { return AddonModFeedbackAttemptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_promised_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/promised-value */ "./src/core/classes/promised-value.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../classes/feedback-attempts-source */ "./src/addons/mod/feedback/classes/feedback-attempts-source.ts");
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
 * Page that displays feedback attempts.
 */
let AddonModFeedbackAttemptsPage = class AddonModFeedbackAttemptsPage {
    constructor(route) {
        this.route = route;
        this.fetchFailed = false;
        this.promisedAttempts = new _classes_promised_value__WEBPACK_IMPORTED_MODULE_5__["CorePromisedValue"]();
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_11__["CoreTime"].once(() => {
            var _a;
            const source = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource();
            if (!source || !source.feedback) {
                return;
            }
            _services_analytics__WEBPACK_IMPORTED_MODULE_12__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_12__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'mod_feedback_get_responses_analysis',
                name: source.feedback.name,
                data: { feedbackid: source.feedback.id, category: 'feedback' },
                url: `/mod/feedback/show_entries.php?id=${source.CM_ID}`,
            });
        });
    }
    get attempts() {
        return this.promisedAttempts.value;
    }
    get groupInfo() {
        var _a;
        return (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().groupInfo;
    }
    get selectedGroup() {
        var _a;
        return (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().selectedGroup;
    }
    set selectedGroup(group) {
        if (!this.attempts) {
            return;
        }
        this.attempts.getSource().selectedGroup = group;
        this.attempts.getSource().setDirty(true);
    }
    get identifiableAttempts() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().identifiable) !== null && _b !== void 0 ? _b : [];
    }
    get identifiableAttemptsTotal() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().identifiableTotal) !== null && _b !== void 0 ? _b : 0;
    }
    get anonymousAttempts() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().anonymous) !== null && _b !== void 0 ? _b : [];
    }
    get anonymousAttemptsTotal() {
        var _a, _b;
        return (_b = (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.getSource().anonymousTotal) !== null && _b !== void 0 ? _b : 0;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                const cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_feedback_attempts_source__WEBPACK_IMPORTED_MODULE_10__["AddonModFeedbackAttemptsSource"], [this.courseId, cmId]);
                source.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('group') || 0;
                this.promisedAttempts.resolve(new AddonModFeedbackAttemptsManager(source, this.route.component));
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
                return;
            }
            const attempts = yield this.promisedAttempts;
            try {
                this.fetchFailed = false;
                yield attempts.getSource().loadFeedback();
                yield attempts.load();
                this.logView();
            }
            catch (error) {
                this.fetchFailed = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            yield attempts.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.attempts) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    /**
     * Fetch more attempts, if any.
     *
     * @param infiniteComplete Complete callback for infinite loader.
     */
    fetchMoreAttempts(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const attempts = yield this.promisedAttempts;
            try {
                this.fetchFailed = false;
                yield attempts.load();
            }
            catch (error) {
                this.fetchFailed = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Refresh the attempts.
     *
     * @param refresher Refresher.
     */
    refreshFeedback(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const attempts = yield this.promisedAttempts;
            try {
                this.fetchFailed = false;
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(attempts.getSource().invalidateCache());
                yield attempts.getSource().loadFeedback();
                yield attempts.reload();
            }
            catch (error) {
                this.fetchFailed = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                refresher.complete();
            }
        });
    }
    /**
     * Reload attempts list.
     */
    reloadAttempts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const attempts = yield this.promisedAttempts;
            yield attempts.reload();
        });
    }
};
AddonModFeedbackAttemptsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddonModFeedbackAttemptsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__["CoreSplitViewComponent"],] }]
};
AddonModFeedbackAttemptsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-attempts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attempts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/attempts/attempts.html")).default,
    })
], AddonModFeedbackAttemptsPage);

/**
 * Attempts manager.
 */
class AddonModFeedbackAttemptsManager extends _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_4__["CoreListItemsManager"] {
}


/***/ }),

/***/ "./src/addons/mod/feedback/pages/form/form.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/feedback/pages/form/form.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_feedback-item ion-label.label-stacked {\n  margin: 11px 0px 10px;\n  transform: none;\n}\n:host .addon-mod_feedback-item-error {\n  padding-top: 5px;\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2ZlZWRiYWNrL3BhZ2VzL2Zvcm0vZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFEUiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9mZWVkYmFjay9wYWdlcy9mb3JtL2Zvcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5hZGRvbi1tb2RfZmVlZGJhY2staXRlbSBpb24tbGFiZWwubGFiZWwtc3RhY2tlZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMXB4IDBweCAxMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkb24tbW9kX2ZlZWRiYWNrLWl0ZW0tZXJyb3Ige1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/feedback/pages/form/form.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/feedback/pages/form/form.ts ***!
  \****************************************************/
/*! exports provided: AddonModFeedbackFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackFormPage", function() { return AddonModFeedbackFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/contentlinks/services/contentlinks-helper */ "./src/core/features/contentlinks/services/contentlinks-helper.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
/* harmony import */ var _services_feedback_sync__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/feedback-sync */ "./src/addons/mod/feedback/services/feedback-sync.ts");
/* harmony import */ var _services_handlers_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/handlers/module */ "./src/addons/mod/feedback/services/handlers/module.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays feedback form.
 */
let AddonModFeedbackFormPage = class AddonModFeedbackFormPage {
    constructor() {
        this.forceLeave = false;
        this.preview = false;
        this.fromIndex = false;
        this.component = _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].COMPONENT;
        this.offline = false;
        this.feedbackLoaded = false;
        this.items = [];
        this.hasPrevPage = false;
        this.hasNextPage = false;
        this.completed = false;
        this.completedOffline = false;
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getRequiredCurrentSite();
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_10__["NgZone"].run(() => {
                this.offline = !_services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('page');
                this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('title');
                this.preview = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('preview');
                this.fromIndex = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('fromIndex');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            yield this.fetchData();
            if (!this.access || this.access.isempty && (!this.access.canedititems && !this.access.canviewreports)) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.nopermissiontoaccesspage'));
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            if (!this.feedback) {
                return;
            }
            try {
                yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].logView(this.feedback.id, true);
                _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].checkModuleCompletion(this.courseId, this.module.completiondata);
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * View entered.
     */
    ionViewDidEnter() {
        this.forceLeave = false;
    }
    /**
     * @inheritdoc
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            if (!this.preview) {
                const responses = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getPageItemsResponses(this.items);
                if (this.items && !this.completed && this.originalData) {
                    // Form submitted. Check if there is any change.
                    if (!_services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].basicLeftCompare(responses, this.originalData, 3)) {
                        yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.confirmcanceledit'));
                    }
                }
            }
            return true;
        });
    }
    /**
     * Fetch all the data required for the view.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.module = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_3__["CoreCourse"].getModule(this.cmId, this.courseId, undefined, true, false, this.currentSite.getId());
                this.offline = !_services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
                const options = {
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    siteId: this.currentSite.getId(),
                };
                this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getFeedback(this.courseId, this.cmId);
                this.title = this.feedback.name || this.title;
                yield this.fetchAccessData(options);
                let page = 0;
                if (!this.preview && this.access.cansubmit && !this.access.isempty) {
                    page = (_a = this.currentPage) !== null && _a !== void 0 ? _a : yield this.fetchResumePage(options);
                }
                else {
                    this.preview = true;
                }
                yield this.fetchFeedbackPageData(page);
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
            finally {
                this.feedbackLoaded = true;
            }
        });
    }
    /**
     * Fetch access information.
     *
     * @param options Options.
     * @returns Promise resolved when done.
     */
    fetchAccessData(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.access = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getFeedbackAccessInformation(this.feedback.id, options);
            }
            catch (error) {
                if (this.offline || _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isWebServiceError(error)) {
                    // Already offline or shouldn't go offline, fail.
                    throw error;
                }
                // If it fails, go offline.
                this.offline = true;
                options.readingStrategy = 1 /* PREFER_CACHE */;
                this.access = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getFeedbackAccessInformation(this.feedback.id, options);
            }
        });
    }
    /**
     * Get resume page from WS.
     *
     * @param options Options.
     * @returns Promise resolved with the page to resume.
     */
    fetchResumePage(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getResumePage(this.feedback.id, options);
            }
            catch (error) {
                if (this.offline || _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isWebServiceError(error)) {
                    // Already offline or shouldn't go offline, fail.
                    throw error;
                }
                // Go offline.
                this.offline = true;
                options.readingStrategy = 1 /* PREFER_CACHE */;
                return _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getResumePage(this.feedback.id, options);
            }
        });
    }
    /**
     * Fetch page data.
     *
     * @param page Page to load.
     * @returns Promise resolved when done.
     */
    fetchFeedbackPageData(page = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items = [];
            const response = yield this.fetchPageItems(page);
            this.items = response.items
                .map((itemData) => _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getItemForm(itemData, this.preview))
                .filter((itemData) => itemData); // Filter items with errors.
            if (!this.preview) {
                const itemsCopy = _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].clone(this.items); // Copy the array to avoid modifications.
                this.originalData = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getPageItemsResponses(itemsCopy);
            }
            this.analyticsLogEvent();
        });
    }
    /**
     * Fetch page items.
     *
     * @param page Page to get.
     * @returns Promise resolved with WS response.
     */
    fetchPageItems(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                cmId: this.cmId,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                siteId: this.currentSite.getId(),
            };
            if (this.preview) {
                const response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getItems(this.feedback.id, options);
                return {
                    items: response.items,
                    warnings: response.warnings,
                    hasnextpage: false,
                    hasprevpage: false,
                };
            }
            this.currentPage = page;
            let response;
            try {
                response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getPageItemsWithValues(this.feedback.id, page, options);
            }
            catch (error) {
                if (this.offline || _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isWebServiceError(error)) {
                    // Already offline or shouldn't go offline, fail.
                    throw error;
                }
                // Go offline.
                this.offline = true;
                options.readingStrategy = 1 /* PREFER_CACHE */;
                response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].getPageItemsWithValues(this.feedback.id, page, options);
            }
            this.hasPrevPage = !!response.hasprevpage;
            this.hasNextPage = !!response.hasnextpage;
            return response;
        });
    }
    /**
     * Function to allow page navigation through the questions form.
     *
     * @param goPrevious If true it will go back to the previous page, if false, it will go forward.
     * @returns Resolved when done.
     */
    gotoPage(goPrevious) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            this.feedbackLoaded = false;
            const responses = _services_feedback_helper__WEBPACK_IMPORTED_MODULE_13__["AddonModFeedbackHelper"].getPageItemsResponses(this.items);
            const formHasErrors = this.items.some((item) => item.isEmpty || item.hasError);
            try {
                // Sync other pages first.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_feedback_sync__WEBPACK_IMPORTED_MODULE_14__["AddonModFeedbackSync"].syncFeedback(this.feedback.id));
                const response = yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].processPage(this.feedback.id, this.currentPage, responses, {
                    goPrevious,
                    formHasErrors,
                    courseId: this.courseId,
                    cmId: this.cmId,
                });
                if (response.completed) {
                    // Form is completed, show completion message and buttons.
                    this.items = [];
                    this.completed = true;
                    this.completedOffline = !!response.offline;
                    this.completionPageContents = response.completionpagecontents;
                    this.siteAfterSubmit = response.siteaftersubmit;
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'feedback' });
                    // Invalidate access information so user will see home page updated (continue form or completion messages).
                    yield Promise.all([
                        _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].invalidateFeedbackAccessInformationData(this.feedback.id),
                        _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].invalidateResumePageData(this.feedback.id),
                    ]);
                    // If form has been submitted, the info has been already invalidated but we should update index view.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].FORM_SUBMITTED, {
                        feedbackId: this.feedback.id,
                        tab: 'overview',
                        offline: this.completedOffline,
                    });
                    yield this.fetchAccessData({
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                        siteId: this.currentSite.getId(),
                    });
                }
                else if (typeof response.jumpto != 'number' || response.jumpto == this.currentPage) {
                    // Errors on questions, stay in page.
                }
                else {
                    // Invalidate access information so user will see home page updated (continue form).
                    yield _services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedback"].invalidateResumePageData(this.feedback.id);
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].FORM_SUBMITTED, {
                        feedbackId: this.feedback.id,
                        tab: 'overview',
                        offline: this.completedOffline,
                    });
                    // Fetch the new page.
                    yield this.fetchFeedbackPageData(response.jumpto);
                }
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            }
            finally {
                this.feedbackLoaded = true;
            }
        });
    }
    /**
     * Function to link implemented features.
     */
    showAnalysis() {
        if (this.fromIndex) {
            // Previous page is the index page, go back.
            _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_feedback__WEBPACK_IMPORTED_MODULE_12__["AddonModFeedbackProvider"].FORM_SUBMITTED, {
                feedbackId: this.feedback.id,
                tab: 'analysis',
                offline: this.completedOffline,
            });
            _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            return;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].navigateToSitePath(_services_handlers_module__WEBPACK_IMPORTED_MODULE_15__["AddonModFeedbackModuleHandlerService"].PAGE_NAME + `/${this.courseId}/${this.cmId}`, {
            params: {
                module: this.module,
                tab: 'analysis',
            },
        });
    }
    /**
     * Function to go to the page after submit.
     *
     * @returns Promise resolved when done.
     */
    continue() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.siteAfterSubmit) {
                return _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                const treated = yield _features_contentlinks_services_contentlinks_helper__WEBPACK_IMPORTED_MODULE_2__["CoreContentLinksHelper"].handleLink(this.siteAfterSubmit);
                if (!treated) {
                    yield this.currentSite.openInBrowserWithAutoLogin(this.siteAfterSubmit);
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Log event in analytics.
     */
    analyticsLogEvent() {
        if (!this.feedback) {
            return;
        }
        if (this.preview) {
            _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_feedback_get_items',
                name: this.feedback.name,
                data: { id: this.feedback.id, category: 'feedback' },
                url: `/mod/feedback/print.php?id=${this.cmId}&courseid=${this.courseId}`,
            });
            return;
        }
        let url = '/mod/feedback/complete.php';
        if (!this.completed) {
            url += `?id=${this.cmId}` + (this.currentPage ? `&gopage=${this.currentPage}` : '') + `&courseid=${this.courseId}`;
        }
        _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalytics"].logEvent({
            type: _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalyticsEventType"].VIEW_ITEM,
            ws: this.completed ? 'mod_feedback_get_feedback_access_information' : 'mod_feedback_get_page_items',
            name: this.feedback.name,
            data: { id: this.feedback.id, category: 'feedback', page: this.currentPage },
            url,
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.onlineObserver.unsubscribe();
    }
};
AddonModFeedbackFormPage.ctorParameters = () => [];
AddonModFeedbackFormPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }]
};
AddonModFeedbackFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/form/form.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form.scss */ "./src/addons/mod/feedback/pages/form/form.scss")).default]
    })
], AddonModFeedbackFormPage);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/feedback/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonModFeedbackIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackIndexPage", function() { return AddonModFeedbackIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/feedback/components/index/index.ts");
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
 * Page that displays a feedback.
 */
let AddonModFeedbackIndexPage = class AddonModFeedbackIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    /**
     * @inheritdoc
     */
    ngOnInit() {
        super.ngOnInit();
        this.selectedTab = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('tab');
        this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group');
    }
};
AddonModFeedbackIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_4__["AddonModFeedbackIndexComponent"],] }]
};
AddonModFeedbackIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/index/index.html")).default,
    })
], AddonModFeedbackIndexPage);



/***/ }),

/***/ "./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.ts":
/*!************************************************************************!*\
  !*** ./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.ts ***!
  \************************************************************************/
/*! exports provided: AddonModFeedbackNonRespondentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackNonRespondentsPage", function() { return AddonModFeedbackNonRespondentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/feedback */ "./src/addons/mod/feedback/services/feedback.ts");
/* harmony import */ var _services_feedback_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/feedback-helper */ "./src/addons/mod/feedback/services/feedback-helper.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays feedback non respondents.
 */
let AddonModFeedbackNonRespondentsPage = class AddonModFeedbackNonRespondentsPage {
    constructor() {
        this.page = 0;
        this.users = [];
        this.total = 0;
        this.canLoadMore = false;
        this.loaded = false;
        this.loadMoreError = false;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_8__["CoreTime"].once(() => {
            if (!this.feedback) {
                return;
            }
            _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'mod_feedback_get_non_respondents',
                name: this.feedback.name,
                data: { feedbackid: this.feedback.id, category: 'feedback' },
                url: `/mod/feedback/show_nonrespondents.php?id=${this.cmId}&courseid=${this.courseId}`,
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group') || 0;
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
            return;
        }
        this.fetchData();
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param refresh Empty events array first.
     * @returns Promise resolved when done.
     */
    fetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.page = 0;
            this.total = 0;
            this.users = [];
            try {
                this.feedback = yield _services_feedback__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedback"].getFeedback(this.courseId, this.cmId);
                this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].getActivityGroupInfo(this.cmId);
                this.selectedGroup = _services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].validateGroupId(this.selectedGroup, this.groupInfo);
                yield this.loadGroupUsers(this.selectedGroup);
                this.logView();
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                if (!refresh) {
                    // Some call failed on first fetch, go back.
                    _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
                }
            }
        });
    }
    /**
     * Load Group responses.
     *
     * @param groupId If defined it will change group if not, it will load more users for the same group.
     * @returns Promise resolved when done.
     */
    loadGroupUsers(groupId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (groupId === undefined) {
                this.page++;
            }
            else {
                this.selectedGroup = groupId;
                this.page = 0;
                this.total = 0;
                this.users = [];
                this.loaded = false;
            }
            try {
                const response = yield _services_feedback_helper__WEBPACK_IMPORTED_MODULE_7__["AddonModFeedbackHelper"].getNonRespondents(this.feedback.id, {
                    groupId: this.selectedGroup,
                    page: this.page,
                    cmId: this.cmId,
                });
                this.total = response.total;
                if (this.users.length < response.total) {
                    this.users = this.users.concat(response.users);
                }
                this.canLoadMore = this.users.length < response.total;
            }
            catch (error) {
                this.loadMoreError = true;
                throw error;
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Change selected group or load more users.
     *
     * @param groupId Group ID selected. If not defined, it will load more users.
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     */
    loadAttempts(groupId, infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.loadGroupUsers(groupId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Refresh the attempts.
     *
     * @param refresher Refresher.
     */
    refreshFeedback(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const promises = [];
                promises.push(_services_groups__WEBPACK_IMPORTED_MODULE_2__["CoreGroups"].invalidateActivityGroupInfo(this.cmId));
                if (this.feedback) {
                    promises.push(_services_feedback__WEBPACK_IMPORTED_MODULE_6__["AddonModFeedback"].invalidateNonRespondentsData(this.feedback.id));
                }
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(Promise.all(promises));
                yield this.fetchData(true);
            }
            finally {
                refresher.complete();
            }
        });
    }
};
AddonModFeedbackNonRespondentsPage.ctorParameters = () => [];
AddonModFeedbackNonRespondentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-feedback-nonrespondents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nonrespondents.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.html")).default,
    })
], AddonModFeedbackNonRespondentsPage);



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
//# sourceMappingURL=feedback-lazy-module.js.map