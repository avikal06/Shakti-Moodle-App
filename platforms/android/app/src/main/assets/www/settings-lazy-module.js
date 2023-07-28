(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                {{ 'core.settings.about' | translate}}\r\n            </h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ion-item button class=\"ion-text-wrap\" (click)=\"openPage('licenses')\" detail=\"true\">\r\n            <ion-icon name=\"far-copyright\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>{{ 'core.settings.opensourcelicenses' | translate }}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"privacyPolicy\" class=\"ion-text-wrap\" button core-link auto-login=\"no\" [href]=\"privacyPolicy\" detail=\"true\"\r\n            detailIcon=\"open-outline\">\r\n            <ion-icon name=\"fas-user-shield\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>{{ 'core.settings.privacypolicy' | translate }}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"a11yStatement\" class=\"ion-text-wrap\" button core-link auto-login=\"no\" [href]=\"a11yStatement\" detail=\"true\"\r\n            detailIcon=\"open-outline\">\r\n            <ion-icon name=\"fas-universal-access\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>{{ 'core.settings.accessstatement' | translate }}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"currentSite && feedbackFormUrl && showSurvey\" class=\"ion-text-wrap\" button core-link [href]=\"feedbackFormUrl\"\r\n            detail=\"true\" detailIcon=\"open-outline\">\r\n            <ion-icon name=\"fas-bullhorn\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>{{ 'core.settings.helpusimprove' | translate }}</ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"legalDisclaimer\" class=\"ion-text-wrap\" button core-link auto-login=\"no\" [href]=\"legalDisclaimer\" detail=\"true\"\r\n            detailIcon=\"open-outline\">\r\n            <ion-icon name=\"fas-scale-balanced\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>{{ 'core.settings.legaldisclaimer' | translate }}</ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-item button class=\"ion-text-wrap ion-text-center core-about-deviceinfo\" detail=\"false\" (click)=\"openPage('deviceinfo')\">\r\n        <ion-label>\r\n            <p class=\"item-heading\">{{ appName }} {{ versionName }}</p>\r\n        </ion-label>\r\n    </ion-item>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/dev/dev.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/dev/dev.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.developeroptions' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\" *ngIf=\"siteId\">\r\n            <ion-button fill=\"clear\" (click)=\"copyInfo()\" [attr.aria-label]=\"'core.settings.copyinfo' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-clipboard\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">Text direction</p>\r\n                <p>{{ direction }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"rtl\" (ionChange)=\"RTLChanged()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">Force safe area margins</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"forceSafeAreaMargins\" (ionChange)=\"safeAreaChanged()\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"stagingSitesCount && enableStagingSites !== undefined\">\r\n            <ion-label>\r\n                <h2>Enable staging sites ({{stagingSitesCount}})</h2>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"enableStagingSites\" (ionChange)=\"setEnabledStagingSites($event.detail.checked)\"></ion-toggle>\r\n        </ion-item>\r\n        <ng-container *ngIf=\"siteId\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">Enable remote styles <ion-badge>{{remoteStylesCount}}</ion-badge>\r\n                    </p>\r\n                </ion-label>\r\n                <ion-toggle [(ngModel)]=\"remoteStyles\" (ionChange)=\"remoteStylesChanged()\"></ion-toggle>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">Enable site plugin styles <ion-badge>{{pluginStylesCount}}</ion-badge>\r\n                    </p>\r\n                </ion-label>\r\n                <ion-toggle [(ngModel)]=\"pluginStyles\" (ionChange)=\"pluginStylesChanged()\"></ion-toggle>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"userToursEnabled\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">Reset user tours</p>\r\n                </ion-label>\r\n                <ion-button (click)=\"resetUserTours()\" aria-label=\"Reset user tours\" fill=\"clear\" slot=\"end\">\r\n                    <ion-icon slot=\"icon-only\" aria-hidden=\"true\" name=\"fas-broom\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>Disabled features</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-text-wrap\" *ngFor=\"let feature of disabledFeatures\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ feature }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>Site plugins</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-text-wrap\" *ngFor=\"let plugin of sitePlugins\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ plugin.addon }} ({{plugin.component}})</p>\r\n                    <p>{{plugin.version}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ng-container>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                {{ 'core.settings.deviceinfo' | translate }}\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"copyInfo()\" [attr.aria-label]=\"'core.settings.copyinfo' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-clipboard\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ion-item *ngIf=\"showDevOptions\" detail=\"true\" (click)=\"gotoDevOptions()\">\r\n            <ion-icon name=\"fas-terminal\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.developeroptions' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.appversion' | translate}}</p>\r\n                <p>{{ deviceInfo.versionName }} ({{ deviceInfo.versionCode }})</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\" (click)=\"enableDevOptions()\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.compilationinfo' | translate }}</p>\r\n                <p *ngIf=\"deviceInfo.compilationTime\">{{ deviceInfo.compilationTime | coreFormatDate: \"LLL Z\": false }}</p>\r\n                <p *ngIf=\"deviceInfo.lastCommit\">{{ deviceInfo.lastCommit }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.siteUrl\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.siteinfo' | translate }}<ng-container *ngIf=\"deviceInfo.isPrefixedUrl\">\r\n                        *</ng-container>\r\n                </p>\r\n                <p><a [href]=\"deviceInfo.siteUrl\" core-link auto-login=\"yes\">{{ deviceInfo.siteUrl }}</a></p>\r\n                <p *ngIf=\"deviceInfo.siteVersion\">{{ deviceInfo.siteVersion }}</p>\r\n                <p *ngIf=\"deviceInfo.siteId\">{{ deviceInfo.siteId }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.fileSystemRoot\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.filesystemroot' | translate }}</p>\r\n                <p>\r\n                    <a *ngIf=\"fsClickable\" [href]=\"deviceInfo.fileSystemRoot\" core-link auto-login=\"no\">\r\n                        {{ deviceInfo.fileSystemRoot }}\r\n                    </a>\r\n                </p>\r\n                <p *ngIf=\"!fsClickable\">{{ deviceInfo.fileSystemRoot }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.userAgent\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.navigatoruseragent' | translate }}</p>\r\n                <p>{{ deviceInfo.userAgent }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.browserLanguage\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.navigatorlanguage' | translate }}</p>\r\n                <p>{{ deviceInfo.browserLanguage }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.currentLanguage\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.currentlanguage' | translate }}</p>\r\n                <p>{{ currentLangName }} ({{ deviceInfo.currentLanguage }})</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.locationHref\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.locationhref' | translate }}</p>\r\n                <p>{{ deviceInfo.locationHref }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.deviceType\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.displayformat' | translate }}</p>\r\n                <p>{{ 'core.' + deviceInfo.deviceType | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.deviceOs && deviceOsTranslated\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.deviceos' | translate}}</p>\r\n                <p>{{ deviceOsTranslated }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.screen\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.screen' | translate }}</p>\r\n                <p>{{ deviceInfo.screen }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.networkstatus' | translate}}</p>\r\n                <p>{{ 'core.' + deviceInfo.networkStatus | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.wificonnection' | translate}}</p>\r\n                <p>{{ 'core.' + deviceInfo.wifiConnection | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.cordovaVersion\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.cordovaversion' | translate }}</p>\r\n                <p>{{ deviceInfo.cordovaVersion }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.platform\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.cordovadeviceplatform' | translate }}</p>\r\n                <p>{{ deviceInfo.platform }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.osVersion\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.cordovadeviceosversion' | translate }}</p>\r\n                <p>{{ deviceInfo.osVersion }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.model\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.cordovadevicemodel' | translate}}</p>\r\n                <p>{{ deviceInfo.model }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.uuid\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.cordovadeviceuuid' | translate}}</p>\r\n                <p>{{ deviceInfo.uuid }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.pushId\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.pushid' | translate }}</p>\r\n                <p>{{ deviceInfo.pushId }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"deviceInfo.pushId\" (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.encryptedpushsupported' | translate }}</p>\r\n                <p *ngIf=\"!deviceInfo.encryptedPushSupported\">{{ 'core.no' | translate }}</p>\r\n                <p *ngIf=\"deviceInfo.encryptedPushSupported\">{{ 'core.yes' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item (longPress)=\"copyItemInfo($event)\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n                <p class=\"item-heading\">{{ 'core.settings.localnotifavailable' | translate }}</p>\r\n                <p>{{ 'core.' + deviceInfo.localNotifAvailable | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.general' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ion-item class=\"ion-text-wrap\" lines=\"none\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.settings.language' | translate }}</p>\r\n            </ion-label>\r\n            <ion-select [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged($event)\" interface=\"action-sheet\"\r\n                [cancelText]=\"'core.cancel' | translate\" [interfaceOptions]=\"{header: 'core.settings.language' | translate}\">\r\n                <ion-select-option *ngFor=\"let entry of languages\" [value]=\"entry.code\">{{ entry.name }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap core-settings-general-font-size item-interactive\" lines=\"none\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.settings.fontsize' | translate }}</p>\r\n            </ion-label>\r\n            <ion-segment [(ngModel)]=\"selectedZoomLevel\" color=\"primary\">\r\n                <ion-segment-button *ngFor=\" let zoomLevel of zoomLevels\" [value]=\"zoomLevel.value\"\r\n                    [ngStyle]=\"{'font-size.px': zoomLevel.style}\" (click)=\"zoomLevelChanged($event, zoomLevel.value)\">\r\n                    <ion-label>\r\n                        {{ 'core.settings.fontsizecharacter' | translate }}\r\n                        <!-- Empty element styled with the largest font size, so all buttons share a common baseline. -->\r\n                        <span [ngStyle]=\"{'font-size.px': zoomLevels[zoomLevels.length - 1].style}\"></span>\r\n                    </ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap core-settings-general-color-scheme\" *ngIf=\"colorSchemes.length > 0\" lines=\"none\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.settings.colorscheme' | translate }}</p>\r\n                <p *ngIf=\"colorSchemeDisabled\" class=\"text-danger\">{{ 'core.settings.forcedsetting' | translate }}</p>\r\n            </ion-label>\r\n            <ion-select [(ngModel)]=\"selectedScheme\" (ionChange)=\"colorSchemeChanged($event)\" interface=\"action-sheet\"\r\n                [cancelText]=\"'core.cancel' | translate\" [disabled]=\"colorSchemeDisabled\"\r\n                [interfaceOptions]=\"{header: 'core.settings.colorscheme' | translate}\">\r\n                <ion-select-option *ngFor=\"let scheme of colorSchemes\" [value]=\"scheme\">\r\n                    {{ 'core.settings.colorscheme-' + scheme | translate }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item text-wrap *ngIf=\"colorSchemes.length > 0 && selectedScheme=='system' && isAndroid\" lines=\"none\">\r\n            <ion-label>\r\n                <p>{{ 'core.settings.colorscheme-system-notice' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.settings.enablerichtexteditor' | translate }}</p>\r\n                <p>{{ 'core.settings.enablerichtexteditordescription' | translate }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"richTextEditor\" (ionChange)=\"richTextEditorChanged($event)\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"displayIframeHelp\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.settings.ioscookies' | translate }}</p>\r\n                <p>{{ 'core.settings.ioscookiesdescription' | translate }}</p>\r\n                <ion-button expand=\"block\" (click)=\"openNativeSettings($event)\">\r\n                    {{ 'core.opensettings' | translate }}\r\n                </ion-button>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.settings.debugdisplay' | translate }}</p>\r\n                <p>{{ 'core.settings.debugdisplaydescription' | translate }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"debugDisplay\" (ionChange)=\"debugDisplayChanged($event)\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"analyticsSupported\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">{{ 'core.settings.enableanalytics' | translate }}</p>\r\n                <p>{{ 'core.settings.enableanalyticsdescription' | translate }}</p>\r\n            </ion-label>\r\n            <ion-toggle [(ngModel)]=\"analyticsEnabled\" (ionChange)=\"analyticsEnabledChanged($event)\"></ion-toggle>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/index/index.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/index/index.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.appsettings' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\"></ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-list>\r\n            <ion-item *ngFor=\"let section of sections.items\" [attr.aria-current]=\"sections.getItemAriaCurrent(section)\" button detail=\"true\"\r\n                (click)=\"sections.select(section)\">\r\n                <ion-icon [name]=\"section.icon\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ section.name | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.opensourcelicenses' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-searchbar [(ngModel)]=\"textFilter\" (ionInput)=\"filterChanged($event.target)\" (ionCancel)=\"filterChanged($event.target)\"\r\n            [placeholder]=\"'core.filter' | translate\">\r\n        </ion-searchbar>\r\n        <ion-list>\r\n            <ion-item button *ngIf=\"error\" class=\"ion-text-wrap\" [href]=\"licensesUrl\" core-link auto-login=\"no\">\r\n                <ion-label>\r\n                    {{ 'core.settings.opensourcelicenses' | translate }}\r\n                </ion-label>\r\n                <ion-button [href]=\"licensesUrl\" target=\"_blank\" fill=\"clear\" slot=\"end\" core-link auto-login=\"no\">\r\n                    {{ 'core.view' | translate }}</ion-button>\r\n            </ion-item>\r\n            <ng-container *ngIf=\"!error\">\r\n                <ion-item *ngFor=\"let license of licenses\" class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">\r\n                            <a *ngIf=\"license.repository\" [href]=\"license.repository\" core-link auto-login=\"no\">{{ license.name }}</a>\r\n                            <ng-container *ngIf=\"!license.repository\">{{ license.name }}</ng-container> - {{ license.version }}\r\n                        </p>\r\n                        <p class=\"item-heading\" *ngIf=\"license.publisher\">\r\n                            {{ 'core.settings.publisher' | translate }}{{ 'core.labelsep' | translate }} {{ license.publisher }}\r\n                        </p>\r\n                        <p>{{ 'core.settings.license' | translate }}{{ 'core.labelsep' | translate }} {{ license.licenses }}</p>\r\n                        <p><a *ngIf=\"license.url\" [href]=\"license.url\" core-link auto-login=\"no\">{{ license.url }}</a></p>\r\n                        <p><a *ngIf=\"license.email\" [href]=\"'mailto:' + license.email\" core-link auto-login=\"no\"\r\n                                [showBrowserWarning]=\"false\">{{ license.email }}</a></p>\r\n                    </ion-label>\r\n                    <ion-button *ngIf=\"license.licenseUrl\" [href]=\"license.licenseUrl\" target=\"_blank\" fill=\"clear\" slot=\"end\" core-link\r\n                        auto-login=\"no\">{{ 'core.view' | translate }}</ion-button>\r\n                </ion-item>\r\n            </ng-container>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.spaceusage' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-navbar-buttons>\r\n            </core-navbar-buttons>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\" slot=\"fixed\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"core-sitelist limited-width\">\r\n            <ion-card *ngIf=\"accountsList.currentSite\">\r\n                <ion-item-divider sticky=\"true\" class=\"core-sitelist-sitename\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">\r\n                            <core-format-text [text]=\"accountsList.currentSite.siteName\" clean=\"true\"\r\n                                [siteId]=\"accountsList.currentSite.id\"></core-format-text>\r\n                        </p>\r\n                        <p><a [href]=\"accountsList.currentSite.siteUrl\" core-link autoLogin=\"yes\">{{\r\n                                accountsList.currentSite.siteUrlWithoutProtocol }}</a>\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n\r\n                <ion-item class=\"item-current\">\r\n                    <ng-container *ngTemplateOutlet=\"siteUsage; context: {site: accountsList.currentSite}\"></ng-container>\r\n                </ion-item>\r\n\r\n                <ion-item *ngFor=\"let site of accountsList.sameSite\">\r\n                    <ng-container *ngTemplateOutlet=\"siteUsage; context: {site: site}\"></ng-container>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-card *ngFor=\"let sites of accountsList.otherSites\">\r\n                <ion-item-divider sticky=\"true\" *ngIf=\"sites[0]\" class=\"core-sitelist-sitename\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">\r\n                            <core-format-text [text]=\"sites[0].siteName\" clean=\"true\" [siteId]=\"sites[0].id\"></core-format-text>\r\n                        </p>\r\n                        <p><a [href]=\"sites[0].siteUrl\" core-link autoLogin=\"no\">{{ sites[0].siteUrlWithoutProtocol }}</a></p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n\r\n                <ion-item *ngFor=\"let site of sites\">\r\n                    <ng-container *ngTemplateOutlet=\"siteUsage; context: {site: site}\"></ng-container>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.settings.total' | translate }}</p>\r\n                </ion-label>\r\n                <p slot=\"end\" class=\"ion-margin-end\">\r\n                    {{ totalSpaceUsage | coreBytesToSize }}\r\n                </p>\r\n            </ion-item-divider>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n\r\n<!-- Template to render a site space usage. -->\r\n<ng-template #siteUsage let-site=\"site\">\r\n    <core-user-avatar [user]=\"site\" slot=\"start\" [linkProfile]=\"false\" [siteId]=\"site.id\"></core-user-avatar>\r\n\r\n    <ion-label class=\"ion-text-wrap\">\r\n        <p class=\"item-heading\">{{site.fullname}}</p>\r\n        <ion-badge color=\"light\" *ngIf=\"site.spaceUsage !== undefined\">{{ site.spaceUsage | coreBytesToSize }}</ion-badge>\r\n    </ion-label>\r\n    <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteSiteStorage(site)\"\r\n        [hidden]=\"site.spaceUsage <= 0 && !site.hasCacheEntries\">\r\n        <ion-icon name=\"fas-trash\" slot=\"icon-only\"\r\n            [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate: { name: site.siteName }\">\r\n        </ion-icon>\r\n    </ion-button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.synchronization' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-navbar-buttons>\r\n                <ion-button (click)=\"showInfo()\" [attr.aria-label]=\"'core.info' | translate\">\r\n                    <ion-icon name=\"fas-circle-info\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n            </core-navbar-buttons>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"sitesLoaded\">\r\n        <ion-list class=\"core-sitelist limited-width\">\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'core.settings.syncsettings' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">\r\n                        {{ 'core.settings.syncdatasaver' | translate }}\r\n                    </p>\r\n                </ion-label>\r\n                <ion-toggle slot=\"end\" [(ngModel)]=\"dataSaver\" (ngModelChange)=\"syncOnlyOnWifiChanged()\">\r\n                </ion-toggle>\r\n            </ion-item>\r\n\r\n            <ion-card class=\"core-warning-card\" *ngIf=\"!isOnline || (dataSaver && limitedConnection)\">\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>\r\n                        <ng-container *ngIf=\"isOnline && dataSaver && limitedConnection\">\r\n                            {{ 'core.settings.connectwifitosync' | translate }}</ng-container>\r\n                        <ng-container *ngIf=\"!isOnline\">{{ 'core.settings.connecttosync' | translate }}</ng-container>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n\r\n            <ng-container *ngIf=\"isOnline && (!dataSaver || !limitedConnection)\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <h2>{{ 'core.accounts' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n\r\n                <ion-card *ngIf=\"accountsList.currentSite\">\r\n                    <ion-item-divider sticky=\"true\" class=\"core-sitelist-sitename\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">\r\n                                <core-format-text [text]=\"accountsList.currentSite.siteName\" clean=\"true\"\r\n                                    [siteId]=\"accountsList.currentSite.id\"></core-format-text>\r\n                            </p>\r\n                            <p><a [href]=\"accountsList.currentSite.siteUrl\" core-link autoLogin=\"yes\">{{\r\n                                    accountsList.currentSite.siteUrlWithoutProtocol }}</a>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n\r\n                    <ion-item class=\"item-current\">\r\n                        <ng-container *ngTemplateOutlet=\"siteSync; context: {site: accountsList.currentSite}\"></ng-container>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngFor=\"let site of accountsList.sameSite\">\r\n                        <ng-container *ngTemplateOutlet=\"siteSync; context: {site: site}\"></ng-container>\r\n                    </ion-item>\r\n                </ion-card>\r\n\r\n                <ion-card *ngFor=\"let sites of accountsList.otherSites\">\r\n                    <ion-item-divider sticky=\"true\" *ngIf=\"sites[0]\" class=\"core-sitelist-sitename\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">\r\n                                <core-format-text [text]=\"sites[0].siteName\" clean=\"true\" [siteId]=\"sites[0].id\"></core-format-text>\r\n                            </p>\r\n                            <p><a [href]=\"sites[0].siteUrl\" core-link autoLogin=\"no\">{{ sites[0].siteUrlWithoutProtocol }}</a></p>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n\r\n                    <ion-item *ngFor=\"let site of sites\">\r\n                        <ng-container *ngTemplateOutlet=\"siteSync; context: {site: site}\"></ng-container>\r\n                    </ion-item>\r\n                </ion-card>\r\n            </ng-container>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n\r\n<!-- Template to render a site to sync. -->\r\n<ng-template #siteSync let-site=\"site\">\r\n    <core-user-avatar [user]=\"site\" slot=\"start\" [linkProfile]=\"false\" [siteId]=\"site.id\"></core-user-avatar>\r\n\r\n    <ion-label>\r\n        <p class=\"item-heading\">{{site.fullname}}</p>\r\n        <p class=\"text-danger\" *ngIf=\"site.loggedOut\">{{ 'core.settings.logintosync' | translate }}</p>\r\n    </ion-label>\r\n    <core-button-with-spinner [loading]=\"isSynchronizing(site.id)\" slot=\"end\" *ngIf=\"!site.loggedOut\">\r\n        <ion-button fill=\"clear\" (click)=\"synchronize(site.id)\" [attr.aria-label]=\"'core.settings.synchronizenow' | translate\">\r\n            <ion-icon name=\"fas-rotate\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n        </ion-button>\r\n    </core-button-with-spinner>\r\n    <ion-button fill=\"clear\" (click)=\"login(site.id)\" [attr.aria-label]=\"'core.login.login' | translate\" *ngIf=\"site.loggedOut\" slot=\"end\">\r\n        <ion-icon name=\"fas-right-to-bracket\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n    </ion-button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/core/features/login/sitelist.scss":
/*!***********************************************!*\
  !*** ./src/core/features/login/sitelist.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list.core-sitelist .core-sitelist-sitename {\n  border-bottom: 1px solid var(--stroke);\n}\nion-list.core-sitelist .core-sitelist-sitename ion-label {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3NpdGVsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFNSSxzQ0FBQTtBQUxSO0FBQVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFFWiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9zaXRlbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QuY29yZS1zaXRlbGlzdCB7XHJcbiAgICAuY29yZS1zaXRlbGlzdC1zaXRlbmFtZSB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlKTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/core/features/settings/classes/settings-sections-source.ts":
/*!************************************************************************!*\
  !*** ./src/core/features/settings/classes/settings-sections-source.ts ***!
  \************************************************************************/
/*! exports provided: CoreSettingsSectionsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSectionsSource", function() { return CoreSettingsSectionsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/sharedfiles/sharedfiles.module */ "./src/core/features/sharedfiles/sharedfiles.module.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
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
 * Provides a collection of setting sections.
 */
class CoreSettingsSectionsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManagerSource"] {
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sections = [
                {
                    name: 'core.settings.general',
                    path: 'general',
                    icon: 'fas-wrench',
                },
                {
                    name: 'core.settings.spaceusage',
                    path: 'spaceusage',
                    icon: 'fas-list-check',
                },
                {
                    name: 'core.settings.synchronization',
                    path: 'sync',
                    icon: _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_SYNC,
                },
            ];
            if (_services_platform__WEBPACK_IMPORTED_MODULE_4__["CorePlatform"].isIOS()) {
                sections.push({
                    name: 'core.sharedfiles.sharedfiles',
                    path: _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_3__["SHAREDFILES_PAGE_NAME"] + '/list/root',
                    icon: 'fas-folder',
                    params: { manage: true },
                });
            }
            sections.push({
                name: 'core.settings.about',
                path: 'about',
                icon: 'fas-id-card',
            });
            return { items: sections };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(section) {
        return section.path;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(section) {
        return section.params || {};
    }
}


/***/ }),

