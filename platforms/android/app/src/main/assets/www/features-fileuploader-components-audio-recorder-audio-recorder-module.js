(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-fileuploader-components-audio-recorder-audio-recorder-module"],{

/***/ "./node_modules/mp3-mediarecorder/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/mp3-mediarecorder/dist/index.es.js ***!
  \*********************************************************/
/*! exports provided: Mp3MediaRecorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mp3MediaRecorder", function() { return Mp3MediaRecorder; });
/**
 * Assert a condition.
 * @param condition The condition that it should satisfy.
 * @param message The error message.
 * @param args The arguments for replacing placeholders in the message.
 */
function assertType(condition, message, ...args) {
    if (!condition) {
        throw new TypeError(format(message, args));
    }
}
/**
 * Convert a text and arguments to one string.
 * @param message The formating text
 * @param args The arguments.
 */
function format(message, args) {
    let i = 0;
    return message.replace(/%[os]/gu, () => anyToString(args[i++]));
}
/**
 * Convert a value to a string representation.
 * @param x The value to get the string representation.
 */
function anyToString(x) {
    if (typeof x !== "object" || x === null) {
        return String(x);
    }
    return Object.prototype.toString.call(x);
}

let currentErrorHandler;
/**
 * Print a error message.
 * @param maybeError The error object.
 */
function reportError(maybeError) {
    try {
        const error = maybeError instanceof Error
            ? maybeError
            : new Error(anyToString(maybeError));
        // Call the user-defined error handler if exists.
        if (currentErrorHandler) ;
        // Dispatch an `error` event if this is on a browser.
        if (typeof dispatchEvent === "function" &&
            typeof ErrorEvent === "function") {
            dispatchEvent(new ErrorEvent("error", { error, message: error.message }));
        }
        // Emit an `uncaughtException` event if this is on Node.js.
        //istanbul ignore else
        else if (typeof process !== "undefined" &&
            typeof process.emit === "function") {
            process.emit("uncaughtException", error);
            return;
        }
        // Otherwise, print the error.
        console.error(error);
    }
    catch (_a) {
        // ignore.
    }
}

/**
 * The global object.
 */
//istanbul ignore next
const Global = typeof window !== "undefined"
    ? window
    : typeof self !== "undefined"
        ? self
        : typeof global !== "undefined"
            ? global
            : typeof globalThis !== "undefined"
                ? globalThis
                : undefined;

let currentWarnHandler;
/**
 * The warning information.
 */
class Warning {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    /**
     * Report this warning.
     * @param args The arguments of the warning.
     */
    warn(...args) {
        var _a;
        try {
            // Call the user-defined warning handler if exists.
            if (currentWarnHandler) ;
            // Otherwise, print the warning.
            const stack = ((_a = new Error().stack) !== null && _a !== void 0 ? _a : "").replace(/^(?:.+?\n){2}/gu, "\n");
            console.warn(this.message, ...args, stack);
        }
        catch (_b) {
            // Ignore.
        }
    }
}

const InitEventWasCalledWhileDispatching = new Warning("W01", "Unable to initialize event under dispatching.");
const FalsyWasAssignedToCancelBubble = new Warning("W02", "Assigning any falsy value to 'cancelBubble' property has no effect.");
const TruthyWasAssignedToReturnValue = new Warning("W03", "Assigning any truthy value to 'returnValue' property has no effect.");
const NonCancelableEventWasCanceled = new Warning("W04", "Unable to preventDefault on non-cancelable events.");
const CanceledInPassiveListener = new Warning("W05", "Unable to preventDefault inside passive event listener invocation.");
const EventListenerWasDuplicated = new Warning("W06", "An event listener wasn't added because it has been added already: %o, %o");
const OptionWasIgnored = new Warning("W07", "The %o option value was abandoned because the event listener wasn't added as duplicated.");
const InvalidEventListener = new Warning("W08", "The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");
const InvalidAttributeHandler = new Warning("W09", "Event attribute handler must be a function: %o");

/*eslint-disable class-methods-use-this */
/**
 * An implementation of `Event` interface, that wraps a given event object.
 * `EventTarget` shim can control the internal state of this `Event` objects.
 * @see https://dom.spec.whatwg.org/#event
 */
class Event$1 {
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */
    static get NONE() {
        return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */
    static get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */
    static get AT_TARGET() {
        return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */
    static get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
    }
    /**
     * Initialize this event instance.
     * @param type The type of this event.
     * @param eventInitDict Options to initialize.
     * @see https://dom.spec.whatwg.org/#dom-event-event
     */
    constructor(type, eventInitDict) {
        Object.defineProperty(this, "isTrusted", {
            value: false,
            enumerable: true,
        });
        const opts = eventInitDict !== null && eventInitDict !== void 0 ? eventInitDict : {};
        internalDataMap.set(this, {
            type: String(type),
            bubbles: Boolean(opts.bubbles),
            cancelable: Boolean(opts.cancelable),
            composed: Boolean(opts.composed),
            target: null,
            currentTarget: null,
            stopPropagationFlag: false,
            stopImmediatePropagationFlag: false,
            canceledFlag: false,
            inPassiveListenerFlag: false,
            dispatchFlag: false,
            timeStamp: Date.now(),
        });
    }
    /**
     * The type of this event.
     * @see https://dom.spec.whatwg.org/#dom-event-type
     */
    get type() {
        return $(this).type;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-target
     */
    get target() {
        return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @deprecated Use the `target` property instead.
     * @see https://dom.spec.whatwg.org/#dom-event-srcelement
     */
    get srcElement() {
        return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-currenttarget
     */
    get currentTarget() {
        return $(this).currentTarget;
    }
    /**
     * The event target of the current dispatching.
     * This doesn't support node tree.
     * @see https://dom.spec.whatwg.org/#dom-event-composedpath
     */
    composedPath() {
        const currentTarget = $(this).currentTarget;
        if (currentTarget) {
            return [currentTarget];
        }
        return [];
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */
    get NONE() {
        return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */
    get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */
    get AT_TARGET() {
        return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */
    get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
    }
    /**
     * The current event phase.
     * @see https://dom.spec.whatwg.org/#dom-event-eventphase
     */
    get eventPhase() {
        return $(this).dispatchFlag ? 2 : 0;
    }
    /**
     * Stop event bubbling.
     * Because this shim doesn't support node tree, this merely changes the `cancelBubble` property value.
     * @see https://dom.spec.whatwg.org/#dom-event-stoppropagation
     */
    stopPropagation() {
        $(this).stopPropagationFlag = true;
    }
    /**
     * `true` if event bubbling was stopped.
     * @deprecated
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */
    get cancelBubble() {
        return $(this).stopPropagationFlag;
    }
    /**
     * Stop event bubbling if `true` is set.
     * @deprecated Use the `stopPropagation()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */
    set cancelBubble(value) {
        if (value) {
            $(this).stopPropagationFlag = true;
        }
        else {
            FalsyWasAssignedToCancelBubble.warn();
        }
    }
    /**
     * Stop event bubbling and subsequent event listener callings.
     * @see https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation
     */
    stopImmediatePropagation() {
        const data = $(this);
        data.stopPropagationFlag = data.stopImmediatePropagationFlag = true;
    }
    /**
     * `true` if this event will bubble.
     * @see https://dom.spec.whatwg.org/#dom-event-bubbles
     */
    get bubbles() {
        return $(this).bubbles;
    }
    /**
     * `true` if this event can be canceled by the `preventDefault()` method.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelable
     */
    get cancelable() {
        return $(this).cancelable;
    }
    /**
     * `true` if the default behavior will act.
     * @deprecated Use the `defaultPrevented` proeprty instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */
    get returnValue() {
        return !$(this).canceledFlag;
    }
    /**
     * Cancel the default behavior if `false` is set.
     * @deprecated Use the `preventDefault()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */
    set returnValue(value) {
        if (!value) {
            setCancelFlag($(this));
        }
        else {
            TruthyWasAssignedToReturnValue.warn();
        }
    }
    /**
     * Cancel the default behavior.
     * @see https://dom.spec.whatwg.org/#dom-event-preventdefault
     */
    preventDefault() {
        setCancelFlag($(this));
    }
    /**
     * `true` if the default behavior was canceled.
     * @see https://dom.spec.whatwg.org/#dom-event-defaultprevented
     */
    get defaultPrevented() {
        return $(this).canceledFlag;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-composed
     */
    get composed() {
        return $(this).composed;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-istrusted
     */
    //istanbul ignore next
    get isTrusted() {
        return false;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-timestamp
     */
    get timeStamp() {
        return $(this).timeStamp;
    }
    /**
     * @deprecated Don't use this method. The constructor did initialization.
     */
    initEvent(type, bubbles = false, cancelable = false) {
        const data = $(this);
        if (data.dispatchFlag) {
            InitEventWasCalledWhileDispatching.warn();
            return;
        }
        internalDataMap.set(this, Object.assign({}, data, {
            type: String(type),
            bubbles: Boolean(bubbles),
            cancelable: Boolean(cancelable),
            target: null,
            currentTarget: null,
            stopPropagationFlag: false,
            stopImmediatePropagationFlag: false,
            canceledFlag: false
        }));
    }
}
//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const NONE = 0;
const CAPTURING_PHASE = 1;
const AT_TARGET = 2;
const BUBBLING_PHASE = 3;
/**
 * Private data for event wrappers.
 */
const internalDataMap = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @param name The variable name to report.
 * @returns The private data of the event.
 */
function $(event, name = "this") {
    const retv = internalDataMap.get(event);
    assertType(retv != null, "'%s' must be an object that Event constructor created, but got another one: %o", name, event);
    return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data private data.
 */
function setCancelFlag(data) {
    if (data.inPassiveListenerFlag) {
        CanceledInPassiveListener.warn();
        return;
    }
    if (!data.cancelable) {
        NonCancelableEventWasCanceled.warn();
        return;
    }
    data.canceledFlag = true;
}
// Set enumerable
Object.defineProperty(Event$1, "NONE", { enumerable: true });
Object.defineProperty(Event$1, "CAPTURING_PHASE", { enumerable: true });
Object.defineProperty(Event$1, "AT_TARGET", { enumerable: true });
Object.defineProperty(Event$1, "BUBBLING_PHASE", { enumerable: true });
const keys = Object.getOwnPropertyNames(Event$1.prototype);
for (let i = 0; i < keys.length; ++i) {
    if (keys[i] === "constructor") {
        continue;
    }
    Object.defineProperty(Event$1.prototype, keys[i], { enumerable: true });
}
// Ensure `event instanceof window.Event` is `true`.
if (typeof Global !== "undefined" && typeof Global.Event !== "undefined") {
    Object.setPrototypeOf(Event$1.prototype, Global.Event.prototype);
}

/**
 * Create a new InvalidStateError instance.
 * @param message The error message.
 */
function createInvalidStateError(message) {
    if (Global.DOMException) {
        return new Global.DOMException(message, "InvalidStateError");
    }
    if (DOMException == null) {
        DOMException = class DOMException extends Error {
            constructor(msg) {
                super(msg);
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, DOMException);
                }
            }
            // eslint-disable-next-line class-methods-use-this
            get code() {
                return 11;
            }
            // eslint-disable-next-line class-methods-use-this
            get name() {
                return "InvalidStateError";
            }
        };
        Object.defineProperties(DOMException.prototype, {
            code: { enumerable: true },
            name: { enumerable: true },
        });
        defineErrorCodeProperties(DOMException);
        defineErrorCodeProperties(DOMException.prototype);
    }
    return new DOMException(message);
}
//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
let DOMException;
const ErrorCodeMap = {
    INDEX_SIZE_ERR: 1,
    DOMSTRING_SIZE_ERR: 2,
    HIERARCHY_REQUEST_ERR: 3,
    WRONG_DOCUMENT_ERR: 4,
    INVALID_CHARACTER_ERR: 5,
    NO_DATA_ALLOWED_ERR: 6,
    NO_MODIFICATION_ALLOWED_ERR: 7,
    NOT_FOUND_ERR: 8,
    NOT_SUPPORTED_ERR: 9,
    INUSE_ATTRIBUTE_ERR: 10,
    INVALID_STATE_ERR: 11,
    SYNTAX_ERR: 12,
    INVALID_MODIFICATION_ERR: 13,
    NAMESPACE_ERR: 14,
    INVALID_ACCESS_ERR: 15,
    VALIDATION_ERR: 16,
    TYPE_MISMATCH_ERR: 17,
    SECURITY_ERR: 18,
    NETWORK_ERR: 19,
    ABORT_ERR: 20,
    URL_MISMATCH_ERR: 21,
    QUOTA_EXCEEDED_ERR: 22,
    TIMEOUT_ERR: 23,
    INVALID_NODE_TYPE_ERR: 24,
    DATA_CLONE_ERR: 25,
};
function defineErrorCodeProperties(obj) {
    const keys = Object.keys(ErrorCodeMap);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const value = ErrorCodeMap[key];
        Object.defineProperty(obj, key, {
            get() {
                return value;
            },
            configurable: true,
            enumerable: true,
        });
    }
}

/**
 * An implementation of `Event` interface, that wraps a given event object.
 * This class controls the internal state of `Event`.
 * @see https://dom.spec.whatwg.org/#interface-event
 */
class EventWrapper extends Event$1 {
    /**
     * Wrap a given event object to control states.
     * @param event The event-like object to wrap.
     */
    static wrap(event) {
        return new (getWrapperClassOf(event))(event);
    }
    constructor(event) {
        super(event.type, {
            bubbles: event.bubbles,
            cancelable: event.cancelable,
            composed: event.composed,
        });
        if (event.cancelBubble) {
            super.stopPropagation();
        }
        if (event.defaultPrevented) {
            super.preventDefault();
        }
        internalDataMap$1.set(this, { original: event });
        // Define accessors
        const keys = Object.keys(event);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            if (!(key in this)) {
                Object.defineProperty(this, key, defineRedirectDescriptor(event, key));
            }
        }
    }
    stopPropagation() {
        super.stopPropagation();
        const { original } = $$1(this);
        if ("stopPropagation" in original) {
            original.stopPropagation();
        }
    }
    get cancelBubble() {
        return super.cancelBubble;
    }
    set cancelBubble(value) {
        super.cancelBubble = value;
        const { original } = $$1(this);
        if ("cancelBubble" in original) {
            original.cancelBubble = value;
        }
    }
    stopImmediatePropagation() {
        super.stopImmediatePropagation();
        const { original } = $$1(this);
        if ("stopImmediatePropagation" in original) {
            original.stopImmediatePropagation();
        }
    }
    get returnValue() {
        return super.returnValue;
    }
    set returnValue(value) {
        super.returnValue = value;
        const { original } = $$1(this);
        if ("returnValue" in original) {
            original.returnValue = value;
        }
    }
    preventDefault() {
        super.preventDefault();
        const { original } = $$1(this);
        if ("preventDefault" in original) {
            original.preventDefault();
        }
    }
    get timeStamp() {
        const { original } = $$1(this);
        if ("timeStamp" in original) {
            return original.timeStamp;
        }
        return super.timeStamp;
    }
}
/**
 * Private data for event wrappers.
 */
const internalDataMap$1 = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @returns The private data of the event.
 */
function $$1(event) {
    const retv = internalDataMap$1.get(event);
    assertType(retv != null, "'this' is expected an Event object, but got", event);
    return retv;
}
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */
const wrapperClassCache = new WeakMap();
// Make association for wrappers.
wrapperClassCache.set(Object.prototype, EventWrapper);
if (typeof Global !== "undefined" && typeof Global.Event !== "undefined") {
    wrapperClassCache.set(Global.Event.prototype, EventWrapper);
}
/**
 * Get the wrapper class of a given prototype.
 * @param originalEvent The event object to wrap.
 */
function getWrapperClassOf(originalEvent) {
    const prototype = Object.getPrototypeOf(originalEvent);
    if (prototype == null) {
        return EventWrapper;
    }
    let wrapper = wrapperClassCache.get(prototype);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapperClassOf(prototype), prototype);
        wrapperClassCache.set(prototype, wrapper);
    }
    return wrapper;
}
/**
 * Define new wrapper class.
 * @param BaseEventWrapper The base wrapper class.
 * @param originalPrototype The prototype of the original event.
 */
function defineWrapper(BaseEventWrapper, originalPrototype) {
    class CustomEventWrapper extends BaseEventWrapper {
    }
    const keys = Object.keys(originalPrototype);
    for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(CustomEventWrapper.prototype, keys[i], defineRedirectDescriptor(originalPrototype, keys[i]));
    }
    return CustomEventWrapper;
}
/**
 * Get the property descriptor to redirect a given property.
 */
function defineRedirectDescriptor(obj, key) {
    const d = Object.getOwnPropertyDescriptor(obj, key);
    return {
        get() {
            const original = $$1(this).original;
            const value = original[key];
            if (typeof value === "function") {
                return value.bind(original);
            }
            return value;
        },
        set(value) {
            const original = $$1(this).original;
            original[key] = value;
        },
        configurable: d.configurable,
        enumerable: d.enumerable,
    };
}

/**
 * Create a new listener.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 * @param signalListener The abort event listener for the abort signal.
 */
function createListener(callback, capture, passive, once, signal, signalListener) {
    return {
        callback,
        flags: (capture ? 1 /* Capture */ : 0) |
            (passive ? 2 /* Passive */ : 0) |
            (once ? 4 /* Once */ : 0),
        signal,
        signalListener,
    };
}
/**
 * Set the `removed` flag to the given listener.
 * @param listener The listener to check.
 */
function setRemoved(listener) {
    listener.flags |= 8 /* Removed */;
}
/**
 * Check if the given listener has the `capture` flag or not.
 * @param listener The listener to check.
 */
function isCapture(listener) {
    return (listener.flags & 1 /* Capture */) === 1 /* Capture */;
}
/**
 * Check if the given listener has the `passive` flag or not.
 * @param listener The listener to check.
 */
function isPassive(listener) {
    return (listener.flags & 2 /* Passive */) === 2 /* Passive */;
}
/**
 * Check if the given listener has the `once` flag or not.
 * @param listener The listener to check.
 */
function isOnce(listener) {
    return (listener.flags & 4 /* Once */) === 4 /* Once */;
}
/**
 * Check if the given listener has the `removed` flag or not.
 * @param listener The listener to check.
 */
function isRemoved(listener) {
    return (listener.flags & 8 /* Removed */) === 8 /* Removed */;
}
/**
 * Call an event listener.
 * @param listener The listener to call.
 * @param target The event target object for `thisArg`.
 * @param event The event object for the first argument.
 * @param attribute `true` if this callback is an event attribute handler.
 */
function invokeCallback({ callback }, target, event) {
    try {
        if (typeof callback === "function") {
            callback.call(target, event);
        }
        else if (typeof callback.handleEvent === "function") {
            callback.handleEvent(event);
        }
    }
    catch (thrownError) {
        reportError(thrownError);
    }
}

/**
 * Find the index of given listener.
 * This returns `-1` if not found.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 */
function findIndexOfListener({ listeners }, callback, capture) {
    for (let i = 0; i < listeners.length; ++i) {
        if (listeners[i].callback === callback &&
            isCapture(listeners[i]) === capture) {
            return i;
        }
    }
    return -1;
}
/**
 * Add the given listener.
 * Does copy-on-write if needed.
 * @param list The listener list.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 */
function addListener(list, callback, capture, passive, once, signal) {
    let signalListener;
    if (signal) {
        signalListener = removeListener.bind(null, list, callback, capture);
        signal.addEventListener("abort", signalListener);
    }
    const listener = createListener(callback, capture, passive, once, signal, signalListener);
    if (list.cow) {
        list.cow = false;
        list.listeners = [...list.listeners, listener];
    }
    else {
        list.listeners.push(listener);
    }
    return listener;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 * @returns `true` if it mutated the list directly.
 */
function removeListener(list, callback, capture) {
    const index = findIndexOfListener(list, callback, capture);
    if (index !== -1) {
        return removeListenerAt(list, index);
    }
    return false;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param index The index of the target listener.
 * @param disableCow Disable copy-on-write if true.
 * @returns `true` if it mutated the `listeners` array directly.
 */
function removeListenerAt(list, index, disableCow = false) {
    const listener = list.listeners[index];
    // Set the removed flag.
    setRemoved(listener);
    // Dispose the abort signal listener if exists.
    if (listener.signal) {
        listener.signal.removeEventListener("abort", listener.signalListener);
    }
    // Remove it from the array.
    if (list.cow && !disableCow) {
        list.cow = false;
        list.listeners = list.listeners.filter((_, i) => i !== index);
        return false;
    }
    list.listeners.splice(index, 1);
    return true;
}

/**
 * Create a new `ListenerListMap` object.
 */
function createListenerListMap() {
    return Object.create(null);
}
/**
 * Get the listener list of the given type.
 * If the listener list has not been initialized, initialize and return it.
 * @param listenerMap The listener list map.
 * @param type The event type to get.
 */
function ensureListenerList(listenerMap, type) {
    var _a;
    return ((_a = listenerMap[type]) !== null && _a !== void 0 ? _a : (listenerMap[type] = {
        attrCallback: undefined,
        attrListener: undefined,
        cow: false,
        listeners: [],
    }));
}

/**
 * An implementation of the `EventTarget` interface.
 * @see https://dom.spec.whatwg.org/#eventtarget
 */
class EventTarget {
    /**
     * Initialize this instance.
     */
    constructor() {
        internalDataMap$2.set(this, createListenerListMap());
    }
    // Implementation
    addEventListener(type0, callback0, options0) {
        const listenerMap = $$2(this);
        const { callback, capture, once, passive, signal, type, } = normalizeAddOptions(type0, callback0, options0);
        if (callback == null || (signal === null || signal === void 0 ? void 0 : signal.aborted)) {
            return;
        }
        const list = ensureListenerList(listenerMap, type);
        // Find existing listener.
        const i = findIndexOfListener(list, callback, capture);
        if (i !== -1) {
            warnDuplicate(list.listeners[i], passive, once, signal);
            return;
        }
        // Add the new listener.
        addListener(list, callback, capture, passive, once, signal);
    }
    // Implementation
    removeEventListener(type0, callback0, options0) {
        const listenerMap = $$2(this);
        const { callback, capture, type } = normalizeOptions(type0, callback0, options0);
        const list = listenerMap[type];
        if (callback != null && list) {
            removeListener(list, callback, capture);
        }
    }
    // Implementation
    dispatchEvent(e) {
        const list = $$2(this)[String(e.type)];
        if (list == null) {
            return true;
        }
        const event = e instanceof Event$1 ? e : EventWrapper.wrap(e);
        const eventData = $(event, "event");
        if (eventData.dispatchFlag) {
            throw createInvalidStateError("This event has been in dispatching.");
        }
        eventData.dispatchFlag = true;
        eventData.target = eventData.currentTarget = this;
        if (!eventData.stopPropagationFlag) {
            const { cow, listeners } = list;
            // Set copy-on-write flag.
            list.cow = true;
            // Call listeners.
            for (let i = 0; i < listeners.length; ++i) {
                const listener = listeners[i];
                // Skip if removed.
                if (isRemoved(listener)) {
                    continue;
                }
                // Remove this listener if has the `once` flag.
                if (isOnce(listener) && removeListenerAt(list, i, !cow)) {
                    // Because this listener was removed, the next index is the
                    // same as the current value.
                    i -= 1;
                }
                // Call this listener with the `passive` flag.
                eventData.inPassiveListenerFlag = isPassive(listener);
                invokeCallback(listener, this, event);
                eventData.inPassiveListenerFlag = false;
                // Stop if the `event.stopImmediatePropagation()` method was called.
                if (eventData.stopImmediatePropagationFlag) {
                    break;
                }
            }
            // Restore copy-on-write flag.
            if (!cow) {
                list.cow = false;
            }
        }
        eventData.target = null;
        eventData.currentTarget = null;
        eventData.stopImmediatePropagationFlag = false;
        eventData.stopPropagationFlag = false;
        eventData.dispatchFlag = false;
        return !eventData.canceledFlag;
    }
}
/**
 * Internal data.
 */
const internalDataMap$2 = new WeakMap();
/**
 * Get private data.
 * @param target The event target object to get private data.
 * @param name The variable name to report.
 * @returns The private data of the event.
 */
function $$2(target, name = "this") {
    const retv = internalDataMap$2.get(target);
    assertType(retv != null, "'%s' must be an object that EventTarget constructor created, but got another one: %o", name, target);
    return retv;
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */
function normalizeAddOptions(type, callback, options) {
    var _a;
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
        return {
            type: String(type),
            callback: callback !== null && callback !== void 0 ? callback : undefined,
            capture: Boolean(options.capture),
            passive: Boolean(options.passive),
            once: Boolean(options.once),
            signal: (_a = options.signal) !== null && _a !== void 0 ? _a : undefined,
        };
    }
    return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : undefined,
        capture: Boolean(options),
        passive: false,
        once: false,
        signal: undefined,
    };
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */
function normalizeOptions(type, callback, options) {
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
        return {
            type: String(type),
            callback: callback !== null && callback !== void 0 ? callback : undefined,
            capture: Boolean(options.capture),
        };
    }
    return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : undefined,
        capture: Boolean(options),
    };
}
/**
 * Assert the type of 'callback' argument.
 * @param callback The callback to check.
 */
function assertCallback(callback) {
    if (typeof callback === "function" ||
        (typeof callback === "object" &&
            callback !== null &&
            typeof callback.handleEvent === "function")) {
        return;
    }
    if (callback == null || typeof callback === "object") {
        InvalidEventListener.warn(callback);
        return;
    }
    throw new TypeError(format(InvalidEventListener.message, [callback]));
}
/**
 * Print warning for duplicated.
 * @param listener The current listener that is duplicated.
 * @param passive The passive flag of the new duplicated listener.
 * @param once The once flag of the new duplicated listener.
 * @param signal The signal object of the new duplicated listener.
 */
function warnDuplicate(listener, passive, once, signal) {
    EventListenerWasDuplicated.warn(isCapture(listener) ? "capture" : "bubble", listener.callback);
    if (isPassive(listener) !== passive) {
        OptionWasIgnored.warn("passive");
    }
    if (isOnce(listener) !== once) {
        OptionWasIgnored.warn("once");
    }
    if (listener.signal !== signal) {
        OptionWasIgnored.warn("signal");
    }
}
// Set enumerable
const keys$1 = Object.getOwnPropertyNames(EventTarget.prototype);
for (let i = 0; i < keys$1.length; ++i) {
    if (keys$1[i] === "constructor") {
        continue;
    }
    Object.defineProperty(EventTarget.prototype, keys$1[i], { enumerable: true });
}
// Ensure `eventTarget instanceof window.EventTarget` is `true`.
if (typeof Global !== "undefined" &&
    typeof Global.EventTarget !== "undefined") {
    Object.setPrototypeOf(EventTarget.prototype, Global.EventTarget.prototype);
}

/**
 * Get the current value of a given event attribute.
 * @param target The `EventTarget` object to get.
 * @param type The event type.
 */
function getEventAttributeValue(target, type) {
    var _a, _b;
    const listMap = $$2(target, "target");
    return (_b = (_a = listMap[type]) === null || _a === void 0 ? void 0 : _a.attrCallback) !== null && _b !== void 0 ? _b : null;
}
/**
 * Set an event listener to a given event attribute.
 * @param target The `EventTarget` object to set.
 * @param type The event type.
 * @param callback The event listener.
 */
function setEventAttributeValue(target, type, callback) {
    if (callback != null && typeof callback !== "function") {
        InvalidAttributeHandler.warn(callback);
    }
    if (typeof callback === "function" ||
        (typeof callback === "object" && callback !== null)) {
        upsertEventAttributeListener(target, type, callback);
    }
    else {
        removeEventAttributeListener(target, type);
    }
}
//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
/**
 * Update or insert the given event attribute handler.
 * @param target The `EventTarget` object to set.
 * @param type The event type.
 * @param callback The event listener.
 */
function upsertEventAttributeListener(target, type, callback) {
    const list = ensureListenerList($$2(target, "target"), String(type));
    list.attrCallback = callback;
    if (list.attrListener == null) {
        list.attrListener = addListener(list, defineEventAttributeCallback(list), false, false, false, undefined);
    }
}
/**
 * Remove the given event attribute handler.
 * @param target The `EventTarget` object to remove.
 * @param type The event type.
 * @param callback The event listener.
 */
function removeEventAttributeListener(target, type) {
    const listMap = $$2(target, "target");
    const list = listMap[String(type)];
    if (list && list.attrListener) {
        removeListener(list, list.attrListener.callback, false);
        list.attrCallback = list.attrListener = undefined;
    }
}
/**
 * Define the callback function for the given listener list object.
 * It calls `attrCallback` property if the property value is a function.
 * @param list The `ListenerList` object.
 */
function defineEventAttributeCallback(list) {
    return function (event) {
        const callback = list.attrCallback;
        if (typeof callback === "function") {
            callback.call(this, event);
        }
    };
}
/**
 * Define an event attribute.
 * @param target The `EventTarget` object to define an event attribute.
 * @param type The event type to define.
 * @param _eventClass Unused, but to infer `Event` class type.
 * @deprecated Use `getEventAttributeValue`/`setEventAttributeValue` pair on your derived class instead because of static analysis friendly.
 */
function defineEventAttribute(target, type, _eventClass) {
    Object.defineProperty(target, `on${type}`, {
        get() {
            return getEventAttributeValue(this, type);
        },
        set(value) {
            setEventAttributeValue(this, type, value);
        },
        configurable: true,
        enumerable: true,
    });
}var PostMessageType;
(function (PostMessageType) {
    PostMessageType["DATA_AVAILABLE"] = "DATA_AVAILABLE";
    PostMessageType["START_RECORDING"] = "START_RECORDING";
    PostMessageType["STOP_RECORDING"] = "STOP_RECORDING";
    PostMessageType["ERROR"] = "ERROR";
    PostMessageType["BLOB_READY"] = "BLOB_READY";
    PostMessageType["WORKER_RECORDING"] = "WORKER_RECORDING";
})(PostMessageType || (PostMessageType = {}));
const startRecordingMessage = (config) => ({
    type: PostMessageType.START_RECORDING,
    config,
});
const dataAvailableMessage = (data) => ({
    type: PostMessageType.DATA_AVAILABLE,
    data,
});
const stopRecordingMessage = () => ({
    type: PostMessageType.STOP_RECORDING,
});const MP3_MIME_TYPE = 'audio/mpeg';
const SafeAudioContext = window.AudioContext || window.webkitAudioContext;
const createGain = (ctx) => (ctx.createGain || ctx.createGainNode).call(ctx);
const createScriptProcessor = (ctx) => (ctx.createScriptProcessor || ctx.createJavaScriptNode).call(ctx, 4096, 1, 1);
class Mp3MediaRecorder extends EventTarget {
    constructor(stream, { audioContext, worker }) {
        super();
        this.mimeType = MP3_MIME_TYPE;
        this.state = 'inactive';
        this.audioBitsPerSecond = 0;
        this.videoBitsPerSecond = 0;
        this.isInternalAudioContext = false;
        this.onWorkerMessage = (event) => {
            const message = event.data;
            switch (message.type) {
                case PostMessageType.WORKER_RECORDING: {
                    const event = new Event('start');
                    this.dispatchEvent(event);
                    this.state = 'recording';
                    break;
                }
                case PostMessageType.ERROR: {
                    const error = new Error(message.error);
                    const errEvent = new Event('error');
                    errEvent.error = error;
                    this.dispatchEvent(errEvent);
                    this.state = 'inactive';
                    break;
                }
                case PostMessageType.BLOB_READY: {
                    const stopEvent = new Event('stop');
                    const fallbackDataEvent = new Event('dataavailable');
                    fallbackDataEvent.data = message.blob;
                    fallbackDataEvent.timecode = Date.now();
                    const dataEvent = window.BlobEvent
                        ? new BlobEvent('dataavailable', {
                            data: message.blob,
                            timecode: Date.now(),
                        })
                        : fallbackDataEvent;
                    this.dispatchEvent(dataEvent);
                    this.dispatchEvent(stopEvent);
                    this.state = 'inactive';
                    break;
                }
                case PostMessageType.ERROR: {
                    throw new Error(message.error);
                }
            }
        };
        if (!worker) {
            throw new Error('No worker provided in Mp3MediaRecorder constructor.');
        }
        this.stream = stream;
        this.isInternalAudioContext = !audioContext;
        this.audioContext = audioContext || new SafeAudioContext();
        this.worker = worker;
        this.sourceNode = this.audioContext.createMediaStreamSource(stream);
        this.gainNode = createGain(this.audioContext);
        this.gainNode.gain.value = 1;
        this.processorNode = createScriptProcessor(this.audioContext);
        this.sourceNode.connect(this.gainNode);
        this.gainNode.connect(this.processorNode);
        this.worker.onmessage = this.onWorkerMessage;
    }
    start() {
        if (this.state !== 'inactive') {
            throw this.getStateError('start');
        }
        this.processorNode.onaudioprocess = (event) => {
            this.worker.postMessage(dataAvailableMessage(event.inputBuffer.getChannelData(0)));
        };
        this.processorNode.connect(this.audioContext.destination);
        if (this.audioContext.state === 'closed') {
            this.audioContext = new AudioContext();
        }
        else if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        this.worker.postMessage(startRecordingMessage({ sampleRate: this.audioContext.sampleRate }));
    }
    stop() {
        if (this.state === 'inactive') {
            throw this.getStateError('stop');
        }
        this.processorNode.disconnect();
        if (this.isInternalAudioContext) {
            this.audioContext.close();
        }
        this.worker.postMessage(stopRecordingMessage());
    }
    pause() {
        if (this.state === 'inactive') {
            throw this.getStateError('pause');
        }
        this.audioContext.suspend().then(() => {
            this.state = 'paused';
            this.dispatchEvent(new Event('pause'));
        });
    }
    resume() {
        if (this.state === 'inactive') {
            throw this.getStateError('resume');
        }
        this.audioContext.resume().then(() => {
            this.state = 'recording';
            this.dispatchEvent(new Event('resume'));
        });
    }
    requestData() {
        // not implemented, dataavailable event only fires when encoding is finished
    }
    getStateError(method) {
        return new Error(`Failed to execute '${method}' on 'MediaRecorder': The MediaRecorder's state is '${this.state}'.`);
    }
}
Mp3MediaRecorder.isTypeSupported = (mimeType) => mimeType === MP3_MIME_TYPE;
defineEventAttribute(Mp3MediaRecorder.prototype, 'start');
defineEventAttribute(Mp3MediaRecorder.prototype, 'stop');
defineEventAttribute(Mp3MediaRecorder.prototype, 'pause');
defineEventAttribute(Mp3MediaRecorder.prototype, 'resume');
defineEventAttribute(Mp3MediaRecorder.prototype, 'dataavailable');
defineEventAttribute(Mp3MediaRecorder.prototype, 'error');

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/fileuploader/components/audio-histogram/audio-histogram.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/fileuploader/components/audio-histogram/audio-histogram.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas #canvas></canvas>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <h1>{{ 'core.fileuploader.audiotitle' | translate }}</h1>\r\n\r\n    <ion-button shape=\"round\" fill=\"clear\" [attr.aria-label]=\"'core.close' | translate\" (click)=\"cancel()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n    </ion-button>\r\n</header>\r\n\r\n<hr>\r\n\r\n<ng-container *ngIf=\"(status$ | async) as status\">\r\n    <div *ngIf=\"status === 'empty'\" class=\"core-audio-recorder--wrapper\">\r\n        <p>{{ 'core.fileuploader.startrecordinginstructions' | translate }}</p>\r\n\r\n        <ion-button shape=\"round\" color=\"danger\" [attr.aria-label]=\"'core.fileuploader.startrecording' | translate\"\r\n            (click)=\"startRecording()\">\r\n            <ion-icon slot=\"icon-only\" name=\"fas-microphone\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n\r\n    <div *ngIf=\"status.startsWith('recording')\" class=\"core-audio-recorder--wrapper\">\r\n        <core-audio-histogram *ngIf=\"(histogramAnalyzer$ | async) as analyser\" [analyser]=\"analyser\"\r\n            [paused]=\"status !== 'recording-ongoing'\">\r\n        </core-audio-histogram>\r\n\r\n        <div class=\"core-audio-recorder--controls\">\r\n            <div class=\"core-audio-recorder--control chrono\">\r\n                <div *ngIf=\"status === 'recording-ongoing'\" class=\"core-audio-recorder--recording-marker\"></div>\r\n                <core-chrono [class.recording]=\"status === 'recording-ongoing'\" [running]=\"status === 'recording-ongoing'\" [hours]=\"false\">\r\n                </core-chrono>\r\n            </div>\r\n\r\n            <div class=\"core-audio-recorder--control\">\r\n                <ion-button *ngIf=\"status === 'recording-ongoing'\" shape=\"round\" fill=\"clear\"\r\n                    [attr.aria-label]=\"'core.fileuploader.pauserecording' | translate\" (click)=\"pauseRecording()\">\r\n                    <ion-icon slot=\"icon-only\" name=\"fas-circle-pause\"></ion-icon>\r\n                </ion-button>\r\n\r\n                <ion-button *ngIf=\"status === 'recording-paused'\" [attr.aria-label]=\"'core.fileuploader.resumerecording' | translate\"\r\n                    shape=\"round\" fill=\"clear\" color=\"danger\" (click)=\"resumeRecording()\">\r\n                    <ion-icon slot=\"icon-only\" name=\"fas-microphone\"></ion-icon>\r\n                </ion-button>\r\n            </div>\r\n\r\n            <div class=\"core-audio-recorder--control\">\r\n                <ion-button shape=\"round\" fill=\"clear\" [attr.aria-label]=\"'core.fileuploader.stoprecording' | translate\"\r\n                    (click)=\"stopRecording()\">\r\n                    <ion-icon slot=\"icon-only\" name=\"fa-check\"></ion-icon>\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"status === 'done'\" class=\"core-audio-recorder--wrapper\">\r\n        <audio *ngIf=\"(recordingUrl$ | async) as recordingUrl\" controls controlsList=\"nodownload\">\r\n            <source [src]=\"recordingUrl\" />\r\n        </audio>\r\n\r\n        <div class=\"core-audio-recorder--controls\">\r\n            <div class=\"core-audio-recorder--control\">\r\n                <ion-button shape=\"round\" fill=\"clear\" color=\"danger\" [attr.aria-label]=\"'core.fileuploader.discardrecording' | translate\"\r\n                    (click)=\"discardRecording()\">\r\n                    <ion-icon slot=\"icon-only\" name=\"fas-trash\"></ion-icon>\r\n                </ion-button>\r\n            </div>\r\n\r\n            <div class=\"core-audio-recorder--control\">\r\n                <ion-button (click)=\"submit()\">\r\n                    {{ 'core.save' | translate }}\r\n                </ion-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.worker.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.worker.ts ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "./src/core/classes/modal-component.ts":
/*!*********************************************!*\
  !*** ./src/core/classes/modal-component.ts ***!
  \*********************************************/
/*! exports provided: CoreModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModalComponent", function() { return CoreModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_promised_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/promised-value */ "./src/core/classes/promised-value.ts");
/* harmony import */ var _singletons_directives_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/directives-registry */ "./src/core/singletons/directives-registry.ts");
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
 * Helper class to build modals.
 */
class CoreModalComponent {
    constructor({ nativeElement: element }) {
        this.result = new _classes_promised_value__WEBPACK_IMPORTED_MODULE_1__["CorePromisedValue"]();
        _singletons_directives_registry__WEBPACK_IMPORTED_MODULE_2__["CoreDirectivesRegistry"].register(element, this);
    }
    /**
     * Close the modal.
     *
     * @param result Result data, or error instance if the modal was closed with a failure.
     */
    close(result) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result instanceof Error) {
                this.result.reject(result);
                return;
            }
            this.result.resolve(result);
        });
    }
}


