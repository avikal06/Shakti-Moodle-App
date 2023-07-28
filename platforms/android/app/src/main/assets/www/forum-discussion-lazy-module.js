(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forum-discussion-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"startingPost\">\r\n                <core-format-text contextLevel=\"module\" [text]=\"startingPost.subject\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The context menu will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<core-navbar-buttons slot=\"end\">\r\n    <core-context-menu>\r\n        <core-context-menu-item *ngIf=\"discussionLoaded && !postHasOffline && isOnline\" [priority]=\"650\"\r\n            [content]=\"'addon.mod_forum.refreshposts' | translate\" [iconAction]=\"refreshIcon\" [closeOnClick]=\"false\"\r\n            (action)=\"doRefresh(null, $event)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item *ngIf=\"discussionLoaded && isMobile && postHasOffline && isOnline\" [priority]=\"550\"\r\n            [content]=\"'core.settings.synchronizenow' | translate\" [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"\r\n            (action)=\"doRefresh(null, $event, true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"sort == 'flat-oldest'\" [priority]=\"500\"\r\n            [content]=\"'addon.mod_forum.modeflatoldestfirst' | translate\" iconAction=\"fas-arrow-down\" (action)=\"changeSort('flat-oldest')\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"sort == 'flat-newest'\" [priority]=\"450\"\r\n            [content]=\"'addon.mod_forum.modeflatnewestfirst' | translate\" iconAction=\"fas-arrow-up\" (action)=\"changeSort('flat-newest')\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"sort == 'nested'\" [priority]=\"400\" [content]=\"'addon.mod_forum.modenested' | translate\"\r\n            iconAction=\"fas-right-left\" (action)=\"changeSort('nested')\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || discussion.locked\" [priority]=\"300\"\r\n            [content]=\"'addon.mod_forum.lockdiscussion' | translate\" iconAction=\"fas-lock\" (action)=\"setLockState(true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || !discussion.locked\" [priority]=\"300\"\r\n            [content]=\"'addon.mod_forum.unlockdiscussion' | translate\" iconAction=\"fas-unlock\" (action)=\"setLockState(false)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || discussion.pinned\" [priority]=\"250\"\r\n            [content]=\"'addon.mod_forum.pindiscussion' | translate\" iconAction=\"fas-map-pin\" (action)=\"setPinState(true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || !discussion.pinned\" [priority]=\"250\"\r\n            [content]=\"'addon.mod_forum.unpindiscussion' | translate\" [iconSlash]=\"true\" iconAction=\"fas-map-pin\"\r\n            (action)=\"setPinState(false)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || discussion.starred\" [priority]=\"200\"\r\n            [content]=\"'addon.mod_forum.addtofavourites' | translate\" iconAction=\"fas-star\" (action)=\"toggleFavouriteState(true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || !discussion.starred\" [priority]=\"200\"\r\n            [content]=\"'addon.mod_forum.removefromfavourites' | translate\" iconAction=\"fas-star\" [iconSlash]=\"true\"\r\n            (action)=\"toggleFavouriteState(false)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!externalUrl\" [priority]=\"100\" [content]=\"'core.openinbrowser' | translate\" [href]=\"externalUrl\"\r\n            iconAction=\"fas-up-right-from-square\" [showBrowserWarning]=\"false\"></core-context-menu-item>\r\n    </core-context-menu>\r\n</core-navbar-buttons>\r\n<ion-content [core-swipe-navigation]=\"discussions\" class=\"limited-width\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!discussionLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"discussionLoaded\">\r\n        <!-- Discussion replies found to be synchronized -->\r\n        <ion-card class=\"core-warning-card\" *ngIf=\"postHasOffline || hasOfflineRatings\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: discussionStr} }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <!-- Cut-off date or due date message -->\r\n        <ion-card class=\"core-info-card\" *ngIf=\"availabilityMessage\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-circle-info\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ availabilityMessage }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"core-info-card\" *ngIf=\"discussion && discussion.locked\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-lock\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ 'addon.mod_forum.discussionlocked' | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <!-- Q&A message. -->\r\n        <ion-card class=\"core-info-card\" *ngIf=\"showQAMessage\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-circle-info\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ 'addon.mod_forum.qandanotify' | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <div *ngIf=\"startingPost\" class=\"ion-margin-bottom\">\r\n            <addon-mod-forum-post [post]=\"startingPost\" [discussion]=\"discussion\" [courseId]=\"courseId\" [highlight]=\"true\"\r\n                [discussionId]=\"discussionId\" [component]=\"component\" [componentId]=\"cmId\" [formData]=\"formData\"\r\n                [originalData]=\"originalData\" [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\r\n                [leavingPage]=\"leavingPage\" (onPostChange)=\"postListChanged()\">\r\n            </addon-mod-forum-post>\r\n        </div>\r\n\r\n        <ion-card *ngIf=\"sort != 'nested' && posts.length\">\r\n            <ng-container *ngFor=\"let post of posts; first as first\">\r\n                <core-spacer *ngIf=\"!first\"></core-spacer>\r\n                <addon-mod-forum-post [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\" [component]=\"component\"\r\n                    [componentId]=\"cmId\" [formData]=\"formData\" [originalData]=\"originalData\" [parentSubject]=\"postSubjects[post.parentid]\"\r\n                    [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\r\n                    [leavingPage]=\"leavingPage\" (onPostChange)=\"postListChanged()\">\r\n                </addon-mod-forum-post>\r\n            </ng-container>\r\n        </ion-card>\r\n\r\n        <ng-container *ngIf=\"sort == 'nested' && posts.length\">\r\n            <ng-container *ngFor=\"let post of posts\">\r\n                <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: post}\"></ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #nestedPosts let-post=\"post\">\r\n            <ion-card>\r\n                <addon-mod-forum-post [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\" [component]=\"component\"\r\n                    [componentId]=\"cmId\" [formData]=\"formData\" [originalData]=\"originalData\" [parentSubject]=\"postSubjects[post.parentid]\"\r\n                    [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\r\n                    [leavingPage]=\"leavingPage\" (onPostChange)=\"postListChanged()\">\r\n                </addon-mod-forum-post>\r\n            </ion-card>\r\n            <div class=\"ion-padding-start\" *ngIf=\"post.children && post.children.length && post.children[0].subject\">\r\n                <ng-container *ngFor=\"let child of post.children\">\r\n                    <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: child}\"></ng-container>\r\n                </ng-container>\r\n            </div>\r\n        </ng-template>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/forum/forum-discussion-lazy.module.ts":
/*!**************************************************************!*\
  !*** ./src/addons/mod/forum/forum-discussion-lazy.module.ts ***!
  \**************************************************************/
/*! exports provided: AddonForumDiscussionLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonForumDiscussionLazyModule", function() { return AddonForumDiscussionLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/mod/forum/components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _addons_mod_forum_pages_discussion_discussion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/mod/forum/pages/discussion/discussion */ "./src/addons/mod/forum/pages/discussion/discussion.ts");
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
        component: _addons_mod_forum_pages_discussion_discussion__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    }];
