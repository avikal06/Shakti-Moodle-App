(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts-35/contacts.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts-35/contacts.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.contacts' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- Add an empty context menu so split view pages can add items, otherwise the menu disappears in some cases. -->\r\n            <core-context-menu></core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n\r\n        <core-search-box (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\" [placeholder]=\"'addon.messages.contactname' | translate\"\r\n            autocorrect=\"off\" spellcheck=\"false\" lengthCheck=\"2\" [disabled]=\"!loaded\" searchArea=\"AddonMessagesContacts\"></core-search-box>\r\n\r\n        <core-loading [hideUntil]=\"loaded\" [message]=\"loadingMessage\">\r\n            <core-empty-box *ngIf=\"!hasContacts && searchString == ''\" icon=\"fas-address-book\"\r\n                [message]=\"'addon.messages.contactlistempty' | translate\"></core-empty-box>\r\n\r\n            <core-empty-box *ngIf=\"!hasContacts && searchString != ''\" icon=\"fas-address-book\"\r\n                [message]=\"'addon.messages.nousersfound' | translate\"></core-empty-box>\r\n\r\n            <ion-list *ngFor=\"let contactType of contactTypes\" class=\"ion-no-margin\">\r\n                <ng-container *ngIf=\"contacts[contactType] && (contacts[contactType].length > 0 || contactType === searchType)\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.messages.type_' + contactType | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\" class=\"ion-padding-end\">\r\n                            <ion-badge>{{ contacts[contactType].length }}</ion-badge>\r\n                        </ion-note>\r\n                    </ion-item-divider>\r\n                    <ng-container *ngFor=\"let contact of contacts[contactType]\">\r\n                        <!-- Don't show deleted users -->\r\n                        <ion-item class=\"ion-text-wrap addon-messages-conversation-item\"\r\n                            *ngIf=\"contact.profileimageurl || contact.profileimageurlsmall\" [attr.aria-label]=\"contact.fullname\"\r\n                            (click)=\"gotoDiscussion(contact.id)\" detail=\"true\" button\r\n                            [attr.aria-current]=\"contact.id == discussionUserId ? 'page' : 'false'\">\r\n                            <core-user-avatar [user]=\"contact\" slot=\"start\" [checkOnline]=\"contact.showonlinestatus\"></core-user-avatar>\r\n                            <ion-label>\r\n                                <p class=\"item-heading\">{{ contact.fullname }}</p>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts/contacts.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts/contacts.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.contacts' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"gotoSearch()\" [attr.aria-label]=\"'addon.messages.searchcombined' | translate\">\r\n                <ion-icon name=\"fas-magnifying-glass\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <!-- Add an empty context menu so split view pages can add items, otherwise the menu disappears in some cases. -->\r\n            <core-context-menu></core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <core-tabs [hideUntil]=\"true\">\r\n\r\n            <!-- Contacts tab. -->\r\n            <core-tab [title]=\"'addon.messages.contacts' | translate\" (ionSelect)=\"selectTab('confirmed')\">\r\n                <ng-template>\r\n                    <ion-refresher slot=\"fixed\" [disabled]=\"!confirmedLoaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n                        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n                    </ion-refresher>\r\n                    <core-loading [hideUntil]=\"confirmedLoaded\">\r\n                        <ion-list class=\"ion-no-margin\" *ngIf=\"confirmedContacts.length\">\r\n                            <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" (click)=\"selectUser(contact.id)\" button\r\n                                *ngFor=\"let contact of confirmedContacts\" [attr.aria-label]=\"contact.fullname\" detail=\"true\"\r\n                                [attr.aria-current]=\"contact.id == selectedUserId ? 'page' : 'false'\">\r\n                                <core-user-avatar slot=\"start\" [user]=\"contact\" [checkOnline]=\"contact.showonlinestatus\"\r\n                                    [linkProfile]=\"false\">\r\n                                </core-user-avatar>\r\n                                <ion-label>\r\n                                    <p class=\"item-heading\">\r\n                                        <core-format-text [text]=\"contact.fullname\" contextLevel=\"system\" [contextInstanceId]=\"0\">\r\n                                        </core-format-text>\r\n                                        <ion-icon *ngIf=\"contact.isblocked\" name=\"fas-user-slash\" slot=\"end\"\r\n                                            [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\r\n                                        </ion-icon>\r\n                                    </p>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ion-list>\r\n\r\n                        <core-empty-box *ngIf=\"!confirmedContacts.length\" icon=\"far-address-book\"\r\n                            [message]=\"'addon.messages.nocontactsgetstarted' | translate\">\r\n                        </core-empty-box>\r\n\r\n                        <core-infinite-loading [enabled]=\"confirmedCanLoadMore\" (action)=\"loadMore($event)\" [error]=\"confirmedLoadMoreError\"\r\n                            position=\"bottom\">\r\n                        </core-infinite-loading>\r\n                    </core-loading>\r\n                </ng-template>\r\n            </core-tab>\r\n\r\n            <!-- Requests tab. -->\r\n            <core-tab [title]=\"'addon.messages.requests' | translate\" (ionSelect)=\"selectTab('requests')\" [badge]=\"requestsBadge\"\r\n                badgeA11yText=\"addon.messages.pendingcontactrequests\">\r\n                <ng-template>\r\n                    <ion-refresher slot=\"fixed\" [disabled]=\"!requestsLoaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n                        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n                    </ion-refresher>\r\n                    <core-loading [hideUntil]=\"requestsLoaded\">\r\n                        <ion-list class=\"ion-no-margin\" *ngIf=\"requests.length\">\r\n                            <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" *ngFor=\"let request of requests\"\r\n                                [attr.aria-label]=\"request.fullname\" (click)=\"selectUser(request.id)\" button\r\n                                [attr.aria-current]=\"request.id == selectedUserId ? 'page' : 'false'\" detail=\"true\">\r\n                                <core-user-avatar slot=\"start\" [user]=\"request\" [linkProfile]=\"false\"></core-user-avatar>\r\n                                <ion-label>\r\n                                    <core-format-text [text]=\"request.fullname\" contextLevel=\"system\" [contextInstanceId]=\"0\">\r\n                                    </core-format-text>\r\n                                    <p *ngIf=\"!request.iscontact\">\r\n                                        {{ 'addon.messages.wouldliketocontactyou' | translate }}\r\n                                    </p>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </ion-list>\r\n                        <core-empty-box *ngIf=\"!requests.length\" icon=\"far-address-book\"\r\n                            [message]=\"'addon.messages.nocontactrequests' | translate\">\r\n                        </core-empty-box>\r\n                        <core-infinite-loading [enabled]=\"requestsCanLoadMore\" (action)=\"loadMore($event)\" [error]=\"requestsLoadMoreError\"\r\n                            position=\"bottom\">\r\n                        </core-infinite-loading>\r\n                    </core-loading>\r\n                </ng-template>\r\n            </core-tab>\r\n        </core-tabs>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>\r\n                <img *ngIf=\"loaded && !otherMember && conversationImage\" class=\"core-bar-button-image\" [src]=\"conversationImage\" alt=\"\"\r\n                    onError=\"this.src='assets/img/group-avatar.svg'\" core-external-content role=\"presentation\" [siteId]=\"siteId || null\">\r\n                <core-user-avatar *ngIf=\"loaded && otherMember\" class=\"core-bar-button-image\" [user]=\"otherMember\" [linkProfile]=\"false\"\r\n                    [checkOnline]=\"otherMember.showonlinestatus\">\r\n                </core-user-avatar>\r\n                <core-format-text [text]=\"title\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\r\n                <ion-icon *ngIf=\"conversation && conversation.isfavourite\" name=\"fas-star\"\r\n                    [attr.aria-label]=\"'core.favourites' | translate\">\r\n                </ion-icon>\r\n                <ion-icon *ngIf=\"conversation && conversation.ismuted\" name=\"fas-bell-slash\"\r\n                    [attr.aria-label]=\"'addon.messages.mutedconversation' | translate\">\r\n                </ion-icon>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\"></ion-buttons>\r\n    </ion-toolbar>\r\n    <core-navbar-buttons slot=\"end\">\r\n        <core-context-menu [attr.aria-label]=\"'addon.messages.conversationactions' | translate\">\r\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || isGroup\" [priority]=\"1000\"\r\n                [content]=\"'addon.messages.info' | translate\" (action)=\"viewInfo()\" iconAction=\"fas-circle-info\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || !isGroup\" [priority]=\"1000\"\r\n                [content]=\"'addon.messages.groupinfo' | translate\" (action)=\"viewInfo()\" iconAction=\"fas-circle-info\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversation\" [priority]=\"800\" (action)=\"changeFavourite($event)\"\r\n                [closeOnClick]=\"false\" [content]=\"(conversation && conversation.isfavourite ? 'addon.messages.removefromfavourites' :\r\n                'addon.messages.addtofavourites') | translate\" [iconAction]=\"favouriteIcon\" [iconSlash]=\"favouriteIconSlash\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || otherMember.isblocked\" [priority]=\"700\"\r\n                [content]=\"'addon.messages.blockuser' | translate\" (action)=\"blockUser()\" [iconAction]=\"blockIcon\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.isblocked\" [priority]=\"700\"\r\n                [content]=\"'addon.messages.unblockuser' | translate\" (action)=\"unblockUser()\" [iconAction]=\"blockIcon\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !muteEnabled || !conversation\" [priority]=\"600\" (action)=\"changeMute($event)\"\r\n                [closeOnClick]=\"false\" [content]=\"(conversation && conversation.ismuted ? 'addon.messages.unmuteconversation' :\r\n                'addon.messages.muteconversation') | translate\" [iconAction]=\"muteIcon\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"!canDelete || !messages || !messages.length\" [priority]=\"400\"\r\n                [content]=\"'addon.messages.showdeletemessages' | translate\" iconAction=\"toggle\" [(toggle)]=\"showDelete\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversationId || isGroup || !messages || !messages.length\"\r\n                [priority]=\"200\" [content]=\"'addon.messages.deleteconversation' | translate\" (action)=\"deleteConversation($event)\"\r\n                [closeOnClick]=\"false\" [iconAction]=\"deleteIcon\"></core-context-menu-item>\r\n            <core-context-menu-item\r\n                [hidden]=\"isSelf || !otherMember || otherMember.iscontact || requestContactSent || requestContactReceived\" [priority]=\"100\"\r\n                [content]=\"'addon.messages.addtoyourcontacts' | translate\" (action)=\"createContactRequest()\" [iconAction]=\"addRemoveIcon\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.iscontact\" [priority]=\"100\"\r\n                [content]=\"'addon.messages.removefromyourcontacts' | translate\" (action)=\"removeContact()\" [iconAction]=\"addRemoveIcon\"\r\n                [iconSlash]=\"true\"></core-context-menu-item>\r\n        </core-context-menu>\r\n    </core-navbar-buttons>\r\n</ion-header>\r\n<ion-content (ionScroll)=\"scrollFunction()\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <!-- Load previous messages. -->\r\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadPrevious($event)\" position=\"top\" [error]=\"loadMoreError\">\r\n        </core-infinite-loading>\r\n\r\n        <ng-container *ngIf=\"isSelf && !canLoadMore\">\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.selfconversation' | translate }}</p>\r\n            <p class=\"ion-text-center\"><em>{{ 'addon.messages.selfconversationdefaultmessage' | translate }}</em></p>\r\n        </ng-container>\r\n\r\n        <h2 class=\"sr-only\">{{ title }}</h2>\r\n\r\n        <ion-list class=\"addon-messages-discussion-container\" [class.addon-messages-discussion-group]=\"isGroup\" [attr.aria-live]=\"'polite'\">\r\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\r\n                <h3 class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\r\n                    {{ message.timecreated | coreFormatDate: \"strftimedayshort\" }}\r\n                </h3>\r\n\r\n                <ion-chip class=\"addon-messages-unreadfrom\" *ngIf=\"unreadMessageFrom > 0 && message.id == unreadMessageFrom\" color=\"light\">\r\n                    <ion-label>{{ 'addon.messages.newmessages' | translate }}</ion-label>\r\n                    <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-chip>\r\n\r\n                <core-message [message]=\"message\" [user]=\"members[message.useridfrom]\" (afterRender)=\"last && scrollToBottom()\"\r\n                    [text]=\"message.text\" (onDeleteMessage)=\"deleteMessage(message, index)\" [showDelete]=\"showDelete\"\r\n                    [time]=\"message.timecreated\">\r\n                </core-message>\r\n            </ng-container>\r\n        </ion-list>\r\n\r\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\"\r\n            [message]=\"'addon.messages.nomessagesfound' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n    <!-- Scroll bottom. -->\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"loaded && newMessages > 0\">\r\n        <ion-fab-button size=\"small\" (click)=\"scrollToFirstUnreadMessage()\" color=\"light\"\r\n            [attr.aria-label]=\"'addon.messages.newmessages' | translate\">\r\n            <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'addon.messages.newmessages' | translate }}</span>\r\n        </ion-fab-button>\r\n        <ion-badge class=\"core-discussion-messages-badge\">{{ newMessages }}</ion-badge>\r\n    </ion-fab>\r\n</ion-content>\r\n<ion-footer class=\"footer-adjustable\" *ngIf=\"loaded && (!conversationId || conversation)\">\r\n    <ion-toolbar [color]=\"footerType == 'message' ? null : 'light'\">\r\n        <p *ngIf=\"footerType == 'unable'\" class=\"ion-text-center ion-margin-horizontal\">\r\n            {{ 'addon.messages.unabletomessage' | translate }}\r\n        </p>\r\n        <div *ngIf=\"footerType == 'blocked'\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.youhaveblockeduser' | translate }}</p>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"unblockUser()\">\r\n                {{ 'addon.messages.unblockuser' | translate }}\r\n            </ion-button>\r\n        </div>\r\n        <div *ngIf=\"footerType == 'requiresContact' && otherMember\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\">\r\n                <strong>{{ 'addon.messages.isnotinyourcontacts' | translate: {$a: otherMember.fullname} }}</strong>\r\n            </p>\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.requirecontacttomessage' | translate: {$a: otherMember.fullname} }}</p>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"createContactRequest()\">\r\n                {{ 'addon.messages.sendcontactrequest' | translate }}\r\n            </ion-button>\r\n        </div>\r\n        <div *ngIf=\"footerType == 'requestReceived' && otherMember\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.userwouldliketocontactyou' | translate: {$a: otherMember.fullname} }}</p>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"confirmContactRequest()\">\r\n                {{ 'addon.messages.acceptandaddcontact' | translate }}\r\n            </ion-button>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" fill=\"outline\" (click)=\"declineContactRequest()\">\r\n                {{ 'addon.messages.decline' | translate }}\r\n            </ion-button>\r\n        </div>\r\n        <div *ngIf=\"footerType == 'requestSent' || (footerType == 'message' && requestContactSent)\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\"><strong>{{ 'addon.messages.contactrequestsent' | translate }}</strong></p>\r\n            <p class=\"ion-text-center\" *ngIf=\"otherMember\">\r\n                {{ 'addon.messages.yourcontactrequestpending' | translate: {$a: otherMember.fullname} }}\r\n            </p>\r\n        </div>\r\n        <core-send-message-form *ngIf=\"footerType == 'message'\" (onSubmit)=\"sendMessage($event)\" [showKeyboard]=\"showKeyboard\"\r\n            [placeholder]=\"'addon.messages.newmessage' | translate\"></core-send-message-form>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussions-35/discussions.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussions-35/discussions.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.messages' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- Add an empty context menu so split view pages can add items, otherwise the menu disappears in some cases. -->\r\n            <core-context-menu></core-context-menu>\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n\r\n        <core-search-box (onSubmit)=\"searchMessage($event)\" (onClear)=\"clearSearch()\" [placeholder]=\" 'addon.messages.message' | translate\"\r\n            autocorrect=\"off\" spellcheck=\"false\" lengthCheck=\"2\" [disabled]=\"!loaded\" searchArea=\"AddonMessagesDiscussions\"\r\n            [autoFocus]=\"false\"></core-search-box>\r\n\r\n        <core-loading [hideUntil]=\"loaded\" [message]=\"loadingMessage\">\r\n\r\n            <ion-list class=\"ion-no-margin\">\r\n\r\n                <ion-item class=\"ion-text-wrap addon-message-discussion\" (click)=\"gotoContacts()\"\r\n                    [attr.aria-label]=\"'addon.messages.contacts' | translate\" detail=\"true\" button>\r\n                    <ion-icon name=\"fas-address-book\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.messages.contacts' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <ng-container *ngIf=\"search.showResults\">\r\n                    <ion-item-divider>\r\n                        <ion-label>\r\n                            <h2>{{ 'core.searchresults' | translate }}</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\" class=\"ion-padding-end\">\r\n                            <ion-badge>{{ search.results.length }}</ion-badge>\r\n                        </ion-note>\r\n                    </ion-item-divider>\r\n                    <ion-item class=\"ion-text-wrap addon-message-discussion\" *ngFor=\"let result of search.results\" button\r\n                        [attr.aria-label]=\"result.fullname\" (click)=\"gotoDiscussion(result.userid, result.messageid)\"\r\n                        [attr.aria-current]=\"result.userid == discussionUserId ? 'page' : 'false'\" detail=\"false\">\r\n                        <core-user-avatar [user]=\"result\" slot=\"start\" [checkOnline]=\"result.showonlinestatus\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ result.fullname }}</p>\r\n                            <p>\r\n                                <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"result.lastmessage\" contextLevel=\"system\"\r\n                                    [contextInstanceId]=\"0\"></core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!search.showResults\">\r\n                    <ion-item class=\"ion-text-wrap addon-message-discussion\" *ngFor=\"let discussion of discussions\" button\r\n                        [attr.aria-label]=\"discussion.fullname\" (click)=\"gotoDiscussion(discussion.message!.user)\"\r\n                        [attr.aria-current]=\"discussion.message!.user == discussionUserId ? 'page' : 'false'\" detail=\"false\">\r\n                        <core-user-avatar [user]=\"discussion\" slot=\"start\" checkOnline=\"false\"></core-user-avatar>\r\n                        <ion-label>\r\n                            <div class=\"flex-row ion-justify-content-between\">\r\n                                <p class=\"item-heading\">{{ discussion.fullname }}</p>\r\n                                <ion-note *ngIf=\"discussion.message!.timecreated > 0 || discussion.unread\">\r\n                                    <span *ngIf=\"discussion.message!.timecreated > 0\" class=\"addon-message-last-message-date\">\r\n                                        {{discussion.message!.timecreated / 1000 | coreDateDayOrTime}}\r\n                                    </span>\r\n                                    <ion-icon *ngIf=\"discussion.unread\" name=\"fas-circle\" color=\"primary\" aria-hidden=\"true\">\r\n                                    </ion-icon>\r\n                                    <span *ngIf=\"discussion.unread\" class=\"sr-only\">\r\n                                        {{ 'addon.messages.unreadmessages' | translate }}\r\n                                    </span>\r\n                                </ion-note>\r\n                            </div>\r\n                            <p>\r\n                                <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"discussion.message!.message\" contextLevel=\"system\"\r\n                                    [contextInstanceId]=\"0\">\r\n                                </core-format-text>\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ng-container>\r\n            </ion-list>\r\n\r\n            <core-empty-box *ngIf=\"(!discussions || discussions.length <= 0) && !search.showResults\" icon=\"far-comments\"\r\n                [message]=\"'addon.messages.nomessagesfound' | translate\"></core-empty-box>\r\n\r\n            <core-empty-box *ngIf=\"(!search.results || search.results.length <= 0) && search.showResults\" icon=\"fas-magnifying-glass\"\r\n                [message]=\"'core.noresults' | translate\"></core-empty-box>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/group-conversations/group-conversations.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/group-conversations/group-conversations.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.messages' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"gotoSearch()\" [attr.aria-label]=\"'addon.messages.searchcombined' | translate\">\r\n                <ion-icon name=\"fas-magnifying-glass\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"gotoSettings()\" [attr.aria-label]=\"'addon.messages.messagepreferences' | translate\">\r\n                <ion-icon name=\"fas-gear\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <!-- Add an empty context menu so split view pages can add items, otherwise the menu disappears in some cases. -->\r\n            <core-context-menu></core-context-menu>\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!loaded || !currentListEl\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n\r\n        <core-loading [hideUntil]=\"loaded\" [message]=\"loadingMessage\">\r\n            <ion-list>\r\n                <ion-item class=\"ion-text-wrap addon-message-discussion\" (click)=\"gotoContacts()\" detail=\"true\" button>\r\n                    <ion-icon name=\"fas-address-book\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>\r\n                        <h2>{{ 'addon.messages.contacts' | translate }}</h2>\r\n                    </ion-label>\r\n                    <ion-badge *ngIf=\"contactRequestsCount > 0\" slot=\"end\" aria-hidden=\"true\">{{contactRequestsCount}}</ion-badge>\r\n                    <span *ngIf=\"contactRequestsCount > 0\" class=\"sr-only\">\r\n                        {{ 'addon.messages.pendingcontactrequests' | translate:{$a: contactRequestsCount} }}\r\n                    </span>\r\n                </ion-item>\r\n                <!-- Favourite conversations. -->\r\n                <ion-item button class=\"ion-text-wrap divider\" (click)=\"toggle(favourites)\" sticky=\"true\"\r\n                    [attr.aria-label]=\"(favourites.expanded ? 'core.collapse' : 'core.expand') | translate\"\r\n                    [attr.aria-expanded]=\"favourites.expanded\" aria-controls=\"addon-messages-groupconversations-favourite\" role=\"heading\"\r\n                    detail=\"false\">\r\n                    <ion-icon name=\"fas-chevron-right\" flip-rtl slot=\"start\" aria-hidden=\"true\" class=\"expandable-status-icon\"\r\n                        [class.expandable-status-icon-expanded]=\"favourites.expanded\">\r\n                    </ion-icon>\r\n                    <ion-label>\r\n                        <h2>{{ 'core.favourites' | translate }} ({{ favourites.count }})</h2>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"favourites.unread\" aria-hidden=\"true\">{{ favourites.unread }}</ion-badge>\r\n                    <span *ngIf=\"favourites.unread\" class=\"sr-only\">\r\n                        {{ 'addon.messages.unreadconversations' | translate:{$a: favourites.unread} }}\r\n                    </span>\r\n                </ion-item>\r\n                <div [hidden]=\"!favourites.conversations || !favourites.expanded || favourites.loading\" #favlist\r\n                    id=\"addon-messages-groupconversations-favourite\">\r\n                    <ng-container *ngTemplateOutlet=\"conversationsTemplate; context: {conversations: favourites.conversations}\">\r\n                    </ng-container>\r\n                    <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\r\n                    <core-infinite-loading [enabled]=\"favourites.canLoadMore\" (action)=\"loadMoreConversations(favourites, $event)\"\r\n                        [error]=\"favourites.loadMoreError\"></core-infinite-loading>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"favourites.conversations && favourites.conversations.length == 0\">\r\n                        <ion-label>\r\n                            <p>{{ 'addon.messages.nofavourites' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </div>\r\n                <ion-item class=\"ion-text-center\" *ngIf=\"favourites.loading\">\r\n                    <ion-label>\r\n                        <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <!-- Group conversations. -->\r\n                <ion-item button class=\"divider ion-text-wrap\" (click)=\"toggle(group)\" sticky=\"true\"\r\n                    [attr.aria-label]=\"(group.expanded ? 'core.collapse' : 'core.expand') | translate\" [attr.aria-expanded]=\"group.expanded\"\r\n                    aria-controls=\"addon-messages-groupconversations-group\" role=\"heading\" detail=\"false\">\r\n                    <ion-icon name=\"fas-chevron-right\" flip-rtl slot=\"start\" aria-hidden=\"true\" class=\"expandable-status-icon\"\r\n                        [class.expandable-status-icon-expanded]=\"group.expanded\">\r\n                    </ion-icon>\r\n                    <ion-label>\r\n                        <h2>{{ 'addon.messages.groupconversations' | translate }} ({{ group.count }})</h2>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"group.unread\" aria-hidden=\"true\">{{ group.unread }}</ion-badge>\r\n                    <span *ngIf=\"group.unread\" class=\"sr-only\">\r\n                        {{ 'addon.messages.unreadconversations' | translate:{$a: group.unread} }}\r\n                    </span>\r\n                </ion-item>\r\n                <div [hidden]=\"!group.conversations || !group.expanded || group.loading\" #grouplist\r\n                    id=\"addon-messages-groupconversations-group\">\r\n                    <ng-container *ngTemplateOutlet=\"conversationsTemplate; context: {conversations: group.conversations}\">\r\n                    </ng-container>\r\n                    <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\r\n                    <core-infinite-loading [enabled]=\"group.canLoadMore\" (action)=\"loadMoreConversations(group, $event)\"\r\n                        [error]=\"group.loadMoreError\"></core-infinite-loading>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"group.conversations && group.conversations.length == 0\">\r\n                        <ion-label>\r\n                            <p>{{ 'addon.messages.nogroupconversations' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </div>\r\n                <ion-item class=\"ion-text-center\" *ngIf=\"group.loading\">\r\n                    <ion-label>\r\n                        <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-item button class=\"divider ion-text-wrap\" (click)=\"toggle(individual)\" sticky=\"true\"\r\n                    [attr.aria-label]=\"(individual.expanded ? 'core.collapse' : 'core.expand') | translate\"\r\n                    [attr.aria-expanded]=\"individual.expanded\" aria-controls=\"addon-messages-groupconversations-individual\" role=\"heading\"\r\n                    detail=\"false\">\r\n                    <ion-icon name=\"fas-chevron-right\" flip-rtl slot=\"start\" aria-hidden=\"true\" class=\"expandable-status-icon\"\r\n                        [class.expandable-status-icon-expanded]=\"individual.expanded\">\r\n                    </ion-icon>\r\n                    <ion-label>\r\n                        <h2>{{ 'addon.messages.individualconversations' | translate }} ({{ individual.count }})</h2>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"individual.unread\" aria-hidden=\"true\">{{ individual.unread }}</ion-badge>\r\n                    <span *ngIf=\"individual.unread\" class=\"sr-only\">\r\n                        {{ 'addon.messages.unreadconversations' | translate:{$a: individual.unread} }}\r\n                    </span>\r\n                </ion-item>\r\n                <div [hidden]=\"!individual.conversations || !individual.expanded || individual.loading\" #indlist\r\n                    id=\"addon-messages-groupconversations-individual\">\r\n                    <ng-container *ngTemplateOutlet=\"conversationsTemplate; context: {conversations: individual.conversations}\">\r\n                    </ng-container>\r\n                    <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\r\n                    <core-infinite-loading [enabled]=\"individual.canLoadMore\" (action)=\"loadMoreConversations(individual, $event)\"\r\n                        [error]=\"individual.loadMoreError\"></core-infinite-loading>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"individual.conversations && individual.conversations.length == 0\">\r\n                        <ion-label>\r\n                            <p>{{ 'addon.messages.noindividualconversations' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </div>\r\n                <ion-item class=\"ion-text-center\" *ngIf=\"individual.loading\">\r\n                    <ion-label>\r\n                        <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n\r\n<!-- Template to render a list of conversations. -->\r\n<ng-template #conversationsTemplate let-conversations=\"conversations\">\r\n    <ion-item class=\"ion-text-wrap addon-message-discussion\" *ngFor=\"let conversation of conversations\" button detail=\"false\"\r\n        (click)=\"gotoConversation(conversation.id, conversation.userid)\"\r\n        [attr.aria-current]=\"((conversation.id &&\r\n            conversation.id == selectedConversationId) || (conversation.userid && conversation.userid == selectedUserId)) ? 'page': 'false'\"\r\n        id=\"addon-message-conversation-{{ conversation.id ? conversation.id : 'user-' + conversation.userid }}\"\r\n        [attr.aria-label]=\"conversation.name\">\r\n        <!-- Group conversation image. -->\r\n        <ion-avatar slot=\"start\" *ngIf=\"conversation.type == typeGroup\">\r\n            <img [src]=\"conversation.imageurl\" [alt]=\"conversation.name\" core-external-content\r\n                onError=\"this.src='assets/img/group-avatar.svg'\">\r\n        </ion-avatar>\r\n\r\n        <!-- Avatar for individual conversations. -->\r\n        <core-user-avatar *ngIf=\"conversation.type != typeGroup\" core-user-avatar [user]=\"conversation.otherUser\" [linkProfile]=\"false\"\r\n            [checkOnline]=\"conversation.showonlinestatus\" slot=\"start\"></core-user-avatar>\r\n\r\n        <ion-label>\r\n            <div class=\"flex-row ion-justify-content-between\">\r\n                <p class=\"item-heading\">\r\n                    <core-format-text [text]=\"conversation.name\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\r\n                    <ion-icon name=\"fas-user-slash\" *ngIf=\"conversation.isblocked\" [title]=\"'addon.messages.contactblocked' | translate\">\r\n                    </ion-icon>\r\n                    <ion-icon *ngIf=\"conversation.ismuted\" name=\"fas-volume-xmark\" [title]=\"'addon.messages.mutedconversation' | translate\">\r\n                    </ion-icon>\r\n                </p>\r\n                <ion-note *ngIf=\"conversation.lastmessagedate > 0 || conversation.unreadcount\">\r\n                    <span *ngIf=\"conversation.lastmessagedate > 0\" class=\"addon-message-last-message-date\">\r\n                        {{conversation.lastmessagedate | coreDateDayOrTime}}\r\n                    </span>\r\n                    <ion-badge *ngIf=\"conversation.unreadcount > 0\" aria-label=\"true\">{{ conversation.unreadcount }}</ion-badge>\r\n                    <span *ngIf=\"conversation.unreadcount > 0\" class=\"sr-only\">\r\n                        {{ 'addon.messages.unreadmessages' | translate:{$a: conversation.unreadcount} }}\r\n                    </span>\r\n                </ion-note>\r\n            </div>\r\n            <p *ngIf=\"conversation.subname\">\r\n                <core-format-text [text]=\"conversation.subname\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\r\n            </p>\r\n            <p class=\"addon-message-last-message\">\r\n                <span *ngIf=\"conversation.sentfromcurrentuser\" class=\"addon-message-last-message-user\">\r\n                    {{ 'addon.messages.you' | translate }}\r\n                </span>\r\n                <span *ngIf=\"!conversation.sentfromcurrentuser && conversation.type == typeGroup && conversation.members[0]\"\r\n                    class=\"addon-message-last-message-user\">{{ conversation.members[0].fullname + ':' }}</span>\r\n                <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"conversation.lastmessage\" class=\"addon-message-last-message-text\"\r\n                    contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\r\n            </p>\r\n        </ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.messages.searchcombined' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- Add an empty context menu so split view pages can add items, otherwise the menu disappears in some cases. -->\r\n            <core-context-menu></core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <core-search-box (onSubmit)=\"search($event)\" (onClear)=\"clearSearch()\" [disabled]=\"disableSearch\" autocorrect=\"off\"\r\n            [spellcheck]=\"false\" [autoFocus]=\"true\" [lengthCheck]=\"1\" searchArea=\"AddonMessagesSearch\"></core-search-box>\r\n\r\n        <core-loading [hideUntil]=\"!displaySearching\" [message]=\"'core.searching' | translate\">\r\n            <ion-list *ngIf=\"displayResults\">\r\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: contacts}\"></ng-container>\r\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: nonContacts}\"></ng-container>\r\n                <ng-container *ngTemplateOutlet=\"resultsTemplate; context: {item: messages}\"></ng-container>\r\n                <!-- The infinite loading cannot be inside the ng-template, it fails because it doesn't find ion-content. -->\r\n                <core-infinite-loading [enabled]=\"messages.canLoadMore\" (action)=\"search(query, 'messages', $event)\"\r\n                    [error]=\"messages.loadMoreError\"></core-infinite-loading>\r\n            </ion-list>\r\n\r\n            <core-empty-box *ngIf=\"displayResults && !contacts.results.length && !nonContacts.results.length && !messages.results.length\"\r\n                icon=\"fas-magnifying-glass\" [message]=\"'core.noresults' | translate\">\r\n            </core-empty-box>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n\r\n<!-- Template to render a list of results -->\r\n<ng-template #resultsTemplate let-item=\"item\">\r\n    <ng-container *ngIf=\"item.results.length > 0\">\r\n        <ion-item-divider class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <h2>{{ item.titleString | translate }}</h2>\r\n            </ion-label>\r\n        </ion-item-divider>\r\n\r\n        <!-- List of results -->\r\n        <ion-item class=\"addon-message-discussion ion-text-wrap\" *ngFor=\"let result of item.results\" [attr.aria-label]=\"result.fullname\"\r\n            (click)=\"openConversation(result)\" [attr.aria-current]=\"result == selectedResult ? 'page' : 'false'\" detail=\"true\" button>\r\n            <core-user-avatar slot=\"start\" [user]=\"result\" [checkOnline]=\"true\" [linkProfile]=\"false\"></core-user-avatar>\r\n            <ion-label>\r\n                <p class=\"item-heading\">\r\n                    <core-format-text [text]=\"result.fullname\" [highlight]=\"result.highlightName\" [filter]=\"false\">\r\n                    </core-format-text>\r\n                    <ion-icon name=\"fas-ban\" *ngIf=\"result.isblocked\" [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\r\n                    </ion-icon>\r\n                </p>\r\n                <ion-note *ngIf=\"result.lastmessagedate > 0\">\r\n                    {{result.lastmessagedate | coreDateDayOrTime}}\r\n                </ion-note>\r\n                <p class=\"addon-message-last-message\">\r\n                    <span *ngIf=\"result.sentfromcurrentuser\" class=\"addon-message-last-message-user\">\r\n                        {{ 'addon.messages.you' | translate }}\r\n                    </span>\r\n                    <core-format-text clean=\"true\" singleLine=\"true\" [text]=\"result.lastmessage\" [highlight]=\"result.highlightMessage\"\r\n                        contextLevel=\"system\" [contextInstanceId]=\"0\" class=\"addon-message-last-message-text\"></core-format-text>\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <!-- Load more button for contacts and non-contacts -->\r\n        <ng-container *ngIf=\"item.type != 'messages'\">\r\n            <div class=\"ion-padding-horizontal\" *ngIf=\"item.canLoadMore && !item.loadingMore\">\r\n                <ion-button expand=\"block\" fill=\"outline\" (click)=\"search(query, item.type)\">\r\n                    {{ 'core.loadmore' | translate }}\r\n                </ion-button>\r\n            </div>\r\n            <div *ngIf=\"item.loadingMore\" class=\"ion-padding ion-text-center\">\r\n                <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/addons/messages/guards/index.ts":
/*!*********************************************!*\
  !*** ./src/addons/messages/guards/index.ts ***!
  \*********************************************/
/*! exports provided: AddonMessagesIndexGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesIndexGuard", function() { return AddonMessagesIndexGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/handlers/mainmenu */ "./src/addons/messages/services/handlers/mainmenu.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/messages */ "./src/addons/messages/services/messages.ts");
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
 * Guard to redirect to the right page based on the current Moodle site version.
 */
let AddonMessagesIndexGuard = class AddonMessagesIndexGuard {
    /**
     * @inheritdoc
     */
    canActivate(route) {
        return this.guard(route);
    }
    /**
     * Check if there is a pending redirect and trigger it.
     *
     * @returns The redirection route.
     */
    guard(route) {
        const enabled = _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].isGroupMessagingEnabled();
        const path = `/main/${_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesMainMenuHandlerService"].PAGE_NAME}/` + (enabled ? 'group-conversations' : 'index');
        const newRoute = _singletons__WEBPACK_IMPORTED_MODULE_2__["Router"].parseUrl(path);
        newRoute.queryParams = route.queryParams;
        return newRoute;
    }
};
AddonMessagesIndexGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AddonMessagesIndexGuard);