/***/ "./src/core/features/settings/pages/about/about.scss":
/*!***********************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".core-about-deviceinfo {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29yZS1hYm91dC1kZXZpY2VpbmZvIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/core/features/settings/pages/about/about.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.ts ***!
  \*********************************************************/
/*! exports provided: CoreSettingsAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPage", function() { return CoreSettingsAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * App settings about menu page.
 */
let CoreSettingsAboutPage = class CoreSettingsAboutPage {
    constructor() {
        var _a, _b, _c;
        this.feedbackFormUrl = (_a = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.feedbackFormUrl) !== null && _a !== void 0 ? _a : 'https://feedback.moodle.org/mobileapp';
        this.a11yStatement = (_b = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.a11yStatement) !== null && _b !== void 0 ? _b : 'https://apps.moodle.com/admin/tool/policy/view.php?versionid=5';
        this.showSurvey = false;
        this.legalDisclaimer = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.legalDisclaimer;
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSite();
        this.appName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.appname;
        this.versionName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname;
        // Calculate the privacy policy to use.
        this.privacyPolicy = (this.currentSite && (this.currentSite.getStoredConfig('tool_mobile_apppolicy') ||
            this.currentSite.getStoredConfig('sitepolicy'))) || _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.privacypolicy;
        this.showSurvey = (_c = this.currentSite) === null || _c === void 0 ? void 0 : _c.isAdmin();
    }
    /**
     * Opens a page.
     *
     * @param page The component deeplink name you want to push onto the navigation stack.
     */
    openPage(page) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigate(page);
    }
};
CoreSettingsAboutPage.ctorParameters = () => [];
CoreSettingsAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.scss */ "./src/core/features/settings/pages/about/about.scss")).default]
    })
], CoreSettingsAboutPage);



