(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'addon.calendar.calendarevents' | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openFilter()\" [attr.aria-label]=\"'core.filter' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-filter\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <core-context-menu>\r\n                <core-context-menu-item *ngIf=\"!selectedDayIsCurrent()\" [priority]=\"900\" [content]=\"'addon.calendar.today' | translate\"\r\n                    iconAction=\"fas-calendar-day\" (action)=\"goToCurrentDay()\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!loaded || !selectedDayHasOffline() || !isOnline\" [priority]=\"400\"\r\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event)\" [iconAction]=\"syncIcon\"\r\n                    [closeOnClick]=\"false\">\r\n                </core-context-menu-item>\r\n            </core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <div class=\"core-swipe-slides-container\">\r\n            <!-- Period name and arrows to navigate. -->\r\n            <ion-grid class=\"ion-no-padding safe-area-padding\">\r\n                <ion-row class=\"ion-align-items-center\">\r\n                    <ion-col class=\"ion-text-start\">\r\n                        <ion-button fill=\"clear\" (click)=\"loadPrevious()\" [attr.aria-label]=\"'addon.calendar.dayprev' | translate\">\r\n                            <ion-icon name=\"fas-chevron-left\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-center addon-calendar-period\">\r\n                        <h2>{{ periodName }}</h2>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-text-end\">\r\n                        <ion-button fill=\"clear\" (click)=\"loadNext()\" [attr.aria-label]=\"'addon.calendar.daynext' | translate\">\r\n                            <ion-icon name=\"fas-chevron-right\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n\r\n            <core-swipe-slides [manager]=\"manager\">\r\n                <ng-template let-day=\"item\">\r\n                    <core-loading [hideUntil]=\"day.loaded\">\r\n                        <!-- There is data to be synchronized -->\r\n                        <ion-card class=\"core-warning-card list-item-limited-width\" *ngIf=\"day.hasOffline\">\r\n                            <ion-item>\r\n                                <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'core.day' | translate} }}</ion-label>\r\n                            </ion-item>\r\n                        </ion-card>\r\n\r\n                        <core-empty-box *ngIf=\"!day.filteredEvents || !day.filteredEvents.length\" icon=\"fas-calendar\"\r\n                            [message]=\"'addon.calendar.noevents' | translate\">\r\n                        </core-empty-box>\r\n\r\n                        <ion-list *ngIf=\"day.filteredEvents && day.filteredEvents.length\" class=\"list-item-limited-width\">\r\n                            <ng-container *ngFor=\"let event of day.filteredEvents\">\r\n                                <ion-card>\r\n                                    <ion-item class=\"addon-calendar-event ion-text-wrap\" [attr.aria-label]=\"event.name\"\r\n                                        (click)=\"gotoEvent(event.id, day)\" [class.item-dimmed]=\"event.ispast\"\r\n                                        [ngClass]=\"['addon-calendar-eventtype-'+event.eventtype]\" button [detail]=\"false\">\r\n                                        <core-mod-icon *ngIf=\"event.moduleIcon\" [modicon]=\"event.moduleIcon\" slot=\"start\" [showAlt]=\"false\"\r\n                                            [modname]=\"event.modulename\" [componentId]=\"event.instance\" [purpose]=\"event.purpose\">\r\n                                        </core-mod-icon>\r\n                                        <ion-icon *ngIf=\"event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" slot=\"start\"\r\n                                            aria-hidden=\"true\">\r\n                                        </ion-icon>\r\n                                        <ion-label>\r\n                                            <!-- Add the icon title so accessibility tools read it. -->\r\n                                            <span class=\"sr-only\">\r\n                                                {{ 'addon.calendar.type' + event.formattedType | translate }}\r\n                                                <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle\r\n                                                    }}</span>\r\n                                            </span>\r\n                                            <p class=\"item-heading\">\r\n                                                <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\r\n                                                    [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\r\n                                            </p>\r\n                                            <p>\r\n                                                <core-format-text [text]=\"event.formattedtime\" [filter]=\"false\"></core-format-text>\r\n                                            </p>\r\n                                        </ion-label>\r\n                                        <ion-note *ngIf=\"event.offline && !event.deleted\" slot=\"end\">\r\n                                            <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon>\r\n                                            <span class=\"ion-text-wrap\">{{ 'core.notsent' | translate }}</span>\r\n                                        </ion-note>\r\n                                        <ion-note *ngIf=\"event.deleted\" slot=\"end\">\r\n                                            <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon>\r\n                                            <span class=\"ion-text-wrap\">{{ 'core.deletedoffline' | translate }}</span>\r\n                                        </ion-note>\r\n                                    </ion-item>\r\n                                </ion-card>\r\n                            </ng-container>\r\n                        </ion-list>\r\n                    </core-loading>\r\n                </ng-template>\r\n            </core-swipe-slides>\r\n        </div>\r\n    </core-loading>\r\n\r\n    <!-- Create a calendar event. -->\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"canCreate && loaded\">\r\n        <ion-fab-button (click)=\"openEdit()\" [attr.aria-label]=\"'addon.calendar.newevent' | translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'addon.calendar.newevent' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/edit-event/edit-event.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/edit-event/edit-event.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ title | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <form [formGroup]=\"form\" *ngIf=\"!error\" #editEventForm>\r\n            <!-- Event name. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'addon.calendar.eventname' | translate }}</p>\r\n                </ion-label>\r\n                <ion-input type=\"text\" name=\"name\" [placeholder]=\"'addon.calendar.eventname' | translate\" formControlName=\"name\">\r\n                </ion-input>\r\n                <core-input-errors [control]=\"form.controls.name\" [errorMessages]=\"errors\"></core-input-errors>\r\n            </ion-item>\r\n\r\n            <!-- Date. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.date' | translate }}</p>\r\n                </ion-label>\r\n                <ion-datetime formControlName=\"timestart\" [placeholder]=\"'core.date' | translate\" [displayFormat]=\"dateFormat\"\r\n                    [max]=\"maxDate\" [min]=\"minDate\" [displayTimezone]=\"displayTimezone\">\r\n                </ion-datetime>\r\n                <core-input-errors [control]=\"form.controls.timestart\" [errorMessages]=\"errors\"></core-input-errors>\r\n            </ion-item>\r\n\r\n            <!-- Type. -->\r\n            <ion-item class=\"ion-text-wrap addon-calendar-eventtype-container\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'addon.calendar.eventkind' | translate }}</p>\r\n                </ion-label>\r\n                <p *ngIf=\"eventTypes.length == 1\" slot=\"end\">{{eventTypes[0].name | translate }}</p>\r\n                <ion-select *ngIf=\"eventTypes.length > 1\" formControlName=\"eventtype\" interface=\"action-sheet\"\r\n                    [cancelText]=\"'core.cancel' | translate\" [interfaceOptions]=\"{header: 'addon.calendar.eventkind' | translate}\">\r\n                    <ion-select-option *ngFor=\"let type of eventTypes\" [value]=\"type.value\">\r\n                        {{ type.name | translate }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Category. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"typeControl.value == 'category'\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.category' | translate }}</p>\r\n                </ion-label>\r\n                <ion-select formControlName=\"categoryid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                    [cancelText]=\"'core.cancel' | translate\" [interfaceOptions]=\"{header: 'core.category' | translate}\">\r\n                    <ion-select-option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n                        {{ category.name }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Course. -->\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"typeControl.value == 'course'\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.course' | translate }}</p>\r\n                </ion-label>\r\n                <ion-select formControlName=\"courseid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                    [cancelText]=\"'core.cancel' | translate\" [interfaceOptions]=\"{header: 'core.course' | translate}\">\r\n                    <ion-select-option *ngFor=\"let course of courses\" [value]=\"course.id\">{{ course.fullname }}</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- Group. -->\r\n            <ng-container *ngIf=\"typeControl.value == 'group'\">\r\n                <!-- Select the course. -->\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.course' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-select formControlName=\"groupcourseid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                        [cancelText]=\"'core.cancel' | translate\" (ionChange)=\"groupCourseSelected()\"\r\n                        [interfaceOptions]=\"{header: 'core.course' | translate}\">\r\n                        <ion-select-option *ngFor=\"let course of courses\" [value]=\"course.id\">\r\n                            {{ course.fullname }}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <!-- The course has no groups. -->\r\n                <ion-item class=\"ion-text-wrap core-danger-item\" *ngIf=\"!loadingGroups && courseGroupSet && !groups.length\">\r\n                    <ion-label>\r\n                        <p>{{ 'core.coursenogroups' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <!-- Select the group. -->\r\n                <ion-item class=\"ion-text-wrap core-edit-set-group\" *ngIf=\"!loadingGroups && groups.length > 0\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\" [core-mark-required]=\"true\">{{ 'core.group' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-select formControlName=\"groupid\" interface=\"action-sheet\" [placeholder]=\"'core.noselection' | translate\"\r\n                        [cancelText]=\"'core.cancel' | translate\" [interfaceOptions]=\"{header: 'core.group' | translate}\">\r\n                        <ion-select-option *ngFor=\"let group of groups\" [value]=\"group.id\">{{ group.name }}</ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <!-- Loading groups. -->\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"loadingGroups\">\r\n                    <ion-label>\r\n                        <ion-spinner *ngIf=\"loadingGroups\" [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Reminders. Right now, only allow adding them here for new events. -->\r\n            <ng-container *ngIf=\"remindersEnabled && !eventId\">\r\n                <ion-item-divider class=\"addon-calendar-reminders-title\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.calendar.reminders' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-button fill=\"clear\" (click)=\"addReminder()\" slot=\"end\"\r\n                        [attr.aria-label]=\"'addon.calendar.setnewreminder' | translate\">\r\n                        <ion-icon name=\"fas-plus\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item-divider>\r\n                <ion-item *ngFor=\"let reminder of reminders\" class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p>{{ reminder.label }}</p>\r\n                    </ion-label>\r\n                    <ion-button fill=\"clear\" (click)=\"removeReminder(reminder)\" [attr.aria-label]=\"'core.delete' | translate\" slot=\"end\">\r\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Duration. -->\r\n            <div class=\"ion-text-wrap addon-calendar-radio-container\">\r\n                <ion-radio-group formControlName=\"duration\">\r\n                    <ion-item-divider class=\"addon-calendar-radio-title\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.calendar.eventduration' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.durationnone' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" [value]=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.durationuntil' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" [value]=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"form.controls.duration.value === 1\">\r\n                        <ion-label position=\"stacked\"></ion-label>\r\n                        <ion-datetime formControlName=\"timedurationuntil\" [max]=\"maxDate\" [min]=\"minDate\"\r\n                            [placeholder]=\"'addon.calendar.durationuntil' | translate\" [displayFormat]=\"dateFormat\"\r\n                            [displayTimezone]=\"displayTimezone\">\r\n                        </ion-datetime>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.durationminutes' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" [value]=\"2\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"form.controls.duration.value === 2\">\r\n                        <ion-label class=\"sr-only\">{{ 'addon.calendar.durationminutes' | translate }}</ion-label>\r\n                        <ion-input type=\"number\" name=\"timedurationminutes\" slot=\"end\"\r\n                            [placeholder]=\"'addon.calendar.durationminutes' | translate\" formControlName=\"timedurationminutes\"></ion-input>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n\r\n            <!-- Repeat (for new events). -->\r\n            <ng-container *ngIf=\"!eventId || eventId < 0\">\r\n                <ion-item class=\"ion-text-wrap divider\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'addon.calendar.repeatevent' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-checkbox slot=\"end\" formControlName=\"repeat\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label position=\"stacked\">\r\n                        <p class=\"item-heading\">{{ 'addon.calendar.repeatweeksl' | translate }}</p>\r\n                    </ion-label>\r\n                    <ion-input type=\"number\" name=\"repeats\" formControlName=\"repeats\" [disabled]=\"!form.controls.repeat.value\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <!-- Apply to all events or just this one (editing repeated events). -->\r\n            <div *ngIf=\"eventRepeatId\" class=\"ion-text-wrap addon-calendar-radio-container\">\r\n                <ion-radio-group formControlName=\"repeateditall\">\r\n                    <ion-item-divider class=\"addon-calendar-radio-title\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'addon.calendar.repeatedevents' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.repeateditall' | translate:{$a: otherEventsCount} }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" value=\"1\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <p>{{ 'addon.calendar.repeateditthis' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-radio slot=\"end\" value=\"0\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </div>\r\n\r\n            <!-- Description. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\">{{ 'core.description' | translate }}</p>\r\n                </ion-label>\r\n                <core-rich-text-editor [control]=\"descriptionControl\" [attr.aria-label]=\"'core.description' | translate\"\r\n                    [placeholder]=\"'core.description' | translate\" name=\"description\" [component]=\"component\" [componentId]=\"eventId\"\r\n                    [autoSave]=\"false\"></core-rich-text-editor>\r\n            </ion-item>\r\n\r\n            <!-- Location. -->\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label position=\"stacked\">\r\n                    <p class=\"item-heading\">{{ 'core.location' | translate }}</p>\r\n                </ion-label>\r\n                <ion-input type=\"text\" name=\"location\" [placeholder]=\"'core.location' | translate\" formControlName=\"location\">\r\n                </ion-input>\r\n            </ion-item>\r\n        </form>\r\n        <div collapsible-footer appearOnBottom *ngIf=\"loaded && !error\" slot=\"fixed\">\r\n            <div class=\"list-item-limited-width adaptable-buttons-row\">\r\n                <ion-button expand=\"block\" (click)=\"submit()\" [disabled]=\"!form.valid\" type=\"submit\" class=\"ion-margin ion-text-wrap\">\r\n                    {{ 'core.save' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header collapsible>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1 *ngIf=\"event\">\r\n                <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\" [contextInstanceId]=\"event.contextInstanceId\">\r\n                </core-format-text>\r\n            </h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <core-context-menu>\r\n                <core-context-menu-item [hidden]=\"!eventLoaded || (!hasOffline && event && !event.deleted) || !isOnline\" [priority]=\"400\"\r\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event, true)\"\r\n                    [iconAction]=\"syncIcon\" [closeOnClick]=\"false\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!event || !event.canedit || event.deleted || (!canEdit && event.id > 0)\" [priority]=\"300\"\r\n                    [content]=\"'core.edit' | translate\" (action)=\"openEdit()\" iconAction=\"fas-pen\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!event || !event.candelete || event.deleted\" [priority]=\"200\"\r\n                    [content]=\"'core.delete' | translate\" (action)=\"deleteEvent()\" iconAction=\"fas-trash\"></core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!event || !event.deleted\" [priority]=\"200\" [content]=\"'core.restore' | translate\"\r\n                    (action)=\"undoDelete()\" iconAction=\"fas-rotate-left\"></core-context-menu-item>\r\n            </core-context-menu>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content [core-swipe-navigation]=\"events\">\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!eventLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"eventLoaded\">\r\n        <ion-list *ngIf=\"event\">\r\n            <ion-item class=\"ion-text-wrap addon-calendar-event\" collapsible [ngClass]=\"['addon-calendar-eventtype-'+event.eventtype]\">\r\n                <core-mod-icon *ngIf=\"event.moduleIcon\" [modicon]=\"event.moduleIcon\" [showAlt]=\"false\" [modname]=\"event.modulename\"\r\n                    [componentId]=\"event.instance\" slot=\"start\" [purpose]=\"event.purpose\"></core-mod-icon>\r\n                <ion-icon *ngIf=\" event.eventIcon && !event.moduleIcon\" [name]=\"event.eventIcon\" aria-hidden=\"true\" slot=\"start\">\r\n                </ion-icon>\r\n                <ion-label>\r\n                    <!-- Add the icon title so accessibility tools read it. -->\r\n                    <span class=\"sr-only\">\r\n                        {{ 'addon.calendar.type' + event.formattedType | translate }}\r\n                        <span class=\"sr-only\" *ngIf=\"event.moduleIcon && event.iconTitle\">{{ event.iconTitle }}</span>\r\n                    </span>\r\n                    <h1>\r\n                        <core-format-text [text]=\"event.name\" [contextLevel]=\"event.contextLevel\"\r\n                            [contextInstanceId]=\"event.contextInstanceId\">\r\n                        </core-format-text>\r\n                    </h1>\r\n                </ion-label>\r\n            </ion-item>\r\n            <!-- There is data to be synchronized -->\r\n            <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline || event.deleted\">\r\n                <ion-item>\r\n                    <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                    <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'addon.calendar.calendarevent' | translate} }}</ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.calendar.when' | translate }}</p>\r\n                    <core-format-text [text]=\"event.formattedtime\" [filter]=\"false\"></core-format-text>\r\n                </ion-label>\r\n                <ion-note slot=\"end\" *ngIf=\"event.deleted\">\r\n                    <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> {{ 'core.deletedoffline' | translate }}\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.calendar.eventtype' | translate }}</p>\r\n                    <p>{{ 'addon.calendar.type' + event.formattedType | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"courseName\" [href]=\"courseUrl\" core-link capture=\"true\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.course' | translate}}</p>\r\n                    <p>\r\n                        <core-format-text [text]=\"courseName\" contextLevel=\"course\" [contextInstanceId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap core-groupname\" *ngIf=\"groupName\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.group' | translate}}</p>\r\n                    <p>\r\n                        <core-format-text [text]=\"groupName\" contextLevel=\"course\" [contextInstanceId]=\"event.courseid\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"categoryPath\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.category' | translate}}</p>\r\n                    <p>\r\n                        <core-format-text [text]=\"categoryPath\" contextLevel=\"coursecat\" [contextInstanceId]=\"event.categoryid\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"event.description\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.description' | translate}}</p>\r\n                    <p>\r\n                        <core-format-text [text]=\"event.description\" [contextLevel]=\"event.contextLevel\"\r\n                            [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"event.location\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.location' | translate}}</p>\r\n                    <p>\r\n                        <a [href]=\"event.encodedLocation\" core-link auto-login=\"no\">\r\n                            <core-format-text [text]=\"event.location\" [contextLevel]=\"event.contextLevel\"\r\n                                [contextInstanceId]=\"event.contextInstanceId\"></core-format-text>\r\n                        </a>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"moduleUrl\">\r\n                <ion-label>\r\n                    <ion-button expand=\"block\" [href]=\"moduleUrl\" core-link capture=\"true\">\r\n                        {{ 'addon.calendar.gotoactivity' | translate }}\r\n                    </ion-button>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-card *ngIf=\"remindersEnabled && event\">\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>{{ 'addon.calendar.reminders' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ng-container *ngFor=\"let reminder of reminders\">\r\n                <ion-item *ngIf=\"reminder.timestamp > 0\" class=\"ion-text-wrap\" [class.item-dimmed]=\"reminder.timestamp <= currentTime\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ reminder.label }}</p>\r\n                        <p *ngIf=\"reminder.sublabel\">{{ reminder.sublabel }}</p>\r\n                    </ion-label>\r\n                    <ion-button fill=\"clear\" (click)=\"deleteReminder(reminder.id, $event)\" [attr.aria-label]=\"'core.delete' | translate\"\r\n                        slot=\"end\">\r\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"event.timestart > currentTime\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <ion-button expand=\"block\" (click)=\"addReminder()\">\r\n                            {{ 'addon.calendar.setnewreminder' | translate }}\r\n                        </ion-button>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ (showCalendar ? 'addon.calendar.calendarevents' : 'addon.calendar.upcomingevents') | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openFilter()\" [attr.aria-label]=\"'core.filter' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-filter\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <core-context-menu>\r\n                <core-context-menu-item *ngIf=\"showCalendar\" [priority]=\"800\" [content]=\"'addon.calendar.upcomingevents' | translate\"\r\n                    iconAction=\"fas-table-list\" (action)=\"toggleDisplay()\"></core-context-menu-item>\r\n                <core-context-menu-item *ngIf=\"!showCalendar\" [priority]=\"800\" [content]=\"'addon.calendar.monthlyview' | translate\"\r\n                    iconAction=\"fas-calendar-days\" (action)=\"toggleDisplay()\"></core-context-menu-item>\r\n                <core-context-menu-item [priority]=\"600\" [content]=\"'core.settings.settings' | translate\" (action)=\"openSettings()\"\r\n                    iconAction=\"fas-gears\">\r\n                </core-context-menu-item>\r\n                <core-context-menu-item [hidden]=\"!loaded || !hasOffline || !isOnline\" [priority]=\"400\"\r\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"doRefresh(undefined, $event, true)\"\r\n                    [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"></core-context-menu-item>\r\n            </core-context-menu>\r\n            <core-user-menu-button></core-user-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <!-- There is data to be synchronized -->\r\n    <ion-card class=\"core-warning-card\" *ngIf=\"hasOffline\">\r\n        <ion-item>\r\n            <ion-icon name=\"fas-triangle-exclamation\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>{{ 'core.hasdatatosync' | translate:{$a: 'addon.calendar.calendar' | translate} }}</ion-label>\r\n        </ion-item>\r\n    </ion-card>\r\n\r\n    <addon-calendar-calendar [hidden]=\"!showCalendar\" [initialYear]=\"year\" [initialMonth]=\"month\" [filter]=\"filter\"\r\n        [displayNavButtons]=\"showCalendar\" (onEventClicked)=\"gotoEvent($event)\" (onDayClicked)=\"gotoDay($event)\">\r\n    </addon-calendar-calendar>\r\n\r\n    <addon-calendar-upcoming-events *ngIf=\"loadUpcoming\" [hidden]=\"showCalendar\" [filter]=\"filter\" (onEventClicked)=\"gotoEvent($event)\">\r\n    </addon-calendar-upcoming-events>\r\n\r\n    <!-- Create a calendar event. -->\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"canCreate\">\r\n        <ion-fab-button (click)=\"openEdit()\" [attr.aria-label]=\"'addon.calendar.newevent' | translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'addon.calendar.newevent' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <h1>{{ 'core.settings.settings' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item *ngIf=\"defaultTimeLabel\">\r\n            <ion-label>{{ 'addon.calendar.defaultnotificationtime' | translate }}</ion-label>\r\n            <ion-select [(ngModel)]=\"defaultTimeLabel\" (click)=\"changeDefaultTime($event)\">\r\n                <ion-select-option [value]=\"defaultTimeLabel\">{{ defaultTimeLabel }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/calendar/calendar-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/calendar/calendar-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonCalendarLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarLazyModule", function() { return AddonCalendarLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _addons_calendar_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addons/calendar/components/components.module */ "./src/addons/calendar/components/components.module.ts");
/* harmony import */ var _addons_calendar_pages_day_day__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/calendar/pages/day/day */ "./src/addons/calendar/pages/day/day.ts");
/* harmony import */ var _addons_calendar_pages_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @addons/calendar/pages/edit-event/edit-event */ "./src/addons/calendar/pages/edit-event/edit-event.ts");
/* harmony import */ var _addons_calendar_pages_event_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/calendar/pages/event/event */ "./src/addons/calendar/pages/event/event.ts");
/* harmony import */ var _addons_calendar_pages_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/calendar/pages/index */ "./src/addons/calendar/pages/index/index.ts");
/* harmony import */ var _addons_calendar_pages_settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @addons/calendar/pages/settings/settings */ "./src/addons/calendar/pages/settings/settings.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/mainmenu/components/components.module */ "./src/core/features/mainmenu/components/components.module.ts");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/addons/calendar/services/handlers/mainmenu.ts");
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
            path: 'index',
            data: { mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarMainMenuHandlerService"].PAGE_NAME },
            component: _addons_calendar_pages_index__WEBPACK_IMPORTED_MODULE_6__["AddonCalendarIndexPage"],
        },
        {
            path: 'calendar-settings',
            component: _addons_calendar_pages_settings_settings__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarSettingsPage"],
        },
        {
            path: 'day',
            component: _addons_calendar_pages_day_day__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarDayPage"],
        },
        {
            path: 'event/:id',
            component: _addons_calendar_pages_event_event__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEventPage"],
        },
        {
            path: 'edit/:eventId',
            component: _addons_calendar_pages_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarEditEventPage"],
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_12__["buildTabMainRoutes"])(injector, {
            redirectTo: 'index',
            pathMatch: 'full',
        }),
    ];
}
let AddonCalendarLazyModule = class AddonCalendarLazyModule {
};
AddonCalendarLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _addons_calendar_components_components_module__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarComponentsModule"],
            _features_mainmenu_components_components_module__WEBPACK_IMPORTED_MODULE_11__["CoreMainMenuComponentsModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_10__["CoreEditorComponentsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
        declarations: [
            _addons_calendar_pages_day_day__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarDayPage"],
            _addons_calendar_pages_edit_event_edit_event__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarEditEventPage"],
            _addons_calendar_pages_event_event__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarEventPage"],
            _addons_calendar_pages_index__WEBPACK_IMPORTED_MODULE_6__["AddonCalendarIndexPage"],
            _addons_calendar_pages_settings_settings__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarSettingsPage"],
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], AddonCalendarLazyModule);