/***/ }),

/***/ "./src/addons/messages/messages-common.scss":
/*!**************************************************!*\
  !*** ./src/addons/messages/messages-common.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-messages-conversation-item ion-label,\n:host .addon-message-discussion ion-label {\n  margin-right: 0;\n  margin-left: 0;\n}\n:host .addon-messages-conversation-item .item-heading core-format-text,\n:host .addon-message-discussion .item-heading core-format-text {\n  font-weight: bold;\n}\n:host .addon-messages-conversation-item .item-heading ion-icon,\n:host .addon-message-discussion .item-heading ion-icon {\n  margin-left: 2px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .addon-messages-conversation-item .item-heading ion-icon,\n:host .addon-message-discussion .item-heading ion-icon {\n    margin-left: unset;\n    -webkit-margin-start: 2px;\n    margin-inline-start: 2px;\n  }\n}\n:host .addon-messages-conversation-item ion-note,\n:host .addon-message-discussion ion-note {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  margin-left: 2px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .addon-messages-conversation-item ion-note,\n:host .addon-message-discussion ion-note {\n    margin-left: unset;\n    -webkit-margin-start: 2px;\n    margin-inline-start: 2px;\n  }\n}\n:host .addon-messages-conversation-item ion-note ion-badge, :host .addon-messages-conversation-item ion-note ion-icon,\n:host .addon-message-discussion ion-note ion-badge,\n:host .addon-message-discussion ion-note ion-icon {\n  margin-top: 3px;\n  align-self: flex-end;\n}\n:host .addon-messages-conversation-item ion-note .addon-message-last-message-date,\n:host .addon-message-discussion ion-note .addon-message-last-message-date {\n  white-space: nowrap;\n  font-size: 11px;\n}\n:host .addon-messages-conversation-item .addon-message-last-message,\n:host .addon-message-discussion .addon-message-last-message {\n  display: flex;\n  justify-content: flex-start;\n}\n:host .addon-messages-conversation-item .addon-message-last-message-user,\n:host .addon-message-discussion .addon-message-last-message-user {\n  white-space: nowrap;\n  color: var(--ion-text-color);\n  margin-right: 2px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host .addon-messages-conversation-item .addon-message-last-message-user,\n:host .addon-message-discussion .addon-message-last-message-user {\n    margin-right: unset;\n    -webkit-margin-end: 2px;\n    margin-inline-end: 2px;\n  }\n}\n:host .addon-messages-conversation-item .addon-message-last-message-text,\n:host .addon-message-discussion .addon-message-last-message-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n:host .addon-message-discussion .item-heading {\n  margin-top: 10px;\n}\n:host ion-item-divider ion-badge {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvYWRkb25zL21lc3NhZ2VzL21lc3NhZ2VzLWNvbW1vbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBNEdBOztFQUFBO0FDOUdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUMxRFE7O0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFrRFo7QUE5Q1k7O0VBQ0ksaUJBQUE7QUFpRGhCO0FBOUNZOztFTDRPUixnQkszT3VDO0FBaUQzQztBTDhMTTtFQUNFOztJQUVJLGtCQUFBO0lBTUYseUJLeFBpQztJTHlQakMsd0JLelBpQztFQXdEekM7QUFDRjtBQXJEUTs7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFTG9PUixnQktuT21DO0FBd0R2QztBTCtLTTtFQUNFOztJQUVJLGtCQUFBO0lBTUYseUJLaFA2QjtJTGlQN0Isd0JLalA2QjtFQStEckM7QUFDRjtBQTlEWTs7O0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBa0VoQjtBQWhFWTs7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFtRWhCO0FBL0RROztFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQWtFWjtBQS9EUTs7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VMaU5SLGlCS2hOeUM7QUFrRTdDO0FMaUpNO0VBQ0U7O0lBS0ksbUJBQUE7SUFLRix1Qks5Tm1DO0lMK05uQyxzQksvTm1DO0VBeUUzQztBQUNGO0FBdkVROztFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUEwRVo7QUFyRVE7RUFDSSxnQkFBQTtBQXVFWjtBQW5FSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFxRVIiLCJmaWxlIjoic3JjL2FkZG9ucy9tZXNzYWdlcy9tZXNzYWdlcy1jb21tb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XHJcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcclxuXHJcbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXHJcbiAqL1xyXG5cclxuXHJcbi8vIFN0cmluZyBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gU3RyaW5nIFJlcGxhY2UgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICBAaWYgJGluZGV4IHtcclxuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XHJcbiAgLy8gZW1wdHkgYXJyYXkvbGlzdFxyXG4gICRzcGxpdC1hcnI6ICgpO1xyXG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXHJcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcclxuICAgIC8vIGdldCB0aGUgc3Vic3RyaW5nIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlciB0byB0aGUgc2VwYXJhdG9yXHJcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xyXG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XHJcbiAgICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJGl0ZW0pO1xyXG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xyXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xyXG4gICAgLy8gZmluZCBuZXcgaW5kZXggb2Ygc2VwYXJhdG9yXHJcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICB9XHJcbiAgLy8gYWRkIHRoZSByZW1haW5pbmcgc3RyaW5nIHRvIGxpc3QgKHRoZSBsYXN0IGl0ZW0pXHJcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xyXG5cclxuICBAcmV0dXJuICRzcGxpdC1hcnI7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xyXG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XHJcblxyXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xyXG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xyXG4gICAgJGVuZC1pbmRleDogc3RyLWluZGV4KCRwb3N0LCAkZW5kKTtcclxuXHJcbiAgICBAaWYgJGVuZC1pbmRleCB7XHJcbiAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRwb3N0LCAxLCAkZW5kLWluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xyXG4gIEBpZiAodHlwZS1vZigkc3RyaW5nKSA9PSBzdHJpbmcpIHtcclxuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xyXG4gICRzcGFjZXM6IHN0ci1yZXBsYWNlKCR2YWwsIFwiIFwiLCBcIiUyMFwiKTtcclxuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xyXG4gIEByZXR1cm4gJGVuY29kZWQ7XHJcbn1cclxuXHJcblxyXG4vLyBBZGQgUm9vdCBTZWxlY3RvclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxyXG4vL1xyXG4vLyBFeGFtcGxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0XCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCguZml4ZWQpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXHJcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5zaGFkb3dcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBhZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgJGFkZEhvc3RTZWxlY3Rvcikge1xyXG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xyXG5cclxuICAkbGlzdDogKCk7XHJcblxyXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCggaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGEgY2xhc3Mgb24gdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxyXG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KTpob3N0KFwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcblxyXG4gICAgICAkbmV3LWVsZW1lbnQ6ICgpO1xyXG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcclxuXHJcbiAgICAgIEBlYWNoICRlbGVtZW50IGluICRlbGVtZW50cyB7XHJcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG5cclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcganVzdCB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3RcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XHJcbiAgICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gJGxpc3Q7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcclxuICovXHJcblxyXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXHJcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcclxuICBAaWYgJGFscGhhID09IG51bGwge1xyXG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxyXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XHJcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XHJcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xyXG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcclxuXHJcbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcclxuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XHJcbiAgfVxyXG5cclxuICBAaWYgKCRhbHBoYSkge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xyXG4gIH1cclxuICBAaWYgKCRyZ2IpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xyXG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XHJcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi8vIEZvbnQgc21vb3RoaW5nXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcclxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcclxuICAka2V5czogbWFwLWtleXMoJG1hcCk7XHJcblxyXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xyXG59XHJcblxyXG5cclxuLy8gQnJlYWtwb2ludCBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxyXG4vL1xyXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XHJcbi8vXHJcbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuLy9cclxuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDU3NnB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cclxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIi1zbVwiXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1pbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcclxuLy8gICAgbWRcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xyXG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xyXG59XHJcblxyXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxyXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXHJcbi8vXHJcbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcclxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxyXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDc2Ny45OHB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxyXG4vL1xyXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXHJcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG11bHRpLWRpcigpIHtcclxuICBAY29udGVudDtcclxuXHJcbiAgLy8gJHJvb3Q6ICN7Jn07XHJcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xyXG4gIC8vICAgI3skcm9vdH0ge1xyXG4gIC8vICAgICBAY29udGVudDtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuXHJcbkBtaXhpbiBydGwoKSB7XHJcbiAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsdHIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcclxuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xyXG5cclxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcclxuICAgICRmbGlwcGVkLXVybDogJHN2ZztcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xyXG5cclxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgfSBAZWxzZSB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XHJcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xyXG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XHJcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgIHJpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgIGxlZnQ6ICRlbmQ7XHJcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xyXG4gIHRvcDogJHRvcDtcclxuICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XHJcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcclxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XHJcbiAgJG90aGVyLWRpcjogbnVsbDtcclxuXHJcbiAgQGlmICRkaXIgPT0gbHRyIHtcclxuICAgICRvdGhlci1kaXI6IHJ0bDtcclxuICB9IEBlbHNlIHtcclxuICAgICRvdGhlci1kaXI6IGx0cjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGx0cigpIHtcclxuICAgIGRpcmVjdGlvbjogJGRpcjtcclxuICB9XHJcbiAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XHJcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xyXG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XHJcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XHJcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XHJcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XHJcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xyXG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XHJcbiAgJGV4dHJhOiBudWxsO1xyXG5cclxuICAkeDogbnVsbDtcclxuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcclxuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcclxuXHJcbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XHJcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xyXG5cclxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcclxuXHJcbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcclxuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xyXG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XHJcblxyXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XHJcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIFJlc3BvbnNpdmUgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcclxuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBJdGVtIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XHJcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XHJcbn1cclxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XHJcblxyXG4vKipcclxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKi9cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XHJcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA4MCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xyXG59XHJcblxyXG4vLyBJb25pYyBDb2xvcnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXHJcbi8vIGNvbG9ycyBtYXBcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycywgJHRoZW1lKSB7XHJcbiAgICAkY29sb3ItdGhlbWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvci10aGVtZXMsICR0aGVtZSk7XHJcblxyXG4gICAgQGlmICR0aGVtZSA9PSAnZGFyaycge1xyXG4gICAgICAgICRiYXNlOiBtaXgobWFwLWdldCgkY29sb3ItdGhlbWVzLCAnbGlnaHQnKSwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKTtcclxufVxyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xyXG4gICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xyXG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XHJcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XHJcblxyXG4gICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG4gICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xyXG5cclxuICAgIC8vIEludGVybmFsIGlvbmljIHVzZSBvbmx5LlxyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcblxyXG4gICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcclxuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWZvY3VzKCkge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxyXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xyXG4gICAgJHRyYW5zaXRpb25zOiAoKTtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbn1cclxuXHJcbkBtaXhpbiBzci1vbmx5KCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxyXG4gKi9cclxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG5cclxuICAgIEBpZiAoJGVuZCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcbiAgICB9XHJcbiAgICBAaWYgKCRzdGFydCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRhcmttb2RlKCkge1xyXG4gICAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJodG1sLmRhcmtcIil9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XHJcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xyXG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ29sb3IgbWl4aW5zLlxyXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XHJcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcclxufVxyXG5cclxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XHJcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xyXG5cclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXHJcbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXHJcbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcclxufVxyXG5cclxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xyXG59XHJcblxyXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yaXRobVxyXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XHJcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xyXG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XHJcblxyXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcclxuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xyXG4gICAgJHI6IHJlZCgkY29sb3IpO1xyXG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XHJcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xyXG5cclxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcclxuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcclxuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcclxuXHJcbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XHJcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcclxuXHJcbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XHJcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXHJcbiAqL1xyXG4iLCIvKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxyXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xyXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxyXG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXHJcblxyXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XHJcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXHJcbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcclxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAgKFxyXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxyXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXHJcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcclxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxyXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcclxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxyXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXHJcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcclxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vKipcclxuICogTGF5b3V0IEJyZWFrcG9pbnRzXHJcbiAqXHJcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xyXG4gKi9cclxuXHJcbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMHB4LFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1xcmNvZGU6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xyXG5cclxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXHJcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcclxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXHJcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxyXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcclxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXHJcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeTogIzhlMjRhYSAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZTogJHJlZCAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWdyb3VwOiAkeWVsbG93ICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcjogJGJsdWUgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlOiAkZ3JlZW4gIWRlZmF1bHQ7XHJcblxyXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxyXG4gICAgY2F0ZWdvcnk6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeSxcclxuICAgIGNvdXJzZTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZSxcclxuICAgIGdyb3VwOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktZ3JvdXAsXHJcbiAgICB1c2VyOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcixcclxuICAgIHNpdGU6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlLFxyXG4pICFkZWZhdWx0O1xyXG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIC5hZGRvbi1tZXNzYWdlcy1jb252ZXJzYXRpb24taXRlbSxcclxuICAgIC5hZGRvbi1tZXNzYWdlLWRpc2N1c3Npb24ge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgY29yZS1mb3JtYXQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoMnB4LCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLW5vdGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgycHgsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgaW9uLWJhZGdlLCBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWRkb24tbWVzc2FnZS1sYXN0LW1lc3NhZ2UtZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkb24tbWVzc2FnZS1sYXN0LW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkb24tbWVzc2FnZS1sYXN0LW1lc3NhZ2UtdXNlciB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIDJweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkb24tbWVzc2FnZS1sYXN0LW1lc3NhZ2UtdGV4dCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1lc3NhZ2UtZGlzY3Vzc2lvbiB7XHJcbiAgICAgICAgLml0ZW0taGVhZGluZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtLWRpdmlkZXIgaW9uLWJhZGdlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/addons/messages/messages-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/messages/messages-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonMessagesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesLazyModule", function() { return AddonMessagesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _addons_messages_pages_contacts_35_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/messages/pages/contacts-35/contacts */ "./src/addons/messages/pages/contacts-35/contacts.ts");
