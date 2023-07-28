(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forum-new-discussion-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/new-discussion/new-discussion.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/new-discussion/new-discussion.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_forum.addanewdiscussion' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The context menu will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"discussions\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!groupsLoaded\" (ionRefresh)=\"refreshGroups($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"groupsLoaded\">\r\n        <form *ngIf=\"showForm\" #newDiscFormEl>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">{{ 'addon.mod_forum.subject' | translate }}</ion-label>\r\n                <ion-input [(ngModel)]=\"newDiscussion.subject\" type=\"text\" [placeholder]=\"'addon.mod_forum.subject' | translate\"\r\n                    name=\"subject\">\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">{{ 'addon.mod_forum.message' | translate }}</ion-label>\r\n                <core-rich-text-editor name=\"addon_mod_forum_new_discussion\" contextLevel=\"module\" elementId=\"message\"\r\n                    [control]=\"messageControl\" [placeholder]=\"'addon.mod_forum.message' | translate\" [component]=\"component\"\r\n                    [componentId]=\"forum.cmid\" [autoSave]=\"true\" [contextInstanceId]=\"forum.cmid\"\r\n                    (contentChanged)=\"onMessageChange($event)\">\r\n                </core-rich-text-editor>\r\n            </ion-item>\r\n            <ion-item button class=\"divider ion-text-wrap\" (click)=\"toggleAdvanced()\" detail=\"false\" [attr.aria-expanded]=\"advanced\"\r\n                [attr.aria-label]=\"(advanced ? 'core.hideadvanced' : 'core.showadvanced') | translate\" role=\"heading\"\r\n                aria-controls=\"addon-mod-forum-new-discussion-advanced\">\r\n                <ion-icon name=\"fas-chevron-right\" flip-rtl slot=\"start\" aria-hidden=\"true\" class=\"expandable-status-icon\"\r\n                    [class.expandable-status-icon-expanded]=\"advanced\"></ion-icon>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.mod_forum.advanced' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n            <div *ngIf=\"advanced\" id=\"addon-mod-forum-new-discussion-advanced\">\r\n                <ion-item *ngIf=\"showGroups && groupIds.length > 1 && accessInfo.cancanposttomygroups\">\r\n                    <ion-label>{{ 'addon.mod_forum.posttomygroups' | translate }}</ion-label>\r\n                    <ion-toggle [(ngModel)]=\"newDiscussion.postToAllGroups\" name=\"postallgroups\"></ion-toggle>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"showGroups\" class=\"core-edit-set-group\">\r\n                    <ion-label>{{ 'addon.mod_forum.group' | translate }}</ion-label>\r\n                    <ion-select [(ngModel)]=\"newDiscussion.groupId\" [disabled]=\"newDiscussion.postToAllGroups\" interface=\"action-sheet\"\r\n                        name=\"groupid\" [interfaceOptions]=\"{header: 'addon.mod_forum.group' | translate}\"\r\n                        [cancelText]=\"'core.cancel' | translate\" (ionChange)=\"calculateGroupName()\">\r\n                        <ion-select-option *ngFor=\"let group of groups\" [value]=\"group.id\">\r\n                            <core-format-text [text]=\"group.name\" contextLevel=\"course\" [contextInstanceId]=\"courseId\"\r\n                                [wsNotFiltered]=\"true\"></core-format-text>\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>{{ 'addon.mod_forum.discussionsubscription' | translate }}</ion-label>\r\n                    <ion-toggle [(ngModel)]=\"newDiscussion.subscribe\" name=\"subscribe\"></ion-toggle>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"canPin\">\r\n                    <ion-label>{{ 'addon.mod_forum.discussionpinned' | translate }}</ion-label>\r\n                    <ion-toggle [(ngModel)]=\"newDiscussion.pin\" name=\"pin\"></ion-toggle>\r\n                </ion-item>\r\n                <core-attachments *ngIf=\"canCreateAttachments && forum && forum.maxattachments > 0\" [files]=\"newDiscussion.files\"\r\n                    [maxSize]=\"forum.maxbytes\" [maxSubmissions]=\"forum.maxattachments\" [component]=\"component\" [componentId]=\"forum.cmid\"\r\n                    [allowOffline]=\"true\" [courseId]=\"courseId\">\r\n                </core-attachments>\r\n            </div>\r\n            <ion-item *ngIf=\"showGroups && postInGroupMessage && !newDiscussion.postToAllGroups\" class=\"addon-forum-group-info\">\r\n                <ion-icon name=\"fas-circle-info\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>\r\n                    <core-format-text [text]=\"postInGroupMessage\" contextLevel=\"course\" [contextInstanceId]=\"courseId\"\r\n                        [wsNotFiltered]=\"true\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"addon-forum-new-discussion-buttons\">\r\n                <ion-label>\r\n                    <ion-row>\r\n                        <ion-col *ngIf=\"hasOffline\">\r\n                            <ion-button expand=\"block\" fill=\"outline\" (click)=\"discard()\">{{ 'core.discard' | translate }}</ion-button>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <ion-button expand=\"block\" [disabled]=\"newDiscussion.subject == '' || newDiscussion.message == null\"\r\n                                (click)=\"add()\">\r\n                                {{ 'addon.mod_forum.posttoforum' | translate }}\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n        </form>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/forum/forum-new-discussion-lazy.module.ts":
/*!******************************************************************!*\
  !*** ./src/addons/mod/forum/forum-new-discussion-lazy.module.ts ***!
  \******************************************************************/
/*! exports provided: AddonForumNewDiscussionLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonForumNewDiscussionLazyModule", function() { return AddonForumNewDiscussionLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/mod/forum/components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _addons_mod_forum_pages_new_discussion_new_discussion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/mod/forum/pages/new-discussion/new-discussion */ "./src/addons/mod/forum/pages/new-discussion/new-discussion.ts");
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
        component: _addons_mod_forum_pages_new_discussion_new_discussion__WEBPACK_IMPORTED_MODULE_7__["AddonModForumNewDiscussionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    }];
let AddonForumNewDiscussionLazyModule = class AddonForumNewDiscussionLazyModule {
};
AddonForumNewDiscussionLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_6__["CoreSharedModule"],
            _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__["AddonModForumComponentsModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _addons_mod_forum_pages_new_discussion_new_discussion__WEBPACK_IMPORTED_MODULE_7__["AddonModForumNewDiscussionPage"],
        ],
    })
], AddonForumNewDiscussionLazyModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/new-discussion/new-discussion.scss":
/*!***********************************************************************!*\
  !*** ./src/addons/mod/forum/pages/new-discussion/new-discussion.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-forum-group-info > ion-icon[slot] {\n  color: var(--ion-color-info);\n  margin-right: 16px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .addon-forum-group-info > ion-icon[slot] {\n    margin-right: unset;\n    -webkit-margin-end: 16px;\n    margin-inline-end: 16px;\n  }\n}\n:host .addon-forum-new-discussion-buttons ion-label {\n  margin-top: 0;\n}\n:host .addon-forum-new-discussion-buttons ion-col {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL21vZC9mb3J1bS9wYWdlcy9uZXctZGlzY3Vzc2lvbi9uZXctZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBNEdBOztFQUFBO0FDOUdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUMzRFE7RUFDSSw0QkFBQTtFTHVQUixrQkt0UHlDO0FBa0Q3QztBTHVNTTtFQUNFO0lBS0ksbUJBQUE7SUFLRix3QktwUW1DO0lMcVFuQyx1QktyUW1DO0VBd0QzQztBQUNGO0FBcERRO0VBQ0ksYUFBQTtBQXNEWjtBQW5EUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQXFEWiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9mb3J1bS9wYWdlcy9uZXctZGlzY3Vzc2lvbi9uZXctZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXHJcbiAqL1xyXG5cclxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcclxuJGFzc2V0cy1wYXRoOiBcIi4uL2Fzc2V0c1wiO1xyXG5cclxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy5jdXN0b20uc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBzdHJpbmcgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3NcclxuICovXHJcblxyXG5cclxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XHJcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gIEBpZiAkaW5kZXgge1xyXG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5AZnVuY3Rpb24gc3RyLXNwbGl0KCRzdHJpbmcsICRzZXBhcmF0b3IpIHtcclxuICAvLyBlbXB0eSBhcnJheS9saXN0XHJcbiAgJHNwbGl0LWFycjogKCk7XHJcbiAgLy8gZmlyc3QgaW5kZXggb2Ygc2VwYXJhdG9yIGluIHN0cmluZ1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcclxuICBAd2hpbGUgJGluZGV4ICE9IG51bGwge1xyXG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XHJcbiAgICAvLyBwdXNoIGl0ZW0gdG8gYXJyYXlcclxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XHJcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXHJcbiAgICAkc3RyaW5nOiBzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgMSk7XHJcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIH1cclxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcclxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XHJcblxyXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XHJcbiAgJHN0YXJ0LWluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHN0YXJ0KTtcclxuXHJcbiAgQGlmICRzdGFydC1pbmRleCB7XHJcbiAgICAkcG9zdDogc3RyLXNsaWNlKCRzdHJpbmcsICRzdGFydC1pbmRleCArIHN0ci1sZW5ndGgoJHN0YXJ0KSk7XHJcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xyXG5cclxuICAgIEBpZiAkZW5kLWluZGV4IHtcclxuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBDb250YWlucyBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1jb250YWlucygkc3RyaW5nLCAkbmVlZGxlKSB7XHJcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xyXG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vLyBVUkwgRW5jb2RlIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gdXJsLWVuY29kZSgkdmFsKSB7XHJcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xyXG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XHJcbiAgQHJldHVybiAkZW5jb2RlZDtcclxufVxyXG5cclxuXHJcbi8vIEFkZCBSb290IFNlbGVjdG9yXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFkZHMgYSByb290IHNlbGVjdG9yIHVzaW5nIGhvc3QtY29udGV4dCBiYXNlZCBvbiB0aGUgc2VsZWN0b3IgcGFzc2VkXHJcbi8vXHJcbi8vIEV4YW1wbGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5maXhlZFxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24taGlkZSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcclxuLy8gLS0+IFtkaXI9cnRsXSAuc2hhZG93XHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XHJcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XHJcblxyXG4gICRsaXN0OiAoKTtcclxuXHJcbiAgQGVhY2ggJHNlbGVjdG9yIGluICRzZWxlY3RvcnMge1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XHJcbiAgICBAaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdChcIikge1xyXG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuXHJcbiAgICAgICRuZXctZWxlbWVudDogKCk7XHJcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xyXG5cclxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcclxuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6ICRlbGVtZW50O1xyXG5cclxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xyXG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpKVwiLCBcIilcIik7XHJcbiAgICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XHJcblxyXG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkc2NvcGVkLWVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRuZXctZWxlbWVudCwgY29tbWEpO1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XHJcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3RcIikge1xyXG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xyXG4gICAgICAvLyBJZiB0aGUgc2VsZWN0b3IgZG9lcyBub3QgY29udGFpbiBob3N0IGF0IGFsbCBpdCBpcyBlaXRoZXIgYSBzaGFkb3dcclxuICAgICAgLy8gb3Igbm9ybWFsIGVsZW1lbnQgc28gYXBwZW5kIGJvdGggdGhlIGRpciBjaGVjayBhbmQgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCIjeyRhZGRIb3N0U2VsZWN0b3J9ICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkbGlzdDtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcclxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xyXG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XHJcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR2V0cyB0aGUgc3BlY2lmaWMgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSB0aGUgbmFtZSBhbmQgdmFyaWF0aW9uLiBBbHBoYS9yZ2IgYXJlIG9wdGlvbmFsLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpXHJcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSwgMC41KSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSwgMC41KVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcclxuICAkdmFsdWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRuYW1lKTtcclxuICAkdmFsdWU6IG1hcC1nZXQoJHZhbHVlcywgJHZhcmlhdGlvbik7XHJcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xyXG5cclxuICBAaWYgKCR2YXJpYXRpb24gPT0gYmFzZSkge1xyXG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcclxuICB9XHJcblxyXG4gIEBpZiAoJGFscGhhKSB7XHJcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKCN7JHZhcmlhYmxlfS1yZ2IsICR2YWx1ZSksICRhbHBoYSk7XHJcbiAgfVxyXG4gIEBpZiAoJHJnYikge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XHJcbn1cclxuXHJcbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XHJcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcclxuICBAaW5jbHVkZSBtYXJnaW4oMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgY29udGVudDogXCJcIjtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxyXG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xyXG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcclxuXHJcbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XHJcbn1cclxuXHJcblxyXG4vLyBCcmVha3BvaW50IE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXHJcbi8vXHJcbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcclxuLy9cclxuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxyXG4vL1xyXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNTc2cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG5cclxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxyXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiLXNtXCJcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gIEBpZiAkbWluIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBtZFxyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxyXG4vLyAgICBtZFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XHJcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XHJcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXHJcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cclxuLy9cclxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxyXG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHJcbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNzY3Ljk4cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXHJcbi8vXHJcbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcclxuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbXVsdGktZGlyKCkge1xyXG4gIEBjb250ZW50O1xyXG5cclxuICAvLyAkcm9vdDogI3smfTtcclxuICAvLyBAYXQtcm9vdCBbZGlyXSB7XHJcbiAgLy8gICAjeyRyb290fSB7XHJcbiAgLy8gICAgIEBjb250ZW50O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuQG1peGluIHJ0bCgpIHtcclxuICAkcm9vdDogI3smfTtcclxuXHJcbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGx0cigpIHtcclxuICBAY29udGVudDtcclxufVxyXG5cclxuXHJcbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcclxuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xyXG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XHJcblxyXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xyXG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICB9IEBlbHNlIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICAgIEBhdC1yb290IHtcclxuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xyXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcclxuICAjeyRwcm9wfS10b3A6ICR0b3A7XHJcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcclxuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgcmlnaHQ6IHVuc2V0O1xyXG5cclxuICAgICAgbGVmdDogJGVuZDtcclxuICAgICAgcmlnaHQ6ICRzdGFydDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgdG9wOiAkdG9wO1xyXG4gIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcclxuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxyXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcclxuICAkb3RoZXItZGlyOiBudWxsO1xyXG5cclxuICBAaWYgJGRpciA9PSBsdHIge1xyXG4gICAgJG90aGVyLWRpcjogcnRsO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgJG90aGVyLWRpcjogbHRyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkZGlyO1xyXG4gIH1cclxuICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcclxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XHJcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcclxuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcclxuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcclxuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcclxuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XHJcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xyXG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XHJcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcclxuICAkZXh0cmE6IG51bGw7XHJcblxyXG4gICR4OiBudWxsO1xyXG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xyXG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xyXG5cclxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcclxuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XHJcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XHJcblxyXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xyXG5cclxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xyXG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XHJcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcclxuXHJcbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcclxuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XHJcbiAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xyXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xyXG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEl0ZW0gTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gaXRlbS1wdXNoLXN2Zy11cmwoJGZpbGwpIHtcclxuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCB0cnVlKTtcclxufVxyXG4iLCJAdXNlIFwic2FzczptYXRoXCIgYXMgbWF0aDtcclxuXHJcbi8qKlxyXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXHJcbiAqL1xyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIDYuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgJHBlcmNlbnQpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCAtMTAuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xyXG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbn1cclxuXHJcbi8vIElvbmljIENvbG9yc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcclxuLy8gY29sb3JzIG1hcFxyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzLCAkdGhlbWUpIHtcclxuICAgICRjb2xvci10aGVtZXM6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9yLXRoZW1lcywgJHRoZW1lKTtcclxuXHJcbiAgICBAaWYgJHRoZW1lID09ICdkYXJrJyB7XHJcbiAgICAgICAgJGJhc2U6IG1peChtYXAtZ2V0KCRjb2xvci10aGVtZXMsICdsaWdodCcpLCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpO1xyXG59XHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKSB7XHJcbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XHJcbiAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRiYXNlKTtcclxuICAgICR0aW50OiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRiYXNlKTtcclxuXHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcclxuICAgIC0tI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcclxuICAgIC0tI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcblxyXG4gICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuXHJcbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvcmUtZm9jdXMoKSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgLy8gVGhpY2tlciBvcHRpb246XHJcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCRwcm9wZXJ0aWVzOiBhbGwsICRkdXJhdGlvbjogNTAwbXMsICR0aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0KSB7XHJcbiAgICAkdHJhbnNpdGlvbnM6ICgpO1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgJHRyYW5zaXRpb25zOiBhcHBlbmQoJHRyYW5zaXRpb25zLCAkcHJvcGVydHkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24sIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxufVxyXG5cclxuQG1peGluIHNyLW9ubHkoKSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXHJcbiAqL1xyXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcclxuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcclxuXHJcbiAgICBAaWYgKCRlbmQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGFya21vZGUoKSB7XHJcbiAgICAkcm9vdDogI3smfTtcclxuXHJcbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImh0bWwuZGFya1wiKX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcclxuICAgIGZsZXg6IDAgMCAkd2lkdGg7XHJcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDb2xvciBtaXhpbnMuXHJcbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcclxuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XHJcblxyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cclxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cclxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XHJcblxyXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xyXG59XHJcblxyXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcclxuICAgICRyOiByZWQoJGNvbG9yKTtcclxuICAgICRnOiBncmVlbigkY29sb3IpO1xyXG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcclxuXHJcbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XHJcblxyXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XHJcbn1cclxuXHJcbi8vIFdDQUcgY29udHJhc3QgYWxnb3JpdGhtXHJcbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcclxuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XHJcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xyXG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xyXG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xyXG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xyXG5cclxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcclxuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xyXG5cclxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcclxuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cclxuICovXHJcbiIsIi8qXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXHJcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXHJcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XHJcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcclxuXHJcbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cclxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcclxuXHJcbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxyXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICAoXHJcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXHJcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcclxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxyXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXHJcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxyXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXHJcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcclxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxyXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcclxuICpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXHJcbiAqL1xyXG5cclxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiAwcHgsXHJcbiAgICBzbTogNTc2cHgsXHJcbiAgICBtZDogNzY4cHgsXHJcbiAgICBsZzogOTkycHgsXHJcbiAgICB0YWJsZXQ6IDk5MnB4LFxyXG4gICAgeGw6IDEyMDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XHJcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcclxuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLXFyY29kZTogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS4gKGRlcHJlY2F0ZWQgb24gNC4wKVxyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHVzZXIgcGFnZS5cclxuJGNvcmUtdXNlci1oaWRlLXNpdGVpbmZvOiAkY29yZS1tb3JlLWhpZGUtc2l0ZWluZm8gIWRlZmF1bHQ7XHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZXVybDogJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmwgIWRlZmF1bHQ7XHJcblxyXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxyXG4kYWN0aXZpdHktaWNvbi1jb2xvcnM6IChcclxuICAgIGFkbWluaXN0cmF0aW9uOiAjNWQ2M2Y2LFxyXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcclxuICAgIGNvbGxhYm9yYXRpb246ICNmNzYzNGQsXHJcbiAgICBjb21tdW5pY2F0aW9uOiAjMTFhNjc2LFxyXG4gICAgY29udGVudDogIzM5OWJlMixcclxuICAgIGludGVyZmFjZTogI2EzNzhmZlxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNhdGVnb3J5OiAjOGUyNGFhICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY291cnNlOiAkcmVkICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktZ3JvdXA6ICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS11c2VyOiAkYmx1ZSAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXNpdGU6ICRncmVlbiAhZGVmYXVsdDtcclxuXHJcbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXHJcbiAgICBjYXRlZ29yeTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNhdGVnb3J5LFxyXG4gICAgY291cnNlOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY291cnNlLFxyXG4gICAgZ3JvdXA6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1ncm91cCxcclxuICAgIHVzZXI6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS11c2VyLFxyXG4gICAgc2l0ZTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXNpdGUsXHJcbikgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgLmFkZG9uLWZvcnVtLWdyb3VwLWluZm8ge1xyXG4gICAgICAgID4gaW9uLWljb25bc2xvdF0ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWluZm8pO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCAxNnB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLWZvcnVtLW5ldy1kaXNjdXNzaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/forum/pages/new-discussion/new-discussion.ts":
/*!*********************************************************************!*\
  !*** ./src/addons/mod/forum/pages/new-discussion/new-discussion.ts ***!
  \*********************************************************************/
