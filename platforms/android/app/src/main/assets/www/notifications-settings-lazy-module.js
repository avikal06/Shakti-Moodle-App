(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-settings-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/settings/settings.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/settings/settings.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.notifications.notifications' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<core-navbar-buttons slot=\"end\">\r\n    <core-context-menu>\r\n        <core-context-menu-item *ngFor=\"let handler of processorHandlers\" [priority]=\"handler.priority\"\r\n            [content]=\"handler.label | translate\" (action)=\"openExtraPreferences(handler)\" [iconAction]=\"handler.icon\">\r\n        </core-context-menu-item>\r\n    </core-context-menu>\r\n</core-navbar-buttons>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!preferencesLoaded\" (ionRefresh)=\"refreshPreferences($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"preferencesLoaded\">\r\n        <ion-card>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"preferences\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.notifications.allownotifications' | translate }}</p>\r\n                </ion-label>\r\n                <ion-toggle [(ngModel)]=\"preferences.enableall\" (ngModelChange)=\"enableAll(preferences.enableall)\" slot=\"end\"></ion-toggle>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"canChangeSound\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.notifications.playsound' | translate }}</p>\r\n                </ion-label>\r\n                <ion-toggle [(ngModel)]=\"notificationSound\" (ngModelChange)=\"changeNotificationSound(notificationSound)\" slot=\"end\">\r\n                </ion-toggle>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n            <ion-item class=\"ion-text-wrap only-links\" *ngIf=\"preferences?.processors?.length\" lines=\"none\" [button]=\"false\">\r\n                <ion-label class=\"addon-notification-type-form\">\r\n                    <p class=\"item-heading\">{{ 'addon.notifications.typeofnotification' | translate }}</p>\r\n                </ion-label>\r\n                <!-- Show processor selector. -->\r\n                <ion-select [(ngModel)]=\"currentProcessorName\" (ionChange)=\"changeProcessor($event)\" interface=\"popover\">\r\n                    <ion-select-option class=\"ion-text-wrap\" *ngFor=\"let processor of preferences?.processors\" [value]=\"processor.name\">\r\n                        {{ processor.displayname }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <ng-container *ngIf=\"loggedInOffLegacyMode\">\r\n                <ng-container *ngTemplateOutlet=\"legacySettings; context: {preferences: preferences}\"></ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"!loggedInOffLegacyMode\">\r\n                <ng-container *ngTemplateOutlet=\"settings; context: {preferences: preferences}\"></ng-container>\r\n            </ng-container>\r\n        </ion-card>\r\n    </core-loading>\r\n\r\n</ion-content>\r\n\r\n\r\n<!-- 3.11 downwards version -->\r\n<ng-template #legacySettings let-preferences=\"preferences\">\r\n    <ng-container *ngFor=\"let component of components\" class=\"ion-margin-top\">\r\n        <ion-card-header class=\"ion-no-padding\">\r\n            <ion-item class=\"ion-text-wrap divider\">\r\n                <ion-label class=\"ion-text-wrap\">\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col class=\"ion-no-padding\">\r\n                            <p class=\"item-heading\">{{ component.displayname }}</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding ion-hide-md-down\">\r\n                            <p>{{ 'core.settings.loggedin' | translate }}</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding ion-hide-md-down\">\r\n                            <p>{{ 'core.settings.loggedoff' | translate }}</p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card-header>\r\n        <ng-container *ngFor=\"let notification of component.notifications\">\r\n            <!-- Tablet view -->\r\n            <ion-item class=\"ion-text-wrap ion-hide-md-down addon-notifications-table-content only-links\">\r\n                <ion-label>\r\n                    <ion-row class=\"ion-no-padding ion-align-items-center\">\r\n                        <ion-col class=\"ion-margin-horizontal ion-no-padding\">\r\n                            <p class=\"item-heading\">{{ notification.displayname }}</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" class=\"ion-text-center ion-no-padding\" *ngFor=\"let state of ['loggedin', 'loggedoff']\">\r\n                            <ng-container *ngIf=\"preferences!.enableall && notification.processorsByName[currentProcessorName][state]\">\r\n                                <!-- If notifications enabled, show toggle. -->\r\n                                <core-button-with-spinner *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                                    [loading]=\"notification.processorsByName[currentProcessorName][state].updating\">\r\n                                    <ion-toggle [(ngModel)]=\"notification.processorsByName[currentProcessorName][state].checked\"\r\n                                        (ngModelChange)=\"changePreferenceLegacy(notification, state)\">\r\n                                    </ion-toggle>\r\n                                </core-button-with-spinner>\r\n                                <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                                    notification.processorsByName[currentProcessorName][state].checked\">\r\n                                    {{'core.settings.forced' | translate }}\r\n                                </span>\r\n                                <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                                    !notification.processorsByName[currentProcessorName][state].checked\">\r\n                                    {{'core.settings.disallowed' | translate }}\r\n                                </span>\r\n                            </ng-container>\r\n                            <!-- If notifications are disabled, show \"Disabled\" instead of toggle. -->\r\n                            <span *ngIf=\"!preferences!.enableall\" class=\"text-gray\">{{ 'core.settings.disabled' | translate }}</span>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Phone view -->\r\n            <ion-item class=\"ion-text-wrap ion-no-margin ion-hide-md-up\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ notification.displayname }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <!-- If notifications enabled, show toggles. If disabled, show \"Disabled\" instead of toggle. -->\r\n            <ion-item *ngFor=\"let state of ['loggedin', 'loggedoff']\" class=\"ion-text-wrap ion-hide-md-up\">\r\n                <ion-label class=\"ion-margin-horizontal\">\r\n                    <p>{{ 'core.settings.' + state | translate }}</p>\r\n                </ion-label>\r\n                <div slot=\"end\" *ngIf=\"preferences!.enableall && notification.processorsByName[currentProcessorName][state]\">\r\n                    <core-button-with-spinner *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                        [loading]=\"notification.processorsByName[currentProcessorName][state].updating\">\r\n                        <ion-toggle *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                            [(ngModel)]=\"notification.processorsByName[currentProcessorName][state].checked\"\r\n                            (ngModelChange)=\"changePreferenceLegacy(notification, state)\">\r\n                        </ion-toggle>\r\n                    </core-button-with-spinner>\r\n                    <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                        notification.processorsByName[currentProcessorName][state].checked\">\r\n                        {{'core.settings.forced' | translate }}\r\n                    </span>\r\n                    <span class=\"text-gray\" *ngIf=\"notification.processorsByName[currentProcessorName].locked &&\r\n                        !notification.processorsByName[currentProcessorName][state].checked\">\r\n                        {{'core.settings.disallowed' | translate }}\r\n                    </span>\r\n                </div>\r\n                <span class=\"text-gray\" slot=\"end\" *ngIf=\"!preferences!.enableall\">{{ 'core.settings.disabled' | translate }}</span>\r\n            </ion-item>\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n\r\n<!-- 4.0 onwards version -->\r\n<ng-template #settings let-preferences=\"preferences\">\r\n    <ng-container *ngFor=\"let component of components\" class=\"ion-margin-top\">\r\n        <ion-item-divider class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ component.displayname }}</p>\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ng-container *ngFor=\"let notification of component.notifications\">\r\n            <!-- If notifications enabled, show toggles. If disabled, show \"Disabled\" instead of toggle. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>{{ notification.displayname }}</p>\r\n                </ion-label>\r\n\r\n                <div slot=\"end\" *ngIf=\"preferences!.enableall\">\r\n                    <core-button-with-spinner *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                        [loading]=\"notification.processorsByName[currentProcessorName].updating\">\r\n                        <ion-toggle *ngIf=\"!notification.processorsByName[currentProcessorName].locked\"\r\n                            [(ngModel)]=\"notification.processorsByName[currentProcessorName].enabled\"\r\n                            (ngModelChange)=\"changePreference(notification)\">\r\n                        </ion-toggle>\r\n                    </core-button-with-spinner>\r\n                    <span class=\"text-gray\" *ngIf=\" notification.processorsByName[currentProcessorName].locked &&\r\n                        notification.processorsByName[currentProcessorName].enabled\">\r\n                        {{'core.settings.forced' | translate }}\r\n                    </span>\r\n                    <span class=\"text-gray\" *ngIf=\" notification.processorsByName[currentProcessorName].locked &&\r\n                        !notification.processorsByName[currentProcessorName].enabled\">\r\n                        {{'core.settings.disallowed' | translate }}\r\n                    </span>\r\n                </div>\r\n                <span class=\"text-gray\" slot=\"end\" *ngIf=\"!preferences!.enableall\">{{ 'core.settings.disabled' | translate }}</span>\r\n            </ion-item>\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/addons/notifications/notifications-settings-lazy.module.ts":
/*!************************************************************************!*\
  !*** ./src/addons/notifications/notifications-settings-lazy.module.ts ***!
  \************************************************************************/
/*! exports provided: AddonNotificationsSettingsLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsSettingsLazyModule", function() { return AddonNotificationsSettingsLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _addons_notifications_pages_settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/notifications/pages/settings/settings */ "./src/addons/notifications/pages/settings/settings.ts");
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
        path: '',
        component: _addons_notifications_pages_settings_settings__WEBPACK_IMPORTED_MODULE_4__["AddonNotificationsSettingsPage"],
    },
];
let AddonNotificationsSettingsLazyModule = class AddonNotificationsSettingsLazyModule {
};
AddonNotificationsSettingsLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _addons_notifications_pages_settings_settings__WEBPACK_IMPORTED_MODULE_4__["AddonNotificationsSettingsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonNotificationsSettingsLazyModule);



/***/ }),

/***/ "./src/addons/notifications/pages/settings/settings.scss":
/*!***************************************************************!*\
  !*** ./src/addons/notifications/pages/settings/settings.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addon-notifications-table-content ion-row {\n  min-height: 35px;\n}\n\nion-item-divider, ion-card-header {\n  border-top: 1px solid var(--stroke);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbm90aWZpY2F0aW9ucy9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1DQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FkZG9ucy9ub3RpZmljYXRpb25zL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkb24tbm90aWZpY2F0aW9ucy10YWJsZS1jb250ZW50IGlvbi1yb3cge1xyXG4gICAgbWluLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuaW9uLWl0ZW0tZGl2aWRlciwgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/notifications/pages/settings/settings.ts":
/*!*************************************************************!*\
  !*** ./src/addons/notifications/pages/settings/settings.ts ***!
  \*************************************************************/