/***/ }),

/***/ "./src/core/features/settings/pages/dev/dev.ts":
/*!*****************************************************!*\
  !*** ./src/core/features/settings/pages/dev/dev.ts ***!
  \*****************************************************/
/*! exports provided: CoreSettingsDevPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDevPage", function() { return CoreSettingsDevPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _features_siteplugins_services_siteplugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/siteplugins/services/siteplugins */ "./src/core/features/siteplugins/services/siteplugins.ts");
/* harmony import */ var _features_usertours_services_user_tours__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/usertours/services/user-tours */ "./src/core/features/usertours/services/user-tours.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays the developer options.
 */
let CoreSettingsDevPage = class CoreSettingsDevPage {
    constructor() {
        this.rtl = false;
        this.forceSafeAreaMargins = false;
        this.direction = 'ltr';
        this.remoteStyles = true;
        this.remoteStylesCount = 0;
        this.pluginStyles = true;
        this.pluginStylesCount = 0;
        this.sitePlugins = [];
        this.userToursEnabled = true;
        this.stagingSitesCount = 0;
        this.disabledFeatures = [];
    }
    ngOnInit() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rtl = _services_platform__WEBPACK_IMPORTED_MODULE_8__["CorePlatform"].isRTL;
            this.RTLChanged();
            this.forceSafeAreaMargins = document.documentElement.classList.contains('force-safe-area-margins');
            this.safeAreaChanged();
            this.siteId = (_a = _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.getId();
            this.stagingSitesCount = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].CONFIG.sites.filter((site) => site.staging).length;
            if (this.stagingSitesCount) {
                this.enableStagingSites = yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsHelper"].hasEnabledStagingSites();
                this.previousEnableStagingSites = this.enableStagingSites;
            }
            if (!this.siteId) {
                return;
            }
            this.remoteStyles = false;
            this.remoteStylesCount = 0;
            this.pluginStyles = false;
            this.pluginStylesCount = 0;
            this.userToursEnabled = !_features_usertours_services_user_tours__WEBPACK_IMPORTED_MODULE_6__["CoreUserTours"].isDisabled();
            document.head.querySelectorAll('style').forEach((style) => {
                if (this.siteId && style.id.endsWith(this.siteId)) {
                    if (style.innerHTML.length > 0) {
                        this.remoteStylesCount++;
                    }
                    this.remoteStyles = this.remoteStyles || style.getAttribute('media') != 'disabled';
                }
                if (style.id.startsWith('siteplugin-')) {
                    if (style.innerHTML.length > 0) {
                        this.pluginStylesCount++;
                    }
                    this.pluginStyles = this.pluginStyles || style.getAttribute('media') != 'disabled';
                }
            });
            this.sitePlugins = _features_siteplugins_services_siteplugins__WEBPACK_IMPORTED_MODULE_5__["CoreSitePlugins"].getCurrentSitePluginList().map((plugin) => ({
                addon: plugin.addon,
                component: plugin.component,
                version: plugin.version,
            }));
            const disabledFeatures = (_c = (yield ((_b = _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSite()) === null || _b === void 0 ? void 0 : _b.getPublicConfig()))) === null || _c === void 0 ? void 0 : _c.tool_mobile_disabledfeatures;
            this.disabledFeatures = (disabledFeatures === null || disabledFeatures === void 0 ? void 0 : disabledFeatures.split(',')) || [];
        });
    }
    /**
     * Called when the rtl is enabled or disabled.
     */
    RTLChanged() {
        this.direction = this.rtl ? 'rtl' : 'ltr';
        document.dir = this.direction;
    }
    /**
     * Called when safe area margins is enabled or disabled.
     */
    safeAreaChanged() {
        document.documentElement.classList.toggle('force-safe-area-margins', this.forceSafeAreaMargins);
    }
    /**
     * Called when remote styles is enabled or disabled.
     */
    remoteStylesChanged() {
        document.head.querySelectorAll('style').forEach((style) => {
            if (this.siteId && style.id.endsWith(this.siteId)) {
                if (this.remoteStyles) {
                    style.removeAttribute('media');
                }
                else {
                    style.setAttribute('media', 'disabled');
                }
            }
        });
    }
    /**
     * Called when remote styles is enabled or disabled.
     */
    pluginStylesChanged() {
        document.head.querySelectorAll('style').forEach((style) => {
            if (style.id.startsWith('siteplugin-')) {
                if (this.pluginStyles) {
                    style.removeAttribute('media');
                }
                else {
                    style.setAttribute('media', 'disabled');
                }
            }
        });
    }
    /**
     * Copies site info.
     */
    copyInfo() {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].copyToClipboard(JSON.stringify({ disabledFeatures: this.disabledFeatures, sitePlugins: this.sitePlugins }));
    }
    /**
     * Reset all user tours.
     */
    resetUserTours() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _features_usertours_services_user_tours__WEBPACK_IMPORTED_MODULE_6__["CoreUserTours"].resetTours();
            yield _services_config__WEBPACK_IMPORTED_MODULE_7__["CoreConfig"].delete(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__["CoreLoginHelperProvider"].ONBOARDING_DONE);
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showToast('User tours have been reseted');
        });
    }
    setEnabledStagingSites(enabled) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.enableStagingSites === this.previousEnableStagingSites) {
                return;
            }
            try {
                yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsHelper"].setEnabledStagingSites(enabled);
                this.previousEnableStagingSites = enabled;
            }
            catch (error) {
                this.enableStagingSites = !enabled;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal(error);
            }
        });
    }
};
CoreSettingsDevPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-core-app-settings-dev',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dev.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/dev/dev.html")).default,
    })
], CoreSettingsDevPage);