/***/ }),

/***/ "./src/addons/calendar/classes/events-source.ts":
/*!******************************************************!*\
  !*** ./src/addons/calendar/classes/events-source.ts ***!
  \******************************************************/
/*! exports provided: AddonCalendarEventsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventsSource", function() { return AddonCalendarEventsSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
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
 * Provides a collection of calendar events.
 */
class AddonCalendarEventsSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(date) {
        super();
        this.events = [];
        this.DATE = date;
    }
    /**
     * Set events.
     *
     * @param events Events.
     */
    setEvents(events) {
        this.events = events;
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return { items: this.events.slice(0) };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(event) {
        return event.id.toString();
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return { date: this.DATE };
    }
}


/***/ }),

/***/ "./src/addons/calendar/pages/day/day.scss":
/*!************************************************!*\
  !*** ./src/addons/calendar/pages/day/day.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-swipe-slides-container ion-grid {\n  flex: none;\n  width: 100%;\n}\n:host .addon-calendar-period {\n  flex-grow: 3;\n}\n:host .addon-calendar-period h2 {\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZGF5L2RheS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFBUjtBQUdJO0VBQ0ksWUFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQVoiLCJmaWxlIjoic3JjL2FkZG9ucy9jYWxlbmRhci9wYWdlcy9kYXkvZGF5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAuY29yZS1zd2lwZS1zbGlkZXMtY29udGFpbmVyIGlvbi1ncmlkIHtcclxuICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRvbi1jYWxlbmRhci1wZXJpb2Qge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/addons/calendar/pages/day/day.ts":
/*!**********************************************!*\
  !*** ./src/addons/calendar/pages/day/day.ts ***!
  \**********************************************/