/* harmony import */ var _addons_messages_pages_contacts_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/messages/pages/contacts/contacts */ "./src/addons/messages/pages/contacts/contacts.ts");
/* harmony import */ var _addons_messages_pages_discussion_discussion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/pages/discussion/discussion */ "./src/addons/messages/pages/discussion/discussion.ts");
/* harmony import */ var _addons_messages_pages_discussions_35_discussions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/messages/pages/discussions-35/discussions */ "./src/addons/messages/pages/discussions-35/discussions.ts");
/* harmony import */ var _addons_messages_pages_group_conversations_group_conversations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/messages/pages/group-conversations/group-conversations */ "./src/addons/messages/pages/group-conversations/group-conversations.ts");
/* harmony import */ var _addons_messages_pages_search_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @addons/messages/pages/search/search */ "./src/addons/messages/pages/search/search.ts");
/* harmony import */ var _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @addons/messages/services/handlers/mainmenu */ "./src/addons/messages/services/handlers/mainmenu.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/search/components/components.module */ "./src/core/features/search/components/components.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards */ "./src/addons/messages/guards/index.ts");
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
    const discussionRoutes = [
        {
            path: 'discussion/user/:userId',
            component: _addons_messages_pages_discussion_discussion__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesDiscussionPage"],
        },
        {
            path: 'discussion/:conversationId',
            component: _addons_messages_pages_discussion_discussion__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesDiscussionPage"],
        },
    ];
    const mobileRoutes = [
        {
            path: 'contacts',
            component: _addons_messages_pages_contacts_contacts__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesContactsPage"],
        },
        {
            path: 'index',
            data: { mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__["AddonMessagesMainMenuHandlerService"].PAGE_NAME },
            component: _addons_messages_pages_discussions_35_discussions__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesDiscussions35Page"],
        },
        {
            path: 'contacts-35',
            component: _addons_messages_pages_contacts_35_contacts__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesContacts35Page"],
        },
        {
            path: 'group-conversations',
            data: { mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__["AddonMessagesMainMenuHandlerService"].PAGE_NAME },
            component: _addons_messages_pages_group_conversations_group_conversations__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesGroupConversationsPage"],
        },
        {
            path: 'search',
            component: _addons_messages_pages_search_search__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
        },
    ]
        .reduce((routes, mobileRoute) => [
        ...routes,
        mobileRoute,
        ...discussionRoutes.map(discussionRoute => (Object.assign(Object.assign({}, discussionRoute), { path: `${mobileRoute.path}/${discussionRoute.path}` }))),
    ], []);
    const tabletRoutes = [
        {
            path: 'contacts',
            component: _addons_messages_pages_contacts_contacts__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesContactsPage"],
            children: discussionRoutes,
        },
        {
            path: 'index',
            data: { mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__["AddonMessagesMainMenuHandlerService"].PAGE_NAME },
            component: _addons_messages_pages_discussions_35_discussions__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesDiscussions35Page"],
            children: discussionRoutes,
        },
        {
            path: 'contacts-35',
            component: _addons_messages_pages_contacts_35_contacts__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesContacts35Page"],
            children: discussionRoutes,
        },
        {
            path: 'group-conversations',
            data: { mainMenuTabRoot: _addons_messages_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_9__["AddonMessagesMainMenuHandlerService"].PAGE_NAME },
            component: _addons_messages_pages_group_conversations_group_conversations__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesGroupConversationsPage"],
            children: discussionRoutes,
        },
        {
            path: 'search',
            component: _addons_messages_pages_search_search__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
            children: discussionRoutes,
        },
    ];
    return [
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_15__["CoreScreen"].isMobile),
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_15__["CoreScreen"].isTablet),
        ...discussionRoutes,
        {
            path: 'message-settings',
            loadChildren: () => __webpack_require__.e(/*! import() | messages-settings-lazy-module */ "messages-settings-lazy-module").then(__webpack_require__.bind(null, /*! ./messages-settings-lazy.module */ "./src/addons/messages/messages-settings-lazy.module.ts")).then(m => m.AddonMessagesSettingsLazyModule),
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_13__["buildTabMainRoutes"])(injector, {
            canActivate: [_guards__WEBPACK_IMPORTED_MODULE_16__["AddonMessagesIndexGuard"]],
        }),
    ];
}
let AddonMessagesLazyModule = class AddonMessagesLazyModule {
};
AddonMessagesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _features_search_components_components_module__WEBPACK_IMPORTED_MODULE_14__["CoreSearchComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_12__["CoreMainMenuComponentsModule"],
        ],
        declarations: [
            _addons_messages_pages_contacts_35_contacts__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesContacts35Page"],
            _addons_messages_pages_contacts_contacts__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesContactsPage"],
            _addons_messages_pages_discussion_discussion__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesDiscussionPage"],
            _addons_messages_pages_discussions_35_discussions__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesDiscussions35Page"],
            _addons_messages_pages_group_conversations_group_conversations__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesGroupConversationsPage"],
            _addons_messages_pages_search_search__WEBPACK_IMPORTED_MODULE_8__["AddonMessagesSearchPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], AddonMessagesLazyModule);



/***/ }),

/***/ "./src/addons/messages/pages/contacts-35/contacts.ts":
/*!***********************************************************!*\
  !*** ./src/addons/messages/pages/contacts-35/contacts.ts ***!
  \***********************************************************/
/*! exports provided: AddonMessagesContacts35Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesContacts35Page", function() { return AddonMessagesContacts35Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
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
 * Page that displays the list of contacts.
 */
