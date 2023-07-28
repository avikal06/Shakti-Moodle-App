(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"loaded\" (click)=\"showChatUsers()\" [attr.aria-label]=\"'core.users' | translate\">\r\n                <ion-icon name=\"fas-users\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"addon-messages-discussion-container\" aria-live=\"polite\">\r\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\r\n\r\n                <p class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\r\n                    {{ message.timestamp * 1000 | coreFormatDate: \"strftimedayshort\" }}\r\n                </p>\r\n\r\n                <div class=\"ion-text-center addon-mod_chat-notice\" *ngIf=\"message.special\">\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"success\" *ngIf=\"message.system && message.message == 'enter'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-right-to-bracket\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messageenter' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"danger\" *ngIf=\"message.system && message.message == 'exit'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-right-from-bracket\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messageexit' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\" *ngIf=\"message.beep == 'all'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messagebeepseveryone' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\"\r\n                        *ngIf=\"message.userid != currentUserId && message.beep == currentUserId\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messagebeepsyou' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"light\"\r\n                        *ngIf=\"message.userid == currentUserId && message.beep && message.beep != 'all'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messageyoubeep' | translate:{$a: message.beepWho} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"info\" *ngIf=\"!message.system && !message.beep\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-asterisk\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            <strong>\r\n                                {{ message.userfullname }} <core-format-text [text]=\"message.message\" contextLevel=\"module\"\r\n                                    [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" (afterRender)=\"last && scrollToBottom()\">\r\n                                </core-format-text>\r\n                            </strong>\r\n                        </span>\r\n                    </ion-badge>\r\n                </div>\r\n\r\n                <core-message *ngIf=\"!message.special\" [message]=\"message\" [user]=\"message\" [text]=\"message.message\"\r\n                    [time]=\"message.timestamp * 1000\" (afterRender)=\"last && scrollToBottom()\" contextLevel=\"module\" [instanceId]=\"cmId\"\r\n                    [courseId]=\"courseId\">\r\n                </core-message>\r\n            </ng-container>\r\n        </ion-list>\r\n\r\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\" [message]=\"'addon.mod_chat.nomessages' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n<ion-footer class=\"footer-adjustable\">\r\n    <ion-toolbar [color]=\"isOnline && polling && loaded ? null : 'light'\">\r\n        <p class=\"ion-text-center\" *ngIf=\"!isOnline\">\r\n            {{ 'addon.mod_chat.mustbeonlinetosendmessages' | translate }}\r\n        </p>\r\n\r\n        <core-send-message-form [sendDisabled]=\"sending\" *ngIf=\"isOnline && polling && loaded\" [message]=\"newMessage\"\r\n            (onSubmit)=\"sendMessage($event)\" [placeholder]=\"'addon.messages.newmessage' | translate\">\r\n        </core-send-message-form>\r\n\r\n        <ion-button *ngIf=\"isOnline && !polling && loaded\" (click)=\"reconnect()\" expand=\"block\" fill=\"outline\">\r\n            {{ 'core.login.reconnect' | translate }}\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The buttons defined by the component will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"activityComponent?.showLoading\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <addon-mod-chat-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-chat-index>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_chat.messages' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshMessages($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"addon-messages-discussion-container\">\r\n            <ng-container *ngFor=\"let message of messages; index as index;\">\r\n\r\n                <div class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\r\n                    {{ message.timestamp * 1000 | coreFormatDate:\"strftimedayshort\" }}\r\n                </div>\r\n\r\n                <div class=\"ion-text-center addon-mod_chat-notice\" *ngIf=\"message.special\">\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"success\" *ngIf=\"message.issystem && message.message == 'enter'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-right-to-bracket\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messageenter' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"danger\" *ngIf=\"message.issystem && message.message == 'exit'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-right-from-bracket\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messageexit' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\" *ngIf=\"message.beep == 'all'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messagebeepseveryone' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\"\r\n                        *ngIf=\"message.userid != currentUserId && message.beep == currentUserId\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messagebeepsyou' | translate:{$a: message.userfullname} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"light\"\r\n                        *ngIf=\"message.userid == currentUserId && message.beep && message.beep != 'all'\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            {{ 'addon.mod_chat.messageyoubeep' | translate:{$a: message.beepWho} }}\r\n                        </span>\r\n                    </ion-badge>\r\n\r\n                    <ion-badge class=\"ion-text-wrap\" color=\"info\" *ngIf=\"!message.issystem && !message.beep\">\r\n                        <span>\r\n                            <ion-icon name=\"fas-asterisk\" aria-hidden=\"true\"></ion-icon>\r\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\r\n                            <strong>\r\n                                {{ message.userfullname }} <core-format-text [text]=\"message.message\" contextLevel=\"module\"\r\n                                    [contextInstanceId]=\"cmId\" [courseId]=\"courseId\"></core-format-text>\r\n                            </strong>\r\n                        </span>\r\n                    </ion-badge>\r\n                </div>\r\n\r\n                <core-message *ngIf=\"!message.special\" [message]=\"message\" [user]=\"message\" [text]=\"message.message\"\r\n                    [time]=\"message.timestamp * 1000\" contextLevel=\"module\" [instanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-message>\r\n            </ng-container>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.mod_chat.chatreport' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!sessions.loaded\" (ionRefresh)=\"refreshSessions($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"sessions.loaded\">\r\n            <core-group-selector [groupInfo]=\"groupInfo\" [(selected)]=\"groupId\" (selectedChange)=\"reloadSessions()\" [courseId]=\"courseId\">\r\n            </core-group-selector>\r\n\r\n            <ion-item>\r\n                <ion-label>{{ 'addon.mod_chat.showincompletesessions' | translate }}</ion-label>\r\n                <ion-toggle [(ngModel)]=\"showAll\" (ionChange)=\"reloadSessions()\"></ion-toggle>\r\n            </ion-item>\r\n\r\n            <ion-card *ngFor=\"let session of sessions.items\" (click)=\"sessions.select(session)\" button\r\n                [attr.aria-current]=\"sessions.getItemAriaCurrent(session)\"\r\n                [class.addon-mod-chat-session-show-more]=\"session.sessionusers.length < session.allsessionusers.length\">\r\n\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ session.sessionstart * 1000 | coreFormatDate }}</p>\r\n                        <p *ngIf=\"session.duration\">{{ session.duration | coreDuration }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-card-content>\r\n                    <ion-item *ngFor=\"let user of session.sessionusers\">\r\n                        <ion-label>\r\n                            {{ user.userfullname }} <span *ngIf=\"user.messagecount\">({{ user.messagecount }})</span>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-card-content>\r\n                <ion-button *ngIf=\"session.sessionusers.length < session.allsessionusers.length\" fill=\"clear\" expand=\"block\"\r\n                    (click)=\"showMoreUsers(session, $event)\">\r\n                    {{ 'core.showmore' | translate }}\r\n                </ion-button>\r\n            </ion-card>\r\n\r\n            <core-empty-box *ngIf=\"sessions.empty\" icon=\"far-comments\" [message]=\"'addon.mod_chat.nosessionsfound' | translate\">\r\n            </core-empty-box>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/chat/chat-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/chat/chat-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModChatLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatLazyModule", function() { return AddonModChatLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/chat/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/chat/pages/index/index.ts");
/* harmony import */ var _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/chat/chat */ "./src/addons/mod/chat/pages/chat/chat.ts");
/* harmony import */ var _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/session-messages/session-messages */ "./src/addons/mod/chat/pages/session-messages/session-messages.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sessions/sessions */ "./src/addons/mod/chat/pages/sessions/sessions.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
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
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModChatIndexPage"],
    },
    {
        path: ':courseId/:cmId/chat',
        component: _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChatChatPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_11__["CanLeaveGuard"]],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
    },
    {
        path: ':courseId/:cmId/sessions/:sessionStart/:sessionEnd',
        component: _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
        children: [
            {
                path: ':sessionStart/:sessionEnd',
                component: _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet),
];
let AddonModChatLazyModule = class AddonModChatLazyModule {
};
AddonModChatLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModChatComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModChatIndexPage"],
            _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChatChatPage"],
            _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
            _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
        ],
    })
], AddonModChatLazyModule);



