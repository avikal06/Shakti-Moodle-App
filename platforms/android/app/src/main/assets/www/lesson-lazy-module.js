(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lesson-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/index/index.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/index/index.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-lesson-index [module]=\"module\" [courseId]=\"courseId\" [group]=\"group\" [action]=\"action\" (dataRetrieved)=\"updateData($event)\">\r\n    </addon-mod-lesson-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"displayMenu || mediaFile\" [attr.aria-label]=\"'addon.mod_lesson.lessonmenu' | translate\"\r\n                (click)=\"showMenu()\">\r\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <!-- Info messages. Only show the first one. -->\r\n        <ion-card class=\"core-info-card\" *ngIf=\"lesson && messages?.length\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-icon name=\"fas-circle-info\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ messages[0].message }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <div *ngIf=\"lesson\" [ngClass]='{\"addon-mod_lesson-slideshow\": lesson.slideshow}'\r\n            [ngStyle]=\"{'width': lessonWidth, 'height': lessonHeight}\">\r\n\r\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\" [timeLeftClassThreshold]=\"-1\"\r\n                [timerText]=\"'addon.mod_lesson.timeremaining' | translate\">\r\n            </core-timer>\r\n\r\n            <!-- Retake and ongoing score. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"showRetake && !eolData && !processData\">\r\n                <ion-label>\r\n                    <p>{{ 'addon.mod_lesson.attempt' | translate:{$a: retake} }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"pageData && pageData.ongoingscore && !eolData && !processData\"\r\n                class=\"addon-mod_lesson-ongoingscore ion-text-wrap\">\r\n                <ion-label>{{ pageData.ongoingscore }}</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Page content. -->\r\n            <ion-card *ngIf=\"!eolData && !processData\">\r\n                <!-- Content page. -->\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!question && pageContent\">\r\n                    <ion-label>\r\n                        <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\" [text]=\"pageContent\"\r\n                            contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <!-- Question page. -->\r\n                <!-- We need to set ngIf loaded to make formGroup directive restart every time a page changes, see MOBILE-2540. -->\r\n                <form *ngIf=\"question && loaded\" [formGroup]=\"questionForm\" #questionFormEl (ngSubmit)=\"submitQuestion($event)\">\r\n\r\n                    <ion-item-divider class=\"ion-text-wrap\" *ngIf=\"pageContent\">\r\n                        <ion-label>\r\n                            <h2>\r\n                                <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"pageContent\"\r\n                                    contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\r\n                                </core-format-text>\r\n                            </h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n\r\n                    <!-- Render a different input depending on the type of the question. -->\r\n                    <ng-container [ngSwitch]=\"question.template\">\r\n\r\n                        <!-- Short answer. -->\r\n                        <ion-item class=\"ion-text-wrap\" *ngSwitchCase=\"'shortanswer'\">\r\n                            <ion-label class=\"sr-only\" stacked></ion-label>\r\n                            <ion-input [type]=\"question.input!.type\" placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\r\n                                [id]=\"question.input!.id\" [formControlName]=\"question.input!.name\" autocorrect=\"off\"\r\n                                [maxlength]=\"question.input!.maxlength\">\r\n                            </ion-input>\r\n                        </ion-item>\r\n\r\n                        <!-- Essay. -->\r\n                        <ng-container *ngSwitchCase=\"'essay'\">\r\n                            <ion-item *ngIf=\"question.textarea\">\r\n                                <ion-label class=\"sr-only\">{{ 'core.content' | translate }}</ion-label>\r\n                                <core-rich-text-editor placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\r\n                                    [control]=\"question.control\" [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                    [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                    elementId=\"answer_editor\">\r\n                                </core-rich-text-editor>\r\n                            </ion-item>\r\n                            <ion-item class=\"ion-text-wrap\" *ngIf=\"!question.textarea && question.useranswer\">\r\n                                <ion-label>\r\n                                    <p class=\"item-heading\">{{ 'addon.mod_lesson.youranswer' | translate }}</p>\r\n                                    <p>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                            [text]=\"question.useranswer\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                            [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </p>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ng-container>\r\n\r\n                        <!-- Multichoice. -->\r\n                        <ng-container *ngSwitchCase=\"'multichoice'\">\r\n                            <!-- Single choice. -->\r\n                            <ion-radio-group *ngIf=\"!question.multi\" [formControlName]=\"question.controlName\">\r\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\r\n                                    <ion-label>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\" [text]=\"option.text\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </ion-label>\r\n                                    <ion-radio slot=\"end\" [id]=\"option.id\" [value]=\"option.value\" [disabled]=\"option.disabled\">\r\n                                    </ion-radio>\r\n                                </ion-item>\r\n                            </ion-radio-group>\r\n\r\n                            <!-- Multiple choice. -->\r\n                            <ng-container *ngIf=\"question.multi\">\r\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\r\n                                    <ion-label>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"option.text\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </ion-label>\r\n                                    <ion-checkbox [id]=\"option.id\" [formControlName]=\"option.name\" slot=\"end\"></ion-checkbox>\r\n                                </ion-item>\r\n                            </ng-container>\r\n                        </ng-container>\r\n\r\n                        <!-- Matching. -->\r\n                        <ng-container *ngSwitchCase=\"'matching'\">\r\n                            <ion-item class=\"ion-text-wrap\" *ngFor=\"let row of question.rows\">\r\n                                <ion-label>\r\n                                    <p>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"row.text\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </p>\r\n                                </ion-label>\r\n                                <ion-select [id]=\"row.id\" [formControlName]=\"row.name\" [cancelText]=\"'core.cancel' | translate\"\r\n                                    interface=\"action-sheet\">\r\n                                    <ion-select-option *ngFor=\"let option of row.options\" [value]=\"option.value\">\r\n                                        {{option.label}}\r\n                                    </ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                        </ng-container>\r\n                    </ng-container>\r\n\r\n                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-text-wrap ion-margin button-no-uppercase\">\r\n                        {{ question.submitLabel }}\r\n                    </ion-button>\r\n                    <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\r\n                    <input type=\"submit\" class=\"core-submit-hidden-enter\" />\r\n                </form>\r\n            </ion-card>\r\n\r\n            <!-- Page buttons and progress. -->\r\n            <ion-list *ngIf=\"!eolData && !processData\">\r\n                <ion-grid *ngIf=\"pageButtons?.length\" class=\"ion-text-wrap addon-mod_lesson-pagebuttons\">\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                        <ion-col *ngFor=\"let button of pageButtons\" size=\"12\" size-md=\"6\" size-lg=\"3\" col-xl>\r\n                            <ion-button expand=\"block\" fill=\"outline\" [id]=\"button.id\" (click)=\"buttonClicked(button.data)\"\r\n                                class=\"ion-text-wrap button-no-uppercase\">\r\n                                {{ button.content }}\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson?.progressbar && !canManage && pageData\">\r\n                    <ion-label>\r\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress\">\r\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: pageData.progress} }}\r\n                        </span>\r\n                        <core-progress-bar [progress]=\"pageData.progress\" ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress\">\r\n                        </core-progress-bar>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-card class=\"core-info-card\" *ngIf=\"lesson?.progressbar && canManage\">\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-icon name=\"fas-circle-info\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                        <ion-label>{{ 'addon.mod_lesson.progressbarteacherwarning2' | translate }}</ion-label>\r\n                    </ion-item>\r\n                </ion-card>\r\n            </ion-list>\r\n\r\n            <!-- End of lesson reached. -->\r\n            <ion-card class=\"core-warning-card\" *ngIf=\"eolData && !processData && eolData.offline?.value\">\r\n                <ion-item>\r\n                    <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>{{ 'addon.mod_lesson.finishretakeoffline' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-card *ngIf=\"eolData && !processData\">\r\n\r\n                <ion-card-header class=\"ion-text-wrap\" *ngIf=\"eolData.gradelesson\">\r\n                    <ion-card-title>{{ 'addon.mod_lesson.congratulations' | translate }}</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.notenoughtimespent\">\r\n                    <ion-label>{{ eolData.notenoughtimespent.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofpagesviewed\">\r\n                    <ion-label>{{ eolData.numberofpagesviewed.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.youshouldview\">\r\n                    <ion-label>{{ eolData.youshouldview.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofcorrectanswers\">\r\n                    <ion-label>{{ eolData.numberofcorrectanswers.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayscorewithessays\">\r\n                    <ion-label [innerHTML]=\"eolData.displayscorewithessays.message\"></ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!eolData.displayscorewithessays && eolData.displayscorewithoutessays\">\r\n                    <ion-label>{{ eolData.displayscorewithoutessays.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.yourcurrentgradeisoutof\">\r\n                    <ion-label>{{ eolData.yourcurrentgradeisoutof.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.eolstudentoutoftimenoanswers\">\r\n                    <ion-label>{{ eolData.eolstudentoutoftimenoanswers.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.welldone\">\r\n                    <ion-label>{{ eolData.welldone.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson.progressbar && eolData.progresscompleted\">\r\n                    <ion-label>\r\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress-end\">\r\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: eolData.progresscompleted.value} }}\r\n                        </span>\r\n                        <core-progress-bar [progress]=\"eolData.progresscompleted.value\"\r\n                            ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress-end\">\r\n                        </core-progress-bar>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayofgrade\">\r\n                    <ion-label>{{ eolData.displayofgrade.message }}</ion-label>\r\n                </ion-item>\r\n                <ion-button *ngIf=\"eolData.reviewlesson\" expand=\"block\" class=\"ion-text-wrap ion-margin button-no-uppercase\"\r\n                    (click)=\"reviewLesson(reviewPageId!)\">\r\n                    {{ 'addon.mod_lesson.reviewlesson' | translate }}\r\n                </ion-button>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.modattemptsnoteacher\">\r\n                    <ion-label>{{ eolData.modattemptsnoteacher.message }}</ion-label>\r\n                </ion-item>\r\n                <!-- If activity link was successfully formatted, render the button. -->\r\n                <ion-button *ngIf=\"activityLink && activityLink.formatted\" expand=\"block\" fill=\"outline\" [href]=\"activityLink.href\"\r\n                    core-link [capture]=\"true\" class=\"ion-text-wrap ion-margin button-no-uppercase\">\r\n                    <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                        [courseId]=\"courseId\">\r\n                    </core-format-text>\r\n                </ion-button>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"activityLink && !activityLink.formatted\">\r\n                    <!-- Activity link wasn't formatted, render the original link. -->\r\n                    <ion-label>\r\n                        <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                            [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <!-- Feedback returned when processing an action. -->\r\n            <ion-list *ngIf=\"processData\">\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"processData.ongoingscore && !processData.reviewmode\">\r\n                    <ion-label>{{ processData.ongoingscore }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!processData.reviewmode || review\">\r\n                    <ion-label>\r\n                        <div *ngIf=\"!processData.reviewmode\">\r\n                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"processData.feedback\"\r\n                                contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                            </core-format-text>\r\n                        </div>\r\n                        <div *ngIf=\"review\">\r\n                            <p>{{ 'addon.mod_lesson.gotoendoflesson' | translate }}</p>\r\n                            <p>{{ 'addon.mod_lesson.or' | translate }}</p>\r\n                            <p>{{ 'addon.mod_lesson.continuetonextpage' | translate }}</p>\r\n                        </div>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" *ngIf=\"review\" (click)=\"changePage(LESSON_EOL)\">\r\n                    {{ 'addon.mod_lesson.finish' | translate }}\r\n                </ion-button>\r\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" fill=\"outline\" *ngFor=\"let button of processDataButtons\"\r\n                    (click)=\"changePage(button.pageId, true)\">\r\n                    {{ button.label | translate }}\r\n                </ion-button>\r\n            </ion-list>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/user-retake/user-retake.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/user-retake/user-retake.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_lesson.detailedstats' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <div *ngIf=\"student\">\r\n            <!-- Student data. -->\r\n            <ion-item class=\"ion-text-wrap\" core-user-link [userId]=\"student.id\" [courseId]=\"courseId\" [attr.aria-label]=\"student.fullname\">\r\n                <core-user-avatar [user]=\"student\" slot=\"start\" [userId]=\"student.id\" [courseId]=\"courseId\" [linkProfile]=\"false\">\r\n                </core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{student.fullname}}</h2>\r\n                    <core-progress-bar [progress]=\"student.bestgrade\" a11yText=\"addon.mod_lesson.grade\"></core-progress-bar>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Retake selector if there is more than one retake. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"student.attempts && student.attempts.length > 1\">\r\n                <ion-label>{{ 'addon.mod_lesson.attemptheader' | translate }}</ion-label>\r\n                <ion-select [(ngModel)]=\"selectedRetake\" (ionChange)=\"changeRetake(selectedRetake!)\"\r\n                    [cancelText]=\"'core.cancel' | translate\" interface=\"action-sheet\"\r\n                    [interfaceOptions]=\"{header: 'addon.mod_lesson.attemptheader' | translate}\">\r\n                    <ion-select-option *ngFor=\"let retake of student.attempts\" [value]=\"retake.try\">\r\n                        {{retake.label}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Retake stats. -->\r\n            <ion-list *ngIf=\"retake && retake.userstats && retake.userstats.gradeinfo\" class=\"addon-mod_lesson-userstats\">\r\n                <ion-item>\r\n                    <ion-label class=\"ion-text-wrap\">\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                            <ion-row>\r\n                                <ion-col>\r\n                                    <p class=\"item-heading\">{{ 'addon.mod_lesson.grade' | translate }}</p>\r\n                                    <p>{{ 'core.percentagenumber' | translate:{$a: retake.userstats.grade} }}</p>\r\n                                </ion-col>\r\n\r\n                                <ion-col>\r\n                                    <p class=\"item-heading\">{{ 'addon.mod_lesson.rawgrade' | translate }}</p>\r\n                                    <p>{{ retake.userstats.gradeinfo.earned }} / {{ retake.userstats.gradeinfo.total }}</p>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_lesson.timetaken' | translate }}</p>\r\n                        <p>{{ timeTakenReadable }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.mod_lesson.completed' | translate }}</p>\r\n                        <p>{{ retake.userstats.completed * 1000 | coreFormatDate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <!-- Not completed, no stats. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"retake && (!retake.userstats || !retake.userstats.gradeinfo)\">\r\n                <ion-label>{{ 'addon.mod_lesson.notcompleted' | translate }}</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Pages. -->\r\n            <ng-container *ngIf=\"retake\">\r\n                <!-- The \"text-dimmed\" class does nothing, but the same goes for the \"dimmed\" class in Moodle. -->\r\n                <ion-card *ngFor=\"let page of retake.answerpages\" class=\"addon-mod_lesson-answerpage\"\r\n                    [ngClass]=\"{'text-dimmed': page.grayout}\">\r\n                    <ion-card-header class=\"ion-text-wrap\">\r\n                        <ion-card-title>{{page.qtype}}: {{page.title}}</ion-card-title>\r\n                    </ion-card-header>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_lesson.question' | translate }}</p>\r\n                            <p>\r\n                                <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" collapsible-item\r\n                                    [text]=\"page.contents\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                    [courseId]=\"courseId\">\r\n                                </core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.mod_lesson.answer' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"!page.answerdata || !page.answerdata.answers || !page.answerdata.answers.length\">\r\n                        <ion-label>\r\n                            <p>{{ 'addon.mod_lesson.didnotanswerquestion' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <div *ngIf=\"page.answerdata && page.answerdata.answers && page.answerdata.answers.length\"\r\n                        class=\"addon-mod_lesson-answer\">\r\n                        <ng-container *ngFor=\"let answer of page.answerdata.answers\">\r\n                            <ion-item *ngIf=\"page.isContent\">\r\n                                <ion-label class=\"ion-text-wrap\">\r\n                                    <ion-grid class=\"ion-no-padding\">\r\n                                        <!-- Content page, display a button and the content. -->\r\n                                        <ion-row>\r\n                                            <ion-col>\r\n                                                <ion-button expand=\"block\" class=\"ion-text-wrap\" fill=\"outline\" [disabled]=\"true\">\r\n                                                    {{ answer[0].buttonText }}\r\n                                                </ion-button>\r\n                                            </ion-col>\r\n                                            <ion-col>\r\n                                                <p [innerHTML]=\"answer[0].content\"></p>\r\n                                            </ion-col>\r\n                                        </ion-row>\r\n                                    </ion-grid>\r\n                                </ion-label>\r\n                            </ion-item>\r\n\r\n                            <ng-container *ngIf=\"page.isQuestion\">\r\n                                <!-- Question page, show the right input for the answer. -->\r\n\r\n                                <!-- Truefalse or matching. -->\r\n                                <ion-item class=\"ion-text-wrap\" *ngIf=\"answer[0].isCheckbox\"\r\n                                    [ngClass]=\"{'addon-mod_lesson-highlight': answer[0].highlight}\">\r\n                                    <ion-label>\r\n                                        <p>\r\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                                [text]=\"answer[0].content\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                                [courseId]=\"courseId\">\r\n                                            </core-format-text>\r\n                                        </p>\r\n                                        <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\r\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                                [text]=\"answer[1]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                                [courseId]=\"courseId\">\r\n                                            </core-format-text>\r\n                                        </ion-badge>\r\n                                    </ion-label>\r\n                                    <ion-checkbox [attr.name]=\"answer[0].name\" [ngModel]=\"answer[0].checked\" [disabled]=\"true\" slot=\"end\">\r\n                                    </ion-checkbox>\r\n                                </ion-item>\r\n\r\n                                <!-- Short answer or numeric. -->\r\n                                <ion-item class=\"ion-text-wrap\" *ngIf=\"answer[0].isText\">\r\n                                    <ion-label>\r\n                                        <p>{{ answer[0].value }}</p>\r\n                                        <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\r\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                                [text]=\"answer[1]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                                [courseId]=\"courseId\">\r\n                                            </core-format-text>\r\n                                        </ion-badge>\r\n                                    </ion-label>\r\n                                </ion-item>\r\n\r\n                                <!-- Matching. -->\r\n                                <ion-item *ngIf=\"answer[0].isSelect\">\r\n                                    <ion-label class=\"ion-text-wrap\">\r\n                                        <ion-grid class=\"ion-no-padding\">\r\n                                            <ion-row>\r\n                                                <ion-col>\r\n                                                    <p>\r\n                                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                                            [text]=\" answer[0].content\" contextLevel=\"module\"\r\n                                                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                                        </core-format-text>\r\n                                                    </p>\r\n                                                </ion-col>\r\n                                                <ion-col>\r\n                                                    <p>{{answer[0].value}}</p>\r\n                                                    <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\r\n                                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                                            [text]=\"answer[1]\" contextLevel=\"module\"\r\n                                                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                                        </core-format-text>\r\n                                                    </ion-badge>\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-grid>\r\n                                    </ion-label>\r\n                                </ion-item>\r\n\r\n                                <!-- Essay or couldn't determine. -->\r\n                                <ion-item class=\"ion-text-wrap\" *ngIf=\"!answer[0].isCheckbox && !answer[0].isText && !answer[0].isSelect\">\r\n                                    <ion-label>\r\n                                        <p>\r\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                                [text]=\"answer[0]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                                [courseId]=\"courseId\">\r\n                                            </core-format-text>\r\n                                        </p>\r\n                                        <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\r\n                                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                                [text]=\"answer[1]\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                                [courseId]=\"courseId\">\r\n                                            </core-format-text>\r\n                                        </ion-badge>\r\n                                    </ion-label>\r\n                                </ion-item>\r\n                            </ng-container>\r\n\r\n                            <ion-item class=\"ion-text-wrap\" *ngIf=\"!page.isContent && !page.isQuestion\">\r\n                                <!-- Another page (end of branch, ...). -->\r\n                                <ion-label>\r\n                                    <p>\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"answer[0]\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </p>\r\n                                    <ion-badge *ngIf=\"answer[1]\" color=\"dark\">\r\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"answer[1]\"\r\n                                            contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\r\n                                        </core-format-text>\r\n                                    </ion-badge>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ng-container>\r\n\r\n                        <ion-item class=\"ion-text-wrap\" *ngIf=\"page.answerdata.response\">\r\n                            <ion-label>\r\n                                <p class=\"item-heading\">{{ 'addon.mod_lesson.response' | translate }}</p>\r\n                                <p>\r\n                                    <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\r\n                                        [text]=\"page.answerdata.response\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\r\n                                        [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </p>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item class=\"ion-text-wrap\" *ngIf=\"page.answerdata.score\">\r\n                            <ion-label>\r\n                                <p>{{page.answerdata.score}}</p>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </div>\r\n                </ion-card>\r\n            </ng-container>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/lesson/lesson-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/mod/lesson/lesson-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonModLessonLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonLazyModule", function() { return AddonModLessonLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/lesson/components/components.module.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index */ "./src/addons/mod/lesson/pages/index/index.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _addons_mod_lesson_pages_player_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/mod/lesson/pages/player/player */ "./src/addons/mod/lesson/pages/player/player.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _addons_mod_lesson_pages_user_retake_user_retake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/mod/lesson/pages/user-retake/user-retake */ "./src/addons/mod/lesson/pages/user-retake/user-retake.ts");
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
        component: _pages_index__WEBPACK_IMPORTED_MODULE_5__["AddonModLessonIndexPage"],
    },
    {
        path: ':courseId/:cmId/player',
        component: _addons_mod_lesson_pages_player_player__WEBPACK_IMPORTED_MODULE_7__["AddonModLessonPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_8__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/user-retake/:userId',
        component: _addons_mod_lesson_pages_user_retake_user_retake__WEBPACK_IMPORTED_MODULE_9__["AddonModLessonUserRetakePage"],
    },
];
let AddonModLessonLazyModule = class AddonModLessonLazyModule {
};
AddonModLessonLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreEditorComponentsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonComponentsModule"],
        ],
        declarations: [
            _pages_index__WEBPACK_IMPORTED_MODULE_5__["AddonModLessonIndexPage"],
            _addons_mod_lesson_pages_player_player__WEBPACK_IMPORTED_MODULE_7__["AddonModLessonPlayerPage"],
            _addons_mod_lesson_pages_user_retake_user_retake__WEBPACK_IMPORTED_MODULE_9__["AddonModLessonUserRetakePage"],
        ],
    })
], AddonModLessonLazyModule);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/index/index.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/lesson/pages/index/index.ts ***!
  \****************************************************/
