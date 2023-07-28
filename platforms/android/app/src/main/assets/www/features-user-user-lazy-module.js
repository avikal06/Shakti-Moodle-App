(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-user-user-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.user.profile' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!userLoaded\" (ionRefresh)=\"refreshUser($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"userLoaded\">\r\n        <ion-list *ngIf=\"user\">\r\n            <ion-item class=\"ion-text-center core-user-profile-maininfo ion-text-wrap\" lines=\"full\">\r\n                <core-user-avatar [user]=\"user\" [userId]=\"user.id\" [linkProfile]=\"false\" [checkOnline]=\"!canChangeProfilePicture\">\r\n                    <ion-button class=\"edit-avatar\" *ngIf=\"canChangeProfilePicture\" (click)=\"changeProfilePicture()\"\r\n                        [attr.aria-label]=\"'core.user.newpicture' | translate\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </core-user-avatar>\r\n                <ion-label>\r\n                    <h2>{{ user.fullname }}</h2>\r\n                    <p *ngIf=\"user.address\">\r\n                        <ion-icon name=\"fas-location-dot\" [attr.aria-hidden]=\"true\"></ion-icon> {{ user.address }}\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item-group *ngIf=\"hasContact\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.contact' | translate}}</p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.email\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.email' | translate }}</p>\r\n                        <p><a class=\"core-anchor\" href=\"mailto:{{user.email}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\r\n                                {{ user.email }}\r\n                            </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone1\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.phone1' | translate}}</p>\r\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone1}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\r\n                                {{ user.phone1 }}\r\n                            </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone2\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.phone2' | translate}}</p>\r\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone2}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\r\n                                {{ user.phone2 }}\r\n                            </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.city\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.city' | translate}}</p>\r\n                        <p>{{ user.city }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.country\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.country' | translate}}</p>\r\n                        <p>{{ user.country }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"displayTimezone && user.timezone\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.timezone' | translate}}</p>\r\n                        <p>{{ user.timezone }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"canShowDepartment\">\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"user.idnumber\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'core.user.idnumber' | translate }}</p>\r\n                            <p>{{ user.idnumber }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"user.institution\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'core.user.institution' | translate }}</p>\r\n                            <p>{{ user.institution }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"user.department\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'core.user.department' | translate }}</p>\r\n                            <p>{{ user.department }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ion-item-group>\r\n            <ion-item-group *ngIf=\"hasDetails\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.userdetails' | translate}}</p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.url\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.webpage' | translate}}</p>\r\n                        <p><a class=\"core-anchor\" href=\"{{user.url}}\" core-link>\r\n                                {{ user.url }}\r\n                            </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap core-user-profile-interests\" *ngIf=\"interests\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.interests' | translate}}</p>\r\n                        <ion-badge *ngFor=\"let interest of interests\" role=\"link\" (click)=\"openInterest(interest)\">\r\n                            {{ interest }}\r\n                        </ion-badge>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <core-user-profile-field *ngFor=\"let field of user.customfields\" [field]=\"field\" contextLevel=\"course\"\r\n                    [contextInstanceId]=\"courseId\" [courseId]=\"courseId\">\r\n                </core-user-profile-field>\r\n            </ion-item-group>\r\n            <ion-item-group *ngIf=\"user.description\">\r\n                <ion-item-divider>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.user.description' | translate}}</p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p>\r\n                            <core-format-text [text]=\"user.description\" contextLevel=\"user\" [contextInstanceId]=\"user.id\">\r\n                            </core-format-text>\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-item-group>\r\n        </ion-list>\r\n\r\n        <core-empty-box *ngIf=\"!user || (!hasContact && !hasDetails && !user.description)\" icon=\"fas-user\"\r\n            [message]=\" 'core.user.detailsnotavailable' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/user/pages/about/about.scss":
/*!*******************************************************!*\
  !*** ./src/core/features/user/pages/about/about.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-user-profile-maininfo::part(native) {\n  flex-direction: column;\n}\n:host ::ng-deep core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--core-large-avatar-size);\n  height: calc(var(--core-avatar-size) + 16px);\n}\n:host ::ng-deep core-user-avatar img {\n  margin: 8px auto;\n}\n:host ::ng-deep core-user-avatar .contact-status {\n  width: 24px !important;\n  height: 24px !important;\n  right: calc(50% - 12px - var(--core-avatar-size) / 2) !important;\n}\n:host ::ng-deep core-user-avatar .edit-avatar {\n  position: absolute;\n  right: calc(50% - 15px - var(--core-avatar-size) / 2);\n  bottom: -12px;\n}\n:host-context([dir=rtl]) :host ::ng-deep core-user-avatar .edit-avatar {\n  left: 0;\n  right: unset;\n}\n:host ::ng-deep core-user-avatar .edit-avatar::part(native) {\n  border-radius: 50%;\n  background: var(--ion-item-background);\n}\n:host .core-user-profile-interests ion-badge {\n  cursor: pointer;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n:host-context([dir=rtl]) ::ng-deep core-user-avatar .edit-avatar {\n  left: -24px;\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3VzZXIvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHNCQUFBO0FBRFI7QUFJUTtFQUNJLGNBQUE7RUFDQSxpREFBQTtFQUNBLDRDQUFBO0FBRlo7QUFJWTtFQUNJLGdCQUFBO0FBRmhCO0FBS1k7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0VBQUE7QUFIaEI7QUFNWTtFQUNJLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0FBSmhCO0FBTWdCO0VBQ0ksT0FBQTtFQUNBLFlBQUE7QUFKcEI7QUFNZ0I7RUFDSSxrQkFBQTtFQUNBLHNDQUFBO0FBSnBCO0FBV1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVRaO0FBZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVpKIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL3VzZXIvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29yZS11c2VyLXByb2ZpbGUtbWFpbmluZm86OnBhcnQobmF0aXZlKSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCB7XHJcbiAgICAgICAgY29yZS11c2VyLWF2YXRhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWNvcmUtbGFyZ2UtYXZhdGFyLXNpemUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tY29yZS1hdmF0YXItc2l6ZSkgKyAxNnB4KTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGFjdC1zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGNhbGMoNTAlIC0gMTJweCAtIHZhcigtLWNvcmUtYXZhdGFyLXNpemUpIC8gMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVkaXQtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDE1cHggLSB2YXIoLS1jb3JlLWF2YXRhci1zaXplKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICA6aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pICYge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6cGFydChuYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcmUtdXNlci1wcm9maWxlLWludGVyZXN0cyB7XHJcbiAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pIDo6bmctZGVlcCBjb3JlLXVzZXItYXZhdGFyIC5lZGl0LWF2YXRhciB7XHJcbiAgICBsZWZ0OiAtMjRweDtcclxuICAgIHJpZ2h0OiB1bnNldDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/core/features/user/pages/about/about.ts":
/*!*****************************************************!*\
  !*** ./src/core/features/user/pages/about/about.ts ***!
  \*****************************************************/
/*! exports provided: CoreUserAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPage", function() { return CoreUserAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user-helper */ "./src/core/features/user/services/user-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader-helper */ "./src/core/features/fileuploader/services/fileuploader-helper.ts");
/* harmony import */ var _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/mimetype */ "./src/core/services/utils/mimetype.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays info about a user.
 */
let CoreUserAboutPage = class CoreUserAboutPage {
    constructor() {
        this.userLoaded = false;
        this.hasContact = false;
        this.hasDetails = false;
        this.canChangeProfilePicture = false;
        this.displayTimezone = false;
        this.canShowDepartment = false;
        try {
            this.site = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getRequiredCurrentSite();
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].back();
            return;
        }
        this.obsProfileRefreshed = _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].on(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_REFRESHED"], (data) => {
            if (!this.user || !data.user) {
                return;
            }
            this.user.email = data.user.email;
            this.user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_7__["CoreUserHelper"].formatAddress('', data.user.city, data.user.country);
        }, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('userId') || 0;
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('courseId') || 0;
            this.canShowDepartment = this.userId != this.site.getUserId();
            // Allow to change the profile image only in the app profile page.
            this.canChangeProfilePicture =
                !this.courseId &&
                    this.userId == this.site.getUserId() &&
                    this.site.canUploadFiles() &&
                    !_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["CoreUser"].isUpdatePictureDisabledInSite(this.site);
            this.fetchUser().finally(() => {
                this.userLoaded = true;
            });
        });
    }
    /**
     * Fetches the user data.
     *
     * @returns Promise resolved when done.
     */
    fetchUser() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["CoreUser"].getProfile(this.userId, this.courseId);
                this.interests = user.interests ?
                    user.interests.split(',').map(interest => interest.trim()) :
                    undefined;
                this.hasContact = !!(user.email || user.phone1 || user.phone2 || user.city || user.country || user.address);
                this.hasDetails = !!(user.url || user.interests || (user.customfields && user.customfields.length > 0));
                this.user = user;
                this.title = user.fullname;
                this.user.address = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_7__["CoreUserHelper"].formatAddress('', user.city, user.country);
                const serverTimezone = (_a = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.getStoredConfig('timezone');
                this.displayTimezone = !!serverTimezone;
                if (this.displayTimezone && this.user.timezone === _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_SERVER_TIMEZONE"]) {
                    this.user.timezone = serverTimezone;
                }
                yield this.checkUserImageUpdated();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.user.errorloaduser', true);
            }
        });
    }
    /**
     * Check if current user image has changed.
     *
     * @returns Promise resolved when done.
     */
    checkUserImageUpdated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.site || !this.site.getInfo() || !this.user) {
                return;
            }
            if (this.userId != this.site.getUserId() || !this.isUserAvatarDirty()) {
                // Not current user or hasn't changed.
                return;
            }
            // The current user image received is different than the one stored in site info. Assume the image was updated.
            // Update the site info to get the right avatar in there.
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].updateSiteInfo(this.site.getId());
            }
            catch (_a) {
                // Cannot update site info. Assume the profile image is the right one.
                _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_PICTURE_UPDATED"], {
                    userId: this.userId,
                    picture: this.user.profileimageurl,
                }, this.site.getId());
            }
            if (this.isUserAvatarDirty()) {
                // The image is still different, this means that the good one is the one in site info.
                yield this.refreshUser();
            }
            else {
                // Now they're the same, send event to use the right avatar in the rest of the app.
                _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_PICTURE_UPDATED"], {
                    userId: this.userId,
                    picture: this.user.profileimageurl,
                }, this.site.getId());
            }
        });
    }
    /**
     * Opens dialog to change profile picture.
     */
    changeProfilePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const maxSize = -1;
            const title = _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.user.newpicture');
            const mimetypes = _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_10__["CoreMimetypeUtils"].getGroupMimeInfo('image', 'mimetypes');
            let modal;
            try {
                const result = yield _features_fileuploader_services_fileuploader_helper__WEBPACK_IMPORTED_MODULE_9__["CoreFileUploaderHelper"].selectAndUploadFile(maxSize, title, mimetypes);
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
                const profileImageURL = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["CoreUser"].changeProfilePicture(result.itemid, this.userId, this.site.getId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_PICTURE_UPDATED"], {
                    userId: this.userId,
                    picture: profileImageURL,
                }, this.site.getId());
                _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].updateSiteInfo(this.site.getId());
                this.refreshUser();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Refresh the user data.
     *
     * @param event Event.
     * @returns Promise resolved when done.
     */
    refreshUser(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["CoreUser"].invalidateUserCache(this.userId));
            yield this.fetchUser();
            event === null || event === void 0 ? void 0 : event.complete();
            if (this.user) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_6__["USER_PROFILE_REFRESHED"], {
                    courseId: this.courseId,
                    userId: this.userId,
                    user: this.user,
                }, this.site.getId());
            }
        });
    }
    /**
     * Check whether the user avatar is not up to date with site info.
     *
     * @returns Whether the user avatar differs from site info cache.
     */
    isUserAvatarDirty() {
        var _a;
        if (!this.user || !this.site) {
            return false;
        }
        const courseAvatarUrl = this.normalizeAvatarUrl(this.user.profileimageurl);
        const siteAvatarUrl = this.normalizeAvatarUrl((_a = this.site.getInfo()) === null || _a === void 0 ? void 0 : _a.userpictureurl);
        return courseAvatarUrl !== siteAvatarUrl;
    }
    /**
     * Normalize an avatar url regardless of theme.
     *
     * Given that the default image is the only one that can be changed per theme, any other url will stay the same. Note that
     * the values returned by this function may not be valid urls, given that they are intended for string comparison.
     *
     * @param avatarUrl Avatar url.
     * @returns Normalized avatar string (may not be a valid url).
     */
    normalizeAvatarUrl(avatarUrl) {
        var _a;
        if (!avatarUrl) {
            return 'undefined';
        }
        if (avatarUrl.startsWith(`${(_a = this.site) === null || _a === void 0 ? void 0 : _a.siteUrl}/theme/image.php`)) {
            return 'default';
        }
        return avatarUrl;
    }
    /**
     * Open a user interest.
     *
     * @param interest Interest name.
     */
    openInterest(interest) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].navigateToSitePath('/tag/index', { params: {
                tagName: interest,
            } });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.obsProfileRefreshed) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreUserAboutPage.ctorParameters = () => [];
CoreUserAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.scss */ "./src/core/features/user/pages/about/about.scss")).default]
    })
], CoreUserAboutPage);



/***/ }),

/***/ "./src/core/features/user/user-lazy.module.ts":
/*!****************************************************!*\
  !*** ./src/core/features/user/user-lazy.module.ts ***!
  \****************************************************/
/*! exports provided: CoreUserLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserLazyModule", function() { return CoreUserLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/user/components/components.module */ "./src/core/features/user/components/components.module.ts");
/* harmony import */ var _features_user_pages_about_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/user/pages/about/about */ "./src/core/features/user/pages/about/about.ts");
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
        redirectTo: 'profile',
        pathMatch: 'full',
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | user-profile-lazy-module */ "user-profile-lazy-module").then(__webpack_require__.bind(null, /*! ./user-profile-lazy.module */ "./src/core/features/user/user-profile-lazy.module.ts")).then(m => m.CoreUserProfileLazyModule),
    },
    {
        path: 'about',
        component: _features_user_pages_about_about__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
    },
];
let CoreUserLazyModule = class CoreUserLazyModule {
};
CoreUserLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreUserComponentsModule"],
        ],
        declarations: [
            _features_user_pages_about_about__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
        ],
    })
], CoreUserLazyModule);



/***/ })

}]);
//# sourceMappingURL=features-user-user-lazy-module.js.map