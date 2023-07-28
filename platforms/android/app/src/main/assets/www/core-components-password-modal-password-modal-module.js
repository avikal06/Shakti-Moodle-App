(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-components-password-modal-password-modal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/components/password-modal/password-modal.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/components/password-modal/password-modal.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>\r\n            <h1>{{ title | translate }}</h1>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"closeModal()\" [attr.aria-label]=\"'core.close' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-xmark\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <form (ngSubmit)=\"submitPassword($event)\" #passwordForm>\r\n        <div>\r\n            <ion-item>\r\n                <ion-label class=\"sr-only\">{{ placeholder | translate }}</ion-label>\r\n                <core-show-password name=\"password\">\r\n                    <ion-input class=\"ion-text-wrap core-ioninput-password\" name=\"password\" type=\"password\"\r\n                        placeholder=\"{{ placeholder | translate }}\" [(ngModel)]=\"password\" core-auto-focus [clearOnEdit]=\"false\">\r\n                    </ion-input>\r\n                </core-show-password>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"error\" class=\"ion-text-wrap ion-padding-top text-danger\">\r\n                <core-format-text [text]=\"error | translate\"></core-format-text>\r\n            </ion-item>\r\n        </div>\r\n        <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!password\">\r\n            {{ submit | translate }}\r\n        </ion-button>\r\n        <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\r\n        <input type=\"submit\" class=\"core-submit-hidden-enter\" />\r\n    </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/components/password-modal/password-modal.module.ts":
/*!*********************************************************************!*\
  !*** ./src/core/components/password-modal/password-modal.module.ts ***!
  \*********************************************************************/
/*! exports provided: CorePasswordModalComponent, CorePasswordModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorePasswordModalModule", function() { return CorePasswordModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _password_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-modal */ "./src/core/components/password-modal/password-modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CorePasswordModalComponent", function() { return _password_modal__WEBPACK_IMPORTED_MODULE_2__["CorePasswordModalComponent"]; });

/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
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





let CorePasswordModalModule = class CorePasswordModalModule {
};
CorePasswordModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _password_modal__WEBPACK_IMPORTED_MODULE_2__["CorePasswordModalComponent"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
    })
], CorePasswordModalModule);



/***/ }),

/***/ "./src/core/components/password-modal/password-modal.ts":
/*!**************************************************************!*\
  !*** ./src/core/components/password-modal/password-modal.ts ***!
  \**************************************************************/
/*! exports provided: CorePasswordModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorePasswordModalComponent", function() { return CorePasswordModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
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
 * Modal that asks the password.
 *
 * WARNING: This component is not loaded with components.module.ts.
 */
let CorePasswordModalComponent = class CorePasswordModalComponent {
    constructor() {
        this.title = 'core.login.password'; // Translatable string to be shown on modal title.
        this.placeholder = 'core.login.password'; // Translatable string to be shown on password input as placeholder.
        this.submit = 'core.submit'; // Translatable string to be shown on submit button.
        this.password = ''; // Previous entered password.
    }
    /**
     * Send the password back.
     *
     * @param e Event.
     */
    submitPassword(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _singletons_form__WEBPACK_IMPORTED_MODULE_3__["CoreForms"].triggerFormSubmittedEvent(this.formElement, false, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
            const response = yield this.validatePassword(this.password);
            if (response.validated === undefined) {
                _singletons__WEBPACK_IMPORTED_MODULE_4__["ModalController"].dismiss(response);
            }
            if (response.validated) {
                _singletons__WEBPACK_IMPORTED_MODULE_4__["ModalController"].dismiss(response);
            }
            this.error = response.error;
        });
    }
    /**
     * Validates the entered password if validator is available.
     *
     * @param password Entered password.
     * @returns Response of the modal.
     */
    validatePassword(password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = { password };
            if (!this.validator) {
                return response;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showModalLoading('core.loading', true);
            try {
                return yield this.validator(password);
            }
            catch (error) {
                response.validated = false;
                response.error = error;
            }
            finally {
                modal.dismiss();
            }
            return response;
        });
    }
    /**
     * Close modal.
     */
    closeModal() {
        _singletons_form__WEBPACK_IMPORTED_MODULE_3__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId());
        _singletons__WEBPACK_IMPORTED_MODULE_4__["ModalController"].dismiss();
    }
};
CorePasswordModalComponent.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['passwordForm',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    validator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
CorePasswordModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-password-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password-modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/components/password-modal/password-modal.html")).default,
    })
], CorePasswordModalComponent);



/***/ })

}]);
//# sourceMappingURL=core-components-password-modal-password-modal-module.js.map