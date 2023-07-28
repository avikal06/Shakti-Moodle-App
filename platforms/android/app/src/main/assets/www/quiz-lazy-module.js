(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/attempt/attempt.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/attempt/attempt.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"quiz\" [text]=\"quiz.name\" contextLevel=\"module\" [contextInstanceId]=\"quiz.coursemodule\"\r\n                    [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list *ngIf=\"attempt\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_quiz.attemptnumber' | translate }}</p>\r\n                    <p *ngIf=\"attempt.preview\">{{ 'addon.mod_quiz.preview' | translate }}</p>\r\n                    <p *ngIf=\"!attempt.preview\">{{ attempt.attempt }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_quiz.attemptstate' | translate }}</p>\r\n                    <p *ngFor=\"let sentence of attempt.readableState\">{{ sentence }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"quiz!.showMarkColumn && attempt.readableMark !== ''\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_quiz.marks' | translate }} / {{ quiz!.sumGradesFormatted }}</p>\r\n                    <p>{{ attempt.readableMark }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"quiz!.showGradeColumn && attempt.readableGrade !== ''\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_quiz.grade' | translate }} / {{ quiz!.gradeFormatted }}</p>\r\n                    <p>{{ attempt.readableGrade }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"quiz!.showFeedbackColumn && feedback\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_quiz.feedback' | translate }}</p>\r\n                    <p>\r\n                        <core-format-text [component]=\"component\" [componentId]=\"componentId\" [text]=\"feedback\" contextLevel=\"module\"\r\n                            [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap core-danger-item\" *ngIf=\"!showReviewColumn\">\r\n                <ion-label>\r\n                    <p>{{ 'addon.mod_quiz.noreviewattempt' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <div collapsible-footer appearOnBottom *ngIf=\"loaded && attempt && showReviewColumn && attempt.finished\" slot=\"fixed\">\r\n            <div class=\"list-item-limited-width\">\r\n                <ion-button class=\"ion-margin ion-text-wrap\" expand=\"block\" (click)=\"reviewAttempt()\">\r\n                    <ion-icon name=\"fas-magnifying-glass\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'addon.mod_quiz.review' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-quiz-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-quiz-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text *ngIf=\"quiz\" [text]=\"quiz.name\" contextLevel=\"module\" [contextInstanceId]=\"quiz.coursemodule\"\r\n                    [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" id=\"addon-mod_quiz-connection-error-button\" [hidden]=\"!autoSaveError\"\r\n                (click)=\"showConnectionError($event)\" [attr.aria-label]=\"'addon.mod_quiz.connectionerror' | translate\"\r\n                aria-haspopup=\"dialog\">\r\n                <ion-icon name=\"fas-circle-exclamation\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button *ngIf=\"navigation.length\" [attr.aria-label]=\"'addon.mod_quiz.opentoc' | translate\" (click)=\"openNavigation()\">\r\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <core-timer *ngIf=\"loaded && endTime && questions.length && !quizAborted && !showSummary\" [endTime]=\"endTime\" (finished)=\"timeUp()\"\r\n        [timerText]=\"'addon.mod_quiz.timeleft' | translate\" [hiddable]=\"true\">\r\n    </core-timer>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\" class=\"has-spacer\">\r\n        <!-- Button to start attempting. -->\r\n        <ion-button *ngIf=\"!attempt\" expand=\"block\" class=\"ion-margin\" (click)=\"start()\">\r\n            {{ 'addon.mod_quiz.startattempt' | translate }}\r\n        </ion-button>\r\n\r\n        <!-- Questions -->\r\n        <form name=\"addon-mod_quiz-player-form\" *ngIf=\"questions.length && !quizAborted && !showSummary\" #quizForm>\r\n            <div *ngFor=\"let question of questions\">\r\n                <ion-card id=\"addon-mod_quiz-question-{{question.slot}}\">\r\n                    <!-- \"Header\" of the question. -->\r\n                    <ion-item-divider>\r\n                        <ion-label class=\"ion-text-wrap\">\r\n                            <h2 *ngIf=\"question.type !== 'description' && question.questionnumber\" class=\"inline\">\r\n                                {{ 'core.question.questionno' | translate:{$a: question.questionnumber} }}\r\n                            </h2>\r\n                            <h2 *ngIf=\"question.type === 'description' || !question.questionnumber\" class=\"inline\">\r\n                                {{ 'core.question.information' | translate }}\r\n                            </h2>\r\n                        </ion-label>\r\n                        <div *ngIf=\"question.status || question.readableMark\" slot=\"end\"\r\n                            class=\"ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note\">\r\n                            <p *ngIf=\"question.status\" class=\"block\">{{question.status}}</p>\r\n                            <p *ngIf=\"question.readableMark\" [innerHTML]=\"question.readableMark\"></p>\r\n                        </div>\r\n                    </ion-item-divider>\r\n\r\n                    <!-- Body of the question. -->\r\n                    <core-question class=\"ion-text-wrap\" [question]=\"question\" [component]=\"component\" [componentId]=\"cmId\"\r\n                        [attemptId]=\"attempt!.id\" [usageId]=\"attempt!.uniqueid\" [offlineEnabled]=\"offline\" contextLevel=\"module\"\r\n                        [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [preferredBehaviour]=\"quiz!.preferredbehaviour\" [review]=\"false\"\r\n                        (onAbort)=\"abortQuiz()\" (buttonClicked)=\"behaviourButtonClicked($event)\">\r\n                    </core-question>\r\n                </ion-card>\r\n            </div>\r\n        </form>\r\n\r\n        <!-- Go to next or previous page. -->\r\n        <ion-row *ngIf=\"questions.length && !quizAborted && !showSummary\" class=\"spacer-top\">\r\n            <ion-col *ngIf=\"previousPage >= 0\">\r\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"changePage(previousPage)\" class=\"ion-text-wrap\">\r\n                    <ion-icon name=\"fas-chevron-left\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    {{ 'core.previous' | translate }}\r\n                </ion-button>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"nextPage >= -1\">\r\n                <ion-button expand=\"block\" (click)=\"changePage(nextPage)\" class=\"ion-text-wrap\" *ngIf=\"nextPage > 0\">\r\n                    {{ 'core.next' | translate }}\r\n                    <ion-icon name=\"fas-chevron-right\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button expand=\"block\" (click)=\"changePage(nextPage)\" class=\"ion-text-wrap\" *ngIf=\"nextPage == -1\">\r\n                    {{ 'core.submit' | translate }}\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- Summary -->\r\n        <ion-card *ngIf=\"!quizAborted && showSummary && summaryQuestions.length\" class=\"addon-mod_quiz-table\">\r\n            <ion-card-header class=\"ion-text-wrap\">\r\n                <ion-card-title>{{ 'addon.mod_quiz.summaryofattempt' | translate }}</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <!-- \"Header\" of the summary table. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-down\">\r\n                            <strong>{{ 'addon.mod_quiz.question' | translate }}</strong>\r\n                        </ion-col>\r\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-up\"><strong>#</strong></ion-col>\r\n                        <ion-col size=\"9\" class=\"ion-text-center\">\r\n                            <strong>{{ 'addon.mod_quiz.status' | translate }}</strong>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- List of questions of the summary table. -->\r\n            <ng-container *ngFor=\"let question of summaryQuestions\">\r\n                <ion-item *ngIf=\"question.type !== 'description' && question.questionnumber\"\r\n                    (click)=\"changePage(question.page, false, question.slot)\"\r\n                    [attr.aria-label]=\"'core.question.questionno' | translate:{$a: question.questionnumber}\"\r\n                    [detail]=\"!isSequential && canReturn\" [button]=\"!isSequential && canReturn\">\r\n                    <ion-label>\r\n                        <ion-row class=\"ion-align-items-center\">\r\n                            <ion-col size=\"3\" class=\"ion-text-center ion-text-wrap\">{{ question.questionnumber }}</ion-col>\r\n                            <ion-col size=\"9\" class=\"ion-text-center ion-text-wrap\">{{ question.status }}</ion-col>\r\n                        </ion-row>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Due date warning. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"dueDateWarning\">\r\n                <ion-label>{{ dueDateWarning }}</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Time left (if quiz is timed). -->\r\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\" [timerText]=\"'addon.mod_quiz.timeleft' | translate\">\r\n            </core-timer>\r\n\r\n            <!-- List of messages explaining why the quiz cannot be submitted. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"preventSubmitMessages.length\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.mod_quiz.cannotsubmitquizdueto' | translate }}</p>\r\n                    <p *ngFor=\"let message of preventSubmitMessages\">{{message}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <!-- Quiz aborted -->\r\n        <ion-card *ngIf=\"attempt && ((!questions.length && !showSummary) || quizAborted)\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>{{ 'addon.mod_quiz.errorparsequestions' | translate }}</ion-label>\r\n            </ion-item>\r\n            <ion-button *ngIf=\"canReturn\" expand=\"block\" class=\"ion-margin ion-text-wrap\" fill=\"outline\"\r\n                (click)=\"changePage(attempt!.currentpage!)\">\r\n                {{ 'addon.mod_quiz.returnattempt' | translate }}\r\n            </ion-button>\r\n        </ion-card>\r\n\r\n        <div collapsible-footer appearOnBottom *ngIf=\"!quizAborted && showSummary && summaryQuestions.length && loaded\" slot=\"fixed\">\r\n            <div class=\"list-item-limited-width\">\r\n                <ion-button *ngIf=\"preventSubmitMessages.length\" expand=\"block\" class=\"ion-margin ion-text-wrap\" [href]=\"moduleUrl\"\r\n                    core-link [showBrowserWarning]=\"false\">\r\n                    {{ 'core.openinbrowser' | translate }}\r\n                    <ion-icon name=\"fas-up-right-from-square\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n\r\n                <!-- Button to submit the quiz. -->\r\n                <ion-button *ngIf=\"!attempt!.finishedOffline && !preventSubmitMessages.length\" expand=\"block\"\r\n                    class=\"ion-margin ion-text-wrap\" (click)=\"finishAttempt(true)\">\r\n                    {{ 'addon.mod_quiz.submitallandfinish' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/review/review.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/review/review.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_quiz.review' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"navigation.length\" [attr.aria-label]=\"'addon.mod_quiz.opentoc' | translate\"\r\n                (click)=\"openNavigation()\" aria-haspopup=\"true\">\r\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n\r\n        <!-- Review summary -->\r\n        <ion-card *ngIf=\"attempt\">\r\n            <ion-list>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_quiz.startedon' | translate }}</p>\r\n                        <p>{{ attempt.timestart! * 1000 | coreFormatDate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_quiz.attemptstate' | translate }}</p>\r\n                        <p>{{ readableState }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"showCompleted\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_quiz.completedon' | translate }}</p>\r\n                        <p>{{ attempt.timefinish! * 1000 | coreFormatDate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"timeTaken\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_quiz.timetaken' | translate }}</p>\r\n                        <p>{{ timeTaken }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"overTime\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_quiz.overdue' | translate }}</p>\r\n                        <p>{{ overTime }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"readableMark\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_quiz.marks' | translate }}</p>\r\n                        <p>{{ readableMark }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"readableGrade\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_quiz.grade' | translate }}</p>\r\n                        <p>{{ readableGrade }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let data of additionalData\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ data.title }}</p>\r\n                        <core-format-text [component]=\"component\" [componentId]=\"cmId\" [text]=\"data.content\" contextLevel=\"module\"\r\n                            [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-card>\r\n\r\n        <!-- Questions -->\r\n        <div *ngIf=\"attempt && questions.length\">\r\n\r\n            <!-- Questions. -->\r\n            <div *ngFor=\"let question of questions\">\r\n                <ion-card id=\"addon-mod_quiz-question-{{question.slot}}\">\r\n                    <!-- \"Header\" of the question. -->\r\n                    <ion-item-divider>\r\n                        <ion-label class=\"ion-text-wrap\">\r\n                            <h2 *ngIf=\"question.type !== 'description' && question.questionnumber\">\r\n                                {{ 'core.question.questionno' | translate:{$a: question.questionnumber} }}\r\n                            </h2>\r\n                            <h2 *ngIf=\"question.type === 'description' || !question.questionnumber\">\r\n                                {{ 'core.question.information' | translate }}\r\n                            </h2>\r\n                        </ion-label>\r\n                        <div class=\"ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note\" slot=\"end\"\r\n                            *ngIf=\"question.status || question.readableMark\">\r\n                            <p *ngIf=\"question.status\">{{question.status}}</p>\r\n                            <p *ngIf=\"question.readableMark\" [innerHTML]=\"question.readableMark\"></p>\r\n                        </div>\r\n                    </ion-item-divider>\r\n\r\n                    <!-- Body of the question. -->\r\n                    <core-question class=\"ion-text-wrap\" [question]=\"question\" [component]=\"component\" [componentId]=\"cmId\"\r\n                        [attemptId]=\"attempt.id\" [usageId]=\"attempt.uniqueid\" [offlineEnabled]=\"false\" contextLevel=\"module\"\r\n                        [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" [review]=\"true\" [preferredBehaviour]=\"quiz?.preferredbehaviour\">\r\n                    </core-question>\r\n                </ion-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div collapsible-footer appearOnBottom *ngIf=\"loaded && numPages > 1\" slot=\"fixed\">\r\n            <ion-row class=\"ion-justify-content-between ion-align-items-center ion-no-padding ion-wrap\">\r\n                <ion-col class=\"ion-text-start ion-no-padding core-navigation-arrow\" size=\"auto\" *ngIf=\"!showAll\">\r\n                    <ion-button [disabled]=\"previousPage < 0\" fill=\"clear\" [attr.aria-label]=\"'core.previous' | translate\"\r\n                        (click)=\"changePage(previousPage)\">\r\n                        <ion-icon name=\"fas-chevron-left\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-center\">\r\n                    <!-- In review we can toggle between all questions in same page or one page at a time. -->\r\n                    <ion-button class=\"ion-text-wrap\" *ngIf=\"numPages > 1\" (click)=\"switchMode()\" fill=\"outline\">\r\n                        <span *ngIf=\"!showAll\">{{ 'addon.mod_quiz.showall' | translate }}</span>\r\n                        <span *ngIf=\"showAll\">{{ 'addon.mod_quiz.showeachpage' | translate }}</span>\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col class=\"ion-text-end ion-no-padding core-navigation-arrow\" size=\"auto\" *ngIf=\"!showAll\">\r\n                    <ion-button [disabled]=\"nextPage >= numPages\" fill=\"clear\" [attr.aria-label]=\"'core.next' | translate\"\r\n                        (click)=\"changePage(nextPage)\">\r\n                        <ion-icon name=\"fas-chevron-right\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/quiz/classes/auto-save.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/quiz/classes/auto-save.ts ***!
  \**************************************************/