let AddonMessagesContacts35Page = class AddonMessagesContacts35Page {
    constructor(route) {
        this.route = route;
        this.noSearchTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.loaded = false;
        this.contactTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.searchType = 'search';
        this.loadingMessage = '';
        this.hasContacts = false;
        this.contacts = {
            online: [],
            offline: [],
            strangers: [],
            search: [],
        };
        this.searchString = '';
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId();
        this.searchingMessages = _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.searching');
        this.loadingMessages = _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.loading');
        this.loadingMessage = this.loadingMessages;
        // Refresh the list when a contact request is confirmed.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.contactRequestConfirmed) {
                this.refreshData();
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const discussionUserId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('discussionUserId') ||
                _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('userId') || undefined;
            if (this.loaded && this.discussionUserId == discussionUserId) {
                return;
            }
            this.discussionUserId = discussionUserId;
            if (this.discussionUserId) {
                // There is a discussion to load, open the discussion in a new state.
                this.gotoDiscussion(this.discussionUserId);
            }
            try {
                yield this.fetchData();
                if (!this.discussionUserId && this.hasContacts && _services_screen__WEBPACK_IMPORTED_MODULE_9__["CoreScreen"].isTablet) {
                    let contact;
                    for (const x in this.contacts) {
                        if (this.contacts[x].length > 0) {
                            contact = this.contacts[x][0];
                            break;
                        }
                    }
                    if (contact) {
                        // Take first and load it.
                        this.gotoDiscussion(contact.id);
                    }
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @returns Promise resolved when done.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.searchString) {
                    // User has searched, update the search.
                    yield this.performSearch(this.searchString);
                }
                else {
                    // Update contacts.
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessages"].invalidateAllContactsCache();
                    yield this.fetchData();
                }
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Fetch contacts.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingMessage = this.loadingMessages;
            try {
                const contacts = yield _services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessages"].getAllContacts();
                for (const x in contacts) {
                    if (contacts[x].length > 0) {
                        this.contacts[x] = this.sortUsers(contacts[x]);
                    }
                    else {
                        this.contacts[x] = [];
                    }
                }
                this.clearSearch();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Sort user list by fullname
     *
     * @param list List to sort.
     * @returns Sorted list.
     */
    sortUsers(list) {
        return list.sort((a, b) => {
            const compareA = a.fullname.toLowerCase();
            const compareB = b.fullname.toLowerCase();
            return compareA.localeCompare(compareB);
        });
    }
    /**
     * Clear search and show all contacts again.
     */
    clearSearch() {
        this.searchString = ''; // Reset searched string.
        this.contactTypes = this.noSearchTypes;
        this.hasContacts = false;
        for (const x in this.contacts) {
            if (this.contacts[x].length > 0) {
                this.hasContacts = true;
                return;
            }
        }
    }
    /**
     * Search users from the UI.
     *
     * @param query Text to search for.
     * @returns Resolved when done.
     */
    search(query) {
        _services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.searchingMessages;
        return this.performSearch(query).finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Perform the search of users.
     *
     * @param query Text to search for.
     * @returns Resolved when done.
     */
    performSearch(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_3__["AddonMessages"].searchContacts(query);
                this.hasContacts = result.length > 0;
                this.searchString = query;
                this.contactTypes = ['search'];
                this.contacts.search = this.sortUsers(result);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Navigate to a particular discussion.
     *
     * @param discussionUserId Discussion Id to load.
     */
    gotoDiscussion(discussionUserId) {
        this.discussionUserId = discussionUserId;
        const path = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRelativePathToParent('/messages/contacts-35') + `discussion/user/${discussionUserId}`;
        // @todo Check why this is failing on ngInit.
        _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].navigate(path, {
            reset: _services_screen__WEBPACK_IMPORTED_MODULE_9__["CoreScreen"].isTablet && !!this.splitView && !this.splitView.isNested,
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.memberInfoObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonMessagesContacts35Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
AddonMessagesContacts35Page.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_11__["CoreSplitViewComponent"],] }]
};
AddonMessagesContacts35Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addon-messages-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts-35/contacts.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesContacts35Page);



/***/ }),

/***/ "./src/addons/messages/pages/contacts/contacts.ts":
/*!********************************************************!*\
  !*** ./src/addons/messages/pages/contacts/contacts.ts ***!
  \********************************************************/
/*! exports provided: AddonMessagesContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesContactsPage", function() { return AddonMessagesContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
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
 * Page that displays contacts and contact requests.
 */
let AddonMessagesContactsPage = class AddonMessagesContactsPage {
    constructor() {
        this.selected = 'confirmed';
        this.requestsBadge = '';
        this.confirmedLoaded = false;
        this.confirmedInitialising = false;
        this.confirmedCanLoadMore = false;
        this.confirmedLoadMoreError = false;
        this.confirmedContacts = [];
        this.requestsLoaded = false;
        this.requestsInitialising = false;
        this.requestsCanLoadMore = false;
        this.requestsLoadMoreError = false;
        this.requests = [];
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId();
        // Update the contact requests badge.
        this.contactRequestsCountObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].CONTACT_REQUESTS_COUNT_EVENT, (data) => {
            this.requestsBadge = data.count > 0 ? String(data.count) : '';
        }, this.siteId);
        // Update block status of a user.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.userBlocked || data.userUnblocked) {
                const user = this.confirmedContacts.find((user) => user.id == data.userId);
                if (user) {
                    user.isblocked = !!data.userBlocked;
                }
            }
            else if (data.contactRemoved) {
                const index = this.confirmedContacts.findIndex((contact) => contact.id == data.userId);
                if (index >= 0) {
                    this.confirmedContacts.splice(index, 1);
                }
            }
            else if (data.contactRequestConfirmed) {
                this.confirmedFetchData(true);
            }
            if (data.contactRequestConfirmed || data.contactRequestDeclined) {
                const index = this.requests.findIndex((request) => request.id == data.userId);
                if (index >= 0) {
                    this.requests.splice(index, 1);
                }
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Page being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getContactRequestsCount(this.siteId); // Badge already updated by the observer.
            this.selected === 'confirmed'
                ? yield this.initConfirmed()
                : yield this.initRequests();
        });
    }
    /**
     * Initialise confirmed contacts.
     */
    initConfirmed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.confirmedInitialising) {
                return;
            }
            try {
                this.confirmedInitialising = true;
                yield this.confirmedFetchData();
                if (this.confirmedContacts.length && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet) {
                    this.selectUser(this.confirmedContacts[0].id, true);
                }
            }
            finally {
                this.confirmedInitialising = false;
                this.confirmedLoaded = true;
            }
        });
    }
    /**
     * Initialise contact requests.
     */
    initRequests() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.requestsInitialising) {
                return;
            }
            try {
                this.requestsInitialising = true;
                yield this.requestsFetchData();
                if (this.requests.length && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet) {
                    this.selectUser(this.requests[0].id, true);
                }
            }
            finally {
                this.requestsInitialising = false;
                this.requestsLoaded = true;
            }
        });
    }
    /**
     * Fetch contacts.
     *
     * @param refresh True if we are refreshing contacts, false if we are loading more.
     * @returns Promise resolved when done.
     */
    confirmedFetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.confirmedLoadMoreError = false;
            const limitFrom = refresh ? 0 : this.confirmedContacts.length;
            if (limitFrom === 0) {
                // Always try to get latest data from server.
                yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateUserContacts();
            }
            try {
                const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getUserContacts(limitFrom);
                this.confirmedContacts = refresh ? result.contacts : this.confirmedContacts.concat(result.contacts);
                this.confirmedCanLoadMore = result.canLoadMore;
            }
            catch (error) {
                this.confirmedLoadMoreError = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Fetch contact requests.
     *
     * @param refresh True if we are refreshing contact requests, false if we are loading more.
     * @returns Promise resolved when done.
     */
    requestsFetchData(refresh = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.requestsLoadMoreError = false;
            const limitFrom = refresh ? 0 : this.requests.length;
            if (limitFrom === 0) {
                // Always try to get latest data from server.
                yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateContactRequestsCache();
            }
            try {
                const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getContactRequests(limitFrom);
                this.requests = refresh ? result.requests : this.requests.concat(result.requests);
                this.requestsCanLoadMore = result.canLoadMore;
            }
            catch (error) {
                this.requestsLoadMoreError = true;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
            }
        });
    }
    /**
     * Refresh contacts or requests.
     *
     * @param refresher Refresher.
     * @returns Promise resolved when done.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.selected == 'confirmed') {
                    // No need to invalidate contacts, we always try to get the latest.
                    yield this.confirmedFetchData(true);
                }
                else {
                    // Refresh the number of contacts requests to update badges.
                    _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].refreshContactRequestsCount();
                    // No need to invalidate contact requests, we always try to get the latest.
                    yield this.requestsFetchData(true);
                }
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Load more contacts or requests.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @returns Resolved when done.
     */
    loadMore(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.selected == 'confirmed') {
                    // No need to invalidate contacts, we always try to get the latest.
                    yield this.confirmedFetchData();
                }
                else {
                    yield this.requestsFetchData();
                }
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Navigate to the search page.
     */
    gotoSearch() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSitePath('search');
    }
    selectTab(selected) {
        if (selected !== 'confirmed' && selected !== 'requests') {
            return;
        }
        this.selected = selected;
        if (this.selected == 'confirmed' && !this.confirmedLoaded) {
            this.initConfirmed();
        }
        if (this.selected == 'requests' && !this.requestsLoaded) {
            this.initRequests();
        }
    }
    /**
     * Set the selected user and open the conversation in the split view if needed.
     *
     * @param userId Id of the selected user, undefined to use the last selected user in the tab.
     * @param onInit Whether the contact was selected on initial load.
     */
    selectUser(userId, onInit = false) {
        if (userId == this.selectedUserId && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet) {
            // No user conversation to open or it is already opened.
            return;
        }
        if (onInit && _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isMobile) {
            // Do not open a conversation by default when split view is not visible.
            return;
        }
        this.selectedUserId = userId;
        const path = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRelativePathToParent('/messages/contacts') + `discussion/user/${userId}`;
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigate(path, {
            reset: _services_screen__WEBPACK_IMPORTED_MODULE_6__["CoreScreen"].isTablet && !!this.splitView && !this.splitView.isNested,
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.contactRequestsCountObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonMessagesContactsPage.ctorParameters = () => [];
AddonMessagesContactsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_8__["CoreSplitViewComponent"],] }]
};
AddonMessagesContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-contacts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/contacts/contacts.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesContactsPage);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.scss":
/*!**************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\nion-content {\n  --content-background: var(--background-alternative);\n  --background: var(--content-background);\n}\nion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n.addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px !important;\n  background: var(--content-background);\n}\n.addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-messages-unreadfrom {\n  color: var(--primary);\n  background-color: transparent;\n  margin-top: 6px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host .addon-messages-unreadfrom ion-icon {\n  color: var(--primary);\n  background-color: transparent;\n}\n:host .has-fab .scroll-content {\n  padding-bottom: 0;\n}\n:host ion-fab .core-discussion-messages-badge {\n  position: absolute;\n  color: var(--addon-messages-discussion-badge-text);\n  background-color: var(--addon-messages-discussion-badge);\n  display: block;\n  right: 0;\n  top: 0;\n}\n:host-context([dir=rtl]) ion-fab .core-discussion-messages-badge {\n  left: unset;\n  right: unset;\n  left: 0;\n}\n:host ion-header ion-toolbar ion-title {\n  padding: 0;\n}\n:host ion-header ion-toolbar ion-title h1 {\n  display: flex;\n  align-items: center;\n  padding: 0;\n}\n:host ion-header ion-toolbar ion-title h1 .core-bar-button-image {\n  margin-right: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar ion-title h1 .core-bar-button-image {\n    margin-right: unset;\n    -webkit-margin-end: 6px;\n    margin-inline-end: 6px;\n  }\n}\n:host ion-header ion-toolbar ion-title h1 core-format-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n  display: block;\n}\n:host ion-header ion-toolbar ion-title h1 ion-icon {\n  margin-left: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar ion-title h1 ion-icon {\n    margin-left: unset;\n    -webkit-margin-start: 6px;\n    margin-inline-start: 6px;\n  }\n}\n:host-context(.ios) ion-header ion-toolbar h1 {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3MiLCJzcmMvYWRkb25zL21lc3NhZ2VzL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBNEdBOztFQUFBO0FDOUdBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM1REk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNtRFI7QUQvQ0E7RUFDSSxtREFBQTtFQUNBLHVDQUFBO0FDa0RKO0FEaERJO0VBQ0ksNEJBQUE7QUNrRFI7QUQ5Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FDaURKO0FEOUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ2lESjtBVDVFQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQTRHQTs7RUFBQTtBQzlHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FFMURJO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBK0hSO0FBOUhRO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtBQWdJWjtBQTVIRztFQUNLLGlCQUFBO0FBOEhSO0FBM0hJO0VBQ0ksa0JBQUE7RUFDQSxrREFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FBQTtFTndURixRTXZUdUI7RU4yVTNCLE1NM1V3QjtBQThIMUI7QU5tRFc7RUF5SUwsV0FBQTtFQUNBLFlBQUE7RUFFQSxPTTdUdUI7QUFtSTdCO0FBaElJO0VBQ0ksVUFBQTtBQW1JUjtBQWpJUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFtSVo7QUFqSVk7RU51TlIsaUJNdE42QztBQW1JakQ7QU5zRk07RUFDRTtJQUtJLG1CQUFBO0lBS0YsdUJNcE91QztJTnFPdkMsc0JNck91QztFQXlJL0M7QUFDRjtBQXZJWTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBeUloQjtBQXRJWTtFTjBNUixnQk16TXVDO0FBd0kzQztBTnFFTTtFQUNFO0lBRUksa0JBQUE7SUFNRix5Qk10TmlDO0lOdU5qQyx3Qk12TmlDO0VBOEl6QztBQUNGO0FBeElJO0VBQ0ksdUJBQUE7QUEySVIiLCJmaWxlIjoic3JjL2FkZG9ucy9tZXNzYWdlcy9wYWdlcy9kaXNjdXNzaW9uL2Rpc2N1c3Npb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxyXG4gKi9cclxuXHJcbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XHJcbiRhc3NldHMtcGF0aDogXCIuLi9hc3NldHNcIjtcclxuXHJcbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMuY3VzdG9tLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xyXG4iLCIvKipcclxuICogSW1wb3J0ZWQgaW9uaWMgc3RyaW5nIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLnN0cmluZy5zY3NzXHJcbiAqL1xyXG5cclxuXHJcbi8vIFN0cmluZyBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gU3RyaW5nIFJlcGxhY2UgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xyXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuICBAaWYgJGluZGV4IHtcclxuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuQGZ1bmN0aW9uIHN0ci1zcGxpdCgkc3RyaW5nLCAkc2VwYXJhdG9yKSB7XHJcbiAgLy8gZW1wdHkgYXJyYXkvbGlzdFxyXG4gICRzcGxpdC1hcnI6ICgpO1xyXG4gIC8vIGZpcnN0IGluZGV4IG9mIHNlcGFyYXRvciBpbiBzdHJpbmdcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXHJcbiAgQHdoaWxlICRpbmRleCAhPSBudWxsIHtcclxuICAgIC8vIGdldCB0aGUgc3Vic3RyaW5nIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlciB0byB0aGUgc2VwYXJhdG9yXHJcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xyXG4gICAgLy8gcHVzaCBpdGVtIHRvIGFycmF5XHJcbiAgICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJGl0ZW0pO1xyXG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xyXG4gICAgJHN0cmluZzogc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIDEpO1xyXG4gICAgLy8gZmluZCBuZXcgaW5kZXggb2Ygc2VwYXJhdG9yXHJcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcclxuICB9XHJcbiAgLy8gYWRkIHRoZSByZW1haW5pbmcgc3RyaW5nIHRvIGxpc3QgKHRoZSBsYXN0IGl0ZW0pXHJcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xyXG5cclxuICBAcmV0dXJuICRzcGxpdC1hcnI7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xyXG4gICRzdGFydC1pbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzdGFydCk7XHJcblxyXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xyXG4gICAgJHBvc3Q6IHN0ci1zbGljZSgkc3RyaW5nLCAkc3RhcnQtaW5kZXggKyBzdHItbGVuZ3RoKCRzdGFydCkpO1xyXG4gICAgJGVuZC1pbmRleDogc3RyLWluZGV4KCRwb3N0LCAkZW5kKTtcclxuXHJcbiAgICBAaWYgJGVuZC1pbmRleCB7XHJcbiAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRwb3N0LCAxLCAkZW5kLWluZGV4IC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBTdHJpbmcgQ29udGFpbnMgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItY29udGFpbnMoJHN0cmluZywgJG5lZWRsZSkge1xyXG4gIEBpZiAodHlwZS1vZigkc3RyaW5nKSA9PSBzdHJpbmcpIHtcclxuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5cclxuLy8gVVJMIEVuY29kZSBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQGZ1bmN0aW9uIHVybC1lbmNvZGUoJHZhbCkge1xyXG4gICRzcGFjZXM6IHN0ci1yZXBsYWNlKCR2YWwsIFwiIFwiLCBcIiUyMFwiKTtcclxuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xyXG4gIEByZXR1cm4gJGVuY29kZWQ7XHJcbn1cclxuXHJcblxyXG4vLyBBZGQgUm9vdCBTZWxlY3RvclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBZGRzIGEgcm9vdCBzZWxlY3RvciB1c2luZyBob3N0LWNvbnRleHQgYmFzZWQgb24gdGhlIHNlbGVjdG9yIHBhc3NlZFxyXG4vL1xyXG4vLyBFeGFtcGxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0XCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCguZml4ZWQpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZml4ZWRcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXHJcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSlcclxuLy9cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXHJcbi8vIC0tPiBbZGlyPXJ0bF0gLnNoYWRvd1xyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5zaGFkb3dcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBhZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgJGFkZEhvc3RTZWxlY3Rvcikge1xyXG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xyXG5cclxuICAkbGlzdDogKCk7XHJcblxyXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCggaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGEgY2xhc3Mgb24gdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxyXG4gICAgQGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KTpob3N0KFwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcblxyXG4gICAgICAkbmV3LWVsZW1lbnQ6ICgpO1xyXG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcclxuXHJcbiAgICAgIEBlYWNoICRlbGVtZW50IGluICRlbGVtZW50cyB7XHJcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiAkZWxlbWVudDtcclxuXHJcbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcclxuICAgICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiKSlcIiwgXCIpXCIpO1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG5cclxuICAgICAgICAgICRuZXctZWxlbWVudDogYXBwZW5kKCRuZXctZWxlbWVudCwgJHNjb3BlZC1lbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkbmV3LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcganVzdCB0aGUgaG9zdFxyXG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0XCIpIHtcclxuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3RcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcclxuICAgICAgLy8gSWYgdGhlIHNlbGVjdG9yIGRvZXMgbm90IGNvbnRhaW4gaG9zdCBhdCBhbGwgaXQgaXMgZWl0aGVyIGEgc2hhZG93XHJcbiAgICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiI3skYWRkSG9zdFNlbGVjdG9yfSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEByZXR1cm4gJGxpc3Q7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcclxuICovXHJcblxyXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXHJcbi8vIGN1cnJlbnQtY29sb3IoY29udHJhc3QsIDAuMSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xKVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcclxuICBAaWYgJGFscGhhID09IG51bGwge1xyXG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuIHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0tcmdiKSwgI3skYWxwaGF9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxyXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcclxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UsIDAuNSkgPT4gcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSksIDAuNSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XHJcbiAgJHZhbHVlczogbWFwLWdldCgkY29sb3JzLCAkbmFtZSk7XHJcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xyXG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcclxuXHJcbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcclxuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XHJcbiAgfVxyXG5cclxuICBAaWYgKCRhbHBoYSkge1xyXG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xyXG4gIH1cclxuICBAaWYgKCRyZ2IpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xyXG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XHJcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi8vIEZvbnQgc21vb3RoaW5nXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcclxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcclxuICAka2V5czogbWFwLWtleXMoJG1hcCk7XHJcblxyXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xyXG59XHJcblxyXG5cclxuLy8gQnJlYWtwb2ludCBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxyXG4vL1xyXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XHJcbi8vXHJcbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcclxuLy9cclxuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDU3NnB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cclxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIi1zbVwiXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICBAaWYgJG1pbiB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcclxuLy8gICAgbWRcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xyXG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xyXG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xyXG59XHJcblxyXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxyXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXHJcbi8vXHJcbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcclxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxyXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIDc2Ny45OHB4XHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cclxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxyXG4vL1xyXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXHJcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG11bHRpLWRpcigpIHtcclxuICBAY29udGVudDtcclxuXHJcbiAgLy8gJHJvb3Q6ICN7Jn07XHJcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xyXG4gIC8vICAgI3skcm9vdH0ge1xyXG4gIC8vICAgICBAY29udGVudDtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuXHJcbkBtaXhpbiBydGwoKSB7XHJcbiAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiW2Rpcj1ydGxdXCIpfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsdHIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcclxuICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xyXG5cclxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcclxuICAgICRmbGlwcGVkLXVybDogJHN2ZztcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xyXG5cclxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgfSBAZWxzZSB7XHJcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XHJcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgICBAYXQtcm9vdCB7XHJcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XHJcbiAgI3skcHJvcH0tdG9wOiAkdG9wO1xyXG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XHJcbiAgQGlmICRzdGFydCA9PSAkZW5kIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICByaWdodDogJGVuZDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgIHJpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgIGxlZnQ6ICRlbmQ7XHJcbiAgICAgIHJpZ2h0OiAkc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xyXG4gIHRvcDogJHRvcDtcclxuICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XHJcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcclxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XHJcbiAgJG90aGVyLWRpcjogbnVsbDtcclxuXHJcbiAgQGlmICRkaXIgPT0gbHRyIHtcclxuICAgICRvdGhlci1kaXI6IHJ0bDtcclxuICB9IEBlbHNlIHtcclxuICAgICRvdGhlci1kaXI6IGx0cjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGx0cigpIHtcclxuICAgIGRpcmVjdGlvbjogJGRpcjtcclxuICB9XHJcbiAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XHJcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xyXG4gIEBpZiAkc2lkZSA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XHJcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XHJcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XHJcbiAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XHJcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xyXG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcclxuICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xyXG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XHJcbiAgJGV4dHJhOiBudWxsO1xyXG5cclxuICAkeDogbnVsbDtcclxuICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcclxuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcclxuXHJcbiAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XHJcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xyXG4gICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xyXG5cclxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcclxuXHJcbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcclxuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xyXG4gICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XHJcblxyXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbiAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XHJcbiAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRXh0cmFjdGVkIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xyXG4gKi9cclxuXHJcbi8vIFJlc3BvbnNpdmUgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcclxuICAgICAgd2lkdGg6ICR3aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcclxuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBJdGVtIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XHJcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XHJcbn1cclxuIiwiQHVzZSBcInNhc3M6bWF0aFwiIGFzIG1hdGg7XHJcblxyXG4vKipcclxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKi9cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCA2LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XHJcbiAgICBAcmV0dXJuIG1peCgjMDAwLCAkY29sb3IsICRwZXJjZW50KTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkY29sb3IsICRwZXJjZW50OiA4MCUpIHtcclxuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xyXG59XHJcblxyXG4vLyBJb25pYyBDb2xvcnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXHJcbi8vIGNvbG9ycyBtYXBcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9ycywgJHRoZW1lKSB7XHJcbiAgICAkY29sb3ItdGhlbWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvci10aGVtZXMsICR0aGVtZSk7XHJcblxyXG4gICAgQGlmICR0aGVtZSA9PSAnZGFyaycge1xyXG4gICAgICAgICRiYXNlOiBtaXgobWFwLWdldCgkY29sb3ItdGhlbWVzLCAnbGlnaHQnKSwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKTtcclxufVxyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xyXG4gICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xyXG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XHJcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XHJcblxyXG4gICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG4gICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xyXG5cclxuICAgIC8vIEludGVybmFsIGlvbmljIHVzZSBvbmx5LlxyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XHJcblxyXG4gICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcclxuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWZvY3VzKCkge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxyXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xyXG4gICAgJHRyYW5zaXRpb25zOiAoKTtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XHJcbn1cclxuXHJcbkBtaXhpbiBzci1vbmx5KCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhbWUgYXMgaXRlbS1wdXNoLXN2Zy11cmwgYnV0IGFkbWl0cyBmbGlwLXJ0bFxyXG4gKi9cclxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XHJcblxyXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsICRweCAkdHlwZSAkY29sb3IsIG51bGwpO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG5cclxuICAgIEBpZiAoJGVuZCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcbiAgICB9XHJcbiAgICBAaWYgKCRzdGFydCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1zdGFydCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgIH1cclxuICAgIEBpZiAoJHN0YXJ0KSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oJHRvcCwgJHNhZmUtYXJlYS1lbmQsICRib3R0b20sICRzYWZlLWFyZWEtc3RhcnQpO1xyXG59XHJcblxyXG5AbWl4aW4gY29yZS1oZWFkaW5ncygpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRhcmttb2RlKCkge1xyXG4gICAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gICAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJodG1sLmRhcmtcIil9IHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XHJcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xyXG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ29sb3IgbWl4aW5zLlxyXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XHJcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcclxufVxyXG5cclxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XHJcbiAgICAkbHVtaWFuY2U6IGx1bWluYW5jZSgkY29sb3IpO1xyXG5cclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXHJcbiAgICAkd2hpdGVDb250cmFzdDogKCRsdW1pYW5jZSArIDAuMDUpIC8gKDEgKyAwLjA1KTtcclxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXHJcbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcclxufVxyXG5cclxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXHJcbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XHJcbiAgICAkcjogcmVkKCRjb2xvcik7XHJcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcclxuICAgICRiOiBibHVlKCRjb2xvcik7XHJcblxyXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xyXG5cclxuICAgIEByZXR1cm4gaWYoJHlpcSA+PSAxMjgsICRkYXJrLCAkbGlnaHQpO1xyXG59XHJcblxyXG4vLyBXQ0FHIGNvbnRyYXN0IGFsZ29yaXRobVxyXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XHJcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xyXG4gICAgJGJhY2tncm91bmRMdW1pbmFuY2U6IGx1bWluYW5jZSgkYmFja2dyb3VuZCk7XHJcblxyXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcclxuICAgICAgICBAcmV0dXJuICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpIC8gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gbHVtaW5hbmNlKCRjb2xvcikge1xyXG4gICAgJHI6IHJlZCgkY29sb3IpO1xyXG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XHJcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xyXG5cclxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcclxuICAgICRnOiBjb21wb25lbnQtbHVtaW5hbmNlKCRnKTtcclxuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcclxuXHJcbiAgICBAcmV0dXJuICRyICogMC4yMTI2ICsgJGcgKiAwLjcxNTIgKyAkYiAqIDAuMDcyMjtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGNvbXBvbmVudC1sdW1pbmFuY2UoJHZhbHVlKSB7XHJcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcclxuXHJcbiAgICBAaWYgKCR2YWx1ZSA8PSAwLjAzOTI4KSB7XHJcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEByZXR1cm4gbWF0aC5wb3coKCR2YWx1ZSArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXHJcbiAqL1xyXG4iLCIvKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogICAgI2Y4ZjlmYSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxyXG4kZ3JheS00MDA6ICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xyXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogICAgIzQ5NTA1NyAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxyXG4kYmxhY2s6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7IC8vIEF2b2lkIHVzYWdlXHJcblxyXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XHJcbiRjeWFuOiAgICAgICAgIzAwODE5NiAhZGVmYXVsdDsgLy8gTm90IHVzZWQuXHJcbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcclxuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xyXG4keWVsbG93OiAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcclxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xyXG5cclxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xyXG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XHJcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcblxyXG4kY29sb3JzOiAgKFxyXG4gICAgcHJpbWFyeTogKGxpZ2h0OiAkcHJpbWFyeSwgZGFyazogJHByaW1hcnkpLFxyXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXHJcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcclxuICAgIHdhcm5pbmc6IChsaWdodDogJHdhcm5pbmcpLFxyXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcclxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxyXG4gICAgbGlnaHQ6IChsaWdodDogJGxpZ2h0LCBkYXJrOiAkZGFyayksXHJcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcclxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vKipcclxuICogTGF5b3V0IEJyZWFrcG9pbnRzXHJcbiAqXHJcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xyXG4gKi9cclxuXHJcbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xyXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogMHB4LFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1xcmNvZGU6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB1c2VyIHBhZ2UuXHJcbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xyXG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGV1cmw6ICRjb3JlLW1vcmUtaGlkZS1zaXRldXJsICFkZWZhdWx0O1xyXG5cclxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGFjdGl2aXR5LWljb24tY29sb3JzOiAoXHJcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcclxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXHJcbiAgICBjb2xsYWJvcmF0aW9uOiAjZjc2MzRkLFxyXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcclxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXHJcbiAgICBpbnRlcmZhY2U6ICNhMzc4ZmZcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeTogIzhlMjRhYSAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZTogJHJlZCAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWdyb3VwOiAkeWVsbG93ICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcjogJGJsdWUgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlOiAkZ3JlZW4gIWRlZmF1bHQ7XHJcblxyXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvbG9yczogKFxyXG4gICAgY2F0ZWdvcnk6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jYXRlZ29yeSxcclxuICAgIGNvdXJzZTogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWNvdXJzZSxcclxuICAgIGdyb3VwOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktZ3JvdXAsXHJcbiAgICB1c2VyOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktdXNlcixcclxuICAgIHNpdGU6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1zaXRlLFxyXG4pICFkZWZhdWx0O1xyXG4iLCJAaW1wb3J0IFwifnRoZW1lL2dsb2JhbHMuc2Nzc1wiO1xyXG5cclxuOmhvc3QtY29udGV4dCguaW9zKSB7XHJcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xyXG5cclxuICAgICY6OnBhcnQoc2Nyb2xsKSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5hZGRvbi1tZXNzYWdlcy1kYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iLCIvKipcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBzdHJpbmcgZnVuY3Rpb25zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3NcbiAqL1xuLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXG4gKi9cbi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcbiAqL1xuLyoqXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuLyoqXG4gKiBTYW1lIGFzIGl0ZW0tcHVzaC1zdmctdXJsIGJ1dCBhZG1pdHMgZmxpcC1ydGxcbiAqL1xuLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cbjpob3N0LWNvbnRleHQoLmlvcykgaW9uLWZvb3RlciAudG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWNvbnRlbnQtYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCkge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xufVxuXG4uYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4vKipcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBzdHJpbmcgZnVuY3Rpb25zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3NcbiAqL1xuLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXG4gKi9cbi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG4vKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcbiAqL1xuLyoqXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuLyoqXG4gKiBTYW1lIGFzIGl0ZW0tcHVzaC1zdmctdXJsIGJ1dCBhZG1pdHMgZmxpcC1ydGxcbiAqL1xuLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cbjpob3N0IC5hZGRvbi1tZXNzYWdlcy11bnJlYWRmcm9tIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuOmhvc3QgLmFkZG9uLW1lc3NhZ2VzLXVucmVhZGZyb20gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLmhhcy1mYWIgLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG46aG9zdCBpb24tZmFiIC5jb3JlLWRpc2N1c3Npb24tbWVzc2FnZXMtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWJhZGdlLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWJhZGdlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgaW9uLWZhYiAuY29yZS1kaXNjdXNzaW9uLW1lc3NhZ2VzLWJhZGdlIHtcbiAgbGVmdDogdW5zZXQ7XG4gIHJpZ2h0OiB1bnNldDtcbiAgbGVmdDogMDtcbn1cblxuOmhvc3QgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDEgLmNvcmUtYmFyLWJ1dHRvbi1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgOmhvc3QgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaDEgLmNvcmUtYmFyLWJ1dHRvbi1pbWFnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDZweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xuICB9XG59XG46aG9zdCBpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBoMSBjb3JlLWZvcm1hdC10ZXh0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGgxIGlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIDpob3N0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGgxIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDZweDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XG4gIH1cbn1cblxuOmhvc3QtY29udGV4dCguaW9zKSBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.ts":
/*!************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.ts ***!
  \************************************************************/