/*! exports provided: AddonCalendarDayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarDayPage", function() { return AddonCalendarDayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _components_filter_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/filter/filter */ "./src/addons/calendar/components/filter/filter.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _classes_items_management_swipe_slides_dynamic_items_manager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @classes/items-management/swipe-slides-dynamic-items-manager */ "./src/core/classes/items-management/swipe-slides-dynamic-items-manager.ts");
/* harmony import */ var _components_swipe_slides_swipe_slides__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/swipe-slides/swipe-slides */ "./src/core/components/swipe-slides/swipe-slides.ts");
/* harmony import */ var _classes_items_management_swipe_slides_dynamic_items_manager_source__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @classes/items-management/swipe-slides-dynamic-items-manager-source */ "./src/core/classes/items-management/swipe-slides-dynamic-items-manager-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @addons/calendar/classes/events-source */ "./src/addons/calendar/classes/events-source.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _singletons_time__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @singletons/time */ "./src/core/singletons/time.ts");
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
 * Page that displays the calendar events for a certain day.
 */
let AddonCalendarDayPage = class AddonCalendarDayPage {
    constructor() {
        this.loaded = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
        this.filter = {
            filtered: false,
            courseId: undefined,
            categoryId: undefined,
            course: true,
            group: true,
            site: true,
            user: true,
            category: true,
        };
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            var _a;
            if (data && data.eventId) {
                (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
                this.refreshData(true, true);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, () => {
            var _a;
            (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
            this.refreshData(true, true);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            var _a;
            if (data && data.eventId) {
                (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
                this.refreshData(true, true);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSyncProvider"].AUTO_SYNCED, () => {
            var _a;
            (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAllItemsUnloaded();
            this.refreshData(false, true);
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => {
            var _a, _b;
            const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
            if (data && (data.source != 'day' || !selectedDay || !data.moment || !selectedDay.moment.isSame(data.moment, 'day'))) {
                (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().markAllItemsUnloaded();
                this.refreshData(false, true);
            }
        }, this.currentSiteId);
        // Update the events when an event is deleted.
        this.deleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].DELETED_EVENT_EVENT, (data) => {
            var _a, _b;
            if (data && !data.sent) {
                // Event was deleted in offline. Just mark it as deleted, no need to refresh.
                (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAsDeleted(data.eventId, true);
            }
            else {
                (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().markAllItemsUnloaded();
                this.refreshData(false, true);
            }
        }, this.currentSiteId);
        // Listen for events "undeleted" (offline).
        this.undeleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, (data) => {
            var _a;
            if (!data || !data.eventId) {
                return;
            }
            // Mark it as undeleted, no need to refresh.
            (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().markAsDeleted(data.eventId, false);
        }, this.currentSiteId);
        this.filterChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].FILTER_CHANGED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a, _b;
            this.filter = data;
            // Course viewed has changed, check if the user can create events for this course calendar.
            yield ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().loadCanCreate(this.filter.courseId));
            (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().filterAllDayEvents(this.filter);
        }));
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_15__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline();
            });
        });
        this.logView = _singletons_time__WEBPACK_IMPORTED_MODULE_26__["CoreTime"].once(() => {
            var _a;
            const day = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
            if (!day) {
                return;
            }
            const params = {
                course: this.filter.courseId,
                time: day.moment.unix(),
            };
            _services_analytics__WEBPACK_IMPORTED_MODULE_24__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_24__["CoreAnalyticsEventType"].VIEW_ITEM_LIST,
                ws: 'core_calendar_get_calendar_day_view',
                name: _singletons__WEBPACK_IMPORTED_MODULE_15__["Translate"].instant('addon.calendar.dayviewtitle', { $a: this.periodName }),
                data: Object.assign(Object.assign({}, params), { category: 'calendar' }),
                url: _services_utils_url__WEBPACK_IMPORTED_MODULE_25__["CoreUrlUtils"].addParamsToUrl('/calendar/view.php?view=day', params),
            });
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        const types = [];
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].enumKeys(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarEventType"]).forEach((name) => {
            var _a;
            const value = _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarEventType"][name];
            this.filter[name] = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteBooleanParam(name)) !== null && _a !== void 0 ? _a : true;
            types.push(value);
        });
        this.filter.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('courseId');
        this.filter.categoryId = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('categoryId');
        this.filter.filtered = this.filter.courseId !== undefined || types.some((name) => !this.filter[name]);
        const month = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('month');
        const source = new AddonCalendarDaySlidesItemsManagerSource(this, moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()({
            year: _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('year'),
            month: month ? month - 1 : undefined,
            date: _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('day'),
        }).startOf('day'));
        this.manager = new _classes_items_management_swipe_slides_dynamic_items_manager__WEBPACK_IMPORTED_MODULE_19__["CoreSwipeSlidesDynamicItemsManager"](source);
        this.managerUnsubscribe = this.manager.addListener({
            onSelectedItemUpdated: (item) => {
                this.onDayViewed(item);
            },
        });
        this.fetchData(true);
    }
    get canCreate() {
        var _a;
        return ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().canCreate) || false;
    }
    get timeFormat() {
        var _a;
        return ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().timeFormat) || 'core.strftimetime';
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @returns Promise resolved when done.
     */
    fetchData(sync) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
            this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline();
            if (sync) {
                yield this.sync();
            }
            try {
                yield ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().fetchData(this.filter.courseId));
                yield ((_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().load((_c = this.manager) === null || _c === void 0 ? void 0 : _c.getSelectedItem()));
                this.logView();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            this.loaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Update data related to day being viewed.
     *
     * @param day Day viewed.
     */
    onDayViewed(day) {
        this.periodName = _services_utils_time__WEBPACK_IMPORTED_MODULE_6__["CoreTimeUtils"].userDate(day.moment.unix() * 1000, 'core.strftimedaydate');
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @returns Promise resolved when done.
     */
    doRefresh(refresher, done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.loaded) {
                return;
            }
            yield this.refreshData(true).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the data.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param afterChange Whether the refresh is done after an event has changed or has been synced.
     * @returns Promise resolved when done.
     */
    refreshData(sync, afterChange) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_18__["CoreConstants"].ICON_LOADING;
            const selectedDay = ((_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem()) || null;
            // Don't invalidate day events after a change, it has already been handled.
            yield ((_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().invalidateContent(selectedDay, !afterChange));
            yield this.fetchData(sync);
        });
    }
    /**
     * Try to synchronize offline events.
     *
     * @param showErrors Whether to show sync errors to the user.
     * @returns Promise resolved when done.
     */
    sync(showErrors) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSync"].syncEvents();
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(undefined, result.warnings[0]);
                }
                if (result.updated) {
                    // Trigger a manual sync event.
                    const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
                    result.source = 'day';
                    result.moment = selectedDay === null || selectedDay === void 0 ? void 0 : selectedDay.moment;
                    (_b = this.manager) === null || _b === void 0 ? void 0 : _b.getSource().markAllItemsUnloaded();
                    _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                }
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
            }
        });
    }
    /**
     * Check whether selected day is current day.
     *
     * @returns If selected day is current.
     */
    selectedDayIsCurrent() {
        var _a, _b;
        return !!((_b = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem()) === null || _b === void 0 ? void 0 : _b.isCurrentDay);
    }
    /**
     * Navigate to a particular event.
     *
     * @param eventId Event to load.
     * @param day Day.
     */
    gotoEvent(eventId, day) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/event/${eventId}`, { params: { date: day.moment.format('MMDDY') } });
    }
    /**
     * Show the filter menu.
     */
    openFilter() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].openSideModal({
                component: _components_filter_filter__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarFilterComponent"],
                componentProps: {
                    courses: (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSource().courses,
                    filter: this.filter,
                },
            });
        });
    }
    /**
     * Open page to create/edit an event.
     *
     * @param eventId Event ID to edit.
     */
    openEdit(eventId) {
        var _a;
        const params = {};
        if (!eventId) {
            // It's a new event, set the time.
            eventId = 0;
            const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
            if (selectedDay) {
                // Use current time but in the specified day.
                const now = moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()();
                params.timestamp = selectedDay.moment.clone().set({ hour: now.hour(), minute: now.minute() }).unix() * 1000;
            }
        }
        if (this.filter.courseId) {
            params.courseId = this.filter.courseId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${eventId}`, { params });
    }
    /**
     * Check whether selected day has offline data.
     *
     * @returns Whether selected day has offline data.
     */
    selectedDayHasOffline() {
        var _a;
        const selectedDay = (_a = this.manager) === null || _a === void 0 ? void 0 : _a.getSelectedItem();
        return !!(selectedDay === null || selectedDay === void 0 ? void 0 : selectedDay.hasOffline);
    }
    /**
     * Go to current day.
     */
    goToCurrentDay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const manager = this.manager;
            const slides = this.slides;
            if (!manager || !slides) {
                return;
            }
            const currentDay = {
                moment: moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()(),
            };
            this.loaded = false;
            try {
                // Make sure the day is loaded.
                yield manager.getSource().loadItem(currentDay);
                slides.slideToItem(currentDay);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Load next day.
     */
    loadNext() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.slides) === null || _a === void 0 ? void 0 : _a.slideNext();
        });
    }
    /**
     * Load previous day.
     */
    loadPrevious() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (_a = this.slides) === null || _a === void 0 ? void 0 : _a.slidePrev();
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        (_a = this.newEventObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.discardedObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.editEventObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.deleteEventObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.undeleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.syncObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.manualSyncObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.onlineObserver) === null || _h === void 0 ? void 0 : _h.unsubscribe();
        (_j = this.filterChangedObserver) === null || _j === void 0 ? void 0 : _j.off();
        (_k = this.manager) === null || _k === void 0 ? void 0 : _k.getSource().forgetRelatedSources();
        (_l = this.manager) === null || _l === void 0 ? void 0 : _l.destroy();
        (_m = this.managerUnsubscribe) === null || _m === void 0 ? void 0 : _m.call(this);
        delete this.manager;
    }
};
AddonCalendarDayPage.ctorParameters = () => [];
AddonCalendarDayPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_swipe_slides_swipe_slides__WEBPACK_IMPORTED_MODULE_20__["CoreSwipeSlidesComponent"],] }]
};
AddonCalendarDayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-day',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./day.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/day/day.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../calendar-common.scss */ "./src/addons/calendar/calendar-common.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./day.scss */ "./src/addons/calendar/pages/day/day.scss")).default]
    })
], AddonCalendarDayPage);

