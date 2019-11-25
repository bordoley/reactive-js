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
	    DisposableImpl.prototype.add = function (disposable) {
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        if (this.isDisposed) {
	            doDispose(disposable);
	            for (var _a = 0, disposables_1 = disposables; _a < disposables_1.length; _a++) {
	                var d = disposables_1[_a];
	                doDispose(d);
	            }
	        }
	        else {
	            this.doAdd(disposable);
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
	    DisposableImpl.prototype.remove = function (disposable) {
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        if (!this.isDisposed) {
	            this.doRemove(disposable);
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
	exports.create = function () { return new DisposableImpl(); };
	exports.disposed = exports.create();
	exports.disposed.dispose();
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
	var AbstractSubjectImpl = /** @class */ (function () {
	    function AbstractSubjectImpl(scheduler, subscription) {
	        this.scheduler = scheduler;
	        this.subscription = subscription;
	    }
	    Object.defineProperty(AbstractSubjectImpl.prototype, "inScheduledContinuation", {
	        get: function () {
	            return this.scheduler.inScheduledContinuation;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractSubjectImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.subscription.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractSubjectImpl.prototype, "now", {
	        get: function () {
	            return this.scheduler.now;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractSubjectImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.subscription).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AbstractSubjectImpl.prototype.dispose = function () {
	        this.subscription.dispose();
	    };
	    AbstractSubjectImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.subscription).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    AbstractSubjectImpl.prototype.schedule = function (continuation, delay, priority) {
	        var _this = this;
	        var schedulerSubscription = this.scheduler.schedule(continuation, delay, priority);
	        this.add(schedulerSubscription);
	        schedulerSubscription.add(function () { return _this.remove(schedulerSubscription); });
	        return schedulerSubscription;
	    };
	    return AbstractSubjectImpl;
	}());
	var AutoDisposingSubscriberImpl = /** @class */ (function (_super) {
	    tslib_es6.__extends(AutoDisposingSubscriberImpl, _super);
	    function AutoDisposingSubscriberImpl(scheduler, subscription) {
	        var _this = _super.call(this, scheduler, subscription) || this;
	        _this.isConnected = false;
	        return _this;
	    }
	    AutoDisposingSubscriberImpl.prototype.complete = function (_error) {
	        this.dispose();
	    };
	    AutoDisposingSubscriberImpl.prototype.next = function (data) {
	    };
	    return AutoDisposingSubscriberImpl;
	}(AbstractSubjectImpl));
	exports.create = function (scheduler, subscription) {
	    return new AutoDisposingSubscriberImpl(scheduler, subscription);
	};
	var getSubscriberScheduler = function (delegate) {
	    return delegate instanceof DelegatingSubscriber
	        ? delegate.scheduler
	        : delegate instanceof AutoDisposingSubscriberImpl
	            ? delegate.scheduler
	            : delegate;
	};
	var getSubscriberSubscription = function (delegate) {
	    return delegate instanceof DelegatingSubscriber
	        ? delegate.subscription
	        : delegate instanceof AutoDisposingSubscriberImpl
	            ? delegate.subscription
	            : delegate;
	};
	/** @noInheritDoc */
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
	        get: function () {
	            return this.source.isConnected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DelegatingSubscriber.prototype.complete = function (error) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this.tryOnComplete(error);
	        }
	    };
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
	}(AbstractSubjectImpl));
	exports.DelegatingSubscriber = DelegatingSubscriber;
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
	}(DelegatingSubscriber));
	exports.observe = function (observer) { return function (subscriber) { return new ObserveSubscriber(subscriber, observer); }; };
	var SafeObserver = /** @class */ (function () {
	    function SafeObserver(subscriber, priority) {
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
	        this.priority = priority;
	        this.continuation = {
	            continuation: this.drainQueue,
	            priority: this.priority,
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
	            this.subscriber.schedule(this.drainQueue, 0, this.priority);
	        }
	    };
	    return SafeObserver;
	}());
	exports.toSafeObserver = function (subscriber, priority) { return new SafeObserver(subscriber, priority); };

	});

	unwrapExports(dist$1);
	var dist_1$1 = dist$1.create;
	var dist_2$1 = dist$1.DelegatingSubscriber;
	var dist_3$1 = dist$1.observe;
	var dist_4 = dist$1.toSafeObserver;

	var dist$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var instance;
	exports.registerDefaultScheduler = function (scheduler) {
	    if (instance !== undefined && scheduler !== instance) {
	        throw new Error("Default scheduler already registered");
	    }
	    instance = scheduler;
	};
	exports.getDefaultScheduler = function () {
	    if (instance === undefined) {
	        throw new Error("No default scheduler registered");
	    }
	    return instance;
	};

	});

	unwrapExports(dist$2);
	var dist_1$2 = dist$2.registerDefaultScheduler;
	var dist_2$2 = dist$2.getDefaultScheduler;

	var dist$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	exports.connect = function (observable, scheduler) {
	    scheduler = scheduler || dist$2.getDefaultScheduler();
	    var subscription = dist.create();
	    var subscriber = dist$1.create(scheduler, subscription);
	    observable.subscribe(subscriber);
	    subscriber.isConnected = true;
	    return subscription;
	};
	var LiftedObservable = /** @class */ (function () {
	    function LiftedObservable(source, operators) {
	        this.source = source;
	        this.operators = operators;
	    }
	    LiftedObservable.prototype.subscribe = function (subscriber) {
	        var liftedSubscrber = this.liftSubscriber(subscriber);
	        this.source.subscribe(liftedSubscrber);
	    };
	    LiftedObservable.prototype.liftSubscriber = function (subscriber) {
	        return this.operators.reduceRight(function (acc, next) { return next(acc); }, subscriber);
	    };
	    return LiftedObservable;
	}());
	function lift(source, operator) {
	    var operators = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        operators[_i - 2] = arguments[_i];
	    }
	    var sourceSource = source instanceof LiftedObservable ? source.source : source;
	    var allOperators = source instanceof LiftedObservable
	        ? tslib_es6.__spreadArrays(source.operators, [operator], operators) : tslib_es6.__spreadArrays([operator], operators);
	    return new LiftedObservable(sourceSource, allOperators);
	}
	exports.lift = lift;
	exports.create = function (onSubscribe, priority) {
	    var subscribe = function (subscriber) {
	        // The idea here is that an onSubscribe function may
	        // call onNext from unscheduled sources such as event handlers.
	        // So we marshall those events back to the scheduler.
	        var observer = dist$1.toSafeObserver(subscriber, priority);
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

	unwrapExports(dist$3);
	var dist_1$3 = dist$3.connect;
	var dist_2$3 = dist$3.lift;
	var dist_3$2 = dist$3.create;

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
	function combineLatest(obs1, obs2) {
	    var tail = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        tail[_i - 2] = arguments[_i];
	    }
	    var observables = tslib_es6.__spreadArrays([obs1, obs2], tail);
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
	            observer.innerSubscription = dist$3.connect(dist$3.lift(observables[index], dist$1.observe(observer)), subscriber);
	            allSubscriptions.add(observer.innerSubscription);
	        }
	    };
	    return { subscribe: subscribe };
	}
	exports.combineLatest = combineLatest;

	});

	unwrapExports(combineLatest_1);
	var combineLatest_2 = combineLatest_1.combineLatest;

	var concat = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	exports.concat = function (fst, snd) {
	    var tail = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        tail[_i - 2] = arguments[_i];
	    }
	    var observables = tslib_es6.__spreadArrays([fst, snd], tail);
	    var subscribe = function (subscriber) {
	        var queue = tslib_es6.__spreadArrays(observables);
	        var innerSubscription = dist.disposed;
	        var subscribeNext = function () {
	            var head = queue.shift();
	            if (head !== undefined) {
	                innerSubscription = dist$3.connect(dist$3.lift(head, dist$1.observe(observer)), subscriber);
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
	};

	});

	unwrapExports(concat);
	var concat_1 = concat.concat;

	var empty = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var onSubscribe = function (observer) { return observer.complete(); };
	exports.empty = function (priority) {
	    return dist$3.create(onSubscribe, priority);
	};

	});

	unwrapExports(empty);
	var empty_1 = empty.empty;

	var fromArray = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.fromArray = function (values, delay, priority) {
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
	        continuationResult = { continuation: continuation, delay: delay, priority: priority };
	        subscriber.schedule(continuation, delay, priority);
	    };
	    return { subscribe: subscribe };
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
	                var _a = delayedValues[index], _d = _a[0], _p = _a[1], value_1 = _a[2];
	                index++;
	                subscriber.next(value_1);
	                if (index < delayedValues.length) {
	                    var delay_1 = delayedValues[index][0] || 0;
	                    var priority_1 = delayedValues[index][1];
	                    if (delay_1 > 0) {
	                        return { continuation: continuation, delay: delay_1, priority: priority_1 };
	                    }
	                    else if (shouldYield()) {
	                        return { continuation: continuation, delay: 0, priority: priority_1 };
	                    }
	                }
	            }
	            subscriber.complete();
	            return;
	        };
	        var _a = delayedValues[index], delay = _a[0], priority = _a[1], _ = _a[2];
	        subscriber.schedule(continuation, delay, priority);
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(fromArray);
	var fromArray_1 = fromArray.fromArray;
	var fromArray_2 = fromArray.fromScheduledValues;

	var promise = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	exports.fromPromiseFactory = function (factory, priority) {
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
	    return dist$3.create(onSubscribe, priority);
	};
	exports.toPromise = function (observable, scheduler) {
	    return new Promise(function (resolve, reject) {
	        var result = undefined;
	        var subscription = dist$3.connect(dist$3.lift(observable, dist$1.observe({
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
	exports.generate = function (generator, initialValue, delay, priority) {
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
	        continuationResult = { continuation: continuation, delay: delay, priority: priority };
	        subscriber.schedule(continuation, delay, priority);
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(generate);
	var generate_1 = generate.generate;

	var merge = createCommonjsModule(function (module, exports) {
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
	exports.merge = function (fst, snd) {
	    var tail = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        tail[_i - 2] = arguments[_i];
	    }
	    var observables = tslib_es6.__spreadArrays([fst, snd], tail);
	    var subscribe = function (subscriber) {
	        var completedCountRef = [0];
	        var allSubscriptions = dist.create();
	        subscriber.add(allSubscriptions);
	        for (var _i = 0, observables_1 = observables; _i < observables_1.length; _i++) {
	            var observable = observables_1[_i];
	            var observer = new MergeObserver(subscriber, observables.length, completedCountRef, allSubscriptions);
	            observer.innerSubscription = dist$3.connect(dist$3.lift(observable, dist$1.observe(observer)), subscriber);
	            allSubscriptions.add(observer.innerSubscription);
	        }
	    };
	    return { subscribe: subscribe };
	};

	});

	unwrapExports(merge);
	var merge_1 = merge.merge;

	var never = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var NeverObservable = /** @class */ (function () {
	    function NeverObservable() {
	    }
	    NeverObservable.prototype.subscribe = function (subscriber) { };
	    return NeverObservable;
	}());
	var neverInstance = new NeverObservable();
	exports.never = function () { return neverInstance; };

	});

	unwrapExports(never);
	var never_1 = never.never;

	var ofValue = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.ofValue = function (value, priority) {
	    return dist$3.create(function (observer) {
	        observer.next(value);
	        observer.complete();
	    }, priority);
	};

	});

	unwrapExports(ofValue);
	var ofValue_1 = ofValue.ofValue;

	var dist$4 = createCommonjsModule(function (module, exports) {
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
	exports.create = function () { return new SerialDisposableImpl(); };

	});

	unwrapExports(dist$4);
	var dist_1$4 = dist$4.create;

	var repeat = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	var RepeatSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(delegate, observable, shouldRepeat) {
	        var _this = _super.call(this, delegate) || this;
	        _this.observable = observable;
	        _this.shouldRepeat = shouldRepeat;
	        _this.innerSubscription = dist$4.create();
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
	            this.parent.innerSubscription.disposable = dist$3.connect(dist$3.lift(this.parent.observable, dist$1.observe(this.parent.observer)), this.parent);
	        };
	        return class_1;
	    }());
	    return RepeatSubscriber;
	}(dist$1.DelegatingSubscriber));
	var repeatOperator = function (observable, shouldRepeat) { return function (subscriber) {
	    return new RepeatSubscriber(subscriber, observable, shouldRepeat);
	}; };
	var alwaysTrue = function () { return true; };
	var defaultRepeatPredicate = function (error) { return error === undefined; };
	exports.repeat = function (observable, predicate) {
	    if (predicate === void 0) { predicate = alwaysTrue; }
	    var repeatPredicate = predicate === alwaysTrue
	        ? defaultRepeatPredicate
	        : function (error) { return error === undefined && predicate(); };
	    return dist$3.lift(observable, repeatOperator(observable, repeatPredicate));
	};
	var alwaysTrue1 = function (_) { return true; };
	var defaultRetryPredicate = function (error) { return error !== undefined; };
	exports.retry = function (observable, predicate) {
	    if (predicate === void 0) { predicate = alwaysTrue1; }
	    var retryPredicate = predicate === alwaysTrue1
	        ? defaultRetryPredicate
	        : function (error) { return error !== undefined && predicate(error); };
	    return dist$3.lift(observable, repeatOperator(observable, retryPredicate));
	};

	});

	unwrapExports(repeat);
	var repeat_1 = repeat.repeat;
	var repeat_2 = repeat.retry;

	var dist$5 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var NotificationKind;
	(function (NotificationKind) {
	    NotificationKind[NotificationKind["Next"] = 1] = "Next";
	    NotificationKind[NotificationKind["Complete"] = 2] = "Complete";
	})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
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

	unwrapExports(dist$5);
	var dist_1$5 = dist$5.NotificationKind;
	var dist_2$4 = dist$5.notify;

	var dist$6 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	var AbstractSubject = /** @class */ (function () {
	    function AbstractSubject(priority) {
	        var _this = this;
	        this.isCompleted = false;
	        this.observers = [];
	        this.priority = priority;
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
	            var observer_1 = dist$1.toSafeObserver(subscriber, this.priority);
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
	    function ReplayLastSubjectImpl(count, priority) {
	        var _this = _super.call(this, priority) || this;
	        _this.replayed = [];
	        _this.count = count;
	        _this.add(function () {
	            _this.replayed.length = 0;
	        });
	        return _this;
	    }
	    ReplayLastSubjectImpl.prototype.onComplete = function (error) {
	        this.pushNotification([dist$5.NotificationKind.Complete, error]);
	    };
	    ReplayLastSubjectImpl.prototype.onNext = function (data) {
	        this.pushNotification([dist$5.NotificationKind.Next, data]);
	    };
	    ReplayLastSubjectImpl.prototype.onSubscribe = function (observer) {
	        for (var _i = 0, _a = this.replayed; _i < _a.length; _i++) {
	            var notif = _a[_i];
	            dist$5.notify(observer, notif);
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
	exports.create = function (priority) {
	    return new SubjectImpl(priority);
	};
	exports.createWithReplay = function (count, priority) { return new ReplayLastSubjectImpl(count, priority); };

	});

	unwrapExports(dist$6);
	var dist_1$6 = dist$6.create;
	var dist_2$5 = dist$6.createWithReplay;

	var sharedObservable = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	var SharedObservable = /** @class */ (function () {
	    function SharedObservable(factory, source, scheduler, priority) {
	        var _this = this;
	        this.refCount = 0;
	        this.sourceSubscription = dist.disposed;
	        this.factory = factory;
	        this.source = source;
	        this.scheduler = scheduler;
	        this.priority = priority;
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
	            this.subject = this.factory(this.priority);
	            this.sourceSubscription = dist$3.connect(dist$3.lift(this.source, dist$1.observe(this.subject)), this.scheduler);
	        }
	        this.refCount++;
	        var subject = this.subject;
	        var innerSubscription = dist$3.connect(dist$3.lift(subject, dist$1.observe(subscriber)), subscriber);
	        subscriber.add(this.teardown, innerSubscription);
	    };
	    return SharedObservable;
	}());
	exports.share = function (observable, scheduler, priority) {
	    return new SharedObservable(dist$6.create, observable, scheduler, priority);
	};
	exports.shareReplay = function (observable, count, scheduler, priority) {
	    var factory = function (priority) {
	        return dist$6.createWithReplay(count, priority);
	    };
	    return new SharedObservable(factory, observable, scheduler, priority);
	};
	exports.shareReplayLast = function (observable, scheduler, priority) { return exports.shareReplay(observable, 1, scheduler, priority); };

	});

	unwrapExports(sharedObservable);
	var sharedObservable_1 = sharedObservable.share;
	var sharedObservable_2 = sharedObservable.shareReplay;
	var sharedObservable_3 = sharedObservable.shareReplayLast;

	var throws_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.throws = function (error, priority) {
	    return dist$3.create(function (observer) {
	        observer.complete(error);
	    }, priority);
	};

	});

	unwrapExports(throws_1);

	var dist$7 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.combineLatest = combineLatest_1.combineLatest;

	exports.concat = concat.concat;

	exports.empty = empty.empty;

	exports.fromArray = fromArray.fromArray;
	exports.fromScheduledValues = fromArray.fromScheduledValues;

	exports.fromPromiseFactory = promise.fromPromiseFactory;
	exports.toPromise = promise.toPromise;

	exports.generate = generate.generate;

	exports.merge = merge.merge;

	exports.never = never.never;

	exports.ofValue = ofValue.ofValue;

	exports.repeat = repeat.repeat;
	exports.retry = repeat.retry;

	exports.share = sharedObservable.share;
	exports.shareReplay = sharedObservable.shareReplay;
	exports.shareReplayLast = sharedObservable.shareReplayLast;

	exports.throws = throws_1.throws;

	});

	unwrapExports(dist$7);
	var dist_1$7 = dist$7.combineLatest;
	var dist_2$6 = dist$7.concat;
	var dist_3$3 = dist$7.empty;
	var dist_4$1 = dist$7.fromArray;
	var dist_5 = dist$7.fromScheduledValues;
	var dist_6 = dist$7.fromPromiseFactory;
	var dist_7 = dist$7.toPromise;
	var dist_8 = dist$7.generate;
	var dist_9 = dist$7.merge;
	var dist_10 = dist$7.never;
	var dist_11 = dist$7.ofValue;
	var dist_12 = dist$7.repeat;
	var dist_13 = dist$7.retry;
	var dist_14 = dist$7.share;
	var dist_15 = dist$7.shareReplay;
	var dist_16 = dist$7.shareReplayLast;

	var debounce = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var DebounceTimeSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(delegate, dueTime, priority) {
	        var _this = _super.call(this, delegate) || this;
	        _this.innerSubscription = dist.disposed;
	        _this.schedulerContinuation = function (_shouldYield) {
	            _this.notifyNext();
	        };
	        _this.dueTime = dueTime;
	        _this.priority = priority;
	        return _this;
	    }
	    DebounceTimeSubscriber.prototype.onComplete = function (error) {
	        this.clearDebounce();
	        if (error === undefined) {
	            this.notifyNext();
	        }
	        this.delegate.complete(error);
	    };
	    DebounceTimeSubscriber.prototype.onNext = function (data) {
	        this.clearDebounce();
	        if (this.value !== undefined) {
	            this.value[0] = data;
	        }
	        else {
	            this.value = [data];
	        }
	        this.innerSubscription = this.schedule(this.schedulerContinuation, this.dueTime, this.priority);
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        this.innerSubscription.dispose();
	        this.innerSubscription = dist.disposed;
	    };
	    DebounceTimeSubscriber.prototype.notifyNext = function () {
	        if (this.value !== undefined) {
	            var value = this.value[0];
	            this.value = undefined;
	            this.delegate.next(value);
	        }
	    };
	    return DebounceTimeSubscriber;
	}(dist$1.DelegatingSubscriber));
	exports.debounceTime = function (dueTime, priority) {
	    if (dueTime <= 0) {
	        throw new Error("dueTime must be greater than 0");
	    }
	    return function (subscriber) {
	        return new DebounceTimeSubscriber(subscriber, dueTime, priority);
	    };
	};

	});

	unwrapExports(debounce);
	var debounce_1 = debounce.debounceTime;

	var delay = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var DelaySubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(DelaySubscriber, _super);
	    function DelaySubscriber(delegate, delay, priority) {
	        var _this = _super.call(this, delegate) || this;
	        _this.queue = [];
	        _this.doWork = function (shouldYield) {
	            var now = _this.now;
	            while (_this.queue.length > 0) {
	                var _a = _this.queue[0], nextDueTime = _a[0], notification = _a[1];
	                if (now >= nextDueTime) {
	                    _this.queue.shift();
	                    dist$5.notify(_this.delegate, notification);
	                }
	                else {
	                    var delay_1 = nextDueTime - now;
	                    return { continuation: _this.doWork, delay: delay_1, priority: _this.priority };
	                }
	                var yieldRequested = shouldYield();
	                if (yieldRequested && _this.queue.length > 0) {
	                    return { continuation: _this.doWork, delay: 0, priority: _this.priority };
	                }
	            }
	            return;
	        };
	        _this.delay = delay;
	        _this.priority = priority;
	        return _this;
	    }
	    DelaySubscriber.prototype.onComplete = function (error) {
	        this.doSchedule([dist$5.NotificationKind.Complete, error]);
	    };
	    DelaySubscriber.prototype.onNext = function (data) {
	        this.doSchedule([dist$5.NotificationKind.Next, data]);
	    };
	    DelaySubscriber.prototype.doSchedule = function (notification) {
	        var now = this.now;
	        var dueTime = now + this.delay;
	        this.queue.push([dueTime, notification]);
	        if (this.queue.length === 1) {
	            this.schedule(this.doWork, this.delay, this.priority);
	        }
	    };
	    return DelaySubscriber;
	}(dist$1.DelegatingSubscriber));
	exports.delay = function (dueTime, priority) {
	    if (dueTime <= 0) {
	        throw new Error("dueTime must be greater than 0");
	    }
	    return function (subscriber) { return new DelaySubscriber(subscriber, dueTime, priority); };
	};

	});

	unwrapExports(delay);
	var delay_1 = delay.delay;

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
	}(dist$1.DelegatingSubscriber));
	var referenceEquality = function (a, b) { return a === b; };
	exports.distinctUntilChanged = function (equals) {
	    if (equals === void 0) { equals = referenceEquality; }
	    return function (subscriber) {
	        return new DistinctUntilChangedSubscriber(subscriber, equals);
	    };
	};

	});

	unwrapExports(distinctUntilChanged);
	var distinctUntilChanged_1 = distinctUntilChanged.distinctUntilChanged;

	var ignoreElements = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var IgnoreElementsSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber(delegate) {
	        return _super.call(this, delegate) || this;
	    }
	    IgnoreElementsSubscriber.prototype.onNext = function (data) { };
	    IgnoreElementsSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    return IgnoreElementsSubscriber;
	}(dist$1.DelegatingSubscriber));
	exports.ignoreElements = function () { return function (subscriber) { return new IgnoreElementsSubscriber(subscriber); }; };

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
	}(dist$1.DelegatingSubscriber));
	exports.keep = function (predicate) { return function (subscriber) { return new KeepSubscriber(subscriber, predicate); }; };

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
	}(dist$1.DelegatingSubscriber));
	exports.map = function (mapper) { return function (subscriber) { return new MapSubscriber(subscriber, mapper); }; };
	exports.mapTo = function (value) { return exports.map(function (_) { return value; }); };

	});

	unwrapExports(map);
	var map_1 = map.map;
	var map_2 = map.mapTo;

	var merge$1 = createCommonjsModule(function (module, exports) {
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
	                var nextObsSubscription_1 = dist$3.connect(dist$3.lift(nextObs, dist$1.observe({
	                    next: function (data) {
	                        _this.delegate.next(data);
	                    },
	                    complete: function (error) {
	                        _this.activeCount--;
	                        if (error !== undefined) {
	                            _this.complete(error);
	                        }
	                        else {
	                            _this.connectNext();
	                        }
	                        _this.remove(nextObsSubscription_1);
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
	}(dist$1.DelegatingSubscriber));
	exports.merge = function (options) {
	    if (options === void 0) { options = {}; }
	    var _a = options.maxBufferSize, maxBufferSize = _a === void 0 ? Number.MAX_SAFE_INTEGER : _a, _b = options.maxConcurrency, maxConcurrency = _b === void 0 ? Number.MAX_SAFE_INTEGER : _b;
	    return function (subscriber) {
	        return new MergeSubscriber(subscriber, maxBufferSize, maxConcurrency);
	    };
	};
	exports.concat = function (maxBufferSize) {
	    if (maxBufferSize === void 0) { maxBufferSize = Number.MAX_SAFE_INTEGER; }
	    return exports.merge({ maxBufferSize: maxBufferSize, maxConcurrency: 1 });
	};
	exports.exhaust = function () {
	    return exports.merge({ maxBufferSize: 1, maxConcurrency: 1 });
	};

	});

	unwrapExports(merge$1);
	var merge_1$1 = merge$1.merge;
	var merge_2 = merge$1.concat;
	var merge_3 = merge$1.exhaust;

	var observe = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var rx_subscriber_2 = dist$1;
	exports.observe = rx_subscriber_2.observe;
	var ignore = function (data) { };
	exports.onNext = function (onNext) {
	    return dist$1.observe({
	        next: onNext,
	        complete: ignore,
	    });
	};
	exports.onComplete = function (onComplete) {
	    return dist$1.observe({
	        next: ignore,
	        complete: onComplete,
	    });
	};
	exports.onError = function (onError) {
	    return dist$1.observe({
	        next: ignore,
	        complete: function (error) {
	            if (error !== undefined) {
	                onError(error);
	            }
	        },
	    });
	};

	});

	unwrapExports(observe);
	var observe_1 = observe.observe;
	var observe_2 = observe.onNext;
	var observe_3 = observe.onComplete;
	var observe_4 = observe.onError;

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
	}(dist$1.DelegatingSubscriber));
	exports.scan = function (scanner, initialValue) { return function (subscriber) {
	    return new ScanSubscriber(subscriber, scanner, initialValue);
	}; };

	});

	unwrapExports(scan);
	var scan_1 = scan.scan;

	var _switch = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var SwitchSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(delegate) {
	        var _this = _super.call(this, delegate) || this;
	        _this.innerSubscription = dist$4.create();
	        _this.add(_this.innerSubscription);
	        return _this;
	    }
	    SwitchSubscriber.prototype.onComplete = function (error) {
	        this.remove(this.innerSubscription);
	        this.delegate.complete(error);
	    };
	    SwitchSubscriber.prototype.onNext = function (data) {
	        this.innerSubscription.disposable = dist.disposed;
	        this.innerSubscription.disposable = dist$3.connect(dist$3.lift(data, dist$1.observe(new SwitchSubscriber.InnerObserver(this))), this);
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
	}(dist$1.DelegatingSubscriber));
	// tslint:disable-next-line variable-name
	exports.switch_ = function () { return function (subscriber) {
	    return new SwitchSubscriber(subscriber);
	}; };

	});

	unwrapExports(_switch);
	var _switch_1 = _switch.switch_;

	var take = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var TakeSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(TakeSubscriber, _super);
	    function TakeSubscriber(delegate, maxCount) {
	        var _this = _super.call(this, delegate) || this;
	        _this.count = 0;
	        _this.maxCount = maxCount;
	        return _this;
	    }
	    TakeSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    TakeSubscriber.prototype.onNext = function (data) {
	        this.count++;
	        this.delegate.next(data);
	        if (this.count >= this.maxCount) {
	            this.delegate.complete();
	        }
	    };
	    return TakeSubscriber;
	}(dist$1.DelegatingSubscriber));
	exports.take = function (count) { return function (subscriber) {
	    return new TakeSubscriber(subscriber, count);
	}; };
	var TakeLastSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(TakeLastSubscriber, _super);
	    function TakeLastSubscriber(delegate, maxCount, priority) {
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
	        _this.priority = priority;
	        _this.continuation = {
	            continuation: _this.drainQueue,
	            priority: _this.priority,
	        };
	        return _this;
	    }
	    TakeLastSubscriber.prototype.onComplete = function (error) {
	        if (error !== undefined) {
	            this.delegate.complete(error);
	        }
	        else {
	            this.schedule(this.drainQueue, this.priority);
	        }
	    };
	    TakeLastSubscriber.prototype.onNext = function (data) {
	        this.last.push(data);
	        if (this.last.length >= this.maxCount) {
	            this.last.shift();
	        }
	    };
	    return TakeLastSubscriber;
	}(dist$1.DelegatingSubscriber));
	exports.takeLast = function (count, priority) { return function (subscriber) {
	    return new TakeLastSubscriber(subscriber, count, priority);
	}; };

	});

	unwrapExports(take);
	var take_1 = take.take;
	var take_2 = take.takeLast;

	var withLatestFrom = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var WithLatestFromSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(delegate, other, selector) {
	        var _this = _super.call(this, delegate) || this;
	        _this.selector = selector;
	        _this.otherSubscription = dist$3.connect(dist$3.lift(other, dist$1.observe(new WithLatestFromSubscriber.InnerObserver(_this))), _this);
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
	}(dist$1.DelegatingSubscriber));
	exports.withLatestFrom = function (other, selector) { return function (subscriber) {
	    return new WithLatestFromSubscriber(subscriber, other, selector);
	}; };

	});

	unwrapExports(withLatestFrom);
	var withLatestFrom_1 = withLatestFrom.withLatestFrom;

	var dist$8 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.debounceTime = debounce.debounceTime;

	exports.delay = delay.delay;

	exports.distinctUntilChanged = distinctUntilChanged.distinctUntilChanged;

	exports.ignoreElements = ignoreElements.ignoreElements;

	exports.keep = keep.keep;

	exports.map = map.map;
	exports.mapTo = map.mapTo;

	exports.concat = merge$1.concat;
	exports.exhaust = merge$1.exhaust;
	exports.merge = merge$1.merge;

	exports.observe = observe.observe;
	exports.onNext = observe.onNext;
	exports.onComplete = observe.onComplete;
	exports.onError = observe.onError;

	exports.scan = scan.scan;

	exports.switch_ = _switch.switch_;

	exports.take = take.take;
	exports.takeLast = take.takeLast;

	exports.withLatestFrom = withLatestFrom.withLatestFrom;

	});

	unwrapExports(dist$8);
	var dist_1$8 = dist$8.debounceTime;
	var dist_2$7 = dist$8.delay;
	var dist_3$4 = dist$8.distinctUntilChanged;
	var dist_4$2 = dist$8.ignoreElements;
	var dist_5$1 = dist$8.keep;
	var dist_6$1 = dist$8.map;
	var dist_7$1 = dist$8.mapTo;
	var dist_8$1 = dist$8.concat;
	var dist_9$1 = dist$8.exhaust;
	var dist_10$1 = dist$8.merge;
	var dist_11$1 = dist$8.observe;
	var dist_12$1 = dist$8.onNext;
	var dist_13$1 = dist$8.onComplete;
	var dist_14$1 = dist$8.onError;
	var dist_15$1 = dist$8.scan;
	var dist_16$1 = dist$8.switch_;
	var dist_17 = dist$8.take;
	var dist_18 = dist$8.takeLast;
	var dist_19 = dist$8.withLatestFrom;

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

	var dist$9 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var ReactSchedulerImpl = /** @class */ (function () {
	    function ReactSchedulerImpl() {
	        this._inScheduledContinuation = false;
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
	    ReactSchedulerImpl.prototype.schedule = function (continuation, delay, priority) {
	        if (delay === void 0) { delay = 0; }
	        if (priority === void 0) { priority = scheduler.unstable_NormalPriority; }
	        var disposable = dist$4.create();
	        var shouldYield = function () {
	            var isDisposed = disposable.isDisposed;
	            return isDisposed || scheduler.unstable_shouldYield();
	        };
	        this.scheduleCallback(disposable, this.createFrameCallback(disposable, shouldYield, continuation, priority), delay, priority);
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
	            var resultContinuation = result.continuation, _a = result.delay, delay = _a === void 0 ? 0 : _a, _b = result.priority, resultPriority = _b === void 0 ? priority : _b;
	            var callback = resultContinuation === continuation && resultPriority === priority
	                ? continuationCallback
	                : _this.createFrameCallback(disposable, shouldYield, continuation, priority);
	            if (callback === continuationCallback && delay === 0) {
	                return callback;
	            }
	            _this.scheduleCallback(disposable, callback, delay, resultPriority);
	            return;
	        };
	        return continuationCallback;
	    };
	    ReactSchedulerImpl.prototype.scheduleCallback = function (disposable, callback, delay, priority) {
	        var callbackNode = scheduler.unstable_scheduleCallback(priority, callback, delay > 0 ? { delay: delay } : undefined);
	        var innerDisposable = dist.create();
	        innerDisposable.add(function () { return scheduler.unstable_cancelCallback(callbackNode); });
	        disposable.disposable = innerDisposable;
	    };
	    return ReactSchedulerImpl;
	}());
	exports.scheduler = new ReactSchedulerImpl();

	});

	unwrapExports(dist$9);
	var dist_1$9 = dist$9.scheduler;

	var dist$a = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/** @noInheritDoc */
	var DelegatingAsyncIterator = /** @class */ (function () {
	    function DelegatingAsyncIterator(observable, dispatcher) {
	        this.observable = observable;
	        this.dispatcher = dispatcher;
	    }
	    DelegatingAsyncIterator.prototype.dispatch = function (req) {
	        this.dispatcher(req);
	    };
	    DelegatingAsyncIterator.prototype.subscribe = function (subscriber) {
	        this.observable.subscribe(subscriber);
	    };
	    return DelegatingAsyncIterator;
	}());
	exports.DelegatingAsyncIterator = DelegatingAsyncIterator;
	function lift(iterator, operator) {
	    var operators = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        operators[_i - 2] = arguments[_i];
	    }
	    var _a = iterator instanceof DelegatingAsyncIterator
	        ? [iterator.observable, iterator.dispatcher]
	        : [iterator, function (req) { return iterator.dispatch(req); }], observable = _a[0], dispatcher = _a[1];
	    var liftedObservable = dist$3.lift.apply(undefined, tslib_es6.__spreadArrays([
	        observable,
	        operator
	    ], operators));
	    return new DelegatingAsyncIterator(liftedObservable, dispatcher);
	}
	exports.lift = lift;
	exports.map = function (iterator, mapper) {
	    var _a = iterator instanceof DelegatingAsyncIterator
	        ? [iterator.observable, iterator.dispatcher]
	        : [iterator, function (req) { return iterator.dispatch(req); }], delegate = _a[0], dispatcher = _a[1];
	    var mappedDispatcher = function (req) { return dispatcher(mapper(req)); };
	    return new DelegatingAsyncIterator(delegate, mappedDispatcher);
	};

	});

	unwrapExports(dist$a);
	var dist_1$a = dist$a.DelegatingAsyncIterator;
	var dist_2$8 = dist$a.lift;
	var dist_3$5 = dist$a.map;

	var dist$b = createCommonjsModule(function (module, exports) {
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
	function lift(source, operator) {
	    var operators = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        operators[_i - 2] = arguments[_i];
	    }
	    var observable = dist$3.lift.apply(undefined, tslib_es6.__spreadArrays([
	        source instanceof LiftedObservableResource ? source.observable : source,
	        operator
	    ], operators));
	    var disposable = source instanceof LiftedObservableResource ? source.disposable : source;
	    return new LiftedObservableResource(observable, disposable);
	}
	exports.lift = lift;

	});

	unwrapExports(dist$b);
	var dist_1$b = dist$b.lift;

	var dist$c = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/** @noInheritDoc */
	var DelegatingAsyncIteratorResource = /** @class */ (function (_super) {
	    tslib_es6.__extends(DelegatingAsyncIteratorResource, _super);
	    function DelegatingAsyncIteratorResource(observable, dispatcher) {
	        var _this = _super.call(this, observable, dispatcher) || this;
	        _this.disposable = observable;
	        return _this;
	    }
	    Object.defineProperty(DelegatingAsyncIteratorResource.prototype, "isDisposed", {
	        get: function () {
	            return this.disposable.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DelegatingAsyncIteratorResource.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    DelegatingAsyncIteratorResource.prototype.dispose = function () {
	        this.disposable.dispose();
	    };
	    DelegatingAsyncIteratorResource.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    return DelegatingAsyncIteratorResource;
	}(dist$a.DelegatingAsyncIterator));
	function lift(iterator, operator) {
	    var operators = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        operators[_i - 2] = arguments[_i];
	    }
	    var _a = iterator instanceof DelegatingAsyncIteratorResource
	        ? [iterator.disposable, iterator.dispatcher]
	        : [iterator, function (req) { return iterator.dispatch(req); }], delegate = _a[0], dispatcher = _a[1];
	    var liftedObservableResource = dist$b.lift.apply(undefined, tslib_es6.__spreadArrays([
	        delegate,
	        operator
	    ], operators));
	    return new DelegatingAsyncIteratorResource(liftedObservableResource, dispatcher);
	}
	exports.lift = lift;
	exports.map = function (iterator, mapper) {
	    var _a = iterator instanceof DelegatingAsyncIteratorResource
	        ? [iterator.disposable, iterator.dispatcher]
	        : [iterator, function (req) { return iterator.dispatch(req); }], delegate = _a[0], dispatcher = _a[1];
	    var mappedDispatcher = function (req) { return dispatcher(mapper(req)); };
	    return new DelegatingAsyncIteratorResource(delegate, mappedDispatcher);
	};

	});

	unwrapExports(dist$c);
	var dist_1$c = dist$c.lift;
	var dist_2$9 = dist$c.map;

	var dist$d = createCommonjsModule(function (module, exports) {
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
	var makeObservable = function (observable, updateState, updateError) {
	    return dist$3.lift(observable, dist$1.observe({
	        next: function (data) { return updateState(function (_) { return data; }); },
	        complete: function (error) { return updateError(function (_) { return error; }); },
	    }));
	};
	exports.useObservable = function (factory, deps) {
	    var _a = react.useState(undefined), state = _a[0], updateState = _a[1];
	    var _b = react.useState(undefined), error = _b[0], updateError = _b[1];
	    var observable = react.useMemo(factory, deps);
	    exports.useDisposable(function () {
	        return dist$3.connect(makeObservable(observable, updateState, updateError), dist$9.scheduler);
	    }, [updateState, updateError, dist$9.scheduler]);
	    if (error !== undefined) {
	        throw error;
	    }
	    return state;
	};
	exports.useObservableResource = function (factory, deps) {
	    var observableResource = react.useMemo(factory, deps);
	    useDispose(observableResource);
	    return exports.useObservable(function () { return observableResource; }, [observableResource]);
	};
	exports.useAsyncIteratorResource = function (factory, deps) {
	    var iterator = react.useMemo(factory, deps);
	    useDispose(iterator);
	    var dispatch = react.useCallback(function (req) { return iterator.dispatch(req); }, [iterator]);
	    var value = exports.useObservable(function () { return iterator; }, [iterator]);
	    return [value, dispatch];
	};

	});

	unwrapExports(dist$d);
	var dist_1$d = dist$d.useDisposable;
	var dist_2$a = dist$d.useObservable;
	var dist_3$6 = dist$d.useObservableResource;
	var dist_4$3 = dist$d.useAsyncIteratorResource;

	var dist$e = createCommonjsModule(function (module, exports) {
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

	unwrapExports(dist$e);
	var dist_1$e = dist$e.empty;
	var dist_2$b = dist$e.equals;

	var dist$f = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var routesReducer = function (acc, _a) {
	    var path = _a[0], component = _a[1];
	    acc[path] = component;
	    return acc;
	};
	var pairify = function (_a, next) {
	    var _ = _a[0], oldState = _a[1];
	    return oldState === dist$e.empty ? [undefined, next] : [oldState, next];
	};
	exports.create = function (locationResourceFactory) {
	    var ReactRouter = function (_a) {
	        var notFoundComponent = _a.notFoundComponent, routes = _a.routes;
	        var routeMap = react.useMemo(function () { return routes.reduce(routesReducer, {}); }, [routes]);
	        var _b = dist$d.useAsyncIteratorResource(function () {
	            return dist$c.lift(locationResourceFactory(), dist$8.scan(pairify, [undefined, dist$e.empty]));
	        }, []), route = _b[0], uriUpdater = _b[1];
	        var child = route !== undefined
	            ? react.createElement(routeMap[route[1].path] || notFoundComponent, {
	                referer: route[0],
	                uri: route[1],
	                uriUpdater: uriUpdater,
	            })
	            : null;
	        return child;
	    };
	    return ReactRouter;
	};

	});

	unwrapExports(dist$f);
	var dist_1$f = dist$f.create;

	var dist$g = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var EventResourceImpl = /** @class */ (function () {
	    function EventResourceImpl(priority) {
	        this.subject = dist$6.create(priority);
	    }
	    Object.defineProperty(EventResourceImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.subject.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    EventResourceImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.subject).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    EventResourceImpl.prototype.dispatch = function (event) {
	        this.subject.next(event);
	    };
	    EventResourceImpl.prototype.dispose = function () {
	        this.subject.dispose();
	    };
	    EventResourceImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.subject).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    EventResourceImpl.prototype.subscribe = function (subscriber) {
	        this.subject.subscribe(subscriber);
	    };
	    return EventResourceImpl;
	}());
	exports.create = function (priority) {
	    return new EventResourceImpl(priority);
	};

	});

	unwrapExports(dist$g);
	var dist_1$g = dist$g.create;

	var dist$h = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });







	var BatchScanOnSchedulerSubscriber = /** @class */ (function (_super) {
	    tslib_es6.__extends(BatchScanOnSchedulerSubscriber, _super);
	    function BatchScanOnSchedulerSubscriber(delegate, initialValue, priority) {
	        var _this = _super.call(this, delegate) || this;
	        _this.isComplete = false;
	        _this.nextQueue = [];
	        _this.clearQueue = function () {
	            _this.nextQueue.length = 0;
	        };
	        _this.drainQueue = function (shouldYield) {
	            try {
	                while (_this.nextQueue.length > 0) {
	                    var stateUpdater = _this.nextQueue.shift();
	                    _this.acc = stateUpdater(_this.acc);
	                    var yieldRequest = shouldYield();
	                    var hasMoreEvents = _this.remainingEvents > 0;
	                    if (!hasMoreEvents || yieldRequest) {
	                        _this.delegate.next(_this.acc);
	                    }
	                    if (yieldRequest && hasMoreEvents) {
	                        return _this.continuation;
	                    }
	                }
	            }
	            catch (error) {
	                _this.remove(_this.clearQueue);
	                _this.complete(error);
	                return;
	            }
	            if (_this.isComplete) {
	                _this.remove(_this.clearQueue);
	                _this.delegate.complete(_this.error);
	            }
	            return;
	        };
	        _this.acc = initialValue;
	        _this.priority = priority;
	        _this.continuation = {
	            continuation: _this.drainQueue,
	            priority: _this.priority,
	        };
	        _this.add(_this.clearQueue);
	        return _this;
	    }
	    Object.defineProperty(BatchScanOnSchedulerSubscriber.prototype, "remainingEvents", {
	        get: function () {
	            return this.nextQueue.length + (this.isComplete ? 1 : 0);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BatchScanOnSchedulerSubscriber.prototype.onComplete = function (error) {
	        this.isComplete = true;
	        this.error = error;
	        this.scheduleDrainQueue();
	    };
	    BatchScanOnSchedulerSubscriber.prototype.onNext = function (data) {
	        this.nextQueue.push(data);
	        this.scheduleDrainQueue();
	    };
	    BatchScanOnSchedulerSubscriber.prototype.scheduleDrainQueue = function () {
	        if (this.remainingEvents === 1) {
	            this.schedule(this.drainQueue, 0, this.priority);
	        }
	    };
	    return BatchScanOnSchedulerSubscriber;
	}(dist$1.DelegatingSubscriber));
	var batchScanOnScheduler = function (initialState, priority) { return function (subscriber) { return new BatchScanOnSchedulerSubscriber(subscriber, initialState, priority); }; };
	var StateContainerResourceImpl = /** @class */ (function () {
	    function StateContainerResourceImpl(initialState, equals, scheduler, priority) {
	        this.dispatcher = dist$g.create();
	        this.delegate = dist$7.shareReplayLast(dist$3.lift(this.dispatcher, batchScanOnScheduler(initialState, priority), dist$8.distinctUntilChanged(equals)), scheduler, priority);
	        this.disposable = dist.create();
	        this.disposable.add(this.dispatcher, dist$3.connect(this.delegate, scheduler));
	    }
	    Object.defineProperty(StateContainerResourceImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.disposable.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    StateContainerResourceImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    StateContainerResourceImpl.prototype.dispatch = function (updater) {
	        this.dispatcher.dispatch(updater);
	    };
	    StateContainerResourceImpl.prototype.dispose = function () {
	        this.disposable.dispose();
	    };
	    StateContainerResourceImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    StateContainerResourceImpl.prototype.subscribe = function (subscriber) {
	        this.delegate.subscribe(subscriber);
	    };
	    return StateContainerResourceImpl;
	}());
	var referenceEquality = function (a, b) { return a === b; };
	exports.create = function (initialState, equals, scheduler, priority) {
	    if (equals === void 0) { equals = referenceEquality; }
	    return new StateContainerResourceImpl(initialState, equals, scheduler, priority);
	};

	});

	unwrapExports(dist$h);
	var dist_1$h = dist$h.create;

	var dist$i = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.fromEvent = function (target, eventName, selector, priority) {
	    return dist$3.create(function (observer) {
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
	    }, priority);
	};

	});

	unwrapExports(dist$i);
	var dist_1$i = dist$i.fromEvent;

	var dist$j = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });










	var getCurrentLocation = function () {
	    var path = window.location.pathname;
	    var query = window.location.search;
	    var fragment = window.location.hash;
	    return path + query + fragment;
	};
	var DomLocationStateContainerResourceImpl = /** @class */ (function () {
	    function DomLocationStateContainerResourceImpl(scheduler, priority) {
	        var stateContainer = dist$h.create("", undefined, scheduler, priority);
	        var subscription = dist$3.connect(dist$7.merge(dist$3.lift(dist$i.fromEvent(window, "popstate", function (_) { return getCurrentLocation(); }, priority), dist$8.onNext(function (state) { return stateContainer.dispatch(function (_) { return state; }); })), dist$3.lift(stateContainer, dist$8.keep(function (location) { return location !== getCurrentLocation(); }), dist$8.onNext(function (next) {
	            return window.history.pushState(undefined, "", next);
	        }))), scheduler);
	        this.disposable = dist.create();
	        this.disposable.add(subscription, stateContainer);
	        this.stateContainer = stateContainer;
	        stateContainer.dispatch(function (_) { return getCurrentLocation(); });
	    }
	    Object.defineProperty(DomLocationStateContainerResourceImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.disposable.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DomLocationStateContainerResourceImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).add.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    DomLocationStateContainerResourceImpl.prototype.dispatch = function (updater) {
	        this.stateContainer.dispatch(updater);
	    };
	    DomLocationStateContainerResourceImpl.prototype.dispose = function () {
	        this.disposable.dispose();
	    };
	    DomLocationStateContainerResourceImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).remove.apply(_a, tslib_es6.__spreadArrays([disposable], disposables));
	    };
	    DomLocationStateContainerResourceImpl.prototype.subscribe = function (subscriber) {
	        this.stateContainer.subscribe(subscriber);
	    };
	    return DomLocationStateContainerResourceImpl;
	}());
	var fakeURLBase = new URL("http://example.com");
	var mapper = function (v) {
	    var parsedAccURL = new URL(v, fakeURLBase);
	    return {
	        path: parsedAccURL.pathname,
	        query: parsedAccURL.search,
	        fragment: parsedAccURL.hash,
	    };
	};
	var reducer = function (acc, stateUpdater) {
	    var parsedAccURL = new URL(acc, fakeURLBase);
	    var accRelativeURI = {
	        path: parsedAccURL.pathname,
	        query: parsedAccURL.search,
	        fragment: parsedAccURL.hash,
	    };
	    var _a = stateUpdater(accRelativeURI), path = _a.path, query = _a.query, fragment = _a.fragment;
	    return path + query + fragment;
	};
	var requestMapper = function (updater) { return function (acc) {
	    return reducer(acc, updater);
	}; };
	var createRelativeURILocation = function (priority) {
	    var lifted = dist$c.lift(new DomLocationStateContainerResourceImpl(dist$9.scheduler, priority), dist$8.map(mapper), dist$8.distinctUntilChanged(), dist$8.onNext(function (_a) {
	        var path = _a.path, query = _a.query, fragment = _a.fragment;
	        var uri = path + query + fragment;
	        history.pushState(undefined, "", uri);
	    }));
	    return dist$c.map(lifted, requestMapper);
	};
	exports.create = function (priority) {
	    return dist$f.create(function () { return createRelativeURILocation(priority); });
	};

	});

	unwrapExports(dist$j);
	var dist_1$j = dist$j.create;

	var dist$k = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	var react_1 = tslib_es6.__importDefault(react);
	var react_dom_1 = tslib_es6.__importDefault(reactDom);


	dist$2.registerDefaultScheduler(dist$9.scheduler);
	var react_2 = react;
	var Router = dist$j.create();
	var NotFound = function (_a) {
	    var uriUpdater = _a.uriUpdater;
	    react_2.useEffect(function () {
	        uriUpdater(function (state) { return (tslib_es6.__assign(tslib_es6.__assign({}, state), { path: "/route1" })); });
	    }, [uriUpdater]);
	    return react_1.default.createElement("div", null, "Not Found");
	};
	var Component1 = function (props) { return react_1.default.createElement("div", null, "Component1"); };
	var element = (react_1.default.createElement(Router, { notFoundComponent: NotFound, routes: [[
	            "/route1", Component1
	        ]] }));
	react_dom_1.default.render(element, document.getElementById("root"));
	dist$3.connect(dist$3.lift(dist$7.generate(function (x) { return x + 1; }, 0, 3000), dist$8.onNext(console.log)));

	});

	var index = unwrapExports(dist$k);

	return index;

}(React, ReactDOM));