/*! exports provided: AddonModLessonIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonIndexPage", function() { return AddonModLessonIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/lesson/components/index/index.ts");
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
 * Page that displays the lesson entry page.
 */
let AddonModLessonIndexPage = class AddonModLessonIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    /**
     * @inheritdoc
     */
    ngOnInit() {
        super.ngOnInit();
        this.group = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group');
        this.action = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('action');
    }
};
AddonModLessonIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonIndexComponent"],] }]
};
AddonModLessonIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-lesson-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/index/index.html")).default,
    })
], AddonModLessonIndexPage);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.scss":
/*!********************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --background-odd: var(--light);\n}\n\n:host-context(html.dark) {\n  --background-odd: var(--medium);\n}\n\n:host ::ng-deep .addon-mod_lesson-slideshow {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n\n:host ::ng-deep .studentanswer {\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n}\n\n:host ::ng-deep table {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n\n:host ::ng-deep table tr:nth-child(odd) {\n  background-color: var(--background-odd);\n}\n\n:host ::ng-deep table tr:last-child td {\n  border-bottom: 0;\n}\n\n:host ::ng-deep table td {\n  padding: 5px;\n  line-height: 1.5;\n  border-bottom: 1px solid var(--stroke);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyw4QkFBQTtBQUNIOztBQUVBO0VBQ0csK0JBQUE7QUFDSDs7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFHSTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7QUFEUjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUlRO0VBQ0ksdUNBQUE7QUFGWjs7QUFLUTtFQUNJLGdCQUFBO0FBSFo7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQUpaIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgIC0tYmFja2dyb3VuZC1vZGQ6IHZhcigtLWxpZ2h0KTtcclxufVxyXG5cclxuOmhvc3QtY29udGV4dChodG1sLmRhcmspIHtcclxuICAgLS1iYWNrZ3JvdW5kLW9kZDogdmFyKC0tbWVkaXVtKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIC5hZGRvbi1tb2RfbGVzc29uLXNsaWRlc2hvdyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnN0dWRlbnRhbnN3ZXIge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW9kZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cjpsYXN0LWNoaWxkIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.ts ***!
  \******************************************************/
