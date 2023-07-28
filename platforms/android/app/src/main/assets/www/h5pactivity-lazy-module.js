(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["h5pactivity-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"h5pActivity\" [text]=\"h5pActivity.name\" contextLevel=\"module\"\r\n                    [contextInstanceId]=\"h5pActivity.coursemodule\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ng-container *ngIf=\"attempt\">\r\n            <!-- Attempt number and user that did the attempt. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"user\" core-user-link [userId]=\"user.id\" [courseId]=\"courseId\"\r\n                [attr.aria-label]=\"user.fullname\">\r\n                <core-user-avatar [user]=\"user\" slot=\"start\" [courseId]=\"courseId\" [linkProfile]=\"false\"></core-user-avatar>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_h5pactivity.attempt' | translate }} #{{attempt.attempt}}: {{user.fullname}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <!-- Attempt number (if user not known). -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"!user\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_h5pactivity.attempt' | translate }} #{{attempt.attempt}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Attempt summary. -->\r\n            <ion-card class=\"addon-mod_h5pactivity-attempt-result-summary\">\r\n                <ion-list>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_h5pactivity.startdate' | translate }}</p>\r\n                            <p>{{ attempt.timecreated | coreFormatDate:'strftimedatetime' }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_h5pactivity.completion' | translate }}</p>\r\n                            <p *ngIf=\"attempt.completion\">\r\n                                <img src=\"assets/img/completion/completion-auto-y.svg\" role=\"presentation\" alt=\"\">\r\n                                {{ 'addon.mod_h5pactivity.attempt_completion_yes' | translate }}\r\n                            </p>\r\n                            <p *ngIf=\"!attempt.completion\">\r\n                                <img src=\"assets/img/completion/completion-auto-n.svg\" role=\"presentation\" alt=\"\">\r\n                                {{ 'addon.mod_h5pactivity.attempt_completion_no' | translate }}\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_h5pactivity.duration' | translate }}</p>\r\n                            <p>{{ attempt.durationReadable }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_h5pactivity.outcome' | translate }}</p>\r\n                            <p *ngIf=\"attempt.success !== null && attempt.success\">\r\n                                <ion-icon name=\"fas-circle-check\" aria-hidden=\"true\"></ion-icon>\r\n                                {{ 'addon.mod_h5pactivity.attempt_success_pass' | translate }}\r\n                            </p>\r\n                            <p *ngIf=\"attempt.success !== null && !attempt.success\">\r\n                                <ion-icon name=\"far-circle\" aria-hidden=\"true\"></ion-icon>\r\n                                {{ 'addon.mod_h5pactivity.attempt_success_fail' | translate }}\r\n                            </p>\r\n                            <p *ngIf=\"attempt.success === null\">\r\n                                {{ 'addon.mod_h5pactivity.attempt_success_unknown' | translate }}\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"attempt.maxscore\" class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_h5pactivity.totalscore' | translate }}</p>\r\n                            <p>{{ 'addon.mod_h5pactivity.score_out_of' | translate:{$a: attempt} }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </ion-card>\r\n\r\n            <!-- Results. -->\r\n            <ng-container *ngIf=\"attempt.results\">\r\n                <ion-card *ngFor=\"let result of attempt.results\">\r\n                    <ion-card-header class=\"ion-text-wrap\">\r\n                        <ion-card-title>\r\n                            <core-format-text [text]=\"result.description\" [component]=\"component\" [componentId]=\"cmId\" contextLevel=\"module\"\r\n                                [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                            </core-format-text>\r\n                        </ion-card-title>\r\n                    </ion-card-header>\r\n                    <ion-item *ngIf=\"result.content\" class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <core-format-text [text]=\"result.content\" [component]=\"component\" [componentId]=\"cmId\" contextLevel=\"module\"\r\n                                [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                            </core-format-text>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n                    <!-- Options. -->\r\n                    <ng-container *ngIf=\"result.options && result.options.length\">\r\n                        <ion-item class=\"ion-text-wrap addon-mod_h5pactivity-result-table-header\">\r\n                            <ion-label>\r\n                                <ion-row class=\"ion-align-items-center\">\r\n                                    <ion-col class=\"ion-text-start\">{{ result.optionslabel }}</ion-col>\r\n                                    <ion-col class=\"ion-text-center\">{{ result.correctlabel }}</ion-col>\r\n                                    <ion-col class=\"ion-text-center\">{{ result.answerlabel }}</ion-col>\r\n                                </ion-row>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngFor=\"let option of result.options\" class=\"ion-text-wrap addon-mod_h5pactivity-result-table-row\">\r\n                            <ion-label>\r\n                                <ion-row class=\"ion-align-items-center\">\r\n                                    <ion-col class=\"ion-text-start\">\r\n                                        <core-format-text [text]=\"option.description\" [component]=\"component\" [componentId]=\"cmId\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </ion-col>\r\n                                    <ion-col class=\"ion-text-center\">\r\n                                        <ng-container *ngIf=\"option.correctanswer\">\r\n                                            <ng-container *ngTemplateOutlet=\"answerTemplate; context: {answer: option.correctanswer}\">\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </ion-col>\r\n                                    <ion-col class=\"ion-text-center\">\r\n                                        <ng-container *ngIf=\"option.useranswer\">\r\n                                            <ng-container *ngTemplateOutlet=\"answerTemplate; context: {answer: option.useranswer}\">\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-label>\r\n                        </ion-item>\r\n\r\n                        <!-- Result score. -->\r\n                        <ion-item *ngIf=\"result.maxscore\" class=\"ion-text-wrap ion-text-end addon-mod_h5pactivity-result-score\">\r\n                            <ion-label>\r\n                                <p><strong>\r\n                                        {{ 'addon.mod_h5pactivity.score' | translate }}:\r\n                                        {{ 'addon.mod_h5pactivity.score_out_of' | translate:{$a: result} }}\r\n                                    </strong></p>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ng-container>\r\n\r\n                    <!-- Result doesn't support tracking. -->\r\n                    <ion-item class=\"ion-text-wrap core-warning-item\" *ngIf=\"!result.track\">\r\n                        <ion-icon slot=\"start\" name=\"fas-triangle-exclamation\" color=\"warning\" aria-hidden=\"true\"></ion-icon>\r\n                        <ion-label>\r\n                            {{ 'addon.mod_h5pactivity.no_compatible_track' | translate:{$a: result.interactiontype} }}\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-card>\r\n            </ng-container>\r\n        </ng-container>\r\n    </core-loading>\r\n</ion-content>\r\n\r\n<!-- Template to render an answer. -->\r\n<ng-template #answerTemplate let-answer=\"answer\">\r\n    <p *ngIf=\"answer.correct\">\r\n        <ion-icon name=\"fas-check\" [attr.aria-label]=\"'addon.mod_h5pactivity.answer_correct' | translate\" color=\"success\">\r\n        </ion-icon>\r\n        {{ answer.answer }}\r\n    </p>\r\n    <p *ngIf=\"answer.incorrect\">\r\n        <ion-icon name=\"fas-xmark\" [attr.aria-label]=\"'addon.mod_h5pactivity.answer_incorrect' | translate\" color=\"danger\">\r\n        </ion-icon>\r\n        {{ answer.answer }}\r\n    </p>\r\n    <p *ngIf=\"answer.text\">\r\n        {{ answer.answer }}\r\n    </p>\r\n    <p *ngIf=\"answer.checked\">\r\n        <ion-icon name=\"fas-circle-check\" [attr.aria-label]=\"'addon.mod_h5pactivity.answer_checked' | translate\">\r\n        </ion-icon>\r\n    </p>\r\n    <p *ngIf=\"answer.pass\">\r\n        <ion-icon name=\"fas-check\" [attr.aria-label]=\"'addon.mod_h5pactivity.answer_pass' | translate\" color=\"success\">\r\n        </ion-icon>\r\n    </p>\r\n    <p *ngIf=\"answer.fail\">\r\n        <ion-icon name=\"fas-xmark\" [attr.aria-label]=\"'addon.mod_h5pactivity.answer_fail' | translate\" color=\"danger\">\r\n        </ion-icon>\r\n    </p>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/index/index.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/index/index.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-h5pactivity-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"\r\n        (onActivityFinish)=\"setCanleaveSafely($event)\">\r\n    </addon-mod-h5pactivity-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"h5pActivity\" [text]=\"h5pActivity.name\" contextLevel=\"module\"\r\n                    [contextInstanceId]=\"h5pActivity.coursemodule\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <!-- User viewed. -->\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"user && !isCurrentUser\" core-user-link [userId]=\"user.id\" [courseId]=\"courseId\"\r\n            [attr.aria-label]=\"user.fullname\" button detail=\"true\">\r\n            <core-user-avatar [user]=\"user\" slot=\"start\" [courseId]=\"courseId\" [linkProfile]=\"false\"></core-user-avatar>\r\n            <ion-label>\r\n                <h2>{{ user.fullname }}</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"user && isCurrentUser\">\r\n            <core-user-avatar [user]=\"user\" slot=\"start\" [courseId]=\"courseId\"></core-user-avatar>\r\n            <ion-label>\r\n                <h2>{{ 'addon.mod_h5pactivity.myattempts' | translate }}</h2>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-list *ngIf=\"attemptsData\">\r\n            <!-- Attempts used to calculate the score. -->\r\n            <ng-container *ngIf=\"attemptsData.scored\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h3 class=\"item-heading\">{{ attemptsData.scored.title }}</h3>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ng-container *ngTemplateOutlet=\"attemptsTemplate; context: {attempts: attemptsData.scored.attempts}\">\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n            <!-- All attempts. -->\r\n            <ng-container *ngIf=\"attemptsData.attempts && attemptsData.attempts.length\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h3 class=\"item-heading\">{{ 'addon.mod_h5pactivity.all_attempts' | translate }}</h3>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ng-container *ngTemplateOutlet=\"attemptsTemplate; context: {attempts: attemptsData.attempts}\"></ng-container>\r\n            </ng-container>\r\n        </ion-list>\r\n\r\n        <!-- No attempts. -->\r\n        <core-empty-box *ngIf=\"attemptsData && (!attemptsData.attempts || !attemptsData.attempts.length)\" icon=\"fas-chart-bar\"\r\n            [message]=\"'addon.mod_h5pactivity.attempts_none' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n\r\n<!-- Template to render a list of conversations. -->\r\n<ng-template #attemptsTemplate let-attempts=\"attempts\">\r\n    <!-- \"Header\" of the table -->\r\n    <ion-item class=\"addon-mod_h5pactivity-table-header hide-detail\" detail=\"true\">\r\n        <ion-label>\r\n            <ion-row class=\"ion-align-items-center\">\r\n                <ion-col class=\"ion-text-center\">#</ion-col>\r\n                <ion-col class=\"ion-text-center\" size=\"5\" size-md=\"2\">{{ 'core.date' | translate }}</ion-col>\r\n                <ion-col class=\"ion-text-center\">{{ 'addon.mod_h5pactivity.score' | translate }}</ion-col>\r\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ 'addon.mod_h5pactivity.maxscore' | translate }}</ion-col>\r\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ 'addon.mod_h5pactivity.duration' | translate }}</ion-col>\r\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ 'addon.mod_h5pactivity.completion' | translate }}</ion-col>\r\n                <ion-col class=\"ion-text-center\">{{ 'core.success' | translate }}</ion-col>\r\n            </ion-row>\r\n        </ion-label>\r\n    </ion-item>\r\n\r\n    <!-- List of attempts. -->\r\n    <ion-item class=\"ion-text-wrap addon-mod_h5pactivity-table-row\" *ngFor=\"let attempt of attempts\" button detail=\"true\"\r\n        [attr.aria-label]=\"'addon.mod_h5pactivity.viewattempt' | translate:{$a: attempt.attempt}\" (click)=\"openAttempt(attempt)\">\r\n\r\n        <ion-label>\r\n            <ion-row class=\"ion-align-items-center\">\r\n                <ion-col class=\"ion-text-center\">{{ attempt.attempt }}</ion-col>\r\n                <ion-col class=\"ion-text-center\" size=\"5\" size-md=\"2\">\r\n                    {{ attempt.timemodified | coreFormatDate:'strftimedatetimeshort' }}\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center\">\r\n                    {{ attempt.rawscore }}<span class=\"ion-hide-md-up\"> / {{ attempt.maxscore }}</span>\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ attempt.maxscore }}</ion-col>\r\n                <ion-col class=\"ion-text-center ion-hide-md-down\">{{ attempt.durationReadable }}</ion-col>\r\n                <ion-col class=\"ion-text-center ion-hide-md-down\">\r\n                    <img *ngIf=\"attempt.completion\" src=\"assets/img/completion/completion-auto-y.svg\"\r\n                        [alt]=\"'addon.mod_h5pactivity.attempt_completion_yes' | translate\">\r\n                    <img *ngIf=\"!attempt.completion\" src=\"assets/img/completion/completion-auto-n.svg\"\r\n                        [alt]=\"'addon.mod_h5pactivity.attempt_completion_no' | translate\">\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center addon-mod_h5pactivity-table-success-col\">\r\n                    <ion-icon *ngIf=\"attempt.success !== null && attempt.success\" name=\"fas-circle-check\"\r\n                        [attr.aria-label]=\"'addon.mod_h5pactivity.attempt_success_pass' | translate\">\r\n                    </ion-icon>\r\n                    <ion-icon *ngIf=\"attempt.success !== null && !attempt.success\" name=\"far-circle\"\r\n                        [attr.aria-label]=\"'addon.mod_h5pactivity.attempt_success_fail' | translate\">\r\n                    </ion-icon>\r\n                    <img *ngIf=\"attempt.success === null\" src=\"assets/img/icons/empty.svg\"\r\n                        [alt]=\"'addon.mod_h5pactivity.attempt_success_unknown' | translate\">\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"h5pActivity\" [text]=\"h5pActivity.name\" contextLevel=\"module\"\r\n                    [contextInstanceId]=\"h5pActivity.coursemodule\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list *ngIf=\"users.length\">\r\n            <!-- \"Header\" of the table -->\r\n            <ion-item class=\"addon-mod_h5pactivity-table-header hide-detail font-bold\" detail=\"true\">\r\n                <ion-label>\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">{{ 'core.user' | translate }}</ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">{{ 'core.date' | translate }}</ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">{{ 'addon.mod_h5pactivity.score' | translate }}</ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">{{ 'addon.mod_h5pactivity.attempts' | translate }}</ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- List of users. -->\r\n            <ion-item class=\"ion-text-wrap addon-mod_h5pactivity-table-row\" *ngFor=\"let user of users\" detail=\"true\"\r\n                [attr.aria-label]=\"'addon.mod_h5pactivity.review_user_attempts' | translate:{$a: user.attempts.length}\"\r\n                (click)=\"openUser(user)\" [class.hide-detail]=\"!user.attempts.length\" [button]=\"user.attempts.length > 0\">\r\n\r\n                <ion-label>\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">\r\n                            <p>\r\n                                <core-user-avatar [user]=\"user.user\" [courseId]=\"courseId\"></core-user-avatar>\r\n                            </p>\r\n                            {{ user.user.fullname }}\r\n                        </ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"4\">\r\n                            <span *ngIf=\"user.attempts.length\">\r\n                                {{ user.attempts[user.attempts.length - 1].timemodified | coreFormatDate:'strftimedatetimeshort' }}\r\n                            </span>\r\n                            <span *ngIf=\"!user.attempts.length\">-</span>\r\n                        </ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">\r\n                            <span *ngIf=\"user.score !== undefined\">\r\n                                {{ 'core.percentagenumber' | translate: {$a: user.score} }}\r\n                            </span>\r\n                            <span *ngIf=\"user.score === undefined\">-</span>\r\n                        </ion-col>\r\n                        <ion-col class=\"ion-text-center\" size=\"2\">\r\n                            {{user.attempts.length}}\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <!-- No attempts. -->\r\n        <core-empty-box *ngIf=\"!users.length && !canLoadMore\" icon=\"fas-chart-bar\"\r\n            [message]=\"'addon.mod_h5pactivity.noparticipants' | translate\">\r\n        </core-empty-box>\r\n\r\n        <core-infinite-loading [enabled]=\"loaded && canLoadMore\" [error]=\"fetchMoreUsersFailed\" (action)=\"fetchMoreUsers($event)\">\r\n        </core-infinite-loading>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/h5pactivity-lazy.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/h5pactivity-lazy.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonModH5PActivityLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityLazyModule", function() { return AddonModH5PActivityLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/h5pactivity/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/h5pactivity/pages/index/index.ts");
/* harmony import */ var _addons_mod_h5pactivity_pages_user_attempts_user_attempts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/mod/h5pactivity/pages/user-attempts/user-attempts */ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.ts");
/* harmony import */ var _addons_mod_h5pactivity_pages_attempt_results_attempt_results__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/mod/h5pactivity/pages/attempt-results/attempt-results */ "./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.ts");
/* harmony import */ var _addons_mod_h5pactivity_pages_users_attempts_users_attempts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/mod/h5pactivity/pages/users-attempts/users-attempts */ "./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.ts");
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
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityIndexPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/userattempts/:userId',
        component: _addons_mod_h5pactivity_pages_user_attempts_user_attempts__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivityUserAttemptsPage"],
    },
    {
        path: ':courseId/:cmId/attemptresults/:attemptId',
        component: _addons_mod_h5pactivity_pages_attempt_results_attempt_results__WEBPACK_IMPORTED_MODULE_8__["AddonModH5PActivityAttemptResultsPage"],
    },
    {
        path: ':courseId/:cmId/users',
        component: _addons_mod_h5pactivity_pages_users_attempts_users_attempts__WEBPACK_IMPORTED_MODULE_9__["AddonModH5PActivityUsersAttemptsPage"],
    },
];
let AddonModH5PActivityLazyModule = class AddonModH5PActivityLazyModule {
};
AddonModH5PActivityLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["AddonModH5PActivityComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityIndexPage"],
            _addons_mod_h5pactivity_pages_user_attempts_user_attempts__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivityUserAttemptsPage"],
            _addons_mod_h5pactivity_pages_attempt_results_attempt_results__WEBPACK_IMPORTED_MODULE_8__["AddonModH5PActivityAttemptResultsPage"],
            _addons_mod_h5pactivity_pages_users_attempts_users_attempts__WEBPACK_IMPORTED_MODULE_9__["AddonModH5PActivityUsersAttemptsPage"],
        ],
    })
], AddonModH5PActivityLazyModule);