/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.scss":
/*!*********************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\n  -webkit-user-select: text;\n          user-select: text;\n  cursor: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2RldmljZWluZm8vZGV2aWNlaW5mby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9zZXR0aW5ncy9wYWdlcy9kZXZpY2VpbmZvL2RldmljZWluZm8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/settings/pages/deviceinfo/deviceinfo.ts":
/*!*******************************************************************!*\
  !*** ./src/core/features/settings/pages/deviceinfo/deviceinfo.ts ***!
  \*******************************************************************/
/*! exports provided: CoreSettingsDeviceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPage", function() { return CoreSettingsDeviceInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/local-notifications */ "./src/core/services/local-notifications.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/lang */ "./src/core/services/lang.ts");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/file */ "./src/core/services/file.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
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
 * Page that displays the device information.
 */
let CoreSettingsDeviceInfoPage = class CoreSettingsDeviceInfoPage {
    constructor() {
        var _a;
        this.fsClickable = false;
        this.showDevOptions = false;
        this.devOptionsClickCounter = 0;
        this.devOptionsForced = false;
        const sitesProvider = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].instance;
        const device = _singletons__WEBPACK_IMPORTED_MODULE_4__["Device"].instance;
        const translate = _singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instance;
        const navigator = window.navigator;
        this.deviceInfo = {
            versionName: _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname,
            versionCode: _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versioncode,
            compilationTime: _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].BUILD.compilationTime || 0,
            lastCommit: _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].BUILD.lastCommitHash || '',
            networkStatus: _services_network__WEBPACK_IMPORTED_MODULE_14__["CoreNetwork"].isOnline() ? 'online' : 'offline',
            wifiConnection: _services_network__WEBPACK_IMPORTED_MODULE_14__["CoreNetwork"].isWifi() ? 'yes' : 'no',
            localNotifAvailable: _services_local_notifications__WEBPACK_IMPORTED_MODULE_3__["CoreLocalNotifications"].isPluginAvailable() ? 'yes' : 'no',
            pushId: _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_9__["CorePushNotifications"].getPushId(),
            deviceType: '',
        };
        if (window.location && window.location.href) {
            const url = window.location.href;
            this.deviceInfo.locationHref = url.indexOf('#') > 0 ? url.substring(0, url.indexOf('#')) : url;
        }
        if (window.screen) {
            this.deviceInfo.screen = window.innerWidth + 'x' + window.innerHeight +
                ' (' + window.screen.width + 'x' + window.screen.height + ')';
        }
        if (_services_platform__WEBPACK_IMPORTED_MODULE_13__["CorePlatform"].isMobile()) {
            this.deviceInfo.deviceType = _services_platform__WEBPACK_IMPORTED_MODULE_13__["CorePlatform"].is('tablet') ? 'tablet' : 'phone';
            if (_services_platform__WEBPACK_IMPORTED_MODULE_13__["CorePlatform"].isAndroid()) {
                this.deviceInfo.deviceOs = 'android';
                this.deviceOsTranslated = 'Android';
            }
            else if (_services_platform__WEBPACK_IMPORTED_MODULE_13__["CorePlatform"].isIOS()) {
                this.deviceInfo.deviceOs = 'ios';
                this.deviceOsTranslated = 'iOS';
            }
            else {
                const matches = navigator.userAgent.match(/\(([^)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = translate.instant('core.unknown');
                }
            }
        }
        else {
            this.deviceInfo.deviceType = 'browser';
            const matches = navigator.userAgent.match(/\(([^)]*)\)/);
            if (matches && matches.length > 1) {
                this.deviceInfo.deviceOs = matches[1];
                this.deviceOsTranslated = matches[1];
            }
            else {
                this.deviceInfo.deviceOs = 'unknown';
                this.deviceOsTranslated = translate.instant('core.unknown');
            }
        }
        if (navigator) {
            if (navigator.userAgent) {
                this.deviceInfo.userAgent = navigator.userAgent;
            }
            if (navigator.language) {
                this.deviceInfo.browserLanguage = navigator.language;
            }
        }
        if (device) {
            if (device.cordova) {
                this.deviceInfo.cordovaVersion = device.cordova;
            }
            if (device.platform) {
                this.deviceInfo.platform = device.platform;
            }
            if (device.version) {
                this.deviceInfo.osVersion = device.version;
            }
            if (device.model) {
                this.deviceInfo.model = device.model;
            }
            if (device.uuid) {
                this.deviceInfo.uuid = device.uuid;
            }
        }
        const currentSite = sitesProvider.getCurrentSite();
        this.deviceInfo.siteId = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getId();
        this.deviceInfo.siteVersion = (_a = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getInfo()) === null || _a === void 0 ? void 0 : _a.release;
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_14__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_4__["NgZone"].run(() => {
                this.deviceInfo.networkStatus = _services_network__WEBPACK_IMPORTED_MODULE_14__["CoreNetwork"].isOnline() ? 'online' : 'offline';
            });
        });
        this.asyncInit();
    }
    /**
     * Async part of the constructor.
     */
    asyncInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sitesProvider = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].instance;
            const fileProvider = _services_file__WEBPACK_IMPORTED_MODULE_6__["CoreFile"].instance;
            const lang = yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].getCurrentLanguage();
            this.deviceInfo.currentLanguage = lang;
            this.currentLangName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.languages[lang];
            const currentSite = sitesProvider.getCurrentSite();
            const isSingleFixedSite = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_15__["CoreLoginHelper"].isSingleFixedSite();
            const sites = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_15__["CoreLoginHelper"].getAvailableSites();
            const firstUrl = isSingleFixedSite && sites[0].url;
            this.deviceInfo.siteUrl = (currentSite === null || currentSite === void 0 ? void 0 : currentSite.getURL()) || firstUrl || undefined;
            this.deviceInfo.isPrefixedUrl = !!sites.length;
            if (fileProvider.isAvailable()) {
                const basepath = yield fileProvider.getBasePath();
                this.deviceInfo.fileSystemRoot = basepath;
                this.fsClickable = fileProvider.usesHTMLAPI();
            }
            const showDevOptionsOnConfig = yield _services_config__WEBPACK_IMPORTED_MODULE_10__["CoreConfig"].get('showDevOptions', 0);
            this.devOptionsForced = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].BUILD.isDevelopment || _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].BUILD.isTesting;
            this.showDevOptions = this.devOptionsForced || showDevOptionsOnConfig == 1;
            const publicKey = this.deviceInfo.pushId ?
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_9__["CorePushNotifications"].getPublicKey()) :
                undefined;
            this.deviceInfo.encryptedPushSupported = publicKey !== undefined;
        });
    }
    /**
     * Copies device info into the clipboard.
     */
    copyInfo() {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].copyToClipboard(JSON.stringify(this.deviceInfo));
    }
    /**
     * Copies device info item into the clipboard.
     *
     * @param e Event.
     */
    copyItemInfo(e) {
        var _a, _b;
        const el = e.target;
        const text = (_b = (_a = el === null || el === void 0 ? void 0 : el.closest('ion-item')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        text && _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].copyToClipboard(text);
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }
    /**
     * 5 clicks will enable dev options.
     */
    enableDevOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.devOptionsForced) {
                return;
            }
            clearTimeout(this.devOptionsClickTimeout);
            this.devOptionsClickCounter++;
            if (this.devOptionsClickCounter == 5) {
                if (!this.showDevOptions) {
                    this.showDevOptions = true;
                    yield _services_config__WEBPACK_IMPORTED_MODULE_10__["CoreConfig"].set('showDevOptions', 1);
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_11__["CoreDomUtils"].showToast('core.settings.youradev', true);
                }
                else {
                    this.showDevOptions = false;
                    yield _services_config__WEBPACK_IMPORTED_MODULE_10__["CoreConfig"].delete('showDevOptions');
                }
                this.devOptionsClickCounter = 0;
                return;
            }
            this.devOptionsClickTimeout = window.setTimeout(() => {
                this.devOptionsClickTimeout = undefined;
                this.devOptionsClickCounter = 0;
            }, 500);
        });
    }
    /**
     * Navigate to dev options.
     */
    gotoDevOptions() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigate('dev');
    }
};
CoreSettingsDeviceInfoPage.ctorParameters = () => [];
CoreSettingsDeviceInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-deviceinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deviceinfo.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/deviceinfo/deviceinfo.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deviceinfo.scss */ "./src/core/features/settings/pages/deviceinfo/deviceinfo.scss")).default]
    })
], CoreSettingsDeviceInfoPage);