/***/ }),

/***/ "./src/core/features/fileuploader/components/audio-histogram/audio-histogram.scss":
/*!****************************************************************************************!*\
  !*** ./src/core/features/fileuploader/components/audio-histogram/audio-histogram.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --background-color: var(--ion-background-color, #fff);\n  --bars-color: var(--ion-text-color, #000);\n  position: relative;\n}\n:host canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2ZpbGV1cGxvYWRlci9jb21wb25lbnRzL2F1ZGlvLWhpc3RvZ3JhbS9hdWRpby1oaXN0b2dyYW0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFEQUFBO0VBQ0EseUNBQUE7RUFFQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBUiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9maWxldXBsb2FkZXIvY29tcG9uZW50cy9hdWRpby1oaXN0b2dyYW0vYXVkaW8taGlzdG9ncmFtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcclxuICAgIC0tYmFycy1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBjYW52YXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/fileuploader/components/audio-histogram/audio-histogram.ts":
/*!**************************************************************************************!*\
  !*** ./src/core/features/fileuploader/components/audio-histogram/audio-histogram.ts ***!
  \**************************************************************************************/
/*! exports provided: CoreFileUploaderAudioHistogramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreFileUploaderAudioHistogramComponent", function() { return CoreFileUploaderAudioHistogramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
var CoreFileUploaderAudioHistogramComponent_1;


let CoreFileUploaderAudioHistogramComponent = CoreFileUploaderAudioHistogramComponent_1 = class CoreFileUploaderAudioHistogramComponent {
    constructor({ nativeElement }) {
        this.destroyed = false;
        this.element = nativeElement;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        var _a, _b;
        this.canvas = (_a = this.canvasRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        this.context = (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.getContext('2d');
        this.buffer = new Uint8Array(this.analyser.fftSize);
        this.updateCanvas(this.element.clientWidth, this.element.clientHeight);
        this.draw();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Draw histogram.
     */
    draw() {
        if (this.destroyed || !this.canvas || !this.context || !this.buffer) {
            return;
        }
        if (this.canvas.width !== this.element.clientWidth || this.canvas.height !== this.element.clientHeight) {
            this.updateCanvas(this.element.clientWidth, this.element.clientHeight);
        }
        const width = this.canvas.width;
        const height = this.canvas.height;
        const barsWidth = CoreFileUploaderAudioHistogramComponent_1.BARS_WIDTH;
        const barsGutter = CoreFileUploaderAudioHistogramComponent_1.BARS_GUTTER;
        const chunkLength = Math.floor(this.buffer.length / ((width - barsWidth - 1) / (barsWidth + barsGutter)));
        const barsCount = Math.floor(this.buffer.length / chunkLength);
        // Reset canvas.
        this.context.fillRect(0, 0, width, height);
        // Draw bars.
        const startX = Math.floor((width - (barsWidth + barsGutter) * barsCount - barsWidth - 1) / 2);
        this.context.beginPath();
        this.paused ? this.drawPausedBars(startX) : this.drawActiveBars(startX);
        this.context.stroke();
        // Schedule next frame.
        requestAnimationFrame(() => this.draw());
    }
    /**
     * Draws bars on the histogram when it is active.
     *
     * @param x Starting x position.
     */
    drawActiveBars(x) {
        if (!this.canvas || !this.context || !this.buffer) {
            return;
        }
        let bufferX = 0;
        const width = this.canvas.width;
        const halfHeight = this.canvas.height / 2;
        const halfMinHeight = CoreFileUploaderAudioHistogramComponent_1.BARS_MIN_HEIGHT / 2;
        const barsWidth = CoreFileUploaderAudioHistogramComponent_1.BARS_WIDTH;
        const barsGutter = CoreFileUploaderAudioHistogramComponent_1.BARS_GUTTER;
        const bufferLength = this.buffer.length;
        const barsBufferWidth = Math.floor(bufferLength / ((width - barsWidth - 1) / (barsWidth + barsGutter)));
        this.analyser.getByteTimeDomainData(this.buffer);
        while (bufferX < bufferLength) {
            let maxLevel = halfMinHeight;
            do {
                maxLevel = Math.max(maxLevel, halfHeight * (1 - (this.buffer[bufferX] / 128)));
                bufferX++;
            } while (bufferX % barsBufferWidth !== 0 && bufferX < bufferLength);
            this.context.moveTo(x, halfHeight - maxLevel);
            this.context.lineTo(x, halfHeight + maxLevel);
            x += barsWidth + barsGutter;
        }
    }
    /**
     * Draws bars on the histogram when it is paused.
     *
     * @param x Starting x position.
     */
    drawPausedBars(x) {
        if (!this.canvas || !this.context) {
            return;
        }
        const width = this.canvas.width;
        const halfHeight = this.canvas.height / 2;
        const halfMinHeight = CoreFileUploaderAudioHistogramComponent_1.BARS_MIN_HEIGHT / 2;
        const xStep = CoreFileUploaderAudioHistogramComponent_1.BARS_WIDTH + CoreFileUploaderAudioHistogramComponent_1.BARS_GUTTER;
        while (x < width) {
            this.context.moveTo(x, halfHeight - halfMinHeight);
            this.context.lineTo(x, halfHeight + halfMinHeight);
            x += xStep;
        }
    }
    /**
     * Set canvas element dimensions and configure styles.
     *
     * @param width Canvas width.
     * @param height Canvas height.
     */
    updateCanvas(width, height) {
        if (!this.canvas || !this.context) {
            return;
        }
        const styles = getComputedStyle(this.element);
        this.canvas.width = width;
        this.canvas.height = height;
        this.context.fillStyle = styles.getPropertyValue('--background-color');
        this.context.lineCap = 'round';
        this.context.lineWidth = CoreFileUploaderAudioHistogramComponent_1.BARS_WIDTH;
        this.context.strokeStyle = styles.getPropertyValue('--bars-color');
    }
};
CoreFileUploaderAudioHistogramComponent.BARS_WIDTH = 2;
CoreFileUploaderAudioHistogramComponent.BARS_MIN_HEIGHT = 4;
CoreFileUploaderAudioHistogramComponent.BARS_GUTTER = 4;
CoreFileUploaderAudioHistogramComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
CoreFileUploaderAudioHistogramComponent.propDecorators = {
    analyser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    canvasRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['canvas',] }]
};
CoreFileUploaderAudioHistogramComponent = CoreFileUploaderAudioHistogramComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-audio-histogram',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./audio-histogram.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/fileuploader/components/audio-histogram/audio-histogram.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./audio-histogram.scss */ "./src/core/features/fileuploader/components/audio-histogram/audio-histogram.scss")).default]
    })
], CoreFileUploaderAudioHistogramComponent);