/***/ }),

/***/ "./src/addons/mod/chat/classes/chat-sessions-source.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/chat/classes/chat-sessions-source.ts ***!
  \*************************************************************/
/*! exports provided: AddonModChatSessionsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionsSource", function() { return AddonModChatSessionsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/chat */ "./src/addons/mod/chat/services/chat.ts");
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
 * Provides a collection of sessions.
 */
class AddonModChatSessionsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, chatId, cmId) {
        super();
        this.showAll = false;
        this.groupId = 0;
        this.COURSE_ID = courseId;
        this.CHAT_ID = chatId;
        this.CM_ID = cmId;
    }
    /**
     * Invalidate chat cache.
     */
    invalidateCache() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].ignoreErrors(_services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].allPromises([
                _services_groups__WEBPACK_IMPORTED_MODULE_3__["CoreGroups"].invalidateActivityGroupInfo(this.CM_ID),
                _services_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChat"].invalidateSessions(this.CHAT_ID, this.groupId, this.showAll),
            ]));
        });
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_3__["CoreGroups"].getActivityGroupInfo(this.CM_ID, false);
            this.groupId = _services_groups__WEBPACK_IMPORTED_MODULE_3__["CoreGroups"].validateGroupId(this.groupId, this.groupInfo);
            const sessions = yield _services_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChat"].getSessions(this.CHAT_ID, this.groupId, this.showAll, { cmId: this.CM_ID });
            // Fetch user profiles.
            const promises = [];
            const formattedSessions = sessions.map((session) => {
                session.duration = session.sessionend - session.sessionstart;
                session.sessionusers.forEach((sessionUser) => {
                    // The WS does not return the user name, fetch user profile.
                    promises.push(this.loadUserFullname(sessionUser));
                });
                // If session has more than 4 users we display a "Show more" link.
                session.allsessionusers = session.sessionusers;
                if (session.sessionusers.length > 4) {
                    session.sessionusers = session.allsessionusers.slice(0, 3);
                }
                return session;
            });
            yield Promise.all(promises);
            return { items: formattedSessions };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(session) {
        return `${session.sessionstart}/${session.sessionend}`;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return {
            chatId: this.CHAT_ID,
            groupId: this.groupId,
        };
    }
    /**
     * Load the fullname of a user.
     *
     * @param sessionUser User object.
     * @returns Promise resolved when done.
     */
    loadUserFullname(sessionUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (sessionUser.userfullname) {
                return;
            }
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(sessionUser.userid, this.COURSE_ID, true);
                sessionUser.userfullname = user.fullname;
            }
            catch (_a) {
                // Error getting profile, most probably the user is deleted.
                sessionUser.userfullname = _singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.deleteduser') + ' ' + sessionUser.userid;
            }
        });
    }
}


/***/ }),