/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.scss":
/*!*******************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .core-warning-item {\n  --inner-border-width: 0px;\n}\n:host .addon-mod_h5pactivity-attempt-result-summary img {\n  width: 16px;\n  height: 16px;\n  display: inline;\n  margin-left: 0;\n  margin-right: 4px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .addon-mod_h5pactivity-attempt-result-summary img {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 4px;\n    margin-inline-end: 4px;\n  }\n}\n:host .addon-mod_h5pactivity-attempt-result-summary ion-icon,\n:host .addon-mod_h5pactivity-result-table-header ion-icon,\n:host .addon-mod_h5pactivity-result-table-row ion-icon {\n  font-size: 1.2em;\n}\n:host .addon-mod_h5pactivity-result-table-header {\n  font-weight: bold;\n}\n:host .addon-mod_h5pactivity-result-table-row.item:nth-child(even) {\n  --background: var(--light);\n}\n:host .addon-mod_h5pactivity-result-score {\n  border-top: 1px solid black;\n}\n:host-context(html.dark) .addon-mod_h5pactivity-result-table-row.item:nth-child(even) {\n  --background: var(--gray-900);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL21vZC9oNXBhY3Rpdml0eS9wYWdlcy9hdHRlbXB0LXJlc3VsdHMvYXR0ZW1wdC1yZXN1bHRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQ0VBOzs7O0VBQUE7QUE0R0E7O0VBQUE7QUM5R0E7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUErREE7Ozs7RUFBQTtBQzVESTtFQUNJLHlCQUFBO0FBbURSO0FBL0NRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VMZ1BSLGNLL09tQztFTGdQbkMsaUJLaFBzQztBQWtEMUM7QUxpTU07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRix1Qks1UDZCO0lMNlA3QixzQks3UDZCO0lMOFA3Qix1Qks5UGdDO0lMK1BoQyxzQksvUGdDO0VBMkR4QztBQUNGO0FBckRROzs7RUFDSSxnQkFBQTtBQXlEWjtBQXJESTtFQUNJLGlCQUFBO0FBdURSO0FBcERJO0VBQ0ksMEJBQUE7QUFzRFI7QUFuREk7RUFDSSwyQkFBQTtBQXFEUjtBQWhESTtFQUNJLDZCQUFBO0FBbURSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2g1cGFjdGl2aXR5L3BhZ2VzL2F0dGVtcHQtcmVzdWx0cy9hdHRlbXB0LXJlc3VsdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XHJcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcclxuXHJcbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXHJcbiAqL1xyXG5cclxuXHJcbi8vIFN0cmluZyBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gU3RyaW5nIFJlcGxhY2UgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICBAaWYgJGluZGV4IHtcclxuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XHJcbiAgLy8gZW1wdHkgYXJyYXkvbGlzdFxyXG4gICRzcGxpdC1hcnI6ICgpO1xyXG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXHJcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcclxuICAgIC8vIGdldCB0aGUgc3Vic3RyaW5nIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlciB0byB0aGUgc2VwYXJhdG9yXHJcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xyXG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XHJcbiAgICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJGl0ZW0pO1xyXG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xyXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xyXG4gICAgLy8gZmluZCBuZXcgaW5kZXggb2Ygc2VwYXJhdG9yXHJcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICB9XHJcbiAgLy8gYWRkIHRoZSByZW1haW5pbmcgc3RyaW5nIHRvIGxpc3QgKHRoZSBsYXN0IGl0ZW0pXHJcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xyXG5cclxuICBAcmV0dXJuICRzcGxpdC1hcnI7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xyXG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XHJcblxyXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xyXG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xyXG4gICAgJGVuZC1pbmRleDogc3RyLWluZGV4KCRwb3N0LCAkZW5kKTtcclxuXHJcbiAgICBAaWYgJGVuZC1pbmRleCB7XHJcbiAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRwb3N0LCAxLCAkZW5kLWluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xyXG4gIEBpZiAodHlwZS1vZigkc3RyaW5nKSA9PSBzdHJpbmcpIHtcclxuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xyXG4gICRzcGFjZXM6IHN0ci1yZXBsYWNlKCR2YWwsIFwiIFwiLCBcIiUyMFwiKTtcclxuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xyXG4gIEByZXR1cm4gJGVuY29kZWQ7XHJcbn1cclxuXHJcblxyXG4vLyBBZGQgUm9vdCBTZWxlY3RvclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxyXG4vL1xyXG4vLyBFeGFtcGxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0XCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCguZml4ZWQpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXHJcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5zaGFkb3dcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBhZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgJGFkZEhvc3RTZWxlY3Rvcikge1xyXG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xyXG5cclxuICAkbGlzdDogKCk7XHJcblxyXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCggaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGEgY2xhc3Mgb24gdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxyXG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KTpob3N0KFwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcblxyXG4gICAgICAkbmV3LWVsZW1lbnQ6ICgpO1xyXG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcclxuXHJcbiAgICAgIEBlYWNoICRlbGVtZW50IGluICRlbGVtZW50cyB7XHJcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG5cclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcganVzdCB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3RcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XHJcbiAgICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gJGxpc3Q7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcclxuICovXHJcblxyXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXHJcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcclxuICBAaWYgJGFscGhhID09IG51bGwge1xyXG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxyXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XHJcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XHJcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xyXG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcclxuXHJcbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcclxuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XHJcbiAgfVxyXG5cclxuICBAaWYgKCRhbHBoYSkge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xyXG4gIH1cclxuICBAaWYgKCRyZ2IpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xyXG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XHJcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi8vIEZvbnQgc21vb3RoaW5nXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcclxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcclxuICAka2V5czogbWFwLWtleXMoJG1hcCk7XHJcblxyXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xyXG59XHJcblxyXG5cclxuLy8gQnJlYWtwb2ludCBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxyXG4vL1xyXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XHJcbi8vXHJcbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuLy9cclxuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDU3NnB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cclxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIi1zbVwiXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1pbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcclxuLy8gICAgbWRcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xyXG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xyXG59XHJcblxyXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxyXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXHJcbi8vXHJcbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcclxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxyXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDc2Ny45OHB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxyXG4vL1xyXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXHJcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG11bHRpLWRpcigpIHtcclxuICBAY29udGVudDtcclxuXHJcbiAgLy8gJHJvb3Q6ICN7Jn07XHJcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xyXG4gIC8vICAgI3skcm9vdH0ge1xyXG4gIC8vICAgICBAY29udGVudDtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuXHJcbkBtaXhpbiBydGwoKSB7XHJcbiAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsdHIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcclxuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xyXG5cclxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcclxuICAgICRmbGlwcGVkLXVybDogJHN2ZztcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xyXG5cclxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgfSBAZWxzZSB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XHJcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xyXG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XHJcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgIHJpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgIGxlZnQ6ICRlbmQ7XHJcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xyXG4gIHRvcDogJHRvcDtcclxuICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XHJcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcclxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XHJcbiAgJG90aGVyLWRpcjogbnVsbDtcclxuXHJcbiAgQGlmICRkaXIgPT0gbHRyIHtcclxuICAgICRvdGhlci1kaXI6IHJ0bDtcclxuICB9IEBlbHNlIHtcclxuICAgICRvdGhlci1kaXI6IGx0cjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGx0cigpIHtcclxuICAgIGRpcmVjdGlvbjogJGRpcjtcclxuICB9XHJcbiAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XHJcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xyXG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XHJcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XHJcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XHJcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XHJcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xyXG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XHJcbiAgJGV4dHJhOiBudWxsO1xyXG5cclxuICAkeDogbnVsbDtcclxuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcclxuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcclxuXHJcbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XHJcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xyXG5cclxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcclxuXHJcbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcclxuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xyXG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XHJcblxyXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XHJcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIFJlc3BvbnNpdmUgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcclxuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBJdGVtIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XHJcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XHJcbn1cclxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XHJcblxyXG4vKipcclxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKi9cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XHJcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA4MCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xyXG59XHJcblxyXG4vLyBJb25pYyBDb2xvcnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXHJcbi8vIGNvbG9ycyBtYXBcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycywgJHRoZW1lKSB7XHJcbiAgICAkY29sb3ItdGhlbWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvci10aGVtZXMsICR0aGVtZSk7XHJcblxyXG4gICAgQGlmICR0aGVtZSA9PSAnZGFyaycge1xyXG4gICAgICAgICRiYXNlOiBtaXgobWFwLWdldCgkY29sb3ItdGhlbWVzLCAnbGlnaHQnKSwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKTtcclxufVxyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xyXG4gICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xyXG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XHJcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XHJcblxyXG4gICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG4gICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xyXG5cclxuICAgIC8vIEludGVybmFsIGlvbmljIHVzZSBvbmx5LlxyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcblxyXG4gICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcclxuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWZvY3VzKCkge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxyXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xyXG4gICAgJHRyYW5zaXRpb25zOiAoKTtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbn1cclxuXHJcbkBtaXhpbiBzci1vbmx5KCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxyXG4gKi9cclxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG5cclxuICAgIEBpZiAoJGVuZCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcbiAgICB9XHJcbiAgICBAaWYgKCRzdGFydCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRhcmttb2RlKCkge1xyXG4gICAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJodG1sLmRhcmtcIil9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XHJcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xyXG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ29sb3IgbWl4aW5zLlxyXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XHJcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcclxufVxyXG5cclxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XHJcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xyXG5cclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXHJcbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXHJcbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcclxufVxyXG5cclxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xyXG59XHJcblxyXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yaXRobVxyXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XHJcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xyXG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XHJcblxyXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcclxuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xyXG4gICAgJHI6IHJlZCgkY29sb3IpO1xyXG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XHJcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xyXG5cclxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcclxuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcclxuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcclxuXHJcbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XHJcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcclxuXHJcbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XHJcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXHJcbiAqL1xyXG4iLCIvKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxyXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xyXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxyXG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXHJcblxyXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XHJcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXHJcbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcclxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAgKFxyXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxyXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXHJcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcclxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxyXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcclxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxyXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXHJcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcclxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vKipcclxuICogTGF5b3V0IEJyZWFrcG9pbnRzXHJcbiAqXHJcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xyXG4gKi9cclxuXHJcbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMHB4LFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1xcmNvZGU6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xyXG5cclxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXHJcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcclxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXHJcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxyXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcclxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXHJcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeTogIzhlMjRhYSAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZTogJHJlZCAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWdyb3VwOiAkeWVsbG93ICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcjogJGJsdWUgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlOiAkZ3JlZW4gIWRlZmF1bHQ7XHJcblxyXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxyXG4gICAgY2F0ZWdvcnk6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeSxcclxuICAgIGNvdXJzZTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZSxcclxuICAgIGdyb3VwOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktZ3JvdXAsXHJcbiAgICB1c2VyOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcixcclxuICAgIHNpdGU6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlLFxyXG4pICFkZWZhdWx0O1xyXG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIC5jb3JlLXdhcm5pbmctaXRlbSB7XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkb24tbW9kX2g1cGFjdGl2aXR5LWF0dGVtcHQtcmVzdWx0LXN1bW1hcnkge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoMCwgNHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1vZF9oNXBhY3Rpdml0eS1hdHRlbXB0LXJlc3VsdC1zdW1tYXJ5LFxyXG4gICAgLmFkZG9uLW1vZF9oNXBhY3Rpdml0eS1yZXN1bHQtdGFibGUtaGVhZGVyLFxyXG4gICAgLmFkZG9uLW1vZF9oNXBhY3Rpdml0eS1yZXN1bHQtdGFibGUtcm93IHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hZGRvbi1tb2RfaDVwYWN0aXZpdHktcmVzdWx0LXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1vZF9oNXBhY3Rpdml0eS1yZXN1bHQtdGFibGUtcm93Lml0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkb24tbW9kX2g1cGFjdGl2aXR5LXJlc3VsdC1zY29yZSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KGh0bWwuZGFyaykge1xyXG4gICAgLmFkZG9uLW1vZF9oNXBhY3Rpdml0eS1yZXN1bHQtdGFibGUtcm93Lml0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWdyYXktOTAwKTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.ts":
/*!*****************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.ts ***!
  \*****************************************************************************/