/***/ }),

/***/ "./src/core/features/fileuploader/components/audio-recorder/audio-recorder.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/core/features/fileuploader/components/audio-recorder/audio-recorder.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CoreFileUploaderAudioRecorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreFileUploaderAudioRecorderComponent", function() { return CoreFileUploaderAudioRecorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/modal-component */ "./src/core/classes/modal-component.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var mp3_mediarecorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mp3-mediarecorder */ "./node_modules/mp3-mediarecorder/dist/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _features_fileuploader_utils_worker_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/fileuploader/utils/worker-messages */ "./src/core/features/fileuploader/utils/worker-messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _classes_errors_captureerror__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/captureerror */ "./src/core/classes/errors/captureerror.ts");
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/file */ "./src/core/services/file.ts");
/* harmony import */ var _singletons_path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/path */ "./src/core/singletons/path.ts");
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













let CoreFileUploaderAudioRecorderComponent = class CoreFileUploaderAudioRecorderComponent extends _classes_modal_component__WEBPACK_IMPORTED_MODULE_2__["CoreModalComponent"] {
    constructor(elementRef) {
        super(elementRef);
        this.recording = null;
        this.media$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.recording$ = this.media$.pipe(recorderAudioRecording(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(recording => this.recording = recording));
        this.recordingUrl$ = this.recording$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(recording => recording && _singletons__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"].bypassSecurityTrustUrl(recording.url)));
        this.histogramAnalyzer$ = this.media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(media => {
            if (!(media === null || media === void 0 ? void 0 : media.analyser) || _services_platform__WEBPACK_IMPORTED_MODULE_3__["CorePlatform"].prefersReducedMotion()) {
                return null;
            }
            return media.analyser;
        }));
        this.status$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.media$.pipe(recorderStatus(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["shareReplay"])()), this.recording$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([recordingStatus, recording]) => {
            if (recordingStatus === 'recording') {
                return 'recording-ongoing';
            }
            if (recordingStatus === 'paused') {
                return 'recording-paused';
            }
            if (recording) {
                return 'done';
            }
            return 'empty';
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        const recorder = (_a = this.media$.value) === null || _a === void 0 ? void 0 : _a.recorder;
        if (recorder && recorder.state !== 'inactive') {
            recorder.stop();
        }
    }
    /**
     * Start recording.
     */
    startRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const media = yield this.createMedia();
                this.media$.next(media);
                media.recorder.start();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
            }
        });
    }
    /**
     * Stop recording.
     */
    stopRecording() {
        var _a;
        try {
            (_a = this.media$.value) === null || _a === void 0 ? void 0 : _a.recorder.stop();
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
        }
    }
    /**
     * Stop recording.
     */
    pauseRecording() {
        var _a;
        try {
            (_a = this.media$.value) === null || _a === void 0 ? void 0 : _a.recorder.pause();
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
        }
    }
    /**
     * Stop recording.
     */
    resumeRecording() {
        var _a;
        try {
            (_a = this.media$.value) === null || _a === void 0 ? void 0 : _a.recorder.resume();
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
        }
    }
    /**
     * Discard recording.
     */
    discardRecording() {
        this.media$.next(null);
    }
    /**
     * Dismiss modal without a result.
     */
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.close(new _classes_errors_captureerror__WEBPACK_IMPORTED_MODULE_10__["CoreCaptureError"](_classes_errors_captureerror__WEBPACK_IMPORTED_MODULE_10__["CAPTURE_ERROR_NO_MEDIA_FILES"]));
        });
    }
    /**
     * Dismiss the modal with the current recording as a result.
     */
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.recording) {
                return;
            }
            try {
                const fileName = yield _services_file__WEBPACK_IMPORTED_MODULE_11__["CoreFile"].getUniqueNameInFolder(_services_file__WEBPACK_IMPORTED_MODULE_11__["CoreFileProvider"].TMPFOLDER, 'recording.mp3');
                const filePath = _singletons_path__WEBPACK_IMPORTED_MODULE_12__["CorePath"].concatenatePaths(_services_file__WEBPACK_IMPORTED_MODULE_11__["CoreFileProvider"].TMPFOLDER, fileName);
                const fileEntry = yield _services_file__WEBPACK_IMPORTED_MODULE_11__["CoreFile"].writeFile(filePath, this.recording.blob);
                this.close({
                    name: fileEntry.name,
                    fullPath: fileEntry.toURL(),
                    type: 'audio/mpeg',
                });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(error);
            }
        });
    }
    /**
     * Create media instances.
     *
     * @returns Media instances.
     */
    createMedia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.prepareMicrophoneAuthorization();
            const mediaStream = yield navigator.mediaDevices.getUserMedia({ audio: true });
            const audioContext = new window.AudioContext();
            const source = audioContext.createMediaStreamSource(mediaStream);
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 2048;
            source.connect(analyser);
            return {
                analyser,
                recorder: new mp3_mediarecorder__WEBPACK_IMPORTED_MODULE_6__["Mp3MediaRecorder"](mediaStream, { worker: this.startWorker(), audioContext }),
            };
        });
    }
    /**
     * Make sure that microphone usage has been authorized.
     */
    prepareMicrophoneAuthorization() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!_services_platform__WEBPACK_IMPORTED_MODULE_3__["CorePlatform"].isMobile()) {
                return;
            }
            const status = yield _singletons__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"].requestMicrophoneAuthorization();
            switch (status) {
                case _singletons__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"].permissionStatus.DENIED_ONCE:
                case _singletons__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"].permissionStatus.DENIED_ALWAYS:
                    throw new Error(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.fileuploader.microphonepermissiondenied'));
                case _singletons__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"].permissionStatus.RESTRICTED:
                    throw new Error(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.fileuploader.microphonepermissionrestricted'));
            }
        });
    }
    /**
     * Start worker script.
     *
     * @returns Worker.
     */
    startWorker() {
        const worker = new Worker(__webpack__worker__0, undefined);
        worker.postMessage(Object(_features_fileuploader_utils_worker_messages__WEBPACK_IMPORTED_MODULE_8__["initAudioEncoderMessage"])({ vmsgWasmUrl: `${document.head.baseURI}assets/lib/vmsg/vmsg.wasm` }));
        return worker;
    }
};
CoreFileUploaderAudioRecorderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
CoreFileUploaderAudioRecorderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-fileuploader-audio-recorder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./audio-recorder.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./audio-recorder.scss */ "./src/core/features/fileuploader/components/audio-recorder/audio-recorder.scss")).default]
    })
], CoreFileUploaderAudioRecorderComponent);

