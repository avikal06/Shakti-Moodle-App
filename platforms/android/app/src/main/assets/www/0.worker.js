/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@ngtools/webpack/src/index.js!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ngtools/webpack/src/index.js!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.worker.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.worker.ts ***!
  \*******************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features_fileuploader_utils_worker_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/fileuploader/utils/worker-messages */ "./src/core/features/fileuploader/utils/worker-messages.ts");
/* harmony import */ var mp3_mediarecorder_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mp3-mediarecorder/worker */ "./node_modules/mp3-mediarecorder/worker/index.js");
/* harmony import */ var mp3_mediarecorder_worker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mp3_mediarecorder_worker__WEBPACK_IMPORTED_MODULE_1__);
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
 * Handle worker message.
 *
 * @param event Worker message event.
 */
function onMessage(event) {
    if (!Object(_features_fileuploader_utils_worker_messages__WEBPACK_IMPORTED_MODULE_0__["isInitAudioEncoderMessage"])(event.data)) {
        return;
    }
    removeEventListener('message', onMessage);
    Object(mp3_mediarecorder_worker__WEBPACK_IMPORTED_MODULE_1__["initMp3MediaEncoder"])(event.data.config);
}
addEventListener('message', onMessage);


/***/ }),

/***/ "./node_modules/mp3-mediarecorder/worker/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mp3-mediarecorder/worker/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}const initMp3MediaEncoder = ({ vmsgWasmUrl }) => {
    // from vmsg
    // Must be in sync with emcc settings!
    const TOTAL_STACK = 5 * 1024 * 1024;
    const TOTAL_MEMORY = 128 * 1024 * 1024;
    const WASM_PAGE_SIZE = 64 * 1024;
    const ctx = self;
    const memory = new WebAssembly.Memory({
        initial: TOTAL_MEMORY / WASM_PAGE_SIZE,
        maximum: TOTAL_MEMORY / WASM_PAGE_SIZE
    });
    let dynamicTop = TOTAL_STACK;
    let imports = { env: {
            memory,
            sbrk: (increment) => {
                const oldDynamicTop = dynamicTop;
                dynamicTop += increment;
                return oldDynamicTop;
            },
            exit: () => ctx.postMessage({ type: 'ERROR', error: 'internal' }),
            pow: Math.pow,
            powf: Math.pow,
            exp: Math.exp,
            sqrtf: Math.sqrt,
            cos: Math.cos,
            log: Math.log,
            sin: Math.sin
        } };
    const vmsg = getWasmModule(vmsgWasmUrl, imports).then(wasm => wasm.instance.exports);
    let isRecording = false;
    let vmsgRef;
    let pcmLeft;
    function getWasmModuleFallback(url, imports) {
        return fetch(url)
            .then(response => response.arrayBuffer())
            .then(buffer => WebAssembly.instantiate(buffer, imports));
    }
    function getWasmModule(url, imports) {
        if (!WebAssembly.instantiateStreaming) {
            return getWasmModuleFallback(url, imports);
        }
        return WebAssembly.instantiateStreaming(fetch(url), imports).catch(() => getWasmModuleFallback(url, imports));
    }
    const onStartRecording = (config) => __awaiter(void 0, void 0, void 0, function* () {
        const vmsgInstance = yield vmsg;
        isRecording = true;
        vmsgRef = vmsgInstance.vmsg_init(config.sampleRate);
        if (!vmsgRef || !vmsgInstance) {
            throw new Error('init_failed');
        }
        const pcmLeftRef = new Uint32Array(memory.buffer, vmsgRef, 1)[0];
        pcmLeft = new Float32Array(memory.buffer, pcmLeftRef);
    });
    const onStopRecording = () => __awaiter(void 0, void 0, void 0, function* () {
        const vmsgInstance = yield vmsg;
        isRecording = false;
        if (vmsgInstance.vmsg_flush(vmsgRef) < 0) {
            throw new Error('flush_failed');
        }
        const mp3BytesRef = new Uint32Array(memory.buffer, vmsgRef + 4, 1)[0];
        const size = new Uint32Array(memory.buffer, vmsgRef + 8, 1)[0];
        const mp3Bytes = new Uint8Array(memory.buffer, mp3BytesRef, size);
        const blob = new Blob([mp3Bytes], { type: 'audio/mpeg' });
        vmsgInstance.vmsg_free(vmsgRef);
        return blob;
    });
    const onDataReceived = (data) => __awaiter(void 0, void 0, void 0, function* () {
        if (!isRecording) {
            return;
        }
        pcmLeft.set(data);
        const vmsgInstance = yield vmsg;
        const encodedBytesAmount = vmsgInstance.vmsg_encode(vmsgRef, data.length);
        if (encodedBytesAmount < 0) {
            throw new Error('encoding_failed');
        }
    });
    ctx.addEventListener('message', (event) => __awaiter(void 0, void 0, void 0, function* () {
        const message = event.data;
        try {
            switch (message.type) {
                case 'START_RECORDING': {
                    yield onStartRecording(message.config);
                    ctx.postMessage({ type: 'WORKER_RECORDING' });
                    break;
                }
                case 'DATA_AVAILABLE': {
                    yield onDataReceived(message.data);
                    break;
                }
                case 'STOP_RECORDING': {
                    const blob = yield onStopRecording();
                    ctx.postMessage({ type: 'BLOB_READY', blob });
                    break;
                }
            }
        }
        catch (err) {
            ctx.postMessage({ type: 'ERROR', error: err.message });
        }
    }));
};exports.initMp3MediaEncoder=initMp3MediaEncoder;

/***/ }),

/***/ "./src/core/features/fileuploader/utils/worker-messages.ts":
/*!*****************************************************************!*\
  !*** ./src/core/features/fileuploader/utils/worker-messages.ts ***!
  \*****************************************************************/
/*! exports provided: isInitAudioEncoderMessage, initAudioEncoderMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInitAudioEncoderMessage", function() { return isInitAudioEncoderMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAudioEncoderMessage", function() { return initAudioEncoderMessage; });
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
 * Check whether the given data is an init audio encoder message.
 *
 * @param message Message.
 * @returns Whether the data is an init audio encoder message.
 */
function isInitAudioEncoderMessage(message) {
    return typeof message === 'object'
        && message !== null
        && 'name' in message
        && message['name'] === 'init-audio-encoder';
}
/**
 * Create an init audio encoder message.
 *
 * @param config Audio encoder config.
 * @returns Message.
 */
function initAudioEncoderMessage(config) {
    return {
        name: 'init-audio-encoder',
        config,
    };
}


/***/ })

/******/ });
//# sourceMappingURL=0.worker.js.map