/***/ "./src/addons/mod/chat/pages/chat/chat.scss":
/*!**************************************************!*\
  !*** ./src/addons/mod/chat/pages/chat/chat.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\nion-content {\n  --content-background: var(--background-alternative);\n  --background: var(--content-background);\n}\nion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n.addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px !important;\n  background: var(--content-background);\n}\n.addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host .addon-mod_chat-notice {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL2NoYXQvY2hhdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBNEdBOztFQUFBO0FDOUdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM1REk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNtRFI7QUQvQ0E7RUFDSSxtREFBQTtFQUNBLHVDQUFBO0FDa0RKO0FEaERJO0VBQ0ksNEJBQUE7QUNrRFI7QUQ5Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FDaURKO0FEOUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ2lESjtBQXpFSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQTRFUiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL2NoYXQvY2hhdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXHJcbiAqL1xyXG5cclxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcclxuJGFzc2V0cy1wYXRoOiBcIi4uL2Fzc2V0c1wiO1xyXG5cclxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy5jdXN0b20uc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBzdHJpbmcgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3NcclxuICovXHJcblxyXG5cclxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XHJcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gIEBpZiAkaW5kZXgge1xyXG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5AZnVuY3Rpb24gc3RyLXNwbGl0KCRzdHJpbmcsICRzZXBhcmF0b3IpIHtcclxuICAvLyBlbXB0eSBhcnJheS9saXN0XHJcbiAgJHNwbGl0LWFycjogKCk7XHJcbiAgLy8gZmlyc3QgaW5kZXggb2Ygc2VwYXJhdG9yIGluIHN0cmluZ1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcclxuICBAd2hpbGUgJGluZGV4ICE9IG51bGwge1xyXG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XHJcbiAgICAvLyBwdXNoIGl0ZW0gdG8gYXJyYXlcclxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XHJcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXHJcbiAgICAkc3RyaW5nOiBzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgMSk7XHJcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIH1cclxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcclxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XHJcblxyXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XHJcbiAgJHN0YXJ0LWluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHN0YXJ0KTtcclxuXHJcbiAgQGlmICRzdGFydC1pbmRleCB7XHJcbiAgICAkcG9zdDogc3RyLXNsaWNlKCRzdHJpbmcsICRzdGFydC1pbmRleCArIHN0ci1sZW5ndGgoJHN0YXJ0KSk7XHJcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xyXG5cclxuICAgIEBpZiAkZW5kLWluZGV4IHtcclxuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBDb250YWlucyBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1jb250YWlucygkc3RyaW5nLCAkbmVlZGxlKSB7XHJcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xyXG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vLyBVUkwgRW5jb2RlIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gdXJsLWVuY29kZSgkdmFsKSB7XHJcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xyXG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XHJcbiAgQHJldHVybiAkZW5jb2RlZDtcclxufVxyXG5cclxuXHJcbi8vIEFkZCBSb290IFNlbGVjdG9yXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFkZHMgYSByb290IHNlbGVjdG9yIHVzaW5nIGhvc3QtY29udGV4dCBiYXNlZCBvbiB0aGUgc2VsZWN0b3IgcGFzc2VkXHJcbi8vXHJcbi8vIEV4YW1wbGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5maXhlZFxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24taGlkZSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcclxuLy8gLS0+IFtkaXI9cnRsXSAuc2hhZG93XHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XHJcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XHJcblxyXG4gICRsaXN0OiAoKTtcclxuXHJcbiAgQGVhY2ggJHNlbGVjdG9yIGluICRzZWxlY3RvcnMge1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XHJcbiAgICBAaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdChcIikge1xyXG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuXHJcbiAgICAgICRuZXctZWxlbWVudDogKCk7XHJcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xyXG5cclxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcclxuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6ICRlbGVtZW50O1xyXG5cclxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xyXG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpKVwiLCBcIilcIik7XHJcbiAgICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XHJcblxyXG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkc2NvcGVkLWVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRuZXctZWxlbWVudCwgY29tbWEpO1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XHJcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3RcIikge1xyXG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xyXG4gICAgICAvLyBJZiB0aGUgc2VsZWN0b3IgZG9lcyBub3QgY29udGFpbiBob3N0IGF0IGFsbCBpdCBpcyBlaXRoZXIgYSBzaGFkb3dcclxuICAgICAgLy8gb3Igbm9ybWFsIGVsZW1lbnQgc28gYXBwZW5kIGJvdGggdGhlIGRpciBjaGVjayBhbmQgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCIjeyRhZGRIb3N0U2VsZWN0b3J9ICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkbGlzdDtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcclxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xyXG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XHJcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR2V0cyB0aGUgc3BlY2lmaWMgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSB0aGUgbmFtZSBhbmQgdmFyaWF0aW9uLiBBbHBoYS9yZ2IgYXJlIG9wdGlvbmFsLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpXHJcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSwgMC41KSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSwgMC41KVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcclxuICAkdmFsdWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRuYW1lKTtcclxuICAkdmFsdWU6IG1hcC1nZXQoJHZhbHVlcywgJHZhcmlhdGlvbik7XHJcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xyXG5cclxuICBAaWYgKCR2YXJpYXRpb24gPT0gYmFzZSkge1xyXG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcclxuICB9XHJcblxyXG4gIEBpZiAoJGFscGhhKSB7XHJcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKCN7JHZhcmlhYmxlfS1yZ2IsICR2YWx1ZSksICRhbHBoYSk7XHJcbiAgfVxyXG4gIEBpZiAoJHJnYikge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XHJcbn1cclxuXHJcbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XHJcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcclxuICBAaW5jbHVkZSBtYXJnaW4oMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgY29udGVudDogXCJcIjtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxyXG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xyXG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcclxuXHJcbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XHJcbn1cclxuXHJcblxyXG4vLyBCcmVha3BvaW50IE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXHJcbi8vXHJcbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcclxuLy9cclxuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxyXG4vL1xyXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNTc2cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG5cclxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxyXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiLXNtXCJcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gIEBpZiAkbWluIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBtZFxyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxyXG4vLyAgICBtZFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XHJcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XHJcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXHJcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cclxuLy9cclxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxyXG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHJcbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNzY3Ljk4cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXHJcbi8vXHJcbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcclxuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbXVsdGktZGlyKCkge1xyXG4gIEBjb250ZW50O1xyXG5cclxuICAvLyAkcm9vdDogI3smfTtcclxuICAvLyBAYXQtcm9vdCBbZGlyXSB7XHJcbiAgLy8gICAjeyRyb290fSB7XHJcbiAgLy8gICAgIEBjb250ZW50O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuQG1peGluIHJ0bCgpIHtcclxuICAkcm9vdDogI3smfTtcclxuXHJcbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGx0cigpIHtcclxuICBAY29udGVudDtcclxufVxyXG5cclxuXHJcbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcclxuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xyXG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XHJcblxyXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xyXG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICB9IEBlbHNlIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICAgIEBhdC1yb290IHtcclxuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xyXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcclxuICAjeyRwcm9wfS10b3A6ICR0b3A7XHJcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcclxuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgcmlnaHQ6IHVuc2V0O1xyXG5cclxuICAgICAgbGVmdDogJGVuZDtcclxuICAgICAgcmlnaHQ6ICRzdGFydDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgdG9wOiAkdG9wO1xyXG4gIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcclxuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxyXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcclxuICAkb3RoZXItZGlyOiBudWxsO1xyXG5cclxuICBAaWYgJGRpciA9PSBsdHIge1xyXG4gICAgJG90aGVyLWRpcjogcnRsO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgJG90aGVyLWRpcjogbHRyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkZGlyO1xyXG4gIH1cclxuICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcclxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XHJcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcclxuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcclxuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcclxuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcclxuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XHJcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xyXG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XHJcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcclxuICAkZXh0cmE6IG51bGw7XHJcblxyXG4gICR4OiBudWxsO1xyXG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xyXG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xyXG5cclxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcclxuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XHJcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XHJcblxyXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xyXG5cclxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xyXG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XHJcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcclxuXHJcbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcclxuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XHJcbiAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xyXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xyXG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEl0ZW0gTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gaXRlbS1wdXNoLXN2Zy11cmwoJGZpbGwpIHtcclxuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCB0cnVlKTtcclxufVxyXG4iLCJAdXNlIFwic2FzczptYXRoXCIgYXMgbWF0aDtcclxuXHJcbi8qKlxyXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXHJcbiAqL1xyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIDYuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgJHBlcmNlbnQpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCAtMTAuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xyXG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbn1cclxuXHJcbi8vIElvbmljIENvbG9yc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcclxuLy8gY29sb3JzIG1hcFxyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzLCAkdGhlbWUpIHtcclxuICAgICRjb2xvci10aGVtZXM6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9yLXRoZW1lcywgJHRoZW1lKTtcclxuXHJcbiAgICBAaWYgJHRoZW1lID09ICdkYXJrJyB7XHJcbiAgICAgICAgJGJhc2U6IG1peChtYXAtZ2V0KCRjb2xvci10aGVtZXMsICdsaWdodCcpLCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpO1xyXG59XHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKSB7XHJcbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XHJcbiAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRiYXNlKTtcclxuICAgICR0aW50OiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRiYXNlKTtcclxuXHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcclxuICAgIC0tI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcclxuICAgIC0tI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcblxyXG4gICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuXHJcbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvcmUtZm9jdXMoKSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgLy8gVGhpY2tlciBvcHRpb246XHJcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCRwcm9wZXJ0aWVzOiBhbGwsICRkdXJhdGlvbjogNTAwbXMsICR0aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0KSB7XHJcbiAgICAkdHJhbnNpdGlvbnM6ICgpO1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgJHRyYW5zaXRpb25zOiBhcHBlbmQoJHRyYW5zaXRpb25zLCAkcHJvcGVydHkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24sIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxufVxyXG5cclxuQG1peGluIHNyLW9ubHkoKSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXHJcbiAqL1xyXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcclxuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcclxuXHJcbiAgICBAaWYgKCRlbmQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGFya21vZGUoKSB7XHJcbiAgICAkcm9vdDogI3smfTtcclxuXHJcbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImh0bWwuZGFya1wiKX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcclxuICAgIGZsZXg6IDAgMCAkd2lkdGg7XHJcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDb2xvciBtaXhpbnMuXHJcbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcclxuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XHJcblxyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cclxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cclxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XHJcblxyXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xyXG59XHJcblxyXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcclxuICAgICRyOiByZWQoJGNvbG9yKTtcclxuICAgICRnOiBncmVlbigkY29sb3IpO1xyXG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcclxuXHJcbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XHJcblxyXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XHJcbn1cclxuXHJcbi8vIFdDQUcgY29udHJhc3QgYWxnb3JpdGhtXHJcbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcclxuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XHJcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xyXG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xyXG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xyXG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xyXG5cclxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcclxuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xyXG5cclxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcclxuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cclxuICovXHJcbiIsIi8qXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXHJcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXHJcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XHJcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcclxuXHJcbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cclxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcclxuXHJcbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxyXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICAoXHJcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXHJcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcclxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxyXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXHJcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxyXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXHJcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcclxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxyXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcclxuICpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXHJcbiAqL1xyXG5cclxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiAwcHgsXHJcbiAgICBzbTogNTc2cHgsXHJcbiAgICBtZDogNzY4cHgsXHJcbiAgICBsZzogOTkycHgsXHJcbiAgICB0YWJsZXQ6IDk5MnB4LFxyXG4gICAgeGw6IDEyMDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XHJcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcclxuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLXFyY29kZTogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS4gKGRlcHJlY2F0ZWQgb24gNC4wKVxyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHVzZXIgcGFnZS5cclxuJGNvcmUtdXNlci1oaWRlLXNpdGVpbmZvOiAkY29yZS1tb3JlLWhpZGUtc2l0ZWluZm8gIWRlZmF1bHQ7XHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZXVybDogJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmwgIWRlZmF1bHQ7XHJcblxyXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxyXG4kYWN0aXZpdHktaWNvbi1jb2xvcnM6IChcclxuICAgIGFkbWluaXN0cmF0aW9uOiAjNWQ2M2Y2LFxyXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcclxuICAgIGNvbGxhYm9yYXRpb246ICNmNzYzNGQsXHJcbiAgICBjb21tdW5pY2F0aW9uOiAjMTFhNjc2LFxyXG4gICAgY29udGVudDogIzM5OWJlMixcclxuICAgIGludGVyZmFjZTogI2EzNzhmZlxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNhdGVnb3J5OiAjOGUyNGFhICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY291cnNlOiAkcmVkICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktZ3JvdXA6ICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS11c2VyOiAkYmx1ZSAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXNpdGU6ICRncmVlbiAhZGVmYXVsdDtcclxuXHJcbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXHJcbiAgICBjYXRlZ29yeTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNhdGVnb3J5LFxyXG4gICAgY291cnNlOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY291cnNlLFxyXG4gICAgZ3JvdXA6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1ncm91cCxcclxuICAgIHVzZXI6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS11c2VyLFxyXG4gICAgc2l0ZTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXNpdGUsXHJcbikgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFscy5zY3NzXCI7XHJcblxyXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcclxuICAgIGlvbi1mb290ZXIgLnRvb2xiYXI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgJjo6cGFydChzY3JvbGwpIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmFkZG9uLW1lc3NhZ2VzLWRhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbiIsIi8qKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcbiAqL1xuLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cbi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xuICovXG4vKipcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG4vKipcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxuICovXG4vKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4vKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuOmhvc3QtY29udGV4dCguaW9zKSBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29udGVudC1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xufVxuaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XG59XG5cbi5hZGRvbi1tZXNzYWdlcy1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbjpob3N0IC5hZGRvbi1tb2RfY2hhdC1ub3RpY2Uge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/addons/mod/chat/pages/chat/chat.ts":
/*!************************************************!*\
  !*** ./src/addons/mod/chat/pages/chat/chat.ts ***!
  \************************************************/