/**
 * Observable operator that listens to a recorder and emits a recording file.
 *
 * @returns Operator.
 */
function recorderAudioRecording() {
    return source => new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](subscriber => {
        let audioChunks = [];
        let previousRecorder;
        const onDataAvailable = event => audioChunks.push(event.data);
        const onError = event => _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(event.error);
        const onStop = () => {
            const blob = new Blob(audioChunks, { type: 'audio/mpeg' });
            subscriber.next({
                url: URL.createObjectURL(blob),
                blob,
            });
        };
        const subscription = source.subscribe(media => {
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('dataavailable', onDataAvailable);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('error', onError);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('stop', onStop);
            media === null || media === void 0 ? void 0 : media.recorder.addEventListener('dataavailable', onDataAvailable);
            media === null || media === void 0 ? void 0 : media.recorder.addEventListener('error', onError);
            media === null || media === void 0 ? void 0 : media.recorder.addEventListener('stop', onStop);
            audioChunks = [];
            previousRecorder = media === null || media === void 0 ? void 0 : media.recorder;
            subscriber.next(null);
        });
        subscriber.next(null);
        return () => {
            subscription.unsubscribe();
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('dataavailable', onDataAvailable);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('error', onError);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('stop', onStop);
        };
    });
}
/**
 * Observable operator that listens to a recorder and emits its recording status.
 *
 * @returns Operator.
 */