/*! exports provided: AddonModH5PActivityAttemptResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityAttemptResultsPage", function() { return AddonModH5PActivityAttemptResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/h5pactivity */ "./src/addons/mod/h5pactivity/services/h5pactivity.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays results of an attempt.
 */
let AddonModH5PActivityAttemptResultsPage = class AddonModH5PActivityAttemptResultsPage {
    constructor() {
        this.loaded = false;
        this.component = _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityProvider"].COMPONENT;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_7__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.h5pActivity) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].logViewReport(this.h5pActivity.id, { attemptId: this.attemptId }));
            _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_h5pactivity_log_report_viewed',
                name: this.h5pActivity.name,
                data: { id: this.h5pActivity.id, attemptid: this.attemptId, category: 'h5pactivity' },
                url: `/mod/h5pactivity/report.php?a=${this.h5pActivity.id}&attemptid=${this.attemptId}`,
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.attemptId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('attemptId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
                return;
            }
            yield this.fetchData();
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        this.refreshData().finally(() => {
            refresher.complete();
        });
    }
    /**
     * Get quiz data and attempt data.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.h5pActivity = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].getH5PActivity(this.courseId, this.cmId);
                this.attempt = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].getAttemptResults(this.h5pActivity.id, this.attemptId, {
                    cmId: this.cmId,
                });
                yield this.fetchUserProfile();
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading attempt.');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get user profile.
     *
     * @returns Promise resolved when done.
     */
    fetchUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            try {
                this.user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(this.attempt.userid, this.courseId, true);
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @returns Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].invalidateActivityData(this.courseId),
            ];
            if (this.h5pActivity) {
                promises.push(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].invalidateAttemptResults(this.h5pActivity.id, this.attemptId));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchData();
        });
    }
};
AddonModH5PActivityAttemptResultsPage.ctorParameters = () => [];
AddonModH5PActivityAttemptResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-h5pactivity-attempt-results',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attempt-results.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./attempt-results.scss */ "./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.scss")).default]
    })
], AddonModH5PActivityAttemptResultsPage);



