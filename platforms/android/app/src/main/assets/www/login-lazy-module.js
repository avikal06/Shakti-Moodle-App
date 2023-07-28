(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1 *ngIf=\"!changingPassword\">{{ 'core.login.changepassword' | translate }}</h1>\r\n            <h1 *ngIf=\"changingPassword\">{{ 'core.login.reconnecttosite' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"showHelp()\" [attr.aria-label]=\"'core.help' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"far-circle-question\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list class=\"list-item-limited-width\">\r\n        <ng-container *ngIf=\"!changingPassword\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.login.forcepasswordchangenotice' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"openChangePasswordPage()\">\r\n                {{ 'core.login.changepasswordbutton' | translate }}\r\n            </ion-button>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"changingPassword\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>{{ 'core.login.changepasswordreconnectinstructions' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"login()\">\r\n                {{ 'core.login.reconnect' | translate }}\r\n            </ion-button>\r\n        </ng-container>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p>{{ 'core.wanttochangesite' | translate }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" fill=\"outline\" (click)=\"logout()\">\r\n            {{ logoutLabel | translate }}\r\n        </ion-button>\r\n    </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/email-signup/email-signup.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/email-signup/email-signup.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.newaccount' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"authInstructions\" (click)=\"showAuthInstructions()\"\r\n                [attr.aria-label]=\"'core.login.instructions' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"far-circle-question\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"settingsLoaded\" *ngIf=\"!isMinor\">\r\n        <div class=\"list-item-limited-width\">\r\n\r\n            <!-- Site has an unsupported required field. -->\r\n            <ion-list *ngIf=\"!allRequiredSupported\">\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        {{ 'core.login.signuprequiredfieldnotsupported' | translate }}\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-button expand=\"block\" class=\"ion-margin\" [href]=\"signupUrl\" core-link autoLogin=\"no\" [showBrowserWarning]=\"false\">\r\n                    {{ 'core.openinbrowser' | translate }}\r\n                </ion-button>\r\n            </ion-list>\r\n\r\n            <ng-container *ngIf=\"allRequiredSupported && settingsLoaded && settings\">\r\n                <!-- Age verification. -->\r\n                <form *ngIf=\"ageDigitalConsentVerification\" [formGroup]=\"ageVerificationForm\" (ngSubmit)=\"verifyAge($event)\" #ageForm>\r\n\r\n                    <ion-item-divider class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <h2>{{ 'core.agelocationverification' | translate }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.whatisyourage' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"number\" name=\"age\" placeholder=\"0\" formControlName=\"age\" autocapitalize=\"none\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.wheredoyoulive' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-select name=\"country\" formControlName=\"country\" [cancelText]=\"'core.cancel' | translate\"\r\n                            [okText]=\"'core.ok' | translate\" [placeholder]=\"'core.login.selectacountry' | translate\">\r\n                            <ion-select-option value=\"\">{{ 'core.login.selectacountry' | translate }}</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <!-- Submit button. -->\r\n                    <ion-button expand=\"block\" class=\"ion-margin\" type=\"submit\" [disabled]=\"!ageVerificationForm.valid\">\r\n                        {{ 'core.proceed' | translate }}\r\n                    </ion-button>\r\n\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'core.whyisthisrequired' | translate }}</p>\r\n                            <p>{{ 'core.explanationdigitalminor' | translate }}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </form>\r\n\r\n                <!-- Signup form. -->\r\n                <form *ngIf=\"!ageDigitalConsentVerification\" [formGroup]=\"signupForm\" (ngSubmit)=\"create($event)\" #signupFormEl>\r\n\r\n                    <ion-item class=\"ion-text-wrap ion-text-center\">\r\n                        <ion-label>\r\n                            <!-- If no sitename show big siteurl. -->\r\n                            <p *ngIf=\"!siteName\" class=\"ion-padding item-heading\">{{siteUrl}}</p>\r\n                            <!-- If sitename, show big sitename and small siteurl. -->\r\n                            <p *ngIf=\"siteName\" class=\"ion-padding item-heading\">\r\n                                <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\r\n                            </p>\r\n                            <p *ngIf=\"siteName\">{{siteUrl}}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n                    <!-- Username and password. -->\r\n                    <ion-item-divider class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <h2>{{ 'core.login.createuserandpass' | translate }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.login.username' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"text\" name=\"username\" placeholder=\"{{ 'core.login.username' | translate }}\"\r\n                            formControlName=\"username\" autocapitalize=\"none\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls.username\" [errorMessages]=\"usernameErrors\"></core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.login.password' | translate }}</span>\r\n                        </ion-label>\r\n                        <core-show-password name=\"password\">\r\n                            <ion-input name=\"password\" type=\"password\" placeholder=\"{{ 'core.login.password' | translate }}\"\r\n                                formControlName=\"password\" [clearOnEdit]=\"false\" autocomplete=\"new-password\" required=\"true\">\r\n                            </ion-input>\r\n                        </core-show-password>\r\n                        <p *ngIf=\"settings.passwordpolicy\" class=\"core-input-footnote\">\r\n                            {{settings.passwordpolicy}}\r\n                        </p>\r\n                        <core-input-errors [control]=\"signupForm.controls.password\" [errorMessages]=\"passwordErrors\"></core-input-errors>\r\n                    </ion-item>\r\n\r\n                    <!-- More details. -->\r\n                    <ion-item-divider class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <h2>{{ 'core.login.supplyinfo' | translate }}</h2>\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.user.email' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"email\" name=\"email\" placeholder=\"{{ 'core.user.email' | translate }}\" formControlName=\"email\"\r\n                            autocapitalize=\"none\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls.email\" [errorMessages]=\"emailErrors\"></core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.user.emailagain' | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"email\" name=\"email2\" placeholder=\"{{ 'core.user.emailagain' | translate }}\" autocapitalize=\"none\"\r\n                            formControlName=\"email2\" autocorrect=\"off\" [pattern]=\"escapeMail(signupForm.controls.email.value)\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls.email2\" [errorMessages]=\"email2Errors\"></core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item *ngFor=\"let nameField of settings.namefields\" class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">\r\n                            <span core-mark-required=\"true\">{{ 'core.user.' + nameField | translate }}</span>\r\n                        </ion-label>\r\n                        <ion-input type=\"text\" [name]=\"nameField\" placeholder=\"{{ 'core.user.' + nameField | translate }}\"\r\n                            formControlName=\"{{nameField}}\" autocorrect=\"off\">\r\n                        </ion-input>\r\n                        <core-input-errors [control]=\"signupForm.controls[nameField]\" [errorMessages]=\"namefieldsErrors![nameField]\">\r\n                        </core-input-errors>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">{{ 'core.user.city' | translate }}</ion-label>\r\n                        <ion-input type=\"text\" name=\"city\" placeholder=\"{{ 'core.user.city' | translate }}\" formControlName=\"city\"\r\n                            autocorrect=\"off\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label position=\"stacked\">{{ 'core.user.country' | translate }}</ion-label>\r\n                        <ion-select name=\"country\" formControlName=\"country\" [placeholder]=\"'core.login.selectacountry' | translate\"\r\n                            [cancelText]=\"'core.cancel' | translate\" [okText]=\"'core.ok' | translate\">\r\n                            <ion-select-option value=\"\">{{ 'core.login.selectacountry' | translate }}</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n\r\n                    <!-- Other categories. -->\r\n                    <ng-container *ngFor=\"let category of categories\">\r\n                        <ion-item-divider class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <p class=\"item-heading\">{{ category.name }}</p>\r\n                            </ion-label>\r\n                        </ion-item-divider>\r\n                        <core-user-profile-field *ngFor=\"let field of category.fields\" [field]=\"field\" [edit]=\"true\" [signup]=\"true\"\r\n                            registerAuth=\"email\" [form]=\"signupForm\"></core-user-profile-field>\r\n                    </ng-container>\r\n\r\n                    <!-- ReCAPTCHA -->\r\n                    <ng-container *ngIf=\"settings.recaptchapublickey\">\r\n                        <ion-item-divider class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <h2><span [core-mark-required]=\"true\">{{ 'core.login.security_question' | translate }}</span></h2>\r\n                            </ion-label>\r\n                        </ion-item-divider>\r\n                        <core-recaptcha [publicKey]=\"settings.recaptchapublickey\" [model]=\"captcha\" [siteUrl]=\"siteUrl\"></core-recaptcha>\r\n                    </ng-container>\r\n\r\n                    <!-- Site policy (if any). -->\r\n                    <ng-container *ngIf=\"settings.sitepolicy\">\r\n                        <ion-item-divider class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <h2>{{ 'core.login.policyagreement' | translate }}</h2>\r\n                            </ion-label>\r\n                        </ion-item-divider>\r\n                        <ion-item class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <a [href]=\"settings.sitepolicy\" core-link capture=\"false\">\r\n                                    {{ 'core.login.policyagreementclick' | translate }}\r\n                                </a>\r\n                            </ion-label>\r\n                        </ion-item>\r\n                        <ion-item class=\"ion-text-wrap\">\r\n                            <ion-label>\r\n                                <span [core-mark-required]=\"true\">{{ 'core.login.policyacceptmandatory' | translate }}</span>\r\n                                <core-input-errors [control]=\"signupForm.controls.policyagreed\" [errorMessages]=\"policyErrors\">\r\n                                </core-input-errors>\r\n                            </ion-label>\r\n                            <ion-checkbox slot=\"end\" name=\"policyagreed\" formControlName=\"policyagreed\"></ion-checkbox>\r\n                        </ion-item>\r\n                    </ng-container>\r\n\r\n                    <!-- Submit button. -->\r\n                    <ion-button expand=\"block\" class=\"ion-margin\" type=\"submit\">{{ 'core.login.createaccount' | translate }}</ion-button>\r\n                    <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\r\n                    <input type=\"submit\" class=\"core-submit-hidden-enter\" />\r\n                </form>\r\n            </ng-container>\r\n        </div>\r\n    </core-loading>\r\n\r\n    <div class=\"list-item-limited-width\">\r\n        <ion-list *ngIf=\"allRequiredSupported && isMinor\">\r\n            <ion-item-divider class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <h2 *ngIf=\"siteName\" class=\"item-heading ion-padding\">\r\n                        <core-format-text [text]=\"siteName\" [filter]=\"false\"></core-format-text>\r\n                    </h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'core.considereddigitalminor' | translate }}</p>\r\n                    <p>{{ 'core.digitalminor_desc' | translate }}</p>\r\n                    <p *ngIf=\"supportName\">{{ supportName }}</p>\r\n                    <p *ngIf=\"supportEmail\">{{ supportEmail }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-button *ngIf=\"!supportName && !supportEmail\" expand=\"block\" class=\"ion-margin\" (click)=\"showContactOnSite()\">\r\n                {{ 'core.openinbrowser' | translate }}\r\n            </ion-button>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.passwordforgotten' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div class=\"list-item-limited-width\">\r\n        <core-login-exceeded-attempts *ngIf=\"canContactSupport && wasPasswordResetRequestedRecently\" [supportConfig]=\"supportConfig\"\r\n            [supportSubject]=\"'core.login.exceededpasswordresetattemptssupportsubject' | translate\">\r\n            {{ 'core.login.exceededpasswordresetattempts' | translate }}\r\n        </core-login-exceeded-attempts>\r\n\r\n        <ion-list>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>{{ 'core.login.passwordforgotteninstructions2' | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n        <ion-card>\r\n            <form [formGroup]=\"myForm\" (ngSubmit)=\"resetPassword($event)\" #resetPasswordForm>\r\n                <ion-item-divider class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ 'core.login.searchby' | translate }}</p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-radio-group formControlName=\"field\">\r\n                    <ion-item>\r\n                        <ion-label>{{ 'core.login.username' | translate }}</ion-label>\r\n                        <ion-radio slot=\"end\" value=\"username\"></ion-radio>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>{{ 'core.user.email' | translate }}</ion-label>\r\n                        <ion-radio slot=\"end\" value=\"email\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n                <ion-item>\r\n                    <ion-label class=\"sr-only\">{{ 'core.login.usernameoremail' | translate }}</ion-label>\r\n                    <ion-input type=\"text\" name=\"value\" placeholder=\"{{ 'core.login.usernameoremail' | translate }}\" formControlName=\"value\"\r\n                        autocapitalize=\"none\" autocorrect=\"off\" [core-auto-focus]=\"autoFocus\">\r\n                    </ion-input>\r\n                </ion-item>\r\n                <ion-button type=\"submit\" class=\"ion-margin\" expand=\"block\" [disabled]=\"!myForm.valid\">\r\n                    {{ 'core.courses.search' | translate }}\r\n                </ion-button>\r\n            </form>\r\n        </ion-card>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site-policy/site-policy.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site-policy/site-policy.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.policyagreement' | translate }}</h1>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"policyLoaded\">\r\n        <ion-list *ngIf=\"sitePolicy\">\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>{{ 'core.login.policyagree' | translate }}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <p>\r\n                        <a [href]=\"sitePolicy\" core-link [capture]=\"false\">{{ 'core.login.policyagreementclick' | translate }}</a>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-card *ngIf=\"showInline\" class=\"core-site-policy-iframe-container\">\r\n                <core-iframe [src]=\"sitePolicy\"></core-iframe>\r\n            </ion-card>\r\n            <ion-button class=\"ion-text-wrap ion-margin-horizontal\" expand=\"block\" (click)=\"accept()\">\r\n                {{ 'core.login.policyacceptmandatory' | translate }}\r\n            </ion-button>\r\n            <ion-button class=\"ion-text-wrap ion-margin-horizontal ion-margin-bottom\" expand=\"block\" fill=\"outline\" (click)=\"cancel()\">\r\n                {{ 'core.login.cancel' | translate }}\r\n            </ion-button>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.connecttomoodle' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-gear\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <div class=\"list-item-limited-width\">\r\n        <div class=\"ion-text-center ion-padding ion-margin-bottom core-login-site-logo\" [class.hidden]=\"hasSites || enteredSiteUrl\">\r\n            <img src=\"assets/img/login_logo.png\" class=\"avatar-full login-logo\" role=\"presentation\" alt=\"\">\r\n        </div>\r\n        <form [formGroup]=\"siteForm\" (ngSubmit)=\"connect($event, siteForm.value.siteUrl)\" *ngIf=\"!fixedSites && siteForm\" #siteFormEl>\r\n            <!-- Form to input the site URL if there are no fixed sites. -->\r\n            <ng-container *ngIf=\" siteSelector=='url'\">\r\n                <ion-item>\r\n                    <ion-label position=\" stacked\">\r\n                        <h2>{{ 'core.login.siteaddress' | translate }}</h2>\r\n                    </ion-label>\r\n                    <ion-input name=\"url\" type=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\"\r\n                        formControlName=\"siteUrl\" [core-auto-focus]=\"showKeyboard && !showScanQR\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"siteSelector != 'url'\">\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\">\r\n                        <h2>{{ 'core.login.siteaddress' | translate }}</h2>\r\n                    </ion-label>\r\n                    <ion-input name=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\" formControlName=\"siteUrl\"\r\n                        [core-auto-focus]=\"showKeyboard && !showScanQR\" (ionChange)=\"searchSite($event, siteForm.value.siteUrl)\">\r\n                    </ion-input>\r\n                </ion-item>\r\n\r\n                <ion-list [class.hidden]=\"!hasSites && !enteredSiteUrl\" class=\"core-login-site-list\">\r\n                    <ion-item class=\"core-login-site-list-title\">\r\n                        <ion-label>\r\n                            <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item button *ngIf=\"enteredSiteUrl\" (click)=\"connect($event, enteredSiteUrl.url)\"\r\n                        [attr.aria-label]=\"'core.login.connect' | translate\" detail=\"true\" class=\"core-login-entered-site\">\r\n                        <ion-thumbnail slot=\"start\" aria-hidden=\"true\">\r\n                            <ion-icon name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-thumbnail>\r\n                        <ion-label>\r\n                            <h2 class=\"ion-text-wrap\">{{ 'core.login.yourenteredsite' | translate }}</h2>\r\n                            <p>{{enteredSiteUrl.noProtocolUrl}}</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n                    <div class=\"core-login-site-list-found\" [class.hidden]=\"!hasSites\" [class.dimmed]=\"loadingSites\">\r\n                        <div *ngIf=\"loadingSites\" class=\"core-login-site-list-loading\">\r\n                            <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                        </div>\r\n                        <ng-container *ngFor=\"let site of sites\">\r\n                            <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\r\n                        </ng-container>\r\n                    </div>\r\n                </ion-list>\r\n\r\n                <div *ngIf=\"!hasSites && loadingSites\" class=\"core-login-site-nolist-loading\">\r\n                    <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ion-item *ngIf=\"siteSelector == 'url'\">\r\n                <ion-label>\r\n                    <ion-button expand=\"block\" [disabled]=\"!siteForm.valid\" class=\"ion-text-wrap\" type=\"submit\">\r\n                        {{ 'core.login.connect' | translate }}\r\n                    </ion-button>\r\n                </ion-label>\r\n            </ion-item>\r\n        </form>\r\n\r\n        <ng-container *ngIf=\"fixedSites\">\r\n            <!-- Pick the site from a list of fixed sites. -->\r\n            <ion-list *ngIf=\"siteSelector == 'list'\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-searchbar *ngIf=\"fixedSites.length > 4\" [(ngModel)]=\"filter\" (ionInput)=\"filterChanged($event)\"\r\n                    (ionCancel)=\"filterChanged()\" [placeholder]=\"'core.login.findyoursite' | translate\">\r\n                </ion-searchbar>\r\n                <ng-container *ngFor=\"let site of filteredSites\">\r\n                    <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\r\n                </ng-container>\r\n            </ion-list>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"showScanQR && !hasSites && !enteredSiteUrl\">\r\n            <div class=\"ion-text-center ion-padding ion-margin-top core-login-site-qrcode-separator\">{{ 'core.login.or' | translate }}\r\n            </div>\r\n            <ion-button expand=\"block\" fill=\"outline\" class=\"ion-margin core-login-site-qrcode\" (click)=\"showInstructionsAndScanQR()\"\r\n                aria-haspopup=\"dialog\">\r\n                <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\r\n                {{ 'core.scanqr' | translate }}\r\n            </ion-button>\r\n        </ng-container>\r\n\r\n        <!-- Help. -->\r\n        <ion-button class=\"ion-margin-top core-login-need-help core-button-as-link ion-text-wrap\" (click)=\"showHelp()\"\r\n            aria-haspopup=\"dialog\" expand=\"block\" fill=\"clear\">\r\n            {{ 'core.needhelp' | translate }}\r\n        </ion-button>\r\n    </div>\r\n</ion-content>\r\n\r\n<!-- Template site selector. -->\r\n<ng-template #sitelisting let-site=\"site\">\r\n    <ion-item button (click)=\"connect($event, site.url, site)\" [ngClass]=\"site.className\" [attr.aria-label]=\"site.name\" detail=\"true\">\r\n        <ion-thumbnail *ngIf=\"siteFinderSettings.displayimage\" slot=\"start\">\r\n            <img [src]=\"site.imageurl\" *ngIf=\"site.imageurl\" onError=\"this.src='assets/icon/icon.png'\" alt=\"\" role=\"presentation\">\r\n            <img src=\"assets/icon/icon.png\" *ngIf=\"!site.imageurl\" class=\"core-login-default-icon\" alt=\"\" role=\"presentation\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n            <p *ngIf=\"site.title\" class=\"item-heading ion-text-wrap\">{{site.title}}</p>\r\n            <p *ngIf=\"site.noProtocolUrl\">{{site.noProtocolUrl}}</p>\r\n            <p *ngIf=\"site.location\">{{site.location}}</p>\r\n        </ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <h1>{{ 'core.login.accounts' | translate }}</h1>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" *ngIf=\"accountsList.count > 0\" (click)=\"toggleDelete()\"\r\n                [attr.aria-label]=\"'core.login.toggleremove' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-gear\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"limited-width\">\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-list class=\"core-sitelist\">\r\n            <ion-card *ngFor=\"let sites of accountsList.otherSites\">\r\n                <ion-item-divider sticky=\"true\" *ngIf=\"sites[0]\" class=\"core-sitelist-sitename\">\r\n                    <ion-label>\r\n                        <h2>\r\n                            <core-format-text [text]=\"sites[0].siteName\" clean=\"true\" [siteId]=\"sites[0].id\"></core-format-text>\r\n                        </h2>\r\n                        <p><a [href]=\"sites[0].siteUrl\" core-link autoLogin=\"no\">{{ sites[0].siteUrlWithoutProtocol }}</a></p>\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n\r\n                <ion-item button *ngFor=\"let site of sites\" (click)=\"login($event, site.id)\" detail=\"true\">\r\n                    <core-user-avatar [user]=\"site\" slot=\"start\" [linkProfile]=\"false\" [siteId]=\"site.id\"></core-user-avatar>\r\n\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{site.fullname}}</p>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"!showDelete && site.badge\" @coreShowHideAnimation>\r\n                        <span aria-hidden=\"true\">{{site.badge}}</span>\r\n                        <span class=\"sr-only\">{{ 'core.login.sitebadgedescription' | translate:{ count: site.badge }\r\n                            }}</span>\r\n                    </ion-badge>\r\n                    <ion-button *ngIf=\"showDelete\" slot=\"end\" fill=\"clear\" color=\"danger\" (click)=\"deleteSite($event, site)\"\r\n                        [attr.aria-label]=\"'core.login.removeaccount' | translate\" [@coreSlideInOut]=\"'fromRight'\">\r\n                        <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ion-card>\r\n        </ion-list>\r\n    </core-loading>\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button (click)=\"add()\" [attr.aria-label]=\"'core.login.add' | translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'core.login.add' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/guards/has-sites.ts":
/*!*****************************************************!*\
  !*** ./src/core/features/login/guards/has-sites.ts ***!
  \*****************************************************/
/*! exports provided: CoreLoginHasSitesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginHasSitesGuard", function() { return CoreLoginHasSitesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_login_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login-helper */ "./src/core/features/login/services/login-helper.ts");
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






let CoreLoginHasSitesGuard = class CoreLoginHasSitesGuard {
    /**
     * @inheritdoc
     */
    canActivate() {
        return this.guard();
    }
    /**
     * @inheritdoc
     */
    canLoad() {
        return this.guard();
    }
    /**
     * Check if the user has any sites stored.
     *
     * @returns Promise resolved with true if it's not redirected or the redirection route.
     */
    guard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sites = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSites(), []);
            if (sites.length > 0) {
                return true;
            }
            const [path, params] = yield _services_login_helper__WEBPACK_IMPORTED_MODULE_5__["CoreLoginHelper"].getAddSiteRouteInfo();
            const route = _singletons__WEBPACK_IMPORTED_MODULE_4__["Router"].parseUrl(path);
            route.queryParams = params;
            return route;
        });
    }
};
CoreLoginHasSitesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CoreLoginHasSitesGuard);