/*! exports provided: AddonModChatChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatChatPage", function() { return AddonModChatChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_send_message_form_send_message_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/send-message-form/send-message-form */ "./src/core/components/send-message-form/send-message-form.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_users_modal_users_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/users-modal/users-modal */ "./src/addons/mod/chat/components/users-modal/users-modal.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/chat */ "./src/addons/mod/chat/services/chat.ts");
/* harmony import */ var _services_chat_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/chat-helper */ "./src/addons/mod/chat/services/chat-helper.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
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
 * Page that displays a chat session.
 */
let AddonModChatChatPage = class AddonModChatChatPage {
    constructor() {
        this.loaded = false;
        this.title = '';
        this.messages = [];
        this.sending = false;
        this.lastTime = 0;
        this.oldContentHeight = 0;
        this.viewDestroyed = false;
        this.pollingRunning = false;
        this.users = [];
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteUserId();
        this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
        this.onlineSubscription = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_10__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_5__["CoreNetwork"].isOnline();
            });
        });
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_15__["CoreTime"].once(() => {
            _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'mod_chat_get_chat_latest_messages',
                name: this.title,
                data: { chatid: this.chatId, category: 'chat' },
                url: `/mod/chat/gui_ajax/index.php?id=${this.chatId}`,
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
                this.chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRequiredRouteNumberParam('chatId');
                this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('title') || '';
                yield this.loginUser();
                yield this.fetchMessages();
                this.startPolling();
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhileconnecting', true);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.startPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'chat' });
        this.stopPolling();
    }
    /**
     * Convenience function to login the user.
     *
     * @returns Promise resolved when done.
     */
    loginUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sessionId = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].loginUser(this.chatId);
        });
    }
    /**
     * Convenience function to fetch chat messages.
     *
     * @returns Promise resolved when done.
     */
    fetchMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const messagesInfo = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getLatestMessages(this.sessionId, this.lastTime);
            this.lastTime = messagesInfo.chatnewlasttime || 0;
            const messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getMessagesUserData(messagesInfo.messages, this.courseId);
            if (!messages.length) {
                // No messages yet, nothing else to do.
                return;
            }
            const previousLength = this.messages.length;
            this.messages = this.messages.concat(messages);
            // Calculate which messages need to display the date or user data.
            for (let index = previousLength; index < this.messages.length; index++) {
                const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                this.messages[index] = _services_chat_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModChatHelper"].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                const message = this.messages[index];
                if (message.beep && message.beep != String(this.currentUserId)) {
                    this.loadMessageBeepWho(message);
                }
            }
            this.messages[this.messages.length - 1].showTail = true;
            // New messages or beeps, scroll to bottom.
            this.scrollToBottom();
        });
    }
    loadMessageBeepWho(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            message.beepWho = yield this.getUserFullname(message.beep);
        });
    }
    /**
     * Display the chat users modal.
     */
    showChatUsers() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create the toc modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_users_modal_users_modal__WEBPACK_IMPORTED_MODULE_12__["AddonModChatUsersModalComponent"],
                componentProps: {
                    sessionId: this.sessionId,
                    cmId: this.cmId,
                },
            });
            if (modalData) {
                if (modalData.talkTo) {
                    this.newMessage = `To ${modalData.talkTo}: ` + (((_a = this.sendMessageForm) === null || _a === void 0 ? void 0 : _a.message) || '');
                }
                if (modalData.beepTo) {
                    this.sendMessage('', modalData.beepTo);
                }
                this.users = modalData.users;
            }
        });
    }
    /**
     * Get the user fullname for a beep.
     *
     * @param id User Id before parsing.
     * @returns User fullname.
     */
    getUserFullname(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            if (isNaN(idNumber)) {
                return id;
            }
            const user = this.users.find((user) => user.id == idNumber);
            if (user) {
                return user.fullname;
            }
            try {
                const data = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getChatUsers(this.sessionId, { cmId: this.cmId });
                this.users = data.users;
                const user = this.users.find((user) => user.id == idNumber);
                if (user) {
                    return user.fullname;
                }
                return id;
            }
            catch (_a) {
                // Ignore errors.
                return id;
            }
        });
    }
    /**
     * Start the polling to get chat messages periodically.
     */
    startPolling() {
        // We already have the polling in place.
        if (this.polling) {
            return;
        }
        // Start polling.
        this.polling = window.setInterval(() => {
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.fetchMessagesInterval());
        }, _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChatProvider"].POLL_INTERVAL);
    }
    /**
     * Stop polling for messages.
     */
    stopPolling() {
        clearInterval(this.polling);
        this.polling = undefined;
    }
    /**
     * Convenience function to be called every certain time to fetch chat messages.
     *
     * @returns Promise resolved when done.
     */
    fetchMessagesInterval() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isOnline || this.pollingRunning) {
                // Obviously we cannot check for new messages when the app is offline.
                return;
            }
            this.pollingRunning = true;
            try {
                yield this.fetchMessages();
            }
            catch (_a) {
                try {
                    // Try to login, it might have failed because the session expired.
                    yield this.loginUser();
                    yield this.fetchMessages();
                }
                catch (error) {
                    // Fail again. Stop polling if needed.
                    this.stopPolling();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhileretrievingmessages', true);
                    throw error;
                }
            }
            finally {
                this.pollingRunning = false;
            }
        });
    }
    /**
     * Send a message to the chat.
     *
     * @param text Text of the nessage.
     * @param beep ID of the user to beep.
     */
    sendMessage(text, beep = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isOnline) {
                // Silent error, the view should prevent this.
                return;
            }
            else if (beep === 0 && !text.trim()) {
                // Silent error.
                return;
            }
            this.sending = true;
            try {
                yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].sendMessage(this.sessionId, text, beep);
                // Update messages to show the sent message.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.fetchMessagesInterval());
            }
            catch (error) {
                // Only close the keyboard if an error happens, we want the user to be able to send multiple
                // messages without the keyboard being closed.
                _services_app__WEBPACK_IMPORTED_MODULE_4__["CoreApp"].closeKeyboard();
                this.newMessage = text;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhilesendingmessage', true);
            }
            finally {
                this.sending = false;
            }
        });
    }
    /**
     * Try to reconnect.
     *
     * @returns Promise resolved when done.
     */
    reconnect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                // Call startPolling would take a while for the first execution, so we'll execute it manually to check if it works now.
                yield this.fetchMessagesInterval();
                // It works, start the polling again.
                this.startPolling();
            }
            catch (_a) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Scroll bottom when render has finished.
     */
    scrollToBottom() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Need a timeout to leave time to the view to be rendered.
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].nextTick();
            if (!this.viewDestroyed) {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToBottom();
            }
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @returns Resolved with true if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.messages.some((message) => !message.special)) {
                return true;
            }
            // Modified, confirm user wants to go back.
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_chat.confirmloss'));
            return true;
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.onlineSubscription && this.onlineSubscription.unsubscribe();
        this.stopPolling();
        this.viewDestroyed = true;
    }
};
AddonModChatChatPage.ctorParameters = () => [];
AddonModChatChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }],
    sendMessageForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_send_message_form_send_message_form__WEBPACK_IMPORTED_MODULE_2__["CoreSendMessageFormComponent"],] }]
};
AddonModChatChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.scss */ "./src/addons/mod/chat/pages/chat/chat.scss")).default]
    })
], AddonModChatChatPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/index/index.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/chat/pages/index/index.ts ***!
  \**************************************************/