/***/ }),

/***/ "./src/core/features/settings/pages/general/general.scss":
/*!***************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-settings-general-font-size ion-segment {\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2dlbmVyYWwvZ2VuZXJhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9zZXR0aW5ncy9wYWdlcy9nZW5lcmFsL2dlbmVyYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5jb3JlLXNldHRpbmdzLWdlbmVyYWwtZm9udC1zaXplIGlvbi1zZWdtZW50IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/settings/pages/general/general.ts":
/*!*************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.ts ***!
  \*************************************************************/
/*! exports provided: CoreSettingsGeneralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPage", function() { return CoreSettingsGeneralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/lang */ "./src/core/services/lang.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_utils_iframe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/iframe */ "./src/core/services/utils/iframe.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays the general settings.
 */
let CoreSettingsGeneralPage = class CoreSettingsGeneralPage {
    constructor() {
        this.languages = [];
        this.selectedLanguage = '';
        this.zoomLevels = [];
        this.selectedZoomLevel = "none" /* NONE */;
        this.richTextEditor = true;
        this.debugDisplay = false;
        this.analyticsSupported = false;
        this.analyticsEnabled = false;
        this.colorSchemes = [];
        this.selectedScheme = "light" /* LIGHT */;
        this.colorSchemeDisabled = false;
        this.isAndroid = false;
        this.displayIframeHelp = false;
        this.asyncInit();
    }
    /**
     * Async part of the constructor.
     */
    asyncInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the supported languages.
            const languages = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.languages;
            for (const code in languages) {
                this.languages.push({
                    code: code,
                    name: languages[code],
                });
            }
            // Sort them by name.
            this.languages.sort((a, b) => a.name.localeCompare(b.name));
            this.selectedLanguage = yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].getCurrentLanguage();
            // Configure color schemes.
            if (!_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.forceColorScheme) {
                this.colorSchemeDisabled = _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].isColorSchemeDisabledInSite();
                if (this.colorSchemeDisabled) {
                    this.colorSchemes.push("light" /* LIGHT */);
                    this.selectedScheme = this.colorSchemes[0];
                }
                else {
                    this.isAndroid = _services_platform__WEBPACK_IMPORTED_MODULE_14__["CorePlatform"].isAndroid();
                    this.colorSchemes = _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getAllowedColorSchemes();
                    this.selectedScheme = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_COLOR_SCHEME, "light" /* LIGHT */);
                }
            }
            this.selectedZoomLevel = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getZoomLevel();
            this.zoomLevels = Object.keys(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.zoomlevels).map((value) => ({
                value,
                // Absolute pixel size based on 1.4rem body text when this size is selected.
                style: Math.round(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.zoomlevels[value] * 16 / 100),
                selected: value === this.selectedZoomLevel,
            }));
            this.richTextEditor = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_RICH_TEXT_EDITOR, true);
            this.debugDisplay = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_DEBUG_DISPLAY, false);
            this.analyticsSupported = _services_analytics__WEBPACK_IMPORTED_MODULE_15__["CoreAnalytics"].hasHandlers();
            if (this.analyticsSupported) {
                this.analyticsEnabled = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ANALYTICS_ENABLED, true);
            }
            this.displayIframeHelp = _services_utils_iframe__WEBPACK_IMPORTED_MODULE_9__["CoreIframeUtils"].shouldDisplayHelp();
        });
    }
    /**
     * Called when a new language is selected.
     *
     * @param ev Event
     */
    languageChanged(ev) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ev.stopPropagation();
            ev.preventDefault();
            const previousLanguage = yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].getCurrentLanguage();
            if (this.selectedLanguage === previousLanguage) {
                // Prevent opening again.
                return;
            }
            const previousLanguageCancel = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.cancel');
            try {
                yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].changeCurrentLanguage(this.selectedLanguage);
            }
            finally {
                const langName = (_a = this.languages.find((lang) => lang.code == this.selectedLanguage)) === null || _a === void 0 ? void 0 : _a.name;
                const buttons = [
                    {
                        text: previousLanguageCancel,
                        role: 'cancel',
                        handler: () => {
                            clearTimeout(timeout);
                            this.selectedLanguage = previousLanguage;
                            _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].changeCurrentLanguage(this.selectedLanguage);
                        },
                    },
                    {
                        text: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.settings.changelanguage', { $a: langName }),
                        cssClass: 'timed-button',
                        handler: () => {
                            clearTimeout(timeout);
                            this.applyLanguageAndRestart();
                        },
                    },
                ];
                const alert = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showAlertWithOptions({
                    message: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.settings.changelanguagealert'),
                    buttons,
                });
                const timeout = window.setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield alert.dismiss();
                    this.applyLanguageAndRestart();
                }), 10000);
            }
        });
    }
    /**
     * Apply language changes and restart the app.
     */
    applyLanguageAndRestart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Invalidate cache for all sites to get the content in the right language.
            const sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_11__["CoreSites"].getSitesInstances();
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].ignoreErrors(Promise.all(sites.map((site) => site.invalidateWsCache())));
            _singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].LANGUAGE_CHANGED, this.selectedLanguage);
            _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigate('/reload', {
                reset: true,
            });
        });
    }
    /**
     * Called when a new zoom level is selected.
     *
     * @param ev Event
     * @param value New value
     */
    zoomLevelChanged(ev, value) {
        ev.stopPropagation();
        ev.preventDefault();
        this.selectedZoomLevel = value;
        this.zoomLevels = this.zoomLevels.map((fontSize) => {
            fontSize.selected = fontSize.value === this.selectedZoomLevel;
            return fontSize;
        });
        _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].applyZoomLevel(this.selectedZoomLevel);
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ZOOM_LEVEL, this.selectedZoomLevel);
    }
    /**
     * Called when a new color scheme is selected.
     *
     * @param ev Event
     */
    colorSchemeChanged(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].setColorScheme(this.selectedScheme);
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_COLOR_SCHEME, this.selectedScheme);
    }
    /**
     * Called when the rich text editor is enabled or disabled.
     *
     * @param ev Event
     */
    richTextEditorChanged(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
    }
    /**
     * Called when the debug display setting is enabled or disabled.
     *
     * @param ev Event
     */
    debugDisplayChanged(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_DEBUG_DISPLAY, this.debugDisplay ? 1 : 0);
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].setDebugDisplay(this.debugDisplay);
    }
    /**
     * Called when the analytics setting is enabled or disabled.
     *
     * @param ev Event
     */
    analyticsEnabledChanged(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            ev.stopPropagation();
            ev.preventDefault();
            yield _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_7__["CorePushNotifications"].enableAnalytics(this.analyticsEnabled);
            _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ANALYTICS_ENABLED, this.analyticsEnabled ? 1 : 0);
        });
    }
    /**
     * Open native settings.
     *
     * @param ev Event
     */
    openNativeSettings(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        _singletons__WEBPACK_IMPORTED_MODULE_10__["Diagnostic"].switchToSettings();
    }
};
CoreSettingsGeneralPage.ctorParameters = () => [];
CoreSettingsGeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-general',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./general.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./general.scss */ "./src/core/features/settings/pages/general/general.scss")).default]
    })
], CoreSettingsGeneralPage);