/***/ }),

/***/ "./src/core/features/login/login-lazy.module.ts":
/*!******************************************************!*\
  !*** ./src/core/features/login/login-lazy.module.ts ***!
  \******************************************************/
/*! exports provided: CoreLoginLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginLazyModule", function() { return CoreLoginLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _guards_has_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/has-sites */ "./src/core/features/login/guards/has-sites.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "./src/core/features/login/components/components.module.ts");
/* harmony import */ var _services_login_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _features_login_pages_forgotten_password_forgotten_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/login/pages/forgotten-password/forgotten-password */ "./src/core/features/login/pages/forgotten-password/forgotten-password.ts");
/* harmony import */ var _features_login_pages_site_policy_site_policy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/login/pages/site-policy/site-policy */ "./src/core/features/login/pages/site-policy/site-policy.ts");
/* harmony import */ var _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/user/components/components.module */ "./src/core/features/user/components/components.module.ts");
/* harmony import */ var _features_login_pages_email_signup_email_signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/login/pages/email-signup/email-signup */ "./src/core/features/login/pages/email-signup/email-signup.ts");
/* harmony import */ var _features_login_pages_site_site__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/login/pages/site/site */ "./src/core/features/login/pages/site/site.ts");
/* harmony import */ var _features_login_pages_sites_sites__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/login/pages/sites/sites */ "./src/core/features/login/pages/sites/sites.ts");
/* harmony import */ var _features_login_pages_change_password_change_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/login/pages/change-password/change-password */ "./src/core/features/login/pages/change-password/change-password.ts");
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
        pathMatch: 'full',
        redirectTo: 'sites',
    },
    {
        path: 'site',
        component: _features_login_pages_site_site__WEBPACK_IMPORTED_MODULE_11__["CoreLoginSitePage"],
    },
    {
        path: 'credentials',
        loadChildren: () => _services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].getCredentialsRouteModule(),
    },
    {
        path: 'sites',
        component: _features_login_pages_sites_sites__WEBPACK_IMPORTED_MODULE_12__["CoreLoginSitesPage"],
        canLoad: [_guards_has_sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHasSitesGuard"]],
        canActivate: [_guards_has_sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHasSitesGuard"]],
    },
    {
        path: 'forgottenpassword',
        component: _features_login_pages_forgotten_password_forgotten_password__WEBPACK_IMPORTED_MODULE_7__["CoreLoginForgottenPasswordPage"],
    },
    {
        path: 'changepassword',
        component: _features_login_pages_change_password_change_password__WEBPACK_IMPORTED_MODULE_13__["CoreLoginChangePasswordPage"],
    },
    {
        path: 'sitepolicy',
        component: _features_login_pages_site_policy_site_policy__WEBPACK_IMPORTED_MODULE_8__["CoreLoginSitePolicyPage"],
    },
    {
        path: 'emailsignup',
        component: _features_login_pages_email_signup_email_signup__WEBPACK_IMPORTED_MODULE_10__["CoreLoginEmailSignupPage"],
    },
    {
        path: 'reconnect',
        loadChildren: () => _services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].getReconnectRouteModule(),
    },
];
let CoreLoginLazyModule = class CoreLoginLazyModule {
};
CoreLoginLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreLoginComponentsModule"],
            _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_9__["CoreUserComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _features_login_pages_forgotten_password_forgotten_password__WEBPACK_IMPORTED_MODULE_7__["CoreLoginForgottenPasswordPage"],
            _features_login_pages_site_policy_site_policy__WEBPACK_IMPORTED_MODULE_8__["CoreLoginSitePolicyPage"],
            _features_login_pages_site_site__WEBPACK_IMPORTED_MODULE_11__["CoreLoginSitePage"],
            _features_login_pages_sites_sites__WEBPACK_IMPORTED_MODULE_12__["CoreLoginSitesPage"],
            _features_login_pages_change_password_change_password__WEBPACK_IMPORTED_MODULE_13__["CoreLoginChangePasswordPage"],
            _features_login_pages_email_signup_email_signup__WEBPACK_IMPORTED_MODULE_10__["CoreLoginEmailSignupPage"],
        ],
    })
], CoreLoginLazyModule);



