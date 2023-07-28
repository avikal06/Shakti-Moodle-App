(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-privatefiles-privatefiles-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ title }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!filesLoaded || (!showPrivateFiles && !showSiteFiles)\"\r\n        (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"filesLoaded\" *ngIf=\"showPrivateFiles || showSiteFiles\">\r\n        <!-- Allow selecting the files to see: private or site. -->\r\n        <core-combobox [selection]=\"root\" (onChange)=\"rootChanged($event)\" *ngIf=\"showPrivateFiles && showSiteFiles && !path\">\r\n            <ion-select-option class=\"ion-text-wrap\" value=\"my\">\r\n                {{ 'addon.privatefiles.privatefiles' | translate }}\r\n            </ion-select-option>\r\n            <ion-select-option class=\"ion-text-wrap\" value=\"site\">\r\n                {{ 'addon.privatefiles.sitefiles' | translate }}\r\n            </ion-select-option>\r\n        </core-combobox>\r\n\r\n        <!-- Display info about space used and space left. -->\r\n        <ion-card class=\"core-info-card\" *ngIf=\"userQuota && filesInfo && filesInfo.filecount > 0\">\r\n            <ion-item>\r\n                <ion-label>\r\n                    {{ 'core.quotausage' | translate:{$a: {used: spaceUsed, total: userQuotaReadable} } }}\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <!-- List of files. -->\r\n        <ion-list *ngIf=\"files && files.length > 0\">\r\n            <ng-container *ngFor=\"let file of files\">\r\n                <ion-item button *ngIf=\"file.isdir\" class=\"ion-text-wrap item-file item-directory\" (click)=\"openFolder(file)\" detail=\"true\">\r\n                    <ion-icon name=\"fas-folder\" slot=\"start\" [attr.aria-label]=\"'core.folder' | translate\"></ion-icon>\r\n                    <ion-label>{{file.filename}}</ion-label>\r\n                </ion-item>\r\n                <core-file *ngIf=\"!file.isdir\" [file]=\"file\" [component]=\"component\" [componentId]=\"file.contextid\"></core-file>\r\n            </ng-container>\r\n        </ion-list>\r\n\r\n        <!-- Message telling there are no files. -->\r\n        <core-empty-box *ngIf=\"!files || !files.length\" icon=\"far-folder-open\" [message]=\"'addon.privatefiles.emptyfilelist' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n\r\n    <!-- Upload a private file. -->\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"showUpload && root != 'site' && !path\">\r\n        <ion-fab-button (click)=\"uploadFile()\" [attr.aria-label]=\"'core.fileuploader.uploadafile' | translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'core.fileuploader.uploadafile' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/privatefiles/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/privatefiles/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonPrivateFilesIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPrivateFilesIndexPage", function() { return AddonPrivateFilesIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/privatefiles/services/privatefiles */ "./src/addons/privatefiles/services/privatefiles.ts");
/* harmony import */ var _addons_privatefiles_services_privatefiles_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @addons/privatefiles/services/privatefiles-helper */ "./src/addons/privatefiles/services/privatefiles-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays the list of files.
 */