/**
 * Helper to manage swiping within days.
 */
class AddonCalendarDaySlidesItemsManagerSource extends _classes_items_management_swipe_slides_dynamic_items_manager_source__WEBPACK_IMPORTED_MODULE_21__["CoreSwipeSlidesDynamicItemsManagerSource"] {
    constructor(page, initialMoment) {
        super({ moment: initialMoment });
        this.courses = [];
        this.eventsSources = new Set();
        // Offline events classified in month & day.
        this.offlineEvents = {};
        this.offlineEditedEventsIds = []; // IDs of events edited in offline.
        this.canCreate = false;
        this.sendLog = true;
        this.dayPage = page;
    }
    /**
     * Fetch data.
     *
     * @param courseId Current selected course id (if any).
     * @returns Promise resolved when done.
     */
    fetchData(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all([
                this.loadCourses(courseId),
                this.loadCanCreate(courseId),
                this.loadCategories(),
                this.loadOfflineEvents(),
                this.loadOfflineDeletedEvents(),
                this.loadTimeFormat(),
            ]);
        });
    }
    /**
     * Filter all loaded days events based on the filter popover.
     *
     * @param filter Filter to apply.
     */
    filterAllDayEvents(filter) {
        var _a;
        (_a = this.getItems()) === null || _a === void 0 ? void 0 : _a.forEach(day => this.filterEvents(day, filter));
    }
    /**
     * Filter events of a certain day based on the filter popover.
     *
     * @param day Day with the events.
     * @param filter Filter to apply.
     */
    filterEvents(day, filter) {
        day.filteredEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].getFilteredEvents(day.events || [], filter, this.categories || {});
        this.rememberEventsList(day);
    }
    /**
     * Load courses.
     *
     * @param courseId Current selected course id (if any).
     * @returns Promise resolved when done.
     */
    loadCourses(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_12__["CoreCoursesHelper"].getCoursesForPopover(courseId);
            this.courses = data.courses;
        });
    }
    /**
     * Load whether user can create events.
     *
     * @param courseId Current selected course id (if any).
     * @returns Promise resolved when done.
     */
    loadCanCreate(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.canCreate = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].canEditEvents(courseId);
        });
    }
    /**
     * Load categories to be able to filter events.
     *
     * @returns Promise resolved when done.
     */
    loadCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.categories) {
                // Already retrieved, stop.
                return;
            }
            try {
                const categories = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].getCategories(0, true);
                // Index categories by ID.
                this.categories = _services_utils_utils__WEBPACK_IMPORTED_MODULE_17__["CoreUtils"].arrayToObject(categories, 'id');
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Load events created or edited in offline.
     *
     * @returns Promise resolved when done.
     */
    loadOfflineEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get offline events.
            const events = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].getAllEditedEvents();
            // Classify them by month & day.
            this.offlineEvents = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].classifyIntoMonths(events);
            // Get the IDs of events edited in offline.
            this.offlineEditedEventsIds = events.filter((event) => event.id > 0).map((event) => event.id);
        });
    }
    /**
     * Load events deleted in offline.
     *
     * @returns Promise resolved when done.
     */
    loadOfflineDeletedEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deletedEventsIds = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].getAllDeletedEventsIds();
            this.deletedEvents = new Set(deletedEventsIds);
        });
    }
    /**
     * Load time format.
     *
     * @returns Promise resolved when done.
     */
    loadTimeFormat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.timeFormat = yield _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].getCalendarTimeFormat();
        });
    }
    /**
     * @inheritdoc
     */
    getItemId(item) {
        return _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].getDayId(item.moment);
    }
    /**
     * @inheritdoc
     */
    getPreviousItem(item) {
        return {
            moment: item.moment.clone().subtract(1, 'day'),
        };
    }
    /**
     * @inheritdoc
     */
    getNextItem(item) {
        return {
            moment: item.moment.clone().add(1, 'day'),
        };
    }
    /**
     * @inheritdoc
     */
    loadItemData(day, preload = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const preloadedDay = Object.assign(Object.assign({}, day), { hasOffline: false, events: [], onlineEvents: [], filteredEvents: [], isCurrentDay: day.moment.isSame(moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()(), 'day'), isPastDay: day.moment.isBefore(moment_timezone__WEBPACK_IMPORTED_MODULE_14___default()(), 'day') });
            if (preload) {
                return preloadedDay;
            }
            let result;
            try {
                // Don't pass courseId and categoryId, we'll filter them locally.
                result = yield _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].getDayEvents(day.moment.year(), day.moment.month() + 1, day.moment.date());
                preloadedDay.onlineEvents = yield Promise.all(result.events.map((event) => _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].formatEventData(event)));
            }
            catch (error) {
                // Allow navigating to non-cached days in offline (behave as if using emergency cache).
                if (_services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline()) {
                    throw error;
                }
            }
            // Merge the online events with offline data.
            preloadedDay.events = this.mergeEvents(preloadedDay);
            // Filter events by course.
            this.filterEvents(preloadedDay, this.dayPage.filter);
            // Re-calculate the formatted time so it uses the device date.
            const dayTime = day.moment.unix() * 1000;
            const currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_6__["CoreTimeUtils"].timestamp();
            const promises = preloadedDay.events.map((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                event.ispast = preloadedDay.isPastDay || (preloadedDay.isCurrentDay && this.isEventPast(event, currentTime));
                event.formattedtime = yield _services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].formatEventTime(event, this.dayPage.timeFormat, true, dayTime);
            }));
            yield Promise.all(promises);
            return preloadedDay;
        });
    }
    /**
     * Returns if the event is in the past or not.
     *
     * @param event Event object.
     * @param currentTime Current time.
     * @returns True if it's in the past.
     */
    isEventPast(event, currentTime) {
        return (event.timestart + event.timeduration) < currentTime;
    }
    /**
     * Merge online events with the offline events of that period.
     *
     * @param day Day with the events.
     * @returns Merged events.
     */
    mergeEvents(day) {
        var _a, _b, _c;
        day.hasOffline = false;
        if (!Object.keys(this.offlineEvents).length && !((_a = this.deletedEvents) === null || _a === void 0 ? void 0 : _a.size)) {
            // No offline events, nothing to merge.
            return day.onlineEvents || [];
        }
        const monthOfflineEvents = this.offlineEvents[_services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].getMonthId(day.moment)];
        const dayOfflineEvents = monthOfflineEvents && monthOfflineEvents[day.moment.date()];
        let result = day.onlineEvents || [];
        if ((_b = this.deletedEvents) === null || _b === void 0 ? void 0 : _b.size) {
            // Mark as deleted the events that were deleted in offline.
            result.forEach((event) => {
                var _a;
                event.deleted = (_a = this.deletedEvents) === null || _a === void 0 ? void 0 : _a.has(event.id);
                if (event.deleted) {
                    day.hasOffline = true;
                }
            });
        }
        if (this.offlineEditedEventsIds.length) {
            // Remove the online events that were modified in offline.
            result = result.filter((event) => this.offlineEditedEventsIds.indexOf(event.id) == -1);
            if (result.length != ((_c = day.onlineEvents) === null || _c === void 0 ? void 0 : _c.length)) {
                day.hasOffline = true;
            }
        }
        if (dayOfflineEvents && dayOfflineEvents.length) {
            // Add the offline events (either new or edited).
            day.hasOffline = true;
            result = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarHelper"].sortEvents(result.concat(dayOfflineEvents));
        }
        return result;
    }
    /**
     * Invalidate content.
     *
     * @param selectedDay The current selected day.
     * @param invalidateDayEvents Whether to invalidate selected day events.
     * @returns Promise resolved when done.
     */
    invalidateContent(selectedDay, invalidateDayEvents) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            if (invalidateDayEvents && selectedDay) {
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateDayEvents(selectedDay.moment.year(), selectedDay.moment.month() + 1, selectedDay.moment.date()));
            }
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateAllowedEventTypes());
            promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_11__["CoreCourses"].invalidateCategories(0, true));
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateTimeFormat());
            this.categories = undefined; // Get categories again.
            this.sendLog = true;
            if (selectedDay) {
                selectedDay.dirty = true;
            }
            yield Promise.all(promises);
        });
    }
    /**
     * Find an event and mark it as deleted.
     *
     * @param eventId Event ID.
     * @param deleted Whether to mark it as deleted or not.
     */
    markAsDeleted(eventId, deleted) {
        var _a, _b, _c;
        // Mark the event as deleted or not.
        (_a = this.getItems()) === null || _a === void 0 ? void 0 : _a.some(day => {
            var _a, _b, _c, _d;
            const event = (_a = day.onlineEvents) === null || _a === void 0 ? void 0 : _a.find((event) => event.id == eventId);
            if (!event) {
                return false;
            }
            event.deleted = deleted;
            if (deleted) {
                day.hasOffline = true;
            }
            else {
                // Re-calculate "hasOffline".
                day.hasOffline = ((_b = day.events) === null || _b === void 0 ? void 0 : _b.length) != ((_c = day.onlineEvents) === null || _c === void 0 ? void 0 : _c.length) || ((_d = day.events) === null || _d === void 0 ? void 0 : _d.some((event) => event.deleted || event.offline));
            }
            return true;
        });
        // Add it or remove it from the list of deleted events.
        if (deleted) {
            (_b = this.deletedEvents) === null || _b === void 0 ? void 0 : _b.add(eventId);
        }
        else {
            (_c = this.deletedEvents) === null || _c === void 0 ? void 0 : _c.delete(eventId);
        }
    }
    /**
     * Forget other sources that where created whilst using this one.
     */
    forgetRelatedSources() {
        for (const source of this.eventsSources) {
            _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__["CoreRoutedItemsManagerSourcesTracker"].removeReference(source, this);
        }
    }
    /**
     * Remember the list of events in a day to be used in a different context.
     *
     * @param day Day containing the events list.
     */
    rememberEventsList(day) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_23__["AddonCalendarEventsSource"], [
                day.moment.format('MMDDY'),
            ]);
            if (!this.eventsSources.has(source)) {
                this.eventsSources.add(source);
                _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_22__["CoreRoutedItemsManagerSourcesTracker"].addReference(source, this);
            }
            source.setEvents((_a = day.filteredEvents) !== null && _a !== void 0 ? _a : []);
            yield source.reload();
        });
    }
}