/***/ }),

/***/ "./src/core/features/login/pages/change-password/change-password.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/login/pages/change-password/change-password.ts ***!
  \**************************************************************************/
/*! exports provided: CoreLoginChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginChangePasswordPage", function() { return CoreLoginChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_user_services_support__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/support */ "./src/core/features/user/services/support.ts");
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
 * Page that shows instructions to change the password.
 */
let CoreLoginChangePasswordPage = class CoreLoginChangePasswordPage {
    constructor() {
        this.changingPassword = false;
        this.logoutLabel = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__["CoreLoginHelper"].getLogoutLabel();
    }
    /**
     * Show help modal.
     */
    showHelp() {
        _features_user_services_support__WEBPACK_IMPORTED_MODULE_8__["CoreUserSupport"].showHelp(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.login.changepasswordhelp'), _singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.login.changepasswordsupportsubject'));
    }
    /**
     * Open the change password page in a browser.
     */
    openChangePasswordPage() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__["CoreLoginHelper"].openInAppForEdit(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId(), '/login/change_password.php', undefined, true);
        this.changingPassword = true;
        this.detectPasswordChanged();
    }
    /**
     * Login the user.
     */
    login() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSiteHome();
        this.changingPassword = false;
    }
    /**
     * Logout the user.
     */
    logout() {
        _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].logout();
        this.changingPassword = false;
    }
    /**
     * Try to detect if the user changed password in browser.
     */
    detectPasswordChanged() {
        if (this.urlLoadedObserver) {
            // Already listening (shouldn't happen).
            return;
        }
        this.urlLoadedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_LOAD_STOP, (event) => {
            var _a;
            if (event.url.match(/\/login\/change_password\.php.*return=1/)) {
                // Password has changed, close the IAB now.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].closeInAppBrowser();
                this.login();
                return;
            }
            if (!event.url.match(/\/login\/change_password\.php/)) {
                return;
            }
            // Use a script to check if the user changed the password, in some platforms we cannot tell using the URL.
            (_a = _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].getInAppBrowserInstance()) === null || _a === void 0 ? void 0 : _a.executeScript({
                code: `
                    if (
                        document.querySelector('input[type="password"]') === null &&
                        document.querySelector('button[type="submit"]') !== null
                    ) {
                        webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({ passwordChanged: true }));
                    }
                `,
            });
        });
        this.messageObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_MESSAGE, (data) => {
            if (data.passwordChanged) {
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].closeInAppBrowser();
                this.login();
            }
        });
        this.browserClosedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_EXIT, () => {
            var _a, _b, _c;
            (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.messageObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.browserClosedObserver) === null || _c === void 0 ? void 0 : _c.off();
            delete this.urlLoadedObserver;
            delete this.messageObserver;
            delete this.browserClosedObserver;
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.messageObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.browserClosedObserver) === null || _c === void 0 ? void 0 : _c.off();
    }
};
CoreLoginChangePasswordPage.ctorParameters = () => [];
CoreLoginChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html")).default,
    })
], CoreLoginChangePasswordPage);



/***/ }),

/***/ "./src/core/features/login/pages/email-signup/email-signup.ts":
/*!********************************************************************!*\
  !*** ./src/core/features/login/pages/email-signup/email-signup.ts ***!
  \********************************************************************/
/*! exports provided: CoreLoginEmailSignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginEmailSignupPage", function() { return CoreLoginEmailSignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/ws */ "./src/core/services/ws.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_user_services_user_profile_field_delegate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/user/services/user-profile-field-delegate */ "./src/core/features/user/services/user-profile-field-delegate.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _components_recaptcha_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/recaptcha/recaptcha */ "./src/core/components/recaptcha/recaptcha.ts");
/* harmony import */ var _singletons_path__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/path */ "./src/core/singletons/path.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
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
 * Page to signup using email.
 */
let CoreLoginEmailSignupPage = class CoreLoginEmailSignupPage {
    constructor(fb, elementRef, changeDetector) {
        this.fb = fb;
        this.elementRef = elementRef;
        this.changeDetector = changeDetector;
        this.authInstructions = '';
        this.settingsLoaded = false;
        this.allRequiredSupported = true;
        this.captcha = {
            recaptcharesponse: '',
        };
        this.isMinor = false; // Whether the user is minor age.
        // Create the ageVerificationForm.
        this.ageVerificationForm = this.fb.group({
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.countryControl = this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.ageVerificationForm.addControl('country', this.countryControl);
        // Create the signupForm with the basic controls. More controls will be added later.
        this.signupForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            email2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
        });
        // Setup validation errors.
        this.usernameErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].getErrorMessages('core.login.usernamerequired');
        this.passwordErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].getErrorMessages('core.login.passwordrequired');
        this.emailErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].getErrorMessages('core.login.missingemail');
        this.policyErrors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].getErrorMessages('core.login.policyagree');
        this.email2Errors = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].getErrorMessages('core.login.missingemail', undefined, 'core.login.emailnotmatch');
    }
    /**
     * Component initialized.
     */
    ngOnInit() {
        const siteUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('siteUrl');
        if (!siteUrl) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('Site URL not supplied.');
            _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
            return;
        }
        this.siteUrl = siteUrl;
        // Fetch the data.
        this.fetchData().finally(() => {
            this.settingsLoaded = true;
        });
    }
    /**
     * Complete the FormGroup using the settings received from server.
     */
    completeFormGroup() {
        var _a, _b, _c, _d, _e;
        this.signupForm.addControl('city', this.fb.control(((_a = this.settings) === null || _a === void 0 ? void 0 : _a.defaultcity) || ''));
        this.signUpCountryControl = this.fb.control(((_b = this.settings) === null || _b === void 0 ? void 0 : _b.country) || '');
        this.signupForm.addControl('country', this.signUpCountryControl);
        // Add the name fields.
        for (const i in (_c = this.settings) === null || _c === void 0 ? void 0 : _c.namefields) {
            this.signupForm.addControl((_d = this.settings) === null || _d === void 0 ? void 0 : _d.namefields[i], this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        }
        if ((_e = this.settings) === null || _e === void 0 ? void 0 : _e.sitepolicy) {
            this.signupForm.addControl('policyagreed', this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue));
        }
    }
    /**
     * Fetch the required data from the server.
     *
     * @returns Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Get site config.
                this.siteConfig = yield _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getSitePublicConfig(this.siteUrl);
                this.signupUrl = _singletons_path__WEBPACK_IMPORTED_MODULE_14__["CorePath"].concatenatePaths(this.siteConfig.httpswwwroot, 'login/signup.php');
                if (this.treatSiteConfig()) {
                    // Check content verification.
                    if (this.ageDigitalConsentVerification === undefined) {
                        const result = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('core_auth_is_age_digital_consent_verification_enabled', {}, { siteUrl: this.siteUrl }));
                        this.ageDigitalConsentVerification = !!(result === null || result === void 0 ? void 0 : result.status);
                    }
                    yield this.getSignupSettings();
                }
                this.completeFormGroup();
            }
            catch (error) {
                if (this.allRequiredSupported) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                }
            }
        });
    }
    /**
     * Get signup settings from server.
     *
     * @returns Promise resolved when done.
     */
    getSignupSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.settings = yield _services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('auth_email_get_signup_settings', {}, { siteUrl: this.siteUrl });
            if (_features_user_services_user_profile_field_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreUserProfileFieldDelegate"].hasRequiredUnsupportedField(this.settings.profilefields)) {
                this.allRequiredSupported = false;
                throw new Error(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.login.signuprequiredfieldnotsupported'));
            }
            this.categories = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].formatProfileFieldsForSignup(this.settings.profilefields);
            if (this.settings.recaptchapublickey) {
                this.captcha.recaptcharesponse = ''; // Reset captcha.
            }
            if (!this.countryControl.value) {
                this.countryControl.setValue(this.settings.country || '');
            }
            const namefieldsErrors = {};
            if (this.settings.namefields) {
                this.settings.namefields.forEach((field) => {
                    namefieldsErrors[field] = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].getErrorMessages('core.login.missing' + field);
                });
            }
            this.namefieldsErrors = namefieldsErrors;
            this.countries = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].getCountryListSorted();
        });
    }
    /**
     * Treat the site config, checking if it's valid and extracting the data we're interested in.
     *
     * @returns True if success.
     */
    treatSiteConfig() {
        var _a;
        if (((_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.registerauth) == 'email' && !_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].isEmailSignupDisabled(this.siteConfig)) {
            this.siteName = this.siteConfig.sitename;
            this.authInstructions = this.siteConfig.authinstructions;
            this.ageDigitalConsentVerification = this.siteConfig.agedigitalconsentverification;
            this.supportName = this.siteConfig.supportname;
            this.supportEmail = this.siteConfig.supportemail;
            this.countryControl.setValue(this.siteConfig.country || '');
            return true;
        }
        else {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.login.signupplugindisabled', { $a: _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.login.auth_email') }));
            _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
            return false;
        }
    }
    /**
     * Create account.
     *
     * @param e Event.
     * @returns Promise resolved when done.
     */
    create(e) {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            if (!this.signupForm.valid || (((_a = this.settings) === null || _a === void 0 ? void 0 : _a.recaptchapublickey) && !this.captcha.recaptcharesponse)) {
                // Form not valid. Mark all controls as dirty to display errors.
                for (const name in this.signupForm.controls) {
                    this.signupForm.controls[name].markAsDirty();
                }
                this.changeDetector.detectChanges();
                // Scroll to the first element with errors.
                const errorFound = yield _singletons_dom__WEBPACK_IMPORTED_MODULE_15__["CoreDom"].scrollToInputError(this.elementRef.nativeElement);
                if (!errorFound) {
                    // Input not found, show an error modal.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('core.errorinvalidform', true);
                }
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showModalLoading('core.sending', true);
            const params = {
                username: this.signupForm.value.username.trim().toLowerCase(),
                password: this.signupForm.value.password,
                firstname: _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].cleanTags(this.signupForm.value.firstname),
                lastname: _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].cleanTags(this.signupForm.value.lastname),
                email: this.signupForm.value.email.trim(),
                city: _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].cleanTags(this.signupForm.value.city),
                country: this.signupForm.value.country,
            };
            if ((_b = this.siteConfig) === null || _b === void 0 ? void 0 : _b.launchurl) {
                params.redirect = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_10__["CoreLoginHelper"].prepareForSSOLogin(this.siteUrl, undefined, this.siteConfig.launchurl);
            }
            // Get the recaptcha response (if needed).
            if (((_c = this.settings) === null || _c === void 0 ? void 0 : _c.recaptchapublickey) && this.captcha.recaptcharesponse) {
                params.recaptcharesponse = this.captcha.recaptcharesponse;
            }
            try {
                // Get the data for the custom profile fields.
                params.customprofilefields = yield _features_user_services_user_profile_field_delegate__WEBPACK_IMPORTED_MODULE_9__["CoreUserProfileFieldDelegate"].getDataForFields((_d = this.settings) === null || _d === void 0 ? void 0 : _d.profilefields, true, 'email', this.signupForm.value);
                const result = yield _services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('auth_email_signup_user', params, { siteUrl: this.siteUrl });
                if (result.success) {
                    _singletons_form__WEBPACK_IMPORTED_MODULE_12__["CoreForms"].triggerFormSubmittedEvent(this.signupFormElement, true);
                    // Show alert and ho back.
                    const message = _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.login.emailconfirmsent', { $a: params.email });
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.success'), message);
                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
                }
                else {
                    (_e = this.recaptchaComponent) === null || _e === void 0 ? void 0 : _e.expireRecaptchaAnswer();
                    const warning = (_f = result.warnings) === null || _f === void 0 ? void 0 : _f[0];
                    if (warning) {
                        let error = warning.message;
                        if (error == 'incorrect-captcha-sol' || (!error && warning.item == 'recaptcharesponse')) {
                            error = _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.login.recaptchaincorrect');
                        }
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal(error);
                    }
                    else {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('core.login.usernotaddederror', true);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(error, 'core.login.usernotaddederror', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Escape mail to avoid special characters to be treated as a RegExp.
     *
     * @param text Initial mail.
     * @returns Escaped mail.
     */
    escapeMail(text) {
        return _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].escapeForRegex(text);
    }
    /**
     * Show authentication instructions.
     */
    showAuthInstructions() {
        _services_utils_text__WEBPACK_IMPORTED_MODULE_5__["CoreTextUtils"].viewText(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.login.instructions'), this.authInstructions);
    }
    /**
     * Show contact information on site (we have to display again the age verification form).
     */
    showContactOnSite() {
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].openInBrowser(_singletons_path__WEBPACK_IMPORTED_MODULE_14__["CorePath"].concatenatePaths(this.siteUrl, '/login/verify_age_location.php'), { showBrowserWarning: false });
    }
    /**
     * Verify Age.
     *
     * @param e Event.
     * @returns Promise resolved when done.
     */
    verifyAge(e) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            if (!this.ageVerificationForm.valid) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('core.errorinvalidform', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showModalLoading('core.sending', true);
            const params = this.ageVerificationForm.value;
            params.age = parseInt(params.age, 10); // Use just the integer part.
            try {
                const result = yield _services_ws__WEBPACK_IMPORTED_MODULE_7__["CoreWS"].callAjax('core_auth_is_minor', params, { siteUrl: this.siteUrl });
                _singletons_form__WEBPACK_IMPORTED_MODULE_12__["CoreForms"].triggerFormSubmittedEvent(this.ageFormElement, true);
                if (!result.status) {
                    if (this.countryControl.value) {
                        (_a = this.signUpCountryControl) === null || _a === void 0 ? void 0 : _a.setValue(this.countryControl.value);
                    }
                    // Not a minor, go ahead.
                    this.ageDigitalConsentVerification = false;
                }
                else {
                    // Is a minor.
                    this.isMinor = true;
                }
            }
            catch (_b) {
                // Something wrong, redirect to the site.
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModal('There was an error verifying your age, please try again using the browser.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
};
CoreLoginEmailSignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CoreLoginEmailSignupPage.propDecorators = {
    recaptchaComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_recaptcha_recaptcha__WEBPACK_IMPORTED_MODULE_13__["CoreRecaptchaComponent"],] }],
    ageFormElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ageForm',] }],
    signupFormElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['signupFormEl',] }]
};
CoreLoginEmailSignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-email-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/email-signup/email-signup.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginEmailSignupPage);



