var ExampleReact = (function (react, reactDom) {
	'use strict';

	react = react && react.hasOwnProperty('default') ? react['default'] : react;
	reactDom = reactDom && reactDom.hasOwnProperty('default') ? reactDom['default'] : reactDom;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	function __exportStar(m, exports) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}

	function __values(o) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	    if (m) return m.call(o);
	    return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	    result.default = mod;
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault
	});

	var scheduler_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
	if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null;}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0));};g=function(a,b){q=setTimeout(a,b);};h=function(){clearTimeout(q);};k=function(){return !1};l=exports.unstable_forceFrameRate=function(){};}else{var w=window.performance,x=window.Date,
	y=window.setTimeout,z=window.clearTimeout,A=window.requestAnimationFrame,B=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof w&&
	"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var C=x.now();exports.unstable_now=function(){return x.now()-C};}var D=!1,E=null,F=-1,G=5,H=0;k=function(){return exports.unstable_now()>=H};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):G=0<a?Math.floor(1E3/a):33.33;};var I=new MessageChannel,J=I.port2;I.port1.onmessage=
	function(){if(null!==E){var a=exports.unstable_now();H=a+G;try{E(!0,a)?J.postMessage(null):(D=!1,E=null);}catch(b){throw J.postMessage(null),b;}}else D=!1;};f=function(a){E=a;D||(D=!0,J.postMessage(null));};g=function(a,b){F=y(function(){a(exports.unstable_now());},b);};h=function(){z(F);F=-1;};}function K(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<L(e,b))a[d]=b,a[c]=e,c=d;else break a}}function M(a){a=a[0];return void 0===a?null:a}
	function N(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>L(n,c))void 0!==r&&0>L(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>L(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function L(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var O=[],P=[],Q=1,R=null,S=3,T=!1,U=!1,V=!1;
	function W(a){for(var b=M(P);null!==b;){if(null===b.callback)N(P);else if(b.startTime<=a)N(P),b.sortIndex=b.expirationTime,K(O,b);else break;b=M(P);}}function X(a){V=!1;W(a);if(!U)if(null!==M(O))U=!0,f(Y);else{var b=M(P);null!==b&&g(X,b.startTime-a);}}
	function Y(a,b){U=!1;V&&(V=!1,h());T=!0;var c=S;try{W(b);for(R=M(O);null!==R&&(!(R.expirationTime>b)||a&&!k());){var d=R.callback;if(null!==d){R.callback=null;S=R.priorityLevel;var e=d(R.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?R.callback=e:R===M(O)&&N(O);W(b);}else N(O);R=M(O);}if(null!==R)var m=!0;else{var n=M(P);null!==n&&g(X,n.startTime-b);m=!1;}return m}finally{R=null,S=c,T=!1;}}
	function Z(a){switch(a){case 1:return -1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var aa=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=S;S=a;try{return b()}finally{S=c;}};
	exports.unstable_next=function(a){switch(S){case 1:case 2:case 3:var b=3;break;default:b=S;}var c=S;S=b;try{return a()}finally{S=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Z(a);}else c=Z(a),e=d;c=e+c;a={id:Q++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,K(P,a),null===M(O)&&a===M(P)&&(V?h():V=!0,g(X,e-d))):(a.sortIndex=c,K(O,a),U||T||(U=!0,f(Y)));return a};exports.unstable_cancelCallback=function(a){a.callback=null;};
	exports.unstable_wrapCallback=function(a){var b=S;return function(){var c=S;S=b;try{return a.apply(this,arguments)}finally{S=c;}}};exports.unstable_getCurrentPriorityLevel=function(){return S};exports.unstable_shouldYield=function(){var a=exports.unstable_now();W(a);var b=M(O);return b!==R&&null!==R&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<R.expirationTime||k()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){U||T||(U=!0,f(Y));};
	exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M(O)};exports.unstable_Profiling=null;
	});

	unwrapExports(scheduler_production_min);
	var scheduler_production_min_1 = scheduler_production_min.unstable_now;
	var scheduler_production_min_2 = scheduler_production_min.unstable_forceFrameRate;
	var scheduler_production_min_3 = scheduler_production_min.unstable_ImmediatePriority;
	var scheduler_production_min_4 = scheduler_production_min.unstable_UserBlockingPriority;
	var scheduler_production_min_5 = scheduler_production_min.unstable_NormalPriority;
	var scheduler_production_min_6 = scheduler_production_min.unstable_IdlePriority;
	var scheduler_production_min_7 = scheduler_production_min.unstable_LowPriority;
	var scheduler_production_min_8 = scheduler_production_min.unstable_runWithPriority;
	var scheduler_production_min_9 = scheduler_production_min.unstable_next;
	var scheduler_production_min_10 = scheduler_production_min.unstable_scheduleCallback;
	var scheduler_production_min_11 = scheduler_production_min.unstable_cancelCallback;
	var scheduler_production_min_12 = scheduler_production_min.unstable_wrapCallback;
	var scheduler_production_min_13 = scheduler_production_min.unstable_getCurrentPriorityLevel;
	var scheduler_production_min_14 = scheduler_production_min.unstable_shouldYield;
	var scheduler_production_min_15 = scheduler_production_min.unstable_requestPaint;
	var scheduler_production_min_16 = scheduler_production_min.unstable_continueExecution;
	var scheduler_production_min_17 = scheduler_production_min.unstable_pauseExecution;
	var scheduler_production_min_18 = scheduler_production_min.unstable_getFirstCallbackNode;
	var scheduler_production_min_19 = scheduler_production_min.unstable_Profiling;

	var scheduler_development = createCommonjsModule(function (module, exports) {
	});

	unwrapExports(scheduler_development);
	var scheduler_development_1 = scheduler_development.unstable_now;
	var scheduler_development_2 = scheduler_development.unstable_forceFrameRate;
	var scheduler_development_3 = scheduler_development.unstable_ImmediatePriority;
	var scheduler_development_4 = scheduler_development.unstable_UserBlockingPriority;
	var scheduler_development_5 = scheduler_development.unstable_NormalPriority;
	var scheduler_development_6 = scheduler_development.unstable_IdlePriority;
	var scheduler_development_7 = scheduler_development.unstable_LowPriority;
	var scheduler_development_8 = scheduler_development.unstable_runWithPriority;
	var scheduler_development_9 = scheduler_development.unstable_next;
	var scheduler_development_10 = scheduler_development.unstable_scheduleCallback;
	var scheduler_development_11 = scheduler_development.unstable_cancelCallback;
	var scheduler_development_12 = scheduler_development.unstable_wrapCallback;
	var scheduler_development_13 = scheduler_development.unstable_getCurrentPriorityLevel;
	var scheduler_development_14 = scheduler_development.unstable_shouldYield;
	var scheduler_development_15 = scheduler_development.unstable_requestPaint;
	var scheduler_development_16 = scheduler_development.unstable_continueExecution;
	var scheduler_development_17 = scheduler_development.unstable_pauseExecution;
	var scheduler_development_18 = scheduler_development.unstable_getFirstCallbackNode;
	var scheduler_development_19 = scheduler_development.unstable_Profiling;

	var scheduler = createCommonjsModule(function (module) {

	{
	  module.exports = scheduler_production_min;
	}
	});

	var dist = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var doDispose = function (disposable) {
	    if (disposable instanceof Function) {
	        try {
	            disposable();
	        }
	        catch (_error) {
	            /* Proactively catch exceptions thrown in teardown logic. Teardown functions
	             * shouldn't throw, so this is to prevent unexpected exceptions.
	             */
	        }
	    }
	    else {
	        disposable.dispose();
	    }
	};
	var DisposableImpl = /** @class */ (function () {
	    function DisposableImpl() {
	        this._isDisposed = false;
	        this.disposables = [];
	    }
	    Object.defineProperty(DisposableImpl.prototype, "isDisposed", {
	        get: function () {
	            return this._isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DisposableImpl.prototype.add = function () {
	        var disposables = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            disposables[_i] = arguments[_i];
	        }
	        if (this.isDisposed) {
	            for (var _a = 0, disposables_1 = disposables; _a < disposables_1.length; _a++) {
	                var d = disposables_1[_a];
	                doDispose(d);
	            }
	        }
	        else {
	            for (var _b = 0, disposables_2 = disposables; _b < disposables_2.length; _b++) {
	                var d = disposables_2[_b];
	                this.doAdd(d);
	            }
	        }
	    };
	    DisposableImpl.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this._isDisposed = true;
	            for (var _i = 0, _a = this.disposables; _i < _a.length; _i++) {
	                var disposable = _a[_i];
	                doDispose(disposable);
	            }
	            this.disposables.length = 0;
	        }
	    };
	    DisposableImpl.prototype.remove = function () {
	        var disposables = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            disposables[_i] = arguments[_i];
	        }
	        if (!this.isDisposed) {
	            for (var _a = 0, disposables_3 = disposables; _a < disposables_3.length; _a++) {
	                var d = disposables_3[_a];
	                this.doRemove(d);
	            }
	        }
	    };
	    DisposableImpl.prototype.doAdd = function (disposable) {
	        if (this.disposables.indexOf(disposable) < 0) {
	            this.disposables.push(disposable);
	        }
	    };
	    DisposableImpl.prototype.doRemove = function (disposable) {
	        var index = this.disposables.indexOf(disposable);
	        if (index > -1) {
	            var old = this.disposables.splice(index, 1)[0];
	            doDispose(old);
	        }
	    };
	    return DisposableImpl;
	}());
	/**
	 * Creates an empty DisposableLike instance.
	 */
	exports.create = function () { return new DisposableImpl(); };
	/**
	 * A disposed DisposableLike instance.
	 */
	exports.disposed = exports.create();
	exports.disposed.dispose();
	/**
	 * Throws an exception if the given disposable is disposed.
	 *
	 * @param disposable
	 */
	exports.throwIfDisposed = function (disposable) {
	    if (disposable.isDisposed) {
	        throw new Error("Disposed");
	    }
	};

	});

	unwrapExports(dist);
	var dist_1 = dist.create;
	var dist_2 = dist.disposed;
	var dist_3 = dist.throwIfDisposed;

	var dist$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var SerialDisposableImpl = /** @class */ (function () {
	    function SerialDisposableImpl() {
	        this._disposable = dist.disposed;
	        this.delegate = dist.create();
	    }
	    Object.defineProperty(SerialDisposableImpl.prototype, "disposable", {
	        get: function () {
	            return this._disposable;
	        },
	        set: function (newDisposable) {
	            if (this.isDisposed) {
	                newDisposable.dispose();
	            }
	            else {
	                var oldDisposable = this.disposable;
	                this._disposable = newDisposable;
	                if (oldDisposable !== newDisposable) {
	                    this.add(newDisposable);
	                    this.remove(oldDisposable);
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SerialDisposableImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.delegate.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SerialDisposableImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.delegate).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    SerialDisposableImpl.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.disposable.dispose();
	            this.delegate.dispose();
	        }
	    };
	    SerialDisposableImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.delegate).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    return SerialDisposableImpl;
	}());
	/**
	 * Creates a new SerialDisposableLike instance containing a disposed instance.
	 */
	exports.create = function () { return new SerialDisposableImpl(); };

	});

	unwrapExports(dist$1);
	var dist_1$1 = dist$1.create;

	var dist$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var ReactSchedulerImpl = /** @class */ (function () {
	    function ReactSchedulerImpl(priority) {
	        this._inScheduledContinuation = false;
	        this.priority = priority;
	    }
	    Object.defineProperty(ReactSchedulerImpl.prototype, "inScheduledContinuation", {
	        get: function () {
	            return this._inScheduledContinuation;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ReactSchedulerImpl.prototype, "now", {
	        get: function () {
	            return scheduler.unstable_now();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ReactSchedulerImpl.prototype.schedule = function (continuation, delay) {
	        if (delay === void 0) { delay = 0; }
	        var disposable = dist$1.create();
	        var shouldYield = function () {
	            var isDisposed = disposable.isDisposed;
	            return isDisposed || scheduler.unstable_shouldYield();
	        };
	        this.scheduleCallback(disposable, this.createFrameCallback(disposable, shouldYield, continuation, this.priority), delay);
	        return disposable;
	    };
	    ReactSchedulerImpl.prototype.createFrameCallback = function (disposable, shouldYield, continuation, priority) {
	        var _this = this;
	        var continuationCallback = function () {
	            if (disposable.isDisposed) {
	                return;
	            }
	            _this._inScheduledContinuation = true;
	            var result = continuation(shouldYield);
	            _this._inScheduledContinuation = false;
	            if (result === undefined) {
	                disposable.dispose();
	                return;
	            }
	            var resultContinuation = result.continuation, _a = result.delay, delay = _a === void 0 ? 0 : _a;
	            var callback = resultContinuation === continuation
	                ? continuationCallback
	                : _this.createFrameCallback(disposable, shouldYield, continuation, priority);
	            // FIXME: React's scheduler doesn't seem to deal well with abusive sources
	            // that aggressive continue via a returned called, so just explicitly reschedule
	            // work for now.
	            // if (callback === continuationCallback && delay === 0) {
	            //  return callback;
	            // }
	            _this.scheduleCallback(disposable, callback, delay);
	            return;
	        };
	        return continuationCallback;
	    };
	    ReactSchedulerImpl.prototype.scheduleCallback = function (disposable, callback, delay) {
	        var callbackNode = scheduler.unstable_scheduleCallback(this.priority, callback, delay > 0 ? { delay: delay } : undefined);
	        var innerDisposable = dist.create();
	        innerDisposable.add(function () { return scheduler.unstable_cancelCallback(callbackNode); });
	        disposable.disposable = innerDisposable;
	    };
	    return ReactSchedulerImpl;
	}());
	exports.idlePriority = new ReactSchedulerImpl(scheduler.unstable_IdlePriority);
	exports.immediatePriority = new ReactSchedulerImpl(scheduler.unstable_ImmediatePriority);
	exports.normalPriority = new ReactSchedulerImpl(scheduler.unstable_NormalPriority);
	exports.lowPriority = new ReactSchedulerImpl(scheduler.unstable_LowPriority);
	exports.userBlockingPriority = new ReactSchedulerImpl(scheduler.unstable_UserBlockingPriority);

	});

	unwrapExports(dist$2);
	var dist_1$2 = dist$2.idlePriority;
	var dist_2$1 = dist$2.immediatePriority;
	var dist_3$1 = dist$2.normalPriority;
	var dist_4 = dist$2.lowPriority;
	var dist_5 = dist$2.userBlockingPriority;

	var observable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function pipe(source) {
	    var operators = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        operators[_i - 1] = arguments[_i];
	    }
	    return operators.reduce(function (acc, next) { return next(acc); }, source);
	}
	exports.pipe = pipe;

	});

	unwrapExports(observable);
	var observable_1 = observable.pipe;

	var safeObserver = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var SafeObserver = /** @class */ (function () {
	    function SafeObserver(subscriber) {
	        var _this = this;
	        this.isComplete = false;
	        this.nextQueue = [];
	        this.clearQueue = function () {
	            _this.nextQueue.length = 0;
	        };
	        this.drainQueue = function (shouldYield) {
	            while (_this.nextQueue.length > 0) {
	                var next = _this.nextQueue.shift();
	                _this.subscriber.next(next);
	                var yieldRequest = shouldYield();
	                var hasMoreEvents = _this.remainingEvents > 0;
	                if (yieldRequest && hasMoreEvents) {
	                    return _this.continuation;
	                }
	            }
	            if (_this.isComplete) {
	                _this.subscriber.remove(_this.clearQueue);
	                _this.subscriber.complete(_this.error);
	            }
	            return;
	        };
	        this.subscriber = subscriber;
	        this.continuation = {
	            continuation: this.drainQueue,
	        };
	        this.subscriber.add(this.clearQueue);
	    }
	    Object.defineProperty(SafeObserver.prototype, "remainingEvents", {
	        get: function () {
	            return this.nextQueue.length + (this.isComplete ? 1 : 0);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SafeObserver.prototype.complete = function (error) {
	        if (!this.isComplete) {
	            this.isComplete = true;
	            this.error = error;
	            this.scheduleDrainQueue();
	        }
	    };
	    SafeObserver.prototype.next = function (data) {
	        if (!this.isComplete) {
	            this.nextQueue.push(data);
	            this.scheduleDrainQueue();
	        }
	    };
	    SafeObserver.prototype.scheduleDrainQueue = function () {
	        if (this.remainingEvents === 1) {
	            this.subscriber.schedule(this.drainQueue);
	        }
	    };
	    return SafeObserver;
	}());
	/**
	 * Returns an observer that may be safely notified from any context.
	 * The underlying implementation queues notifications and notifies
	 * the subscriber on it's scheduler.
	 *
	 * @param subscriber
	 */
	exports.toSafeObserver = function (subscriber) { return new SafeObserver(subscriber); };

	});

	unwrapExports(safeObserver);
	var safeObserver_1 = safeObserver.toSafeObserver;

	var subscriber = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/** @ignore */
	var AbstractSubscriberImpl = /** @class */ (function () {
	    function AbstractSubscriberImpl(scheduler, subscription) {
	        this.scheduler = scheduler;
	        this.subscription = subscription;
	    }
	    Object.defineProperty(AbstractSubscriberImpl.prototype, "inScheduledContinuation", {
	        get: function () {
	            return this.scheduler.inScheduledContinuation;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractSubscriberImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.subscription.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractSubscriberImpl.prototype, "now", {
	        get: function () {
	            return this.scheduler.now;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractSubscriberImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.subscription).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AbstractSubscriberImpl.prototype.dispose = function () {
	        this.subscription.dispose();
	    };
	    AbstractSubscriberImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.subscription).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AbstractSubscriberImpl.prototype.schedule = function (continuation, delay) {
	        var _this = this;
	        var schedulerSubscription = this.scheduler.schedule(continuation, delay);
	        this.add(schedulerSubscription);
	        schedulerSubscription.add(function () { return _this.remove(schedulerSubscription); });
	        return schedulerSubscription;
	    };
	    return AbstractSubscriberImpl;
	}());
	exports.AbstractSubscriberImpl = AbstractSubscriberImpl;
	/** @ignore */
	exports.checkState = function (subscriber) {
	    if (!subscriber.inScheduledContinuation) {
	        throw new Error("Attempted to notify subscriber from outside of it's scheduler");
	    }
	    else if (!subscriber.isConnected) {
	        throw new Error("Attempted to notify subscriber before it is connected");
	    }
	};

	});

	unwrapExports(subscriber);
	var subscriber_1 = subscriber.AbstractSubscriberImpl;
	var subscriber_2 = subscriber.checkState;

	var autoDisposingSubscriber = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var AutoDisposingSubscriberImpl = /** @class */ (function (_super) {
	    tslib_es6.__extends(AutoDisposingSubscriberImpl, _super);
	    function AutoDisposingSubscriberImpl(scheduler, subscription) {
	        var _this = _super.call(this, scheduler, subscription) || this;
	        _this._isConnected = false;
	        return _this;
	    }
	    Object.defineProperty(AutoDisposingSubscriberImpl.prototype, "isConnected", {
	        get: function () {
	            return this._isConnected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AutoDisposingSubscriberImpl.prototype.complete = function (_error) {
	        this.dispose();
	    };
	    AutoDisposingSubscriberImpl.prototype.connect = function () {
	        this._isConnected = true;
	    };
	    AutoDisposingSubscriberImpl.prototype.next = function (data) {
	    };
	    return AutoDisposingSubscriberImpl;
	}(subscriber.AbstractSubscriberImpl));
	/**
	 * Returns a new subscriber which disposes it's underlying subscription when completed.
	 *
	 * @param scheduler
	 * @param subscription
	 */
	exports.createAutoDisposing = function (scheduler, subscription) {
	    return new AutoDisposingSubscriberImpl(scheduler, subscription);
	};

	});

	unwrapExports(autoDisposingSubscriber);
	var autoDisposingSubscriber_1 = autoDisposingSubscriber.createAutoDisposing;

	var delegatingSubscriber = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var getSubscriberScheduler = function (delegate) { return delegate.scheduler || delegate; };
	var getSubscriberSubscription = function (delegate) { return delegate.subscription || delegate; };
	/**
	 * Abstract base class for implementing SubscriberOperators.
	 *
	 * @noInheritDoc
	 */
	var DelegatingSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(DelegatingSubscriber, _super);
	    function DelegatingSubscriber(delegate) {
	        var _this = _super.call(this, getSubscriberScheduler(delegate), getSubscriberSubscription(delegate)) || this;
	        _this.isStopped = false;
	        _this.delegate = delegate;
	        _this.source =
	            delegate instanceof DelegatingSubscriber ? delegate.source : delegate;
	        _this.add(function () {
	            _this.isStopped = true;
	        });
	        return _this;
	    }
	    Object.defineProperty(DelegatingSubscriber.prototype, "isConnected", {
	        /** @ignore */
	        get: function () {
	            return this.source.isConnected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @ignore */
	    DelegatingSubscriber.prototype.complete = function (error) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this.tryOnComplete(error);
	        }
	    };
	    /** @ignore */
	    DelegatingSubscriber.prototype.next = function (data) {
	        if (!this.isStopped) {
	            this.tryOnNext(data);
	        }
	    };
	    DelegatingSubscriber.prototype.tryOnComplete = function (error) {
	        try {
	            this.onComplete(error);
	        }
	        catch (e) {
	            // FIXME: if error isn't null the delegate error should
	            // reference both exceptions so that we don't swallow them.
	            this.delegate.complete(e);
	        }
	    };
	    DelegatingSubscriber.prototype.tryOnNext = function (data) {
	        try {
	            this.onNext(data);
	        }
	        catch (e) {
	            this.complete(e);
	        }
	    };
	    return DelegatingSubscriber;
	}(subscriber.AbstractSubscriberImpl));
	exports.DelegatingSubscriber = DelegatingSubscriber;

	});

	unwrapExports(delegatingSubscriber);
	var delegatingSubscriber_1 = delegatingSubscriber.DelegatingSubscriber;

	var pipe_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	function pipe(subscriber) {
	    var operators = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        operators[_i - 1] = arguments[_i];
	    }
	    return operators.reduceRight(function (acc, next) { return next(acc); }, subscriber);
	}
	exports.pipe = pipe;

	});

	unwrapExports(pipe_1);
	var pipe_2 = pipe_1.pipe;

	var dist$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.toSafeObserver = safeObserver.toSafeObserver;

	exports.createAutoDisposing = autoDisposingSubscriber.createAutoDisposing;

	exports.DelegatingSubscriber = delegatingSubscriber.DelegatingSubscriber;

	exports.pipe = pipe_1.pipe;

	});

	unwrapExports(dist$3);
	var dist_1$3 = dist$3.toSafeObserver;
	var dist_2$2 = dist$3.createAutoDisposing;
	var dist_3$2 = dist$3.DelegatingSubscriber;
	var dist_4$1 = dist$3.pipe;

	var connect = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * Safely connects an ObservableLike to a SubscriberLike,
	 * using the provided scheduler. The returned DisposableLike
	 * may used to cancel the subscription.
	 */
	exports.connect = function (observable, scheduler) {
	    var subscription = dist.create();
	    var subscriber = dist$3.createAutoDisposing(scheduler, subscription);
	    observable.subscribe(subscriber);
	    subscriber.connect();
	    return subscription;
	};

	});

	unwrapExports(connect);
	var connect_1 = connect.connect;

	var create = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * Factory for safely creating new ObservableLikes. The onSubscribe function
	 * is called with an observer which may be notified from any context,
	 * queueing notifications for notification on the underlying SubscriberLike's
	 * scheduler. The onSubscribe function may return a DisposableOrTeardown instance
	 * which will be disposed when the underlying subscription is disposed.
	 *
	 * Note, implementations should not do significant blocking work in
	 * the onSubscribe function.
	 *
	 * @param onSubscribe
	 */
	exports.create = function (onSubscribe) {
	    var subscribe = function (subscriber) {
	        // The idea here is that an onSubscribe function may
	        // call onNext from unscheduled sources such as event handlers.
	        // So we marshall those events back to the scheduler.
	        var observer = dist$3.toSafeObserver(subscriber);
	        try {
	            var onSubscribeSubscription = onSubscribe(observer);
	            if (onSubscribeSubscription !== undefined) {
	                subscriber.add(onSubscribeSubscription);
	            }
	        }
	        catch (error) {
	            observer.complete(error);
	        }
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(create);
	var create_1 = create.create;

	var lift = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var LiftedObservable = /** @class */ (function () {
	    function LiftedObservable(source, operators) {
	        this.source = source;
	        this.operators = operators;
	    }
	    LiftedObservable.prototype.subscribe = function (subscriber) {
	        var liftedSubscrber = dist$3.pipe.apply(undefined, tslib_es6.__spreadArrays([
	            subscriber
	        ], this.operators));
	        this.source.subscribe(liftedSubscrber);
	    };
	    return LiftedObservable;
	}());
	/**
	 * Converts a SubscriberOperator to an ObservableOperator.
	 * @param operator
	 */
	exports.lift = function (operator) { return function (source) {
	    var sourceSource = source instanceof LiftedObservable ? source.source : source;
	    var allOperators = source instanceof LiftedObservable
	        ? tslib_es6.__spreadArrays(source.operators, [operator]) : [operator];
	    return new LiftedObservable(sourceSource, allOperators);
	}; };

	});

	unwrapExports(lift);
	var lift_1 = lift.lift;

	var observe = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var ObserveSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(ObserveSubscriber, _super);
	    function ObserveSubscriber(delegate, observer) {
	        var _this = _super.call(this, delegate) || this;
	        _this.observer = observer;
	        return _this;
	    }
	    ObserveSubscriber.prototype.onComplete = function (error) {
	        this.observer.complete(error);
	        this.delegate.complete(error);
	    };
	    ObserveSubscriber.prototype.onNext = function (data) {
	        this.observer.next(data);
	        this.delegate.next(data);
	    };
	    return ObserveSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (observer) { return function (subscriber) {
	    return new ObserveSubscriber(subscriber, observer);
	}; };
	/**
	 * Returns a ObservableOperator which forwards notifications to the provided observer.
	 *
	 * @param observer
	 */
	exports.observe = function (observer) { return lift.lift(operator(observer)); };
	var ignore = function (data) { };
	exports.onComplete = function (onComplete) {
	    return exports.observe({
	        next: ignore,
	        complete: onComplete,
	    });
	};
	exports.onError = function (onError) {
	    return exports.observe({
	        next: ignore,
	        complete: function (error) {
	            if (error !== undefined) {
	                onError(error);
	            }
	        },
	    });
	};
	exports.onNext = function (onNext) {
	    return exports.observe({
	        next: onNext,
	        complete: ignore,
	    });
	};

	});

	unwrapExports(observe);
	var observe_1 = observe.observe;
	var observe_2 = observe.onComplete;
	var observe_3 = observe.onError;
	var observe_4 = observe.onNext;

	var combineLatest_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var CombineLatestObserver = /** @class */ (function () {
	    function CombineLatestObserver(delegate, totalCount, allSubscriptions, ctx, index) {
	        this.innerSubscription = dist.disposed;
	        this.hasProducedValue = false;
	        this.delegate = delegate;
	        this.totalCount = totalCount;
	        this.allSubscriptions = allSubscriptions;
	        this.ctx = ctx;
	        this.index = index;
	    }
	    CombineLatestObserver.prototype.complete = function (error) {
	        this.ctx.completedCount++;
	        if (error !== undefined || this.ctx.completedCount === this.totalCount) {
	            this.delegate.remove(this.allSubscriptions);
	            this.delegate.complete(error);
	        }
	        else {
	            this.allSubscriptions.remove(this.innerSubscription);
	        }
	    };
	    CombineLatestObserver.prototype.next = function (data) {
	        if (!this.hasProducedValue) {
	            this.ctx.producedCount++;
	        }
	        this.hasProducedValue = true;
	        this.ctx.latest[this.index] = data;
	        if (this.ctx.producedCount === this.totalCount) {
	            var latest = tslib_es6.__spreadArrays(this.ctx.latest);
	            this.delegate.next(latest);
	        }
	    };
	    return CombineLatestObserver;
	}());
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i] = arguments[_i];
	    }
	    var subscribe = function (subscriber) {
	        var ctx = {
	            completedCount: 0,
	            producedCount: 0,
	            latest: new Array(observables.length),
	        };
	        var allSubscriptions = dist.create();
	        subscriber.add(allSubscriptions);
	        for (var index = 0; index < observables.length; index++) {
	            var observer = new CombineLatestObserver(subscriber, observables.length, allSubscriptions, ctx, index);
	            observer.innerSubscription = connect.connect(observable.pipe(observables[index], observe.observe(observer)), subscriber);
	            allSubscriptions.add(observer.innerSubscription);
	        }
	    };
	    return { subscribe: subscribe };
	}
	exports.combineLatest = combineLatest;

	});

	unwrapExports(combineLatest_1);
	var combineLatest_2 = combineLatest_1.combineLatest;

	var fromArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.fromArray = function (values, delay) {
	    if (delay === void 0) { delay = 0; }
	    var subscribe = function (subscriber) {
	        var index = 0;
	        var continuationResult;
	        var continuation = function (shouldYield) {
	            if (index < values.length && delay > 0) {
	                var value = values[index];
	                index++;
	                subscriber.next(value);
	                return continuationResult;
	            }
	            else {
	                while (index < values.length) {
	                    var value = values[index];
	                    index++;
	                    subscriber.next(value);
	                    if (shouldYield()) {
	                        return continuationResult;
	                    }
	                }
	                subscriber.complete();
	                return;
	            }
	        };
	        continuationResult = { continuation: continuation, delay: delay };
	        subscriber.schedule(continuation, delay);
	    };
	    return { subscribe: subscribe };
	};
	exports.empty = function (delay) {
	    return exports.fromArray([], delay);
	};
	exports.ofValue = function (value, delay) {
	    return exports.fromArray([value], delay);
	};
	exports.fromScheduledValues = function (value) {
	    var values = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        values[_i - 1] = arguments[_i];
	    }
	    var delayedValues = tslib_es6.__spreadArrays([value], values);
	    var subscribe = function (subscriber) {
	        var index = 0;
	        var continuation = function (shouldYield) {
	            while (index < delayedValues.length) {
	                var _a = delayedValues[index], _d = _a[0], value_1 = _a[1];
	                index++;
	                subscriber.next(value_1);
	                if (index < delayedValues.length) {
	                    var delay_1 = delayedValues[index][0] || 0;
	                    var priority = delayedValues[index][1];
	                    if (delay_1 > 0) {
	                        return { continuation: continuation, delay: delay_1, priority: priority };
	                    }
	                    else if (shouldYield()) {
	                        return { continuation: continuation, delay: 0, priority: priority };
	                    }
	                }
	            }
	            subscriber.complete();
	            return;
	        };
	        var _a = delayedValues[index], delay = _a[0], _ = _a[1];
	        subscriber.schedule(continuation, delay);
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(fromArray);
	var fromArray_1 = fromArray.fromArray;
	var fromArray_2 = fromArray.empty;
	var fromArray_3 = fromArray.ofValue;
	var fromArray_4 = fromArray.fromScheduledValues;

	var concat_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i] = arguments[_i];
	    }
	    var subscribe = function (subscriber) {
	        var queue = tslib_es6.__spreadArrays(observables);
	        var innerSubscription = dist.disposed;
	        var subscribeNext = function () {
	            var head = queue.shift();
	            if (head !== undefined) {
	                innerSubscription = connect.connect(observable.pipe(head, observe.observe(observer)), subscriber);
	                subscriber.add(innerSubscription);
	            }
	            return head !== undefined;
	        };
	        var next = function (v) { return subscriber.next(v); };
	        var complete = function (error) {
	            subscriber.remove(innerSubscription);
	            if (error !== undefined) {
	                subscriber.complete(error);
	            }
	            else if (!subscribeNext()) {
	                subscriber.complete();
	            }
	        };
	        var observer = { next: next, complete: complete };
	        subscribeNext();
	    };
	    return { subscribe: subscribe };
	}
	exports.concat = concat;
	function startWith() {
	    var values = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        values[_i] = arguments[_i];
	    }
	    return function (obs2) { return concat(fromArray.fromArray(values), obs2); };
	}
	exports.startWith = startWith;

	});

	unwrapExports(concat_1);
	var concat_2 = concat_1.concat;
	var concat_3 = concat_1.startWith;

	var distinctUntilChanged = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var DistinctUntilChangedSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(delegate, equals) {
	        var _this = _super.call(this, delegate) || this;
	        _this.equals = equals;
	        return _this;
	    }
	    DistinctUntilChangedSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    DistinctUntilChangedSubscriber.prototype.onNext = function (data) {
	        var shouldEmit = this.prev === undefined || !this.equals(this.prev[0], data);
	        if (shouldEmit) {
	            if (this.prev === undefined) {
	                this.prev = [data];
	            }
	            else {
	                this.prev[0] = data;
	            }
	            this.delegate.next(data);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(dist$3.DelegatingSubscriber));
	var referenceEquality = function (a, b) { return a === b; };
	var operator = function (equals) {
	    if (equals === void 0) { equals = referenceEquality; }
	    return function (subscriber) {
	        return new DistinctUntilChangedSubscriber(subscriber, equals);
	    };
	};
	exports.distinctUntilChanged = function (equals) { return lift.lift(operator(equals)); };

	});

	unwrapExports(distinctUntilChanged);
	var distinctUntilChanged_1 = distinctUntilChanged.distinctUntilChanged;

	var promise = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	exports.fromPromiseFactory = function (factory) {
	    var doSubscribe = function (observer) { return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
	        var result, error_1;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    _a.trys.push([0, 2, , 3]);
	                    return [4 /*yield*/, factory()];
	                case 1:
	                    result = _a.sent();
	                    observer.next(result);
	                    observer.complete();
	                    return [3 /*break*/, 3];
	                case 2:
	                    error_1 = _a.sent();
	                    observer.complete(error_1);
	                    return [3 /*break*/, 3];
	                case 3: return [2 /*return*/];
	            }
	        });
	    }); };
	    var onSubscribe = function (observer) {
	        doSubscribe(observer);
	    };
	    return create.create(onSubscribe);
	};
	exports.toPromise = function (observable$1, scheduler) {
	    return new Promise(function (resolve, reject) {
	        var result = undefined;
	        var subscription = connect.connect(observable.pipe(observable$1, observe.observe({
	            next: function (v) {
	                result = v;
	            },
	            complete: function (err) {
	                subscription.dispose();
	                if (err !== undefined) {
	                    reject(err);
	                }
	                else if (result === undefined) {
	                    reject(new Error("Observable completed without producing a value"));
	                }
	                else {
	                    resolve(result);
	                }
	            },
	        })), scheduler);
	    });
	};

	});

	unwrapExports(promise);
	var promise_1 = promise.fromPromiseFactory;
	var promise_2 = promise.toPromise;

	var generate = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.generate = function (generator, initialValue, delay) {
	    if (delay === void 0) { delay = 0; }
	    var subscribe = function (subscriber) {
	        var acc = initialValue;
	        var continuationResult;
	        var continuation = function (shouldYield) {
	            if (subscriber.isDisposed) {
	                return;
	            }
	            else if (delay > 0) {
	                try {
	                    acc = generator(acc);
	                }
	                catch (error) {
	                    subscriber.complete(error);
	                    return;
	                }
	                subscriber.next(acc);
	                return continuationResult;
	            }
	            else {
	                while (true) {
	                    try {
	                        acc = generator(acc);
	                    }
	                    catch (error) {
	                        subscriber.complete(error);
	                        return;
	                    }
	                    subscriber.next(acc);
	                    if (shouldYield()) {
	                        return continuationResult;
	                    }
	                }
	            }
	        };
	        continuationResult = { continuation: continuation, delay: delay };
	        subscriber.schedule(continuation, delay);
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(generate);
	var generate_1 = generate.generate;

	var ignoreElements = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var IgnoreElementsSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber(delegate) {
	        return _super.call(this, delegate) || this;
	    }
	    IgnoreElementsSubscriber.prototype.onNext = function (_) { };
	    IgnoreElementsSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    return IgnoreElementsSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (subscriber) {
	    return new IgnoreElementsSubscriber(subscriber);
	};
	exports.ignoreElements = function () {
	    return lift.lift(operator);
	};

	});

	unwrapExports(ignoreElements);
	var ignoreElements_1 = ignoreElements.ignoreElements;

	var keep = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var KeepSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(KeepSubscriber, _super);
	    function KeepSubscriber(delegate, predicate) {
	        var _this = _super.call(this, delegate) || this;
	        _this.predicate = predicate;
	        return _this;
	    }
	    KeepSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    KeepSubscriber.prototype.onNext = function (data) {
	        var shouldKeep = this.predicate(data);
	        if (shouldKeep) {
	            this.delegate.next(data);
	        }
	    };
	    return KeepSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (predicate) { return function (subscriber) {
	    return new KeepSubscriber(subscriber, predicate);
	}; };
	exports.keep = function (predicate) { return lift.lift(operator(predicate)); };

	});

	unwrapExports(keep);
	var keep_1 = keep.keep;

	var map = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var MapSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(MapSubscriber, _super);
	    function MapSubscriber(delegate, mapper) {
	        var _this = _super.call(this, delegate) || this;
	        _this.mapper = mapper;
	        return _this;
	    }
	    MapSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    MapSubscriber.prototype.onNext = function (data) {
	        var mappedData = this.mapper(data);
	        this.delegate.next(mappedData);
	    };
	    return MapSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (mapper) { return function (subscriber) {
	    return new MapSubscriber(subscriber, mapper);
	}; };
	exports.map = function (mapper) { return lift.lift(operator(mapper)); };

	});

	unwrapExports(map);
	var map_1 = map.map;

	var merge_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	var MergeObserver = /** @class */ (function () {
	    function MergeObserver(delegate, totalCount, completedCountRef, allSubscriptions) {
	        this.innerSubscription = dist.disposed;
	        this.delegate = delegate;
	        this.totalCount = totalCount;
	        this.completedCountRef = completedCountRef;
	        this.allSubscriptions = allSubscriptions;
	    }
	    MergeObserver.prototype.complete = function (error) {
	        this.completedCountRef[0]++;
	        if (error !== undefined || this.completedCountRef[0] === this.totalCount) {
	            this.delegate.remove(this.allSubscriptions);
	            this.delegate.complete(error);
	        }
	        else {
	            this.allSubscriptions.remove(this.innerSubscription);
	        }
	    };
	    MergeObserver.prototype.next = function (data) {
	        this.delegate.next(data);
	    };
	    return MergeObserver;
	}());
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i] = arguments[_i];
	    }
	    var subscribe = function (subscriber) {
	        var completedCountRef = [0];
	        var allSubscriptions = dist.create();
	        subscriber.add(allSubscriptions);
	        for (var _i = 0, observables_1 = observables; _i < observables_1.length; _i++) {
	            var observable$1 = observables_1[_i];
	            var observer = new MergeObserver(subscriber, observables.length, completedCountRef, allSubscriptions);
	            observer.innerSubscription = connect.connect(observable.pipe(observable$1, observe.observe(observer)), subscriber);
	            allSubscriptions.add(observer.innerSubscription);
	        }
	    };
	    return { subscribe: subscribe };
	}
	exports.merge = merge;

	});

	unwrapExports(merge_1);
	var merge_2 = merge_1.merge;

	var mergeAll = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	var MergeSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(MergeSubscriber, _super);
	    function MergeSubscriber(delegate, maxBufferSize, maxConcurrency) {
	        var _this = _super.call(this, delegate) || this;
	        _this.activeCount = 0;
	        _this.isCompleted = false;
	        _this.queue = [];
	        _this.maxBufferSize = maxBufferSize;
	        _this.maxConcurrency = maxConcurrency;
	        _this.add(function () {
	            _this.queue.length = 0;
	        });
	        return _this;
	    }
	    MergeSubscriber.prototype.onComplete = function (error) {
	        this.isCompleted = true;
	        if (error !== undefined || this.queue.length + this.activeCount === 0) {
	            this.delegate.complete(error);
	        }
	    };
	    MergeSubscriber.prototype.onNext = function (next) {
	        if (this.queue.length + this.activeCount < this.maxBufferSize &&
	            !this.isCompleted) {
	            this.queue.push(next);
	            this.connectNext();
	        }
	    };
	    MergeSubscriber.prototype.connectNext = function () {
	        var _this = this;
	        if (this.activeCount < this.maxConcurrency) {
	            var nextObs = this.queue.shift();
	            if (nextObs !== undefined) {
	                this.activeCount++;
	                var nextObsSubscription_1 = connect.connect(observable.pipe(nextObs, observe.observe({
	                    next: function (data) {
	                        _this.delegate.next(data);
	                    },
	                    complete: function (error) {
	                        _this.activeCount--;
	                        _this.remove(nextObsSubscription_1);
	                        if (error !== undefined) {
	                            _this.isCompleted = true;
	                            _this.delegate.complete(error);
	                        }
	                        else {
	                            _this.connectNext();
	                        }
	                    },
	                })), this);
	                this.add(nextObsSubscription_1);
	            }
	            else if (this.isCompleted) {
	                this.delegate.complete();
	            }
	        }
	    };
	    return MergeSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (options) {
	    if (options === void 0) { options = {}; }
	    var _a = options.maxBufferSize, maxBufferSize = _a === void 0 ? Number.MAX_SAFE_INTEGER : _a, _b = options.maxConcurrency, maxConcurrency = _b === void 0 ? Number.MAX_SAFE_INTEGER : _b;
	    return function (subscriber) {
	        return new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);
	    };
	};
	exports.mergeAll = function (options) { return lift.lift(operator(options)); };
	exports.concatAll = function (maxBufferSize) {
	    if (maxBufferSize === void 0) { maxBufferSize = Number.MAX_SAFE_INTEGER; }
	    return exports.mergeAll({ maxBufferSize: maxBufferSize, maxConcurrency: 1 });
	};
	exports.exhaust = function () {
	    return exports.mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
	};

	});

	unwrapExports(mergeAll);
	var mergeAll_1 = mergeAll.mergeAll;
	var mergeAll_2 = mergeAll.concatAll;
	var mergeAll_3 = mergeAll.exhaust;

	var never = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var NeverObservable = /** @class */ (function () {
	    function NeverObservable() {
	    }
	    NeverObservable.prototype.subscribe = function (_) { };
	    return NeverObservable;
	}());
	var neverInstance = new NeverObservable();
	exports.never = function () { return neverInstance; };

	});

	unwrapExports(never);
	var never_1 = never.never;

	var repeat = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });







	var RepeatSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(delegate, observable, shouldRepeat) {
	        var _this = _super.call(this, delegate) || this;
	        _this.observable = observable;
	        _this.shouldRepeat = shouldRepeat;
	        _this.innerSubscription = dist$1.create();
	        _this.add(_this.innerSubscription);
	        _this.observer = new RepeatSubscriber.RepeatObserver(_this);
	        return _this;
	    }
	    RepeatSubscriber.prototype.onComplete = function (error) {
	        this.observer.complete(error);
	    };
	    RepeatSubscriber.prototype.onNext = function (data) {
	        this.observer.next(data);
	    };
	    RepeatSubscriber.RepeatObserver = /** @class */ (function () {
	        function class_1(parent) {
	            this.parent = parent;
	        }
	        class_1.prototype.complete = function (error) {
	            var shouldComplete = false;
	            try {
	                shouldComplete = !this.parent.shouldRepeat(error);
	            }
	            catch (repeatError) {
	                shouldComplete = true;
	                // FIXME: Add a custom error type that includes the error that
	                // caused should repeat to fail
	                // see: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example
	                error = repeatError;
	            }
	            if (shouldComplete) {
	                this.parent.delegate.complete(error);
	                this.parent.remove(this.parent.innerSubscription);
	            }
	            else {
	                this.setupSubscription();
	            }
	        };
	        class_1.prototype.next = function (data) {
	            this.parent.delegate.next(data);
	        };
	        class_1.prototype.setupSubscription = function () {
	            var alreadyDisposed = this.parent.innerSubscription.isDisposed;
	            if (alreadyDisposed) {
	                return;
	            }
	            this.parent.innerSubscription.disposable.dispose();
	            this.parent.innerSubscription.disposable = connect.connect(observable.pipe(this.parent.observable, observe.observe(this.parent.observer)), this.parent);
	        };
	        return class_1;
	    }());
	    return RepeatSubscriber;
	}(dist$3.DelegatingSubscriber));
	var repeatOperator = function (observable, shouldRepeat) { return function (subscriber) {
	    return new RepeatSubscriber(subscriber, observable, shouldRepeat);
	}; };
	var alwaysTrue = function () { return true; };
	var defaultRepeatPredicate = function (error) { return error === undefined; };
	exports.repeat = function (predicate) {
	    if (predicate === void 0) { predicate = alwaysTrue; }
	    var repeatPredicate = predicate === alwaysTrue
	        ? defaultRepeatPredicate
	        : function (error) { return error === undefined && predicate(); };
	    return function (obs) { return lift.lift(repeatOperator(obs, repeatPredicate))(obs); };
	};
	var alwaysTrue1 = function (_) { return true; };
	var defaultRetryPredicate = function (error) { return error !== undefined; };
	exports.retry = function (predicate) {
	    if (predicate === void 0) { predicate = alwaysTrue1; }
	    var retryPredicate = predicate === alwaysTrue1
	        ? defaultRetryPredicate
	        : function (error) { return error !== undefined && predicate(error); };
	    return function (obs) { return lift.lift(repeatOperator(obs, retryPredicate))(obs); };
	};

	});

	unwrapExports(repeat);
	var repeat_1 = repeat.repeat;
	var repeat_2 = repeat.retry;

	var scan = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var ScanSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(ScanSubscriber, _super);
	    function ScanSubscriber(delegate, scanner, initialValue) {
	        var _this = _super.call(this, delegate) || this;
	        _this.scanner = scanner;
	        _this.acc = initialValue;
	        return _this;
	    }
	    ScanSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    ScanSubscriber.prototype.onNext = function (next) {
	        var prevAcc = this.acc;
	        var nextAcc = this.scanner(prevAcc, next);
	        this.acc = nextAcc;
	        this.delegate.next(nextAcc);
	    };
	    return ScanSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (scanner, initialValue) { return function (subscriber) {
	    return new ScanSubscriber(subscriber, scanner, initialValue);
	}; };
	exports.scan = function (scanner, initialValue) { return lift.lift(operator(scanner, initialValue)); };

	});

	unwrapExports(scan);
	var scan_1 = scan.scan;

	var _switch = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });








	var SwitchSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(delegate) {
	        var _this = _super.call(this, delegate) || this;
	        _this.innerSubscription = dist$1.create();
	        _this.add(_this.innerSubscription);
	        return _this;
	    }
	    SwitchSubscriber.prototype.onComplete = function (error) {
	        this.remove(this.innerSubscription);
	        this.delegate.complete(error);
	    };
	    SwitchSubscriber.prototype.onNext = function (data) {
	        this.innerSubscription.disposable = dist.disposed;
	        this.innerSubscription.disposable = connect.connect(observable.pipe(data, observe.observe(new SwitchSubscriber.InnerObserver(this))), this);
	    };
	    SwitchSubscriber.InnerObserver = /** @class */ (function () {
	        function class_1(parent) {
	            this.parent = parent;
	        }
	        class_1.prototype.complete = function (error) {
	            if (error !== undefined) {
	                this.parent.complete(error);
	            }
	        };
	        class_1.prototype.next = function (data) {
	            this.parent.delegate.next(data);
	        };
	        return class_1;
	    }());
	    return SwitchSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (subscriber) {
	    return new SwitchSubscriber(subscriber);
	};
	exports.switchAll = function () {
	    return lift.lift(operator);
	};

	});

	unwrapExports(_switch);
	var _switch_1 = _switch.switchAll;

	var take = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var TakeSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(TakeSubscriber, _super);
	    function TakeSubscriber(delegate, maxCount) {
	        var _this = _super.call(this, delegate) || this;
	        _this.count = -1;
	        _this.maxCount = maxCount;
	        return _this;
	    }
	    TakeSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    TakeSubscriber.prototype.onNext = function (data) {
	        this.count++;
	        if (this.count < this.maxCount) {
	            this.delegate.next(data);
	        }
	        else if (this.count === this.maxCount) {
	            this.delegate.complete();
	        }
	    };
	    return TakeSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (count) { return function (subscriber) {
	    return new TakeSubscriber(subscriber, count);
	}; };
	exports.take = function (count) {
	    return lift.lift(operator(count));
	};

	});

	unwrapExports(take);
	var take_1 = take.take;

	var takeLast = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var TakeLastSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(TakeLastSubscriber, _super);
	    function TakeLastSubscriber(delegate, maxCount) {
	        var _this = _super.call(this, delegate) || this;
	        _this.last = [];
	        _this.drainQueue = function (shouldYield) {
	            while (_this.last.length > 0) {
	                var next = _this.last.shift();
	                _this.delegate.next(next);
	                var yieldRequest = shouldYield();
	                var hasMoreEvents = _this.last.length > 0;
	                if (yieldRequest && hasMoreEvents) {
	                    return _this.continuation;
	                }
	            }
	            _this.delegate.complete();
	            return;
	        };
	        _this.maxCount = maxCount;
	        _this.continuation = {
	            continuation: _this.drainQueue,
	        };
	        return _this;
	    }
	    TakeLastSubscriber.prototype.onComplete = function (error) {
	        if (error !== undefined) {
	            this.delegate.complete(error);
	        }
	        else {
	            this.schedule(this.drainQueue);
	        }
	    };
	    TakeLastSubscriber.prototype.onNext = function (data) {
	        this.last.push(data);
	        if (this.last.length > this.maxCount) {
	            this.last.shift();
	        }
	    };
	    return TakeLastSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (count) { return function (subscriber) {
	    return new TakeLastSubscriber(subscriber, count);
	}; };
	exports.takeLast = function (count) {
	    return lift.lift(operator(count));
	};

	});

	unwrapExports(takeLast);
	var takeLast_1 = takeLast.takeLast;

	var throws_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.throws = function (error, delay) {
	    var subscribe = function (subscriber) {
	        var continuation = function (_) {
	            subscriber.complete(error);
	        };
	        subscriber.schedule(continuation, delay);
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(throws_1);

	var withLatestFrom = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	var WithLatestFromSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(delegate, other, selector) {
	        var _this = _super.call(this, delegate) || this;
	        _this.selector = selector;
	        _this.otherSubscription = connect.connect(observable.pipe(other, observe.observe(new WithLatestFromSubscriber.InnerObserver(_this))), _this);
	        _this.add(_this.otherSubscription);
	        return _this;
	    }
	    WithLatestFromSubscriber.prototype.onComplete = function (error) {
	        this.remove(this.otherSubscription);
	        this.delegate.complete(error);
	    };
	    WithLatestFromSubscriber.prototype.onNext = function (data) {
	        if (this.otherLatest !== undefined) {
	            var otherLatest = this.otherLatest[0];
	            var result = this.selector(data, otherLatest);
	            this.delegate.next(result);
	        }
	    };
	    WithLatestFromSubscriber.InnerObserver = /** @class */ (function () {
	        function class_1(parent) {
	            this.parent = parent;
	        }
	        class_1.prototype.complete = function (error) {
	            if (error !== undefined) {
	                this.parent.complete(error);
	            }
	        };
	        class_1.prototype.next = function (data) {
	            if (this.parent.otherLatest === undefined) {
	                this.parent.otherLatest = [data];
	            }
	            else {
	                this.parent.otherLatest[0] = data;
	            }
	        };
	        return class_1;
	    }());
	    return WithLatestFromSubscriber;
	}(dist$3.DelegatingSubscriber));
	var operator = function (other, selector) { return function (subscriber) {
	    return new WithLatestFromSubscriber(subscriber, other, selector);
	}; };
	exports.withLatestFrom = function (other, selector) { return lift.lift(operator(other, selector)); };

	});

	unwrapExports(withLatestFrom);
	var withLatestFrom_1 = withLatestFrom.withLatestFrom;

	var subscribeOn = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	exports.subscribeOn = function (observable$1, scheduler) {
	    var subscribe = function (subscriber) {
	        var observer = dist$3.toSafeObserver(subscriber);
	        var innerSubscription = connect.connect(observable.pipe(observable$1, observe.observe(observer)), scheduler);
	        subscriber.add(innerSubscription);
	        innerSubscription.add(function () { return subscriber.remove(innerSubscription); });
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(subscribeOn);
	var subscribeOn_1 = subscribeOn.subscribeOn;

	var dist$4 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.pipe = observable.pipe;

	exports.connect = connect.connect;

	exports.create = create.create;

	exports.lift = lift.lift;

	exports.observe = observe.observe;
	exports.onComplete = observe.onComplete;
	exports.onError = observe.onError;
	exports.onNext = observe.onNext;

	exports.combineLatest = combineLatest_1.combineLatest;

	exports.concat = concat_1.concat;
	exports.startWith = concat_1.startWith;

	exports.distinctUntilChanged = distinctUntilChanged.distinctUntilChanged;

	exports.empty = fromArray.empty;
	exports.fromArray = fromArray.fromArray;
	exports.fromScheduledValues = fromArray.fromScheduledValues;
	exports.ofValue = fromArray.ofValue;

	exports.fromPromiseFactory = promise.fromPromiseFactory;
	exports.toPromise = promise.toPromise;

	exports.generate = generate.generate;

	exports.ignoreElements = ignoreElements.ignoreElements;

	exports.keep = keep.keep;

	exports.map = map.map;

	exports.merge = merge_1.merge;

	exports.concatAll = mergeAll.concatAll;
	exports.exhaust = mergeAll.exhaust;
	exports.mergeAll = mergeAll.mergeAll;

	exports.never = never.never;

	exports.repeat = repeat.repeat;
	exports.retry = repeat.retry;

	exports.scan = scan.scan;

	exports.switchAll = _switch.switchAll;

	exports.take = take.take;

	exports.takeLast = takeLast.takeLast;

	exports.throws = throws_1.throws;

	exports.withLatestFrom = withLatestFrom.withLatestFrom;

	exports.subscribeOn = subscribeOn.subscribeOn;

	});

	unwrapExports(dist$4);
	var dist_1$4 = dist$4.pipe;
	var dist_2$3 = dist$4.connect;
	var dist_3$3 = dist$4.create;
	var dist_4$2 = dist$4.lift;
	var dist_5$1 = dist$4.observe;
	var dist_6 = dist$4.onComplete;
	var dist_7 = dist$4.onError;
	var dist_8 = dist$4.onNext;
	var dist_9 = dist$4.combineLatest;
	var dist_10 = dist$4.concat;
	var dist_11 = dist$4.startWith;
	var dist_12 = dist$4.distinctUntilChanged;
	var dist_13 = dist$4.empty;
	var dist_14 = dist$4.fromArray;
	var dist_15 = dist$4.fromScheduledValues;
	var dist_16 = dist$4.ofValue;
	var dist_17 = dist$4.fromPromiseFactory;
	var dist_18 = dist$4.toPromise;
	var dist_19 = dist$4.generate;
	var dist_20 = dist$4.ignoreElements;
	var dist_21 = dist$4.keep;
	var dist_22 = dist$4.map;
	var dist_23 = dist$4.merge;
	var dist_24 = dist$4.concatAll;
	var dist_25 = dist$4.exhaust;
	var dist_26 = dist$4.mergeAll;
	var dist_27 = dist$4.never;
	var dist_28 = dist$4.repeat;
	var dist_29 = dist$4.retry;
	var dist_30 = dist$4.scan;
	var dist_31 = dist$4.switchAll;
	var dist_32 = dist$4.take;
	var dist_33 = dist$4.takeLast;
	var dist_34 = dist$4.withLatestFrom;
	var dist_35 = dist$4.subscribeOn;

	var dist$5 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var useDispose = function (disposable) {
	    react.useEffect(function () { return function () {
	        disposable.dispose();
	    }; }, [disposable]);
	};
	exports.useDisposable = function (factory, deps) {
	    var resource = react.useMemo(factory, deps);
	    useDispose(resource);
	    return resource;
	};
	var connectObservable = function (observable, updateState, updateError, scheduler) {
	    return dist$4.connect(dist$4.pipe(observable, dist$4.observe({
	        next: function (data) { return updateState(function (_) { return data; }); },
	        complete: function (error) { return updateError(function (_) { return error; }); },
	    })), scheduler);
	};
	exports.useObservable = function (factory, deps, scheduler) {
	    if (scheduler === void 0) { scheduler = dist$2.normalPriority; }
	    var _a = react.useState(undefined), state = _a[0], updateState = _a[1];
	    var _b = react.useState(undefined), error = _b[0], updateError = _b[1];
	    var observable = react.useMemo(factory, deps);
	    exports.useDisposable(function () { return connectObservable(observable, updateState, updateError, scheduler); }, [observable, updateState, updateError, scheduler]);
	    if (error !== undefined) {
	        throw error;
	    }
	    return state;
	};
	exports.useObservableResource = function (factory, deps, scheduler) {
	    var observableResource = react.useMemo(factory, deps);
	    useDispose(observableResource);
	    return exports.useObservable(function () { return observableResource; }, [observableResource], scheduler);
	};
	exports.useAsyncIterator = function (factory, deps, scheduler) {
	    var iterator = react.useMemo(factory, deps);
	    var dispatch = react.useCallback(function (req) { return iterator.dispatch(req); }, [iterator]);
	    var value = exports.useObservable(function () { return iterator; }, [iterator], scheduler);
	    return [value, dispatch];
	};
	exports.useAsyncIteratorResource = function (factory, deps, scheduler) {
	    var iterator = react.useMemo(factory, deps);
	    useDispose(iterator);
	    var dispatch = react.useCallback(function (req) { return iterator.dispatch(req); }, [iterator]);
	    var value = exports.useObservable(function () { return iterator; }, [iterator], scheduler);
	    return [value, dispatch];
	};

	});

	unwrapExports(dist$5);
	var dist_1$5 = dist$5.useDisposable;
	var dist_2$4 = dist$5.useObservable;
	var dist_3$4 = dist$5.useObservableResource;
	var dist_4$3 = dist$5.useAsyncIterator;
	var dist_5$2 = dist$5.useAsyncIteratorResource;

	var dist$6 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.empty = {
	    path: "",
	    query: "",
	    fragment: "",
	};
	exports.equals = function (a, b) {
	    return a === b ||
	        (a.path === b.path && a.query === b.query && a.fragment === b.fragment);
	};

	});

	unwrapExports(dist$6);
	var dist_1$6 = dist$6.empty;
	var dist_2$5 = dist$6.equals;

	var dist$7 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var LiftedObservableResource = /** @class */ (function () {
	    function LiftedObservableResource(observable, disposable) {
	        this.observable = observable;
	        this.disposable = disposable;
	    }
	    Object.defineProperty(LiftedObservableResource.prototype, "isDisposed", {
	        get: function () {
	            return this.disposable.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LiftedObservableResource.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    LiftedObservableResource.prototype.dispose = function () {
	        this.disposable.dispose();
	    };
	    LiftedObservableResource.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    LiftedObservableResource.prototype.subscribe = function (subscriber) {
	        this.observable.subscribe(subscriber);
	    };
	    return LiftedObservableResource;
	}());
	exports.lift = function (operator) { return function (observableResource) {
	    var observable = dist$4.pipe(observableResource instanceof LiftedObservableResource
	        ? observableResource.observable
	        : observableResource, operator);
	    var disposable = observableResource instanceof LiftedObservableResource
	        ? observableResource.disposable
	        : observableResource;
	    return new LiftedObservableResource(observable, disposable);
	}; };
	function pipe(source) {
	    var operators = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        operators[_i - 1] = arguments[_i];
	    }
	    return operators.reduce(function (acc, next) { return next(acc); }, source);
	}
	exports.pipe = pipe;

	});

	unwrapExports(dist$7);
	var dist_1$7 = dist$7.lift;
	var dist_2$6 = dist$7.pipe;

	var dist$8 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	exports.Router = function (props) {
	    var locationResourceFactory = props.locationResourceFactory, notFound = props.notFound, routes = props.routes;
	    var element = dist$5.useObservableResource(function () {
	        var routeMap = {};
	        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	            var _a = routes_1[_i], path = _a[0], component = _a[1];
	            routeMap[path] = component;
	        }
	        var locationResource = locationResourceFactory();
	        var uriUpdater = function (updater) {
	            locationResource.dispatch(updater);
	        };
	        var pairify = function (_a, next) {
	            var _ = _a[0], oldState = _a[1];
	            return oldState === dist$6.empty ? [undefined, next] : [oldState, next];
	        };
	        return dist$7.pipe(locationResource, dist$7.lift(dist$4.scan(pairify, [undefined, dist$6.empty])), dist$7.lift(dist$4.map(function (_a) {
	            var referer = _a[0], uri = _a[1];
	            return react.createElement(routeMap[uri.path] || notFound, {
	                referer: referer,
	                uri: uri,
	                uriUpdater: uriUpdater,
	            });
	        })));
	    }, [locationResourceFactory, notFound, routes]);
	    return element || null;
	};

	});

	unwrapExports(dist$8);
	var dist_1$8 = dist$8.Router;

	var dist$9 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.fromEvent = function (target, eventName, selector) {
	    return dist$4.create(function (observer) {
	        var listener = function (event) {
	            try {
	                var result = selector(event);
	                observer.next(result);
	            }
	            catch (error) {
	                observer.complete(error);
	            }
	        };
	        target.addEventListener(eventName, listener, { passive: true });
	        return function () {
	            target.removeEventListener(eventName, listener);
	        };
	    });
	};

	});

	unwrapExports(dist$9);
	var dist_1$9 = dist$9.fromEvent;

	var dist$a = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Enumeration of valid notification types.
	 */
	var NotificationKind;
	(function (NotificationKind) {
	    NotificationKind[NotificationKind["Next"] = 1] = "Next";
	    NotificationKind[NotificationKind["Complete"] = 2] = "Complete";
	})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
	/**
	 * Notifies the observer with the materialized notification.
	 *
	 * @param observer
	 * @param notification
	 */
	exports.notify = function (observer, notification) {
	    switch (notification[0]) {
	        case NotificationKind.Next:
	            observer.next(notification[1]);
	            break;
	        case NotificationKind.Complete:
	            observer.complete(notification[1]);
	            break;
	    }
	};

	});

	unwrapExports(dist$a);
	var dist_1$a = dist$a.NotificationKind;
	var dist_2$7 = dist$a.notify;

	var dist$b = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var AbstractSubject = /** @class */ (function () {
	    function AbstractSubject() {
	        var _this = this;
	        this.isCompleted = false;
	        this.observers = [];
	        this.disposable = dist.create();
	        this.disposable.add(function () {
	            _this.isCompleted = true;
	            _this.observers.length = 0;
	        });
	    }
	    Object.defineProperty(AbstractSubject.prototype, "isDisposed", {
	        get: function () {
	            return this.disposable.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractSubject.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AbstractSubject.prototype.complete = function (error) {
	        if (this.isCompleted) {
	            return;
	        }
	        this.onComplete(error);
	        this.isCompleted = true;
	        var subscribers = this.observers.slice();
	        this.observers.length = 0;
	        for (var _i = 0, subscribers_1 = subscribers; _i < subscribers_1.length; _i++) {
	            var subscriber = subscribers_1[_i];
	            subscriber.complete(error);
	        }
	    };
	    AbstractSubject.prototype.dispose = function () {
	        this.disposable.dispose();
	    };
	    AbstractSubject.prototype.next = function (data) {
	        if (this.isCompleted) {
	            return;
	        }
	        this.onNext(data);
	        var subscribers = this.observers.slice();
	        for (var _i = 0, subscribers_2 = subscribers; _i < subscribers_2.length; _i++) {
	            var subscriber = subscribers_2[_i];
	            subscriber.next(data);
	        }
	    };
	    AbstractSubject.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AbstractSubject.prototype.subscribe = function (subscriber) {
	        var _this = this;
	        if (!this.disposable.isDisposed) {
	            // The idea here is that an onSubscribe function may
	            // call onNext from unscheduled sources such as event handlers.
	            // So we marshall those events back to the scheduler.
	            var observer_1 = dist$3.toSafeObserver(subscriber);
	            this.onSubscribe(observer_1);
	            if (!this.isCompleted) {
	                this.observers.push(observer_1);
	                var disposable_2 = dist.create();
	                disposable_2.add(function () {
	                    var index = _this.observers.indexOf(observer_1);
	                    if (index !== -1) {
	                        _this.observers.splice(index, 1);
	                    }
	                    subscriber.remove(disposable_2);
	                });
	                subscriber.add(disposable_2);
	            }
	        }
	        else {
	            subscriber.dispose();
	        }
	    };
	    return AbstractSubject;
	}());
	var SubjectImpl = /** @class */ (function (_super) {
	    tslib_es6.__extends(SubjectImpl, _super);
	    function SubjectImpl() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    SubjectImpl.prototype.onComplete = function (error) { };
	    SubjectImpl.prototype.onNext = function (data) { };
	    SubjectImpl.prototype.onSubscribe = function (observer) { };
	    return SubjectImpl;
	}(AbstractSubject));
	var ReplayLastSubjectImpl = /** @class */ (function (_super) {
	    tslib_es6.__extends(ReplayLastSubjectImpl, _super);
	    function ReplayLastSubjectImpl(count) {
	        var _this = _super.call(this) || this;
	        _this.replayed = [];
	        _this.count = count;
	        _this.add(function () {
	            _this.replayed.length = 0;
	        });
	        return _this;
	    }
	    ReplayLastSubjectImpl.prototype.onComplete = function (error) {
	        this.pushNotification([dist$a.NotificationKind.Complete, error]);
	    };
	    ReplayLastSubjectImpl.prototype.onNext = function (data) {
	        this.pushNotification([dist$a.NotificationKind.Next, data]);
	    };
	    ReplayLastSubjectImpl.prototype.onSubscribe = function (observer) {
	        // The observer is a safe observer, an queues all notifications
	        // until a drain is scheduled. Hence there is no need to
	        // copy the replayed notifications before publishing via notify.
	        for (var _i = 0, _a = this.replayed; _i < _a.length; _i++) {
	            var notif = _a[_i];
	            dist$a.notify(observer, notif);
	        }
	    };
	    ReplayLastSubjectImpl.prototype.pushNotification = function (notif) {
	        this.replayed.push(notif);
	        if (this.replayed.length > this.count) {
	            this.replayed.shift();
	        }
	    };
	    return ReplayLastSubjectImpl;
	}(AbstractSubject));
	exports.create = function (replayCount) {
	    if (replayCount === void 0) { replayCount = 0; }
	    return replayCount > 0 ? new ReplayLastSubjectImpl(replayCount) : new SubjectImpl();
	};
	var SharedObservable = /** @class */ (function () {
	    function SharedObservable(factory, source, scheduler) {
	        var _this = this;
	        this.refCount = 0;
	        this.sourceSubscription = dist.disposed;
	        this.factory = factory;
	        this.source = source;
	        this.scheduler = scheduler;
	        this.teardown = function () {
	            _this.refCount--;
	            if (_this.refCount === 0) {
	                _this.sourceSubscription.dispose();
	                _this.sourceSubscription = dist.disposed;
	                _this.subject.dispose();
	                _this.subject = undefined;
	            }
	        };
	    }
	    SharedObservable.prototype.subscribe = function (subscriber) {
	        if (this.refCount === 0) {
	            this.subject = this.factory();
	            this.sourceSubscription = dist$4.connect(dist$4.pipe(this.source, dist$4.observe(this.subject)), this.scheduler);
	        }
	        this.refCount++;
	        var subject = this.subject;
	        var innerSubscription = dist$4.connect(dist$4.pipe(subject, dist$4.observe(subscriber)), subscriber);
	        subscriber.add(this.teardown, innerSubscription);
	    };
	    return SharedObservable;
	}());
	exports.share = function (scheduler, replayCount) {
	    var factory = function () { return exports.create(replayCount); };
	    return function (observable) { return new SharedObservable(factory, observable, scheduler); };
	};

	});

	unwrapExports(dist$b);
	var dist_1$b = dist$b.create;
	var dist_2$8 = dist$b.share;

	var dist$c = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var AsyncIteratorResourceImpl = /** @class */ (function () {
	    function AsyncIteratorResourceImpl(dispatcher, disposable, observable) {
	        this.dispatcher = dispatcher;
	        this.disposable = disposable;
	        this.observable = observable;
	    }
	    Object.defineProperty(AsyncIteratorResourceImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.disposable.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AsyncIteratorResourceImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AsyncIteratorResourceImpl.prototype.dispatch = function (req) {
	        this.dispatcher(req);
	    };
	    AsyncIteratorResourceImpl.prototype.dispose = function () {
	        this.disposable.dispose();
	    };
	    AsyncIteratorResourceImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AsyncIteratorResourceImpl.prototype.subscribe = function (subscriber) {
	        this.observable.subscribe(subscriber);
	    };
	    return AsyncIteratorResourceImpl;
	}());
	var liftImpl = function (operator, mapper) { return function (iterator) {
	    var _a = iterator instanceof AsyncIteratorResourceImpl
	        ? [iterator.observable, iterator.dispatcher, iterator.disposable]
	        : [iterator, function (req) { return iterator.dispatch(req); }, iterator], observable = _a[0], dispatcher = _a[1], disposable = _a[2];
	    var pipedObservable = operator !== undefined ? dist$4.pipe(observable, operator) : observable;
	    var mappedDispatcher = mapper !== undefined ? function (req) { return dispatcher(mapper(req)); } : dispatcher;
	    return new AsyncIteratorResourceImpl(mappedDispatcher, disposable, pipedObservable);
	}; };
	exports.lift = function (operator) {
	    return liftImpl(operator, undefined);
	};
	exports.liftReq = function (mapper) {
	    return liftImpl(undefined, mapper);
	};
	function pipe(src) {
	    var operators = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        operators[_i - 1] = arguments[_i];
	    }
	    return operators.reduce(function (acc, next) { return next(acc); }, src);
	}
	exports.pipe = pipe;
	exports.createEvent = function () {
	    var subject = dist$b.create();
	    var dispatcher = function (req) { return subject.next(req); };
	    return new AsyncIteratorResourceImpl(dispatcher, subject, subject);
	};
	exports.createStateStore = function (initialState, scheduler, equals) {
	    var subject = dist$b.create();
	    var dispatcher = function (req) { return subject.next(req); };
	    var observable = dist$4.pipe(subject, dist$4.scan(function (acc, next) { return next(acc); }, initialState), dist$4.startWith(initialState), dist$4.distinctUntilChanged(equals), dist$b.share(scheduler, 1));
	    subject.add(dist$4.connect(observable, scheduler));
	    return new AsyncIteratorResourceImpl(dispatcher, subject, observable);
	};

	});

	unwrapExports(dist$c);
	var dist_1$c = dist$c.lift;
	var dist_2$9 = dist$c.liftReq;
	var dist_3$5 = dist$c.pipe;
	var dist_4$4 = dist$c.createEvent;
	var dist_5$3 = dist$c.createStateStore;

	var dist$d = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	var getCurrentLocation = function () {
	    var path = window.location.pathname;
	    var query = window.location.search;
	    var fragment = window.location.hash;
	    return { path: path, query: query, fragment: fragment };
	};
	var operator = function (setURI, scheduler) { return function (obs) {
	    var onPopstateUpdateURIObs = dist$4.pipe(dist$9.fromEvent(window, "popstate", function (_) { return getCurrentLocation(); }), dist$4.onNext(setURI), dist$4.ignoreElements());
	    var onStateChangeUpdateHistoryObs = dist$4.pipe(obs, dist$4.keep(function (location) { return !dist$6.equals(location, getCurrentLocation()); }), dist$4.onNext(function (_a) {
	        var path = _a.path, query = _a.query, fragment = _a.fragment;
	        var uri = path + query + fragment;
	        window.history.pushState(undefined, "", uri);
	    }), dist$4.ignoreElements());
	    return dist$4.pipe(dist$4.merge(onPopstateUpdateURIObs, onStateChangeUpdateHistoryObs, obs), dist$b.share(scheduler));
	}; };
	exports.create = function (scheduler) {
	    if (scheduler === void 0) { scheduler = dist$2.normalPriority; }
	    var stateStore = dist$c.createStateStore(getCurrentLocation(), scheduler, dist$6.equals);
	    var setURI = function (uri) { return stateStore.dispatch(function (_) { return uri; }); };
	    return dist$c.pipe(stateStore, dist$c.lift(operator(setURI, scheduler)));
	};

	});

	unwrapExports(dist$d);
	var dist_1$d = dist$d.create;

	var dist$e = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var react_1 = tslib_es6.__importStar(react);

	var makeCallbacks = function (uriUpdater) {
	    var liftUpdater = function (updater) { return function () {
	        return uriUpdater(updater);
	    }; };
	    var goToPath = function (path) { return liftUpdater(function (state) { return (tslib_es6.__assign(tslib_es6.__assign({}, state), { path: path })); }); };
	    var goToRoute1 = goToPath("/route1");
	    var goToRoute2 = goToPath("/route2");
	    return { goToRoute1: goToRoute1, goToRoute2: goToRoute2 };
	};
	var NotFound = function (_a) {
	    var uriUpdater = _a.uriUpdater;
	    var _b = react_1.useMemo(function () { return makeCallbacks(uriUpdater); }, [
	        uriUpdater,
	    ]), goToRoute1 = _b.goToRoute1, goToRoute2 = _b.goToRoute2;
	    return (react_1.default.createElement("div", null,
	        "Not Found",
	        react_1.default.createElement("button", { onClick: goToRoute1 }, "Go to route1"),
	        react_1.default.createElement("button", { onClick: goToRoute2 }, "Go to route2")));
	};
	var src = dist$4.generate(function (x) { return x + 1; }, 0);
	var Component1 = function (props) {
	    var value = dist$5.useObservable(function () { return src; }, []);
	    return (react_1.default.createElement(react_1.default.Fragment, null,
	        react_1.default.createElement("div", null, props.uri.path),
	        react_1.default.createElement("div", null, value)));
	};
	var routes = [
	    ["/route1", Component1],
	    ["/route2", Component1],
	];
	reactDom.render(react_1.default.createElement(dist$8.Router, { locationResourceFactory: dist$d.create, notFound: NotFound, routes: routes }), document.getElementById("root"));

	});

	var index = unwrapExports(dist$e);

	return index;

}(React, ReactDOM));