/*! exports provided: AddonModForumNewDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumNewDiscussionPage", function() { return AddonModForumNewDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/mod/forum/services/forum */ "./src/addons/mod/forum/services/forum.ts");
/* harmony import */ var _features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/editor/components/rich-text-editor/rich-text-editor */ "./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts");
/* harmony import */ var _addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/mod/forum/services/forum-sync */ "./src/addons/mod/forum/services/forum-sync.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _addons_mod_forum_services_forum_offline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @addons/mod/forum/services/forum-offline */ "./src/addons/mod/forum/services/forum-offline.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @addons/mod/forum/services/forum-helper */ "./src/addons/mod/forum/services/forum-helper.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../classes/forum-discussions-swipe-manager */ "./src/addons/mod/forum/classes/forum-discussions-swipe-manager.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../classes/forum-discussions-source */ "./src/addons/mod/forum/classes/forum-discussions-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays the new discussion form.
 */
let AddonModForumNewDiscussionPage = class AddonModForumNewDiscussionPage {
    constructor(route, splitView) {
        this.route = route;
        this.splitView = splitView;
        this.component = _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].COMPONENT;
        this.messageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.groupsLoaded = false;
        this.showGroups = false;
        this.hasOffline = false;
        this.canCreateAttachments = true; // Assume we can by default.
        this.canPin = false;
        this.showForm = false;
        this.groups = [];
        this.groupIds = [];
        this.newDiscussion = {
            subject: '',
            message: null,
            postToAllGroups: false,
            groupId: 0,
            subscribe: true,
            pin: false,
            files: [],
        };
        this.advanced = false; // Display all form fields.
        this.accessInfo = {};
        this.isDestroyed = false;
        this.forceLeave = false;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_24__["CoreTime"].once(() => {
            _services_analytics__WEBPACK_IMPORTED_MODULE_25__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_25__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_forum_add_discussion',
                name: _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_forum.addanewdiscussion'),
                data: { id: this.forumId, category: 'forum' },
                url: '/mod/forum/post.php',
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const routeData = this.route.snapshot.data;
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.forumId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('forumId');
                this.timeCreated = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('timeCreated');
                this.initialGroupId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('groupId');
                // Discussion list uses 0 for all participants, but this page WebServices use a different value. Convert it.
                this.initialGroupId = this.initialGroupId === 0 ? _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].ALL_PARTICIPANTS : this.initialGroupId;
                if (this.timeCreated !== 0 && ((_a = routeData.swipeEnabled) !== null && _a !== void 0 ? _a : true)) {
                    const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_23__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__["AddonModForumDiscussionsSource"], [this.courseId, this.cmId, (_b = routeData.discussionsPathPrefix) !== null && _b !== void 0 ? _b : '']);
                    this.discussions = new AddonModForumNewDiscussionDiscussionsSwipeManager(source);
                    yield this.discussions.start();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal(error);
                this.goBack();
                return;
            }
            this.fetchDiscussionData().finally(() => {
                this.groupsLoaded = true;
            });
        });
    }
    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter() {
        if (this.syncObserver) {
            // Already setup.
            return;
        }
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__["AddonModForumSyncProvider"].AUTO_SYNCED, data => {
            if (data.forumId == this.forumId && data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteUserId()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showAlertTranslated('core.notice', 'core.contenteditingsynced');
                this.returnToDiscussions();
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Fetch if forum uses groups and the groups it uses.
     *
     * @param refresh Whether we're refreshing data.
     * @returns Promise resolved when done.
     */
    fetchDiscussionData(refresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const mode = yield _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].getActivityGroupMode(this.cmId);
                const promises = [];
                if (mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].SEPARATEGROUPS || mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].VISIBLEGROUPS) {
                    promises.push(_services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].instance
                        .getActivityAllowedGroups(this.cmId)
                        .then((result) => {
                        let promise;
                        if (mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].VISIBLEGROUPS) {
                            // We need to check which of the returned groups the user can post to.
                            promise = this.validateVisibleGroups(result.groups);
                        }
                        else {
                            // WS already filters groups, no need to do it ourselves. Add "All participants" if needed.
                            promise = this.addAllParticipantsOption(result.groups, true);
                        }
                        // eslint-disable-next-line promise/no-nesting
                        return promise.then((forumGroups) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (forumGroups.length > 0) {
                                this.groups = forumGroups;
                                this.groupIds = forumGroups.map((group) => group.id).filter((id) => id > 0);
                                // Do not override group id.
                                this.newDiscussion.groupId = this.newDiscussion.groupId || this.getInitialGroupId();
                                this.showGroups = true;
                                yield this.calculateGroupName();
                                if (this.groupIds.length <= 1) {
                                    this.newDiscussion.postToAllGroups = false;
                                }
                                return;
                            }
                            else {
                                const message = mode === _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroupsProvider"].SEPARATEGROUPS ?
                                    'addon.mod_forum.cannotadddiscussionall' : 'addon.mod_forum.cannotadddiscussion';
                                throw new Error(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant(message));
                            }
                        }));
                    }));
                }
                else {
                    this.showGroups = false;
                    this.newDiscussion.postToAllGroups = false;
                    // Use the canAddDiscussion WS to check if the user can add attachments and pin discussions.
                    promises.push(_services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].instance
                        .canAddDiscussionToAll(this.forumId, { cmId: this.cmId })
                        .then((response) => {
                        this.canPin = !!response.canpindiscussions;
                        this.canCreateAttachments = !!response.cancreateattachment;
                        return;
                    })));
                }
                // Get forum.
                promises.push(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].getForum(this.courseId, this.cmId).then((forum) => this.forum = forum));
                // Get access information.
                promises.push(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].instance
                    .getAccessInformation(this.forumId, { cmId: this.cmId })
                    .then((accessInfo) => this.accessInfo = accessInfo));
                yield Promise.all(promises);
                // If editing a discussion, get offline data.
                if (this.timeCreated && !refresh) {
                    this.syncId = _addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__["AddonModForumSync"].getForumSyncId(this.forumId);
                    yield _addons_mod_forum_services_forum_sync__WEBPACK_IMPORTED_MODULE_8__["AddonModForumSync"].waitForSync(this.syncId).then(() => {
                        // Do not block if the scope is already destroyed.
                        if (!this.isDestroyed) {
                            _services_sync__WEBPACK_IMPORTED_MODULE_12__["CoreSync"].blockOperation(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].COMPONENT, this.syncId);
                        }
                        // eslint-disable-next-line promise/no-nesting
                        return _addons_mod_forum_services_forum_offline__WEBPACK_IMPORTED_MODULE_13__["AddonModForumOffline"].instance
                            .getNewDiscussion(this.forumId, this.timeCreated)
                            .then((discussion) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.hasOffline = true;
                            discussion.options = discussion.options || {};
                            if (discussion.groupid == _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].ALL_GROUPS) {
                                this.newDiscussion.groupId = this.groups[0].id;
                                this.newDiscussion.postToAllGroups = true;
                            }
                            else {
                                this.newDiscussion.groupId = discussion.groupid;
                                this.newDiscussion.postToAllGroups = false;
                            }
                            this.newDiscussion.subject = discussion.subject;
                            this.newDiscussion.message = discussion.message;
                            this.newDiscussion.subscribe = !!discussion.options.discussionsubscribe;
                            this.newDiscussion.pin = !!discussion.options.discussionpinned;
                            this.messageControl.setValue(discussion.message);
                            yield this.calculateGroupName();
                            // Treat offline attachments if any.
                            if (typeof discussion.options.attachmentsid === 'object' && discussion.options.attachmentsid.offline) {
                                const files = yield _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].getNewDiscussionStoredFiles(this.forumId, this.timeCreated);
                                this.newDiscussion.files = files;
                            }
                            // Show advanced fields by default if any of them has not the default value.
                            if (!this.newDiscussion.subscribe ||
                                this.newDiscussion.pin ||
                                this.newDiscussion.files.length ||
                                this.groups.length > 0 && this.newDiscussion.groupId != this.groups[0].id ||
                                this.newDiscussion.postToAllGroups) {
                                this.advanced = true;
                            }
                            return;
                        }));
                    });
                }
                if (!this.originalData) {
                    // Initialize original data.
                    this.originalData = {
                        subject: this.newDiscussion.subject,
                        message: this.newDiscussion.message,
                        files: this.newDiscussion.files.slice(),
                    };
                }
                this.showForm = true;
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_forum.errorgetgroups', true);
                this.showForm = false;
            }
        });
    }
    /**
     * Validate which of the groups returned by getActivityAllowedGroups in visible groups should be shown to post to.
     *
     * @param forumGroups Forum groups.
     * @returns Promise resolved with the list of groups.
     */
    validateVisibleGroups(forumGroups) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let response;
            // We first check if the user can post to all the groups.
            try {
                response = yield _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
            }
            catch (error) {
                // The call failed, let's assume he can't.
                response = {
                    status: false,
                    canpindiscussions: false,
                    cancreateattachment: true,
                };
            }
            this.canPin = !!response.canpindiscussions;
            this.canCreateAttachments = !!response.cancreateattachment;
            // The user can post to all groups, add the "All participants" option and return them all.
            if (response.status) {
                return this.addAllParticipantsOption(forumGroups, false);
            }
            // The user can't post to all groups, let's check which groups he can post to.
            const promises = [];
            const filtered = [];
            forumGroups.forEach((group) => {
                promises.push(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].instance
                    .canAddDiscussion(this.forumId, group.id, { cmId: this.cmId })
                    // The call failed, let's return true so the group is shown.
                    // If the user can't post to it an error will be shown when he tries to add the discussion.
                    .catch(() => ({ status: true }))
                    .then((response) => {
                    if (response.status) {
                        filtered.push(group);
                    }
                    return;
                }));
            });
            yield Promise.all(promises);
            return filtered;
        });
    }
    /**
     * Filter forum groups, returning only those that are inside user groups.
     *
     * @param forumGroups Forum groups.
     * @param userGroups User groups.
     * @returns Filtered groups.
     */
    filterGroups(forumGroups, userGroups) {
        const userGroupsIds = userGroups.map(group => group.id);
        return forumGroups.filter(forumGroup => userGroupsIds.indexOf(forumGroup.id) > -1);
    }
    /**
     * Get the initial group ID.
     *
     * @returns Initial group ID.
     */
    getInitialGroupId() {
        return (this.initialGroupId && this.groups.find(group => group.id === this.initialGroupId)) ?
            this.initialGroupId : this.groups[0].id;
    }
    /**
     * Add the "All participants" option to a list of groups if the user can add a discussion to all participants.
     *
     * @param groups Groups.
     * @param check True to check if the user can add a discussion to all participants.
     * @returns Promise resolved with the list of groups.
     */
    addAllParticipantsOption(groups, check) {
        let promise;
        if (check) {
            // We need to check if the user can add a discussion to all participants.
            promise = _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId }).then((response) => {
                this.canPin = !!response.canpindiscussions;
                this.canCreateAttachments = !!response.cancreateattachment;
                return response.status;
            }).catch(() => 
            // The call failed, let's assume he can't.
            false);
        }
        else {
            // No need to check, assume the user can.
            promise = Promise.resolve(true);
        }
        return promise.then((canAdd) => {
            if (canAdd) {
                groups.unshift({
                    courseid: this.courseId,
                    id: _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].ALL_PARTICIPANTS,
                    name: _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.allparticipants'),
                });
            }
            return groups;
        });
    }
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    refreshGroups(refresher) {
        const promises = [
            _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].invalidateActivityGroupMode(this.cmId),
            _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].invalidateActivityAllowedGroups(this.cmId),
            _addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForum"].invalidateCanAddDiscussion(this.forumId),
        ];
        Promise.all(promises).finally(() => {
            this.fetchDiscussionData(true).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Convenience function to update or return to discussions depending on device.
     *
     * @param discussionIds Ids of the new discussions.
     * @param discTimecreated The time created of the discussion (if offline).
     */
    returnToDiscussions(discussionIds, discTimecreated) {
        var _a;
        this.forceLeave = true;
        // Delete the local files from the tmp folder.
        _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_16__["CoreFileUploader"].clearTmpFiles(this.newDiscussion.files);
        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].NEW_DISCUSSION_EVENT, {
            forumId: this.forumId,
            cmId: this.cmId,
            discussionIds: discussionIds,
            discTimecreated: discTimecreated,
            groupId: this.showGroups && !this.newDiscussion.postToAllGroups ? this.newDiscussion.groupId : undefined,
        }, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            // Empty form.
            this.hasOffline = false;
            this.newDiscussion.subject = '';
            this.newDiscussion.message = null;
            this.newDiscussion.files = [];
            this.newDiscussion.postToAllGroups = false;
            this.messageEditor.clearText();
            this.originalData = _services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].clone(this.newDiscussion);
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
        }
    }
    /**
     * Message changed.
     *
     * @param text The new text.
     */
    onMessageChange(text) {
        this.newDiscussion.message = text;
    }
    /**
     * Add a new discussion.
     */
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const forumName = this.forum.name;
            const subject = this.newDiscussion.subject;
            let message = this.newDiscussion.message || '';
            const pin = this.newDiscussion.pin;
            const attachments = this.newDiscussion.files;
            const discTimecreated = this.timeCreated || Date.now();
            const options = {
                discussionsubscribe: !!this.newDiscussion.subscribe,
            };
            if (!subject) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal('addon.mod_forum.erroremptysubject', true);
                return;
            }
            if (!message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal('addon.mod_forum.erroremptymessage', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showModalLoading('core.sending', true);
            // Add some HTML to the message if needed.
            message = _services_utils_text__WEBPACK_IMPORTED_MODULE_17__["CoreTextUtils"].formatHtmlLines(message);
            if (pin) {
                options.discussionpinned = true;
            }
            const groupIds = this.newDiscussion.postToAllGroups ? this.groupIds : [this.newDiscussion.groupId];
            try {
                const discussionIds = yield _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].addNewDiscussion(this.forumId, forumName, this.courseId, subject, message, attachments, options, groupIds, discTimecreated);
                if (discussionIds) {
                    // Data sent to server, delete stored files (if any).
                    _addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].deleteNewDiscussionStoredFiles(this.forumId, discTimecreated);
                    _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'forum' });
                }
                if (discussionIds && discussionIds.length < groupIds.length) {
                    // Some discussions could not be created.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(null, 'addon.mod_forum.errorposttoallgroups', true);
                }
                _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !!discussionIds, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
                this.returnToDiscussions(discussionIds, discTimecreated);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_forum.cannotcreatediscussion', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Discard an offline saved discussion.
     */
    discard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.areyousure'));
                const promises = [];
                promises.push(_addons_mod_forum_services_forum_offline__WEBPACK_IMPORTED_MODULE_13__["AddonModForumOffline"].deleteNewDiscussion(this.forumId, this.timeCreated));
                promises.push(_services_utils_utils__WEBPACK_IMPORTED_MODULE_14__["CoreUtils"].ignoreErrors(_addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].deleteNewDiscussionStoredFiles(this.forumId, this.timeCreated)));
                yield Promise.all(promises);
                _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
                this.returnToDiscussions();
            }
            catch (error) {
                // Cancelled.
            }
        });
    }
    /**
     * Show or hide advanced form fields.
     */
    toggleAdvanced() {
        this.advanced = !this.advanced;
    }
    /**
     * Calculate current group's name.
     */
    calculateGroupName() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.newDiscussion.groupId <= 0) {
                this.postInGroupMessage = undefined;
            }
            else {
                const groupName = (_a = this.groups.find(group => group.id === this.newDiscussion.groupId)) === null || _a === void 0 ? void 0 : _a.name;
                this.postInGroupMessage = groupName && _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_forum.postingroup', { groupname: groupName });
            }
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @returns Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            if (_addons_mod_forum_services_forum_helper__WEBPACK_IMPORTED_MODULE_15__["AddonModForumHelper"].hasPostDataChanged(this.newDiscussion, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_16__["CoreFileUploader"].clearTmpFiles(this.newDiscussion.files);
            if (this.formElement) {
                _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId());
            }
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.syncObserver && this.syncObserver.off();
        delete this.syncObserver;
    }
    /**
     * Helper function to go back.
     */
    goBack() {
        var _a;
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigate('../../');
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        if (this.syncId) {
            _services_sync__WEBPACK_IMPORTED_MODULE_12__["CoreSync"].unblockOperation(_addons_mod_forum_services_forum__WEBPACK_IMPORTED_MODULE_6__["AddonModForumProvider"].COMPONENT, this.syncId);
        }
        this.isDestroyed = true;
        (_a = this.discussions) === null || _a === void 0 ? void 0 : _a.destroy();
    }
};
AddonModForumNewDiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"] },
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_18__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
AddonModForumNewDiscussionPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['newDiscFormEl',] }],
    messageEditor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_7__["CoreEditorRichTextEditorComponent"],] }]
};
AddonModForumNewDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-forum-new-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/new-discussion/new-discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-discussion.scss */ "./src/addons/mod/forum/pages/new-discussion/new-discussion.scss")).default]
    })
], AddonModForumNewDiscussionPage);

/**
 * Helper to manage swiping within a collection of discussions.
 */
class AddonModForumNewDiscussionDiscussionsSwipeManager extends _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_20__["AddonModForumDiscussionsSwipeManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return `${this.getSource().DISCUSSIONS_PATH_PREFIX}new/${route.params.timeCreated}`;
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
//# sourceMappingURL=forum-new-discussion-lazy-module.js.map