/***/ }),

/***/ "./src/core/features/login/pages/forgotten-password/forgotten-password.ts":
/*!********************************************************************************!*\
  !*** ./src/core/features/login/pages/forgotten-password/forgotten-password.ts ***!
  \********************************************************************************/
/*! exports provided: CoreLoginForgottenPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginForgottenPasswordPage", function() { return CoreLoginForgottenPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/user/classes/support/guest-support-config */ "./src/core/features/user/classes/support/guest-support-config.ts");
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
 * Page to recover a forgotten password.
 */
let CoreLoginForgottenPasswordPage = class CoreLoginForgottenPasswordPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.wasPasswordResetRequestedRecently = false;
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('siteUrl');
            if (!siteUrl) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal('Site URL not supplied.');
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            const siteConfig = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('siteConfig');
            this.siteUrl = siteUrl;
            this.autoFocus = _services_platform__WEBPACK_IMPORTED_MODULE_8__["CorePlatform"].is('tablet');
            this.myForm = this.formBuilder.group({
                field: ['username', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                value: [_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('username') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.supportConfig = siteConfig && new _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_9__["CoreUserGuestSupportConfig"](siteConfig);
            this.canContactSupport = (_a = this.supportConfig) === null || _a === void 0 ? void 0 : _a.canContactSupport();
            this.wasPasswordResetRequestedRecently = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].wasPasswordResetRequestedRecently(siteUrl);
        });
    }
    /**
     * Request to reset the password.
     *
     * @param e Event.
     */
    resetPassword(e) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const field = this.myForm.value.field;
            const value = this.myForm.value.value;
            if (!value) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal('core.login.usernameoremail', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
            const isMail = field === 'email';
            try {
                const response = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].requestPasswordReset(this.siteUrl, isMail ? '' : value, isMail ? value : '');
                if (response.status === 'dataerror') {
                    // Show an error from the warnings.
                    const warning = (_a = response.warnings) === null || _a === void 0 ? void 0 : _a.find((warning) => (warning.item === 'email' && isMail) || (warning.item === 'username' && !isMail));
                    if (warning) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(warning.message);
                    }
                }
                else if (response.status === 'emailpasswordconfirmnotsent' || response.status === 'emailpasswordconfirmnoemail') {
                    // Error, not found.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(response.notice);
                }
                else {
                    // Success.
                    _singletons_form__WEBPACK_IMPORTED_MODULE_7__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.success'), response.notice);
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                    yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].passwordResetRequested(this.siteUrl);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
};
CoreLoginForgottenPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginForgottenPasswordPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['resetPasswordForm',] }]
};
CoreLoginForgottenPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-forgotten-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotten-password.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html")).default,
    })
], CoreLoginForgottenPasswordPage);



/***/ }),

/***/ "./src/core/features/login/pages/site-policy/site-policy.scss":
/*!********************************************************************!*\
  !*** ./src/core/features/login/pages/site-policy/site-policy.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n:host ion-list ion-item {\n  flex-shrink: 0;\n}\n:host ion-list .core-site-policy-iframe-container {\n  height: 100%;\n}\n:host ion-list .core-site-policy-iframe-container core-iframe {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3BhZ2VzL3NpdGUtcG9saWN5L3NpdGUtcG9saWN5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFFUTtFQUNJLGNBQUE7QUFBWjtBQUdRO0VBQ0ksWUFBQTtBQURaO0FBR1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQURoQiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9wYWdlcy9zaXRlLXBvbGljeS9zaXRlLXBvbGljeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29yZS1zaXRlLXBvbGljeS1pZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgY29yZS1pZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/core/features/login/pages/site-policy/site-policy.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/login/pages/site-policy/site-policy.ts ***!
  \******************************************************************/
/*! exports provided: CoreLoginSitePolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePolicyPage", function() { return CoreLoginSitePolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/mimetype */ "./src/core/services/utils/mimetype.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/analytics */ "./src/core/services/analytics.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page to accept a site policy.
 */
let CoreLoginSitePolicyPage = class CoreLoginSitePolicyPage {
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.siteId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('siteId');
        try {
            this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getRequiredCurrentSite();
        }
        catch (_a) {
            // Not logged in, stop.
            this.cancel();
            return;
        }
        const currentSiteId = this.currentSite.id;
        this.siteId = this.siteId || currentSiteId;
        if (this.siteId != currentSiteId) {
            // Not current site, stop.
            this.cancel();
            return;
        }
        this.fetchSitePolicy();
    }
    /**
     * Fetch the site policy URL.
     *
     * @returns Promise resolved when done.
     */
    fetchSitePolicy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sitePolicy = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].getSitePolicy(this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting site policy.');
                this.cancel();
                return;
            }
            // Try to get the mime type.
            try {
                const mimeType = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].getMimeTypeFromUrl(this.sitePolicy);
                const extension = _services_utils_mimetype__WEBPACK_IMPORTED_MODULE_5__["CoreMimetypeUtils"].getExtension(mimeType, this.sitePolicy);
                this.showInline = extension == 'html' || extension == 'htm';
            }
            catch (_a) {
                // Unable to get mime type, assume it's not supported.
                this.showInline = false;
            }
            finally {
                this.policyLoaded = true;
            }
            _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalytics"].logEvent({
                type: _services_analytics__WEBPACK_IMPORTED_MODULE_9__["CoreAnalyticsEventType"].VIEW_ITEM,
                ws: 'auth_email_get_signup_settings',
                name: _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.login.policyagreement'),
                data: { category: 'policy' },
                url: '/user/policy.php',
            });
        });
    }
    /**
     * Cancel.
     *
     * @returns Promise resolved when done.
     */
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].logout());
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigate('/login/sites', { reset: true });
        });
    }
    /**
     * Accept the site policy.
     *
     * @returns Promise resolved when done.
     */
    accept() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].acceptSitePolicy(this.siteId);
                // Success accepting, go to site initial page.
                // Invalidate cache since some WS don't return error if site policy is not accepted.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].ignoreErrors(this.currentSite.invalidateWsCache());
                _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].SITE_POLICY_AGREED, {}, this.siteId);
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSiteHome();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error accepting site policy.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
};
CoreLoginSitePolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-site-policy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site-policy.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site-policy/site-policy.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./site-policy.scss */ "./src/core/features/login/pages/site-policy/site-policy.scss")).default]
    })
], CoreLoginSitePolicyPage);



/***/ }),