/*! exports provided: AddonModQuizAutoSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAutoSave", function() { return AddonModQuizAutoSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/connection-error/connection-error */ "./src/addons/mod/quiz/components/connection-error/connection-error.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
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
 * Class to support auto-save in quiz. Every certain seconds, it will check if there are changes in the current page answers
 * and, if so, it will save them automatically.
 */
class AddonModQuizAutoSave {
    /**
     * Constructor.
     *
     * @param formName Name of the form where the answers are stored.
     * @param buttonSelector Selector to find the button to show the connection error.
     */
    constructor(formName, buttonSelector) {
        this.formName = formName;
        this.buttonSelector = buttonSelector;
        this.CHECK_CHANGES_INTERVAL = 5000;
        this.popoverShown = false; // Whether the popover is shown.
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_3__["CoreLogger"].getInstance('AddonModQuizAutoSave');
        // Create the observable to notify if an error happened.
        this.errorObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     * Cancel a pending auto save.
     */
    cancelAutoSave() {
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = undefined;
    }
    /**
     * Check if the answers have changed in a page.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    checkChanges(quiz, attempt, preflightData, offline) {
        if (this.autoSaveTimeout) {
            // We already have an auto save pending, no need to check changes.
            return;
        }
        const answers = this.getAnswers();
        if (!this.previousAnswers) {
            // Previous answers isn't set, set it now.
            this.previousAnswers = answers;
            return;
        }
        // Check if answers have changed.
        let equal = true;
        for (const name in answers) {
            if (this.previousAnswers[name] != answers[name]) {
                equal = false;
                break;
            }
        }
        if (!equal) {
            this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
        }
        this.previousAnswers = answers;
    }
    /**
     * Get answers from a form.
     *
     * @returns Answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].getAnswersFromForm(document.forms[this.formName]);
    }
    /**
     * Hide the auto save error.
     */
    hideAutoSaveError() {
        var _a;
        this.errorObservable.next(false);
        (_a = this.popover) === null || _a === void 0 ? void 0 : _a.dismiss();
    }
    /**
     * Returns an observable that will notify when an error happens or stops.
     * It will send true when there's an error, and false when the error has been ammended.
     *
     * @returns Observable.
     */
    onError() {
        return this.errorObservable;
    }
    /**
     * Schedule an auto save process if it's not scheduled already.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    setAutoSaveTimer(quiz, attempt, preflightData, offline) {
        // Don't schedule if already shceduled or quiz is almost closed.
        if (!quiz.autosaveperiod || this.autoSaveTimeout || _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].isAttemptTimeNearlyOver(quiz, attempt)) {
            return;
        }
        // Schedule save.
        this.autoSaveTimeout = window.setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const answers = this.getAnswers();
            this.cancelAutoSave();
            this.previousAnswers = answers; // Update previous answers to match what we're sending to the server.
            try {
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].saveAttempt(quiz, attempt, answers, preflightData, offline);
                // Save successful, we can hide the connection error if it was shown.
                this.hideAutoSaveError();
            }
            catch (error) {
                // Error auto-saving. Show error and set timer again.
                this.logger.warn('Error auto-saving data.', error);
                // If there was no error already, show the error message.
                if (!this.errorObservable.getValue()) {
                    this.errorObservable.next(true);
                    this.showAutoSaveError();
                }
                // Try again.
                this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
            }
        }), quiz.autosaveperiod * 1000);
    }
    /**
     * Show an error popover due to an auto save error.
     */
    showAutoSaveError(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't show popover if it was already shown.
            if (this.popoverShown) {
                return;
            }
            const event = ev || {
                // Cannot use new Event() because event's target property is readonly
                target: document.querySelector(this.buttonSelector),
                stopPropagation: () => { },
                preventDefault: () => { },
            };
            this.popoverShown = true;
            this.popover = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].openPopover({
                component: _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizConnectionErrorComponent"],
                event: event,
            });
            this.popoverShown = false;
        });
    }
    /**
     * Start a process to periodically check changes in answers.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    startCheckChangesProcess(quiz, attempt, preflightData, offline) {
        if (this.checkChangesInterval || !quiz.autosaveperiod) {
            // We already have the interval in place or the quiz has autosave disabled.
            return;
        }
        this.previousAnswers = undefined;
        // Load initial answers in 2.5 seconds so the first check interval finds them already loaded.
        this.loadPreviousAnswersTimeout = window.setTimeout(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, 2500);
        // Check changes every certain time.
        this.checkChangesInterval = window.setInterval(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, this.CHECK_CHANGES_INTERVAL);
    }
    /**
     * Stops the periodical check for changes.
     */
    stopCheckChangesProcess() {
        clearTimeout(this.loadPreviousAnswersTimeout);
        clearInterval(this.checkChangesInterval);
        this.loadPreviousAnswersTimeout = undefined;
        this.checkChangesInterval = undefined;
    }
}