function recorderStatus() {
    return source => new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](subscriber => {
        let previousRecorder;
        const onStart = () => subscriber.next('recording');
        const onPause = () => subscriber.next('paused');
        const onResume = () => subscriber.next('recording');
        const onStop = () => subscriber.next('inactive');
        const subscription = source.subscribe(media => {
            var _a;
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('start', onStart);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('pause', onPause);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('resume', onResume);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('stop', onStop);
            media === null || media === void 0 ? void 0 : media.recorder.addEventListener('start', onStart);
            media === null || media === void 0 ? void 0 : media.recorder.addEventListener('pause', onPause);
            media === null || media === void 0 ? void 0 : media.recorder.addEventListener('resume', onResume);
            media === null || media === void 0 ? void 0 : media.recorder.addEventListener('stop', onStop);
            previousRecorder = media === null || media === void 0 ? void 0 : media.recorder;
            subscriber.next((_a = media === null || media === void 0 ? void 0 : media.recorder.state) !== null && _a !== void 0 ? _a : 'inactive');
        });
        subscriber.next('inactive');
        return () => {
            subscription.unsubscribe();
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('start', onStart);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('pause', onPause);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('resume', onResume);
            previousRecorder === null || previousRecorder === void 0 ? void 0 : previousRecorder.removeEventListener('stop', onStop);
        };
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!./audio-recorder.worker */ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/core/features/fileuploader/components/audio-recorder/audio-recorder.worker.ts")))

/***/ }),