/***/ }),

/***/ "./src/core/features/settings/pages/index/index.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/settings/pages/index/index.ts ***!
  \*********************************************************/
/*! exports provided: CoreSettingsIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsIndexPage", function() { return CoreSettingsIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _features_settings_classes_settings_sections_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/settings/classes/settings-sections-source */ "./src/core/features/settings/classes/settings-sections-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
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
var CoreSettingsIndexPage_1;






let CoreSettingsIndexPage = CoreSettingsIndexPage_1 = class CoreSettingsIndexPage {
    constructor() {
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_5__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_settings_classes_settings_sections_source__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSectionsSource"], []);
        this.sections = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_3__["CoreListItemsManager"](source, CoreSettingsIndexPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sections.load();
            yield this.sections.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.sections.destroy();
    }
};
CoreSettingsIndexPage.ctorParameters = () => [];
CoreSettingsIndexPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_2__["CoreSplitViewComponent"],] }]
};
CoreSettingsIndexPage = CoreSettingsIndexPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-settings-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/index/index.html")).default,
    })
], CoreSettingsIndexPage);



/***/ }),

/***/ "./src/core/features/settings/pages/licenses/licenses.ts":
/*!***************************************************************!*\
  !*** ./src/core/features/settings/pages/licenses/licenses.ts ***!
  \***************************************************************/