/***/ "./src/core/features/login/pages/site/site.scss":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/site/site.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host {\n  --list-item-max-width: 600px;\n}\n.item-input:last-child {\n  margin-bottom: 20px;\n}\n.core-login-site-connect {\n  margin-top: 1.4rem;\n}\n.item ion-thumbnail {\n  min-width: 50px;\n  min-height: 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 20%;\n  box-shadow: 0 0 4px var(--gray-200);\n  text-align: center;\n  overflow: hidden;\n}\n.item ion-thumbnail img {\n  max-height: 50px;\n  max-width: -webkit-fit-content;\n  max-width: fit-content;\n  width: auto;\n  height: auto;\n  margin: 0 auto;\n  margin-left: 50%;\n  transform: translate3d(-50%,  0,  0);\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n[dir=rtl] .item ion-thumbnail img, :host-context([dir=rtl]) .item ion-thumbnail img {\n  transform: translate3d(calc(-1 * -50%),  0,  0);\n}\n.item ion-thumbnail ion-icon {\n  margin: 0 auto;\n  font-size: 35px;\n  height: 50px;\n}\n:host-context([dir=rtl]) .item ion-thumbnail img {\n  margin-left: 0;\n  margin-right: 50%;\n}\n.core-login-site-logo,\n.core-login-site-list,\n.core-login-site-list-found {\n  transition-delay: 0s;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.7s ease-in-out;\n  max-height: 9999px;\n}\n.core-login-site-logo.hidden,\n.core-login-site-list.hidden,\n.core-login-site-list-found.hidden {\n  opacity: 0;\n  visibility: hidden;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  max-height: 0;\n}\n.core-login-site-list-found.dimmed {\n  pointer-events: none;\n  position: relative;\n}\n.core-login-site-list-loading {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 1;\n}\n.core-login-site-list-loading ion-spinner {\n  margin: 0 auto;\n}\n.core-login-site-nolist-loading {\n  margin-top: 16px;\n  text-align: center;\n}\n.item.core-login-site-list-title ion-label, .item.core-login-site-list-title ion-label h2.item-heading {\n  margin-top: 0;\n}\n@media (min-width: 768px) {\n  ion-content .core-login-site-logo {\n    margin-top: 20%;\n  }\n  ion-content .core-login-site-logo.hidden {\n    margin-top: 0;\n  }\n}\n.core-login-entered-site {\n  background-color: var(--light);\n}\n.core-login-entered-site ion-thumbnail {\n  box-shadow: 0 0 4px var(--gray-300);\n}\n.core-login-default-icon {\n  filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9wYWdlcy9zaXRlL3NpdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQTRHQTs7RUFBQTtBQzlHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDN0RBO0VBQ0ksNEJBQUE7QUFvREo7QUFqREE7RUFDSSxtQkFBQTtBQW9ESjtBQWpEQTtFQUNJLGtCQUFBO0FBb0RKO0FBakRBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW9ESjtBQWxESTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VMd2ZGLG9DQUFBO0VLdGZFLGlCQUFBO0VBQ0Esd0JBQUE7QUFvRFI7QUxzSFc7RUErVUwsK0NBQUE7QUtsY047QUFyREk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUF3RFI7QUFsREk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFxRFI7QUFoREE7OztFQUdJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQW1ESjtBQWpESTs7O0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFxRFI7QUFqREE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBb0RKO0FBakRBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQW9ESjtBQW5ESTtFQUNJLGNBQUE7QUFxRFI7QUFqREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBb0RKO0FBaERJO0VBQ0ksYUFBQTtBQW1EUjtBTGxCSTtFSzVCQTtJQUNJLGVBQUE7RUFrRE47RUFqRE07SUFDSSxhQUFBO0VBbURWO0FBQ0Y7QUEvQ0E7RUFDSSw4QkFBQTtBQWlESjtBQS9DSTtFQUNJLG1DQUFBO0FBaURSO0FBN0NBO0VBQ0ksdUJBQUE7QUFnREoiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvbG9naW4vcGFnZXMvc2l0ZS9zaXRlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xyXG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XHJcblxyXG5AaW1wb3J0IFwiLi9oZWxwZXJzL2hlbHBlcnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcclxuIiwiLyoqXHJcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xyXG4gKi9cclxuXHJcblxyXG4vLyBTdHJpbmcgVXRpbGl0eSBGdW5jdGlvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIFN0cmluZyBSZXBsYWNlIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcclxuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VhcmNoKTtcclxuXHJcbiAgQGlmICRpbmRleCB7XHJcbiAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRzdHJpbmc7XHJcbn1cclxuXHJcbi8vIFN0cmluZyBTcGxpdCBGdW5jdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbkBmdW5jdGlvbiBzdHItc3BsaXQoJHN0cmluZywgJHNlcGFyYXRvcikge1xyXG4gIC8vIGVtcHR5IGFycmF5L2xpc3RcclxuICAkc3BsaXQtYXJyOiAoKTtcclxuICAvLyBmaXJzdCBpbmRleCBvZiBzZXBhcmF0b3IgaW4gc3RyaW5nXHJcbiAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XHJcbiAgLy8gbG9vcCB0aHJvdWdoIHN0cmluZ1xyXG4gIEB3aGlsZSAkaW5kZXggIT0gbnVsbCB7XHJcbiAgICAvLyBnZXQgdGhlIHN1YnN0cmluZyBmcm9tIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gdGhlIHNlcGFyYXRvclxyXG4gICAgJGl0ZW06IHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKTtcclxuICAgIC8vIHB1c2ggaXRlbSB0byBhcnJheVxyXG4gICAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRpdGVtKTtcclxuICAgIC8vIHJlbW92ZSBpdGVtIGFuZCBzZXBhcmF0b3IgZnJvbSBzdHJpbmdcclxuICAgICRzdHJpbmc6IHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyAxKTtcclxuICAgIC8vIGZpbmQgbmV3IGluZGV4IG9mIHNlcGFyYXRvclxyXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XHJcbiAgfVxyXG4gIC8vIGFkZCB0aGUgcmVtYWluaW5nIHN0cmluZyB0byBsaXN0ICh0aGUgbGFzdCBpdGVtKVxyXG4gICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkc3RyaW5nKTtcclxuXHJcbiAgQHJldHVybiAkc3BsaXQtYXJyO1xyXG59XHJcblxyXG5cclxuLy8gU3RyaW5nIEV4dHJhY3QgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiBzdHItZXh0cmFjdCgkc3RyaW5nLCAkc3RhcnQsICRlbmQpIHtcclxuICAkc3RhcnQtaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc3RhcnQpO1xyXG5cclxuICBAaWYgJHN0YXJ0LWluZGV4IHtcclxuICAgICRwb3N0OiBzdHItc2xpY2UoJHN0cmluZywgJHN0YXJ0LWluZGV4ICsgc3RyLWxlbmd0aCgkc3RhcnQpKTtcclxuICAgICRlbmQtaW5kZXg6IHN0ci1pbmRleCgkcG9zdCwgJGVuZCk7XHJcblxyXG4gICAgQGlmICRlbmQtaW5kZXgge1xyXG4gICAgICBAcmV0dXJuIHN0ci1zbGljZSgkcG9zdCwgMSwgJGVuZC1pbmRleCAtIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuLy8gU3RyaW5nIENvbnRhaW5zIEZ1bmN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gc3RyLWNvbnRhaW5zKCRzdHJpbmcsICRuZWVkbGUpIHtcclxuICBAaWYgKHR5cGUtb2YoJHN0cmluZykgPT0gc3RyaW5nKSB7XHJcbiAgICBAcmV0dXJuIHN0ci1pbmRleCgkc3RyaW5nLCAkbmVlZGxlKSAhPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuXHJcbi8vIFVSTCBFbmNvZGUgRnVuY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBmdW5jdGlvbiB1cmwtZW5jb2RlKCR2YWwpIHtcclxuICAkc3BhY2VzOiBzdHItcmVwbGFjZSgkdmFsLCBcIiBcIiwgXCIlMjBcIik7XHJcbiAgJGVuY29kZWQ6IHN0ci1yZXBsYWNlKCRzcGFjZXMsIFwiI1wiLCBcIiUyM1wiKTtcclxuICBAcmV0dXJuICRlbmNvZGVkO1xyXG59XHJcblxyXG5cclxuLy8gQWRkIFJvb3QgU2VsZWN0b3JcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQWRkcyBhIHJvb3Qgc2VsZWN0b3IgdXNpbmcgaG9zdC1jb250ZXh0IGJhc2VkIG9uIHRoZSBzZWxlY3RvciBwYXNzZWRcclxuLy9cclxuLy8gRXhhbXBsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdFwiKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pXHJcbi8vXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLmZpeGVkKVwiKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmZpeGVkKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLmZpeGVkXHJcbi8vXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVwiKVxyXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1oaWRlIDo6c2xvdHRlZChpb24tYmFkZ2UpXHJcbi8vXHJcbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiLnNoYWRvd1wiKVxyXG4vLyAtLT4gW2Rpcj1ydGxdIC5zaGFkb3dcclxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2hhZG93XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AZnVuY3Rpb24gYWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsICRhZGRIb3N0U2VsZWN0b3IpIHtcclxuICAkc2VsZWN0b3JzOiBzdHItc3BsaXQoJHJvb3QsIFwiLFwiKTtcclxuXHJcbiAgJGxpc3Q6ICgpO1xyXG5cclxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XHJcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QoIGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBhIGNsYXNzIG9uIHRoZSBob3N0XHJcbiAgICAvLyBlbGVtZW50IHNvIHdlIG5lZWQgdG8gY2hhbmdlIGhvdyB3ZSB0YXJnZXQgaXRcclxuICAgIEBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0KFwiKSB7XHJcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSk6aG9zdChcIik7XHJcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xyXG5cclxuICAgICAgJG5ldy1lbGVtZW50OiAoKTtcclxuICAgICAgJGVsZW1lbnRzOiBzdHItc3BsaXQoJHNlbGVjdG9yLCBcIiBcIik7XHJcblxyXG4gICAgICBAZWFjaCAkZWxlbWVudCBpbiAkZWxlbWVudHMge1xyXG4gICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiOmhvc3QoXCIpIHtcclxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogJGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCIpKVwiKSB7XHJcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIikpXCIsIFwiKVwiKTtcclxuICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpXCIsIFwiXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlZC1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2NvcGVkLWVsZW1lbnQsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcclxuXHJcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRzY29wZWQtZWxlbWVudCwgc3BhY2UpO1xyXG4gICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkZWxlbWVudCwgc3BhY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJG5ldy1lbGVtZW50LCBjb21tYSk7XHJcbiAgICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgOmhvc3QgaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGp1c3QgdGhlIGhvc3RcclxuICAgIC8vIGVsZW1lbnQgc28gd2UgY2FuIGNoYW5nZSBpdCB0byBsb29rIGZvciBob3N0LWNvbnRleHRcclxuICAgIH0gQGVsc2UgaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdFwiKSB7XHJcbiAgICAgICRzaGFkb3ctZWxlbWVudDogc3RyLXJlcGxhY2UoJHNlbGVjdG9yLCBcIjpob3N0XCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KVwiKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XHJcbiAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBkb2VzIG5vdCBjb250YWluIGhvc3QgYXQgYWxsIGl0IGlzIGVpdGhlciBhIHNoYWRvd1xyXG4gICAgICAvLyBvciBub3JtYWwgZWxlbWVudCBzbyBhcHBlbmQgYm90aCB0aGUgZGlyIGNoZWNrIGFuZCBob3N0LWNvbnRleHRcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIiN7JGFkZEhvc3RTZWxlY3Rvcn0gI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcclxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRsaXN0O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXHJcbiAqL1xyXG5cclxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxyXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XHJcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcclxuICAgIEByZXR1cm4gdmFyKC0taW9uLWNvbG9yLSN7JHZhcmlhdGlvbn0pO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHZXRzIHRoZSBzcGVjaWZpYyBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIHRoZSBuYW1lIGFuZCB2YXJpYXRpb24uIEFscGhhL3JnYiBhcmUgb3B0aW9uYWwuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEV4YW1wbGUgdXNhZ2U6XHJcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZilcclxuLy8gaW9uLWNvbG9yKHNlY29uZGFyeSwgY29udHJhc3QpID0+IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpXHJcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlLCAwLjUpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpLCAwLjUpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBpb24tY29sb3IoJG5hbWUsICR2YXJpYXRpb24sICRhbHBoYTogbnVsbCwgJHJnYjogbnVsbCkge1xyXG4gICR2YWx1ZXM6IG1hcC1nZXQoJGNvbG9ycywgJG5hbWUpO1xyXG4gICR2YWx1ZTogbWFwLWdldCgkdmFsdWVzLCAkdmFyaWF0aW9uKTtcclxuICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9LSN7JHZhcmlhdGlvbn07XHJcblxyXG4gIEBpZiAoJHZhcmlhdGlvbiA9PSBiYXNlKSB7XHJcbiAgICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9O1xyXG4gIH1cclxuXHJcbiAgQGlmICgkYWxwaGEpIHtcclxuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoI3skdmFyaWFibGV9LXJnYiwgJHZhbHVlKSwgJGFscGhhKTtcclxuICB9XHJcbiAgQGlmICgkcmdiKSB7XHJcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XHJcbiAgICAkdmFyaWFibGU6ICN7JHZhcmlhYmxlfS1yZ2I7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIHZhcigjeyR2YXJpYWJsZX0sICR2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlKCRjb2xvcikge1xyXG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50KCRjb2xvcikge1xyXG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcclxufVxyXG5cclxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjb2xvci10by1yZ2ItbGlzdCgkY29sb3IpIHtcclxuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHRyYWN0ZWQgZnJvbVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuQG1peGluIGlucHV0LWNvdmVyKCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xyXG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcclxuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBjb250ZW50OiBcIlwiO1xyXG5cclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4vLyBGb250IHNtb290aGluZ1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIGZvbnQtc21vb3RoaW5nKCkge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XHJcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XHJcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xyXG5cclxuICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcclxufVxyXG5cclxuXHJcbi8vIEJyZWFrcG9pbnQgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cclxuLy9cclxuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxyXG4vL1xyXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXHJcbi8vXHJcbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA1NzZweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcblxyXG4gIEByZXR1cm4gaWYoJG5hbWUgIT0gaW5kZXgtdG8ta2V5KCRicmVha3BvaW50cywgMSksICRtaW4sIG51bGwpO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXHJcbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCItc21cIlxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XHJcbiAgQGlmICRtaW4ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxyXG4vLyAgICBtZFxyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXHJcbi8vICAgIG1kXHJcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcclxuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcclxuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2ZcclxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxyXG4vL1xyXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XHJcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cclxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA3NjcuOThweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXHJcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXHJcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gIEBpZiAkbWF4IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcclxuLy9cclxuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xyXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtdWx0aS1kaXIoKSB7XHJcbiAgQGNvbnRlbnQ7XHJcblxyXG4gIC8vICRyb290OiAjeyZ9O1xyXG4gIC8vIEBhdC1yb290IFtkaXJdIHtcclxuICAvLyAgICN7JHJvb3R9IHtcclxuICAvLyAgICAgQGNvbnRlbnQ7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcblxyXG5AbWl4aW4gcnRsKCkge1xyXG4gICRyb290OiAjeyZ9O1xyXG5cclxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbHRyKCkge1xyXG4gIEBjb250ZW50O1xyXG59XHJcblxyXG5cclxuLy8gU1ZHIEJhY2tncm91bmQgSW1hZ2UgTWl4aW5cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gc3ZnLWJhY2tncm91bmQtaW1hZ2UoJHN2ZywgJGZsaXAtcnRsOiBmYWxzZSkge1xyXG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XHJcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcclxuXHJcbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XHJcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcclxuXHJcbiAgICBAaW5jbHVkZSBsdHIgKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgQGlmICRzdGFydCA9PSAwIGFuZCAkZW5kID09IDAge1xyXG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XHJcblxyXG4gIH0gQGVsc2Uge1xyXG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XHJcblxyXG4gICAgQGF0LXJvb3Qge1xyXG4gICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xyXG4gICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xyXG4gICAgICAgICAgICAjeyRwcm9wfS1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xyXG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XHJcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcclxuICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xyXG4gICN7JHByb3B9LXRvcDogJHRvcDtcclxuICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgQGluY2x1ZGUgcHJvcGVydHkobWFyZ2luLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xyXG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICByaWdodDogdW5zZXQ7XHJcblxyXG4gICAgICBsZWZ0OiAkZW5kO1xyXG4gICAgICByaWdodDogJHN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xyXG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcclxuICB0b3A6ICR0b3A7XHJcbiAgYm90dG9tOiAkYm90dG9tO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xyXG4gIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXHJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xyXG4gICRvdGhlci1kaXI6IG51bGw7XHJcblxyXG4gIEBpZiAkZGlyID09IGx0ciB7XHJcbiAgICAkb3RoZXItZGlyOiBydGw7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAkb3RoZXItZGlyOiBsdHI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICBkaXJlY3Rpb246ICRkaXI7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxyXG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcclxuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRzaWRlID09IGVuZCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xyXG4gIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCBvciAkaG9yaXpvbnRhbCA9PSBlbmQge1xyXG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xyXG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xyXG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IHtcclxuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xyXG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XHJcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLWx0ciAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR4LWF4aXMsICR5LWF4aXM6IG51bGwpIHtcclxuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcclxuICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xyXG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygxMDAlIC0gI3skeC1heGlzfSkgJHktYXhpcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdHJhbnNmb3JtcyAtIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRyYW5zZm9ybXNcclxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xyXG4gICRleHRyYTogbnVsbDtcclxuXHJcbiAgJHg6IG51bGw7XHJcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XHJcbiAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XHJcblxyXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xyXG4gICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XHJcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcclxuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcclxuXHJcbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XHJcblxyXG4gICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XHJcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcclxuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xyXG5cclxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xyXG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xyXG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGlmICR4ID09ICcwJyBvciAkeCA9PSBudWxsIHtcclxuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1MgZnJvbSBkaWZmZXJlbnQgY29tcG9uZW50c1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4dHJhY3RlZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5taXhpbnMuc2Nzc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcclxuICovXHJcblxyXG4vLyBSZXNwb25zaXZlIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuQG1peGluIG1ha2UtZ3JpZC13aWR0aHMoJHdpZHRoczogJGdyaWQtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XHJcbiAgICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XHJcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gSXRlbSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBpdGVtLXB1c2gtc3ZnLXVybCgkZmlsbCkge1xyXG4gICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xyXG5cclxuICBAaW5jbHVkZSBzdmctYmFja2dyb3VuZC1pbWFnZSgkaXRlbS1kZXRhaWwtcHVzaC1zdmcsIHRydWUpO1xyXG59XHJcbiIsIkB1c2UgXCJzYXNzOm1hdGhcIiBhcyBtYXRoO1xyXG5cclxuLyoqXHJcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cclxuICovXHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cclxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgNi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDQ4JSkge1xyXG4gICAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudCk7XHJcbn1cclxuXHJcbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXHJcbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIC0xMC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50LXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogODAlKSB7XHJcbiAgICBAcmV0dXJuIG1peCgjZmZmLCAkY29sb3IsICRwZXJjZW50KTtcclxufVxyXG5cclxuLy8gSW9uaWMgQ29sb3JzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxyXG4vLyBjb2xvcnMgbWFwXHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMsICR0aGVtZSkge1xyXG4gICAgJGNvbG9yLXRoZW1lczogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XHJcbiAgICAkYmFzZTogbWFwLWdldCgkY29sb3ItdGhlbWVzLCAkdGhlbWUpO1xyXG5cclxuICAgIEBpZiAkdGhlbWUgPT0gJ2RhcmsnIHtcclxuICAgICAgICAkYmFzZTogbWl4KG1hcC1nZXQoJGNvbG9yLXRoZW1lcywgJ2xpZ2h0JyksIHdoaXRlLCA4MCUpICFkZWZhdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSk7XHJcbn1cclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpIHtcclxuICAgICRjb250cmFzdDogZ2V0X2NvbnRyYXN0X2NvbG9yKCRiYXNlKTtcclxuICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGJhc2UpO1xyXG4gICAgJHRpbnQ6IGdldC1jb2xvci10aW50LXBlcmNlbnQoJGJhc2UpO1xyXG5cclxuICAgIC0tI3skY29sb3ItbmFtZX06ICN7JGJhc2V9O1xyXG4gICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xyXG4gICAgLS0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuICAgIC0tI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuXHJcbiAgICAvLyBJbnRlcm5hbCBpb25pYyB1c2Ugb25seS5cclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9OiB2YXIoLS0jeyRjb2xvci1uYW1lfSk7XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xyXG5cclxuICAgIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29yZS1mb2N1cygpIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgMXB4IHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcclxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHByb3BlcnRpZXM6IGFsbCwgJGR1cmF0aW9uOiA1MDBtcywgJHRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQpIHtcclxuICAgICR0cmFuc2l0aW9uczogKCk7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAkdHJhbnNpdGlvbnM6IGFwcGVuZCgkdHJhbnNpdGlvbnMsICRwcm9wZXJ0eSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiwgY29tbWEpO1xyXG4gICAgfVxyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xyXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xyXG59XHJcblxyXG5AbWl4aW4gc3Itb25seSgpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYW1lIGFzIGl0ZW0tcHVzaC1zdmctdXJsIGJ1dCBhZG1pdHMgZmxpcC1ydGxcclxuICovXHJcbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRmaWxsOiA2MjYyNjIsICRmbGlwLXJ0bDogZmFsc2UpIHtcclxuICAgICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xyXG5cclxuICAgIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgJGZsaXAtcnRsKTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCAkcHggJHR5cGUgJGNvbG9yLCBudWxsKTtcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgbnVsbCwgJHB4ICR0eXBlICRjb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skcHh9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcclxuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcclxuXHJcbiAgICBAaWYgKCRlbmQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1lbmQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG5cclxuICAgIEBpZiAoJGVuZCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XHJcbiAgICB9XHJcbiAgICBAaWYgKCRzdGFydCkge1xyXG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcclxuXHJcbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1lbmQoJHN0YXJ0LCAkZW5kKSB7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcclxuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBvc2l0aW9uKCR0b3AsICRzYWZlLWFyZWEtZW5kLCAkYm90dG9tLCAkc2FmZS1hcmVhLXN0YXJ0KTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkYXJrbW9kZSgpIHtcclxuICAgICRyb290OiAjeyZ9O1xyXG5cclxuICAgIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiaHRtbC5kYXJrXCIpfSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBob3Jpem9udGFsX3Njcm9sbF9pdGVtKCR3aWR0aCwgJG1pbi13aWR0aCwgJG1heC13aWR0aCkge1xyXG4gICAgZmxleDogMCAwICR3aWR0aDtcclxuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcclxuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XHJcbiAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSAtIHZhcigtLWhvcml6b250YWwtbWFyZ2luKSk7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIHZhcigtLWhvcml6b250YWwtbWFyZ2luKTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENvbG9yIG1peGlucy5cclxuQGZ1bmN0aW9uIGdldF9icmlnaHRuZXNzKCRjb2xvcikge1xyXG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUgYmV0dGVyIGNvbG9yIGNvbnRyYXN0IHVzaW5nIFdDQUcgYWxnb3J5dGhtLlxyXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xyXG4gICAgJGx1bWlhbmNlOiBsdW1pbmFuY2UoJGNvbG9yKTtcclxuXHJcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAxLlxyXG4gICAgJHdoaXRlQ29udHJhc3Q6ICgkbHVtaWFuY2UgKyAwLjA1KSAvICgxICsgMC4wNSk7XHJcbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAwLlxyXG4gICAgJGJsYWNrQ29udHJhc3Q6ICgwLjA1KSAvICgkbHVtaWFuY2UgKyAwLjA1KTtcclxuXHJcbiAgICBAcmV0dXJuIGlmKCR3aGl0ZUNvbnRyYXN0IDwgJGJsYWNrQ29udHJhc3QsIHdoaXRlLCBibGFjayk7XHJcbn1cclxuXHJcbi8vIENvbG9yIGNvbnRyYXN0IHVzaW5nIHlpcSBhcHJveGltYXRpb24gd2l0aCAxNTAgdGhyZXNob2xkLlxyXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yX3lpcSgkY29sb3IsICRkYXJrOiBibGFjaywgJGxpZ2h0OiB3aGl0ZSkge1xyXG4gICAgJHI6IHJlZCgkY29sb3IpO1xyXG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XHJcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xyXG5cclxuICAgICR5aXE6ICgoJHIgKiAyOTkpICsgKCRnICogNTg3KSArICgkYiAqIDExNCkpIC8gMTAwMDtcclxuXHJcbiAgICBAcmV0dXJuIGlmKCR5aXEgPj0gMTI4LCAkZGFyaywgJGxpZ2h0KTtcclxufVxyXG5cclxuLy8gV0NBRyBjb250cmFzdCBhbGdvcml0aG1cclxuQGZ1bmN0aW9uIGNoZWNrLWNvbnRyYXN0KCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xyXG4gICAgJGZvcmVncm91bmRMdW1pYW5jZTogbHVtaW5hbmNlKCRmb3JlZ3JvdW5kKTtcclxuICAgICRiYWNrZ3JvdW5kTHVtaW5hbmNlOiBsdW1pbmFuY2UoJGJhY2tncm91bmQpO1xyXG5cclxuICAgIEBpZiAoJGJhY2tncm91bmRMdW1pbmFuY2UgPCAkZm9yZWdyb3VuZEx1bWlhbmNlKSB7XHJcbiAgICAgICAgQHJldHVybiAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KSAvICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSk7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAcmV0dXJuICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSkgLyAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KTtcclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIGx1bWluYW5jZSgkY29sb3IpIHtcclxuICAgICRyOiByZWQoJGNvbG9yKTtcclxuICAgICRnOiBncmVlbigkY29sb3IpO1xyXG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcclxuXHJcbiAgICAkcjogY29tcG9uZW50LWx1bWluYW5jZSgkcik7XHJcbiAgICAkZzogY29tcG9uZW50LWx1bWluYW5jZSgkZyk7XHJcbiAgICAkYjogY29tcG9uZW50LWx1bWluYW5jZSgkYik7XHJcblxyXG4gICAgQHJldHVybiAkciAqIDAuMjEyNiArICRnICogMC43MTUyICsgJGIgKiAwLjA3MjI7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBjb21wb25lbnQtbHVtaW5hbmNlKCR2YWx1ZSkge1xyXG4gICAgJHZhbHVlOiAkdmFsdWUgLyAyNTU7XHJcblxyXG4gICAgQGlmICgkdmFsdWUgPD0gMC4wMzkyOCkge1xyXG4gICAgICAgIEByZXR1cm4gJHZhbHVlIC8gMTIuOTI7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAcmV0dXJuIG1hdGgucG93KCgkdmFsdWUgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxyXG4gKi9cclxuIiwiLypcclxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXHJcbiAqL1xyXG5cclxuJHdoaXRlOiAgICAgICAjZmZmZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICAgICNmOGY5ZmEgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogICAgI2U5ZWNlZiAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAgICAjZGVlMmU2ICFkZWZhdWx0OyAvLyBTdHJva2VcclxuJGdyYXktNDAwOiAgICAjY2VkNGRhICFkZWZhdWx0O1xyXG4kZ3JheS01MDA6ICAgICM4Zjk1OWUgIWRlZmF1bHQ7IC8vIFN0cm9rZSBvbiBpbnB1dHNcclxuJGdyYXktNjAwOiAgICAjNmE3MzdiICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICAgICM0OTUwNTcgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogICAgIzM0M2E0MCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAgICAjMWQyMTI1ICFkZWZhdWx0OyAvLyBDb3B5IHRleHRcclxuJGJsYWNrOiAgICAgICAjMDAwMDAwICFkZWZhdWx0OyAvLyBBdm9pZCB1c2FnZVxyXG5cclxuJGJsdWU6ICAgICAgICAjMGY2Y2JmICFkZWZhdWx0O1xyXG4kY3lhbjogICAgICAgICMwMDgxOTYgIWRlZmF1bHQ7IC8vIE5vdCB1c2VkLlxyXG4kZ3JlZW46ICAgICAgICMzNTdhMzIgIWRlZmF1bHQ7XHJcbiRyZWQ6ICAgICAgICAgI2NhMzEyMCAhZGVmYXVsdDtcclxuJHllbGxvdzogICAgICAjZjBhZDRlICFkZWZhdWx0O1xyXG5cclxuJGJyYW5kLWNvbG9yOiAjZmY3NTE4ICFkZWZhdWx0O1xyXG5cclxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLWRhcms6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kYmFja2dyb3VuZC1jb2xvci1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3IpICFkZWZhdWx0O1xyXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAgICAgJGdyYXktOTAwICFkZWZhdWx0OyAvLyAjMWExYTFhXHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRwcmltYXJ5OiAgICAkYnJhbmQtY29sb3IgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAkcmVkICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcclxuJHN1Y2Nlc3M6ICAgICRncmVlbiAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICRibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQ6ICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xyXG4kbWVkaXVtOiAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xyXG5cclxuJGNvbG9yczogIChcclxuICAgIHByaW1hcnk6IChsaWdodDogJHByaW1hcnksIGRhcms6ICRwcmltYXJ5KSxcclxuICAgIHNlY29uZGFyeTogKGxpZ2h0OiAkc2Vjb25kYXJ5LCBkYXJrOiAkZ3JheS03MDApLFxyXG4gICAgc3VjY2VzczogKGxpZ2h0OiAkc3VjY2VzcyksXHJcbiAgICB3YXJuaW5nOiAobGlnaHQ6ICR3YXJuaW5nKSxcclxuICAgIGRhbmdlcjogIChsaWdodDogJGRhbmdlciksXHJcbiAgICBpbmZvOiAobGlnaHQ6ICRpbmZvKSxcclxuICAgIGxpZ2h0OiAobGlnaHQ6ICRsaWdodCwgZGFyazogJGRhcmspLFxyXG4gICAgbWVkaXVtOiAobGlnaHQ6ICRtZWRpdW0sIGRhcms6ICRncmF5LTIwMCksXHJcbiAgICBkYXJrOiAobGlnaHQ6ICRkYXJrLCBkYXJrOiAkbGlnaHQpLFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLyoqXHJcbiAqIExheW91dCBCcmVha3BvaW50c1xyXG4gKlxyXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcclxuICovXHJcblxyXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcclxuJHNjcmVlbi1icmVha3BvaW50czogKFxyXG4gICAgeHM6IDBweCxcclxuICAgIHNtOiA1NzZweCxcclxuICAgIG1kOiA3NjhweCxcclxuICAgIGxnOiA5OTJweCxcclxuICAgIHRhYmxldDogOTkycHgsXHJcbiAgICB4bDogMTIwMHB4XHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZDogIzgxZWNlYywgIzc0YjlmZiwgI2EyOWJmZSwgI2RmZTZlOSwgIzAwYjg5NCwgIzA5ODRlMywgI2IyYmVjMywgI2ZkY2I2ZSwgI2ZkNzlhOCwgIzZjNWNlNyAhZGVmYXVsdDtcclxuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xyXG4kY29yZS10ZXh0LWhpZ2h0bGlnaHQtYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWRhc2hib2FyZC1sb2dvOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtYWx3YXlzLXNob3ctbWFpbi1tZW51OiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kY29yZS1oaWRlLWNvdXJzZWltYWdlLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1zZWN0aW9uLXNlbGVjdG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLXRodW1iLW9uLWNhcmRzLWJhY2tncm91bmQ6IG51bGwgIWRlZmF1bHQ7XHJcbiRjb3JlLWNvdXJzZS1oaWRlLXByb2dyZXNzLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbG9naW4gcGFnZS5cclxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvcjogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3ItZGFyazogJHRleHQtY29sb3ItZGFyayAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLW5lZWQtaGVscDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtcXJjb2RlOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLiAoZGVwcmVjYXRlZCBvbiA0LjApXHJcbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdXNlciBwYWdlLlxyXG4kY29yZS11c2VyLWhpZGUtc2l0ZWluZm86ICRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbyAhZGVmYXVsdDtcclxuJGNvcmUtdXNlci1oaWRlLXNpdGVuYW1lOiAkY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWUgIWRlZmF1bHQ7XHJcbiRjb3JlLXVzZXItaGlkZS1zaXRldXJsOiAkY29yZS1tb3JlLWhpZGUtc2l0ZXVybCAhZGVmYXVsdDtcclxuXHJcbi8vIEFjdGl2aXR5IGljb24gYmFja2dyb3VuZCBjb2xvcnMuXHJcbiRhY3Rpdml0eS1pY29uLWNvbG9yczogKFxyXG4gICAgYWRtaW5pc3RyYXRpb246ICM1ZDYzZjYsXHJcbiAgICBhc3Nlc3NtZW50OiAjZWI2NmEyLFxyXG4gICAgY29sbGFib3JhdGlvbjogI2Y3NjM0ZCxcclxuICAgIGNvbW11bmljYXRpb246ICMxMWE2NzYsXHJcbiAgICBjb250ZW50OiAjMzk5YmUyLFxyXG4gICAgaW50ZXJmYWNlOiAjYTM3OGZmXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY2F0ZWdvcnk6ICM4ZTI0YWEgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jb3Vyc2U6ICRyZWQgIWRlZmF1bHQ7XHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1ncm91cDogJHllbGxvdyAhZGVmYXVsdDtcclxuJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXVzZXI6ICRibHVlICFkZWZhdWx0O1xyXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktc2l0ZTogJGdyZWVuICFkZWZhdWx0O1xyXG5cclxuLy8gQ2FsZW5kYXIgZXZlbnQgY2F0ZWdvcnkgYmFja2dyb3VuZCBjb2xvcnMuXHJcbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jb2xvcnM6IChcclxuICAgIGNhdGVnb3J5OiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY2F0ZWdvcnksXHJcbiAgICBjb3Vyc2U6ICRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jb3Vyc2UsXHJcbiAgICBncm91cDogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LWdyb3VwLFxyXG4gICAgdXNlcjogJGNhbGVuZGFyLWV2ZW50LWNhdGVnb3J5LXVzZXIsXHJcbiAgICBzaXRlOiAkY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktc2l0ZSxcclxuKSAhZGVmYXVsdDtcclxuIiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICAtLWxpc3QtaXRlbS1tYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uaXRlbS1pbnB1dDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jb3JlLWxvZ2luLXNpdGUtY29ubmVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbn1cclxuXHJcbi5pdGVtIGlvbi10aHVtYm5haWwge1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCB2YXIoLS1ncmF5LTIwMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGUzZCgtNTAlLDAsMCkpO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pIHtcclxuXHJcbiAgICAuaXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1zaXRlLWxvZ28sXHJcbi5jb3JlLWxvZ2luLXNpdGUtbGlzdCxcclxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWZvdW5kIHtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcclxuICAgIG1heC1oZWlnaHQ6IDk5OTlweDtcclxuXHJcbiAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWZvdW5kLmRpbW1lZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3JlLWxvZ2luLXNpdGUtbm9saXN0LWxvYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0uY29yZS1sb2dpbi1zaXRlLWxpc3QtdGl0bGUge1xyXG4gICAgaW9uLWxhYmVsLCBpb24tbGFiZWwgaDIuaXRlbS1oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgICBpb24tY29udGVudCAuY29yZS1sb2dpbi1zaXRlLWxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgICAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1lbnRlcmVkLXNpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xyXG5cclxuICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1kZWZhdWx0LWljb24ge1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.ts":
/*!****************************************************!*\
  !*** ./src/core/features/login/pages/site/site.ts ***!
  \****************************************************/
/*! exports provided: CoreLoginSitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePage", function() { return CoreLoginSitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/url */ "./src/core/singletons/url.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @features/login/components/site-help/site-help */ "./src/core/features/login/components/site-help/site-help.ts");
/* harmony import */ var _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @features/login/components/site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/urlschemes */ "./src/core/services/urlschemes.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _classes_errors_siteerror__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @classes/errors/siteerror */ "./src/core/classes/errors/siteerror.ts");
/* harmony import */ var _features_user_services_support__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @features/user/services/support */ "./src/core/features/user/services/support.ts");
/* harmony import */ var _components_error_info_error_info__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/error-info/error-info */ "./src/core/components/error-info/error-info.ts");
/* harmony import */ var _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @features/user/classes/support/guest-support-config */ "./src/core/features/user/classes/support/guest-support-config.ts");
/* harmony import */ var _classes_errors_loginerror__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @classes/errors/loginerror */ "./src/core/classes/errors/loginerror.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
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
 * Site (url) chooser when adding a new site.
 */