/*! exports provided: AddonMessagesDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPage", function() { return AddonMessagesDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages-offline */ "./src/addons/messages/services/messages-offline.ts");
/* harmony import */ var _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/messages-sync */ "./src/addons/messages/services/messages-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/infinite-loading/infinite-loading */ "./src/core/components/infinite-loading/infinite-loading.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
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
 * Page that displays a message discussion page.
 */
let AddonMessagesDiscussionPage = class AddonMessagesDiscussionPage {
    constructor(route, elementRef) {
        this.route = route;
        this.elementRef = elementRef;
        this.fetching = false;
        this.messagesBeingSent = 0;
        this.pagesLoaded = 1;
        this.lastMessage = { text: '', timecreated: 0 };
        this.keepMessageMap = {};
        this.oldContentHeight = 0;
        this.scrollBottom = true;
        this.viewDestroyed = false;
        this.showLoadingModal = false; // Whether to show a loading modal while fetching data.
        this.showInfo = false;
        this.loaded = false;
        this.showKeyboard = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.messages = [];
        this.showDelete = false;
        this.canDelete = false;
        this.isGroup = false;
        this.members = {}; // Members that wrote a message, indexed by ID.
        this.favouriteIcon = 'fa-star';
        this.deleteIcon = 'fas-trash';
        this.blockIcon = 'fas-user-lock';
        this.addRemoveIcon = 'fas-user-plus';
        this.muteIcon = 'fas-bell-slash';
        this.favouriteIconSlash = false;
        this.muteEnabled = false;
        this.footerType = 'unable';
        this.requestContactSent = false;
        this.requestContactReceived = false;
        this.isSelf = false;
        this.newMessages = 0;
        this.unreadMessageFrom = 0;
        this.initialized = false;
        this.hostElement = elementRef.nativeElement;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.groupMessagingEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isGroupMessagingEnabled();
        this.muteEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMuteConversationEnabled();
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_12__["CoreLogger"].getInstance('AddonMessagesDiscussionPage');
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSyncProvider"].AUTO_SYNCED, (data) => {
            if ((data.userId && data.userId == this.userId) ||
                (data.conversationId && data.conversationId == this.conversationId)) {
                // Fetch messages.
                this.fetchMessages();
                // Show first warning if any.
                if (data.warnings && data.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showAlert(undefined, data.warnings[0]);
                }
            }
        }, this.siteId);
        // Refresh data if info of a mamber of the conversation have changed.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.userId && (this.members[data.userId] || this.otherMember && data.userId == this.otherMember.id)) {
                this.fetchData();
            }
        }, this.siteId);
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.conversationId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('conversationId');
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('userId');
            this.showInfo = !_services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteBooleanParam('hideInfo');
            this.showKeyboard = !!_services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteBooleanParam('showKeyboard');
            yield this.fetchData();
            this.scrollToBottom(true);
        });
    }
    /**
     * View has been initialized.
     */
    ngAfterViewInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
        });
    }
    /**
     * Adds a new message to the message list.
     *
     * @param message Message to be added.
     * @param keep If set the keep flag or not.
     * @returns If message is not mine and was recently added.
     */
    addMessage(message, keep = true) {
        /* Create a hash to identify the message. The text of online messages isn't reliable because it can have random data
           like VideoJS ID. Try to use id and fallback to text for offline messages. */
        const id = 'id' in message ? message.id : '';
        message.hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__["Md5"].hashAsciiStr(String(id || message.text || '')) + '#' + message.timecreated + '#' +
            message.useridfrom;
        let added = false;
        if (this.keepMessageMap[message.hash] === undefined) {
            // Message not added to the list. Add it now.
            this.messages.push(message);
            added = message.useridfrom != this.currentUserId;
        }
        // Message needs to be kept in the list.
        this.keepMessageMap[message.hash] = keep;
        return added;
    }
    /**
     * Remove a message if it shouldn't be in the list anymore.
     *
     * @param hash Hash of the message to be removed.
     */
    removeMessage(hash) {
        if (this.keepMessageMap[hash]) {
            // Selected to keep it, clear the flag.
            this.keepMessageMap[hash] = false;
            return;
        }
        delete this.keepMessageMap[hash];
        const position = this.messages.findIndex((message) => message.hash == hash);
        if (position >= 0) {
            this.messages.splice(position, 1);
        }
    }
    /**
     * Convenience function to fetch the conversation data.
     *
     * @returns Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader;
            if (this.showLoadingModal) {
                loader = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading();
            }
            if (!this.groupMessagingEnabled && this.userId) {
                // Get the user profile to retrieve the user fullname and image.
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId, undefined, true).then((user) => {
                    if (!this.title) {
                        this.title = user.fullname;
                    }
                    this.conversationImage = user.profileimageurl;
                    this.members[user.id] = user;
                    return;
                }).catch(() => {
                    // Ignore errors.
                });
            }
            // Synchronize messages if needed.
            try {
                const syncResult = yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].syncDiscussion(this.conversationId, this.userId);
                if (syncResult.warnings && syncResult.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showAlert(undefined, syncResult.warnings[0]);
                }
            }
            catch (_a) {
                // Ignore errors;
            }
            try {
                const promises = [];
                if (this.groupMessagingEnabled) {
                    // Get the conversation ID if it exists and we don't have it yet.
                    const exists = yield this.getConversation(this.conversationId, this.userId);
                    if (exists) {
                        // Fetch the messages for the first time.
                        promises.push(this.fetchMessages());
                    }
                    if (this.userId) {
                        const userId = this.userId;
                        // Get the member info. Invalidate first to make sure we get the latest status.
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateMemberInfo(this.userId).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getMemberInfo(userId);
                            if (!exists && this.otherMember) {
                                this.conversationImage = this.otherMember.profileimageurl;
                                this.title = this.otherMember.fullname;
                            }
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    else {
                        this.otherMember = undefined;
                    }
                }
                else {
                    if (this.userId) {
                        const userId = this.userId;
                        // Fake the user member info.
                        promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId).then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = {
                                id: user.id,
                                fullname: user.fullname,
                                profileurl: '',
                                profileimageurl: user.profileimageurl || '',
                                profileimageurlsmall: user.profileimageurlsmall || '',
                                isonline: false,
                                showonlinestatus: false,
                                isblocked: false,
                                iscontact: false,
                                isdeleted: false,
                                canmessageevenifblocked: true,
                                canmessage: true,
                                requirescontact: false,
                            };
                            this.otherMember.isblocked = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isBlocked(userId);
                            this.otherMember.iscontact = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isContact(userId);
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    // Fetch the messages for the first time.
                    promises.push(this.fetchMessages().then(() => {
                        if (!this.title && this.messages.length) {
                            // Didn't receive the fullname via argument. Try to get it from messages.
                            // It's possible that name cannot be resolved when no messages were yet exchanged.
                            const firstMessage = this.messages[0];
                            if ('usertofullname' in firstMessage) {
                                if (firstMessage.useridto != this.currentUserId) {
                                    this.title = firstMessage.usertofullname || '';
                                }
                                else {
                                    this.title = firstMessage.userfromfullname || '';
                                }
                            }
                        }
                        return;
                    }));
                }
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }
            finally {
                this.checkCanDelete();
                this.loaded = true;
                this.setPolling(); // Make sure we're polling messages.
                this.setContactRequestInfo();
                this.setFooterType();
                loader && loader.dismiss();
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.setPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.unsetPolling();
    }
    /**
     * Convenience function to fetch messages.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @returns Resolved when done.
     */
    fetchMessages(messagesAreNew = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (this.messagesBeingSent > 0) {
                // We do not poll while a message is being sent or we could confuse the user.
                // Otherwise, his message would disappear from the list, and he'd have to wait for the interval to check for messages.
                return;
            }
            else if (this.fetching) {
                // Already fetching.
                return;
            }
            else if (this.groupMessagingEnabled && !this.conversationId) {
                // Don't have enough data to fetch messages.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No enough data provided to fetch messages');
            }
            if (this.conversationId) {
                this.logger.debug(`Polling new messages for conversation '${this.conversationId}'`);
            }
            else if (this.userId) {
                this.logger.debug(`Polling new messages for discussion with user '${this.userId}'`);
            }
            else {
                // Should not happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No enough data provided to fetch messages');
            }
            this.fetching = true;
            try {
                // Wait for synchronization process to finish.
                yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].waitForSyncConversation(this.conversationId, this.userId);
                let messages = [];
                // Fetch messages. Invalidate the cache before fetching.
                if (this.groupMessagingEnabled) {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversationMessages(this.conversationId);
                    messages = yield this.getConversationMessages(this.pagesLoaded);
                }
                else {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateDiscussionCache(this.userId);
                    messages = yield this.getDiscussionMessages(this.pagesLoaded);
                }
                this.loadMessages(messages, messagesAreNew);
            }
            finally {
                this.fetching = false;
            }
        });
    }
    /**
     * Format and load a list of messages into the view.
     *
     * @param messages Messages to load.
     * @param messagesAreNew If messages loaded are new messages.
     */
    loadMessages(messages, messagesAreNew = true) {
        if (this.viewDestroyed) {
            return;
        }
        // Check if we are at the bottom to scroll it after render.
        // Use a 5px error margin because in iOS there is 1px difference for some reason.
        this.scrollBottom = _singletons_dom__WEBPACK_IMPORTED_MODULE_22__["CoreDom"].scrollIsBottom(this.scrollElement, 5);
        if (this.messagesBeingSent > 0) {
            // Ignore polling due to a race condition.
            return;
        }
        // Add new messages to the list and mark the messages that should still be displayed.
        const newMessages = messages.reduce((val, message) => val + (this.addMessage(message) ? 1 : 0), 0);
        // Set the new badges message if we're loading new messages.
        if (messagesAreNew) {
            this.setNewMessagesBadge(this.newMessages + newMessages);
        }
        // Remove messages that shouldn't be in the list anymore.
        for (const hash in this.keepMessageMap) {
            this.removeMessage(hash);
        }
        // Sort the messages.
        _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortMessages(this.messages);
        // Calculate which messages need to display the date or user data.
        this.messages.forEach((message, index) => {
            message.showDate = this.showDate(message, this.messages[index - 1]);
            message.showUserData = this.showUserData(message, this.messages[index - 1]);
            message.showTail = this.showTail(message, this.messages[index + 1]);
        });
        // If we received a new message while using group messaging, force mark messages as read.
        const last = this.messages[this.messages.length - 1];
        const forceMark = this.groupMessagingEnabled && last && last.useridfrom != this.currentUserId && this.lastMessage.text != ''
            && (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated);
        // Notify that there can be a new message.
        this.notifyNewMessage();
        // Mark retrieved messages as read if they are not.
        this.markMessagesAsRead(forceMark);
    }
    /**
     * Set the new message badge number and set scroll listener if needed.
     *
     * @param addMessages Number of messages still to be read.
     */
    setNewMessagesBadge(addMessages) {
        if (this.newMessages == 0 && addMessages > 0) {
            this.scrollFunction();
        }
        this.newMessages = addMessages;
    }
    /**
     * The scroll was moved. Update new messages count.
     */
    scrollFunction() {
        var _a;
        if (this.newMessages == 0) {
            return;
        }
        if (_singletons_dom__WEBPACK_IMPORTED_MODULE_22__["CoreDom"].scrollIsBottom(this.scrollElement, 40)) {
            // At the bottom, reset.
            this.setNewMessagesBadge(0);
            return;
        }
        const scrollElRect = (_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const scrollBottomPos = (scrollElRect && scrollElRect.bottom) || 0;
        if (scrollBottomPos == 0) {
            return;
        }
        const messages = Array.from(this.hostElement.querySelectorAll('core-message:not(.is-mine)'))
            .slice(-this.newMessages)
            .reverse();
        const newMessagesUnread = messages.findIndex((message) => {
            const elementRect = message.getBoundingClientRect();
            if (!elementRect) {
                return false;
            }
            return elementRect.bottom <= scrollBottomPos;
        });
        if (newMessagesUnread > 0 && newMessagesUnread < this.newMessages) {
            this.setNewMessagesBadge(newMessagesUnread);
        }
    }
    /**
     * Get the conversation.
     *
     * @param conversationId Conversation ID.
     * @param userId User ID.
     * @returns Promise resolved with a boolean: whether the conversation exists or not.
     */
    getConversation(conversationId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fallbackConversation;
            // Try to get the conversationId if we don't have it.
            if (!conversationId && userId) {
                try {
                    if (userId === this.currentUserId && _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isSelfConversationEnabled()) {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getSelfConversation();
                    }
                    else {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationBetweenUsers(userId, undefined, true);
                    }
                    conversationId = fallbackConversation.id;
                }
                catch (error) {
                    // Probably conversation does not exist or user is offline. Try to load offline messages.
                    this.isSelf = userId === this.currentUserId;
                    const messages = yield _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesOffline"].getMessages(userId);
                    if (messages && messages.length) {
                        // We have offline messages, this probably means that the conversation didn't exist. Don't display error.
                        messages.forEach((message) => {
                            message.pending = true;
                            message.text = message.smallmessage;
                        });
                        this.loadMessages(messages);
                    }
                    else if (error.errorcode != 'errorconversationdoesnotexist') {
                        // Display the error.
                        throw error;
                    }
                    return false;
                }
            }
            if (!conversationId) {
                return false;
            }
            // Retrieve the conversation. Invalidate data first to get the right unreadcount.
            yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversation(conversationId);
            try {
                this.conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(conversationId, undefined, true);
            }
            catch (error) {
                // Get conversation failed, use the fallback one if we have it.
                if (fallbackConversation) {
                    this.conversation = fallbackConversation;
                }
                else {
                    throw error;
                }
            }
            if (this.conversation) {
                this.conversationId = this.conversation.id;
                this.title = this.conversation.name;
                this.conversationImage = this.conversation.imageurl;
                this.isGroup = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP;
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                if (!this.isGroup) {
                    this.userId = this.conversation.userid;
                }
                this.isSelf = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_SELF;
                return true;
            }
            else {
                return false;
            }
        });
    }
    /**
     * Get the messages of the conversation. Used if group messaging is supported.
     *
     * @param pagesToLoad Number of "pages" to load.
     * @param offset Offset for message list.
     * @returns Promise resolved with the list of messages.
     */
    getConversationMessages(pagesToLoad, offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversationId) {
                return [];
            }
            const excludePending = offset > 0;
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationMessages(this.conversationId, {
                excludePending: excludePending,
                limitFrom: offset,
            });
            pagesToLoad--;
            // Treat members. Don't use CoreUtilsProvider.arrayToObject because we don't want to override the existing object.
            if (result.members) {
                result.members.forEach((member) => {
                    this.members[member.id] = member;
                });
            }
            const messages = result.messages;
            if (pagesToLoad > 0 && result.canLoadMore) {
                offset += _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].LIMIT_MESSAGES;
                // Get more messages.
                const nextMessages = yield this.getConversationMessages(pagesToLoad, offset);
                return messages.concat(nextMessages);
            }
            // No more messages to load, return them.
            this.canLoadMore = !!result.canLoadMore;
            return messages;
        });
    }
    /**
     * Get a discussion. Can load several "pages".
     *
     * @param pagesToLoad Number of pages to load.
     * @param lfReceivedUnread Number of unread received messages already fetched, so fetch will be done from this.
     * @param lfReceivedRead Number of read received messages already fetched, so fetch will be done from this.
     * @param lfSentUnread Number of unread sent messages already fetched, so fetch will be done from this.
     * @param lfSentRead Number of read sent messages already fetched, so fetch will be done from this.
     * @returns Resolved when done.
     */
    getDiscussionMessages(pagesToLoad, lfReceivedUnread = 0, lfReceivedRead = 0, lfSentUnread = 0, lfSentRead = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Only get offline messages if we're loading the first "page".
            const excludePending = lfReceivedUnread > 0 || lfReceivedRead > 0 || lfSentUnread > 0 || lfSentRead > 0;
            // Get next messages.
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getDiscussion(this.userId, excludePending, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
            pagesToLoad--;
            if (pagesToLoad > 0 && result.canLoadMore) {
                // More pages to load. Calculate new limit froms.
                result.messages.forEach((message) => {
                    if (!message.pending && 'read' in message) {
                        if (message.useridfrom == this.userId) {
                            if (message.read) {
                                lfReceivedRead++;
                            }
                            else {
                                lfReceivedUnread++;
                            }
                        }
                        else {
                            if (message.read) {
                                lfSentRead++;
                            }
                            else {
                                lfSentUnread++;
                            }
                        }
                    }
                });
                // Get next messages.
                const nextMessages = yield this.getDiscussionMessages(pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
                return result.messages.concat(nextMessages);
            }
            else {
                // No more messages to load, return them.
                this.canLoadMore = result.canLoadMore;
                return result.messages;
            }
        });
    }
    /**
     * Mark messages as read.
     */
    markMessagesAsRead(forceMark) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let readChanged = false;
            let messageUnreadFound = false;
            // Mark all messages at a time if there is any unread message.
            if (forceMark) {
                messageUnreadFound = true;
            }
            else if (this.groupMessagingEnabled) {
                messageUnreadFound = !!((((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) &&
                    (this.conversationId && this.conversationId > 0));
            }
            else {
                // If an unread message is found, mark all messages as read.
                messageUnreadFound = this.messages.some((message) => message.useridfrom != this.currentUserId && ('read' in message && !message.read));
            }
            if (messageUnreadFound) {
                this.setUnreadLabelPosition();
                if (this.groupMessagingEnabled) {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllConversationMessagesRead(this.conversationId);
                }
                else {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllMessagesRead(this.userId);
                    // Mark all messages as read.
                    this.messages.forEach((message) => {
                        if ('read' in message) {
                            message.read = true;
                        }
                    });
                }
                readChanged = true;
            }
            if (readChanged) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].READ_CHANGED_EVENT, {
                    conversationId: this.conversationId,
                    userId: this.userId,
                }, this.siteId);
            }
        });
    }
    /**
     * Notify the last message found so discussions list controller can tell if last message should be updated.
     */
    notifyNewMessage() {
        var _a, _b;
        const last = this.messages[this.messages.length - 1];
        let trigger = false;
        if (!last) {
            this.lastMessage = { text: '', timecreated: 0 };
            trigger = true;
        }
        else if (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated) {
            this.lastMessage = { text: last.text || '', timecreated: last.timecreated };
            trigger = true;
        }
        if (trigger) {
            // Update discussions last message.
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, {
                conversationId: this.conversationId,
                userId: this.userId,
                message: this.lastMessage.text,
                timecreated: this.lastMessage.timecreated,
                isfavourite: !!((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.isfavourite),
                type: (_b = this.conversation) === null || _b === void 0 ? void 0 : _b.type,
            }, this.siteId);
            // Update navBar links and buttons.
            const newCanDelete = (last && 'id' in last && last.id && this.messages.length == 1) || this.messages.length > 1;
            if (this.canDelete != newCanDelete) {
                this.checkCanDelete();
            }
        }
    }
    /**
     * Set the place where the unread label position has to be.
     */
    setUnreadLabelPosition() {
        var _a, _b;
        if (this.unreadMessageFrom != 0) {
            return;
        }
        if (this.groupMessagingEnabled) {
            // Use the unreadcount from the conversation to calculate where should the label be placed.
            if (this.conversation && (((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) && this.messages) {
                // Iterate over messages to find the right message using the unreadcount. Skip offline messages and own messages.
                let found = 0;
                for (let i = this.messages.length - 1; i >= 0; i--) {
                    const message = this.messages[i];
                    if (!message.pending && message.useridfrom != this.currentUserId && 'id' in message) {
                        found++;
                        if (found == this.conversation.unreadcount) {
                            this.unreadMessageFrom = Number(message.id);
                            break;
                        }
                    }
                }
            }
        }
        else {
            let previousMessageRead = false;
            for (const x in this.messages) {
                const message = this.messages[x];
                if (message.useridfrom != this.currentUserId && 'read' in message) {
                    const unreadFrom = !message.read && previousMessageRead;
                    if (unreadFrom) {
                        // Save where the label is placed.
                        this.unreadMessageFrom = Number(message.id);
                        break;
                    }
                    previousMessageRead = !!message.read;
                }
            }
        }
        // Do not update the message unread from label on next refresh.
        if (this.unreadMessageFrom == 0) {
            // Using negative to indicate the label is not placed but should not be placed.
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Check if there's any message in the list that can be deleted.
     */
    checkCanDelete() {
        // All messages being sent should be at the end of the list.
        const first = this.messages[0];
        this.canDelete = first && !first.sending;
    }
    /**
     * Hide unread label when sending messages.
     */
    hideUnreadLabel() {
        if (this.unreadMessageFrom > 0) {
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Wait until fetching is false.
     *
     * @returns Resolved when done.
     */
    waitForFetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.fetching) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].wait(400);
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(this.waitForFetch());
        });
    }
    /**
     * Set a polling to get new messages every certain time.
     */
    setPolling() {
        if (this.groupMessagingEnabled && !this.conversationId) {
            // Don't have enough data to poll messages.
            return;
        }
        if (!this.polling) {
            // Start polling.
            this.polling = window.setInterval(() => {
                this.fetchMessages().catch(() => {
                    // Ignore errors.
                });
            }, _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].POLL_INTERVAL);
        }
    }
    /**
     * Unset polling.
     */
    unsetPolling() {
        if (this.polling) {
            this.logger.debug(`Cancelling polling for conversation with user '${this.userId}'`);
            clearInterval(this.polling);
            this.polling = undefined;
        }
    }
    /**
     * Copy message to clipboard.
     *
     * @param message Message to be copied.
     */
    copyMessage(message) {
        const text = 'smallmessage' in message ? message.smallmessage || message.text || '' : message.text || '';
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].copyToClipboard(_services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].decodeHTMLEntities(text));
    }
    /**
     * Function to delete a message.
     *
     * @param message Message object to delete.
     * @param index Index where the message is to delete it from the view.
     */
    deleteMessage(message, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const canDeleteAll = this.conversation && this.conversation.candeletemessagesforallusers;
            const langKey = message.pending || canDeleteAll || this.isSelf ? 'core.areyousure' :
                'addon.messages.deletemessageconfirmation';
            const options = {};
            if (canDeleteAll && !message.pending) {
                // Show delete for all checkbox.
                options.inputs = [{
                        type: 'checkbox',
                        name: 'deleteforall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.deleteforeveryone'),
                    }];
            }
            try {
                const data = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant(langKey), undefined, undefined, undefined, options);
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteMessage(message, data && data[0]);
                    // Remove message from the list without having to wait for re-fetch.
                    this.messages.splice(index, 1);
                    this.removeMessage(message.hash);
                    this.notifyNewMessage();
                    this.fetchMessages(); // Re-fetch messages to update cached data.
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errordeletemessage', true);
            }
        });
    }
    /**
     * Function to load previous messages.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @returns Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.initialized) {
                // Don't load previous if the view isn't fully initialized.
                // Don't put the initialized condition in the "enabled" input because then the load more is hidden and
                // the scroll height changes when it appears.
                infiniteComplete && infiniteComplete();
                return;
            }
            let infiniteHeight = ((_a = this.infinite) === null || _a === void 0 ? void 0 : _a.hostElement.getBoundingClientRect().height) || 0;
            const scrollHeight = (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0);
            // If there is an ongoing fetch, wait for it to finish.
            try {
                yield this.waitForFetch();
            }
            finally {
                this.pagesLoaded++;
                try {
                    yield this.fetchMessages(false);
                    // Try to keep the scroll position.
                    const scrollBottom = scrollHeight - (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0);
                    const height = ((_d = this.infinite) === null || _d === void 0 ? void 0 : _d.hostElement.getBoundingClientRect().height) || 0;
                    if (this.canLoadMore && infiniteHeight && this.infinite) {
                        // The height of the infinite is different while spinner is shown. Add that difference.
                        infiniteHeight = infiniteHeight - height;
                    }
                    else if (!this.canLoadMore) {
                        // Can't load more, take into account the full height of the infinite loading since it will disappear now.
                        infiniteHeight = infiniteHeight || height;
                    }
                    this.keepScroll(scrollHeight, scrollBottom, infiniteHeight);
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    this.pagesLoaded--;
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            }
        });
    }
    /**
     * Keep scroll position after loading previous messages.
     */
    keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries = 0) {
        setTimeout(() => {
            var _a;
            const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
            if (newScrollHeight == oldScrollHeight) {
                // Height hasn't changed yet. Retry if max retries haven't been reached.
                if (retries <= 10) {
                    this.keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries + 1);
                }
                return;
            }
            // Scroll has changed, but maybe it hasn't reached the full height yet.
            setTimeout(() => {
                var _a;
                const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
                const scrollTo = newScrollHeight - oldScrollBottom + infiniteHeight;
                this.content.scrollToPoint(0, scrollTo, 0);
            }, 30);
        }, 30);
    }
    /**
     * Scroll bottom when render has finished.
     *
     * @param force Whether to force scroll to bottom.
     */
    scrollToBottom(force = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if scroll is at bottom. If so, scroll bottom after rendering since there might be something new.
            if (this.scrollBottom || force) {
                this.scrollBottom = false;
                // Reset the badge.
                this.setNewMessagesBadge(0);
                // Leave time for the view to be rendered.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].nextTicks(5);
                if (!this.viewDestroyed && this.content) {
                    this.content.scrollToBottom(0);
                }
                if (force) {
                    this.initialized = true;
                }
            }
        });
    }
    /**
     * Scroll to the first new unread message.
     */
    scrollToFirstUnreadMessage() {
        if (this.newMessages > 0) {
            const messages = Array.from(this.hostElement.querySelectorAll('core-message:not(.is-mine)'));
            _singletons_dom__WEBPACK_IMPORTED_MODULE_22__["CoreDom"].scrollToElement(messages[messages.length - this.newMessages]);
        }
    }
    /**
     * Sends a message to the server.
     *
     * @param text Message text.
     */
    sendMessage(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hideUnreadLabel();
            this.showDelete = false;
            this.scrollBottom = true;
            this.setNewMessagesBadge(0);
            const message = {
                id: -1,
                pending: true,
                sending: true,
                useridfrom: this.currentUserId,
                smallmessage: text,
                text: text,
                timecreated: Date.now(),
            };
            message.showDate = this.showDate(message, this.messages[this.messages.length - 1]);
            this.addMessage(message, false);
            this.messagesBeingSent++;
            // If there is an ongoing fetch, wait for it to finish.
            // Otherwise, if a message is sent while fetching it could disappear until the next fetch.
            try {
                yield this.waitForFetch();
            }
            finally {
                try {
                    let data;
                    if (this.conversationId) {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessageToConversation(this.conversation, text);
                    }
                    else {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessage(this.userId, text);
                    }
                    this.messagesBeingSent--;
                    let failure = false;
                    if (data.sent) {
                        try {
                            if (!this.conversationId && data.message && 'conversationid' in data.message) {
                                // Message sent to a new conversation, try to load the conversation.
                                yield this.getConversation(data.message.conversationid, this.userId);
                                // Now fetch messages.
                                try {
                                    yield this.fetchMessages();
                                }
                                finally {
                                    // Start polling messages now that the conversation exists.
                                    this.setPolling();
                                }
                            }
                            else {
                                // Message was sent, fetch messages right now.
                                yield this.fetchMessages();
                            }
                        }
                        catch (_a) {
                            failure = true;
                        }
                    }
                    if (failure || !data.sent) {
                        // Fetch failed or is offline message, mark the message as sent.
                        // If fetch is successful there's no need to mark it because the fetch will already show the message received.
                        message.sending = false;
                        if (data.sent) {
                            // Message sent to server, not pending anymore.
                            message.pending = false;
                        }
                        else if (data.message) {
                            message.timecreated = data.message.timecreated || 0;
                        }
                        this.notifyNewMessage();
                    }
                }
                catch (error) {
                    this.messagesBeingSent--;
                    // Only close the keyboard if an error happens.
                    // We want the user to be able to send multiple messages without the keyboard being closed.
                    _services_app__WEBPACK_IMPORTED_MODULE_13__["CoreApp"].closeKeyboard();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.messagenotsent', true);
                    this.removeMessage(message.hash);
                }
            }
        });
    }
    /**
     * Check date should be shown on message list for the current message.
     * If date has changed from previous to current message it should be shown.
     *
     * @param message Current message where to show the date.
     * @param prevMessage Previous message where to compare the date with.
     * @returns If date has changed and should be shown.
     */
    showDate(message, prevMessage) {
        if (!prevMessage) {
            // First message, show it.
            return true;
        }
        // Check if day has changed.
        return !moment_timezone__WEBPACK_IMPORTED_MODULE_16___default()(message.timecreated).isSame(prevMessage.timecreated, 'day');
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed for group conversations if the previous message was from another user.
     *
     * @param message Current message where to show the user info.
     * @param prevMessage Previous message.
     * @returns Whether user data should be shown.
     */
    showUserData(message, prevMessage) {
        return this.isGroup && message.useridfrom != this.currentUserId && this.members[(message.useridfrom || 0)] &&
            (!prevMessage || prevMessage.useridfrom != message.useridfrom || !!message.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param message Current message where to show the user info.
     * @param nextMessage Next message.
     * @returns Whether user data should be shown.
     */
    showTail(message, nextMessage) {
        return !nextMessage || nextMessage.useridfrom != message.useridfrom || !!nextMessage.showDate;
    }
    /**
     * View info. If it's an individual conversation, go to the user profile.
     * If it's a group conversation, view info about the group.
     */
    viewInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGroup) {
                const { AddonMessagesConversationInfoComponent } = yield __webpack_require__.e(/*! import() | addons-messages-components-conversation-info-conversation-info-module */ "addons-messages-components-conversation-info-conversation-info-module").then(__webpack_require__.bind(null, /*! @addons/messages/components/conversation-info/conversation-info.module */ "./src/addons/messages/components/conversation-info/conversation-info.module.ts"));
                // Display the group information.
                const userId = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                    component: AddonMessagesConversationInfoComponent,
                    componentProps: {
                        conversationId: this.conversationId,
                    },
                });
                if (userId !== undefined) {
                    const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].isCurrentPathInTablet('**/messages/**/discussion/**');
                    // Open user conversation.
                    if (splitViewLoaded) {
                        // Notify the left pane to load it, this way the right conversation will be highlighted.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].OPEN_CONVERSATION_EVENT, { userId }, this.siteId);
                    }
                    else {
                        // Open the discussion in a new view.
                        _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].navigateToSitePath(`/messages/discussion/user/${userId}`);
                    }
                }
            }
            else {
                // Open the user profile.
                _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].navigateToSitePath('/user/profile', { params: { userId: this.userId } });
            }
        });
    }
    /**
     * Change the favourite state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeFavourite(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.favouriteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_21__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].setFavouriteConversation(this.conversation.id, !this.conversation.isfavourite);
                this.conversation.isfavourite = !this.conversation.isfavourite;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'favourite',
                    value: this.conversation.isfavourite,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing favourite state.');
            }
            finally {
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                done && done();
            }
        });
    }
    /**
     * Change the mute state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeMute(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.muteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_21__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].muteConversation(this.conversation.id, !this.conversation.ismuted);
                this.conversation.ismuted = !this.conversation.ismuted;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'mute',
                    value: this.conversation.ismuted,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing muted state.');
            }
            finally {
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                done && done();
            }
        });
    }
    /**
     * Calculate whether there are pending contact requests.
     */
    setContactRequestInfo() {
        var _a, _b;
        this.requestContactSent = false;
        this.requestContactReceived = false;
        if (this.otherMember && !this.otherMember.iscontact) {
            this.requestContactSent = !!((_a = this.otherMember.contactrequests) === null || _a === void 0 ? void 0 : _a.some((request) => request.userid == this.currentUserId && request.requesteduserid == this.otherMember.id));
            this.requestContactReceived = !!((_b = this.otherMember.contactrequests) === null || _b === void 0 ? void 0 : _b.some((request) => request.userid == this.otherMember.id && request.requesteduserid == this.currentUserId));
        }
    }
    /**
     * Calculate what to display in the footer.
     */
    setFooterType() {
        if (!this.otherMember) {
            // Group conversation or group messaging not available.
            this.footerType = 'message';
        }
        else if (this.otherMember.isblocked) {
            this.footerType = 'blocked';
        }
        else if (this.requestContactReceived) {
            this.footerType = 'requestReceived';
        }
        else if (this.otherMember.canmessage) {
            this.footerType = 'message';
        }
        else if (this.requestContactSent) {
            this.footerType = 'requestSent';
        }
        else if (this.otherMember.requirescontact) {
            this.footerType = 'requiresContact';
        }
        else {
            this.footerType = 'unable';
        }
    }
    /**
     * Displays a confirmation modal to block the user of the individual conversation.
     *
     * @returns Promise resolved when user is blocked or dialog is cancelled.
     */
    blockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be blocked.');
            }
            if (this.otherMember.canmessageevenifblocked) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.cantblockuser', { $a: this.otherMember.fullname }));
                return;
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.blockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.blockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_21__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].blockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Delete the conversation.
     *
     * @param done Function to call when done.
     */
    deleteConversation(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            const confirmMessage = 'addon.messages.' + (this.isSelf ? 'deleteallselfconfirm' : 'deleteallconfirm');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm(confirmMessage);
                this.deleteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_21__["CoreConstants"].ICON_LOADING;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteConversation(this.conversation.id);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                            conversationId: this.conversation.id,
                            action: 'delete',
                        }, this.siteId);
                        this.messages = [];
                    }
                    finally {
                        done && done();
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting conversation.');
                }
                finally {
                    this.deleteIcon = 'fas-trash';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to unblock the user of the individual conversation.
     *
     * @returns Promise resolved when user is unblocked or dialog is cancelled.
     */
    unblockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be unblocked.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.unblockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.unblockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_21__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].unblockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to send a contact request to the other user of the individual conversation.
     *
     * @returns Promise resolved when the request is sent or the dialog is cancelled.
     */
    createContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be requested.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.addcontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('core.add');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_21__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].createContactRequest(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Confirms the contact request of the other user of the individual conversation.
     *
     * @returns Promise resolved when the request is confirmed.
     */
    confirmContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be confirmed.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].confirmContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Declines the contact request of the other user of the individual conversation.
     *
     * @returns Promise resolved when the request is confirmed.
     */
    declineContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be declined.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].declineContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Displays a confirmation modal to remove the other user of the conversation from contacts.
     *
     * @returns Promise resolved when the request is sent or the dialog is cancelled.
     */
    removeContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_17__["CoreError"]('No member selected to be removed.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('addon.messages.removecontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_18__["Translate"].instant('core.remove');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_21__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].removeContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        // Unset again, just in case.
        this.unsetPolling();
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.memberInfoObserver) === null || _b === void 0 ? void 0 : _b.off();
        this.viewDestroyed = true;
    }
};
AddonMessagesDiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonMessagesDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__["CoreInfiniteLoadingComponent"],] }]
};
AddonMessagesDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/messages/pages/discussion/discussion.scss")).default]
    })
], AddonMessagesDiscussionPage);