/***/ }),

/***/ "./src/addons/mod/quiz/pages/attempt/attempt.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/attempt/attempt.ts ***!
  \******************************************************/
/*! exports provided: AddonModQuizAttemptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAttemptPage", function() { return AddonModQuizAttemptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_utils_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/utils/types */ "./src/core/utils/types.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
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
 * Page that displays some summary data about an attempt.
 */
let AddonModQuizAttemptPage = class AddonModQuizAttemptPage {
    constructor() {
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.loaded = false; // Whether data has been loaded.
        this.showReviewColumn = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.attemptId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('attemptId');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
            return;
        }
        this.fetchQuizData().finally(() => {
            this.loaded = true;
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
    fetchQuizData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
                this.componentId = this.quiz.coursemodule;
                // Load attempt data.
                const [options, accessInfo, attempt] = yield Promise.all([
                    _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].getCombinedReviewOptions(this.quiz.id, { cmId: this.quiz.coursemodule }),
                    this.fetchAccessInfo(this.quiz),
                    this.fetchAttempt(this.quiz.id),
                ]);
                // Set calculated data.
                this.showReviewColumn = accessInfo.canreviewmyattempts;
                _services_quiz_helper__WEBPACK_IMPORTED_MODULE_9__["AddonModQuizHelper"].setQuizCalculatedData(this.quiz, options);
                this.attempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_9__["AddonModQuizHelper"].setAttemptCalculatedData(this.quiz, attempt, false, undefined, true);
                // Check if the feedback should be displayed.
                const grade = Number(this.attempt.rescaledGrade);
                if (this.quiz.showFeedbackColumn && _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].isAttemptFinished(this.attempt.state) &&
                    options.someoptions.overallfeedback && Object(_core_utils_types__WEBPACK_IMPORTED_MODULE_1__["isSafeNumber"])(grade)) {
                    // Feedback should be displayed, get the feedback for the grade.
                    const response = yield _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].getFeedbackForGrade(this.quiz.id, grade, {
                        cmId: this.quiz.coursemodule,
                    });
                    this.feedback = response.feedbacktext;
                }
                else {
                    delete this.feedback;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetattempt', true);
            }
        });
    }
    /**
     * Get the attempt.
     *
     * @param quizId Quiz ID.
     * @returns Promise resolved when done.
     */
    fetchAttempt(quizId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get all the attempts and search the one we want.
            const attempts = yield _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].getUserAttempts(quizId, { cmId: this.cmId });
            const attempt = attempts.find(attempt => attempt.id == this.attemptId);
            if (!attempt) {
                // Attempt not found, error.
                this.attempt = undefined;
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.mod_quiz.errorgetattempt'));
            }
            return attempt;
        });
    }
    /**
     * Get the access info.
     *
     * @param quiz Quiz instance.
     * @returns Promise resolved when done.
     */
    fetchAccessInfo(quiz) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const accessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].getQuizAccessInformation(quiz.id, { cmId: this.cmId });
            if (!accessInfo.canreviewmyattempts) {
                return accessInfo;
            }
            // Check if the user can review the attempt.
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].invalidateAttemptReviewForPage(this.attemptId, -1));
            try {
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].getAttemptReview(this.attemptId, { page: -1, cmId: quiz.coursemodule });
            }
            catch (_a) {
                // Error getting the review, assume the user cannot review the attempt.
                accessInfo.canreviewmyattempts = false;
            }
            return accessInfo;
        });
    }
    /**
     * Refresh the data.
     *
     * @returns Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].invalidateQuizData(this.courseId));
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].invalidateAttemptReview(this.attemptId));
            if (this.quiz) {
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].invalidateUserAttemptsForUser(this.quiz.id));
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].invalidateQuizAccessInformation(this.quiz.id));
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].invalidateCombinedReviewOptionsForUser(this.quiz.id));
                if (this.attempt && this.feedback !== undefined) {
                    promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_8__["AddonModQuiz"].invalidateFeedback(this.quiz.id));
                }
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchQuizData();
        });
    }
    /**
     * Go to the page to review the attempt.
     *
     * @returns Promise resolved when done.
     */
    reviewAttempt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigate(`../../review/${this.attempt.id}`);
        });
    }
};
AddonModQuizAttemptPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-quiz-attempt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attempt.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/attempt/attempt.html")).default,
    })
], AddonModQuizAttemptPage);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/index/index.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/quiz/pages/index/index.ts ***!
  \**************************************************/
/*! exports provided: AddonModQuizIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizIndexPage", function() { return AddonModQuizIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/quiz/components/index/index.ts");
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
 * Page that displays the quiz entry page.
 */