/*! exports provided: AddonModChatIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatIndexPage", function() { return AddonModChatIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/chat/components/index/index.ts");
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
 * Page that displays a chat.
 */
let AddonModChatIndexPage = class AddonModChatIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModChatIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModChatIndexComponent"],] }]
};
AddonModChatIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html")).default,
    })
], AddonModChatIndexPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/session-messages/session-messages.scss":
/*!**************************************************************************!*\
  !*** ./src/addons/mod/chat/pages/session-messages/session-messages.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\nion-content {\n  --content-background: var(--background-alternative);\n  --background: var(--content-background);\n}\nion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n.addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px !important;\n  background: var(--content-background);\n}\n.addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host .addon-mod_chat-notice {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL3Nlc3Npb24tbWVzc2FnZXMvc2Vzc2lvbi1tZXNzYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBNEdBOztFQUFBO0FDOUdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM1REk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNtRFI7QUQvQ0E7RUFDSSxtREFBQTtFQUNBLHVDQUFBO0FDa0RKO0FEaERJO0VBQ0ksNEJBQUE7QUNrRFI7QUQ5Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FDaURKO0FEOUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ2lESjtBQXpFSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQTRFUiIsImZpbGUiOiJzcmMvYWRkb25zL21vZC9jaGF0L3BhZ2VzL3Nlc3Npb24tbWVzc2FnZXMvc2Vzc2lvbi1tZXNzYWdlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXHJcbiAqL1xyXG5cclxuJGZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udHNcIjtcclxuJGFzc2V0cy1wYXRoOiBcIi4uL2Fzc2V0c1wiO1xyXG5cclxuQGltcG9ydCBcIi4vaGVscGVycy9oZWxwZXJzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy5jdXN0b20uc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBzdHJpbmcgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3NcclxuICovXHJcblxyXG5cclxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XHJcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlYXJjaCk7XHJcblxyXG4gIEBpZiAkaW5kZXgge1xyXG4gICAgQHJldHVybiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSkgKyAkcmVwbGFjZSArIHN0ci1yZXBsYWNlKHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyBzdHItbGVuZ3RoKCRzZWFyY2gpKSwgJHNlYXJjaCwgJHJlcGxhY2UpO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkc3RyaW5nO1xyXG59XHJcblxyXG4vLyBTdHJpbmcgU3BsaXQgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5AZnVuY3Rpb24gc3RyLXNwbGl0KCRzdHJpbmcsICRzZXBhcmF0b3IpIHtcclxuICAvLyBlbXB0eSBhcnJheS9saXN0XHJcbiAgJHNwbGl0LWFycjogKCk7XHJcbiAgLy8gZmlyc3QgaW5kZXggb2Ygc2VwYXJhdG9yIGluIHN0cmluZ1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIC8vIGxvb3AgdGhyb3VnaCBzdHJpbmdcclxuICBAd2hpbGUgJGluZGV4ICE9IG51bGwge1xyXG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcclxuICAgICRpdGVtOiBzdHItc2xpY2UoJHN0cmluZywgMSwgJGluZGV4IC0gMSk7XHJcbiAgICAvLyBwdXNoIGl0ZW0gdG8gYXJyYXlcclxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XHJcbiAgICAvLyByZW1vdmUgaXRlbSBhbmQgc2VwYXJhdG9yIGZyb20gc3RyaW5nXHJcbiAgICAkc3RyaW5nOiBzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgMSk7XHJcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcclxuICAgICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xyXG4gIH1cclxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcclxuICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJHN0cmluZyk7XHJcblxyXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBFeHRyYWN0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLWV4dHJhY3QoJHN0cmluZywgJHN0YXJ0LCAkZW5kKSB7XHJcbiAgJHN0YXJ0LWluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHN0YXJ0KTtcclxuXHJcbiAgQGlmICRzdGFydC1pbmRleCB7XHJcbiAgICAkcG9zdDogc3RyLXNsaWNlKCRzdHJpbmcsICRzdGFydC1pbmRleCArIHN0ci1sZW5ndGgoJHN0YXJ0KSk7XHJcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xyXG5cclxuICAgIEBpZiAkZW5kLWluZGV4IHtcclxuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbi8vIFN0cmluZyBDb250YWlucyBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1jb250YWlucygkc3RyaW5nLCAkbmVlZGxlKSB7XHJcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xyXG4gICAgQHJldHVybiBzdHItaW5kZXgoJHN0cmluZywgJG5lZWRsZSkgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vLyBVUkwgRW5jb2RlIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gdXJsLWVuY29kZSgkdmFsKSB7XHJcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xyXG4gICRlbmNvZGVkOiBzdHItcmVwbGFjZSgkc3BhY2VzLCBcIiNcIiwgXCIlMjNcIik7XHJcbiAgQHJldHVybiAkZW5jb2RlZDtcclxufVxyXG5cclxuXHJcbi8vIEFkZCBSb290IFNlbGVjdG9yXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFkZHMgYSByb290IHNlbGVjdG9yIHVzaW5nIGhvc3QtY29udGV4dCBiYXNlZCBvbiB0aGUgc2VsZWN0b3IgcGFzc2VkXHJcbi8vXHJcbi8vIEV4YW1wbGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5maXhlZClcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5maXhlZFxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSlcIilcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24taGlkZSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVxyXG4vL1xyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIi5zaGFkb3dcIilcclxuLy8gLS0+IFtkaXI9cnRsXSAuc2hhZG93XHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XHJcbiAgJHNlbGVjdG9yczogc3RyLXNwbGl0KCRyb290LCBcIixcIik7XHJcblxyXG4gICRsaXN0OiAoKTtcclxuXHJcbiAgQGVhY2ggJHNlbGVjdG9yIGluICRzZWxlY3RvcnMge1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBob3cgd2UgdGFyZ2V0IGl0XHJcbiAgICBAaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdChcIikge1xyXG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuXHJcbiAgICAgICRuZXctZWxlbWVudDogKCk7XHJcbiAgICAgICRlbGVtZW50czogc3RyLXNwbGl0KCRzZWxlY3RvciwgXCIgXCIpO1xyXG5cclxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcclxuICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIjpob3N0KFwiKSB7XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6ICRlbGVtZW50O1xyXG5cclxuICAgICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiKSlcIikge1xyXG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpKVwiLCBcIilcIik7XHJcbiAgICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKVwiLCBcIlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XHJcblxyXG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkc2NvcGVkLWVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJGVsZW1lbnQsIHNwYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRuZXctZWxlbWVudCwgY29tbWEpO1xyXG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XHJcbiAgICAvLyBlbGVtZW50IHNvIHdlIGNhbiBjaGFuZ2UgaXQgdG8gbG9vayBmb3IgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3RcIikge1xyXG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xyXG4gICAgICAvLyBJZiB0aGUgc2VsZWN0b3IgZG9lcyBub3QgY29udGFpbiBob3N0IGF0IGFsbCBpdCBpcyBlaXRoZXIgYSBzaGFkb3dcclxuICAgICAgLy8gb3Igbm9ybWFsIGVsZW1lbnQgc28gYXBwZW5kIGJvdGggdGhlIGRpciBjaGVjayBhbmQgaG9zdC1jb250ZXh0XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCIjeyRhZGRIb3N0U2VsZWN0b3J9ICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkbGlzdDtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgY29sb3IgZnVuY3Rpb25zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcclxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xyXG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XHJcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR2V0cyB0aGUgc3BlY2lmaWMgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSB0aGUgbmFtZSBhbmQgdmFyaWF0aW9uLiBBbHBoYS9yZ2IgYXJlIG9wdGlvbmFsLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpXHJcbi8vIGlvbi1jb2xvcihzZWNvbmRhcnksIGNvbnRyYXN0KSA9PiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KVxyXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSwgMC41KSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSwgMC41KVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gaW9uLWNvbG9yKCRuYW1lLCAkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwsICRyZ2I6IG51bGwpIHtcclxuICAkdmFsdWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRuYW1lKTtcclxuICAkdmFsdWU6IG1hcC1nZXQoJHZhbHVlcywgJHZhcmlhdGlvbik7XHJcbiAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfS0jeyR2YXJpYXRpb259O1xyXG5cclxuICBAaWYgKCR2YXJpYXRpb24gPT0gYmFzZSkge1xyXG4gICAgJHZhcmlhYmxlOiAtLWlvbi1jb2xvci0jeyRuYW1lfTtcclxuICB9XHJcblxyXG4gIEBpZiAoJGFscGhhKSB7XHJcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKCN7JHZhcmlhYmxlfS1yZ2IsICR2YWx1ZSksICRhbHBoYSk7XHJcbiAgfVxyXG4gIEBpZiAoJHJnYikge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgJHZhcmlhYmxlOiAjeyR2YXJpYWJsZX0tcmdiO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiB2YXIoI3skdmFyaWFibGV9LCAkdmFsdWUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsIDEyJSk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcclxuICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsIDEwJSk7XHJcbn1cclxuXHJcbi8vIENvbnZlcnRzIGEgY29sb3IgdG8gYSBjb21tYSBzZXBhcmF0ZWQgcmdiLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XHJcbiAgQHJldHVybiAje3JlZCgkY29sb3IpfSwje2dyZWVuKCRjb2xvcil9LCN7Ymx1ZSgkY29sb3IpfTtcclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbkBtaXhpbiBpbnB1dC1jb3ZlcigpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcclxuICBAaW5jbHVkZSBtYXJnaW4oMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHZpc3VhbGx5LWhpZGRlbigpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgY29udGVudDogXCJcIjtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxyXG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xyXG4gICRrZXlzOiBtYXAta2V5cygkbWFwKTtcclxuXHJcbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XHJcbn1cclxuXHJcblxyXG4vLyBCcmVha3BvaW50IE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXHJcbi8vXHJcbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcclxuLy9cclxuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxyXG4vL1xyXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNTc2cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG5cclxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxyXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiLXNtXCJcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gIEBpZiAkbWluIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBtZFxyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxyXG4vLyAgICBtZFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XHJcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XHJcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXHJcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cclxuLy9cclxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxyXG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHJcbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgNzY3Ljk4cHhcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXHJcbi8vXHJcbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcclxuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbXVsdGktZGlyKCkge1xyXG4gIEBjb250ZW50O1xyXG5cclxuICAvLyAkcm9vdDogI3smfTtcclxuICAvLyBAYXQtcm9vdCBbZGlyXSB7XHJcbiAgLy8gICAjeyRyb290fSB7XHJcbiAgLy8gICAgIEBjb250ZW50O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5cclxuQG1peGluIHJ0bCgpIHtcclxuICAkcm9vdDogI3smfTtcclxuXHJcbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGx0cigpIHtcclxuICBAY29udGVudDtcclxufVxyXG5cclxuXHJcbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3ZnXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcclxuICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xyXG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XHJcblxyXG4gIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSBvciAkdmlld0JveCA9PSBudWxsIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xyXG4gICAgJGZsaXBwZWQtdXJsOiAkc3ZnO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBvbHlnb25cIiwgXCI8cG9seWdvbiAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyICgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICB9IEBlbHNlIHtcclxuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICAgIEBhdC1yb290IHtcclxuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcclxuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICN7JHByb3B9LWlubGluZS1zdGFydDogJHN0YXJ0O1xyXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kKTtcclxuICAjeyRwcm9wfS10b3A6ICR0b3A7XHJcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydCAtIGFtb3VudCB0byBwb3NpdGlvbiBzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQ6IG51bGwsICRlbmQ6IG51bGwpIHtcclxuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBsZWZ0OiAkc3RhcnQ7XHJcbiAgICAgIHJpZ2h0OiAkZW5kO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgcmlnaHQ6IHVuc2V0O1xyXG5cclxuICAgICAgbGVmdDogJGVuZDtcclxuICAgICAgcmlnaHQ6ICRzdGFydDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgdG9wOiAkdG9wO1xyXG4gIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXIoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcclxuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3AtZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxyXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcclxuICAkb3RoZXItZGlyOiBudWxsO1xyXG5cclxuICBAaWYgJGRpciA9PSBsdHIge1xyXG4gICAgJG90aGVyLWRpcjogcnRsO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgJG90aGVyLWRpcjogbHRyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkZGlyO1xyXG4gIH1cclxuICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcclxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XHJcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcclxuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcclxuICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcclxuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcclxuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XHJcbiAgICAgICRob3Jpem9udGFsLWx0cjogbGVmdDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xyXG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XHJcbiAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMuLi4pIHtcclxuICAkZXh0cmE6IG51bGw7XHJcblxyXG4gICR4OiBudWxsO1xyXG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xyXG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xyXG5cclxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcclxuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XHJcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XHJcblxyXG4gICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xyXG5cclxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xyXG4gICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XHJcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcclxuXHJcbiAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgQGlmICRleHRyYSA9PSBudWxsIHtcclxuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XHJcbiAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvaXRlbS9pdGVtLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG1ha2UtYnJlYWtwb2ludC1wYWRkaW5nKCRwYWRkaW5ncykge1xyXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xyXG4gICAgICAkcGFkZGluZzogbWFwLWdldCgkcGFkZGluZ3MsICRicmVha3BvaW50KTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEl0ZW0gTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gaXRlbS1wdXNoLXN2Zy11cmwoJGZpbGwpIHtcclxuICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCB0cnVlKTtcclxufVxyXG4iLCJAdXNlIFwic2FzczptYXRoXCIgYXMgbWF0aDtcclxuXHJcbi8qKlxyXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXHJcbiAqL1xyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIDYuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA0OCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgJHBlcmNlbnQpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCAtMTAuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xyXG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbn1cclxuXHJcbi8vIElvbmljIENvbG9yc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcclxuLy8gY29sb3JzIG1hcFxyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzLCAkdGhlbWUpIHtcclxuICAgICRjb2xvci10aGVtZXM6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xyXG4gICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9yLXRoZW1lcywgJHRoZW1lKTtcclxuXHJcbiAgICBAaWYgJHRoZW1lID09ICdkYXJrJyB7XHJcbiAgICAgICAgJGJhc2U6IG1peChtYXAtZ2V0KCRjb2xvci10aGVtZXMsICdsaWdodCcpLCB3aGl0ZSwgODAlKSAhZGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpO1xyXG59XHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKSB7XHJcbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XHJcbiAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRiYXNlKTtcclxuICAgICR0aW50OiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRiYXNlKTtcclxuXHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcclxuICAgIC0tI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcclxuICAgIC0tI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcblxyXG4gICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuXHJcbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvcmUtZm9jdXMoKSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBAaW5jbHVkZSBjb3JlLWZvY3VzLXN0eWxlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgLy8gVGhpY2tlciBvcHRpb246XHJcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCRwcm9wZXJ0aWVzOiBhbGwsICRkdXJhdGlvbjogNTAwbXMsICR0aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0KSB7XHJcbiAgICAkdHJhbnNpdGlvbnM6ICgpO1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgJHRyYW5zaXRpb25zOiBhcHBlbmQoJHRyYW5zaXRpb25zLCAkcHJvcGVydHkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24sIGNvbW1hKTtcclxuICAgIH1cclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcclxufVxyXG5cclxuQG1peGluIHNyLW9ubHkoKSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXHJcbiAqL1xyXG5AbWl4aW4gcHVzaC1hcnJvdy1jb2xvcigkZmlsbDogNjI2MjYyLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcclxuXHJcbiAgICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsICRmbGlwLXJ0bCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcclxuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skcHh9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcclxuXHJcbiAgICBAaWYgKCRlbmQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGFya21vZGUoKSB7XHJcbiAgICAkcm9vdDogI3smfTtcclxuXHJcbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImh0bWwuZGFya1wiKX0ge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcclxuICAgIGZsZXg6IDAgMCAkd2lkdGg7XHJcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDb2xvciBtaXhpbnMuXHJcbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcclxuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XHJcblxyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMS5cclxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xyXG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cclxuICAgICRibGFja0NvbnRyYXN0OiAoMC4wNSkgLyAoJGx1bWlhbmNlICsgMC4wNSk7XHJcblxyXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xyXG59XHJcblxyXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cclxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcl95aXEoJGNvbG9yLCAkZGFyazogYmxhY2ssICRsaWdodDogd2hpdGUpIHtcclxuICAgICRyOiByZWQoJGNvbG9yKTtcclxuICAgICRnOiBncmVlbigkY29sb3IpO1xyXG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcclxuXHJcbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XHJcblxyXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XHJcbn1cclxuXHJcbi8vIFdDQUcgY29udHJhc3QgYWxnb3JpdGhtXHJcbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcclxuICAgICRmb3JlZ3JvdW5kTHVtaWFuY2U6IGx1bWluYW5jZSgkZm9yZWdyb3VuZCk7XHJcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBAaWYgKCRiYWNrZ3JvdW5kTHVtaW5hbmNlIDwgJGZvcmVncm91bmRMdW1pYW5jZSkge1xyXG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpIC8gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJHIpO1xyXG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xyXG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xyXG5cclxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcclxuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xyXG5cclxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcclxuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cclxuICovXHJcbiIsIi8qXHJcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiR3aGl0ZTogICAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xyXG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XHJcbiRncmF5LTMwMDogICAgI2RlZTJlNiAhZGVmYXVsdDsgLy8gU3Ryb2tlXHJcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXHJcbiRncmF5LTYwMDogICAgIzZhNzM3YiAhZGVmYXVsdDtcclxuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XHJcbiRncmF5LTkwMDogICAgIzFkMjEyNSAhZGVmYXVsdDsgLy8gQ29weSB0ZXh0XHJcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcclxuXHJcbiRibHVlOiAgICAgICAgIzBmNmNiZiAhZGVmYXVsdDtcclxuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cclxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xyXG4kcmVkOiAgICAgICAgICNjYTMxMjAgIWRlZmF1bHQ7XHJcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcclxuXHJcbiRicmFuZC1jb2xvcjogI2ZmNzUxOCAhZGVmYXVsdDtcclxuXHJcbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgICRncmF5LTkwMCAhZGVmYXVsdDsgLy8gIzFhMWExYVxyXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAgJGdyYXktMzAwICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcclxuJG1lZGl1bTogICAgICRncmF5LTcwMCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICAoXHJcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXHJcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcclxuICAgIHN1Y2Nlc3M6IChsaWdodDogJHN1Y2Nlc3MpLFxyXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXHJcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxyXG4gICAgaW5mbzogKGxpZ2h0OiAkaW5mbyksXHJcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcclxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxyXG4gICAgZGFyazogKGxpZ2h0OiAkZGFyaywgZGFyazogJGxpZ2h0KSxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcclxuICpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXHJcbiAqL1xyXG5cclxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiAwcHgsXHJcbiAgICBzbTogNTc2cHgsXHJcbiAgICBtZDogNzY4cHgsXHJcbiAgICBsZzogOTkycHgsXHJcbiAgICB0YWJsZXQ6IDk5MnB4LFxyXG4gICAgeGw6IDEyMDBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWltYWdlLWJhY2tncm91bmQ6ICM4MWVjZWMsICM3NGI5ZmYsICNhMjliZmUsICNkZmU2ZTksICMwMGI4OTQsICMwOTg0ZTMsICNiMmJlYzMsICNmZGNiNmUsICNmZDc5YTgsICM2YzVjZTcgIWRlZmF1bHQ7XHJcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcclxuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWFsd2F5cy1zaG93LW1haW4tbWVudTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtaGlkZS1jb3Vyc2VpbWFnZS1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtaGlkZS1wcm9ncmVzcy1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yLWRhcms6ICR0ZXh0LWNvbG9yLWRhcmsgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLXFyY29kZTogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS4gKGRlcHJlY2F0ZWQgb24gNC4wKVxyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHVzZXIgcGFnZS5cclxuJGNvcmUtdXNlci1oaWRlLXNpdGVpbmZvOiAkY29yZS1tb3JlLWhpZGUtc2l0ZWluZm8gIWRlZmF1bHQ7XHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlbmFtZTogJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZXVybDogJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmwgIWRlZmF1bHQ7XHJcblxyXG4vLyBBY3Rpdml0eSBpY29uIGJhY2tncm91bmQgY29sb3JzLlxyXG4kYWN0aXZpdHktaWNvbi1jb2xvcnM6IChcclxuICAgIGFkbWluaXN0cmF0aW9uOiAjNWQ2M2Y2LFxyXG4gICAgYXNzZXNzbWVudDogI2ViNjZhMixcclxuICAgIGNvbGxhYm9yYXRpb246ICNmNzYzNGQsXHJcbiAgICBjb21tdW5pY2F0aW9uOiAjMTFhNjc2LFxyXG4gICAgY29udGVudDogIzM5OWJlMixcclxuICAgIGludGVyZmFjZTogI2EzNzhmZlxyXG4pICFkZWZhdWx0O1xyXG5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNhdGVnb3J5OiAjOGUyNGFhICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY291cnNlOiAkcmVkICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktZ3JvdXA6ICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS11c2VyOiAkYmx1ZSAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXNpdGU6ICRncmVlbiAhZGVmYXVsdDtcclxuXHJcbi8vIENhbGVuZGFyIGV2ZW50IGNhdGVnb3J5IGJhY2tncm91bmQgY29sb3JzLlxyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXHJcbiAgICBjYXRlZ29yeTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNhdGVnb3J5LFxyXG4gICAgY291cnNlOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY291cnNlLFxyXG4gICAgZ3JvdXA6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1ncm91cCxcclxuICAgIHVzZXI6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS11c2VyLFxyXG4gICAgc2l0ZTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXNpdGUsXHJcbikgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFscy5zY3NzXCI7XHJcblxyXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcclxuICAgIGlvbi1mb290ZXIgLnRvb2xiYXI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgJjo6cGFydChzY3JvbGwpIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmFkZG9uLW1lc3NhZ2VzLWRhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbiIsIi8qKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcbiAqL1xuLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cbi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xuICovXG4vKipcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG4vKipcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxuICovXG4vKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4vKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuOmhvc3QtY29udGV4dCguaW9zKSBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tY29udGVudC1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xufVxuaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XG59XG5cbi5hZGRvbi1tZXNzYWdlcy1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbjpob3N0IC5hZGRvbi1tb2RfY2hhdC1ub3RpY2Uge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/addons/mod/chat/pages/session-messages/session-messages.ts":
/*!************************************************************************!*\
  !*** ./src/addons/mod/chat/pages/session-messages/session-messages.ts ***!
  \************************************************************************/