/***/ }),

/***/ "./src/addons/messages/pages/discussions-35/discussions.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/messages/pages/discussions-35/discussions.ts ***!
  \*****************************************************************/
/*! exports provided: AddonMessagesDiscussions35Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussions35Page", function() { return AddonMessagesDiscussions35Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/pushnotifications/services/push-delegate */ "./src/core/features/pushnotifications/services/push-delegate.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
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
 * Page that displays the list of discussions.
 */
let AddonMessagesDiscussions35Page = class AddonMessagesDiscussions35Page {
    constructor(route) {
        this.route = route;
        this.loaded = false;
        this.loadingMessage = '';
        this.discussions = [];
        this.search = {
            showResults: false,
            results: [],
            loading: '',
            text: '',
        };
        this.search.loading = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.searching');
        this.loadingMessages = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.loading');
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId();
        // Update discussions when new message is received.
        this.newMessagesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, (data) => {
            if (data.userId && this.discussions) {
                const discussion = this.discussions.find((disc) => { var _a; return ((_a = disc.message) === null || _a === void 0 ? void 0 : _a.user) === data.userId; });
                if (discussion === undefined) {
                    this.loaded = false;
                    this.refreshData().finally(() => {
                        this.loaded = true;
                    });
                }
                else if (discussion.message) {
                    // An existing discussion has a new message, update the last message.
                    discussion.message.message = data.message;
                    discussion.message.timecreated = data.timecreated;
                }
            }
        }, this.siteId);
        // Update discussions when a message is read.
        this.readChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].READ_CHANGED_EVENT, (data) => {
            if (data.userId && this.discussions) {
                const discussion = this.discussions.find((disc) => { var _a; return ((_a = disc.message) === null || _a === void 0 ? void 0 : _a.user) === data.userId; });
                if (discussion !== undefined) {
                    // A discussion has been read reset counter.
                    discussion.unread = false;
                    // Conversations changed, invalidate them and refresh unread counts.
                    _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateConversations(this.siteId);
                    _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].refreshUnreadConversationCounts(this.siteId);
                }
            }
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = _services_platform__WEBPACK_IMPORTED_MODULE_14__["CorePlatform"].resume.subscribe(() => {
            if (!this.loaded) {
                return;
            }
            this.loaded = false;
            this.refreshData();
        });
        // If a message push notification is received, refresh the view.
        this.pushObserver = _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__["CorePushNotificationsDelegate"].on('receive')
            .subscribe((notification) => {
            // New message received. If it's from current site, refresh the data.
            if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].isFalseOrZero(notification.notif) && notification.site == this.siteId) {
                // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                this.refreshData(undefined, false);
            }
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                // When a child page loads this callback is triggered too.
                this.discussionUserId = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('userId', { params })) !== null && _a !== void 0 ? _a : this.discussionUserId;
            }));
            const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_13__["CoreMainMenuDeepLinkManager"]();
            yield this.fetchData();
            if (!this.discussionUserId && this.discussions.length > 0 && _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isTablet && this.discussions[0].message) {
                // Take first and load it.
                yield this.gotoDiscussion(this.discussions[0].message.user);
            }
            // Treat deep link now that the conversation route has been loaded if needed.
            deepLinkManager.treatLink();
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param refreshUnreadCounts Whteher to refresh unread counts.
     * @returns Promise resolved when done.
     */
    refreshData(refresher, refreshUnreadCounts = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateDiscussionsCache(this.siteId));
            if (refreshUnreadCounts) {
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].invalidateUnreadConversationCounts(this.siteId));
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].allPromises(promises).finally(() => this.fetchData().finally(() => {
                if (refresher) {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            }));
        });
    }
    /**
     * Fetch discussions.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingMessage = this.loadingMessages;
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getDiscussions(this.siteId).then((discussions) => {
                // Convert to an array for sorting.
                const discussionsSorted = [];
                for (const userId in discussions) {
                    discussions[userId].unread = !!discussions[userId].unread;
                    discussionsSorted.push(discussions[userId]);
                }
                this.discussions = discussionsSorted.sort((a, b) => { var _a, _b; return (((_a = b.message) === null || _a === void 0 ? void 0 : _a.timecreated) || 0) - (((_b = a.message) === null || _b === void 0 ? void 0 : _b.timecreated) || 0); });
                return;
            }));
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].getUnreadConversationCounts(this.siteId));
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
            }
            this.loaded = true;
        });
    }
    /**
     * Clear search and show discussions again.
     */
    clearSearch() {
        this.loaded = false;
        this.search.showResults = false;
        this.search.text = ''; // Reset searched string.
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Search messages cotaining text.
     *
     * @param query Text to search for.
     * @returns Resolved when done.
     */
    searchMessage(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_7__["CoreApp"].closeKeyboard();
            this.loaded = false;
            this.loadingMessage = this.search.loading;
            try {
                const searchResults = yield _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchMessages(query, undefined, undefined, undefined, this.siteId);
                this.search.showResults = true;
                this.search.results = searchResults.messages;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }
            this.loaded = true;
        });
    }
    /**
     * Navigate to a particular discussion.
     *
     * @param discussionUserId Discussion Id to load.
     * @param messageId Message to scroll after loading the discussion. Used when searching.
     */
    gotoDiscussion(discussionUserId, messageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.discussionUserId = discussionUserId;
            const params = {};
            if (messageId) {
                params.message = messageId;
            }
            const path = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRelativePathToParent('/messages/index') + `discussion/user/${discussionUserId}`;
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate(path, {
                params,
                reset: _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isTablet && !!this.splitView && !this.splitView.isNested,
            });
        });
    }
    /**
     * Navigate to contacts view.
     */
    gotoContacts() {
        const params = {};
        if (_services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isTablet && this.discussionUserId) {
            params.discussionUserId = this.discussionUserId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSitePath('contacts-35', { params });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b, _c, _d;
        (_a = this.newMessagesObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.readChangedObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.appResumeSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.pushObserver) === null || _d === void 0 ? void 0 : _d.unsubscribe();
    }
};
AddonMessagesDiscussions35Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
AddonMessagesDiscussions35Page.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_15__["CoreSplitViewComponent"],] }]
};
AddonMessagesDiscussions35Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addon-messages-discussions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussions.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussions-35/discussions.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesDiscussions35Page);