let CoreLoginSitePage = class CoreLoginSitePage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.siteSelector = 'sitefinder';
        this.showKeyboard = false;
        this.filter = '';
        this.sites = [];
        this.hasSites = false;
        this.loadingSites = false;
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url = '';
            this.siteSelector = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.multisitesdisplay;
            const siteFinderSettings = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.sitefindersettings || {};
            this.siteFinderSettings = Object.assign({ displaysitename: true, displayimage: true, displayalias: true, displaycity: true, displaycountry: true, displayurl: true }, siteFinderSettings);
            // Load fixed sites if they're set.
            const sites = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].getAvailableSites();
            if (sites.length) {
                url = yield this.initSiteSelector();
            }
            else if (_core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.enableonboarding && !_services_platform__WEBPACK_IMPORTED_MODULE_26__["CorePlatform"].isIOS()) {
                this.initOnboarding();
            }
            this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].displayQRInSiteScreen();
            this.siteForm = this.formBuilder.group({
                siteUrl: [url, this.moodleUrlValidator()],
            });
            this.searchFunction = _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].debounce((search) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                search = search.trim();
                if (search.length >= 3) {
                    // Update the sites list.
                    const sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].findSites(search);
                    // Add UI tweaks.
                    this.sites = this.extendCoreLoginSiteInfo(sites);
                    this.hasSites = !!this.sites.length;
                }
                else {
                    // Not reseting the array to allow animation to be displayed.
                    this.hasSites = false;
                }
                this.loadingSites = false;
            }), 1000);
            this.showKeyboard = !!_services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteBooleanParam('showKeyboard');
        });
    }
    /**
     * Initialize the site selector.
     *
     * @returns URL of the first site.
     */
    initSiteSelector() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const availableSites = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].getAvailableSites();
            this.fixedSites = this.extendCoreLoginSiteInfo(availableSites);
            this.siteSelector = 'list'; // In case it's not defined
            // Do not show images if none are set.
            if (!this.fixedSites.some((site) => !!site.imageurl)) {
                this.siteFinderSettings.displayimage = false;
            }
            this.filteredSites = this.fixedSites;
            return this.fixedSites[0].url;
        });
    }
    /**
     * Initialize and show onboarding if needed.
     *
     * @returns Promise resolved when done.
     */
    initOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onboardingDone = yield _services_config__WEBPACK_IMPORTED_MODULE_5__["CoreConfig"].get(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelperProvider"].ONBOARDING_DONE, false);
            if (!onboardingDone) {
                // Check onboarding.
                this.showOnboarding();
            }
        });
    }
    /**
     * Extend info of Login Site Info to get UI tweaks.
     *
     * @param sites Sites list.
     * @returns Sites list with extended info.
     */
    extendCoreLoginSiteInfo(sites) {
        return sites.map((site) => {
            site.noProtocolUrl = this.siteFinderSettings.displayurl && site.url ? _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(site.url) : '';
            const name = this.siteFinderSettings.displaysitename ? site.name : '';
            const alias = this.siteFinderSettings.displayalias && site.alias ? site.alias : '';
            // Set title with parenthesis if both name and alias are present.
            site.title = name && alias ? name + ' (' + alias + ')' : name + alias;
            const country = this.siteFinderSettings.displaycountry && site.countrycode ?
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].getCountryName(site.countrycode) : '';
            const city = this.siteFinderSettings.displaycity && site.city ?
                site.city : '';
            // Separate location with hiphen if both country and city are present.
            site.location = city && country ? city + ' - ' + country : city + country;
            if (_services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].hasDefaultImage(site) && this.siteFinderSettings.defaultimageurl) {
                site.imageurl = this.siteFinderSettings.defaultimageurl;
            }
            return site;
        });
    }
    /**
     * Validate Url.
     *
     * @returns {ValidatorFn} Validation results.
     */
    moodleUrlValidator() {
        return (control) => {
            const value = control.value.trim();
            let valid = value.length >= 3 && _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].isValidMoodleUrl(value);
            if (!valid) {
                const demo = !!_services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getDemoSiteData(value);
                if (demo) {
                    valid = true;
                }
            }
            return valid ? null : { siteUrl: { value: control.value } };
        };
    }
    /**
     * Show a help modal.
     */
    showHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openModal({
                component: _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__["CoreLoginSiteHelpComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Show an onboarding modal.
     */
    showOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openModal({
                component: _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__["CoreLoginSiteOnboardingComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     * @param foundSite The site clicked, if any, from the found sites list.
     * @returns Promise resolved when done.
     */
    connect(e, url, foundSite) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].closeKeyboard();
            if (!url) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.login.siteurlrequired', true);
                return;
            }
            if (!_services_network__WEBPACK_IMPORTED_MODULE_4__["CoreNetwork"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            url = url.trim();
            if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
                this.showLoginIssue(null, new _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.errorexampleurl')));
                return;
            }
            const siteData = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getDemoSiteData(url);
            if (siteData) {
                // It's a demo site.
                yield this.loginDemoSite(siteData);
            }
            else {
                // Not a demo site.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
                let checkResult;
                try {
                    checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(url);
                }
                catch (error) {
                    // Attempt guessing the domain if the initial check failed
                    const domain = _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].guessMoodleDomain(url);
                    if (domain && domain != url) {
                        try {
                            checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(domain);
                        }
                        catch (secondError) {
                            // Try to use the first error.
                            modal.dismiss();
                            return this.showLoginIssue(url, error || secondError);
                        }
                    }
                    else {
                        modal.dismiss();
                        return this.showLoginIssue(url, error);
                    }
                }
                yield this.login(checkResult, foundSite);
                modal.dismiss();
            }
        });
    }
    /**
     * Authenticate in a demo site.
     *
     * @param siteData Site data.
     * @returns Promise resolved when done.
     */
    loginDemoSite(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getUserToken(siteData.url, siteData.username, siteData.password);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].newSite(data.siteUrl, data.token, data.privateToken);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigateToSiteHome();
                return;
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/sites', { reset: true });
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     * @param foundSite The site clicked, if any, from the found sites list.
     *
     * @returns Promise resolved after logging in.
     */
    login(response, foundSite) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkApplication(response.config);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // SSO. User needs to authenticate in a browser.
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, (_a = response.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                }
                else {
                    const pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                    if (foundSite && !this.fixedSites) {
                        pageParams['siteName'] = foundSite.name;
                        pageParams['logoUrl'] = foundSite.imageurl;
                    }
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: pageParams,
                    });
                }
            }
            catch (_b) {
                // Ignore errors.
            }
        });
    }
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    showLoginIssue(url, error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let errorMessage = _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].getErrorMessage(error);
            let siteExists = false;
            let supportConfig = undefined;
            let errorTitle;
            let errorDetails;
            let errorCode;
            if (error instanceof _classes_errors_siteerror__WEBPACK_IMPORTED_MODULE_21__["CoreSiteError"]) {
                supportConfig = error.supportConfig;
                errorDetails = error.errorDetails;
                errorCode = error.errorcode;
                siteExists = supportConfig instanceof _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_24__["CoreUserGuestSupportConfig"];
            }
            if (error instanceof _classes_errors_loginerror__WEBPACK_IMPORTED_MODULE_25__["CoreLoginError"]) {
                errorTitle = error.title;
            }
            if (errorDetails) {
                errorMessage = `<p>${errorMessage}</p><div class="core-error-info-container"></div>`;
            }
            const alertSupportConfig = supportConfig;
            const buttons = [
                {
                    text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.tryagain'),
                    role: 'cancel',
                },
                (alertSupportConfig === null || alertSupportConfig === void 0 ? void 0 : alertSupportConfig.canContactSupport()) ? {
                    text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.contactsupport'),
                    handler: () => _features_user_services_support__WEBPACK_IMPORTED_MODULE_22__["CoreUserSupport"].contact({
                        supportConfig: alertSupportConfig,
                        subject: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnect'),
                        message: `Error: ${errorCode}\n\n${errorDetails}`,
                    }),
                }
                    : (!siteExists
                        ? {
                            text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.needhelp'),
                            cssClass: 'core-login-need-help',
                            handler: () => this.showHelp(),
                        }
                        : null),
            ].filter(button => !!button);
            const alertElement = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showAlertWithOptions({
                header: errorTitle !== null && errorTitle !== void 0 ? errorTitle : _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnect'),
                message: errorMessage !== null && errorMessage !== void 0 ? errorMessage : _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.sitenotfoundhelp'),
                buttons: buttons,
            });
            if (errorDetails) {
                const containerElement = alertElement.querySelector('.core-error-info-container');
                if (containerElement) {
                    containerElement.innerHTML = _components_error_info_error_info__WEBPACK_IMPORTED_MODULE_23__["CoreErrorInfoComponent"].render(errorDetails, errorCode);
                }
            }
        });
    }
    /**
     * The filter has changed.
     *
     * @param event Received Event.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterChanged(event) {
        var _a;
        const newValue = (_a = event === null || event === void 0 ? void 0 : event.target.value) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter((site) => site.title.toLowerCase().indexOf(newValue) > -1 || site.noProtocolUrl.toLowerCase().indexOf(newValue) > -1 ||
                site.location.toLowerCase().indexOf(newValue) > -1);
        }
    }
    /**
     * Find a site on the backend.
     *
     * @param e Event.
     * @param search Text to search.
     */
    searchSite(e, search) {
        this.loadingSites = true;
        search = search.trim();
        if (this.siteForm.valid && search.length >= 3) {
            this.enteredSiteUrl = {
                url: search,
                name: 'connect',
                title: '',
                location: '',
                noProtocolUrl: _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(search),
            };
        }
        else {
            this.enteredSiteUrl = undefined;
        }
        this.searchFunction(search.trim());
    }
    /**
     * Show instructions and scan QR code.
     *
     * @returns Promise resolved when done.
     */
    showInstructionsAndScanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].showScanQRInstructions();
                yield this.scanQR();
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Scan a QR code and put its text in the URL input.
     *
     * @returns Promise resolved when done.
     */
    scanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Scan for a QR code.
            const text = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].scanQR();
            if (!text) {
                return;
            }
            if (_services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].isCustomURL(text)) {
                try {
                    yield _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].handleCustomURL(text);
                }
                catch (error) {
                    if (error && error.data && error.data.isAuthenticationURL && error.data.siteUrl) {
                        // An error ocurred, but it's an authentication URL and we have the site URL.
                        this.treatErrorInAuthenticationCustomURL(text, error);
                    }
                    else {
                        _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
                    }
                }
                return;
            }
            // Not a custom URL scheme, check if it's a URL scheme to another app.
            const scheme = _services_utils_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrlUtils"].getUrlProtocol(text);
            if (scheme && scheme != 'http' && scheme != 'https') {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errorurlschemeinvalidscheme', { $a: text }));
                return;
            }
            const allowed = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSiteUrlAllowed(text);
            if (allowed) {
                // Put the text in the field (if present).
                this.siteForm.controls.siteUrl.setValue(text);
                this.connect(new Event('click'), text);
            }
            else {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.errorurlschemeinvalidsite', true);
            }
        });
    }
    /**
     * Treat an error while handling a custom URL meant to perform an authentication.
     * If the site doesn't use SSO, the user will be sent to the credentials screen.
     *
     * @param customURL Custom URL handled.
     * @param error Error data.
     * @returns Promise resolved when done.
     */
    treatErrorInAuthenticationCustomURL(customURL, error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteUrl = ((_a = error.data) === null || _a === void 0 ? void 0 : _a.siteUrl) || '';
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            // Set the site URL in the input.
            this.siteForm.controls.siteUrl.setValue(siteUrl);
            try {
                // Check if site uses SSO.
                const response = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(siteUrl);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkApplication(response.config);
                if (!_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // No SSO, go to credentials page.
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: {
                            siteUrl: response.siteUrl,
                            siteConfig: response.config,
                        },
                    });
                }
            }
            catch (_b) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
            // Now display the error.
            error.error = _services_utils_text__WEBPACK_IMPORTED_MODULE_19__["CoreTextUtils"].addTextToError(error.error, '<br><br>' + _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.youcanstillconnectwithcredentials'));
            _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
        });
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginSitePage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['siteFormEl',] }]
};
CoreLoginSitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-site',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./site.scss */ "./src/core/features/login/pages/site/site.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginSitePage);