/*! exports provided: AddonModLessonPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPage", function() { return AddonModLessonPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/menu-modal/menu-modal */ "./src/addons/mod/lesson/components/menu-modal/menu-modal.ts");
/* harmony import */ var _services_lesson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/lesson */ "./src/addons/mod/lesson/services/lesson.ts");
/* harmony import */ var _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/lesson-helper */ "./src/addons/mod/lesson/services/lesson-helper.ts");
/* harmony import */ var _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/lesson-offline */ "./src/addons/mod/lesson/services/lesson-offline.ts");
/* harmony import */ var _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/lesson-sync */ "./src/addons/mod/lesson/services/lesson-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page that allows attempting and reviewing a lesson.
 */
let AddonModLessonPlayerPage = class AddonModLessonPlayerPage {
    constructor(changeDetector, formBuilder) {
        this.changeDetector = changeDetector;
        this.formBuilder = formBuilder;
        this.component = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].COMPONENT;
        this.LESSON_EOL = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
        this.messages = []; // Messages to display to the user.
        this.processDataButtons = []; // Buttons to display after processing a page.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.menuShown = false; // Whether menu is shown.
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.password = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('password');
                this.review = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('review');
                this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('pageId');
                this.retakeToReview = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('retake');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            try {
                // Fetch the Lesson data.
                const success = yield this.fetchLessonData();
                if (success) {
                    // Review data loaded or new retake started, remove any retake being finished in sync.
                    _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
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
        if (this.lesson) {
            // Unblock the lesson so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].unblockOperation(this.component, this.lesson.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @returns Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || !this.questionForm) {
                return true;
            }
            if (this.question && !this.eolData && !this.processData && this.originalData) {
                // Question shown. Check if there is any change.
                if (!_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].basicLeftCompare(this.questionForm.getRawValue(), this.originalData, 3)) {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.confirmcanceledit'));
                }
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        if (this.menuShown) {
            _singletons__WEBPACK_IMPORTED_MODULE_12__["ModalController"].dismiss();
        }
    }
    /**
     * A button was clicked.
     *
     * @param data Button data.
     */
    buttonClicked(data) {
        this.processPage(data);
    }
    /**
     * Call a function and go offline if allowed and the call fails.
     *
     * @param func Function to call.
     * @param options Options passed to the function.
     * @returns Promise resolved in success, rejected otherwise.
     */
    callFunction(func, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield func();
            }
            catch (error) {
                if (this.offline || this.review || !_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson)) {
                    // Already offline or not allowed.
                    throw error;
                }
                if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // WebService returned an error, cannot perform the action.
                    throw error;
                }
                // Go offline and retry.
                this.offline = true;
                // Get the possible jumps now.
                this.jumps = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 1 /* PREFER_CACHE */,
                });
                // Call the function again with offline mode and the new jumps.
                options.readingStrategy = 1 /* PREFER_CACHE */;
                options.jumps = this.jumps;
                options.offline = true;
                return func();
            }
        });
    }
    /**
     * Change the page from menu or when continuing from a feedback page.
     *
     * @param pageId Page to load.
     * @param ignoreCurrent If true, allow loading current page.
     * @returns Promise resolved when done.
     */
    changePage(pageId, ignoreCurrent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!ignoreCurrent && !this.eolData && this.currentPage == pageId) {
                // Page already loaded, stop.
                return;
            }
            this.loaded = true;
            this.messages = [];
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get the lesson data and load the page.
     *
     * @returns Promise resolved with true if success, resolved with false otherwise.
     */
    fetchLessonData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.lesson = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLesson(this.courseId, this.cmId);
                this.title = this.lesson.name; // Temporary title.
                // Block the lesson so it cannot be synced.
                _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].blockOperation(this.component, this.lesson.id);
                // Wait for any ongoing sync to finish. We won't sync a lesson while it's being played.
                yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].waitForSync(this.lesson.id);
                // If lesson has offline data already, use offline mode.
                this.offline = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasOfflineData(this.lesson.id);
                if (!this.offline && !_services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline() && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson) && !this.review) {
                    // Lesson doesn't have offline data, but it allows offline and the device is offline. Use offline mode.
                    this.offline = true;
                }
                const lessonId = this.lesson.id;
                const options = {
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                this.accessInfo = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation(lessonId, options), options);
                const promises = [];
                this.canManage = this.accessInfo.canmanage;
                this.retake = this.accessInfo.attemptscount;
                this.showRetake = !this.currentPage && this.retake > 0; // Only show it in first page if it isn't the first retake.
                if (this.accessInfo.preventaccessreasons.length) {
                    // If it's a password protected lesson and we have the password, allow playing it.
                    const preventReason = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPreventAccessReason(this.accessInfo, !!this.password, this.review);
                    if (preventReason) {
                        // Lesson cannot be played, show message and go back.
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](preventReason.message);
                    }
                }
                if (this.review && this.retakeToReview != this.accessInfo.attemptscount - 1) {
                    // Reviewing a retake that isn't the last one. Error.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_lesson.errorreviewretakenotlast'));
                }
                if (this.password) {
                    // Lesson uses password, get the whole lesson object.
                    const options = {
                        password: this.password,
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    };
                    promises.push(this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLessonWithPassword(lessonId, options), options).then((lesson) => {
                        this.lesson = lesson;
                        return;
                    }));
                }
                if (this.offline) {
                    // Offline mode, get the list of possible jumps to allow navigation.
                    promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                        cmId: this.cmId,
                        readingStrategy: 1 /* PREFER_CACHE */,
                    }).then((jumpList) => {
                        this.jumps = jumpList;
                        return;
                    }));
                }
                yield Promise.all(promises);
                this.mediaFile = (_a = this.lesson.mediafiles) === null || _a === void 0 ? void 0 : _a[0];
                this.lessonWidth = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediawidth) : '';
                this.lessonHeight = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediaheight) : '';
                yield this.launchRetake(this.currentPage);
                return true;
            }
            catch (error) {
                if (this.review && this.retakeToReview && _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // The user cannot review the retake. Unmark the retake as being finished in sync.
                    yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return false;
            }
        });
    }
    /**
     * Finish the retake.
     *
     * @param outOfTime Whether the retake is finished because the user ran out of time.
     * @returns Promise resolved when done.
     */
    finishRetake(outOfTime) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.lesson) {
                return;
            }
            const lesson = this.lesson;
            this.messages = [];
            if (this.offline && _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline()) {
                // Offline mode but the app is online. Try to sync the data.
                const result = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(_services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].syncLesson(lesson.id, true, true));
                if ((_a = result === null || result === void 0 ? void 0 : result.warnings) === null || _a === void 0 ? void 0 : _a.length) {
                    // Some data was deleted. Check if the retake has changed.
                    const info = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation(lesson.id, {
                        cmId: this.cmId,
                    });
                    if (info.attemptscount != this.accessInfo.attemptscount) {
                        // The retake has changed. Leave the view and show the error.
                        this.forceLeave = true;
                        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](result.warnings[0]);
                    }
                    // Retake hasn't changed, show the warning and finish the retake in offline.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showAlert(undefined, result.warnings[0]);
                }
                this.offline = false;
            }
            // Now finish the retake.
            const options = {
                password: this.password,
                outOfTime,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
            };
            const data = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].finishRetake(lesson, this.courseId, options), options);
            this.title = lesson.name;
            this.eolData = data.data;
            this.messages = this.messages.concat(data.messages);
            this.processData = undefined;
            _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'lesson' });
            // Format activity link if present.
            if (this.eolData.activitylink) {
                this.activityLink = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].formatActivityLink(this.eolData.activitylink.value);
            }
            else {
                this.activityLink = undefined;
            }
            // Format review lesson if present.
            if (this.eolData.reviewlesson) {
                const params = _services_utils_url__WEBPACK_IMPORTED_MODULE_10__["CoreUrlUtils"].extractUrlParams(this.eolData.reviewlesson.value);
                if (!params || !params.pageid) {
                    // No pageid in the URL, the user cannot review (probably didn't answer any question).
                    delete this.eolData.reviewlesson;
                }
                else {
                    this.reviewPageId = Number(params.pageid);
                }
            }
            this.logPageLoaded(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL, _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_lesson.congratulations'));
        });
    }
    /**
     * Jump to a certain page after performing an action.
     *
     * @param pageId The page to load.
     * @returns Promise resolved when done.
     */
    jumpToPage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId === 0) {
                // Not a valid page, return to entry view.
                // This happens, for example, when the user clicks to go to previous page and there is no previous page.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            else if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            // Load new page.
            this.messages = [];
            return this.loadPage(pageId);
        });
    }
    /**
     * Start or continue a retake.
     *
     * @param pageId The page to load.
     * @returns Promise resolved when done.
     */
    launchRetake(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data;
            if (this.review) {
                // Review mode, no need to launch the retake.
            }
            else if (!this.offline) {
                // Not in offline mode, launch the retake.
                data = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].launchRetake(this.lesson.id, this.password, pageId);
            }
            else {
                // Check if there is a finished offline retake.
                const finished = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasFinishedRetake(this.lesson.id);
                if (finished) {
                    // Always show EOL page.
                    pageId = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
                }
            }
            this.currentPage = pageId || this.accessInfo.firstpageid;
            this.messages = (data === null || data === void 0 ? void 0 : data.messages) || [];
            if (this.lesson.timelimit && !this.accessInfo.canmanage) {
                // Get the last lesson timer.
                const timers = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getTimers(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 2 /* ONLY_NETWORK */,
                });
                this.endTime = timers[timers.length - 1].starttime + this.lesson.timelimit;
            }
            return this.loadPage(this.currentPage);
        });
    }
    /**
     * Load the lesson menu.
     *
     * @returns Promise resolved when done.
     */
    loadMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loadingMenu || !this.lesson) {
                // Already loading.
                return;
            }
            try {
                this.loadingMenu = true;
                const lessonId = this.lesson.id;
                const options = {
                    password: this.password,
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                const pages = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPages(lessonId, options), options);
                this.lessonPages = pages.map((entry) => entry.page);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading menu.');
            }
            finally {
                this.loadingMenu = false;
            }
        });
    }
    /**
     * Load a certain page.
     *
     * @param pageId The page to load.
     * @returns Promise resolved when done.
     */
    loadPage(pageId) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            else if (!this.lesson) {
                return;
            }
            const lesson = this.lesson;
            const options = {
                password: this.password,
                review: this.review,
                includeContents: true,
                cmId: this.cmId,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
                includeOfflineData: true,
            };
            const data = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPageData(lesson, pageId, options), options);
            if (data.newpageid == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            this.pageData = data;
            this.title = data.page.title;
            this.pageContent = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageContentsFromPageData(data);
            this.loaded = true;
            this.currentPage = pageId;
            this.messages = this.messages.concat(data.messages);
            // Page loaded, hide EOL and feedback data if shown.
            this.eolData = this.processData = undefined;
            if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(data.page.type)) {
                // Create an empty FormGroup without controls, they will be added in getQuestionFromPageData.
                this.questionForm = this.formBuilder.group({});
                this.pageButtons = [];
                this.question = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getQuestionFromPageData(this.questionForm, data);
                this.originalData = this.questionForm.getRawValue(); // Use getRawValue to include disabled values.
            }
            else {
                this.pageButtons = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageButtonsFromHtml(data.pagecontent || '');
                this.question = undefined;
                this.originalData = undefined;
            }
            // Don't display the navigation menu in review mode, using them displays errors.
            if (data.displaymenu && !this.displayMenu && !this.review) {
                // Load the menu.
                this.loadMenu();
            }
            this.displayMenu = !this.review && !!data.displaymenu;
            if (!this.firstPageLoaded) {
                this.firstPageLoaded = true;
            }
            else {
                this.showRetake = false;
            }
            this.logPageLoaded(pageId, (_b = (_a = data.page) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '');
        });
    }
    /**
     * Log page loaded.
     *
     * @param pageId Page ID.
     */
    logPageLoaded(pageId, title) {
        if (!this.lesson) {
            return;
        }
        _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalytics"].logEvent({
            type: _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalyticsEventType"].VIEW_ITEM,
            ws: 'mod_lesson_get_page_data',
            name: this.lesson.name + ': ' + title,
            data: { id: this.lesson.id, pageid: pageId, category: 'lesson' },
            url: `/mod/lesson/view.php?id=${this.lesson.id}&pageid=${pageId}`,
        });
    }
    /**
     * Log continue page.
     */
    logContinuePageLoaded() {
        if (!this.lesson) {
            return;
        }
        _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalytics"].logEvent({
            type: _services_analytics__WEBPACK_IMPORTED_MODULE_20__["CoreAnalyticsEventType"].VIEW_ITEM,
            ws: 'mod_lesson_process_page',
            name: this.lesson.name + ': ' + _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_lesson.continue'),
            data: { id: this.lesson.id, category: 'lesson' },
            url: '/mod/lesson/continue.php',
        });
    }
    /**
     * Process a page, sending some data.
     *
     * @param data The data to send.
     * @param formSubmitted Whether a form was submitted.
     * @returns Promise resolved when done.
     */
    processPage(data, formSubmitted) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.lesson || !this.pageData) {
                return;
            }
            this.loaded = false;
            const lesson = this.lesson;
            const pageData = this.pageData;
            const options = {
                password: this.password,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
            };
            try {
                const result = yield this.callFunction(() => _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].processPage(lesson, this.courseId, pageData, data, options), options);
                if (formSubmitted) {
                    _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormSubmittedEvent(this.formElement, result.sent, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
                }
                if (!this.offline && !this.review && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(lesson)) {
                    // Lesson allows offline and the user changed some data in server. Update cached data.
                    const retake = this.accessInfo.attemptscount;
                    const options = {
                        cmId: this.cmId,
                        readingStrategy: 2 /* ONLY_NETWORK */,
                    };
                    // Update in background the list of content pages viewed or question attempts.
                    if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(((_b = (_a = this.pageData) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.type) || -1)) {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getQuestionsAttemptsOnline(lesson.id, retake, options);
                    }
                    else {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getContentPagesViewedOnline(lesson.id, retake, options);
                    }
                }
                if (result.nodefaultresponse || result.inmediatejump) {
                    // Don't display feedback or force a redirect to a new page. Load the new page.
                    return yield this.jumpToPage(result.newpageid);
                }
                // Not inmediate jump, show the feedback.
                result.feedback = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].removeQuestionFromFeedback(result.feedback);
                this.messages = result.messages;
                this.processData = result;
                this.processDataButtons = [];
                if (lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached && !result.reviewmode) {
                    // User can try again, show button to do so.
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.reviewquestionback',
                        pageId: this.currentPage,
                    });
                }
                // Button to continue.
                if (lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached) {
                    /* If both the "Yes, I'd like to try again" and "No, I just want to go on to the next question" point to the
                        same page then don't show the "No, I just want to go on to the next question" button. It's confusing. */
                    if (((_c = pageData.page) === null || _c === void 0 ? void 0 : _c.id) != result.newpageid) {
                        // Button to continue the lesson (the page to go is configured by the teacher).
                        this.processDataButtons.push({
                            label: 'addon.mod_lesson.reviewquestioncontinue',
                            pageId: result.newpageid,
                        });
                    }
                }
                else {
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.continue',
                        pageId: result.newpageid,
                    });
                }
                this.logContinuePageLoaded();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error processing page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Review the lesson.
     *
     * @param pageId Page to load.
     */
    reviewLesson(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            this.review = true;
            this.offline = false; // Don't allow offline mode in review.
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Submit a question.
     *
     * @param e Event.
     */
    submitQuestion(e) {
        e.preventDefault();
        e.stopPropagation();
        this.loaded = false;
        // Use getRawValue to include disabled values.
        const data = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].prepareQuestionData(this.question, this.questionForm.getRawValue());
        this.processPage(data, true).finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Time up.
     */
    timeUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Time up called, hide the timer.
            this.endTime = undefined;
            this.loaded = false;
            try {
                yield this.finishRetake(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error finishing attempt');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Show the navigation modal.
     *
     * @returns Promise resolved when done.
     */
    showMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuShown = true;
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                component: _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__["AddonModLessonMenuModalPage"],
                componentProps: {
                    pageInstance: this,
                },
            });
            this.menuShown = false;
        });
    }
};
AddonModLessonPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonModLessonPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['questionFormEl',] }]
};
AddonModLessonPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-lesson-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/lesson/pages/player/player.scss")).default]
    })
], AddonModLessonPlayerPage);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/user-retake/user-retake.scss":
/*!******************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/user-retake/user-retake.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .button-disabled {\n  opacity: 0.4;\n}\n:host .addon-mod_lesson-highlight {\n  --background: var(--primary-tint);\n}\n:host .addon-mod_lesson-highlight ion-label, :host .addon-mod_lesson-highlight ion-label p {\n  color: var(--primary-shade);\n}\n:host .item-interactive-disabled ion-label {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy91c2VyLXJldGFrZS91c2VyLXJldGFrZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQUFSO0FBR0k7RUFDSSxpQ0FBQTtBQURSO0FBR1E7RUFDSSwyQkFBQTtBQURaO0FBS0k7RUFDSSxZQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FkZG9ucy9tb2QvbGVzc29uL3BhZ2VzL3VzZXItcmV0YWtlL3VzZXItcmV0YWtlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuYnV0dG9uLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1vZF9sZXNzb24taGlnaGxpZ2h0IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktdGludCk7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCwgaW9uLWxhYmVsIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/mod/lesson/pages/user-retake/user-retake.ts":
/*!****************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/user-retake/user-retake.ts ***!
  \****************************************************************/
/*! exports provided: AddonModLessonUserRetakePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonUserRetakePage", function() { return AddonModLessonUserRetakePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_lesson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/lesson */ "./src/addons/mod/lesson/services/lesson.ts");
/* harmony import */ var _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/lesson-helper */ "./src/addons/mod/lesson/services/lesson-helper.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
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
 * Page that displays a retake made by a certain user.
 */
let AddonModLessonUserRetakePage = class AddonModLessonUserRetakePage {
    constructor() {
        this.component = _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLessonProvider"].COMPONENT;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_12__["CoreTime"].once(() => this.performLogView());
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('userId') || _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
            this.retakeNumber = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('retake');
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].back();
            return;
        }
        // Fetch the data.
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Change the retake displayed.
     *
     * @param retakeNumber The new retake number.
     */
    changeRetake(retakeNumber) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            try {
                yield this.setRetake(retakeNumber);
                this.performLogView();
            }
            catch (error) {
                this.selectedRetake = (_a = this.previousSelectedRetake) !== null && _a !== void 0 ? _a : this.selectedRetake;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(_services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].addDataNotDownloadedError(error, 'Error getting attempt.'));
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        this.refreshData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Get lesson and retake data.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.lesson = yield _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].getLesson(this.courseId, this.cmId);
                // Get the retakes overview for all participants.
                const data = yield _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].getRetakesOverview(this.lesson.id, {
                    cmId: this.cmId,
                });
                // Search the student.
                const student = (_a = data === null || data === void 0 ? void 0 : data.students) === null || _a === void 0 ? void 0 : _a.find(student => student.id == this.userId);
                if (!student) {
                    // Student not found.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_lesson.cannotfinduser'));
                }
                if (!student.attempts.length) {
                    // No retakes.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_2__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_lesson.cannotfindattempt'));
                }
                student.bestgrade = _services_utils_text__WEBPACK_IMPORTED_MODULE_7__["CoreTextUtils"].roundToDecimals(student.bestgrade, 2);
                student.attempts.forEach((retake) => {
                    if (!this.selectedRetake && this.retakeNumber == retake.try) {
                        // The retake specified as parameter exists. Use it.
                        this.selectedRetake = this.retakeNumber;
                    }
                    retake.label = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__["AddonModLessonHelper"].getRetakeLabel(retake);
                });
                if (!this.selectedRetake) {
                    // Retake number not specified or not valid, use the last retake.
                    this.selectedRetake = student.attempts[student.attempts.length - 1].try;
                }
                // Get the profile image of the user.
                const user = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_3__["CoreUser"].getProfile(student.id, this.courseId, true));
                this.student = student;
                this.student.profileimageurl = user === null || user === void 0 ? void 0 : user.profileimageurl;
                yield this.setRetake(this.selectedRetake);
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting data.', true);
            }
        });
    }
    /**
     * Refreshes data.
     *
     * @returns Promise resolved when done.
     */
    refreshData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].invalidateLessonData(this.courseId));
            if (this.lesson) {
                promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].invalidateRetakesOverview(this.lesson.id));
                promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].invalidateUserRetakesForUser(this.lesson.id, this.userId));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(Promise.all(promises));
            yield this.fetchData();
        });
    }
    /**
     * Set the retake to view and load its data.
     *
     * @param retakeNumber Retake number to set.
     * @returns Promise resolved when done.
     */
    setRetake(retakeNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedRetake = retakeNumber;
            const retakeData = yield _services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].getUserRetake(this.lesson.id, retakeNumber, {
                cmId: this.cmId,
                userId: this.userId,
            });
            this.retake = this.formatRetake(retakeData);
            this.previousSelectedRetake = this.selectedRetake;
        });
    }
    /**
     * Format retake data, adding some calculated data.
     *
     * @param retakeData Retake data.
     * @returns Formatted data.
     */
    formatRetake(retakeData) {
        const formattedData = retakeData;
        if (formattedData.userstats.gradeinfo) {
            // Completed.
            formattedData.userstats.grade = _services_utils_text__WEBPACK_IMPORTED_MODULE_7__["CoreTextUtils"].roundToDecimals(formattedData.userstats.grade, 2);
            this.timeTakenReadable = _singletons_time__WEBPACK_IMPORTED_MODULE_12__["CoreTime"].formatTime(formattedData.userstats.timetotake);
        }
        // Format pages data.
        formattedData.answerpages.forEach((page) => {
            var _a, _b;
            if (_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].answerPageIsContent(page)) {
                page.isContent = true;
                if ((_a = page.answerdata) === null || _a === void 0 ? void 0 : _a.answers) {
                    page.answerdata.answers.forEach((answer) => {
                        // Content pages only have 1 valid field in the answer array.
                        answer[0] = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__["AddonModLessonHelper"].getContentPageAnswerDataFromHtml(answer[0]);
                    });
                }
            }
            else if (_services_lesson__WEBPACK_IMPORTED_MODULE_10__["AddonModLesson"].answerPageIsQuestion(page)) {
                page.isQuestion = true;
                if ((_b = page.answerdata) === null || _b === void 0 ? void 0 : _b.answers) {
                    page.answerdata.answers.forEach((answer) => {
                        // Only the first field of the answer array requires to be parsed.
                        answer[0] = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_11__["AddonModLessonHelper"].getQuestionPageAnswerDataFromHtml(answer[0]);
                    });
                }
            }
        });
        return formattedData;
    }
    /**
     * Log view.
     */
    performLogView() {
        if (!this.lesson) {
            return;
        }
        _services_analytics__WEBPACK_IMPORTED_MODULE_13__["CoreAnalytics"].logEvent({
            type: _services_analytics__WEBPACK_IMPORTED_MODULE_13__["CoreAnalyticsEventType"].VIEW_ITEM,
            ws: 'mod_lesson_get_user_attempt',
            name: this.lesson.name + ': ' + _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('addon.mod_lesson.detailedstats'),
            data: { id: this.lesson.id, userid: this.userId, try: this.selectedRetake, category: 'lesson' },
            url: `/mod/lesson/report.php?id=${this.cmId}&action=reportdetail&userid=${this.userId}&try=${this.selectedRetake}`,
        });
    }
};
AddonModLessonUserRetakePage.ctorParameters = () => [];
AddonModLessonUserRetakePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-lesson-user-retake',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-retake.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/user-retake/user-retake.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-retake.scss */ "./src/addons/mod/lesson/pages/user-retake/user-retake.scss")).default]
    })
], AddonModLessonUserRetakePage);



/***/ })

}]);
//# sourceMappingURL=lesson-lazy-module.js.map