let AddonModQuizIndexPage = class AddonModQuizIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModQuizIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModQuizIndexComponent"],] }]
};
AddonModQuizIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/index/index.html")).default,
    })
], AddonModQuizIndexPage);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-mod_quiz-question-note p {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n:host core-timer.core-timer-timeleft-0 {\n  --timer-background: #ca3120;\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-1 {\n  --timer-background: rgba(202, 49, 32, 0.9333333333);\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-2 {\n  --timer-background: rgba(202, 49, 32, 0.8666666667);\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-3 {\n  --timer-background: rgba(202, 49, 32, 0.8);\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-4 {\n  --timer-background: rgba(202, 49, 32, 0.7333333333);\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-5 {\n  --timer-background: rgba(202, 49, 32, 0.6666666667);\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-6 {\n  --timer-background: rgba(202, 49, 32, 0.6);\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-7 {\n  --timer-background: rgba(202, 49, 32, 0.5333333333);\n  --timer-text-color: var(--white);\n}\n:host core-timer.core-timer-timeleft-8 {\n  --timer-background: rgba(202, 49, 32, 0.4666666667);\n}\n:host core-timer.core-timer-timeleft-9 {\n  --timer-background: rgba(202, 49, 32, 0.4);\n}\n:host core-timer.core-timer-timeleft-10 {\n  --timer-background: rgba(202, 49, 32, 0.3333333333);\n}\n:host core-timer.core-timer-timeleft-11 {\n  --timer-background: rgba(202, 49, 32, 0.2666666667);\n}\n:host core-timer.core-timer-timeleft-12 {\n  --timer-background: rgba(202, 49, 32, 0.2);\n}\n:host core-timer.core-timer-timeleft-13 {\n  --timer-background: rgba(202, 49, 32, 0.1333333333);\n}\n:host core-timer.core-timer-timeleft-14 {\n  --timer-background: rgba(202, 49, 32, 0.0666666667);\n}\n:host core-timer.core-timer-timeleft-15 {\n  --timer-background: rgba(202, 49, 32, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL21vZC9xdWl6L3BhZ2VzL3BsYXllci9wbGF5ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQTRHQTs7RUFBQTtBQzlHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDekRJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBZ0RSO0FBMUNZO0VBRUksMkJBQUE7RUFFSSxnQ0FBQTtBQTBDcEI7QUE5Q1k7RUFFSSxtREFBQTtFQUVJLGdDQUFBO0FBOENwQjtBQWxEWTtFQUVJLG1EQUFBO0VBRUksZ0NBQUE7QUFrRHBCO0FBdERZO0VBRUksMENBQUE7RUFFSSxnQ0FBQTtBQXNEcEI7QUExRFk7RUFFSSxtREFBQTtFQUVJLGdDQUFBO0FBMERwQjtBQTlEWTtFQUVJLG1EQUFBO0VBRUksZ0NBQUE7QUE4RHBCO0FBbEVZO0VBRUksMENBQUE7RUFFSSxnQ0FBQTtBQWtFcEI7QUF0RVk7RUFFSSxtREFBQTtFQUVJLGdDQUFBO0FBc0VwQjtBQTFFWTtFQUVJLG1EQUFBO0FBMkVoQjtBQTdFWTtFQUVJLDBDQUFBO0FBOEVoQjtBQWhGWTtFQUVJLG1EQUFBO0FBaUZoQjtBQW5GWTtFQUVJLG1EQUFBO0FBb0ZoQjtBQXRGWTtFQUVJLDBDQUFBO0FBdUZoQjtBQXpGWTtFQUVJLG1EQUFBO0FBMEZoQjtBQTVGWTtFQUVJLG1EQUFBO0FBNkZoQjtBQS9GWTtFQUVJLHdDQUFBO0FBZ0doQiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9xdWl6L3BhZ2VzL3BsYXllci9wbGF5ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XHJcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcclxuXHJcbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXHJcbiAqL1xyXG5cclxuXHJcbi8vIFN0cmluZyBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gU3RyaW5nIFJlcGxhY2UgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICBAaWYgJGluZGV4IHtcclxuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XHJcbiAgLy8gZW1wdHkgYXJyYXkvbGlzdFxyXG4gICRzcGxpdC1hcnI6ICgpO1xyXG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXHJcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcclxuICAgIC8vIGdldCB0aGUgc3Vic3RyaW5nIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlciB0byB0aGUgc2VwYXJhdG9yXHJcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xyXG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XHJcbiAgICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJGl0ZW0pO1xyXG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xyXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xyXG4gICAgLy8gZmluZCBuZXcgaW5kZXggb2Ygc2VwYXJhdG9yXHJcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICB9XHJcbiAgLy8gYWRkIHRoZSByZW1haW5pbmcgc3RyaW5nIHRvIGxpc3QgKHRoZSBsYXN0IGl0ZW0pXHJcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xyXG5cclxuICBAcmV0dXJuICRzcGxpdC1hcnI7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xyXG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XHJcblxyXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xyXG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xyXG4gICAgJGVuZC1pbmRleDogc3RyLWluZGV4KCRwb3N0LCAkZW5kKTtcclxuXHJcbiAgICBAaWYgJGVuZC1pbmRleCB7XHJcbiAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRwb3N0LCAxLCAkZW5kLWluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xyXG4gIEBpZiAodHlwZS1vZigkc3RyaW5nKSA9PSBzdHJpbmcpIHtcclxuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xyXG4gICRzcGFjZXM6IHN0ci1yZXBsYWNlKCR2YWwsIFwiIFwiLCBcIiUyMFwiKTtcclxuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xyXG4gIEByZXR1cm4gJGVuY29kZWQ7XHJcbn1cclxuXHJcblxyXG4vLyBBZGQgUm9vdCBTZWxlY3RvclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxyXG4vL1xyXG4vLyBFeGFtcGxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0XCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCguZml4ZWQpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXHJcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5zaGFkb3dcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBhZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgJGFkZEhvc3RTZWxlY3Rvcikge1xyXG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xyXG5cclxuICAkbGlzdDogKCk7XHJcblxyXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCggaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGEgY2xhc3Mgb24gdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxyXG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KTpob3N0KFwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcblxyXG4gICAgICAkbmV3LWVsZW1lbnQ6ICgpO1xyXG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcclxuXHJcbiAgICAgIEBlYWNoICRlbGVtZW50IGluICRlbGVtZW50cyB7XHJcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG5cclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcganVzdCB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3RcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XHJcbiAgICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gJGxpc3Q7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcclxuICovXHJcblxyXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXHJcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcclxuICBAaWYgJGFscGhhID09IG51bGwge1xyXG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxyXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XHJcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XHJcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xyXG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcclxuXHJcbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcclxuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XHJcbiAgfVxyXG5cclxuICBAaWYgKCRhbHBoYSkge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xyXG4gIH1cclxuICBAaWYgKCRyZ2IpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xyXG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XHJcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi8vIEZvbnQgc21vb3RoaW5nXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcclxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcclxuICAka2V5czogbWFwLWtleXMoJG1hcCk7XHJcblxyXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xyXG59XHJcblxyXG5cclxuLy8gQnJlYWtwb2ludCBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxyXG4vL1xyXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XHJcbi8vXHJcbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuLy9cclxuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDU3NnB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cclxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIi1zbVwiXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1pbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcclxuLy8gICAgbWRcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xyXG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xyXG59XHJcblxyXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxyXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXHJcbi8vXHJcbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcclxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxyXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDc2Ny45OHB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxyXG4vL1xyXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXHJcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG11bHRpLWRpcigpIHtcclxuICBAY29udGVudDtcclxuXHJcbiAgLy8gJHJvb3Q6ICN7Jn07XHJcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xyXG4gIC8vICAgI3skcm9vdH0ge1xyXG4gIC8vICAgICBAY29udGVudDtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuXHJcbkBtaXhpbiBydGwoKSB7XHJcbiAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsdHIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcclxuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xyXG5cclxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcclxuICAgICRmbGlwcGVkLXVybDogJHN2ZztcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xyXG5cclxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgfSBAZWxzZSB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XHJcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xyXG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XHJcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgIHJpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgIGxlZnQ6ICRlbmQ7XHJcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xyXG4gIHRvcDogJHRvcDtcclxuICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XHJcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcclxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XHJcbiAgJG90aGVyLWRpcjogbnVsbDtcclxuXHJcbiAgQGlmICRkaXIgPT0gbHRyIHtcclxuICAgICRvdGhlci1kaXI6IHJ0bDtcclxuICB9IEBlbHNlIHtcclxuICAgICRvdGhlci1kaXI6IGx0cjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGx0cigpIHtcclxuICAgIGRpcmVjdGlvbjogJGRpcjtcclxuICB9XHJcbiAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XHJcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xyXG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XHJcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XHJcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XHJcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XHJcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xyXG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XHJcbiAgJGV4dHJhOiBudWxsO1xyXG5cclxuICAkeDogbnVsbDtcclxuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcclxuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcclxuXHJcbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XHJcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xyXG5cclxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcclxuXHJcbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcclxuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xyXG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XHJcblxyXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XHJcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIFJlc3BvbnNpdmUgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcclxuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBJdGVtIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XHJcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XHJcbn1cclxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XHJcblxyXG4vKipcclxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKi9cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XHJcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA4MCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xyXG59XHJcblxyXG4vLyBJb25pYyBDb2xvcnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXHJcbi8vIGNvbG9ycyBtYXBcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycywgJHRoZW1lKSB7XHJcbiAgICAkY29sb3ItdGhlbWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvci10aGVtZXMsICR0aGVtZSk7XHJcblxyXG4gICAgQGlmICR0aGVtZSA9PSAnZGFyaycge1xyXG4gICAgICAgICRiYXNlOiBtaXgobWFwLWdldCgkY29sb3ItdGhlbWVzLCAnbGlnaHQnKSwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKTtcclxufVxyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xyXG4gICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xyXG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XHJcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XHJcblxyXG4gICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG4gICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xyXG5cclxuICAgIC8vIEludGVybmFsIGlvbmljIHVzZSBvbmx5LlxyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcblxyXG4gICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcclxuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWZvY3VzKCkge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxyXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xyXG4gICAgJHRyYW5zaXRpb25zOiAoKTtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbn1cclxuXHJcbkBtaXhpbiBzci1vbmx5KCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxyXG4gKi9cclxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG5cclxuICAgIEBpZiAoJGVuZCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcbiAgICB9XHJcbiAgICBAaWYgKCRzdGFydCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRhcmttb2RlKCkge1xyXG4gICAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJodG1sLmRhcmtcIil9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XHJcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xyXG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ29sb3IgbWl4aW5zLlxyXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XHJcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcclxufVxyXG5cclxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XHJcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xyXG5cclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXHJcbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXHJcbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcclxufVxyXG5cclxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xyXG59XHJcblxyXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yaXRobVxyXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XHJcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xyXG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XHJcblxyXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcclxuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xyXG4gICAgJHI6IHJlZCgkY29sb3IpO1xyXG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XHJcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xyXG5cclxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcclxuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcclxuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcclxuXHJcbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XHJcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcclxuXHJcbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XHJcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXHJcbiAqL1xyXG4iLCIvKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxyXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xyXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxyXG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXHJcblxyXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XHJcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXHJcbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcclxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAgKFxyXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxyXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXHJcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcclxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxyXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcclxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxyXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXHJcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcclxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vKipcclxuICogTGF5b3V0IEJyZWFrcG9pbnRzXHJcbiAqXHJcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xyXG4gKi9cclxuXHJcbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMHB4LFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1xcmNvZGU6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xyXG5cclxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXHJcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcclxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXHJcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxyXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcclxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXHJcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeTogIzhlMjRhYSAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZTogJHJlZCAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWdyb3VwOiAkeWVsbG93ICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcjogJGJsdWUgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlOiAkZ3JlZW4gIWRlZmF1bHQ7XHJcblxyXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxyXG4gICAgY2F0ZWdvcnk6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeSxcclxuICAgIGNvdXJzZTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZSxcclxuICAgIGdyb3VwOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktZ3JvdXAsXHJcbiAgICB1c2VyOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcixcclxuICAgIHNpdGU6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlLFxyXG4pICFkZWZhdWx0O1xyXG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHNcIjtcclxuXHJcbiRxdWl6LXRpbWVyLXdhcm4tY29sb3I6ICRyZWQgIWRlZmF1bHQ7XHJcbiRxdWl6LXRpbWVyLWl0ZXJhdGlvbnM6IDE1ICFkZWZhdWx0O1xyXG5cclxuOmhvc3Qge1xyXG4gICAgLmFkZG9uLW1vZF9xdWl6LXF1ZXN0aW9uLW5vdGUgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxuXHJcbiAgICBjb3JlLXRpbWVyIHtcclxuICAgICAgICAvLyBNYWtlIHRoZSB0aW1lciBnbyByZWQgd2hlbiBpdCdzIHJlYWNoaW5nIDAuXHJcbiAgICAgICAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkcXVpei10aW1lci1pdGVyYXRpb25zIHtcclxuICAgICAgICAgICAgJi5jb3JlLXRpbWVyLXRpbWVsZWZ0LSN7JGl9IHtcclxuICAgICAgICAgICAgICAgICR0aW1lci1iYWNrZ3JvdW5kOiByZ2JhKCRxdWl6LXRpbWVyLXdhcm4tY29sb3IsIDEgLSAoJGkgLyAkcXVpei10aW1lci1pdGVyYXRpb25zKSk7XHJcbiAgICAgICAgICAgICAgICAtLXRpbWVyLWJhY2tncm91bmQ6ICN7JHRpbWVyLWJhY2tncm91bmR9O1xyXG4gICAgICAgICAgICAgICAgQGlmICRpIDw9ICRxdWl6LXRpbWVyLWl0ZXJhdGlvbnMgLyAyIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXRpbWVyLXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.ts ***!
  \****************************************************/
/*! exports provided: AddonModQuizPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPage", function() { return AddonModQuizPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/question/components/question/question */ "./src/core/features/question/components/question/question.ts");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_auto_save__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../classes/auto-save */ "./src/addons/mod/quiz/classes/auto-save.ts");
/* harmony import */ var _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/navigation-modal/navigation-modal */ "./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
/* harmony import */ var _services_quiz_sync__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/quiz-sync */ "./src/addons/mod/quiz/services/quiz-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _singletons_directives_registry__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/directives-registry */ "./src/core/singletons/directives-registry.ts");
/* harmony import */ var _classes_errors_wserror__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @classes/errors/wserror */ "./src/core/classes/errors/wserror.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that allows attempting a quiz.
 */