/***/ "./src/core/features/fileuploader/components/audio-recorder/audio-recorder.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/core/features/fileuploader/components/audio-recorder/audio-recorder.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CoreFileUploaderAudioRecorderComponent, CoreFileUploaderAudioRecorderComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreFileUploaderAudioRecorderComponentModule", function() { return CoreFileUploaderAudioRecorderComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_fileuploader_components_audio_histogram_audio_histogram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/fileuploader/components/audio-histogram/audio-histogram */ "./src/core/features/fileuploader/components/audio-histogram/audio-histogram.ts");
/* harmony import */ var _audio_recorder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio-recorder.component */ "./src/core/features/fileuploader/components/audio-recorder/audio-recorder.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreFileUploaderAudioRecorderComponent", function() { return _audio_recorder_component__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploaderAudioRecorderComponent"]; });

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






let CoreFileUploaderAudioRecorderComponentModule = class CoreFileUploaderAudioRecorderComponentModule {
};
CoreFileUploaderAudioRecorderComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
        ],
        declarations: [
            _audio_recorder_component__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploaderAudioRecorderComponent"],
            _features_fileuploader_components_audio_histogram_audio_histogram__WEBPACK_IMPORTED_MODULE_3__["CoreFileUploaderAudioHistogramComponent"],
        ],
    })
], CoreFileUploaderAudioRecorderComponentModule);