let AddonForumDiscussionLazyModule = class AddonForumDiscussionLazyModule {
};
AddonForumDiscussionLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__["AddonModForumComponentsModule"],
        ],
        declarations: [
            _addons_mod_forum_pages_discussion_discussion__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        ],
    })
], AddonForumDiscussionLazyModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.scss":
/*!***************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-forum-reply-button .label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksU0FBQTtBQURSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAgIC5hZGRvbi1mb3J1bS1yZXBseS1idXR0b24gLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.ts ***!
  \*************************************************************/
/*! exports provided: AddonModForumDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPage", function() { return AddonModForumDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _features_rating_services_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/rating/services/rating */ "./src/core/features/rating/services/rating.ts");
/* harmony import */ var _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/rating/services/rating-offline */ "./src/core/features/rating/services/rating-offline.ts");
/* harmony import */ var _features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/rating/services/rating-sync */ "./src/core/features/rating/services/rating-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_array__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/array */ "./src/core/singletons/array.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../classes/forum-discussions-source */ "./src/addons/mod/forum/classes/forum-discussions-source.ts");
/* harmony import */ var _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../classes/forum-discussions-swipe-manager */ "./src/addons/mod/forum/classes/forum-discussions-swipe-manager.ts");
/* harmony import */ var _services_forum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/forum */ "./src/addons/mod/forum/services/forum.ts");
/* harmony import */ var _services_forum_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/forum-helper */ "./src/addons/mod/forum/services/forum-helper.ts");
/* harmony import */ var _services_forum_offline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../services/forum-offline */ "./src/addons/mod/forum/services/forum-offline.ts");
/* harmony import */ var _services_forum_sync__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../services/forum-sync */ "./src/addons/mod/forum/services/forum-sync.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
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
 * Page that displays a forum discussion.
 */