/***/ }),

/***/ "./src/addons/messages/pages/group-conversations/group-conversations.ts":
/*!******************************************************************************!*\
  !*** ./src/addons/messages/pages/group-conversations/group-conversations.ts ***!
  \******************************************************************************/
/*! exports provided: AddonMessagesGroupConversationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesGroupConversationsPage", function() { return AddonMessagesGroupConversationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages-offline */ "./src/addons/messages/services/messages-offline.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/pushnotifications/services/push-delegate */ "./src/core/features/pushnotifications/services/push-delegate.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
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
 * Page that displays the list of conversations, including group conversations.
 */
let AddonMessagesGroupConversationsPage = class AddonMessagesGroupConversationsPage {
    constructor(route) {
        this.route = route;
        this.loaded = false;
        this.contactRequestsCount = 0;
        this.favourites = {
            type: undefined,
            favourites: true,
            count: 0,
            unread: 0,
            conversations: [],
        };
        this.group = {
            type: _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP,
            favourites: false,
            count: 0,
            unread: 0,
            conversations: [],
        };
        this.individual = {
            type: _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
            favourites: false,
            count: 0,
            unread: 0,
            conversations: [],
        };
        this.typeGroup = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP;
        this.loadingMessage = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.loading');
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        // Update conversations when new message is received.
        this.newMessagesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, (data) => {
            var _a;
            // Check if the new message belongs to the option that is currently expanded.
            const expandedOption = this.getExpandedOption();
            const messageOption = this.getConversationOption(data);
            if (expandedOption != messageOption) {
                return; // Message doesn't belong to current list, stop.
            }
            // Search the conversation to update.
            const conversation = this.findConversation(data.conversationId, data.userId, expandedOption);
            if (conversation === undefined) {
                // Probably a new conversation, refresh the list.
                this.loaded = false;
                this.refreshData().finally(() => {
                    this.loaded = true;
                });
                return;
            }
            if (conversation.lastmessage != data.message || conversation.lastmessagedate != data.timecreated / 1000) {
                const isNewer = data.timecreated / 1000 > (conversation.lastmessagedate || 0);
                // An existing conversation has a new message, update the last message.
                conversation.lastmessage = data.message;
                conversation.lastmessagedate = data.timecreated / 1000;
                // Sort the affected list.
                const option = this.getConversationOption(conversation);
                option.conversations = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortConversations(option.conversations || []);
                if (isNewer) {
                    // The last message is newer than the previous one, scroll to top to keep viewing the conversation.
                    (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                }
            }
        }, this.siteId);
        // Update conversations when a message is read.
        this.readChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].READ_CHANGED_EVENT, (data) => {
            if (data.conversationId) {
                const conversation = this.findConversation(data.conversationId);
                if (conversation !== undefined) {
                    // A conversation has been read reset counter.
                    conversation.unreadcount = 0;
                    // Conversations changed, invalidate them and refresh unread counts.
                    _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversations(this.siteId);
                    _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].refreshUnreadConversationCounts(this.siteId);
                }
            }
        }, this.siteId);
        // Load a discussion if we receive an event to do so.
        this.openConversationObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].OPEN_CONVERSATION_EVENT, (data) => {
            if (data.conversationId || data.userId) {
                this.gotoConversation(data.conversationId, data.userId);
            }
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = _services_platform__WEBPACK_IMPORTED_MODULE_16__["CorePlatform"].resume.subscribe(() => {
            if (!this.loaded) {
                return;
            }
            this.loaded = false;
            this.refreshData().finally(() => {
                this.loaded = true;
            });
        });
        // Update conversations if we receive an event to do so.
        this.updateConversationListObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, (data) => {
            if (data && data.action == 'mute') {
                // If the conversation is displayed, change its muted value.
                const expandedOption = this.getExpandedOption();
                if (expandedOption && expandedOption.conversations) {
                    const conversation = this.findConversation(data.conversationId, undefined, expandedOption);
                    if (conversation) {
                        conversation.ismuted = !!data.value;
                    }
                }
                return;
            }
            this.refreshData();
        }, this.siteId);
        // If a message push notification is received, refresh the view.
        this.pushObserver = _features_pushnotifications_services_push_delegate__WEBPACK_IMPORTED_MODULE_9__["CorePushNotificationsDelegate"].on('receive')
            .subscribe((notification) => {
            // New message received. If it's from current site, refresh the data.
            if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].isFalseOrZero(notification.notif) && notification.site == this.siteId) {
                // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                this.refreshData(undefined, false);
            }
        });
        // Update unread conversation counts.
        this.cronObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UNREAD_CONVERSATION_COUNTS_EVENT, (data) => {
            this.favourites.unread = data.favourites;
            this.individual.unread = data.individual + data.self; // Self is only returned if it's not favourite.
            this.group.unread = data.group;
        }, this.siteId);
        // Update the contact requests badge.
        this.contactRequestsCountObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].CONTACT_REQUESTS_COUNT_EVENT, (data) => {
            this.contactRequestsCount = data.count;
        }, this.siteId);
        // Update block status of a user.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (!data.userBlocked && !data.userUnblocked) {
                // The block status has not changed, ignore.
                return;
            }
            const expandedOption = this.getExpandedOption();
            if (expandedOption == this.individual || expandedOption == this.favourites) {
                if (!expandedOption.conversations || expandedOption.conversations.length <= 0) {
                    return;
                }
                const conversation = this.findConversation(undefined, data.userId, expandedOption);
                if (conversation) {
                    conversation.isblocked = data.userBlocked;
                }
            }
        }, this.siteId);
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // When a child page loads this callback is triggered too.
                const conversationId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('conversationId', { params });
                const userId = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRouteNumberParam('userId', { params });
                if (conversationId || userId) {
                    // Update the selected ones.
                    this.selectedConversationId = conversationId;
                    this.selectedUserId = userId;
                }
            }));
            const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_15__["CoreMainMenuDeepLinkManager"]();
            yield this.fetchData();
            if (!this.selectedConversationId && !this.selectedUserId && _services_screen__WEBPACK_IMPORTED_MODULE_14__["CoreScreen"].isTablet) {
                // Load the first conversation.
                let conversation;
                const expandedOption = this.getExpandedOption();
                if (expandedOption && expandedOption.conversations.length) {
                    conversation = expandedOption.conversations[0];
                    if (conversation) {
                        yield this.gotoConversation(conversation.id);
                    }
                }
            }
            // Treat deep link now that the conversation route has been loaded if needed.
            deepLinkManager.treatLink();
        });
    }
    /**
     * Fetch conversations.
     *
     * @param refreshUnreadCounts Whether to refresh unread counts.
     * @returns Promise resolved when done.
     */
    fetchData(refreshUnreadCounts = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Load the amount of conversations and contact requests.
            const promises = [];
            promises.push(this.fetchConversationCounts());
            // View updated by the events observers.
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getContactRequestsCount(this.siteId));
            if (refreshUnreadCounts) {
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].refreshUnreadConversationCounts(this.siteId));
            }
            try {
                yield Promise.all(promises);
                // The expanded status hasn't been initialized. Do it now.
                if (this.favourites.expanded === undefined && (this.selectedConversationId || this.selectedUserId)) {
                    // A certain conversation should be opened.
                    // We don't know which option it belongs to, so we need to fetch the data for all of them.
                    const promises = [];
                    promises.push(this.fetchDataForOption(this.favourites, false));
                    promises.push(this.fetchDataForOption(this.group, false));
                    promises.push(this.fetchDataForOption(this.individual, false));
                    yield Promise.all(promises);
                    // All conversations have been loaded, find the one we need to load and expand its option.
                    const conversation = this.findConversation(this.selectedConversationId, this.selectedUserId);
                    if (conversation) {
                        const option = this.getConversationOption(conversation);
                        yield this.expandOption(option);
                        this.loaded = true;
                        return;
                    }
                }
                // Load the data for the expanded option.
                yield this.fetchDataForExpandedOption();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
            }
            this.loaded = true;
        });
    }
    /**
     * Fetch data for the expanded option.
     *
     * @returns Promise resolved when done.
     */
    fetchDataForExpandedOption() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.favourites.expanded === undefined) {
                // Calculate which option should be expanded initially.
                this.favourites.expanded = this.favourites.count != 0 && !this.group.unread && !this.individual.unread;
                this.group.expanded = !this.favourites.expanded && this.group.count != 0 && !this.individual.unread;
                this.individual.expanded = !this.favourites.expanded && !this.group.expanded;
            }
            this.loadCurrentListElement();
            const expandedOption = this.getExpandedOption();
            if (expandedOption) {
                yield this.fetchDataForOption(expandedOption, false);
            }
        });
    }
    /**
     * Fetch data for a certain option.
     *
     * @param option The option to fetch data for.
     * @param loadingMore Whether we are loading more data or just the first ones.
     * @param getCounts Whether to get counts data.
     * @returns Promise resolved when done.
     */
    fetchDataForOption(option, loadingMore = false, getCounts = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            option.loadMoreError = false;
            const limitFrom = loadingMore ? option.conversations.length : 0;
            const promises = [];
            let data = {
                conversations: [],
                canLoadMore: false,
            };
            let offlineMessages = [];
            // Get the conversations and, if needed, the offline messages. Always try to get the latest data.
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversations(this.siteId).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversations(option.type, option.favourites, limitFrom, this.siteId);
                return;
            })));
            if (!loadingMore) {
                promises.push(_services_messages_offline__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesOffline"].getAllMessages().then((messages) => {
                    offlineMessages = messages;
                    return;
                }));
            }
            if (getCounts) {
                promises.push(this.fetchConversationCounts());
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].refreshUnreadConversationCounts(this.siteId));
            }
            yield Promise.all(promises);
            if (loadingMore) {
                option.conversations = option.conversations.concat(data.conversations);
                option.canLoadMore = data.canLoadMore;
            }
            else {
                option.conversations = data.conversations;
                option.canLoadMore = data.canLoadMore;
                if (offlineMessages && offlineMessages.length) {
                    yield this.loadOfflineMessages(option, offlineMessages);
                    // Sort the conversations, the offline messages could affect the order.
                    option.conversations = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortConversations(option.conversations);
                }
            }
        });
    }
    /**
     * Fetch conversation counts.
     *
     * @returns Promise resolved when done.
     */
    fetchConversationCounts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Always try to get the latest data.
            yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversationCounts(this.siteId);
            const counts = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationCounts(this.siteId);
            this.favourites.count = counts.favourites;
            this.individual.count = counts.individual + counts.self; // Self is only returned if it's not favourite.
            this.group.count = counts.group;
        });
    }
    /**
     * Find a conversation in the list of loaded conversations.
     *
     * @param conversationId The conversation ID to search.
     * @param userId User ID to search (if no conversationId).
     * @param option The option to search in. If not defined, search in all options.
     * @returns Conversation.
     */
    findConversation(conversationId, userId, option) {
        if (conversationId) {
            const conversations = option
                ? option.conversations
                : (this.favourites.conversations.concat(this.group.conversations).concat(this.individual.conversations));
            return conversations.find((conv) => conv.id == conversationId);
        }
        const conversations = option
            ? option.conversations
            : this.favourites.conversations.concat(this.individual.conversations);
        return conversations.find((conv) => conv.userid == userId);
    }
    /**
     * Get the option that is currently expanded, undefined if they are all collapsed.
     *
     * @returns Option currently expanded.
     */
    getExpandedOption() {
        if (this.favourites.expanded) {
            return this.favourites;
        }
        else if (this.group.expanded) {
            return this.group;
        }
        else if (this.individual.expanded) {
            return this.individual;
        }
    }
    /**
     * Navigate to contacts view.
     */
    gotoContacts() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigateToSitePath('contacts');
    }
    /**
     * Navigate to a particular conversation.
     *
     * @param conversationId Conversation Id to load.
     * @param userId User of the conversation. Only if there is no conversationId.
     * @param messageId Message to scroll after loading the discussion. Used when searching.
     */
    gotoConversation(conversationId, userId, messageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedConversationId = conversationId;
            this.selectedUserId = userId;
            const params = {};
            if (messageId) {
                params.message = messageId;
            }
            const path = _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].getRelativePathToParent('/messages/group-conversations') + 'discussion/' +
                (conversationId ? conversationId : `user/${userId}`);
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigate(path, {
                params,
                reset: _services_screen__WEBPACK_IMPORTED_MODULE_14__["CoreScreen"].isTablet && !!this.splitView && !this.splitView.isNested,
            });
        });
    }
    /**
     * Navigate to message settings.
     */
    gotoSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigateToSitePath('message-settings');
    }
    /**
     * Function to load more conversations.
     *
     * @param option The option to fetch data for.
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @returns Promise resolved when done.
     */
    loadMoreConversations(option, infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchDataForOption(option, true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
                option.loadMoreError = true;
            }
            infiniteComplete && infiniteComplete();
        });
    }
    /**
     * Load offline messages into the conversations.
     *
     * @param option The option where the messages should be loaded.
     * @param messages Offline messages.
     * @returns Promise resolved when done.
     */
    loadOfflineMessages(option, messages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            messages.forEach((message) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                if ('conversationid' in message) {
                    // It's an existing conversation. Search it in the current option.
                    let conversation = this.findConversation(message.conversationid, undefined, option);
                    if (conversation) {
                        // Check if it's the last message. Offline messages are considered more recent than sent messages.
                        if (conversation.lastmessage === undefined || conversation.lastmessage === null ||
                            !conversation.lastmessagepending || (conversation.lastmessagedate || 0) <= message.timecreated / 1000) {
                            this.addLastOfflineMessage(conversation, message);
                        }
                    }
                    else {
                        // Conversation not found, it could be an old one or the message could belong to another option.
                        conversation = {
                            id: message.conversationid,
                            type: ((_a = message.conversation) === null || _a === void 0 ? void 0 : _a.type) || _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
                            membercount: ((_b = message.conversation) === null || _b === void 0 ? void 0 : _b.membercount) || 0,
                            ismuted: ((_c = message.conversation) === null || _c === void 0 ? void 0 : _c.ismuted) || false,
                            isfavourite: ((_d = message.conversation) === null || _d === void 0 ? void 0 : _d.isfavourite) || false,
                            isread: ((_e = message.conversation) === null || _e === void 0 ? void 0 : _e.isread) || false,
                            members: ((_f = message.conversation) === null || _f === void 0 ? void 0 : _f.members) || [],
                            messages: ((_g = message.conversation) === null || _g === void 0 ? void 0 : _g.messages) || [],
                            candeletemessagesforallusers: ((_h = message.conversation) === null || _h === void 0 ? void 0 : _h.candeletemessagesforallusers) || false,
                            userid: 0,
                            name: (_j = message.conversation) === null || _j === void 0 ? void 0 : _j.name,
                            imageurl: ((_k = message.conversation) === null || _k === void 0 ? void 0 : _k.imageurl) || '',
                        };
                        if (this.getConversationOption(conversation) == option) {
                            // Message belongs to current option, add the conversation.
                            this.addLastOfflineMessage(conversation, message);
                            this.addOfflineConversation(conversation);
                        }
                    }
                }
                else if (option.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL) {
                    // It's a new conversation. Check if we already created it (there is more than one message for the same user).
                    const conversation = this.findConversation(undefined, message.touserid, option);
                    message.text = message.smallmessage;
                    if (conversation) {
                        // Check if it's the last message. Offline messages are considered more recent than sent messages.
                        if ((conversation.lastmessagedate || 0) <= message.timecreated / 1000) {
                            this.addLastOfflineMessage(conversation, message);
                        }
                    }
                    else {
                        // Get the user data and create a new conversation if it belongs to the current option.
                        promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(message.touserid, undefined, true).catch(() => {
                            // User not found.
                        }).then((user) => {
                            const conversation = {
                                id: 0,
                                type: _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
                                membercount: 0,
                                ismuted: false,
                                isfavourite: false,
                                isread: false,
                                members: [],
                                messages: [],
                                candeletemessagesforallusers: false,
                                userid: message.touserid,
                                name: user ? user.fullname : String(message.touserid),
                                imageurl: user ? user.profileimageurl : '',
                            };
                            this.addLastOfflineMessage(conversation, message);
                            this.addOfflineConversation(conversation);
                            return;
                        }));
                    }
                }
            });
            yield Promise.all(promises);
        });
    }
    /**
     * Add an offline conversation into the right list of conversations.
     *
     * @param conversation Offline conversation to add.
     */
    addOfflineConversation(conversation) {
        const option = this.getConversationOption(conversation);
        option.conversations.unshift(conversation);
    }
    /**
     * Add a last offline message into a conversation.
     *
     * @param conversation Conversation where to put the last message.
     * @param message Offline message to add.
     */
    addLastOfflineMessage(conversation, message) {
        conversation.lastmessage = message.text;
        conversation.lastmessagedate = message.timecreated / 1000;
        conversation.lastmessagepending = true;
        conversation.sentfromcurrentuser = true;
    }
    /**
     * Given a conversation, return its option (favourites, group, individual).
     *
     * @param conversation Conversation to check.
     * @returns Option object.
     */
    getConversationOption(conversation) {
        if (conversation.isfavourite) {
            return this.favourites;
        }
        if (conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP) {
            return this.group;
        }
        return this.individual;
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param refreshUnreadCounts Whether to refresh unread counts.
     * @returns Promise resolved when done.
     */
    refreshData(refresher, refreshUnreadCounts = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't invalidate conversations and so, they always try to get latest data.
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateContactRequestsCountCache(this.siteId);
            }
            finally {
                try {
                    yield this.fetchData(refreshUnreadCounts);
                }
                finally {
                    if (refresher) {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    }
                }
            }
        });
    }
    /**
     * Toogle the visibility of an option (expand/collapse).
     *
     * @param option The option to expand/collapse.
     */
    toggle(option) {
        if (option.expanded) {
            // Already expanded, close it.
            option.expanded = false;
            this.loadCurrentListElement();
        }
        else {
            // Pass getCounts=true to update the counts everytime the user expands an option.
            this.expandOption(option, true).catch((error) => {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
            });
        }
    }
    /**
     * Expand a certain option.
     *
     * @param option The option to expand.
     * @param getCounts Whether to get counts data.
     * @returns Promise resolved when done.
     */
    expandOption(option, getCounts = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Collapse all and expand the right one.
            this.favourites.expanded = false;
            this.group.expanded = false;
            this.individual.expanded = false;
            option.expanded = true;
            option.loading = true;
            try {
                yield this.fetchDataForOption(option, false, getCounts);
                this.loadCurrentListElement();
            }
            catch (error) {
                option.expanded = false;
                throw error;
            }
            finally {
                option.loading = false;
            }
        });
    }
    /**
     * Load the current list element based on the expanded list.
     */
    loadCurrentListElement() {
        if (this.favourites.expanded) {
            this.currentListEl = this.favListEl && this.favListEl.nativeElement;
        }
        else if (this.group.expanded) {
            this.currentListEl = this.groupListEl && this.groupListEl.nativeElement;
        }
        else if (this.individual.expanded) {
            this.currentListEl = this.indListEl && this.indListEl.nativeElement;
        }
        else {
            this.currentListEl = undefined;
        }
    }
    /**
     * Navigate to the search page.
     */
    gotoSearch() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_13__["CoreNavigator"].navigateToSitePath('search');
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        (_a = this.newMessagesObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.appResumeSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        (_c = this.pushObserver) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        (_d = this.readChangedObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.cronObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.openConversationObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.updateConversationListObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.contactRequestsCountObserver) === null || _h === void 0 ? void 0 : _h.off();
        (_j = this.memberInfoObserver) === null || _j === void 0 ? void 0 : _j.off();
    }
};
AddonMessagesGroupConversationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
AddonMessagesGroupConversationsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_17__["CoreSplitViewComponent"],] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    favListEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['favlist',] }],
    groupListEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['grouplist',] }],
    indListEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['indlist',] }]
};
AddonMessagesGroupConversationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-group-conversations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./group-conversations.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/group-conversations/group-conversations.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../messages-common.scss */ "./src/addons/messages/messages-common.scss")).default]
    })
], AddonMessagesGroupConversationsPage);