let AddonModQuizPlayerPage = class AddonModQuizPlayerPage {
    constructor(changeDetector, elementRef) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.loaded = false; // Whether data has been loaded.
        this.quizAborted = false; // Whether the quiz was aborted due to an error.
        this.offline = false; // Whether the quiz is being attempted in offline mode.
        this.navigation = []; // List of questions to navigate them.
        this.questions = []; // Questions of the current page.
        this.nextPage = -2; // Next page.
        this.previousPage = -1; // Previous page.
        this.showSummary = false; // Whether the attempt summary should be displayed.
        this.summaryQuestions = []; // The questions to display in the summary.
        this.canReturn = false; // Whether the user can return to a page after seeing the summary.
        this.preventSubmitMessages = []; // List of messages explaining why the quiz cannot be submitted.
        this.autoSaveError = false; // Whether there's been an error in auto-save.
        this.isSequential = false; // Whether quiz navigation is sequential.
        this.preflightData = {}; // Preflight data to attempt the quiz.
        this.newAttempt = false; // Whether the user is starting a new attempt.
        this.quizDataLoaded = false; // Whether the quiz data has been loaded.
        this.timeUpCalled = false; // Whether the time up function has been called.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.reloadNavigation = false; // Whether navigation needs to be reloaded because some data was sent to server.
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.moduleUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('moduleUrl');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            return;
        }
        // Create the auto save instance.
        this.autoSave = new _classes_auto_save__WEBPACK_IMPORTED_MODULE_12__["AddonModQuizAutoSave"]('addon-mod_quiz-player-form', '#addon-mod_quiz-connection-error-button');
        // Start the player when the page is loaded.
        this.start();
        // Listen for errors on auto-save.
        this.autoSaveErrorSubscription = this.autoSave.onError().subscribe((error) => {
            this.autoSaveError = error;
            this.changeDetector.detectChanges();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.stopAutoSave();
        if (this.quiz) {
            // Unblock the quiz so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @returns Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || this.quizAborted || !this.questions.length || this.showSummary) {
                return true;
            }
            // Save answers.
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield this.processAttempt(false, false);
            }
            catch (error) {
                // Save attempt failed. Show confirmation.
                modal.dismiss();
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.confirmleavequizonerror'));
                _singletons_form__WEBPACK_IMPORTED_MODULE_17__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            finally {
                modal.dismiss();
            }
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Close any modal if present.
            const modal = yield _singletons__WEBPACK_IMPORTED_MODULE_10__["ModalController"].getTop();
            modal === null || modal === void 0 ? void 0 : modal.dismiss();
        });
    }
    /**
     * Abort the quiz.
     */
    abortQuiz() {
        this.quizAborted = true;
    }
    /**
     * A behaviour button in a question was clicked (Check, Redo, ...).
     *
     * @param button Clicked button.
     */
    behaviourButtonClicked(button) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.attempt) {
                return;
            }
            let modal;
            try {
                // Confirm that the user really wants to do it.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.areyousure'));
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                // Get the answers.
                const answers = yield this.prepareAnswers(this.quiz.coursemodule);
                // Add the clicked button data.
                answers[button.name] = button.value;
                // Behaviour checks are always in online.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData);
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
                // Reload the current page.
                const scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
                const scrollTop = (scrollElement === null || scrollElement === void 0 ? void 0 : scrollElement.scrollTop) || -1;
                this.loaded = false;
                (_b = this.content) === null || _b === void 0 ? void 0 : _b.scrollToTop(); // Scroll top so the spinner is seen.
                try {
                    yield this.loadPage((_c = this.attempt.currentpage) !== null && _c !== void 0 ? _c : 0);
                }
                finally {
                    this.loaded = true;
                    if (scrollTop != -1) {
                        // Wait for content to be rendered.
                        setTimeout(() => {
                            var _a;
                            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToPoint(0, scrollTop);
                        }, 50);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error performing action.');
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param page Page to load. -1 means summary.
     * @param fromModal Whether the page was selected using the navigation modal.
     * @param slot Slot of the question to scroll to.
     * @returns Promise resolved when done.
     */
    changePage(page, fromModal, slot) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            if (page != -1 && (this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_OVERDUE || this.attempt.finishedOffline)) {
                // We can't load a page if overdue or the local attempt is finished.
                return;
            }
            else if (page == this.attempt.currentpage && !this.showSummary && slot !== undefined) {
                // Navigating to a question in the current page.
                yield this.scrollToQuestion(slot);
                return;
            }
            else if ((page == this.attempt.currentpage && !this.showSummary) || (fromModal && this.isSequential && page != -1)) {
                // If the user is navigating to the current page we do nothing.
                // Also, in sequential quizzes we don't allow navigating using the modal except for finishing the quiz (summary).
                return;
            }
            else if (page === -1 && this.showSummary) {
                // Summary already shown.
                return;
            }
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            // First try to save the attempt data. We only save it if we're not seeing the summary.
            if (!this.showSummary) {
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                try {
                    yield this.processAttempt(false, false);
                    modal.dismiss();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
                    modal.dismiss();
                    return;
                }
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
            }
            this.loaded = false;
            try {
                // Attempt data successfully saved, load the page or summary.
                // Stop checking for changes during page change.
                this.autoSave.stopCheckChangesProcess();
                if (page === -1) {
                    yield this.loadSummary();
                }
                else {
                    yield this.loadPage(page);
                }
            }
            catch (error) {
                // If the user isn't seeing the summary, start the check again.
                if (!this.showSummary && this.quiz) {
                    this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
            finally {
                this.loaded = true;
                if (slot !== undefined) {
                    // Scroll to the question.
                    yield this.scrollToQuestion(slot);
                }
            }
        });
    }
    /**
     * Convenience function to get the quiz data.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
            // Block the quiz so it cannot be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
            // Wait for any ongoing sync to finish. We won't sync a quiz while it's being played.
            yield _services_quiz_sync__WEBPACK_IMPORTED_MODULE_16__["AddonModQuizSync"].waitForSync(this.quiz.id);
            this.isSequential = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isNavigationSequential(this.quiz);
            if (_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isQuizOffline(this.quiz)) {
                // Quiz supports offline.
                this.offline = true;
            }
            else {
                // Quiz doesn't support offline right now, but maybe it did and then the setting was changed.
                // If we have an unfinished offline attempt then we'll use offline mode.
                this.offline = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isLastAttemptOfflineUnfinished(this.quiz);
            }
            if (this.quiz.timelimit && this.quiz.timelimit > 0) {
                this.readableTimeLimit = _singletons_time__WEBPACK_IMPORTED_MODULE_19__["CoreTime"].formatTime(this.quiz.timelimit);
            }
            // Get access information for the quiz.
            this.quizAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getQuizAccessInformation(this.quiz.id, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            // Get user attempts to determine last attempt.
            const attempts = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getUserAttempts(this.quiz.id, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            if (!attempts.length) {
                // There are no attempts, start a new one.
                this.newAttempt = true;
                return;
            }
            // Get the last attempt. If it's finished, start a new one.
            this.lastAttempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].setAttemptCalculatedData(this.quiz, attempts[attempts.length - 1], false, undefined, true);
            this.newAttempt = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isAttemptFinished(this.lastAttempt.state);
        });
    }
    /**
     * Finish an attempt, either by timeup or because the user clicked to finish it.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @returns Promise resolved when done.
     */
    finishAttempt(userFinish, timeUp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.attempt) {
                return;
            }
            let modal;
            try {
                // Show confirm if the user clicked the finish button and the quiz is in progress.
                if (!timeUp && this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS) {
                    let message = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.confirmclose');
                    const unansweredCount = this.summaryQuestions
                        .filter(question => question.state === 'todo' || question.state === 'invalid')
                        .length;
                    if (unansweredCount > 0) {
                        const warning = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.submission_confirmation_unanswered', { $a: unansweredCount });
                        message += `
                        <ion-card class="core-warning-card">
                            <ion-item>
                                <ion-label>
                                    ${warning}
                                </ion-label>
                            </ion-item>
                        </ion-card>
                    `;
                    }
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(message, _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_quiz.submitallandfinish'), _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.submit'));
                }
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                yield this.processAttempt(userFinish, timeUp);
                // Trigger an event to notify the attempt was finished.
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_FINISHED_EVENT, {
                    quizId: this.quiz.id,
                    attemptId: this.attempt.id,
                    synced: !this.offline,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'quiz' });
                if (!timeUp || !this.quiz.graceperiod) {
                    // Leave the player.
                    this.forceLeave = true;
                    _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
                }
                else {
                    // Stay in player to show summary.
                    this.stopAutoSave();
                    this.clearTimer();
                    yield this.refreshAttempt();
                    yield this.loadSummary();
                }
            }
            catch (error) {
                // eslint-disable-next-line promise/catch-or-return
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"]
                    .showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true)
                    .then((alert) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield (alert === null || alert === void 0 ? void 0 : alert.onWillDismiss());
                    if (error instanceof _classes_errors_wserror__WEBPACK_IMPORTED_MODULE_21__["CoreWSError"] && error.errorcode === 'attemptalreadyclosed') {
                        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
                    }
                    return;
                }));
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Fix sequence checks of current page.
     *
     * @returns Promise resolved when done.
     */
    fixSequenceChecks() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            // Get current page data again to get the latest sequencechecks.
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptData(this.attempt.id, (_a = this.attempt.currentpage) !== null && _a !== void 0 ? _a : 0, this.preflightData, {
                cmId: (_b = this.quiz) === null || _b === void 0 ? void 0 : _b.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            const newSequenceChecks = {};
            data.questions.forEach((question) => {
                const sequenceCheck = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionSequenceCheckFromHtml(question.html);
                if (sequenceCheck) {
                    newSequenceChecks[question.slot] = sequenceCheck;
                }
            });
            // Notify the new sequence checks to the components.
            (_c = this.questionComponents) === null || _c === void 0 ? void 0 : _c.forEach((component) => {
                component.updateSequenceCheck(newSequenceChecks);
            });
        });
    }
    /**
     * Get the input answers.
     *
     * @returns Object with the answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getAnswersFromForm(document.forms['addon-mod_quiz-player-form']);
    }
    /**
     * Initializes the timer if enabled.
     */
    initTimer() {
        var _a;
        if (!this.quizAccessInfo || !this.attempt || !((_a = this.attemptAccessInfo) === null || _a === void 0 ? void 0 : _a.endtime) || this.attemptAccessInfo.endtime < 0) {
            return;
        }
        // Quiz has an end time. Check if time left should be shown.
        const shouldShowTime = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].shouldShowTimeLeft(this.quizAccessInfo.activerulenames, this.attempt, this.attemptAccessInfo.endtime);
        if (shouldShowTime) {
            this.endTime = this.attemptAccessInfo.endtime;
        }
        else {
            delete this.endTime;
        }
    }
    /**
     * Remove timer info.
     */
    clearTimer() {
        delete this.endTime;
    }
    /**
     * Load a page questions.
     *
     * @param page The page to load.
     * @returns Promise resolved when done.
     */
    loadPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.attempt) {
                return;
            }
            // @todo MOBILE-4350: This is called before getting the attempt data in sequential quizzes as a workaround for a bug
            // in the LMS. Once the bug has been fixed, this should be reverted.
            if (this.isSequential) {
                yield this.logViewPage(page);
            }
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptData(this.attempt.id, page, this.preflightData, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            // Update attempt, status could change during the execution.
            this.attempt = data.attempt;
            this.attempt.currentpage = page;
            this.questions = data.questions;
            this.nextPage = data.nextpage;
            this.previousPage = this.isSequential ? -1 : page - 1;
            this.showSummary = false;
            this.questions.forEach((question) => {
                // Get the readable mark for each question.
                question.readableMark = _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].extractQuestionInfoBox(question, '.info');
                // Check if the question is blocked. If it is, treat it as a description question.
                if (_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].isQuestionBlocked(question)) {
                    question.type = 'description';
                }
            });
            // Mark the page as viewed.
            if (!this.isSequential) {
                // @todo MOBILE-4350: Undo workaround.
                yield this.logViewPage(page);
            }
            // Start looking for changes.
            this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
        });
    }
    /**
     * Log view a page.
     *
     * @param page Page viewed.
     */
    logViewPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.attempt) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].logViewAttempt(this.attempt.id, page, this.preflightData, this.offline));
            _services_analytics__WEBPACK_IMPORTED_MODULE_22__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_22__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_quiz_view_attempt',
                name: this.quiz.name,
                data: { id: this.attempt.id, quizid: this.quiz.id, page, category: 'quiz' },
                url: `/mod/quiz/attempt.php?attempt=${this.attempt.id}&cmid=${this.cmId}` + (page > 0 ? `&page=${page}` : ''),
            });
        });
    }
    /**
     * Log view summary.
     */
    logViewSummary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.attempt) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].logViewAttemptSummary(this.attempt.id, this.preflightData, this.quiz.id));
            _services_analytics__WEBPACK_IMPORTED_MODULE_22__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_22__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_quiz_view_attempt_summary',
                name: this.quiz.name,
                data: { id: this.attempt.id, quizid: this.quiz.id, category: 'quiz' },
                url: `/mod/quiz/summary.php?attempt=${this.attempt.id}&cmid=${this.cmId}`,
            });
        });
    }
    /**
     * Refresh attempt data.
     */
    refreshAttempt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz) {
                return;
            }
            const attempts = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getUserAttempts(this.quiz.id, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.attempt = attempts.find(attempt => { var _a; return attempt.id === ((_a = this.attempt) === null || _a === void 0 ? void 0 : _a.id); });
        });
    }
    /**
     * Load attempt summary.
     *
     * @returns Promise resolved when done.
     */
    loadSummary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.attempt) {
                return;
            }
            this.summaryQuestions = [];
            this.summaryQuestions = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: this.quiz.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.showSummary = true;
            this.canReturn = this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS && !this.attempt.finishedOffline;
            this.preventSubmitMessages = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getPreventSubmitMessages(this.summaryQuestions);
            this.dueDateWarning = _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptDueDateWarning(this.quiz, this.attempt);
            this.logViewSummary();
        });
    }
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @returns Promise resolved when done.
     */
    loadNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            // We use the attempt summary to build the navigation because it contains all the questions.
            this.navigation = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: (_a = this.quiz) === null || _a === void 0 ? void 0 : _a.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.navigation.forEach((question) => {
                question.stateClass = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionStateClass(question.state || '');
            });
        });
    }
    /**
     * Open the navigation modal.
     *
     * @returns Promise resolved when done.
     */
    openNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.reloadNavigation) {
                // Some data has changed, reload the navigation.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.loadNavigation());
                modal.dismiss();
                this.reloadNavigation = false;
            }
            // Create the navigation modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_13__["AddonModQuizNavigationModalComponent"],
                componentProps: {
                    navigation: this.navigation,
                    summaryShown: this.showSummary,
                    currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                    isReview: false,
                },
            });
            if (!modalData) {
                return;
            }
            this.changePage(modalData.page, true, modalData.slot);
        });
    }
    /**
     * Prepare the answers to be sent for the attempt.
     *
     * @param componentId Component ID.
     * @returns Promise resolved with the answers.
     */
    prepareAnswers(componentId) {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].prepareAnswers(this.questions, this.getAnswers(), this.offline, this.component, componentId);
    }
    /**
     * Process attempt.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @param retrying Whether we're retrying the change.
     * @returns Promise resolved when done.
     */
    processAttempt(userFinish, timeUp, retrying) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.attempt) {
                return;
            }
            // Get the answers to send.
            let answers = {};
            if (!this.showSummary) {
                answers = yield this.prepareAnswers(this.quiz.coursemodule);
            }
            try {
                // Send the answers.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData, userFinish, timeUp, this.offline);
            }
            catch (error) {
                if (!error || error.errorcode != 'submissionoutofsequencefriendlymessage') {
                    throw error;
                }
                try {
                    // There was an error with the sequence check. Try to ammend it.
                    yield this.fixSequenceChecks();
                }
                catch (_a) {
                    throw error;
                }
                if (retrying) {
                    // We're already retrying, don't send the data again because it could cause an infinite loop.
                    throw error;
                }
                // Sequence checks updated, try to send the data again.
                return this.processAttempt(userFinish, timeUp, true);
            }
            // Answers saved, cancel auto save.
            this.autoSave.cancelAutoSave();
            this.autoSave.hideAutoSaveError();
            if (this.formElement) {
                _singletons_form__WEBPACK_IMPORTED_MODULE_17__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !this.offline, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].clearTmpData(this.questions, this.component, this.quiz.coursemodule);
        });
    }
    /**
     * Scroll to a certain question.
     *
     * @param slot Slot of the question to scroll to.
     */
    scrollToQuestion(slot) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].nextTick();
            yield _singletons_directives_registry__WEBPACK_IMPORTED_MODULE_20__["CoreDirectivesRegistry"].waitDirectivesReady(this.elementRef.nativeElement, 'core-question');
            yield _singletons_dom__WEBPACK_IMPORTED_MODULE_18__["CoreDom"].scrollToElement(this.elementRef.nativeElement, '#addon-mod_quiz-question-' + slot);
        });
    }
    /**
     * Show connection error.
     *
     * @param ev Click event.
     */
    showConnectionError(ev) {
        this.autoSave.showAutoSaveError(ev);
    }
    /**
     * Convenience function to start the player.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loaded = false;
                if (!this.quizDataLoaded) {
                    // Fetch data.
                    yield this.fetchData();
                    this.quizDataLoaded = true;
                }
                // Quiz data has been loaded, try to start or continue.
                yield this.startOrContinueAttempt();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Start or continue an attempt.
     *
     * @returns Promise resolved when done.
     */
    startOrContinueAttempt() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz || !this.quizAccessInfo) {
                return;
            }
            let attempt = this.newAttempt ? undefined : this.lastAttempt;
            // Get the preflight data and start attempt if needed.
            attempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizHelper"].getAndCheckPreflightData(this.quiz, this.quizAccessInfo, this.preflightData, attempt, this.offline, false, 'addon.mod_quiz.startattempt');
            // Re-fetch attempt access information with the right attempt (might have changed because a new attempt was created).
            this.attemptAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuiz"].getAttemptAccessInformation(this.quiz.id, attempt.id, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.attempt = attempt;
            yield this.loadNavigation();
            if (this.attempt.state != _services_quiz__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizProvider"].ATTEMPT_OVERDUE && !this.attempt.finishedOffline) {
                // Attempt not overdue and not finished in offline, load page.
                yield this.loadPage((_a = this.attempt.currentpage) !== null && _a !== void 0 ? _a : 0);
                this.initTimer();
            }
            else {
                // Attempt is overdue or finished in offline, we can only load the summary.
                yield this.loadSummary();
            }
        });
    }
    /**
     * Quiz time has finished.
     */
    timeUp() {
        if (this.timeUpCalled) {
            return;
        }
        this.timeUpCalled = true;
        this.finishAttempt(false, true);
    }
    /**
     * Stop auto-saving answers.
     */
    stopAutoSave() {
        var _a;
        this.autoSave.cancelAutoSave();
        this.autoSave.stopCheckChangesProcess();
        (_a = this.autoSaveErrorSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
AddonModQuizPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonModQuizPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    questionComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__["CoreQuestionComponent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['quizForm',] }]
};
AddonModQuizPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/quiz/pages/player/player.scss")).default]
    })
], AddonModQuizPlayerPage);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/review/review.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/review/review.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_quiz-question-note p {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL3F1aXovcGFnZXMvcmV2aWV3L3Jldmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9tb2QvcXVpei9wYWdlcy9yZXZpZXcvcmV2aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYWRkb24tbW9kX3F1aXotcXVlc3Rpb24tbm90ZSBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/mod/quiz/pages/review/review.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/quiz/pages/review/review.ts ***!
  \****************************************************/
/*! exports provided: AddonModQuizReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizReviewPage", function() { return AddonModQuizReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/navigation-modal/navigation-modal */ "./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that allows reviewing a quiz attempt.
 */
let AddonModQuizReviewPage = class AddonModQuizReviewPage {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.showAll = false; // Whether to view all questions in the same page.
        this.numPages = 1; // Number of pages.
        this.showCompleted = false; // Whether to show completed time.
        this.loaded = false; // Whether data has been loaded.
        this.navigation = []; // List of questions to navigate them.
        this.questions = []; // Questions of the current page.
        this.nextPage = -2; // Next page.
        this.previousPage = -2; // Previous page.
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_9__["CoreTime"].once(() => this.performLogView(true, {
            showAllDisabled: !this.showAll,
            page: this.currentPage,
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.attemptId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('attemptId');
                this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('page') || -1;
                this.showAll = this.currentPage == -1;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
                return;
            }
            try {
                yield this.fetchData();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param page Page to load. -1 means all questions in same page.
     * @param slot Slot of the question to scroll to.
     */
    changePage(page, slot) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (slot !== undefined && (((_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage) == -1 || page == this.currentPage)) {
                // Scrol to a certain question in the current page.
                this.scrollToQuestion(slot);
                return;
            }
            else if (page == this.currentPage) {
                // If the user is navigating to the current page and no question specified, we do nothing.
                return;
            }
            this.loaded = false;
            (_b = this.content) === null || _b === void 0 ? void 0 : _b.scrollToTop();
            try {
                yield this.loadPage(page);
                this.performLogView(false, { page });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
            finally {
                this.loaded = true;
                if (slot !== undefined) {
                    // Scroll to the question.
                    this.scrollToQuestion(slot);
                }
            }
        });
    }
    /**
     * Convenience function to get the quiz data.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
                this.options = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getCombinedReviewOptions(this.quiz.id, { cmId: this.cmId });
                // Load the navigation data.
                yield this.loadNavigation();
                // Load questions.
                yield this.loadPage(this.currentPage);
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
            }
        });
    }
    /**
     * Load a page questions.
     *
     * @param page The page to load.
     * @returns Promise resolved when done.
     */
    loadPage(page) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getAttemptReview(this.attemptId, { page, cmId: (_a = this.quiz) === null || _a === void 0 ? void 0 : _a.coursemodule });
            this.attempt = data.attempt;
            this.attempt.currentpage = page;
            this.currentPage = page;
            // Set the summary data.
            this.setSummaryCalculatedData(data);
            this.questions = data.questions;
            this.nextPage = page + 1;
            this.previousPage = page - 1;
            this.questions.forEach((question) => {
                // Get the readable mark for each question.
                question.readableMark = _services_quiz_helper__WEBPACK_IMPORTED_MODULE_12__["AddonModQuizHelper"].getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].extractQuestionInfoBox(question, '.info');
            });
        });
    }
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @returns Promise resolved when done.
     */
    loadNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get all questions in single page to retrieve all the questions.
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getAttemptReview(this.attemptId, { page: -1, cmId: (_a = this.quiz) === null || _a === void 0 ? void 0 : _a.coursemodule });
            this.navigation = data.questions;
            this.navigation.forEach((question) => {
                question.stateClass = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].getQuestionStateClass(question.state || '');
            });
            const lastQuestion = data.questions[data.questions.length - 1];
            this.numPages = lastQuestion ? lastQuestion.page + 1 : 0;
        });
    }
    /**
     * Refreshes data.
     *
     * @param refresher Refresher
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].invalidateQuizData(this.courseId));
            promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].invalidateAttemptReview(this.attemptId));
            if (this.quiz) {
                promises.push(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].invalidateCombinedReviewOptionsForUser(this.quiz.id));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(Promise.all(promises));
            try {
                yield this.fetchData();
            }
            finally {
                refresher.complete();
            }
        });
    }
    /**
     * Scroll to a certain question.
     *
     * @param slot Slot of the question to scroll to.
     */
    scrollToQuestion(slot) {
        _singletons_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDom"].scrollToElement(this.elementRef.nativeElement, `#addon-mod_quiz-question-${slot}`);
    }
    /**
     * Calculate review summary data.
     *
     * @param data Result of getAttemptReview.
     */
    setSummaryCalculatedData(data) {
        var _a, _b, _c;
        if (!this.attempt || !this.quiz) {
            return;
        }
        this.readableState = _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].getAttemptReadableStateName((_a = this.attempt.state) !== null && _a !== void 0 ? _a : '');
        if (this.attempt.state != _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuizProvider"].ATTEMPT_FINISHED) {
            return;
        }
        this.showCompleted = true;
        this.additionalData = data.additionaldata;
        const timeTaken = (this.attempt.timefinish || 0) - (this.attempt.timestart || 0);
        if (timeTaken > 0) {
            // Format time taken.
            this.timeTaken = _singletons_time__WEBPACK_IMPORTED_MODULE_9__["CoreTime"].formatTime(timeTaken);
            // Calculate overdue time.
            if (this.quiz.timelimit && timeTaken > this.quiz.timelimit + 60) {
                this.overTime = _singletons_time__WEBPACK_IMPORTED_MODULE_9__["CoreTime"].formatTime(timeTaken - this.quiz.timelimit);
            }
        }
        else {
            this.timeTaken = undefined;
        }
        // Treat grade.
        if (this.options && this.options.someoptions.marks >= _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuizProvider"].QUESTION_OPTIONS_MARK_AND_MAX &&
            _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].quizHasGrades(this.quiz)) {
            if (data.grade === null || data.grade === undefined) {
                this.readableGrade = _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(data.grade, this.quiz.decimalpoints);
            }
            else {
                // Show raw marks only if they are different from the grade (like on the entry page).
                if (this.quiz.grade != this.quiz.sumgrades) {
                    this.readableMark = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.mod_quiz.outofshort', { $a: {
                            grade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(this.attempt.sumgrades, this.quiz.decimalpoints),
                            maxgrade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(this.quiz.sumgrades, this.quiz.decimalpoints),
                        } });
                }
                // Now the scaled grade.
                const gradeObject = {
                    grade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(Number(data.grade), this.quiz.decimalpoints),
                    maxgrade: _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(this.quiz.grade, this.quiz.decimalpoints),
                };
                if (this.quiz.grade != 100) {
                    gradeObject.percent = _services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].formatGrade(((_b = this.attempt.sumgrades) !== null && _b !== void 0 ? _b : 0) * 100 / ((_c = this.quiz.sumgrades) !== null && _c !== void 0 ? _c : 1), this.quiz.decimalpoints);
                    this.readableGrade = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.mod_quiz.outofpercent', { $a: gradeObject });
                }
                else {
                    this.readableGrade = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.mod_quiz.outof', { $a: gradeObject });
                }
            }
        }
        // Treat additional data.
        this.additionalData.forEach((data) => {
            // Remove help links from additional data.
            data.content = _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].removeElementFromHtml(data.content, '.helptooltip');
        });
    }
    /**
     * Switch mode: all questions in same page OR one page at a time.
     */
    switchMode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showAll = !this.showAll;
            // Load all questions or first page, depending on the mode.
            yield this.loadPage(this.showAll ? -1 : 0);
            this.performLogView(false, { showAllDisabled: !this.showAll });
        });
    }
    openNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create the navigation modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].openSideModal({
                component: _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_10__["AddonModQuizNavigationModalComponent"],
                componentProps: {
                    navigation: this.navigation,
                    summaryShown: false,
                    currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                    isReview: true,
                },
            });
            if (!modalData) {
                return;
            }
            this.changePage(modalData.page, modalData.slot);
        });
    }
    /**
     * Perform log view.
     *
     * @param logInLMS Whether to log in LMS too or only in analytics.
     * @param options Other options.
     */
    performLogView(logInLMS = false, options = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.quiz) {
                return;
            }
            if (logInLMS) {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_11__["AddonModQuiz"].logViewAttemptReview(this.attemptId, this.quiz.id));
            }
            let url = `/mod/quiz/review.php?attempt=${this.attemptId}&cmid=${this.cmId}`;
            if (options.showAllDisabled) {
                url += '&showall=0';
            }
            else if (options.page && options.page > 0) {
                url += `&page=${options.page}`;
            }
            _services_analytics__WEBPACK_IMPORTED_MODULE_13__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_13__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_quiz_view_attempt_review',
                name: this.quiz.name,
                data: { id: this.attemptId, quizid: this.quiz.id, page: options.page, category: 'quiz' },
                url: url,
            });
        });
    }
};
AddonModQuizReviewPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonModQuizReviewPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }]
};
AddonModQuizReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./review.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/review/review.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./review.scss */ "./src/addons/mod/quiz/pages/review/review.scss")).default]
    })
], AddonModQuizReviewPage);