/*! exports provided: AddonNotificationsSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsSettingsPage", function() { return AddonNotificationsSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _addons_messageoutput_services_messageoutput_delegate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/messageoutput/services/messageoutput-delegate */ "./src/addons/messageoutput/services/messageoutput-delegate.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/notifications */ "./src/addons/notifications/services/notifications.ts");
/* harmony import */ var _addons_notifications_services_notifications_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @addons/notifications/services/notifications-helper */ "./src/addons/notifications/services/notifications-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays notifications settings.
 */
let AddonNotificationsSettingsPage = class AddonNotificationsSettingsPage {
    constructor() {
        this.currentProcessorName = 'airnotifier';
        this.preferencesLoaded = false;
        this.notificationSound = false;
        this.processorHandlers = [];
        this.loggedInOffLegacyMode = false;
        this.canChangeSound = _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__["CoreLocalNotifications"].canDisableSound();
        const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getRequiredCurrentSite();
        this.loggedInOffLegacyMode = !currentSite.isVersionGreaterEqualThan('4.0');
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_15__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_16__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_message_get_user_notification_preferences',
                name: _singletons__WEBPACK_IMPORTED_MODULE_17__["Translate"].instant('addon.notifications.notificationpreferences'),
                data: { category: 'notifications' },
                url: '/message/notificationpreferences.php',
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.canChangeSound) {
                this.notificationSound = yield _services_config__WEBPACK_IMPORTED_MODULE_2__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].SETTINGS_NOTIFICATION_SOUND, true);
            }
            this.fetchPreferences();
        });
    }
    /**
     * Fetches preferences data.
     *
     * @returns Resolved when done.
     */
    fetchPreferences() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const preferences = yield _services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].getNotificationPreferences();
                // Initialize current processor. Load "Mobile" (airnotifier) if available.
                let currentProcessor = preferences.processors.find((processor) => processor.name == this.currentProcessorName);
                if (!currentProcessor) {
                    currentProcessor = preferences.processors[0];
                }
                if (!currentProcessor) {
                    // Shouldn't happen.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__["CoreError"]('No processor found');
                }
                preferences.enableall = !preferences.disableall;
                this.preferences = _addons_notifications_services_notifications_helper__WEBPACK_IMPORTED_MODULE_13__["AddonNotificationsHelper"].formatPreferences(preferences);
                this.loadProcessor(currentProcessor);
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.preferencesLoaded = true;
            }
        });
    }
    /**
     * Load a processor.
     *
     * @param processor Processor object.
     */
    loadProcessor(processor) {
        var _a;
        if (!processor) {
            return;
        }
        this.currentProcessorName = processor.name;
        this.processorHandlers = [];
        this.components = _addons_notifications_services_notifications_helper__WEBPACK_IMPORTED_MODULE_13__["AddonNotificationsHelper"].getProcessorComponents(processor.name, ((_a = this.preferences) === null || _a === void 0 ? void 0 : _a.components) || []);
        if (!processor.hassettings || !processor.supported) {
            return;
        }
        const handlerData = _addons_messageoutput_services_messageoutput_delegate__WEBPACK_IMPORTED_MODULE_8__["AddonMessageOutputDelegate"].getDisplayData(processor);
        if (handlerData) {
            this.processorHandlers.push(handlerData);
        }
    }
    /**
     * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    updatePreferencesAfterDelay() {
        // Cancel pending updates.
        clearTimeout(this.updateTimeout);
        this.updateTimeout = window.setTimeout(() => {
            this.updateTimeout = undefined;
            this.updatePreferences();
        }, 5000);
    }
    /**
     * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
     *
     * @returns Promise resolved when done.
     */
    updatePreferences() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].invalidateNotificationPreferences());
            yield _services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].getNotificationPreferences();
        });
    }
    /**
     * The selected processor was changed.
     *
     * @param name Name of the selected processor.
     */
    changeProcessor(name) {
        var _a;
        const processor = (_a = this.preferences) === null || _a === void 0 ? void 0 : _a.processors.find((processor) => processor.name == name);
        if (processor) {
            this.loadProcessor(processor);
        }
    }
    /**
     * Refresh the list of preferences.
     *
     * @param refresher Refresher.
     */
    refreshPreferences(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_notifications__WEBPACK_IMPORTED_MODULE_12__["AddonNotifications"].invalidateNotificationPreferences());
                yield this.fetchPreferences();
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Open extra preferences.
     *
     * @param handlerData The handler data to open.
     */
    openExtraPreferences(handlerData) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].navigateToSitePath(handlerData.page, { params: handlerData.pageParams });
    }
    /**
     * Change the value of a certain preference.
     *
     * @param notification Notification object.
     * @param state State name, ['loggedin', 'loggedoff'].
     * @returns Promise resolved when done.
     */
    changePreferenceLegacy(notification, state) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const processor = (_a = notification.processorsByName) === null || _a === void 0 ? void 0 : _a[this.currentProcessorName];
            if (!processor) {
                return;
            }
            const processorState = processor[state];
            const preferenceName = notification.preferencekey + '_' + processorState.name;
            let value = notification.processors
                .filter((processor) => processor[state].checked)
                .map((processor) => processor.name)
                .join(',');
            if (value == '') {
                value = 'none';
            }
            processorState.updating = true;
            try {
                yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].updateUserPreference(preferenceName, value);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                processor[state].checked = !processor[state].checked;
            }
            finally {
                processorState.updating = false;
            }
        });
    }
    /**
     * Change the value of a certain preference.
     *
     * @param notification Notification object.
     * @returns Promise resolved when done.
     */
    changePreference(notification) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const processor = (_a = notification.processorsByName) === null || _a === void 0 ? void 0 : _a[this.currentProcessorName];
            if (!processor) {
                return;
            }
            const preferenceName = notification.preferencekey + '_enabled';
            let value = notification.processors
                .filter((processor) => processor.enabled)
                .map((processor) => processor.name)
                .join(',');
            if (value == '') {
                value = 'none';
            }
            processor.updating = true;
            try {
                yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].updateUserPreference(preferenceName, value);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                processor.enabled = !processor.enabled;
            }
            finally {
                processor.updating = false;
            }
        });
    }
    /**
     * Enable all notifications changed.
     *
     * @param enable Whether to enable or disable.
     * @returns Promise resolved when done.
     */
    enableAll(enable) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.preferences) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].updateUserPreferences([], !enable);
                // Update the preferences since they were modified.
                this.updatePreferencesAfterDelay();
            }
            catch (error) {
                // Show error and revert change.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
                this.preferences.enableall = !this.preferences.enableall;
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Change the notification sound setting.
     *
     * @param enabled True to enable the notification sound, false to disable it.
     */
    changeNotificationSound(enabled) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_config__WEBPACK_IMPORTED_MODULE_2__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].SETTINGS_NOTIFICATION_SOUND, enabled ? 1 : 0));
            const siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
            _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].NOTIFICATION_SOUND_CHANGED, { enabled }, siteId);
            _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__["CoreLocalNotifications"].rescheduleAll();
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        // If there is a pending action to update preferences, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updatePreferences();
        }
    }
};
AddonNotificationsSettingsPage.ctorParameters = () => [];
AddonNotificationsSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-notifications-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/notifications/pages/settings/settings.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.scss */ "./src/addons/notifications/pages/settings/settings.scss")).default]
    })
], AddonNotificationsSettingsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-settings-lazy-module.js.map