/*! exports provided: AddonModChatSessionMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionMessagesPage", function() { return AddonModChatSessionMessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/chat */ "./src/addons/mod/chat/services/chat.ts");
/* harmony import */ var _services_chat_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/chat-helper */ "./src/addons/mod/chat/services/chat-helper.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
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
 * Page that displays list of chat session messages.
 */
let AddonModChatSessionMessagesPage = class AddonModChatSessionMessagesPage {
    constructor() {
        this.messages = [];
        this.loaded = false;
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_11__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].logViewSessions(this.cmId, {
                start: this.sessionStart,
                end: this.sessionEnd,
            }));
            _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'mod_chat_view_sessions',
                name: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_chat.messages'),
                data: { chatid: this.chatId, category: 'chat', start: this.sessionStart, end: this.sessionEnd },
                url: `/mod/chat/report.php?id=${this.cmId}&start=${this.sessionStart}&end=${this.sessionEnd}`,
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            this.sessionStart = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('sessionStart');
            this.sessionEnd = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('sessionEnd');
            this.chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRequiredRouteNumberParam('chatId');
            this.groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('groupId') || 0;
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].back();
            return;
        }
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.fetchMessages();
    }
    /**
     * Fetch session messages.
     *
     * @returns Promise resolved when done.
     */
    fetchMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].getSessionMessages(this.chatId, this.sessionStart, this.sessionEnd, this.groupId, { cmId: this.cmId });
                this.messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].getMessagesUserData(messages, this.courseId);
                // Calculate which messages need to display the date or user data.
                for (let index = 0; index < this.messages.length; index++) {
                    const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                    this.messages[index] = _services_chat_helper__WEBPACK_IMPORTED_MODULE_8__["AddonModChatHelper"].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                    const message = this.messages[index];
                    if (message.beep && message.beep != String(this.currentUserId)) {
                        this.loadMessageBeepWho(message);
                    }
                }
                this.messages[this.messages.length - 1].showTail = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    loadMessageBeepWho(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            message.beepWho = yield this.getUserFullname(message.beep);
        });
    }
    /**
     * Get the user fullname for a beep.
     *
     * @param id User Id before parsing.
     * @returns User fullname.
     */
    getUserFullname(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            if (isNaN(idNumber)) {
                return id;
            }
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(idNumber, this.courseId, true);
                return user.fullname;
            }
            catch (_a) {
                // Error getting profile.
                return id;
            }
        });
    }
    /**
     * Refresh session messages.
     *
     * @param refresher Refresher.
     */
    refreshMessages(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].invalidateSessionMessages(this.chatId, this.sessionStart, this.groupId));
                yield this.fetchMessages();
            }
            finally {
                refresher.complete();
            }
        });
    }
};
AddonModChatSessionMessagesPage.ctorParameters = () => [];
AddonModChatSessionMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-session-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-messages.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-messages.scss */ "./src/addons/mod/chat/pages/session-messages/session-messages.scss")).default]
    })
], AddonModChatSessionMessagesPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/sessions/sessions.ts":
/*!********************************************************!*\
  !*** ./src/addons/mod/chat/pages/sessions/sessions.ts ***!
  \********************************************************/
