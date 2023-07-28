/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"addons-filter-mediaplugin-utils-videojs":"addons-filter-mediaplugin-utils-videojs","addons-notes-notes-lazy-module":"addons-notes-notes-lazy-module","addons-privatefiles-privatefiles-lazy-module":"addons-privatefiles-privatefiles-lazy-module","addons-storagemanager-storagemanager-lazy-module":"addons-storagemanager-storagemanager-lazy-module","assign-lazy-module":"assign-lazy-module","badges-lazy-module":"badges-lazy-module","bigbluebuttonbn-lazy-module":"bigbluebuttonbn-lazy-module","book-lazy-module":"book-lazy-module","chart-lazy":"chart-lazy","chat-lazy-module":"chat-lazy-module","choice-lazy-module":"choice-lazy-module","common":"common","forum-discussion-lazy-module":"forum-discussion-lazy-module","forum-new-discussion-lazy-module":"forum-new-discussion-lazy-module","core-components-password-modal-password-modal-module":"core-components-password-modal-password-modal-module","course-summary-lazy-module":"course-summary-lazy-module","coursecompletion-lazy-module":"coursecompletion-lazy-module","courses-dashboard-lazy-module":"courses-dashboard-lazy-module","data-lazy-module":"data-lazy-module","default~addons-blog-blog-lazy-module~calendar-lazy-module~courses-lazy-module~courses-my-lazy-module~506398ce":"default~addons-blog-blog-lazy-module~calendar-lazy-module~courses-lazy-module~courses-my-lazy-module~506398ce","default~addons-blog-blog-lazy-module~calendar-lazy-module~courses-lazy-module~courses-my-lazy-module~da0f1169":"default~addons-blog-blog-lazy-module~calendar-lazy-module~courses-lazy-module~courses-my-lazy-module~da0f1169","addons-blog-blog-lazy-module":"addons-blog-blog-lazy-module","calendar-lazy-module":"calendar-lazy-module","courses-my-lazy-module":"courses-my-lazy-module","messages-lazy-module":"messages-lazy-module","notifications-lazy-module":"notifications-lazy-module","tag-lazy-module":"tag-lazy-module","courses-lazy-module":"courses-lazy-module","default~mainmenu-lazy-module~scorm-lazy-module":"default~mainmenu-lazy-module~scorm-lazy-module","mainmenu-lazy-module":"mainmenu-lazy-module","features-login-login-credentials-lazy-module":"features-login-login-credentials-lazy-module","features-login-login-reconnect-lazy-module":"features-login-login-reconnect-lazy-module","login-lazy-module":"login-lazy-module","default~competency-course-contents-lazy-module~competency-course-details-lazy-module":"default~competency-course-contents-lazy-module~competency-course-details-lazy-module","competency-course-contents-lazy-module":"competency-course-contents-lazy-module","default~competency-course-details-lazy-module~competency-learning-plans-lazy-module":"default~competency-course-details-lazy-module~competency-learning-plans-lazy-module","competency-learning-plans-lazy-module":"competency-learning-plans-lazy-module","competency-course-details-lazy-module":"competency-course-details-lazy-module","default~features-user-user-course-lazy-module~grades-course-participants-lazy-module":"default~features-user-user-course-lazy-module~grades-course-participants-lazy-module","features-user-user-course-lazy-module":"features-user-user-course-lazy-module","grades-course-participants-lazy-module":"grades-course-participants-lazy-module","default~grades-course-lazy-module~grades-courses-lazy-module":"default~grades-course-lazy-module~grades-courses-lazy-module","grades-course-lazy-module":"grades-course-lazy-module","grades-courses-lazy-module":"grades-courses-lazy-module","scorm-lazy-module":"scorm-lazy-module","features-comments-comments-lazy-module":"features-comments-comments-lazy-module","features-course-course-contents-lazy-module":"features-course-course-contents-lazy-module","features-fileuploader-components-audio-recorder-audio-recorder-module":"features-fileuploader-components-audio-recorder-audio-recorder-module","features-user-user-app-lazy-module":"features-user-user-app-lazy-module","features-user-user-lazy-module":"features-user-user-lazy-module","feedback-lazy-module":"feedback-lazy-module","folder-lazy-module":"folder-lazy-module","forum-lazy-module":"forum-lazy-module","glossary-edit-lazy-module":"glossary-edit-lazy-module","glossary-entry-lazy-module":"glossary-entry-lazy-module","glossary-lazy-module":"glossary-lazy-module","h5pactivity-lazy-module":"h5pactivity-lazy-module","imscp-lazy-module":"imscp-lazy-module","lesson-lazy-module":"lesson-lazy-module","lti-lazy-module":"lti-lazy-module","mainmenu-reload-lazy-module":"mainmenu-reload-lazy-module","messages-settings-lazy-module":"messages-settings-lazy-module","notifications-settings-lazy-module":"notifications-settings-lazy-module","page-lazy-module":"page-lazy-module","polyfills-core-js":"polyfills-core-js","polyfills-css-shim":"polyfills-css-shim","polyfills-dom":"polyfills-dom","quiz-lazy-module":"quiz-lazy-module","reportbuilder-lazy-module":"reportbuilder-lazy-module","resource-lazy-module":"resource-lazy-module","settings-lazy-module":"settings-lazy-module","settings-site-lazy-module":"settings-site-lazy-module","shadow-css-a3f00b33-js":"shadow-css-a3f00b33-js","sharedfiles-lazy-module":"sharedfiles-lazy-module","sitehome-lazy-module":"sitehome-lazy-module","survey-lazy-module":"survey-lazy-module","url-lazy-module":"url-lazy-module","user-profile-lazy-module":"user-profile-lazy-module","viewer-lazy-module":"viewer-lazy-module","wiki-lazy-module":"wiki-lazy-module","workshop-lazy-module":"workshop-lazy-module","swiper-bundle-6c5e7804-js":"swiper-bundle-6c5e7804-js","focus-visible-f4ad4f1a-js":"focus-visible-f4ad4f1a-js","input-shims-ce03ee9f-js":"input-shims-ce03ee9f-js","keyboard-5742b5da-js":"keyboard-5742b5da-js","status-tap-9cb487b1-js":"status-tap-9cb487b1-js","swipe-back-1bbd08e0-js":"swipe-back-1bbd08e0-js","tap-click-7ddcdebb-js":"tap-click-7ddcdebb-js","addons-messages-components-conversation-info-conversation-info-module":"addons-messages-components-conversation-info-conversation-info-module","mainmenu-home-lazy-module":"mainmenu-home-lazy-module","mainmenu-more-lazy-module":"mainmenu-more-lazy-module"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=runtime.js.map