/***/ }),

/***/ "./src/addons/mod/quiz/quiz-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/quiz/quiz-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModQuizLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizLazyModule", function() { return AddonModQuizLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/quiz/components/components.module.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index */ "./src/addons/mod/quiz/pages/index/index.ts");
/* harmony import */ var _addons_mod_quiz_pages_attempt_attempt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/mod/quiz/pages/attempt/attempt */ "./src/addons/mod/quiz/pages/attempt/attempt.ts");
/* harmony import */ var _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/question/components/components.module */ "./src/core/features/question/components/components.module.ts");
/* harmony import */ var _addons_mod_quiz_pages_player_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/mod/quiz/pages/player/player */ "./src/addons/mod/quiz/pages/player/player.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _addons_mod_quiz_pages_review_review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @addons/mod/quiz/pages/review/review */ "./src/addons/mod/quiz/pages/review/review.ts");
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
        component: _pages_index__WEBPACK_IMPORTED_MODULE_5__["AddonModQuizIndexPage"],
    },
    {
        path: ':courseId/:cmId/player',
        component: _addons_mod_quiz_pages_player_player__WEBPACK_IMPORTED_MODULE_8__["AddonModQuizPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_9__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/attempt/:attemptId',
        component: _addons_mod_quiz_pages_attempt_attempt__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizAttemptPage"],
    },
    {
        path: ':courseId/:cmId/review/:attemptId',
        component: _addons_mod_quiz_pages_review_review__WEBPACK_IMPORTED_MODULE_10__["AddonModQuizReviewPage"],
    },
];
let AddonModQuizLazyModule = class AddonModQuizLazyModule {
};
AddonModQuizLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizComponentsModule"],
            _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_7__["CoreQuestionComponentsModule"],
        ],
        declarations: [
            _pages_index__WEBPACK_IMPORTED_MODULE_5__["AddonModQuizIndexPage"],
            _addons_mod_quiz_pages_attempt_attempt__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizAttemptPage"],
            _addons_mod_quiz_pages_player_player__WEBPACK_IMPORTED_MODULE_8__["AddonModQuizPlayerPage"],
            _addons_mod_quiz_pages_review_review__WEBPACK_IMPORTED_MODULE_10__["AddonModQuizReviewPage"],
        ],
    })
], AddonModQuizLazyModule);



/***/ })

}]);
//# sourceMappingURL=quiz-lazy-module.js.map