/*! exports provided: CoreSettingsLicensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLicensesPage", function() { return CoreSettingsLicensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays the open source licenses information.
 */
let CoreSettingsLicensesPage = class CoreSettingsLicensesPage {
    constructor() {
        this.loaded = false;
        this.licenses = [];
        this.error = false;
        this.textFilter = '';
        this.allLicenses = [];
        this.appLicenseVersion = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname.indexOf('-') > 0
            ? 'main'
            : 'v' + _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname;
        this.licensesUrl = 'https://raw.githubusercontent.com/moodlehq/moodleapp/' + this.appLicenseVersion + '/licenses.json';
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const licenses = yield _singletons__WEBPACK_IMPORTED_MODULE_3__["Http"].get(this.licensesUrl).toPromise();
                this.allLicenses = Object.keys(licenses).map((name) => {
                    const license = licenses[name];
                    const nameSplit = name.lastIndexOf('@');
                    license.name = name.substring(0, nameSplit);
                    license.version = name.substring(nameSplit + 1);
                    if (Array.isArray(license.licenses)) {
                        license.licenses = license.licenses.join(', ');
                    }
                    if (license.repository) {
                        license.repository = license.repository.replace('git://', 'https://');
                        if (license.repository.indexOf('github.com') > 0) {
                            const version = license.name == 'moodlemobile' ? this.appLicenseVersion : license.version;
                            license.licenseUrl = license.repository + '/blob/' + version + '/' + license.licenseFile;
                        }
                    }
                    return license;
                });
                this.filterLicenses();
                this.error = false;
            }
            catch (_a) {
                this.error = true;
            }
            this.loaded = true;
        });
    }
    /**
     * Filter licenses using filter text.
     */
    filterLicenses() {
        const filter = this.textFilter.trim().toLowerCase();
        if (filter == '') {
            this.licenses = this.allLicenses;
            return;
        }
        this.licenses = this.allLicenses.filter((license) => license.name.toLowerCase().indexOf(filter) >= 0 ||
            license.version.toLowerCase().indexOf(filter) >= 0 ||
            typeof license.licenses == 'string' && license.licenses.toLowerCase().indexOf(filter) >= 0 ||
            license.repository && license.repository.toLowerCase().indexOf(filter) >= 0 ||
            license.publisher && license.publisher.toLowerCase().indexOf(filter) >= 0 ||
            license.url && license.url.toLowerCase().indexOf(filter) >= 0 ||
            license.email && license.email.toLowerCase().indexOf(filter) >= 0);
    }
    /**
     * Text filter changed.
     *
     * @param target Searchbar element.
     */
    filterChanged(target) {
        this.textFilter = target.value || '';
        this.filterLicenses();
    }
};
CoreSettingsLicensesPage.ctorParameters = () => [];
CoreSettingsLicensesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-licenses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./licenses.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/licenses/licenses.html")).default,
    })
], CoreSettingsLicensesPage);



/***/ }),

/***/ "./src/core/features/settings/pages/space-usage/space-usage.ts":
/*!*********************************************************************!*\
  !*** ./src/core/features/settings/pages/space-usage/space-usage.ts ***!
  \*********************************************************************/
/*! exports provided: CoreSettingsSpaceUsagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePage", function() { return CoreSettingsSpaceUsagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
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
 * Page that displays the space usage settings.
 */
let CoreSettingsSpaceUsagePage = class CoreSettingsSpaceUsagePage {
    constructor() {
        this.loaded = false;
        this.totalSpaceUsage = 0;
        this.accountsList = {
            sameSite: [],
            otherSites: [],
        };
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].SITE_UPDATED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a;
            const siteId = data.siteId;
            let siteEntry = siteId === ((_a = this.accountsList.currentSite) === null || _a === void 0 ? void 0 : _a.id)
                ? this.accountsList.currentSite
                : undefined;
            if (!siteEntry) {
                siteEntry = this.accountsList.sameSite.find((siteEntry) => siteEntry.id === siteId);
            }
            if (!siteEntry) {
                this.accountsList.otherSites.some((sites) => {
                    siteEntry = sites.find((siteEntry) => siteEntry.id === siteId);
                    return siteEntry;
                });
            }
            if (!siteEntry) {
                return;
            }
            const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSite(siteId);
            const siteInfo = site.getInfo();
            siteEntry.siteName = yield site.getSiteName();
            if (siteInfo) {
                siteEntry.siteUrl = siteInfo.siteurl;
                siteEntry.fullname = siteInfo.fullname;
            }
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.loadSiteData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Convenience function to load site data/usage and calculate the totals.
     *
     * @returns Resolved when done.
     */
    loadSiteData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Calculate total usage.
            let totalSize = 0;
            const sites = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSortedSites(), []);
            const sitesWithUsage = yield Promise.all(sites.map((site) => this.getSiteWithUsage(site)));
            let siteUrl = '';
            const currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId();
            if (currentSiteId) {
                const index = sitesWithUsage.findIndex((site) => site.id === currentSiteId);
                const siteWithUsage = sitesWithUsage.splice(index, 1)[0];
                this.accountsList.currentSite = siteWithUsage;
                totalSize += siteWithUsage.spaceUsage || 0;
                siteUrl = this.accountsList.currentSite.siteUrlWithoutProtocol;
            }
            const otherSites = {};
            // Get space usage.
            sitesWithUsage.forEach((siteWithUsage) => {
                totalSize += siteWithUsage.spaceUsage || 0;
                if (siteWithUsage.siteUrlWithoutProtocol === siteUrl) {
                    this.accountsList.sameSite.push(siteWithUsage);
                }
                else {
                    if (otherSites[siteWithUsage.siteUrlWithoutProtocol] === undefined) {
                        otherSites[siteWithUsage.siteUrlWithoutProtocol] = [];
                    }
                    otherSites[siteWithUsage.siteUrlWithoutProtocol].push(siteWithUsage);
                }
            });
            this.accountsList.otherSites = _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].objectToArray(otherSites);
            this.totalSpaceUsage = totalSize;
        });
    }
    /**
     * Get site with space usage.
     *
     * @param site Site to check.
     * @returns Site with usage.
     */
    getSiteWithUsage(site) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteInfo = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_5__["CoreSettingsHelper"].getSiteSpaceUsage(site.id);
            return Object.assign(site, {
                hasCacheEntries: siteInfo.cacheEntries > 0,
                spaceUsage: siteInfo.spaceUsage,
            });
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher event.
     */
    refreshData(refresher) {
        this.loadSiteData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    deleteSiteStorage(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newInfo = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_5__["CoreSettingsHelper"].deleteSiteStorage(siteData.siteName || '', siteData.id);
                this.totalSpaceUsage -= siteData.spaceUsage - newInfo.spaceUsage;
                siteData.spaceUsage = newInfo.spaceUsage;
                siteData.hasCacheEntries = newInfo.cacheEntries > 0;
            }
            catch (_a) {
                // Ignore cancelled confirmation modal.
            }
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.sitesObserver.off();
    }
};
CoreSettingsSpaceUsagePage.ctorParameters = () => [];
CoreSettingsSpaceUsagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-space-usage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-usage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html")).default,
    })
], CoreSettingsSpaceUsagePage);



/***/ }),