/***/ }),

/***/ "./src/addons/calendar/pages/edit-event/edit-event.scss":
/*!**************************************************************!*\
  !*** ./src/addons/calendar/pages/edit-event/edit-event.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-calendar-eventtype-container.item-select-disabled ion-label, :host .addon-calendar-eventtype-container.item-select-disabled ion-select {\n  opacity: 1;\n}\n:host .addon-calendar-eventtype-container.item-select-disabled ion-select::part(icon) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZWRpdC1ldmVudC9lZGl0LWV2ZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxVQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7QUFGWiIsImZpbGUiOiJzcmMvYWRkb25zL2NhbGVuZGFyL3BhZ2VzL2VkaXQtZXZlbnQvZWRpdC1ldmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLmFkZG9uLWNhbGVuZGFyLWV2ZW50dHlwZS1jb250YWluZXIuaXRlbS1zZWxlY3QtZGlzYWJsZWQge1xyXG4gICAgICAgIGlvbi1sYWJlbCwgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/addons/calendar/pages/edit-event/edit-event.ts":
/*!************************************************************!*\
  !*** ./src/addons/calendar/pages/edit-event/edit-event.ts ***!
  \************************************************************/
/*! exports provided: AddonCalendarEditEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEditEventPage", function() { return AddonCalendarEditEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/editor/components/rich-text-editor/rich-text-editor */ "./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_filter_services_filter_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @features/filter/services/filter-helper */ "./src/core/features/filter/services/filter-helper.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @features/reminders/services/reminders */ "./src/core/features/reminders/services/reminders.ts");
/* harmony import */ var _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @features/reminders/components/set-reminder-menu/set-reminder-menu */ "./src/core/features/reminders/components/set-reminder-menu/set-reminder-menu.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
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
 * Page that displays a form to create/edit an event.
 */