/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/index/index.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/index/index.ts ***!
  \*********************************************************/
/*! exports provided: AddonModH5PActivityIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityIndexPage", function() { return AddonModH5PActivityIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/index */ "./src/addons/mod/h5pactivity/components/index/index.ts");
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
 * Page that displays an H5P activity.
 */
let AddonModH5PActivityIndexPage = class AddonModH5PActivityIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    constructor() {
        super(...arguments);
        this.canLeaveSafely = false;
    }
    /**
     * @inheritdoc
     */
    canLeave() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!((_a = this.activityComponent) === null || _a === void 0 ? void 0 : _a.playing) || this.activityComponent.isOpeningPage || this.activityComponent.saveStateEnabled) {
                return true;
            }
            if (!this.canLeaveSafely) {
                try {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.confirmleaveunknownchanges'));
                    return true;
                }
                catch (_b) {
                    return false;
                }
            }
            return true;
        });
    }
    /**
     * Set if this activity can be leaved safely (withow showing warning modal) if activity is finished
     * 10 seconds before.
     *
     * @param isDone the H5P activity is done.
     */
    setCanleaveSafely(isDone) {
        this.canLeaveSafely = isDone;
        if (this.remainingTimeout) {
            clearTimeout(this.remainingTimeout);
        }
        // When user finish an activity, he have 10 seconds to leave safely (without show alert).
        this.remainingTimeout = window.setTimeout(() => {
            this.canLeaveSafely = false;
        }, 10000);
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        if (this.remainingTimeout) {
            clearTimeout(this.remainingTimeout);
        }
    }
};
AddonModH5PActivityIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index__WEBPACK_IMPORTED_MODULE_5__["AddonModH5PActivityIndexComponent"],] }]
};
AddonModH5PActivityIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-h5pactivity-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/index/index.html")).default,
    })
], AddonModH5PActivityIndexPage);



