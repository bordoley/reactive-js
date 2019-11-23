var ExampleReact = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var observer = createCommonjsModule(function (module, exports) {
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

	unwrapExports(observer);
	var observer_1 = observer.NotificationKind;
	var observer_2 = observer.notify;

	var subscriber = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
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
	        (_a = this.subscription).add.apply(_a, __spreadArrays([disposable], disposables));
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
	        (_a = this.subscription).remove.apply(_a, __spreadArrays([disposable], disposables));
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
	    __extends(AutoDisposingSubscriberImpl, _super);
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
	exports.AutoDisposingSubscriber = {
	    create: function (scheduler, subscription) {
	        return new AutoDisposingSubscriberImpl(scheduler, subscription);
	    },
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
	var DelegatingSubscriber = /** @class */ (function (_super) {
	    __extends(DelegatingSubscriber, _super);
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
	    __extends(ObserveSubscriber, _super);
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
	var toSafeObserver = function (subscriber, priority) { return new SafeObserver(subscriber, priority); };
	exports.Subscriber = {
	    toSafeObserver: toSafeObserver,
	};

	});

	unwrapExports(subscriber);
	var subscriber_1 = subscriber.AutoDisposingSubscriber;
	var subscriber_2 = subscriber.DelegatingSubscriber;
	var subscriber_3 = subscriber.observe;
	var subscriber_4 = subscriber.Subscriber;

	var disposable = createCommonjsModule(function (module, exports) {
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
	var create = function () { return new DisposableImpl(); };
	var disposed = create();
	disposed.dispose();
	exports.Disposable = {
	    create: create,
	    disposed: disposed,
	};
	exports.throwIfDisposed = function (disposable) {
	    if (disposable.isDisposed) {
	        throw new Error("Disposed");
	    }
	};

	});

	unwrapExports(disposable);
	var disposable_1 = disposable.Disposable;
	var disposable_2 = disposable.throwIfDisposed;

	var serialDisposable = createCommonjsModule(function (module, exports) {
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });

	var SerialDisposableImpl = /** @class */ (function () {
	    function SerialDisposableImpl() {
	        this._disposable = disposable.Disposable.disposed;
	        this.delegate = disposable.Disposable.create();
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
	        (_a = this.delegate).add.apply(_a, __spreadArrays([disposable], disposables));
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
	        (_a = this.delegate).remove.apply(_a, __spreadArrays([disposable], disposables));
	    };
	    return SerialDisposableImpl;
	}());
	exports.SerialDisposable = {
	    create: function () { return new SerialDisposableImpl(); },
	};

	});

	unwrapExports(serialDisposable);
	var serialDisposable_1 = serialDisposable.SerialDisposable;

	var dist = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Disposable = disposable.Disposable;
	exports.throwIfDisposed = disposable.throwIfDisposed;

	exports.SerialDisposable = serialDisposable.SerialDisposable;

	});

	unwrapExports(dist);
	var dist_1 = dist.Disposable;
	var dist_2 = dist.throwIfDisposed;
	var dist_3 = dist.SerialDisposable;

	var dist$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var DefaultScheduler = /** @class */ (function () {
	    function DefaultScheduler() {
	    }
	    DefaultScheduler.prototype.register = function (scheduler) {
	        if (this._instance !== undefined && scheduler !== this._instance) {
	            throw new Error("Default scheduler already registered");
	        }
	        this._instance = scheduler;
	    };
	    Object.defineProperty(DefaultScheduler.prototype, "instance", {
	        get: function () {
	            if (this._instance === undefined) {
	                throw new Error("No default scheduler registered");
	            }
	            return this._instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DefaultScheduler;
	}());
	exports.defaultScheduler = new DefaultScheduler();

	});

	unwrapExports(dist$1);
	var dist_1$1 = dist$1.defaultScheduler;

	var observable = createCommonjsModule(function (module, exports) {
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });



	var connect = function (observable, scheduler) {
	    if (scheduler === void 0) { scheduler = dist$1.defaultScheduler.instance; }
	    var subscription = dist.Disposable.create();
	    var subscriber$1 = subscriber.AutoDisposingSubscriber.create(scheduler, subscription);
	    observable.subscribe(subscriber$1);
	    subscriber$1.isConnected = true;
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
	        ? __spreadArrays(source.operators, [operator], operators) : __spreadArrays([operator], operators);
	    return new LiftedObservable(sourceSource, allOperators);
	}
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
	        (_a = this.disposable).add.apply(_a, __spreadArrays([disposable], disposables));
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
	        (_a = this.disposable).remove.apply(_a, __spreadArrays([disposable], disposables));
	    };
	    LiftedObservableResource.prototype.subscribe = function (subscriber) {
	        this.observable.subscribe(subscriber);
	    };
	    return LiftedObservableResource;
	}());
	function liftResource(source, operator) {
	    var operators = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        operators[_i - 2] = arguments[_i];
	    }
	    var observable = lift.apply(undefined, __spreadArrays([
	        source instanceof LiftedObservableResource ? source.observable : source,
	        operator
	    ], operators));
	    var disposable = source instanceof LiftedObservableResource ? source.disposable : source;
	    return new LiftedObservableResource(observable, disposable);
	}
	exports.ObservableResource = {
	    lift: liftResource,
	};
	var create = function (onSubscribe, priority) {
	    var subscribe = function (subscriber$1) {
	        // The idea here is that an onSubscribe function may
	        // call onNext from unscheduled sources such as event handlers.
	        // So we marshall those events back to the scheduler.
	        var observer = subscriber.Subscriber.toSafeObserver(subscriber$1, priority);
	        try {
	            var onSubscribeSubscription = onSubscribe(observer);
	            if (onSubscribeSubscription !== undefined) {
	                subscriber$1.add(onSubscribeSubscription);
	            }
	        }
	        catch (error) {
	            observer.complete(error);
	        }
	    };
	    return { subscribe: subscribe };
	};
	exports.Observable = {
	    connect: connect,
	    create: create,
	    lift: lift,
	};

	});

	unwrapExports(observable);
	var observable_1 = observable.ObservableResource;
	var observable_2 = observable.Observable;

	var dist$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.notify = observer.notify;
	exports.NotificationKind = observer.NotificationKind;

	exports.observe = subscriber.observe;
	exports.Subscriber = subscriber.Subscriber;
	exports.DelegatingSubscriber = subscriber.DelegatingSubscriber;

	exports.Observable = observable.Observable;
	exports.ObservableResource = observable.ObservableResource;

	});

	unwrapExports(dist$2);
	var dist_1$2 = dist$2.notify;
	var dist_2$1 = dist$2.NotificationKind;
	var dist_3$1 = dist$2.observe;
	var dist_4 = dist$2.Subscriber;
	var dist_5 = dist$2.DelegatingSubscriber;
	var dist_6 = dist$2.Observable;
	var dist_7 = dist$2.ObservableResource;

	var combineLatest_1 = createCommonjsModule(function (module, exports) {
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });


	var CombineLatestObserver = /** @class */ (function () {
	    function CombineLatestObserver(delegate, totalCount, allSubscriptions, ctx, index) {
	        this.innerSubscription = dist.Disposable.disposed;
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
	            var latest = __spreadArrays(this.ctx.latest);
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
	    var observables = __spreadArrays([obs1, obs2], tail);
	    var subscribe = function (subscriber) {
	        var ctx = {
	            completedCount: 0,
	            producedCount: 0,
	            latest: new Array(observables.length),
	        };
	        var allSubscriptions = dist.Disposable.create();
	        subscriber.add(allSubscriptions);
	        for (var index = 0; index < observables.length; index++) {
	            var observer = new CombineLatestObserver(subscriber, observables.length, allSubscriptions, ctx, index);
	            observer.innerSubscription = dist$2.Observable.connect(dist$2.Observable.lift(observables[index], dist$2.observe(observer)), subscriber);
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
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });


	exports.concat = function (fst, snd) {
	    var tail = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        tail[_i - 2] = arguments[_i];
	    }
	    var observables = __spreadArrays([fst, snd], tail);
	    var subscribe = function (subscriber) {
	        var queue = __spreadArrays(observables);
	        var innerSubscription = dist.Disposable.disposed;
	        var subscribeNext = function () {
	            var head = queue.shift();
	            if (head !== undefined) {
	                innerSubscription = dist$2.Observable.connect(dist$2.Observable.lift(head, dist$2.observe(observer)), subscriber);
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
	    return dist$2.Observable.create(onSubscribe, priority);
	};

	});

	unwrapExports(empty);
	var empty_1 = empty.empty;

	var fromArray = createCommonjsModule(function (module, exports) {
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
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
	    var delayedValues = __spreadArrays([value], values);
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
	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
	};
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.fromPromiseFactory = function (factory, priority) {
	    var doSubscribe = function (observer) { return __awaiter(void 0, void 0, void 0, function () {
	        var result, error_1;
	        return __generator(this, function (_a) {
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
	    return dist$2.Observable.create(onSubscribe, priority);
	};
	exports.toPromise = function (observable, scheduler) {
	    return new Promise(function (resolve, reject) {
	        var result = undefined;
	        var subscription = dist$2.Observable.connect(dist$2.Observable.lift(observable, dist$2.observe({
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
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });


	var MergeObserver = /** @class */ (function () {
	    function MergeObserver(delegate, totalCount, completedCountRef, allSubscriptions) {
	        this.innerSubscription = dist.Disposable.disposed;
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
	    var observables = __spreadArrays([fst, snd], tail);
	    var subscribe = function (subscriber) {
	        var completedCountRef = [0];
	        var allSubscriptions = dist.Disposable.create();
	        subscriber.add(allSubscriptions);
	        for (var _i = 0, observables_1 = observables; _i < observables_1.length; _i++) {
	            var observable = observables_1[_i];
	            var observer = new MergeObserver(subscriber, observables.length, completedCountRef, allSubscriptions);
	            observer.innerSubscription = dist$2.Observable.connect(dist$2.Observable.lift(observable, dist$2.observe(observer)), subscriber);
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
	    return dist$2.Observable.create(function (observer) {
	        observer.next(value);
	        observer.complete();
	    }, priority);
	};

	});

	unwrapExports(ofValue);
	var ofValue_1 = ofValue.ofValue;

	var repeat = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });


	var RepeatSubscriber = /** @class */ (function (_super) {
	    __extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(delegate, observable, shouldRepeat) {
	        var _this = _super.call(this, delegate) || this;
	        _this.observable = observable;
	        _this.shouldRepeat = shouldRepeat;
	        _this.innerSubscription = dist.SerialDisposable.create();
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
	            this.parent.innerSubscription.disposable = dist$2.Observable.connect(dist$2.Observable.lift(this.parent.observable, dist$2.observe(this.parent.observer)), this.parent);
	        };
	        return class_1;
	    }());
	    return RepeatSubscriber;
	}(dist$2.DelegatingSubscriber));
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
	    return dist$2.Observable.lift(observable, repeatOperator(observable, repeatPredicate));
	};
	var alwaysTrue1 = function (_) { return true; };
	var defaultRetryPredicate = function (error) { return error !== undefined; };
	exports.retry = function (observable, predicate) {
	    if (predicate === void 0) { predicate = alwaysTrue1; }
	    var retryPredicate = predicate === alwaysTrue1
	        ? defaultRetryPredicate
	        : function (error) { return error !== undefined && predicate(error); };
	    return dist$2.Observable.lift(observable, repeatOperator(observable, retryPredicate));
	};

	});

	unwrapExports(repeat);
	var repeat_1 = repeat.repeat;
	var repeat_2 = repeat.retry;

	var throws_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.throws = function (error, priority) {
	    return dist$2.Observable.create(function (observer) {
	        observer.complete(error);
	    }, priority);
	};

	});

	unwrapExports(throws_1);

	var dist$3 = createCommonjsModule(function (module, exports) {
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

	exports.throws = throws_1.throws;

	});

	unwrapExports(dist$3);
	var dist_1$3 = dist$3.combineLatest;
	var dist_2$2 = dist$3.concat;
	var dist_3$2 = dist$3.empty;
	var dist_4$1 = dist$3.fromArray;
	var dist_5$1 = dist$3.fromScheduledValues;
	var dist_6$1 = dist$3.fromPromiseFactory;
	var dist_7$1 = dist$3.toPromise;
	var dist_8 = dist$3.generate;
	var dist_9 = dist$3.merge;
	var dist_10 = dist$3.never;
	var dist_11 = dist$3.ofValue;
	var dist_12 = dist$3.repeat;
	var dist_13 = dist$3.retry;

	var debounce = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });


	var DebounceTimeSubscriber = /** @class */ (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(delegate, dueTime, priority) {
	        var _this = _super.call(this, delegate) || this;
	        _this.innerSubscription = dist.Disposable.disposed;
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
	        this.innerSubscription = dist.Disposable.disposed;
	    };
	    DebounceTimeSubscriber.prototype.notifyNext = function () {
	        if (this.value !== undefined) {
	            var value = this.value[0];
	            this.value = undefined;
	            this.delegate.next(value);
	        }
	    };
	    return DebounceTimeSubscriber;
	}(dist$2.DelegatingSubscriber));
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
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var DelaySubscriber = /** @class */ (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(delegate, delay, priority) {
	        var _this = _super.call(this, delegate) || this;
	        _this.queue = [];
	        _this.doWork = function (shouldYield) {
	            var now = _this.now;
	            while (_this.queue.length > 0) {
	                var _a = _this.queue[0], nextDueTime = _a[0], notification = _a[1];
	                if (now >= nextDueTime) {
	                    _this.queue.shift();
	                    dist$2.notify(_this.delegate, notification);
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
	        this.doSchedule([dist$2.NotificationKind.Complete, error]);
	    };
	    DelaySubscriber.prototype.onNext = function (data) {
	        this.doSchedule([dist$2.NotificationKind.Next, data]);
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
	}(dist$2.DelegatingSubscriber));
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
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var DistinctUntilChangedSubscriber = /** @class */ (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
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
	}(dist$2.DelegatingSubscriber));
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
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var IgnoreElementsSubscriber = /** @class */ (function (_super) {
	    __extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber(delegate) {
	        return _super.call(this, delegate) || this;
	    }
	    IgnoreElementsSubscriber.prototype.onNext = function (data) { };
	    IgnoreElementsSubscriber.prototype.onComplete = function (error) {
	        this.delegate.complete(error);
	    };
	    return IgnoreElementsSubscriber;
	}(dist$2.DelegatingSubscriber));
	exports.ignoreElements = function () { return function (subscriber) { return new IgnoreElementsSubscriber(subscriber); }; };

	});

	unwrapExports(ignoreElements);
	var ignoreElements_1 = ignoreElements.ignoreElements;

	var keep = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var KeepSubscriber = /** @class */ (function (_super) {
	    __extends(KeepSubscriber, _super);
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
	}(dist$2.DelegatingSubscriber));
	exports.keep = function (predicate) { return function (subscriber) { return new KeepSubscriber(subscriber, predicate); }; };

	});

	unwrapExports(keep);
	var keep_1 = keep.keep;

	var map = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var MapSubscriber = /** @class */ (function (_super) {
	    __extends(MapSubscriber, _super);
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
	}(dist$2.DelegatingSubscriber));
	exports.map = function (mapper) { return function (subscriber) { return new MapSubscriber(subscriber, mapper); }; };
	exports.mapTo = function (value) { return exports.map(function (_) { return value; }); };

	});

	unwrapExports(map);
	var map_1 = map.map;
	var map_2 = map.mapTo;

	var merge$1 = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var MergeSubscriber = /** @class */ (function (_super) {
	    __extends(MergeSubscriber, _super);
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
	                var nextObsSubscription_1 = dist$2.Observable.connect(dist$2.Observable.lift(nextObs, dist$2.observe({
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
	}(dist$2.DelegatingSubscriber));
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

	var rx_core_2 = dist$2;
	exports.observe = rx_core_2.observe;
	var ignore = function (data) { };
	exports.onNext = function (onNext) {
	    return dist$2.observe({
	        next: onNext,
	        complete: ignore,
	    });
	};
	exports.onComplete = function (onComplete) {
	    return dist$2.observe({
	        next: ignore,
	        complete: onComplete,
	    });
	};
	exports.onError = function (onError) {
	    return dist$2.observe({
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
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var ScanSubscriber = /** @class */ (function (_super) {
	    __extends(ScanSubscriber, _super);
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
	}(dist$2.DelegatingSubscriber));
	exports.scan = function (scanner, initialValue) { return function (subscriber) {
	    return new ScanSubscriber(subscriber, scanner, initialValue);
	}; };

	});

	unwrapExports(scan);
	var scan_1 = scan.scan;

	var _switch = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });


	var SwitchSubscriber = /** @class */ (function (_super) {
	    __extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(delegate) {
	        var _this = _super.call(this, delegate) || this;
	        _this.innerSubscription = dist.SerialDisposable.create();
	        _this.add(_this.innerSubscription);
	        return _this;
	    }
	    SwitchSubscriber.prototype.onComplete = function (error) {
	        this.remove(this.innerSubscription);
	        this.delegate.complete(error);
	    };
	    SwitchSubscriber.prototype.onNext = function (data) {
	        this.innerSubscription.disposable = dist.Disposable.disposed;
	        this.innerSubscription.disposable = dist$2.Observable.connect(dist$2.Observable.lift(data, dist$2.observe(new SwitchSubscriber.InnerObserver(this))), this);
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
	}(dist$2.DelegatingSubscriber));
	// tslint:disable-next-line variable-name
	exports.switch_ = function () { return function (subscriber) {
	    return new SwitchSubscriber(subscriber);
	}; };

	});

	unwrapExports(_switch);
	var _switch_1 = _switch.switch_;

	var take = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var TakeSubscriber = /** @class */ (function (_super) {
	    __extends(TakeSubscriber, _super);
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
	}(dist$2.DelegatingSubscriber));
	exports.take = function (count) { return function (subscriber) {
	    return new TakeSubscriber(subscriber, count);
	}; };
	var TakeLastSubscriber = /** @class */ (function (_super) {
	    __extends(TakeLastSubscriber, _super);
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
	}(dist$2.DelegatingSubscriber));
	exports.takeLast = function (count, priority) { return function (subscriber) {
	    return new TakeLastSubscriber(subscriber, count, priority);
	}; };

	});

	unwrapExports(take);
	var take_1 = take.take;
	var take_2 = take.takeLast;

	var withLatestFrom = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });

	var WithLatestFromSubscriber = /** @class */ (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(delegate, other, selector) {
	        var _this = _super.call(this, delegate) || this;
	        _this.selector = selector;
	        _this.otherSubscription = dist$2.Observable.connect(dist$2.Observable.lift(other, dist$2.observe(new WithLatestFromSubscriber.InnerObserver(_this))), _this);
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
	}(dist$2.DelegatingSubscriber));
	exports.withLatestFrom = function (other, selector) { return function (subscriber) {
	    return new WithLatestFromSubscriber(subscriber, other, selector);
	}; };

	});

	unwrapExports(withLatestFrom);
	var withLatestFrom_1 = withLatestFrom.withLatestFrom;

	var dist$4 = createCommonjsModule(function (module, exports) {
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

	unwrapExports(dist$4);
	var dist_1$4 = dist$4.debounceTime;
	var dist_2$3 = dist$4.delay;
	var dist_3$3 = dist$4.distinctUntilChanged;
	var dist_4$2 = dist$4.ignoreElements;
	var dist_5$2 = dist$4.keep;
	var dist_6$2 = dist$4.map;
	var dist_7$2 = dist$4.mapTo;
	var dist_8$1 = dist$4.concat;
	var dist_9$1 = dist$4.exhaust;
	var dist_10$1 = dist$4.merge;
	var dist_11$1 = dist$4.observe;
	var dist_12$1 = dist$4.onNext;
	var dist_13$1 = dist$4.onComplete;
	var dist_14 = dist$4.onError;
	var dist_15 = dist$4.scan;
	var dist_16 = dist$4.switch_;
	var dist_17 = dist$4.take;
	var dist_18 = dist$4.takeLast;
	var dist_19 = dist$4.withLatestFrom;

	var dist$5 = createCommonjsModule(function (module, exports) {
	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
	};
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });

	var EventLoopSchedulerImpl = /** @class */ (function () {
	    function EventLoopSchedulerImpl(timeout) {
	        var _this = this;
	        this._inScheduledContinuation = false;
	        this.startTime = this.now;
	        this.workqueue = [];
	        this.timeout = timeout;
	        this.disposable = dist.Disposable.create();
	        this.disposable.add(function () {
	            _this.workqueue.length = 0;
	        });
	    }
	    Object.defineProperty(EventLoopSchedulerImpl.prototype, "inScheduledContinuation", {
	        get: function () {
	            return this._inScheduledContinuation;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EventLoopSchedulerImpl.prototype, "isDisposed", {
	        get: function () {
	            return this.disposable.isDisposed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EventLoopSchedulerImpl.prototype, "now", {
	        get: function () {
	            return Date.now();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    EventLoopSchedulerImpl.prototype.add = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).add.apply(_a, __spreadArrays([disposable], disposables));
	    };
	    EventLoopSchedulerImpl.prototype.dispose = function () {
	        return this.disposable.dispose();
	    };
	    EventLoopSchedulerImpl.prototype.remove = function (disposable) {
	        var _a;
	        var disposables = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            disposables[_i - 1] = arguments[_i];
	        }
	        (_a = this.disposable).remove.apply(_a, __spreadArrays([disposable], disposables));
	    };
	    EventLoopSchedulerImpl.prototype.schedule = function (continuation, delay, _priority) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        dist.throwIfDisposed(this.disposable);
	        var disposable = dist.SerialDisposable.create();
	        var shouldYield = function () {
	            return disposable.isDisposed || _this.startTime + _this.timeout < _this.now;
	        };
	        var ctx = {
	            continuation: continuation,
	            delay: Math.max(delay, 0),
	            disposable: disposable,
	            scheduler: this,
	            shouldYield: shouldYield,
	        };
	        this.scheduleInternal(ctx);
	        return ctx.disposable;
	    };
	    EventLoopSchedulerImpl.prototype.drainQueue = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var ctx;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!(this.workqueue.length > 0 && !this.disposable.isDisposed)) return [3 /*break*/, 2];
	                        ctx = this.workqueue.shift();
	                        this.executeContinuation(ctx);
	                        // Not sure this is really necessary, but let's yield back
	                        // to the JS microtask queue between continuation executions
	                        // to avoid hogging too much cpu.
	                        return [4 /*yield*/, Promise.resolve()];
	                    case 1:
	                        // Not sure this is really necessary, but let's yield back
	                        // to the JS microtask queue between continuation executions
	                        // to avoid hogging too much cpu.
	                        _a.sent();
	                        return [3 /*break*/, 0];
	                    case 2: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    EventLoopSchedulerImpl.prototype.executeContinuation = function (ctx) {
	        return __awaiter(this, void 0, void 0, function () {
	            var continuation, shouldYield, result, resultContinuation, _a, resultDelay, reuseSetInterval;
	            return __generator(this, function (_b) {
	                continuation = ctx.continuation, shouldYield = ctx.shouldYield;
	                this.startTime = this.now;
	                this._inScheduledContinuation = true;
	                result = continuation(shouldYield);
	                this._inScheduledContinuation = false;
	                if (result !== undefined) {
	                    resultContinuation = result.continuation, _a = result.delay, resultDelay = _a === void 0 ? 0 : _a;
	                    ctx.continuation = resultContinuation;
	                    reuseSetInterval = resultDelay === ctx.delay && ctx.delay !== 0;
	                    ctx.delay = Math.max(resultDelay, 0);
	                    if (!reuseSetInterval) {
	                        this.scheduleInternal(ctx);
	                    }
	                }
	                else {
	                    ctx.disposable.dispose();
	                }
	                return [2 /*return*/];
	            });
	        });
	    };
	    EventLoopSchedulerImpl.prototype.scheduleInternal = function (ctx) {
	        ctx.disposable.disposable.dispose();
	        if (this.disposable.isDisposed) {
	            return;
	        }
	        // Schedule continuations on the JS task queue to avoid a greedy producer
	        // from hogging the scheduler and preventing other users of delays etc.
	        // from scheduling work. For instance consider this pathological example:
	        //
	        //   Observable.lift(
	        //     generate(x => x + 1, 0),
	        //     map(x => fromArray([x, x, x, x])),
	        //     exhaust(),
	        //     onNext(console.log),
	        //    );
	        //
	        // which doesn't work with then the result of generate are scheduled as
	        // microtasks.
	        if (ctx.delay > 0) {
	            var timeout_1 = setInterval(EventLoopSchedulerImpl.callback, ctx.delay, ctx);
	            ctx.disposable.disposable = dist.Disposable.create();
	            ctx.disposable.disposable.add(function () { return clearInterval(timeout_1); });
	        }
	        else {
	            // FIXME: Shim setImmediate for the browser case or require a polyfill.
	            var immediate_1 = setImmediate(EventLoopSchedulerImpl.callback, ctx);
	            ctx.disposable.disposable = dist.Disposable.create();
	            ctx.disposable.disposable.add(function () { return clearImmediate(immediate_1); });
	        }
	    };
	    EventLoopSchedulerImpl.callback = function (ctx) {
	        if (!ctx.scheduler.disposable.isDisposed) {
	            ctx.scheduler.workqueue.push(ctx);
	            if (ctx.scheduler.workqueue.length === 1) {
	                ctx.scheduler.drainQueue();
	            }
	        }
	    };
	    return EventLoopSchedulerImpl;
	}());
	var create = function (timeout) {
	    if (timeout === void 0) { timeout = 500; }
	    return new EventLoopSchedulerImpl(timeout);
	};
	exports.EventLoopScheduler = {
	    create: create,
	};

	});

	unwrapExports(dist$5);
	var dist_1$5 = dist$5.EventLoopScheduler;

	var dist$6 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	//import { scheduler } from "@reactive-js/react-scheduler";
	var scheduler = dist$5.EventLoopScheduler.create();
	dist$1.defaultScheduler.register(scheduler);
	/*
	const Router = DomRouter.create();

	const NotFound = (props: RoutableComponentProps) => <div>{"Not Found"}</div>;

	const Component1 = (props: RoutableComponentProps) => <div>{"Component1"}</div>;

	const element = (
	  <Router notFoundComponent={NotFound} routes={[["", Component1]]} />
	);*/
	dist$2.Observable.connect(dist$2.Observable.lift(dist$3.generate(function (x) { return x + 1; }, 0, 3000), dist$4.onNext(console.log)));
	//ReactDOM.render(element, document.getElementById("root") as HTMLElement);

	});

	var index = unwrapExports(dist$6);

	return index;

}());