/***/ }),

/***/ "./src/core/features/login/pages/sites/sites.ts":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/sites/sites.ts ***!
  \******************************************************/
/*! exports provided: CoreLoginSitesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitesPage", function() { return CoreLoginSitesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/filter/services/filter */ "./src/core/features/filter/services/filter.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
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
 * Page that displays a "splash screen" while the app is being initialized.
 */
let CoreLoginSitesPage = class CoreLoginSitesPage {
    constructor() {
        this.accountsList = {
            sameSite: [],
            otherSites: [],
            count: 0,
        };
        this.showDelete = false;
        this.loaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteBooleanParam('openAddSite')) {
                this.add();
                return;
            }
            this.accountsList = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].getAccountsList();
            this.loaded = true;
            if (this.accountsList.count == 0) {
                this.add();
            }
        });
    }
    /**
     * Go to the page to add a site.
     */
    add() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].goToAddSite(false, true);
    }
    /**
     * Delete a site.
     *
     * @param event Click event.
     * @param site Site to delete.
     * @returns Promise resolved when done.
     */
    deleteSite(event, site) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.stopPropagation();
            let siteName = site.siteName || '';
            siteName = yield _features_filter_services_filter__WEBPACK_IMPORTED_MODULE_6__["CoreFilter"].formatText(siteName, { clean: true, singleLine: true, filter: false }, [], site.id);
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showDeleteConfirm('core.login.confirmdeletesite', { sitename: siteName });
            }
            catch (error) {
                // User cancelled, stop.
                return;
            }
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].deleteAccountFromList(this.accountsList, site);
                this.showDelete = false;
                // If there are no sites left, go to add site.
                if (this.accountsList.count == 0) {
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].goToAddSite(true, true);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showErrorModalDefault(error, 'core.login.errordeletesite', true);
            }
        });
    }
    /**
     * Login in a site.
     *
     * @param event Click event.
     * @param siteId The site ID.
     * @returns Promise resolved when done.
     */
    login(event, siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showModalLoading();
            try {
                const loggedIn = yield _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].loadSite(siteId);
                if (loggedIn) {
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSiteHome();
                    return;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading site.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-core-login-sites',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sites.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/sites/sites.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_7__["CoreAnimations"].SLIDE_IN_OUT, _components_animations__WEBPACK_IMPORTED_MODULE_7__["CoreAnimations"].SHOW_HIDE],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../sitelist.scss */ "./src/core/features/login/sitelist.scss")).default]
    })
], CoreLoginSitesPage);



/***/ })

}]);
//# sourceMappingURL=login-lazy-module.js.map