/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.scss":
/*!***************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_h5pactivity-table-header {\n  font-weight: bold;\n}\n:host .addon-mod_h5pactivity-table-header ion-col {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host .addon-mod_h5pactivity-table-row .addon-mod_h5pactivity-table-success-col {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2g1cGFjdGl2aXR5L3BhZ2VzL3VzZXItYXR0ZW1wdHMvdXNlci1hdHRlbXB0cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUFBUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQUFaO0FBSUk7RUFDSSxnQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2g1cGFjdGl2aXR5L3BhZ2VzL3VzZXItYXR0ZW1wdHMvdXNlci1hdHRlbXB0cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmFkZG9uLW1vZF9oNXBhY3Rpdml0eS10YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hZGRvbi1tb2RfaDVwYWN0aXZpdHktdGFibGUtcm93IC5hZGRvbi1tb2RfaDVwYWN0aXZpdHktdGFibGUtc3VjY2Vzcy1jb2wge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.ts":
/*!*************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.ts ***!
  \*************************************************************************/
/*! exports provided: AddonModH5PActivityUserAttemptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUserAttemptsPage", function() { return AddonModH5PActivityUserAttemptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/h5pactivity */ "./src/addons/mod/h5pactivity/services/h5pactivity.ts");
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
 * Page that displays user attempts of a certain user.
 */