/***/ "./src/core/features/settings/pages/synchronization/synchronization.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/features/settings/pages/synchronization/synchronization.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSettingsSynchronizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPage", function() { return CoreSettingsSynchronizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the synchronization settings.
 */
let CoreSettingsSynchronizationPage = class CoreSettingsSynchronizationPage {
    constructor() {
        this.accountsList = {
            sameSite: [],
            otherSites: [],
            count: 0,
        };
        this.sitesLoaded = false;
        this.dataSaver = false;
        this.limitedConnection = false;
        this.isOnline = true;
        this.isDestroyed = false;
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a;
            const siteId = data.siteId;
            let siteEntry = siteId === ((_a = this.accountsList.currentSite) === null || _a === void 0 ? void 0 : _a.id)
                ? this.accountsList.currentSite
                : undefined;
            if (!siteEntry) {
                siteEntry = this.accountsList.sameSite.find((siteEntry) => siteEntry.id === siteId);
            }
            if (!siteEntry) {
                this.accountsList.otherSites.some((sites) => {
                    siteEntry = sites.find((siteEntry) => siteEntry.id === siteId);
                    return siteEntry;
                });
            }
            if (!siteEntry) {
                return;
            }
            const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getSite(siteId);
            const siteInfo = site.getInfo();
            siteEntry.siteName = yield site.getSiteName();
            if (siteInfo) {
                siteEntry.siteUrl = siteInfo.siteurl;
                siteEntry.fullname = siteInfo.fullname;
            }
        }));
        this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
        this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
        this.networkObserver = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_8__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
                this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
            try {
                this.accountsList = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].getAccountsList(currentSiteId);
            }
            catch (_a) {
                // Ignore errors.
            }
            this.sitesLoaded = true;
            this.dataSaver = yield _services_config__WEBPACK_IMPORTED_MODULE_6__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, true);
        });
    }
    /**
     * Called when sync only on wifi setting is enabled or disabled.
     */
    syncOnlyOnWifiChanged() {
        _services_config__WEBPACK_IMPORTED_MODULE_6__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, this.dataSaver ? 1 : 0);
    }
    /**
     * Synchronizes a site.
     *
     * @param siteId Site ID.
     */
    synchronize(siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Using syncOnlyOnWifi false to force manual sync.
            try {
                yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].synchronizeSite(false, siteId);
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.settings.sitesyncfailed', true);
            }
        });
    }
    /**
     * Changes site.
     *
     * @param siteId Site ID.
     */
    login(siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // This navigation will logout and navigate to the site home.
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSiteHome({ preferCurrentTab: false, siteId });
        });
    }
    /**
     * Returns true if site is beeing synchronized.
     *
     * @param siteId Site ID.
     * @returns True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing(siteId) {
        return !!_features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].getSiteSyncPromise(siteId);
    }
    /**
     * Show information about sync actions.
     */
    showInfo() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.settings.synchronizenowhelp'));
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.isDestroyed = true;
        this.sitesObserver.off();
        this.networkObserver.unsubscribe();
    }
};
CoreSettingsSynchronizationPage.ctorParameters = () => [];
CoreSettingsSynchronizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-synchronization',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./synchronization.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../login/sitelist.scss */ "./src/core/features/login/sitelist.scss")).default]
    })
], CoreSettingsSynchronizationPage);



/***/ }),

/***/ "./src/core/features/settings/settings-lazy.module.ts":
/*!************************************************************!*\
  !*** ./src/core/features/settings/settings-lazy.module.ts ***!
  \************************************************************/
/*! exports provided: CoreSettingsLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsLazyModule", function() { return CoreSettingsLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/index */ "./src/core/features/settings/pages/index/index.ts");
/* harmony import */ var _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/sharedfiles/sharedfiles.module */ "./src/core/features/sharedfiles/sharedfiles.module.ts");
/* harmony import */ var _features_settings_pages_synchronization_synchronization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/settings/pages/synchronization/synchronization */ "./src/core/features/settings/pages/synchronization/synchronization.ts");
/* harmony import */ var _features_settings_pages_general_general__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/settings/pages/general/general */ "./src/core/features/settings/pages/general/general.ts");
/* harmony import */ var _features_settings_pages_space_usage_space_usage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/settings/pages/space-usage/space-usage */ "./src/core/features/settings/pages/space-usage/space-usage.ts");
/* harmony import */ var _features_settings_pages_about_about__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/settings/pages/about/about */ "./src/core/features/settings/pages/about/about.ts");
/* harmony import */ var _features_settings_pages_licenses_licenses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/settings/pages/licenses/licenses */ "./src/core/features/settings/pages/licenses/licenses.ts");
/* harmony import */ var _features_settings_pages_deviceinfo_deviceinfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/settings/pages/deviceinfo/deviceinfo */ "./src/core/features/settings/pages/deviceinfo/deviceinfo.ts");
/* harmony import */ var _features_settings_pages_dev_dev__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/settings/pages/dev/dev */ "./src/core/features/settings/pages/dev/dev.ts");
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















const sectionRoutes = [
    {
        path: 'general',
        component: _features_settings_pages_general_general__WEBPACK_IMPORTED_MODULE_9__["CoreSettingsGeneralPage"],
    },
    {
        path: 'spaceusage',
        component: _features_settings_pages_space_usage_space_usage__WEBPACK_IMPORTED_MODULE_10__["CoreSettingsSpaceUsagePage"],
    },
    {
        path: 'sync',
        component: _features_settings_pages_synchronization_synchronization__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsSynchronizationPage"],
    },
    {
        path: _features_sharedfiles_sharedfiles_module__WEBPACK_IMPORTED_MODULE_7__["SHAREDFILES_PAGE_NAME"],
        loadChildren: () => __webpack_require__.e(/*! import() | features-sharedfiles-sharedfiles-lazy-module */ "sharedfiles-lazy-module").then(__webpack_require__.bind(null, /*! @features/sharedfiles/sharedfiles-lazy.module */ "./src/core/features/sharedfiles/sharedfiles-lazy.module.ts")).then(m => m.CoreSharedFilesLazyModule),
    },
    {
        path: 'about',
        component: _features_settings_pages_about_about__WEBPACK_IMPORTED_MODULE_11__["CoreSettingsAboutPage"],
    },
];
const mobileRoutes = [
    {
        path: '',
        component: _pages_index__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsIndexPage"],
    },
    ...sectionRoutes,
];
const tabletRoutes = [
    {
        path: '',
        component: _pages_index__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsIndexPage"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'general',
            },
            ...sectionRoutes,
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_5__["CoreScreen"].isTablet),
    {
        path: 'about/deviceinfo',
        component: _features_settings_pages_deviceinfo_deviceinfo__WEBPACK_IMPORTED_MODULE_13__["CoreSettingsDeviceInfoPage"],
    },
    {
        path: 'about/deviceinfo/dev',
        component: _features_settings_pages_dev_dev__WEBPACK_IMPORTED_MODULE_14__["CoreSettingsDevPage"],
    },
    {
        path: 'about/licenses',
        component: _features_settings_pages_licenses_licenses__WEBPACK_IMPORTED_MODULE_12__["CoreSettingsLicensesPage"],
    },
];
let CoreSettingsLazyModule = class CoreSettingsLazyModule {
};
CoreSettingsLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
        ],
        declarations: [
            _pages_index__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsIndexPage"],
            _features_settings_pages_synchronization_synchronization__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsSynchronizationPage"],
            _features_settings_pages_general_general__WEBPACK_IMPORTED_MODULE_9__["CoreSettingsGeneralPage"],
            _features_settings_pages_space_usage_space_usage__WEBPACK_IMPORTED_MODULE_10__["CoreSettingsSpaceUsagePage"],
            _features_settings_pages_about_about__WEBPACK_IMPORTED_MODULE_11__["CoreSettingsAboutPage"],
            _features_settings_pages_licenses_licenses__WEBPACK_IMPORTED_MODULE_12__["CoreSettingsLicensesPage"],
            _features_settings_pages_deviceinfo_deviceinfo__WEBPACK_IMPORTED_MODULE_13__["CoreSettingsDeviceInfoPage"],
            _features_settings_pages_dev_dev__WEBPACK_IMPORTED_MODULE_14__["CoreSettingsDevPage"],
        ],
    })
], CoreSettingsLazyModule);



/***/ })

}]);
//# sourceMappingURL=settings-lazy-module.js.map