/***/ }),

/***/ "./src/core/features/fileuploader/components/audio-recorder/audio-recorder.scss":
/*!**************************************************************************************!*\
  !*** ./src/core/features/fileuploader/components/audio-recorder/audio-recorder.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  color: var(--ion-text-color, #000);\n}\n:host header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n:host header h1 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n}\n:host header ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n  --icon-size: 1.8em;\n  margin: calc((var(--icon-size) - var(--a11y-min-target-size)) / 2);\n}\n:host hr {\n  background: var(--gray-300);\n  margin: 16px 0;\n}\n:host .core-audio-recorder--wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n:host .core-audio-recorder--wrapper p {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n  text-align: center;\n  opacity: 0.6;\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n:host .core-audio-recorder--wrapper ion-button[shape=round] {\n  --border-radius: 99px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  height: -webkit-max-content;\n  height: max-content;\n}\n:host .core-audio-recorder--wrapper core-audio-histogram {\n  width: 100%;\n  height: 35px;\n  display: block;\n}\n:host .core-audio-recorder--wrapper audio {\n  width: 100%;\n  margin-bottom: 16px;\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls .core-audio-recorder--control {\n  width: 33%;\n  text-align: center;\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls .core-audio-recorder--control:first-child {\n  text-align: start;\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls .core-audio-recorder--control:last-child {\n  text-align: end;\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls .core-audio-recorder--control.chrono {\n  padding: 0 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls .core-audio-recorder--control ion-button {\n  margin: 0;\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls .core-audio-recorder--control .core-audio-recorder--recording-marker {\n  width: 8px;\n  height: 8px;\n  -webkit-margin-end: 4px;\n          margin-inline-end: 4px;\n  border-radius: 4px;\n  background: var(--danger);\n}\n:host .core-audio-recorder--wrapper .core-audio-recorder--controls .core-audio-recorder--control core-chrono.recording {\n  color: var(--danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2ZpbGV1cGxvYWRlci9jb21wb25lbnRzL2F1ZGlvLXJlY29yZGVyL2F1ZGlvLXJlY29yZGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNaO0FBRVE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxrRUFBQTtBQUZaO0FBT0k7RUFDSSwyQkFBQTtFQUNBLGNBQUE7QUFMUjtBQVFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5aO0FBU1E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsMkJBQUE7RUFBQSxtQkFBQTtBQVJaO0FBV1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFUWjtBQVlRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBVlo7QUFhUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBWFo7QUFhWTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQVhoQjtBQWFnQjtFQUNJLGlCQUFBO0FBWHBCO0FBY2dCO0VBQ0ksZUFBQTtBQVpwQjtBQWVnQjtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBYnBCO0FBZ0JnQjtFQUNJLFNBQUE7QUFkcEI7QUFpQmdCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWZwQjtBQWtCZ0I7RUFDSSxvQkFBQTtBQWhCcEIiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvZmlsZXVwbG9hZGVyL2NvbXBvbmVudHMvYXVkaW8tcmVjb3JkZXIvYXVkaW8tcmVjb3JkZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgIC0taWNvbi1zaXplOiAxLjhlbTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9mZnNldCBwYWRkaW5nIGZvciB2aXN1YWwgYWxpZ25tZW50LlxyXG4gICAgICAgICAgICBtYXJnaW46IGNhbGMoKHZhcigtLWljb24tc2l6ZSkgLSB2YXIoLS1hMTF5LW1pbi10YXJnZXQtc2l6ZSkpIC8gMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0zMDApO1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3JlLWF1ZGlvLXJlY29yZGVyLS13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbltzaGFwZT1cInJvdW5kXCJdIHtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29yZS1hdWRpby1oaXN0b2dyYW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF1ZGlvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29yZS1hdWRpby1yZWNvcmRlci0tY29udHJvbHMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgLmNvcmUtYXVkaW8tcmVjb3JkZXItLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLmNocm9ubyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvcmUtYXVkaW8tcmVjb3JkZXItLXJlY29yZGluZy1tYXJrZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb3JlLWNocm9uby5yZWNvcmRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */");

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

}]);
//# sourceMappingURL=features-fileuploader-components-audio-recorder-audio-recorder-module.js.map