let AddonModH5PActivityUserAttemptsPage = class AddonModH5PActivityUserAttemptsPage {
    constructor() {
        this.loaded = false;
        this.isCurrentUser = false;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_8__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.h5pActivity) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].logViewReport(this.h5pActivity.id, { userId: this.userId }));
            _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_h5pactivity_log_report_viewed',
                name: this.h5pActivity.name,
                data: { id: this.h5pActivity.id, userid: this.userId, category: 'h5pactivity' },
                url: `/mod/h5pactivity/report.php?a=${this.h5pActivity.id}&userid=${this.userId}`,
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('userId') || _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
                return;
            }
            this.isCurrentUser = this.userId == _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
            yield this.fetchData();
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        this.refreshData().finally(() => {
            refresher.complete();
        });
    }
    /**
     * Get quiz data and attempt data.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.h5pActivity = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].getH5PActivity(this.courseId, this.cmId);
                yield Promise.all([
                    this.fetchAttempts(),
                    this.fetchUserProfile(),
                ]);
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading attempts.');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get attempts.
     *
     * @returns Promise resolved when done.
     */
    fetchAttempts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.h5pActivity) {
                return;
            }
            this.attemptsData = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].getUserAttempts(this.h5pActivity.id, {
                cmId: this.cmId,
                userId: this.userId,
            });
        });
    }
    /**
     * Get user profile.
     *
     * @returns Promise resolved when done.
     */
    fetchUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(this.userId, this.courseId, true);
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @returns Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                _services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].invalidateActivityData(this.courseId),
            ];
            if (this.h5pActivity) {
                promises.push(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_7__["AddonModH5PActivity"].invalidateUserAttempts(this.h5pActivity.id, this.userId));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchData();
        });
    }
    /**
     * Open the page to view an attempt.
     *
     * @param attempt Attempt.
     */
    openAttempt(attempt) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].navigate(`../../attemptresults/${attempt.id}`);
    }
};
AddonModH5PActivityUserAttemptsPage.ctorParameters = () => [];
AddonModH5PActivityUserAttemptsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-h5pactivity-user-attempts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-attempts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-attempts.scss */ "./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.scss")).default]
    })
], AddonModH5PActivityUserAttemptsPage);



