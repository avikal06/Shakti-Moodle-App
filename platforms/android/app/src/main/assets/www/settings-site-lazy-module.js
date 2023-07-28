(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-site-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.preferences' | translate}}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!handlers.loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"handlers.loaded\">\r\n            <ion-list>\r\n                <ion-item *ngFor=\"let handler of handlerItems\" class=\"core-settings-handler\" [ngClass]=\"handler.class\"\r\n                    [attr.aria-label]=\"handler.title | translate\" (click)=\"!handler.toggle && handlers.select(handler)\"\r\n                    [button]=\"!handler.toggle\" [detail]=\"!handler.toggle\" [attr.aria-current]=\"handlers.getItemAriaCurrent(handler)\">\r\n                    <ion-icon [name]=\"handler.icon\" slot=\"start\" *ngIf=\"handler.icon\" aria-hidden=\"true\">\r\n                    </ion-icon>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ handler.title | translate}}</p>\r\n                    </ion-label>\r\n                    <ion-toggle *ngIf=\"handler.toggle\" [(ngModel)]=\"handler.toggleChecked\"\r\n                        (ionChange)=\"handler.toggle($event.detail.checked)\">\r\n                    </ion-toggle>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-card>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.settings.synchronizenow' | translate }}</p>\r\n                        <p>\r\n                            {{ 'core.settings.synchronizenowhelp' | translate }}\r\n                        </p>\r\n                    </ion-label>\r\n                    <core-button-with-spinner [loading]=\"isSynchronizing()\" slot=\"end\">\r\n                        <ion-button fill=\"clear\" (click)=\"synchronize()\" [attr.aria-label]=\"'core.settings.synchronizenow' | translate\"\r\n                            [disabled]=\"!isOnline || (dataSaver && limitedConnection)\">\r\n                            <ion-icon name=\"fas-rotate\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </core-button-with-spinner>\r\n                </ion-item>\r\n                <ion-item class=\"core-warning-item ion-text-wrap\" *ngIf=\"!isOnline || (dataSaver && limitedConnection)\">\r\n                    <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>\r\n                        <ng-container *ngIf=\"isOnline && dataSaver && limitedConnection\">\r\n                            {{ 'core.settings.connectwifitosync' | translate }}</ng-container>\r\n                        <ng-container *ngIf=\"!isOnline\">{{ 'core.settings.connecttosync' | translate }}</ng-container>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/settings/classes/settings-handlers-source.ts":
/*!************************************************************************!*\
  !*** ./src/core/features/settings/classes/settings-handlers-source.ts ***!
  \************************************************************************/
/*! exports provided: CoreSettingsHandlersSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsHandlersSource", function() { return CoreSettingsHandlersSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings-delegate */ "./src/core/features/settings/services/settings-delegate.ts");
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
 * Provides a collection of site settings.
 */
class CoreSettingsHandlersSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor() {
        super(...arguments);
        this.handlers = [];
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.handlers = _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__["CoreSettingsDelegate"].getHandlers();
            return {
                items: this.handlers.filter((handler) => 'page' in handler),
            };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(handler) {
        return handler.page;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(handler) {
        return handler.params || {};
    }
}


/***/ }),

/***/ "./src/core/features/settings/pages/site/site.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.ts ***!
  \*******************************************************/
/*! exports provided: CoreSitePreferencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPage", function() { return CoreSitePreferencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _features_settings_classes_settings_handlers_source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/settings/classes/settings-handlers-source */ "./src/core/features/settings/classes/settings-handlers-source.ts");
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
var CoreSitePreferencesPage_1;















/**
 * Page that displays the list of site settings pages.
 */
let CoreSitePreferencesPage = CoreSitePreferencesPage_1 = class CoreSitePreferencesPage {
    constructor() {
        this.dataSaver = false;
        this.limitedConnection = false;
        this.isOnline = true;
        this.isDestroyed = false;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId();
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_7__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_settings_classes_settings_handlers_source__WEBPACK_IMPORTED_MODULE_14__["CoreSettingsHandlersSource"], []);
        this.handlers = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_6__["CoreListItemsManager"](source, CoreSitePreferencesPage_1);
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].SITE_UPDATED, () => {
            this.refreshData();
        }, this.siteId);
        this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
        this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
        this.networkObserver = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_11__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
                this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
            });
        });
    }
    get handlerItems() {
        return this.handlers.getSource().handlers;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSaver = yield _services_config__WEBPACK_IMPORTED_MODULE_13__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_12__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, true);
            const pageToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteParam('page');
            try {
                yield this.fetchData();
            }
            finally {
                const handler = pageToOpen ? this.handlers.items.find(handler => handler.page == pageToOpen) : undefined;
                if (handler) {
                    this.handlers.watchSplitViewOutlet(this.splitView);
                    yield this.handlers.select(handler);
                }
                else {
                    yield this.handlers.start(this.splitView);
                }
            }
        });
    }
    /**
     * Fetch Data.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.handlers.load();
        });
    }
    /**
     * Syncrhonizes the site.
     */
    synchronize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Using syncOnlyOnWifi false to force manual sync.
                yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].synchronizeSite(false, this.siteId);
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.settings.sitesyncfailed', true);
            }
        });
    }
    /**
     * Returns true if site is beeing synchronized.
     *
     * @returns True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing() {
        return !!_features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getSiteSyncPromise(this.siteId);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        this.handlers.getSource().setDirty(true);
        this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.isDestroyed = true;
        this.sitesObserver.off();
        this.networkObserver.unsubscribe();
        this.handlers.destroy();
    }
};
CoreSitePreferencesPage.ctorParameters = () => [];
CoreSitePreferencesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__["CoreSplitViewComponent"],] }]
};
CoreSitePreferencesPage = CoreSitePreferencesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-site-preferences',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html")).default,
    })
], CoreSitePreferencesPage);



/***/ }),

/***/ "./src/core/features/settings/settings-site-lazy.module.ts":
/*!*****************************************************************!*\
  !*** ./src/core/features/settings/settings-site-lazy.module.ts ***!
  \*****************************************************************/
/*! exports provided: CoreettingsSiteLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreettingsSiteLazyModule", function() { return CoreettingsSiteLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _features_settings_pages_site_site__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/settings/pages/site/site */ "./src/core/features/settings/pages/site/site.ts");
/* harmony import */ var _features_settings_settings_site_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/settings/settings-site-routing.module */ "./src/core/features/settings/settings-site-routing.module.ts");
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
 * Build module routes.
 *
 * @param injector Injector.
 * @returns Routes.
 */
function buildRoutes(injector) {
    const routes = Object(_features_settings_settings_site_routing_module__WEBPACK_IMPORTED_MODULE_7__["resolveSiteRoutes"])(injector);
    const mobileRoutes = [
        {
            path: '',
            component: _features_settings_pages_site_site__WEBPACK_IMPORTED_MODULE_6__["CoreSitePreferencesPage"],
        },
        ...routes.siblings,
    ];
    const tabletRoutes = [
        {
            path: '',
            component: _features_settings_pages_site_site__WEBPACK_IMPORTED_MODULE_6__["CoreSitePreferencesPage"],
            children: routes.siblings,
        },
    ];
    return [
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
    ];
}
let CoreettingsSiteLazyModule = class CoreettingsSiteLazyModule {
};
CoreettingsSiteLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        declarations: [
            _features_settings_pages_site_site__WEBPACK_IMPORTED_MODULE_6__["CoreSitePreferencesPage"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreettingsSiteLazyModule);



/***/ })

}]);
//# sourceMappingURL=settings-site-lazy-module.js.map