let AddonCalendarEditEventPage = class AddonCalendarEditEventPage {
    constructor(fb) {
        this.fb = fb;
        this.title = 'addon.calendar.newevent';
        this.component = _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].COMPONENT;
        this.loaded = false;
        this.hasOffline = false;
        this.eventTypes = [];
        this.categories = [];
        this.courses = [];
        this.groups = [];
        this.loadingGroups = false;
        this.courseGroupSet = false;
        this.error = false;
        this.otherEventsCount = 0;
        // Reminders.
        this.remindersEnabled = false;
        this.reminders = [];
        this.types = {}; // Object with the supported types.
        this.showAll = false;
        this.isDestroyed = false;
        this.gotEventData = false;
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getRequiredCurrentSite();
        this.remindersEnabled = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreReminders"].isEnabled();
        this.errors = {
            required: _singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.required'),
        };
        // Calculate format to use. ion-datetime doesn't support escaping characters ([]), so we remove them.
        this.dateFormat = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].convertPHPToMoment(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.strftimedatetimeshort'))
            .replace(/[[\]]/g, '');
        this.displayTimezone = _services_app__WEBPACK_IMPORTED_MODULE_24__["CoreAppProvider"].getForcedTimezone();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        // Initialize form variables.
        this.typeControl = this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.groupControl = this.fb.control('');
        this.descriptionControl = this.fb.control('');
        this.form.addControl('name', this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.form.addControl('eventtype', this.typeControl);
        this.form.addControl('categoryid', this.fb.control(''));
        this.form.addControl('groupcourseid', this.fb.control(''));
        this.form.addControl('groupid', this.groupControl);
        this.form.addControl('description', this.descriptionControl);
        this.form.addControl('location', this.fb.control(''));
        this.form.addControl('duration', this.fb.control(0));
        this.form.addControl('timedurationminutes', this.fb.control(''));
        this.form.addControl('repeat', this.fb.control(false));
        this.form.addControl('repeats', this.fb.control('1'));
        this.form.addControl('repeateditall', this.fb.control(1));
        this.maxDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].getDatetimeDefaultMax();
        this.minDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].getDatetimeDefaultMin();
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.eventId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('eventId') || undefined;
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('courseId') || 0;
        this.title = this.eventId ? 'addon.calendar.editevent' : 'addon.calendar.newevent';
        const timestamp = _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].getRouteNumberParam('timestamp');
        const currentDate = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat(timestamp);
        this.form.addControl('timestart', this.fb.control(currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        this.form.addControl('timedurationuntil', this.fb.control(currentDate));
        this.form.addControl('courseid', this.fb.control(this.courseId));
        this.initReminders();
        this.fetchData().finally(() => {
            this.originalData = _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].clone(this.form.value);
            this.loaded = true;
        });
    }
    /**
     * Fetch the data needed to render the form.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.error = false;
            // Get access info.
            try {
                const [types, accessInfo] = yield Promise.all([
                    _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getAllowedEventTypes(this.courseId),
                    _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getAccessInformation(this.courseId), {
                        canmanageentries: false,
                        canmanageownentries: false,
                        canmanagegroupentries: false,
                    }),
                ]);
                this.types = types;
                const promises = [];
                const eventTypes = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarHelper"].getEventTypeOptions(this.types);
                if (!eventTypes.length) {
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('addon.calendar.nopermissiontoupdatecalendar'));
                }
                if (this.eventId && !this.gotEventData) {
                    // Editing an event, get the event data. Wait for sync first.
                    const eventId = this.eventId;
                    promises.push(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_15__["AddonCalendarSync"].waitForSync(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_15__["AddonCalendarSyncProvider"].SYNC_ID).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // Do not block if the scope is already destroyed.
                        if (!this.isDestroyed && this.eventId) {
                            _services_sync__WEBPACK_IMPORTED_MODULE_6__["CoreSync"].blockOperation(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].COMPONENT, eventId);
                        }
                        let eventForm;
                        // Get the event offline data if there's any.
                        try {
                            eventForm = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarOffline"].getEvent(eventId);
                            this.hasOffline = true;
                        }
                        catch (_a) {
                            // No offline data.
                            this.hasOffline = false;
                        }
                        if (eventId > 0) {
                            // It's an online event. get its data from server.
                            const event = yield _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].getEventById(eventId);
                            if (!eventForm) {
                                eventForm = event; // Use offline data first.
                            }
                            this.eventRepeatId = event === null || event === void 0 ? void 0 : event.repeatid;
                            if (this.eventRepeatId) {
                                this.otherEventsCount = event.eventcount ? event.eventcount - 1 : 0;
                            }
                        }
                        this.gotEventData = true;
                        if (eventForm) {
                            // Load the data in the form.
                            return this.loadEventData(eventForm, this.hasOffline);
                        }
                        return;
                    })));
                }
                if (this.types.category) {
                    // Get the categories.
                    promises.push(this.fetchCategories());
                }
                this.showAll = _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].isTrueOrOne(this.currentSite.getStoredConfig('calendar_adminseesall')) &&
                    accessInfo.canmanageentries;
                if (this.types.course || this.types.groups) {
                    promises.push(this.fetchCourses());
                }
                yield Promise.all(promises);
                if (!this.typeControl.value) {
                    // Initialize event type value. If course is allowed, select it first.
                    if (this.types.course) {
                        this.typeControl.setValue(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].COURSE);
                    }
                    else {
                        this.typeControl.setValue(eventTypes[0].value);
                    }
                }
                this.eventTypes = eventTypes;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting data.');
                this.error = true;
            }
        });
    }
    fetchCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].getCategories(0, true);
        });
    }
    fetchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the courses.
            let courses = yield (this.showAll ? _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].getCoursesByField() : _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].getUserCourses());
            if (courses.length < 0) {
                this.courses = [];
                return;
            }
            const courseFillFullname = (course) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    const result = yield _features_filter_services_filter_helper__WEBPACK_IMPORTED_MODULE_17__["CoreFilterHelper"].getFiltersAndFormatText(course.fullname, 'course', course.id);
                    course.fullname = result.text;
                }
                catch (_a) {
                    // Ignore errors.
                }
            });
            if (this.showAll) {
                // Remove site home from the list of courses.
                const siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteHomeId();
                if ('contacts' in courses[0]) {
                    courses = courses.filter((course) => course.id != siteHomeId);
                }
                else {
                    courses = courses.filter((course) => course.id != siteHomeId);
                }
            }
            // Format the name of the courses.
            if ('contacts' in courses[0]) {
                yield Promise.all(courses.map(courseFillFullname));
            }
            else {
                yield Promise.all(courses.map(courseFillFullname));
            }
            // Sort courses by name.
            this.courses = courses.sort((a, b) => {
                const compareA = a.fullname.toLowerCase();
                const compareB = b.fullname.toLowerCase();
                return compareA.localeCompare(compareB);
            });
        });
    }
    /**
     * Load an event data into the form.
     *
     * @param event Event data.
     * @param isOffline Whether the data is from offline or not.
     * @returns Promise resolved when done.
     */
    loadEventData(event, isOffline) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!event) {
                return;
            }
            const offlineEvent = event;
            const onlineEvent = event;
            const courseId = isOffline ? offlineEvent.courseid : (_a = onlineEvent.course) === null || _a === void 0 ? void 0 : _a.id;
            this.form.controls.name.setValue(event.name);
            this.form.controls.timestart.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat(event.timestart * 1000));
            this.form.controls.eventtype.setValue(event.eventtype);
            this.form.controls.categoryid.setValue(event.categoryid || '');
            this.form.controls.courseid.setValue(courseId || '');
            this.form.controls.groupcourseid.setValue(courseId || '');
            this.form.controls.groupid.setValue(event.groupid || '');
            this.form.controls.description.setValue(event.description);
            this.form.controls.location.setValue(event.location);
            if (isOffline) {
                // It's an offline event, use the data as it is.
                this.form.controls.duration.setValue(offlineEvent.duration);
                this.form.controls.timedurationuntil.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat(((offlineEvent.timedurationuntil || 0) * 1000) || Date.now()));
                this.form.controls.timedurationminutes.setValue(offlineEvent.timedurationminutes || '');
                this.form.controls.repeat.setValue(!!offlineEvent.repeat);
                this.form.controls.repeats.setValue(offlineEvent.repeats || '1');
                this.form.controls.repeateditall.setValue(offlineEvent.repeateditall || 1);
            }
            else {
                // Online event, we'll have to calculate the data.
                if (onlineEvent.timeduration > 0) {
                    this.form.controls.duration.setValue(1);
                    this.form.controls.timedurationuntil.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat((onlineEvent.timestart + onlineEvent.timeduration) * 1000));
                }
                else {
                    // No duration.
                    this.form.controls.duration.setValue(0);
                    this.form.controls.timedurationuntil.setValue(_services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].toDatetimeFormat());
                }
                this.form.controls.timedurationminutes.setValue('');
                this.form.controls.repeat.setValue(!!onlineEvent.repeatid);
                this.form.controls.repeats.setValue(onlineEvent.eventcount || '1');
                this.form.controls.repeateditall.setValue(1);
            }
            if (event.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP && courseId) {
                yield this.loadGroups(courseId);
            }
        });
    }
    /**
     * Pull to refresh.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        const promises = [
            _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].invalidateAccessInformation(this.courseId),
            _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].invalidateAllowedEventTypes(this.courseId),
        ];
        if (this.types) {
            if (this.types.category) {
                promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].invalidateCategories(0, true));
            }
            if (this.types.course || this.types.groups) {
                if (this.showAll) {
                    promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].invalidateCoursesByField());
                }
                else {
                    promises.push(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_10__["CoreCourses"].invalidateUserCourses());
                }
            }
        }
        Promise.all(promises).finally(() => {
            this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * A course was selected, get its groups.
     */
    groupCourseSelected() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const courseId = this.form.controls.groupcourseid.value;
            if (!courseId) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
            try {
                yield this.loadGroups(courseId);
                this.groupControl.setValue('');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting data.');
            }
            modal.dismiss();
        });
    }
    /**
     * Load groups of a certain course.
     *
     * @param courseId Course ID.
     * @returns Promise resolved when done.
     */
    loadGroups(courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingGroups = true;
            try {
                this.groups = yield _services_groups__WEBPACK_IMPORTED_MODULE_4__["CoreGroups"].getUserGroupsInCourse(courseId);
                this.courseGroupSet = true;
            }
            finally {
                this.loadingGroups = false;
            }
        });
    }
    selectDuration(duration) {
        this.form.controls.duration.setValue(duration);
    }
    /**
     * Create the event.
     */
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Validate data.
            const formData = this.form.value;
            const timeStartDate = moment_timezone__WEBPACK_IMPORTED_MODULE_23___default()(formData.timestart).unix();
            const timeUntilDate = moment_timezone__WEBPACK_IMPORTED_MODULE_23___default()(formData.timedurationuntil).unix();
            const timeDurationMinutes = parseInt(formData.timedurationminutes || '', 10);
            let error;
            if (formData.eventtype === _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].COURSE && !formData.courseid) {
                error = 'core.selectacourse';
            }
            else if (formData.eventtype === _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP && !formData.groupcourseid) {
                error = 'core.selectacourse';
            }
            else if (formData.eventtype === _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP && !formData.groupid) {
                error = 'core.selectagroup';
            }
            else if (formData.eventtype === _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].CATEGORY && !formData.categoryid) {
                error = 'core.selectacategory';
            }
            else if (formData.duration === 1 && timeStartDate > timeUntilDate) {
                error = 'addon.calendar.invalidtimedurationuntil';
            }
            else if (formData.duration === 2 && (isNaN(timeDurationMinutes) || timeDurationMinutes < 1)) {
                error = 'addon.calendar.invalidtimedurationminutes';
            }
            if (error) {
                // Show error and stop.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant(error));
                return;
            }
            // Format the data to send.
            const data = {
                name: formData.name,
                eventtype: formData.eventtype,
                timestart: timeStartDate,
                description: {
                    text: formData.description || '',
                    format: 1,
                    itemid: 0,
                },
                location: formData.location,
                duration: formData.duration,
                repeat: formData.repeat,
            };
            if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].COURSE) {
                data.courseid = formData.courseid;
            }
            else if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].GROUP) {
                data.groupcourseid = formData.groupcourseid;
                data.groupid = formData.groupid;
            }
            else if (formData.eventtype == _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarEventType"].CATEGORY) {
                data.categoryid = formData.categoryid;
            }
            if (formData.duration == 1) {
                data.timedurationuntil = timeUntilDate;
            }
            else if (formData.duration == 2) {
                data.timedurationminutes = formData.timedurationminutes;
            }
            if (formData.repeat) {
                data.repeats = Number(formData.repeats);
            }
            if (this.eventRepeatId) {
                data.repeatid = this.eventRepeatId;
                data.repeateditall = formData.repeateditall;
            }
            // Send the data.
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading('core.sending', true);
            let event;
            try {
                const result = yield _services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendar"].submitEvent(this.eventId, data, {
                    reminders: this.eventId ? [] : this.reminders,
                });
                event = result.event;
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, result.sent, this.currentSite.getId());
                if (result.sent) {
                    // Event created or edited, invalidate right days & months.
                    const numberOfRepetitions = formData.repeat
                        ? formData.repeats
                        : (data.repeateditall && this.otherEventsCount
                            ? this.otherEventsCount + 1
                            : 1);
                    try {
                        yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarHelper"].refreshAfterChangeEvent(result.event, numberOfRepetitions);
                    }
                    catch (_a) {
                        // Ignore errors.
                    }
                }
                this.returnToList(event);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'Error sending data.');
            }
            modal.dismiss();
        });
    }
    /**
     * Convenience function to update or return to event list depending on device.
     *
     * @param event Event.
     */
    returnToList(event) {
        // Unblock the sync because the view will be destroyed and the sync process could be triggered before ngOnDestroy.
        this.unblockSync();
        if (this.eventId && this.eventId > 0) {
            // Editing an event.
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].EDIT_EVENT_EVENT, { eventId: this.eventId }, this.currentSite.getId());
        }
        else {
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].NEW_EVENT_EVENT, {
                eventId: event.id,
                oldEventId: this.eventId,
            }, this.currentSite.getId());
        }
        this.originalData = undefined; // Avoid asking for confirmation.
        _services_navigator__WEBPACK_IMPORTED_MODULE_19__["CoreNavigator"].back();
    }
    /**
     * Check if we can leave the page or not.
     *
     * @returns Resolved with true if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_calendar_helper__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarHelper"].hasEventDataChanged(this.form.value, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.confirmcanceledit'));
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormCancelledEvent(this.formElement, this.currentSite.getId());
            return true;
        });
    }
    /**
     * Unblock sync.
     */
    unblockSync() {
        if (this.eventId) {
            _services_sync__WEBPACK_IMPORTED_MODULE_6__["CoreSync"].unblockOperation(_services_calendar__WEBPACK_IMPORTED_MODULE_12__["AddonCalendarProvider"].COMPONENT, this.eventId);
        }
    }
    /**
     * Init reminders.
     *
     * @returns Promise resolved when done.
     */
    initReminders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't init reminders when editing an event. Right now, only allow adding reminders for new events.
            if (!this.remindersEnabled || this.eventId) {
                return;
            }
            // Check if default reminders are enabled.
            const defaultTime = yield _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreReminders"].getDefaultNotificationTime(this.currentSite.getId());
            if (defaultTime === _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreRemindersService"].DISABLED) {
                return;
            }
            const data = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreRemindersService"].convertSecondsToValueAndUnit(defaultTime);
            // Add default reminder.
            this.reminders.push({
                value: data.value,
                unit: data.unit,
                label: _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreReminders"].getUnitValueLabel(data.value, data.unit, true),
            });
        });
    }
    /**
     * Add a reminder.
     */
    addReminder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formData = this.form.value;
            const eventTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_8__["CoreTimeUtils"].convertToTimestamp(formData.timestart, true);
            const reminderTime = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].openPopover({
                component: _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_22__["CoreRemindersSetReminderMenuComponent"],
                componentProps: {
                    eventTime,
                },
            });
            if (reminderTime === undefined) {
                // User canceled.
                return;
            }
            const data = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreRemindersService"].convertSecondsToValueAndUnit(reminderTime.timeBefore);
            // Add reminder.
            this.reminders.push({
                time: reminderTime.timeBefore,
                value: data.value,
                unit: data.unit,
                label: _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreReminders"].getUnitValueLabel(data.value, data.unit),
            });
        });
    }
    /**
     * Remove a reminder.
     *
     * @param reminder The reminder to remove.
     */
    removeReminder(reminder) {
        const index = this.reminders.indexOf(reminder);
        if (index !== -1) {
            this.reminders.splice(index, 1);
        }
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.unblockSync();
        this.isDestroyed = true;
    }
};
AddonCalendarEditEventPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonCalendarEditEventPage.propDecorators = {
    descriptionEditor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_editor_components_rich_text_editor_rich_text_editor__WEBPACK_IMPORTED_MODULE_11__["CoreEditorRichTextEditorComponent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editEventForm',] }]
};
AddonCalendarEditEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-edit-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-event.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/edit-event/edit-event.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-event.scss */ "./src/addons/calendar/pages/edit-event/edit-event.scss")).default]
    })
], AddonCalendarEditEventPage);



/***/ }),

/***/ "./src/addons/calendar/pages/event/event.scss":
/*!****************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-card ion-note {\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvY2FsZW5kYXIvcGFnZXMvZXZlbnQvZXZlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FkZG9ucy9jYWxlbmRhci9wYWdlcy9ldmVudC9ldmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNhcmQgaW9uLW5vdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/addons/calendar/pages/event/event.ts":
/*!**************************************************!*\
  !*** ./src/addons/calendar/pages/event/event.ts ***!
  \**************************************************/
/*! exports provided: AddonCalendarEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventPage", function() { return AddonCalendarEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @addons/calendar/classes/events-source */ "./src/addons/calendar/classes/events-source.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @features/reminders/services/reminders */ "./src/core/features/reminders/services/reminders.ts");
/* harmony import */ var _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @features/reminders/components/set-reminder-menu/set-reminder-menu */ "./src/core/features/reminders/components/set-reminder-menu/set-reminder-menu.ts");
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
 * Page that displays a single calendar event.
 */