/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.scss":
/*!*****************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_h5pactivity-table-header ion-col {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2g1cGFjdGl2aXR5L3BhZ2VzL3VzZXJzLWF0dGVtcHRzL3VzZXJzLWF0dGVtcHRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9tb2QvaDVwYWN0aXZpdHkvcGFnZXMvdXNlcnMtYXR0ZW1wdHMvdXNlcnMtYXR0ZW1wdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5hZGRvbi1tb2RfaDVwYWN0aXZpdHktdGFibGUtaGVhZGVyIGlvbi1jb2wge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.ts":
/*!***************************************************************************!*\
  !*** ./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.ts ***!
  \***************************************************************************/
/*! exports provided: AddonModH5PActivityUsersAttemptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUsersAttemptsPage", function() { return AddonModH5PActivityUsersAttemptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/h5pactivity */ "./src/addons/mod/h5pactivity/services/h5pactivity.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays all users that can attempt an H5P activity.
 */
let AddonModH5PActivityUsersAttemptsPage = class AddonModH5PActivityUsersAttemptsPage {
    constructor() {
        this.loaded = false;
        this.users = [];
        this.fetchMoreUsersFailed = false;
        this.canLoadMore = false;
        this.page = 0;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_7__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.h5pActivity) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].logViewReport(this.h5pActivity.id));
            _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'mod_h5pactivity_log_report_viewed',
                name: this.h5pActivity.name,
                data: { id: this.h5pActivity.id, category: 'h5pactivity' },
                url: `/mod/h5pactivity/report.php?a=${this.h5pActivity.id}`,
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
                return;
            }
            this.fetchData();
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        this.refreshData().finally(() => {
            refresher.complete();
        });
    }
    /**
     * Get quiz data and attempt data.
     *
     * @param refresh Whether user is refreshing data.
     * @returns Promise resolved when done.
     */
    fetchData(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.h5pActivity = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].getH5PActivity(this.courseId, this.cmId);
                yield Promise.all([
                    this.fetchUsers(refresh),
                ]);
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading attempts.');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get users.
     *
     * @param refresh Whether user is refreshing data.
     * @returns Promise resolved when done.
     */
    fetchUsers(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.h5pActivity) {
                return;
            }
            if (refresh) {
                this.page = 0;
            }
            const result = yield _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].getUsersAttempts(this.h5pActivity.id, {
                cmId: this.cmId,
                page: this.page,
            });
            const formattedUsers = yield this.formatUsers(this.h5pActivity, result.users);
            if (this.page === 0) {
                this.users = formattedUsers;
            }
            else {
                this.users = this.users.concat(formattedUsers);
            }
            this.canLoadMore = result.canLoadMore;
            this.page++;
        });
    }
    /**
     * Format users data.
     *
     * @param h5pActivity Activity data.
     * @param users Users to format.
     * @returns Formatted users.
     */
    formatUsers(h5pActivity, users) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Promise.all(users.map((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                user.user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(user.userid, this.courseId, true);
                // Calculate the score of the user.
                if (h5pActivity.grademethod === _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityProvider"].GRADEMANUAL) {
                    // No score.
                }
                else if (h5pActivity.grademethod === _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivityProvider"].GRADEAVERAGEATTEMPT) {
                    if (user.attempts.length) {
                        // Calculate the average.
                        const sumScores = user.attempts.reduce((sumScores, attempt) => sumScores + attempt.rawscore * 100 / attempt.maxscore, 0);
                        user.score = Math.round(sumScores / user.attempts.length);
                    }
                }
                else if ((_a = user.scored) === null || _a === void 0 ? void 0 : _a.attempts[0]) {
                    // Only a single attempt used to calculate the grade. Use it.
                    user.score = Math.round(user.scored.attempts[0].rawscore * 100 / user.scored.attempts[0].maxscore);
                }
                return user;
            })));
        });
    }
    /**
     * Load a new batch of users.
     *
     * @param complete Completion callback.
     */
    fetchMoreUsers(complete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchUsers(false);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading more users');
                this.fetchMoreUsersFailed = true;
            }
            complete();
        });
    }
    /**
     * Refresh the data.
     *
     * @returns Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                _services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].invalidateActivityData(this.courseId),
            ];
            if (this.h5pActivity) {
                promises.push(_services_h5pactivity__WEBPACK_IMPORTED_MODULE_6__["AddonModH5PActivity"].invalidateAllUsersAttempts(this.h5pActivity.id));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchData(true);
        });
    }
    /**
     * Open the page to view a user attempts.
     *
     * @param user User to open.
     */
    openUser(user) {
        if (!user.attempts.length) {
            return;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].navigate(`../userattempts/${user.userid}`);
    }
};
AddonModH5PActivityUsersAttemptsPage.ctorParameters = () => [];
AddonModH5PActivityUsersAttemptsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-h5pactivity-users-attempts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-attempts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-attempts.scss */ "./src/addons/mod/h5pactivity/pages/users-attempts/users-attempts.scss")).default]
    })
], AddonModH5PActivityUsersAttemptsPage);



/***/ })

}]);
//# sourceMappingURL=h5pactivity-lazy-module.js.map