let AddonModForumDiscussionPage = class AddonModForumDiscussionPage {
    constructor(splitView, elementRef, route) {
        this.splitView = splitView;
        this.elementRef = elementRef;
        this.route = route;
        this.forum = {};
        this.accessInfo = {};
        this.posts = [];
        this.discussionLoaded = false;
        this.sort = 'nested';
        this.formData = {
            replyingTo: 0,
            isEditing: false,
            subject: '',
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.originalData = {
            subject: null,
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.discussionStr = '';
        this.component = _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].COMPONENT;
        this.canPin = false;
        this.availabilityMessage = null;
        this.showQAMessage = false;
        this.leavingPage = false;
        this.hasOfflineRatings = false;
    }
    get isMobile() {
        return _services_screen__WEBPACK_IMPORTED_MODULE_14__["CoreScreen"].isMobile;
    }
    ngOnInit() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const routeData = this.route.snapshot.data;
                this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('courseId');
                this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('cmId');
                this.forumId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('forumId');
                this.discussion = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteParam('discussion');
                this.discussionId = this.discussion
                    ? this.discussion.discussion
                    : _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRequiredRouteNumberParam('discussionId');
                this.trackPosts = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteBooleanParam('trackPosts') || false;
                this.postId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('postId');
                this.parent = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('parent');
                if (this.courseId && this.cmId && ((_a = routeData.swipeEnabled) !== null && _a !== void 0 ? _a : true)) {
                    this.discussions = new AddonModForumDiscussionDiscussionsSwipeManager(_classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_4__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_classes_forum_discussions_source__WEBPACK_IMPORTED_MODULE_22__["AddonModForumDiscussionsSource"], [this.courseId, this.cmId, (_b = routeData.discussionsPathPrefix) !== null && _b !== void 0 ? _b : '']));
                    yield this.discussions.start();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
                this.goBack();
                return;
            }
            this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].isOnline();
            this.externalUrl = (_c = _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSite()) === null || _c === void 0 ? void 0 : _c.createSiteUrl('/mod/forum/discuss.php', { d: this.discussionId.toString() });
            this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                _singletons__WEBPACK_IMPORTED_MODULE_18__["NgZone"].run(() => {
                    this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_12__["CoreNetwork"].isOnline();
                });
            });
            this.discussionStr = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.mod_forum.discussion');
        });
    }
    /**
     * View loaded.
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sort = this.parent
                ? 'nested' // Force nested order.
                : yield this.getUserSort();
            yield this.fetchPosts(true, false, true);
            const scrollTo = this.postId || this.parent;
            if (scrollTo) {
                // Scroll to the post.
                _singletons_dom__WEBPACK_IMPORTED_MODULE_20__["CoreDom"].scrollToElement(this.elementRef.nativeElement, '#addon-mod_forum-post-' + scrollTo);
            }
        });
    }
    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.syncObserver) {
                // Already setup.
                return;
            }
            // The discussion object was not passed as parameter.
            if (!this.discussion) {
                yield this.loadDiscussion(this.discussionId, this.forumId, this.cmId);
            }
            const discussion = this.discussion;
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSyncProvider"].AUTO_SYNCED, data => {
                if (data.forumId == this.forumId && this.discussionId == data.discussionId
                    && data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
            // Refresh data if this forum discussion is synchronized from discussions list.
            this.syncManualObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSyncProvider"].MANUAL_SYNCED, data => {
                if (data.source != 'discussion' && data.forumId == this.forumId &&
                    data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
            // Invalidate discussion list if it was not read.
            if (this.forumId && discussion && discussion.numunread > 0) {
                _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateDiscussionsList(this.forumId);
            }
            // Listen for offline ratings saved and synced.
            this.ratingOfflineObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_features_rating_services_rating__WEBPACK_IMPORTED_MODULE_7__["CoreRatingProvider"].RATING_SAVED_EVENT, (data) => {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = true;
                }
            });
            this.ratingSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_9__["CoreRatingSyncProvider"].SYNCED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = false;
                }
            }));
            this.changeDiscObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].on(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data => {
                if (discussion && this.forumId && (this.forumId === data.forumId || data.cmId === this.cmId)) {
                    _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateDiscussionsList(this.forumId).finally(() => {
                        var _a;
                        if (data.locked !== undefined) {
                            discussion.locked = data.locked;
                        }
                        if (data.pinned !== undefined) {
                            discussion.pinned = data.pinned;
                        }
                        if (data.starred !== undefined) {
                            discussion.starred = data.starred;
                        }
                        if (data.deleted !== undefined && data.deleted) {
                            if (!((_a = data.post) === null || _a === void 0 ? void 0 : _a.parentid)) {
                                this.goBack();
                            }
                            else {
                                this.discussionLoaded = false;
                                this.refreshPosts();
                            }
                        }
                    });
                }
            });
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @returns Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].hasPostDataChanged(this.formData, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_6__["CoreFileUploader"].clearTmpFiles(this.formData.files);
            this.leavingPage = true;
            return true;
        });
    }
    /**
     * Helper function to go back.
     */
    goBack() {
        var _a;
        if (this.leavingPage) {
            return;
        }
        if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigate('../');
        }
        else {
            _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].back();
        }
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
        this.ratingOfflineObserver && this.ratingOfflineObserver.off();
        this.ratingSyncObserver && this.ratingSyncObserver.off();
        this.changeDiscObserver && this.changeDiscObserver.off();
        delete this.syncObserver;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
        this.discussions && this.discussions.destroy();
    }
    /**
     * Get sort type configured by the current user.
     *
     * @returns Promise resolved with the sort type.
     */
    getUserSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const value = yield _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getRequiredCurrentSite().getLocalSiteConfig('AddonModForumDiscussionSort');
                return value;
            }
            catch (error) {
                try {
                    const value = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_10__["CoreUser"].getUserPreference('forum_displaymode');
                    switch (Number(value)) {
                        case 1:
                            return 'flat-oldest';
                        case -1:
                            return 'flat-newest';
                        case 3:
                            return 'nested';
                        case 2: // Threaded not implemented.
                        default:
                        // Not set, use default sort.
                        // @TODO add fallback to $CFG->forum_displaymode.
                    }
                }
                catch (_a) {
                    // Ignore errors.
                }
            }
            return 'flat-oldest';
        });
    }
    /**
     * Convenience function to get the forum.
     *
     * @returns Promise resolved with the forum.
     */
    fetchForum() {
        if (this.courseId && this.cmId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].getForum(this.courseId, this.cmId);
        }
        if (this.courseId && this.forumId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].getForumById(this.courseId, this.forumId);
        }
        throw new Error('Cannot get the forum');
    }
    /**
     * Convenience function to get the posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @param forceMarkAsRead Whether to mark all posts as read.
     * @returns Promise resolved when done.
     */
    fetchPosts(sync, showErrors, forceMarkAsRead) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onlinePosts = [];
            const offlineReplies = [];
            let hasUnreadPosts = false;
            try {
                if (sync) {
                    // Try to synchronize the forum.
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].ignoreErrors(this.syncDiscussion(!!showErrors));
                }
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].getDiscussionPosts(this.discussionId, { cmId: this.cmId });
                const replies = yield _services_forum_offline__WEBPACK_IMPORTED_MODULE_26__["AddonModForumOffline"].getDiscussionReplies(this.discussionId);
                this.ratingInfo = response.ratinginfo;
                onlinePosts = response.posts;
                this.courseId = response.courseid || this.courseId;
                this.forumId = response.forumid || this.forumId;
                // Check if there are responses stored in offline.
                this.postHasOffline = !!replies.length;
                const convertPromises = [];
                // Index posts to allow quick access. Also check unread field.
                const onlinePostsMap = {};
                onlinePosts.forEach((post) => {
                    onlinePostsMap[post.id] = post;
                    hasUnreadPosts = hasUnreadPosts || !!post.unread;
                });
                replies.forEach((offlineReply) => {
                    // If we don't have forumId and courseId, get it from the post.
                    if (!this.forumId) {
                        this.forumId = offlineReply.forumid;
                    }
                    if (!this.courseId) {
                        this.courseId = offlineReply.courseid;
                    }
                    convertPromises.push(_services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].instance
                        .convertOfflineReplyToOnline(offlineReply)
                        .then((reply) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        offlineReplies.push(reply);
                        // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                        reply.parentid && (onlinePostsMap[reply.parentid].capabilities.reply = false);
                        return;
                    })));
                });
                yield Promise.all(convertPromises);
                // Convert back to array.
                onlinePosts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].objectToArray(onlinePostsMap);
                let posts = offlineReplies.concat(onlinePosts);
                this.startingPost = _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].extractStartingPost(posts);
                // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
                if (this.sort == 'nested') {
                    // Sort first by creation date to make format tree work.
                    _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].sortDiscussionPosts(posts, 'ASC');
                    const rootId = this.startingPost ? this.startingPost.id : (this.discussion ? this.discussion.id : 0);
                    posts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].formatTree(posts, 'parentid', 'id', rootId);
                }
                else {
                    // Set default reply subject.
                    const direction = this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                    _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].sortDiscussionPosts(posts, direction);
                }
                try {
                    // Now try to get the forum.
                    const forum = yield this.fetchForum();
                    // "forum.istracked" is more reliable than "trackPosts".
                    if (forum.istracked !== undefined) {
                        this.trackPosts = forum.istracked;
                    }
                    this.forumId = forum.id;
                    this.cmId = forum.cmid;
                    this.courseId = forum.course;
                    this.forum = forum;
                    this.availabilityMessage = _services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].getAvailabilityMessage(forum);
                    const promises = [];
                    promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].instance
                        .getAccessInformation(this.forumId, { cmId: this.cmId })
                        .then((accessInfo) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.accessInfo = accessInfo;
                        // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                        // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                        if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                            posts.forEach((post) => {
                                post.capabilities.reply = false;
                            });
                        }
                        // Show Q&A message if user hasn't posted.
                        const currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId();
                        this.showQAMessage = forum.type === 'qanda' && !accessInfo.canviewqandawithoutposting &&
                            !posts.some(post => post.author.id === currentUserId);
                        return;
                    })));
                    // The discussion object was not passed as parameter and there is no starting post.
                    if (!this.discussion) {
                        promises.push(this.loadDiscussion(this.discussionId, this.forumId, this.cmId));
                    }
                    yield Promise.all(promises);
                }
                catch (_a) {
                    // Ignore errors.
                }
                if (!this.discussion && !this.startingPost) {
                    // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                    throw new Error('Invalid forum discussion.');
                }
                if (this.startingPost && this.startingPost.author && this.forum.type == 'single') {
                    // Hide author and groups for first post and type single.
                    delete this.startingPost.author.fullname;
                    delete this.startingPost.author.groups;
                }
                this.posts = posts;
                this.postSubjects = this.getAllPosts().reduce((postSubjects, post) => {
                    postSubjects[post.id] = post.subject;
                    return postSubjects;
                }, this.startingPost
                    ? { [this.startingPost.id]: this.startingPost.subject }
                    : {});
                if (_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].isSetPinStateAvailableForSite() && this.forumId) {
                    // Use the canAddDiscussion WS to check if the user can pin discussions.
                    try {
                        const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
                        this.canPin = !!response.canpindiscussions;
                    }
                    catch (error) {
                        this.canPin = false;
                    }
                }
                else {
                    this.canPin = false;
                }
                this.hasOfflineRatings =
                    yield _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_8__["CoreRatingOffline"].hasRatings('mod_forum', 'post', "module" /* MODULE */, this.cmId, this.discussionId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.discussionLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_SYNC;
                if (forceMarkAsRead || (hasUnreadPosts && this.trackPosts)) {
                    // Add log in Moodle and mark unread posts as readed.
                    this.logDiscussionView(forceMarkAsRead);
                }
            }
        });
    }
    /**
     * Convenience function to load discussion.
     *
     * @param discussionId Discussion ID.
     * @param forumId Forum ID.
     * @param cmId Forum cmid.
     * @returns Promise resolved when done.
     */
    loadDiscussion(discussionId, forumId, cmId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the discussion if not passed as parameter.
            if (this.discussion || !forumId || !cmId) {
                return;
            }
            this.discussion = yield _services_forum_helper__WEBPACK_IMPORTED_MODULE_25__["AddonModForumHelper"].getDiscussionById(forumId, cmId, discussionId);
            this.discussionId = this.discussion.discussion;
        });
    }
    /**
     * Tries to synchronize the posts discussion.
     *
     * @param showErrors Whether to show errors in a modal.
     * @returns Promise resolved when done.
     */
    syncDiscussion(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSync"].instance
                .syncDiscussionReplies(this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showAlert(undefined, result.warnings[0]);
                }
                if (result && result.updated && this.forumId) {
                    // Sync successful, send event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSyncProvider"].MANUAL_SYNCED, {
                        forumId: this.forumId,
                        userId: _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteUserId(),
                        source: 'discussion',
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                }
                return;
            }));
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_27__["AddonModForumSync"].instance
                .syncRatings(this.cmId, this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showAlert(undefined, result.warnings[0]);
                }
                return;
            }));
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new Error('Failed syncing discussion');
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors If show errors to the user of hide them.
     * @returns Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.discussionLoaded) {
                yield this.refreshPosts(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            }
        });
    }
    /**
     * Refresh posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @returns Promise resolved when done.
     */
    refreshPosts(sync, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.content.scrollToTop();
            this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
            const promises = [];
            this.courseId && promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateForumData(this.courseId));
            promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateDiscussionPosts(this.discussionId, this.forumId));
            this.forumId && promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateAccessInformation(this.forumId));
            this.forumId && promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].invalidateCanAddDiscussion(this.forumId));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].ignoreErrors(_services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].allPromises(promises));
            yield this.fetchPosts(sync, showErrors);
        });
    }
    /**
     * Function to change posts sorting
     *
     * @param type Sort type.
     * @returns Promised resolved when done.
     */
    changeSort(type) {
        this.discussionLoaded = false;
        this.sort = type;
        _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getRequiredCurrentSite().setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
        this.content.scrollToTop();
        return this.fetchPosts();
    }
    /**
     * Lock or unlock the discussion.
     *
     * @param locked True to lock the discussion, false to unlock.
     */
    setLockState(locked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.discussion || !this.forumId || !this.cmId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].setLockState(this.forumId, this.discussionId, locked);
                this.discussion.locked = response.locked;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    locked: this.discussion.locked,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showToast('addon.mod_forum.lockupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Pin or unpin the discussion.
     *
     * @param pinned True to pin the discussion, false to unpin it.
     */
    setPinState(pinned) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.discussion || !this.forumId || !this.cmId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].setPinState(this.discussionId, pinned);
                this.discussion.pinned = pinned;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    pinned: this.discussion.pinned,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showToast('addon.mod_forum.pinupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Star or unstar the discussion.
     *
     * @param starred True to star the discussion, false to unstar it.
     */
    toggleFavouriteState(starred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.discussion || !this.forumId || !this.cmId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].toggleFavouriteState(this.discussionId, starred);
                this.discussion.starred = starred;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    starred: this.discussion.starred,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showToast('addon.mod_forum.favouriteupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_16__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * New post added.
     */
    postListChanged() {
        if (!this.forumId || !this.cmId) {
            return;
        }
        // Trigger an event to notify a new reply.
        const data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId,
        };
        _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].REPLY_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
        this.discussionLoaded = false;
        this.refreshPosts().finally(() => {
            this.discussionLoaded = true;
        });
    }
    /**
     * Get all the posts contained in the discussion.
     *
     * @returns Array containing all the posts of the discussion.
     */
    getAllPosts() {
        const allPosts = this.posts.map(post => this.flattenPostHierarchy(post));
        return _singletons_array__WEBPACK_IMPORTED_MODULE_19__["CoreArray"].flatten(allPosts);
    }
    /**
     * Flatten a post's hierarchy into an array.
     *
     * @param parent Parent post.
     * @returns Array containing all the posts within the hierarchy (including the parent).
     */
    flattenPostHierarchy(parent) {
        const posts = [parent];
        const children = parent.children || [];
        for (const child of children) {
            posts.push(...this.flattenPostHierarchy(child));
        }
        return posts;
    }
    /**
     * Log discussion as viewed. This will also mark the posts as read.
     *
     * @param logAnalytics Whether to log analytics too or not.
     */
    logDiscussionView(logAnalytics = false) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].ignoreErrors(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForum"].logDiscussionView(this.discussionId, this.forumId || -1));
            if (logAnalytics) {
                _services_analytics__WEBPACK_IMPORTED_MODULE_28__["CoreAnalytics"].logEvent({
                    type: _services_analytics__WEBPACK_IMPORTED_MODULE_28__["CoreAnalyticsEventType"].VIEW_ITEM,
                    ws: 'mod_forum_view_forum_discussion',
                    name: (_c = (_b = (_a = this.startingPost) === null || _a === void 0 ? void 0 : _a.subject) !== null && _b !== void 0 ? _b : this.forum.name) !== null && _c !== void 0 ? _c : '',
                    data: { id: this.discussionId, forumid: this.forumId, category: 'forum' },
                    url: `/mod/forum/discuss.php?d=${this.discussionId}` + (this.postId ? `#p${this.postId}` : ''),
                });
            }
            if (!this.courseId || !this.cmId) {
                return;
            }
            // Trigger mark read posts.
            _singletons_events__WEBPACK_IMPORTED_MODULE_21__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_24__["AddonModForumProvider"].MARK_READ_EVENT, {
                courseId: this.courseId,
                moduleId: this.cmId,
            }, _services_sites__WEBPACK_IMPORTED_MODULE_15__["CoreSites"].getCurrentSiteId());
        });
    }
};
AddonModForumDiscussionPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddonModForumDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonContent"],] }]
};
AddonModForumDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-forum-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/mod/forum/pages/discussion/discussion.scss")).default]
    })
], AddonModForumDiscussionPage);

/**
 * Helper to manage swiping within a collection of discussions.
 */
class AddonModForumDiscussionDiscussionsSwipeManager extends _classes_forum_discussions_swipe_manager__WEBPACK_IMPORTED_MODULE_23__["AddonModForumDiscussionsSwipeManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return this.getSource().DISCUSSIONS_PATH_PREFIX + route.params.discussionId;
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
//# sourceMappingURL=forum-discussion-lazy-module.js.map