/***/ }),

/***/ "./src/addons/messages/pages/search/search.ts":
/*!****************************************************!*\
  !*** ./src/addons/messages/pages/search/search.ts ***!
  \****************************************************/
/*! exports provided: AddonMessagesSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSearchPage", function() { return AddonMessagesSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
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
 * Page for searching users.
 */
let AddonMessagesSearchPage = class AddonMessagesSearchPage {
    constructor() {
        this.disableSearch = false;
        this.displaySearching = false;
        this.displayResults = false;
        this.query = '';
        this.contacts = {
            type: 'contacts',
            titleString: 'addon.messages.contacts',
            results: [],
            canLoadMore: false,
            loadingMore: false,
        };
        this.nonContacts = {
            type: 'noncontacts',
            titleString: 'addon.messages.noncontacts',
            results: [],
            canLoadMore: false,
            loadingMore: false,
        };
        this.messages = {
            type: 'messages',
            titleString: 'addon.messages.messages',
            results: [],
            canLoadMore: false,
            loadingMore: false,
            loadMoreError: false,
        };
        // Update block status of a user.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (!data.userBlocked && !data.userUnblocked) {
                // The block status has not changed, ignore.
                return;
            }
            const contact = this.contacts.results.find((user) => user.id == data.userId);
            if (contact) {
                contact.isblocked = !!data.userBlocked;
            }
            else {
                const nonContact = this.nonContacts.results.find((user) => user.id == data.userId);
                if (nonContact) {
                    nonContact.isblocked = !!data.userBlocked;
                }
            }
            this.messages.results.forEach((message) => {
                if (message.userid == data.userId) {
                    message.isblocked = !!data.userBlocked;
                }
            });
        }, _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Clear search.
     */
    clearSearch() {
        this.query = '';
        this.displayResults = false;
        // Empty details.
        const path = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRelativePathToParent('/messages/search');
        if (path) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate(path);
        }
    }
    /**
     * Start a new search or load more results.
     *
     * @param query Text to search for.
     * @param loadMore Load more contacts, noncontacts or messages. If undefined, start a new search.
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @returns Resolved when done.
     */
    search(query, loadMore, infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_6__["CoreApp"].closeKeyboard();
            this.query = query;
            this.disableSearch = true;
            this.displaySearching = !loadMore;
            const promises = [];
            let newContacts = [];
            let newNonContacts = [];
            let newMessages = [];
            let canLoadMoreContacts = false;
            let canLoadMoreNonContacts = false;
            let canLoadMoreMessages = false;
            if (!loadMore || loadMore == 'contacts' || loadMore == 'noncontacts') {
                const limitNum = loadMore ? _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].LIMIT_SEARCH : _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesProvider"].LIMIT_INITIAL_USER_SEARCH;
                let limitFrom = 0;
                if (loadMore == 'contacts') {
                    limitFrom = this.contacts.results.length;
                    this.contacts.loadingMore = true;
                }
                else if (loadMore == 'noncontacts') {
                    limitFrom = this.nonContacts.results.length;
                    this.nonContacts.loadingMore = true;
                }
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchUsers(query, limitFrom, limitNum).then((result) => {
                    if (!loadMore || loadMore == 'contacts') {
                        newContacts = result.contacts;
                        canLoadMoreContacts = result.canLoadMoreContacts;
                    }
                    if (!loadMore || loadMore == 'noncontacts') {
                        newNonContacts = result.nonContacts;
                        canLoadMoreNonContacts = result.canLoadMoreNonContacts;
                    }
                    return;
                }));
            }
            if (!loadMore || loadMore == 'messages') {
                let limitFrom = 0;
                if (loadMore == 'messages') {
                    limitFrom = this.messages.results.length;
                    this.messages.loadingMore = true;
                }
                promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].searchMessages(query, undefined, limitFrom).then((result) => {
                    newMessages = result.messages;
                    canLoadMoreMessages = result.canLoadMore;
                    return;
                }));
            }
            try {
                yield Promise.all(promises);
                if (!loadMore) {
                    this.contacts.results = [];
                    this.nonContacts.results = [];
                    this.messages.results = [];
                }
                this.displayResults = true;
                if (!loadMore || loadMore == 'contacts') {
                    this.contacts.results.push(...newContacts);
                    this.contacts.canLoadMore = canLoadMoreContacts;
                    this.setHighlight(newContacts, true);
                }
                if (!loadMore || loadMore == 'noncontacts') {
                    this.nonContacts.results.push(...newNonContacts);
                    this.nonContacts.canLoadMore = canLoadMoreNonContacts;
                    this.setHighlight(newNonContacts, true);
                }
                if (!loadMore || loadMore == 'messages') {
                    this.messages.results.push(...newMessages);
                    this.messages.canLoadMore = canLoadMoreMessages;
                    this.messages.loadMoreError = false;
                    this.setHighlight(newMessages, false);
                }
                if (!loadMore) {
                    if (this.contacts.results.length > 0) {
                        this.openConversation(this.contacts.results[0], true);
                    }
                    else if (this.nonContacts.results.length > 0) {
                        this.openConversation(this.nonContacts.results[0], true);
                    }
                    else if (this.messages.results.length > 0) {
                        this.openConversation(this.messages.results[0], true);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingusers', true);
                if (loadMore == 'messages') {
                    this.messages.loadMoreError = true;
                }
            }
            finally {
                this.disableSearch = false;
                this.displaySearching = false;
                if (loadMore == 'contacts') {
                    this.contacts.loadingMore = false;
                }
                else if (loadMore == 'noncontacts') {
                    this.nonContacts.loadingMore = false;
                }
                else if (loadMore == 'messages') {
                    this.messages.loadingMore = false;
                }
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Open a conversation in the split view.
     *
     * @param result User or message.
     * @param onInit Whether the tser was selected on initial load.
     */
    openConversation(result, onInit = false) {
        if (!onInit || _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet) {
            this.selectedResult = result;
            let conversationId;
            let userId;
            if ('conversationid' in result) {
                conversationId = result.conversationid;
            }
            else {
                userId = result.id;
            }
            const path = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRelativePathToParent('/messages/search') + 'discussion/' +
                (conversationId ? conversationId : `user/${userId}`);
            _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate(path, {
                reset: _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet && !!this.splitView && !this.splitView.isNested,
            });
        }
    }
    /**
     * Set the highlight values for each entry.
     *
     * @param results Results to highlight.
     * @param isUser Whether the results are from a user search or from a message search.
     */
    setHighlight(results, isUser = false) {
        results.forEach((result) => {
            result.highlightName = isUser ? this.query : undefined;
            result.highlightMessage = !isUser ? this.query : undefined;
        });
    }
    /**
     * Component destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.memberInfoObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonMessagesSearchPage.ctorParameters = () => [];
AddonMessagesSearchPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_9__["CoreSplitViewComponent"],] }]
};
AddonMessagesSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/search/search.html")).default,
    })
], AddonMessagesSearchPage);



/***/ })

}]);
//# sourceMappingURL=messages-lazy-module.js.map