let AddonCalendarEventPage = class AddonCalendarEventPage {
    constructor(route) {
        this.route = route;
        this.eventLoaded = false;
        this.courseName = '';
        this.courseUrl = '';
        this.remindersEnabled = false;
        this.moduleUrl = '';
        this.categoryPath = '';
        this.currentTime = -1;
        this.reminders = [];
        this.canEdit = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_LOADING; // Sync icon.
        this.remindersEnabled = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreReminders"].isEnabled();
        this.siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteHomeId();
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId();
        // Check if site supports editing. No need to check allowed types, event.canedit already does it.
        this.canEdit = _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].canEditEventsInSite();
        // Listen for event edited. If current event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            if (data && data.eventId === this.eventId) {
                this.eventLoaded = false;
                this.refreshEvent(true, false);
            }
        }, this.currentSiteId);
        // Listen for event created. If user edits the data of a new offline event or it's sent to server, this event is triggered.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            if (this.eventId < 0 && data && (data.eventId === this.eventId || data.oldEventId === this.eventId)) {
                this.eventId = data.eventId;
                this.eventLoaded = false;
                this.refreshEvent(true, false);
            }
        }, this.currentSiteId);
        // Refresh data if this calendar event is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].AUTO_SYNCED, (data) => this.checkSyncResult(false, data), this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => this.checkSyncResult(true, data), this.currentSiteId);
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_6__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_13__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_6__["CoreNetwork"].isOnline();
            });
        });
        // Reload reminders if default notification time changes.
        this.defaultTimeChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreRemindersService"].DEFAULT_NOTIFICATION_TIME_CHANGED, () => {
            this.loadReminders();
        }, this.currentSiteId);
        // Set and update current time. Use a 5 seconds error margin.
        this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_12__["CoreTimeUtils"].timestamp();
        this.updateCurrentTime = window.setInterval(() => {
            this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_12__["CoreTimeUtils"].timestamp();
        }, 5000);
    }
    /**
     * Load reminders.
     *
     * @returns Promise resolved when done.
     */
    loadReminders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.remindersEnabled || !this.event) {
                return;
            }
            this.reminders = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].getEventReminders(this.eventId, this.event.timestart, this.currentSiteId);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.eventId = _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].getRequiredRouteNumberParam('id');
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(error);
                _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].back();
                return;
            }
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_LOADING;
            yield this.initializeSwipeManager();
            yield this.fetchEvent();
        });
    }
    /**
     * Fetches the event and updates the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @returns Promise resolved when done.
     */
    fetchEvent(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_6__["CoreNetwork"].isOnline();
            if (sync) {
                const deleted = yield this.syncEvents(showErrors);
                if (deleted) {
                    return;
                }
            }
            try {
                // Get the event data.
                if (this.eventId >= 0) {
                    const event = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getEventById(this.eventId);
                    this.event = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].formatEventData(event);
                }
                try {
                    const offlineEvent = _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].formatOfflineEventData(yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].getEvent(this.eventId));
                    // There is offline data, apply it.
                    this.hasOffline = true;
                    this.event = Object.assign(this.event || {}, offlineEvent);
                }
                catch (_a) {
                    // No offline data.
                    this.hasOffline = false;
                    if (this.eventId < 0) {
                        // It's an offline event, but it wasn't found. Shouldn't happen.
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('Event not found.');
                        _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].back();
                        return;
                    }
                }
                if (!this.event) {
                    return; // At this point we should always have the event, adding this check to avoid TS errors.
                }
                // Load reminders.
                this.loadReminders();
                // Reset some of the calculated data.
                this.categoryPath = '';
                this.courseName = '';
                this.courseUrl = '';
                this.moduleUrl = '';
                if (this.event.moduleIcon) {
                    // It's a module event, translate the module name to the current language.
                    const name = _features_course_services_course__WEBPACK_IMPORTED_MODULE_11__["CoreCourse"].translateModuleName(this.event.modulename || '');
                    if (name.indexOf('core.mod_') === -1) {
                        this.event.modulename = name;
                    }
                    // Get the module URL.
                    this.moduleUrl = this.event.url || '';
                }
                const promises = [];
                const event = this.event;
                const courseId = this.event.courseid;
                if (courseId != this.siteHomeId) {
                    // If the event belongs to a course, get the course name and the URL to view it.
                    if (this.event.course) {
                        this.courseId = this.event.course.id;
                        this.courseName = this.event.course.fullname;
                        this.courseUrl = this.event.course.viewurl;
                    }
                }
                // If it's a group event, get the name of the group.
                if (courseId && this.event.groupid) {
                    this.groupName = event.groupname;
                }
                if (this.event.iscategoryevent && this.event.category) {
                    this.categoryPath = this.event.category.nestedname;
                }
                if (this.event.location) {
                    // Build a link to open the address in maps.
                    this.event.location = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].decodeHTML(this.event.location);
                    this.event.encodedLocation = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].buildAddressURL(this.event.location);
                }
                // Check if event was deleted in offine.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].isEventDeleted(this.eventId).then((deleted) => {
                    event.deleted = deleted;
                    return;
                }));
                // Re-calculate the formatted time so it uses the device date.
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].getCalendarTimeFormat().then((timeFormat) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    event.formattedtime = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].formatEventTime(event, timeFormat);
                    return;
                })));
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevent', true);
            }
            this.eventLoaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Initialize swipe manager if enabled.
     */
    initializeSwipeManager() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const date = _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].getRouteParam('date');
            const source = date && _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_18__["CoreRoutedItemsManagerSourcesTracker"].getSource(_addons_calendar_classes_events_source__WEBPACK_IMPORTED_MODULE_19__["AddonCalendarEventsSource"], [date]);
            if (!source) {
                return;
            }
            this.events = new AddonCalendarEventsSwipeItemsManager(source);
            yield this.events.start();
        });
    }
    /**
     * Sync offline events.
     *
     * @param showErrors Whether to show sync errors to the user.
     * @returns Promise resolved with boolean: whether event was deleted on sync.
     */
    syncEvents(showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let deleted = false;
            // Try to synchronize offline events.
            try {
                const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSync"].syncEvents();
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showAlert(undefined, result.warnings[0]);
                }
                if (result.deleted && result.deleted.indexOf(this.eventId) != -1) {
                    // This event was deleted during the sync.
                    deleted = true;
                }
                else if (this.eventId < 0 && result.offlineIdMap[this.eventId]) {
                    // Event was created, use the online ID.
                    this.eventId = result.offlineIdMap[this.eventId];
                }
                if (result.updated) {
                    // Trigger a manual sync event.
                    result.source = 'event';
                    _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_5__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                }
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
            }
            return deleted;
        });
    }
    /**
     * Add a reminder for this event.
     */
    addReminder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event || !this.event.id) {
                return;
            }
            const reminderTime = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openPopover({
                component: _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_22__["CoreRemindersSetReminderMenuComponent"],
                componentProps: {
                    eventTime: this.event.timestart,
                },
            });
            if (reminderTime === undefined) {
                // User canceled.
                return;
            }
            yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].addEventReminder(this.event, reminderTime.timeBefore, this.currentSiteId);
            yield this.loadReminders();
        });
    }
    /**
     * Delete the selected reminder.
     *
     * @param id Reminder ID.
     * @param e Click event.
     */
    deleteReminder(id, e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showDeleteConfirm();
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_21__["CoreReminders"].removeReminder(id);
                    yield this.loadReminders();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting reminder');
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors Whether to show sync errors to the user.
     * @returns Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.eventLoaded) {
                return;
            }
            yield this.refreshEvent(true, showErrors).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the event.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @returns Promise resolved when done.
     */
    refreshEvent(sync = false, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_LOADING;
            const promises = [];
            if (this.eventId > 0) {
                promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].invalidateEvent(this.eventId));
            }
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].invalidateTimeFormat());
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].allPromisesIgnoringErrors(promises);
            yield this.fetchEvent(sync, showErrors);
        });
    }
    /**
     * Open the page to edit the event.
     */
    openEdit() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${this.eventId}`);
    }
    /**
     * Delete the event.
     */
    deleteEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event) {
                return;
            }
            const title = _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.calendar.deleteevent');
            const options = {};
            let message;
            if (this.event.eventcount > 1) {
                // It's a repeated event.
                message = _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.calendar.confirmeventseriesdelete', { $a: { name: this.event.name, count: this.event.eventcount } });
                options.inputs = [
                    {
                        type: 'radio',
                        name: 'deleteall',
                        checked: true,
                        value: false,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.calendar.deleteoneevent'),
                    },
                    {
                        type: 'radio',
                        name: 'deleteall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.calendar.deleteallevents'),
                    },
                ];
            }
            else {
                // Not repeated, display a simple confirm.
                message = _singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.calendar.confirmeventdelete', { $a: this.event.name });
            }
            let deleteAll = false;
            try {
                deleteAll = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(message, title, undefined, undefined, options);
            }
            catch (_a) {
                // User canceled.
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                let onlineEventDeleted = false;
                if (this.event.id < 0) {
                    yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].deleteEvent(this.event.id);
                }
                else {
                    onlineEventDeleted = yield _services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendar"].deleteEvent(this.event.id, this.event.name, deleteAll);
                }
                if (onlineEventDeleted) {
                    // Event deleted, invalidate right days & months.
                    try {
                        yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarHelper"].refreshAfterChangeEvent(this.event, deleteAll ? this.event.eventcount : 1);
                    }
                    catch (_b) {
                        // Ignore errors.
                    }
                }
                // Trigger an event.
                if (this.event.id < 0) {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, {}, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
                }
                else {
                    _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].DELETED_EVENT_EVENT, {
                        eventId: this.eventId,
                        sent: onlineEventDeleted,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
                }
                if (onlineEventDeleted || this.event.id < 0) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showToast('addon.calendar.eventcalendareventdeleted', true, _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["ToastDuration"].LONG);
                    // Event deleted, close the view.
                    _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].back();
                }
                else {
                    // Event deleted in offline, just mark it as deleted.
                    this.event.deleted = true;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting event.');
            }
            modal.dismiss();
        });
    }
    /**
     * Undo delete the event.
     */
    undoDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event) {
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_4__["AddonCalendarOffline"].unmarkDeleted(this.event.id);
                // Trigger an event.
                _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_services_calendar__WEBPACK_IMPORTED_MODULE_2__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, {
                    eventId: this.eventId,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_10__["CoreSites"].getCurrentSiteId());
                this.event.deleted = false;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error undeleting event.');
            }
            modal.dismiss();
        });
    }
    /**
     * Check the result of an automatic sync or a manual sync not done by this page.
     *
     * @param isManual Whether it's a manual sync.
     * @param data Sync result.
     */
    checkSyncResult(isManual, data) {
        if (!data) {
            return;
        }
        if (data.deleted && data.deleted.indexOf(this.eventId) != -1) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showToast('addon.calendar.eventcalendareventdeleted', true, _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["ToastDuration"].LONG);
            // Event was deleted, close the view.
            _services_navigator__WEBPACK_IMPORTED_MODULE_14__["CoreNavigator"].back();
        }
        else if (data.events && (!isManual || data.source != 'event')) {
            if (this.eventId < 0) {
                if (data.offlineIdMap[this.eventId]) {
                    // Event was created, use the online ID.
                    this.eventId = data.offlineIdMap[this.eventId];
                    this.eventLoaded = false;
                    this.refreshEvent();
                }
            }
            else {
                const event = data.events.find((ev) => ev.id == this.eventId);
                if (event) {
                    this.eventLoaded = false;
                    this.refreshEvent();
                }
            }
        }
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        this.editEventObserver.off();
        this.syncObserver.off();
        this.manualSyncObserver.off();
        this.onlineObserver.unsubscribe();
        this.newEventObserver.off();
        (_a = this.events) === null || _a === void 0 ? void 0 : _a.destroy();
        clearInterval(this.updateCurrentTime);
    }
};
AddonCalendarEventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"] }
];
AddonCalendarEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/event/event.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../calendar-common.scss */ "./src/addons/calendar/calendar-common.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event.scss */ "./src/addons/calendar/pages/event/event.scss")).default]
    })
], AddonCalendarEventPage);

/**
 * Helper to manage swiping within a collection of events.
 */
class AddonCalendarEventsSwipeItemsManager extends _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_20__["CoreSwipeNavigationItemsManager"] {
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        return route.params.id;
    }
}


/***/ }),

/***/ "./src/addons/calendar/pages/index/index.ts":
/*!**************************************************!*\
  !*** ./src/addons/calendar/pages/index/index.ts ***!
  \**************************************************/
/*! exports provided: AddonCalendarIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarIndexPage", function() { return AddonCalendarIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/courses/services/courses-helper */ "./src/core/features/courses/services/courses-helper.ts");
/* harmony import */ var _services_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/calendar */ "./src/addons/calendar/services/calendar.ts");
/* harmony import */ var _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/calendar-offline */ "./src/addons/calendar/services/calendar-offline.ts");
/* harmony import */ var _services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/calendar-sync */ "./src/addons/calendar/services/calendar-sync.ts");
/* harmony import */ var _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/calendar-helper */ "./src/addons/calendar/services/calendar-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/calendar/calendar */ "./src/addons/calendar/components/calendar/calendar.ts");
/* harmony import */ var _components_upcoming_events_upcoming_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/upcoming-events/upcoming-events */ "./src/addons/calendar/components/upcoming-events/upcoming-events.ts");
/* harmony import */ var _components_filter_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/filter/filter */ "./src/addons/calendar/components/filter/filter.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @features/mainmenu/classes/deep-link-manager */ "./src/core/features/mainmenu/classes/deep-link-manager.ts");
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
 * Page that displays the calendar events.
 */
let AddonCalendarIndexPage = class AddonCalendarIndexPage {
    constructor(route) {
        this.route = route;
        this.canCreate = false;
        this.courses = [];
        this.loaded = false;
        this.hasOffline = false;
        this.isOnline = false;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_LOADING;
        this.showCalendar = true;
        this.loadUpcoming = false;
        this.filter = {
            filtered: false,
            courseId: undefined,
            categoryId: undefined,
            course: true,
            group: true,
            site: true,
            user: true,
            category: true,
        };
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        // Listen for events added. When an event is added, reload the data.
        this.newEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.loaded = false;
                this.refreshData(true, false, true);
            }
        }, this.currentSiteId);
        // Listen for new event discarded event. When it does, reload the data.
        this.discardedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].NEW_EVENT_DISCARDED_EVENT, () => {
            this.loaded = false;
            this.refreshData(true, false, true);
        }, this.currentSiteId);
        // Listen for events edited. When an event is edited, reload the data.
        this.editEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].EDIT_EVENT_EVENT, (data) => {
            if (data && data.eventId) {
                this.loaded = false;
                this.refreshData(true, false, true);
            }
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSyncProvider"].AUTO_SYNCED, () => {
            this.loaded = false;
            this.refreshData(false, false, true);
        }, this.currentSiteId);
        // Refresh data if calendar events are synchronized manually but not by this page.
        this.manualSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSyncProvider"].MANUAL_SYNCED, (data) => {
            if (data && data.source != 'index') {
                this.loaded = false;
                this.refreshData(false, false, true);
            }
        }, this.currentSiteId);
        // Update the events when an event is deleted.
        this.deleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].DELETED_EVENT_EVENT, () => {
            this.loaded = false;
            this.refreshData(false, false, true);
        }, this.currentSiteId);
        // Update the "hasOffline" property if an event deleted in offline is restored.
        this.undeleteEventObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].UNDELETED_EVENT_EVENT, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hasOffline = yield _services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].hasOfflineData();
        }), this.currentSiteId);
        this.filterChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendarProvider"].FILTER_CHANGED_EVENT, (filterData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filter = filterData;
            // Course viewed has changed, check if the user can create events for this course calendar.
            this.canCreate = yield _services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].canEditEvents(this.filter.courseId);
        }));
        // Refresh online status when changes.
        this.onlineObserver = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_11__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline();
            });
        });
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.loadUpcoming = !!_services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteBooleanParam('upcoming');
        this.showCalendar = !this.loadUpcoming;
        this.route.queryParams.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filter.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('courseId');
            this.year = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('year');
            this.month = _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].getRouteNumberParam('month');
            this.filter.filtered = !!this.filter.courseId;
            this.fetchData(true, false);
            if (this.year !== undefined && this.month !== undefined && this.calendarComponent) {
                this.calendarComponent.viewMonth(this.month, this.year);
            }
        }));
        const deepLinkManager = new _features_mainmenu_classes_deep_link_manager__WEBPACK_IMPORTED_MODULE_18__["CoreMainMenuDeepLinkManager"]();
        deepLinkManager.treatLink();
    }
    /**
     * Fetch all the data required for the view.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @returns Promise resolved when done.
     */
    fetchData(sync, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_LOADING;
            this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_2__["CoreNetwork"].isOnline();
            if (sync) {
                // Try to synchronize offline events.
                try {
                    const result = yield _services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSync"].syncEvents();
                    if (result.warnings && result.warnings.length) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(undefined, result.warnings[0]);
                    }
                    if (result.updated) {
                        // Trigger a manual sync event.
                        result.source = 'index';
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_calendar_sync__WEBPACK_IMPORTED_MODULE_9__["AddonCalendarSyncProvider"].MANUAL_SYNCED, result, this.currentSiteId);
                    }
                }
                catch (error) {
                    if (showErrors) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                    }
                }
            }
            try {
                const promises = [];
                this.hasOffline = false;
                // Load courses for the popover.
                promises.push(_features_courses_services_courses_helper__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesHelper"].getCoursesForPopover(this.filter.courseId).then((data) => {
                    this.courses = data.courses;
                    return;
                }));
                // Check if user can create events.
                promises.push(_services_calendar_helper__WEBPACK_IMPORTED_MODULE_10__["AddonCalendarHelper"].canEditEvents(this.filter.courseId).then((canEdit) => {
                    this.canCreate = canEdit;
                    return;
                }));
                // Check if there is offline data.
                promises.push(_services_calendar_offline__WEBPACK_IMPORTED_MODULE_8__["AddonCalendarOffline"].hasOfflineData().then((hasOffline) => {
                    this.hasOffline = hasOffline;
                    return;
                }));
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
            }
            this.loaded = true;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_SYNC;
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors Whether to show sync errors to the user.
     * @returns Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.loaded) {
                return;
            }
            yield this.refreshData(true, showErrors).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                done && done();
            });
        });
    }
    /**
     * Refresh the data.
     *
     * @param sync Whether it should try to synchronize offline events.
     * @param showErrors Whether to show sync errors to the user.
     * @param afterChange Whether the refresh is done after an event has changed or has been synced.
     * @returns Promise resolved when done.
     */
    refreshData(sync = false, showErrors = false, afterChange = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_17__["CoreConstants"].ICON_LOADING;
            const promises = [];
            promises.push(_services_calendar__WEBPACK_IMPORTED_MODULE_7__["AddonCalendar"].invalidateAllowedEventTypes());
            // Refresh the sub-component.
            if (this.showCalendar && this.calendarComponent) {
                promises.push(this.calendarComponent.refreshData(afterChange));
            }
            else if (!this.showCalendar && this.upcomingEventsComponent) {
                promises.push(this.upcomingEventsComponent.refreshData());
            }
            yield Promise.all(promises).finally(() => this.fetchData(sync, showErrors));
        });
    }
    /**
     * Navigate to a particular event.
     *
     * @param eventId Event to load.
     */
    gotoEvent(eventId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/event/${eventId}`);
    }
    /**
     * View a certain day.
     *
     * @param data Data with the year, month and day.
     */
    gotoDay(data) {
        const params = {
            day: data.day,
            month: data.month,
            year: data.year,
        };
        Object.keys(this.filter).forEach((key) => {
            params[key] = this.filter[key];
        });
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath('/calendar/day', { params });
    }
    /**
     * Show the filter menu.
     */
    openFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].openSideModal({
                component: _components_filter_filter__WEBPACK_IMPORTED_MODULE_15__["AddonCalendarFilterComponent"],
                componentProps: {
                    courses: this.courses,
                    filter: this.filter,
                },
            });
        });
    }
    /**
     * Open page to create/edit an event.
     *
     * @param eventId Event ID to edit.
     */
    openEdit(eventId) {
        const params = {};
        eventId = eventId || 0;
        if (this.filter.courseId) {
            params.courseId = this.filter.courseId;
        }
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath(`/calendar/edit/${eventId}`, { params });
    }
    /**
     * Open calendar events settings.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_16__["CoreNavigator"].navigateToSitePath('/calendar/calendar-settings');
    }
    /**
     * Toogle display: monthly view or upcoming events.
     */
    toggleDisplay() {
        this.showCalendar = !this.showCalendar;
        if (!this.showCalendar) {
            this.loadUpcoming = true;
        }
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        (_a = this.newEventObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.discardedObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.editEventObserver) === null || _c === void 0 ? void 0 : _c.off();
        (_d = this.deleteEventObserver) === null || _d === void 0 ? void 0 : _d.off();
        (_e = this.undeleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
        (_f = this.syncObserver) === null || _f === void 0 ? void 0 : _f.off();
        (_g = this.manualSyncObserver) === null || _g === void 0 ? void 0 : _g.off();
        (_h = this.filterChangedObserver) === null || _h === void 0 ? void 0 : _h.off();
        (_j = this.onlineObserver) === null || _j === void 0 ? void 0 : _j.unsubscribe();
    }
};
AddonCalendarIndexPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
AddonCalendarIndexPage.propDecorators = {
    calendarComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_13__["AddonCalendarCalendarComponent"],] }],
    upcomingEventsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_upcoming_events_upcoming_events__WEBPACK_IMPORTED_MODULE_14__["AddonCalendarUpcomingEventsComponent"],] }]
};
AddonCalendarIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/index/index.html")).default,
    })
], AddonCalendarIndexPage);