/*! exports provided: AddonModChatSessionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionsPage", function() { return AddonModChatSessionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _classes_chat_sessions_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../classes/chat-sessions-source */ "./src/addons/mod/chat/classes/chat-sessions-source.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _addons_mod_chat_services_chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @addons/mod/chat/services/chat */ "./src/addons/mod/chat/services/chat.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
var AddonModChatSessionsPage_1;













/**
 * Page that displays list of chat sessions.
 */
let AddonModChatSessionsPage = AddonModChatSessionsPage_1 = class AddonModChatSessionsPage {
    constructor() {
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_9__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const source = this.sessions.getSource();
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].ignoreErrors(_addons_mod_chat_services_chat__WEBPACK_IMPORTED_MODULE_11__["AddonModChat"].logViewSessions(this.sessions.getSource().CM_ID));
            _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_8__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'mod_chat_view_sessions',
                name: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_chat.chatreport'),
                data: { chatid: source.CHAT_ID, category: 'chat' },
                url: `/mod/chat/report.php?id=${source.CM_ID}`,
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        try {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('courseId');
            const chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('chatId');
            const cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRequiredRouteNumberParam('cmId');
            const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_3__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_chat_sessions_source__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionsSource"], [this.courseId, chatId, cmId]);
            this.sessions = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreListItemsManager"](source, AddonModChatSessionsPage_1);
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            return;
        }
    }
    get groupId() {
        return this.sessions.getSource().groupId;
    }
    set groupId(value) {
        this.sessions.getSource().groupId = value;
    }
    get showAll() {
        return this.sessions.getSource().showAll;
    }
    set showAll(value) {
        this.sessions.getSource().showAll = value;
    }
    get groupInfo() {
        return this.sessions.getSource().groupInfo;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchSessions();
            this.sessions.start(this.splitView);
        });
    }
    /**
     * Fetch chat sessions.
     */
    fetchSessions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.sessions.load();
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
        });
    }
    /**
     * Reload chat sessions.
     */
    reloadSessions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showModalLoading();
            try {
                yield this.sessions.reload();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Refresh chat sessions.
     *
     * @param refresher Refresher.
     */
    refreshSessions(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sessions.getSource().setDirty(true);
                yield this.sessions.getSource().invalidateCache();
                yield this.fetchSessions();
            }
            finally {
                refresher.complete();
            }
        });
    }
    /**
     * Show more session users.
     *
     * @param session Chat session.
     * @param event The event.
     */
    showMoreUsers(session, event) {
        if (session.allsessionusers) {
            session.sessionusers = session.allsessionusers;
        }
        event.stopPropagation();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.sessions.destroy();
    }
};
AddonModChatSessionsPage.ctorParameters = () => [];
AddonModChatSessionsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__["CoreSplitViewComponent"],] }]
};
AddonModChatSessionsPage = AddonModChatSessionsPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-sessions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sessions.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html")).default,
    })
], AddonModChatSessionsPage);



/***/ })

}]);
//# sourceMappingURL=chat-lazy-module.js.map