let AddonPrivateFilesIndexPage = class AddonPrivateFilesIndexPage {
    constructor() {
        this.filesLoaded = false; // Whether the files are loaded.
        // Update visibility if current site info is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].SITE_UPDATED, () => {
            this.setVisibility();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_13__["CoreTime"].once(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_analytics__WEBPACK_IMPORTED_MODULE_14__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_14__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_files_get_files',
                name: _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.files'),
                data: { category: 'files' },
                url: '/user/files.php',
            });
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        var _a, _b, _c;
        try {
            this.root = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('root');
            const contextId = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteNumberParam('contextid');
            if (contextId) {
                // Loading a certain folder.
                this.path = {
                    contextid: contextId,
                    component: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('component'),
                    filearea: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('filearea'),
                    itemid: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteNumberParam('itemid'),
                    filepath: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('filepath'),
                    filename: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRequiredRouteParam('filename'),
                };
            }
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].back();
            return;
        }
        this.title = ((_a = this.path) === null || _a === void 0 ? void 0 : _a.filename) || _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.files');
        this.setVisibility();
        this.userQuota = (_c = (_b = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite()) === null || _b === void 0 ? void 0 : _b.getInfo()) === null || _c === void 0 ? void 0 : _c.userquota;
        if (!this.root) {
            // Load private files by default.
            if (this.showPrivateFiles) {
                this.root = 'my';
            }
            else if (this.showSiteFiles) {
                this.root = 'site';
            }
        }
        if (this.root) {
            this.rootChanged(this.root);
        }
        else {
            this.filesLoaded = true;
        }
    }
    /**
     * Set visibility of some items based on site data.
     */
    setVisibility() {
        this.showPrivateFiles = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canViewPrivateFiles();
        this.showSiteFiles = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canViewSiteFiles();
        this.showUpload = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canUploadFiles();
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        this.refreshFiles().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Function called when the root has changed.
     *
     * @param root New root.
     */
    rootChanged(root) {
        this.root = root;
        this.filesLoaded = false;
        this.component = this.root == 'my' ? _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFilesProvider"].PRIVATE_FILES_COMPONENT :
            _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFilesProvider"].SITE_FILES_COMPONENT;
        this.fetchFiles().finally(() => {
            this.filesLoaded = true;
        });
    }
    /**
     * Upload a new file.
     */
    uploadFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!_services_network__WEBPACK_IMPORTED_MODULE_3__["CoreNetwork"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('core.fileuploader.errormustbeonlinetoupload', true);
                return;
            }
            try {
                yield _addons_privatefiles_services_privatefiles_helper__WEBPACK_IMPORTED_MODULE_10__["AddonPrivateFilesHelper"].uploadPrivateFile(this.filesInfo);
                // File uploaded, refresh the list.
                this.filesLoaded = false;
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(this.refreshFiles());
                this.filesLoaded = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.fileuploader.errorwhileuploading', true);
            }
        });
    }
    /**
     * Fetch the files.
     *
     * @returns Promise resolved when done.
     */
    fetchFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.path) {
                    // Path is set, serve the files the user requested.
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getFiles(this.path);
                    return;
                }
                // The path is unknown, the user must be requesting a root.
                if (this.root == 'site') {
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.sitefiles');
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getSiteFiles();
                }
                else if (this.root == 'my') {
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.files');
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getPrivateFiles();
                    if (this.showUpload && this.userQuota && this.userQuota > 0) {
                        // Get the info to calculate the available size.
                        this.filesInfo = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getPrivateFilesInfo();
                        this.spaceUsed = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].bytesToSize(this.filesInfo.filesizewithoutreferences, 1);
                        this.userQuotaReadable = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].bytesToSize(this.userQuota, 1);
                    }
                    else {
                        // User quota isn't useful, delete it.
                        delete this.userQuota;
                    }
                    this.logView();
                }
                else {
                    // Unknown root.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('addon.privatefiles.couldnotloadfiles', true);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.privatefiles.couldnotloadfiles', true);
            }
        });
    }
    /**
     * Refresh the displayed files.
     *
     * @returns Promise resolved when done.
     */
    refreshFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield Promise.all([
                    _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].invalidateDirectory(this.root, this.path),
                    _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].invalidatePrivateFilesInfoForUser(),
                ]);
            }
            finally {
                yield this.fetchFiles();
            }
        });
    }
    /**
     * Open a folder.
     *
     * @param folder Folder to open.
     */
    openFolder(folder) {
        const params = {
            contextid: folder.contextid,
            component: folder.component || '',
            filearea: folder.filearea || '',
            itemid: folder.itemid || 0,
            filepath: folder.filepath || '',
            filename: folder.filename || '',
        };
        if (folder.component) {
            // Delete unused elements that may break the request.
            params.filename = '';
        }
        const hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashAsciiStr(JSON.stringify(params));
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigate(`../${hash}`, { params });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonPrivateFilesIndexPage.ctorParameters = () => [];
AddonPrivateFilesIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-privatefiles-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html")).default,
    })
], AddonPrivateFilesIndexPage);



/***/ }),

/***/ "./src/addons/privatefiles/privatefiles-lazy.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/privatefiles/privatefiles-lazy.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonPrivateFilesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPrivateFilesLazyModule", function() { return AddonPrivateFilesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _addons_privatefiles_pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addons/privatefiles/pages/index */ "./src/addons/privatefiles/pages/index/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
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
    return [
        {
            path: 'root',
            component: _addons_privatefiles_pages_index__WEBPACK_IMPORTED_MODULE_2__["AddonPrivateFilesIndexPage"],
        },
        {
            path: ':hash',
            component: _addons_privatefiles_pages_index__WEBPACK_IMPORTED_MODULE_2__["AddonPrivateFilesIndexPage"],
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["buildTabMainRoutes"])(injector, {
            redirectTo: 'root',
            pathMatch: 'full',
        }),
    ];
}
let AddonPrivateFilesLazyModule = class AddonPrivateFilesLazyModule {
};
AddonPrivateFilesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
        ],
        declarations: [
            _addons_privatefiles_pages_index__WEBPACK_IMPORTED_MODULE_2__["AddonPrivateFilesIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], AddonPrivateFilesLazyModule);



/***/ })

}]);
//# sourceMappingURL=addons-privatefiles-privatefiles-lazy-module.js.map