/***/ }),

/***/ "./src/addons/calendar/pages/settings/settings.ts":
/*!********************************************************!*\
  !*** ./src/addons/calendar/pages/settings/settings.ts ***!
  \********************************************************/
/*! exports provided: AddonCalendarSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPage", function() { return AddonCalendarSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/reminders/services/reminders */ "./src/core/features/reminders/services/reminders.ts");
/* harmony import */ var _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/reminders/components/set-reminder-menu/set-reminder-menu */ "./src/core/features/reminders/components/set-reminder-menu/set-reminder-menu.ts");
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
 * Page that displays the calendar settings.
 */
let AddonCalendarSettingsPage = class AddonCalendarSettingsPage {
    constructor() {
        this.defaultTimeLabel = '';
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateDefaultTimeLabel();
        });
    }
    /**
     * Change default time.
     *
     * @param e Event.
     * @returns Promise resolved when done.
     */
    changeDefaultTime(e) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            const reminderTime = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].openPopover({
                component: _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_4__["CoreRemindersSetReminderMenuComponent"],
                componentProps: {
                    initialValue: this.defaultTime,
                    noReminderLabel: 'core.settings.disabled',
                },
                event: e,
            });
            if (reminderTime === undefined) {
                // User canceled.
                return;
            }
            yield _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreReminders"].setDefaultNotificationTime((_a = reminderTime.timeBefore) !== null && _a !== void 0 ? _a : _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreRemindersService"].DISABLED);
            this.updateDefaultTimeLabel();
        });
    }
    /**
     * Update default time label.
     */
    updateDefaultTimeLabel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.defaultTime = yield _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreReminders"].getDefaultNotificationTime();
            const defaultTime = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreRemindersService"].convertSecondsToValueAndUnit(this.defaultTime);
            this.defaultTimeLabel = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreReminders"].getUnitValueLabel(defaultTime.value, defaultTime.unit);
        });
    }
};
AddonCalendarSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html")).default,
    })
], AddonCalendarSettingsPage);



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
//# sourceMappingURL=calendar-lazy-module.js.map