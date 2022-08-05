/// <reference types="./ObservableLike.d.ts" />
import { reactive, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { MAX_SAFE_INTEGER } from '../__internal__/env.mjs';
import { createOnSink } from '../__internal__/rx/ReactiveContainerLikeInternal.mjs';
import { observerMixin, createDelegatingObserver, createDecodeWithCharsetObserver, createDistinctUntilChangedObserver, createForEachObserver, createKeepObserver, createMapObserver, createPairwiseObserver, createReduceObserver, createScanObserver, createSkipFirstObserver, createTakeFirstObserver, createTakeLastObserver, createTakeWhileObserver, createThrowIfEmptyObserver } from '../__internal__/scheduling/ObserverLikeMixin.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, isInContinuation } from '../__internal__/schedulingInternal.mjs';
import { disposableMixin, createDisposableRef } from '../__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from '../__internal__/util/EnumeratorLikeMixin.mjs';
import { MutableRefLike_current } from '../__internal__/util/MutableRefLike.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/Object.mjs';
import { createEnumeratorSink } from '../__internal__/util/SinkLikeMixin.mjs';
import { keepType } from '../containers/ContainerLike.mjs';
import { toObservable, map as map$1, keepT as keepT$1, every, forEach as forEach$1, some } from '../containers/ReadonlyArrayLike.mjs';
import { pipeUnsafe, min, newInstance, pipe, isEmpty, none, getLength, max, isSome, returns, isNone, compose, isTrue, getOrRaise } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { enumerate, zip as zip$1, toObservable as toObservable$1 } from '../ix/EnumerableLike.mjs';
import { ObservableLike_observableType, ReactiveContainerLike_sinkInto, neverEnumerableObservable, createObservable, runnableObservableType, createRunnableObservable, enumerableObservableType, createEnumerableObservable, createSubject } from '../rx.mjs';
import { ObserverLike_dispatcher, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { disposed, SinkLike_notify, SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import '../util/DisposableLike.mjs';
import { hasCurrent, move, getCurrent } from '../util/EnumeratorLike.mjs';
import { sourceFrom, notify, notifySink } from '../util/SinkLike.mjs';
import { getObserverCount } from './MulticastObservableLike.mjs';
import { sinkInto } from './ReactiveContainerLike.mjs';
import { publishTo } from './SubjectLike.mjs';
import { onComplete, dispose, isDisposed, addTo, bindTo, onDisposed, addToIgnoringChildErrors, add } from '../__internal__/util/DisposableLikeInternal.mjs';

const getObservableType = (obs) => obs[ObservableLike_observableType];
const createLift = /*@__PURE__*/ (() => {
    class LiftedObservable {
        constructor(source, operators, observableType) {
            this.source = source;
            this.operators = operators;
            this[ObservableLike_observableType] = observableType;
        }
        [ReactiveContainerLike_sinkInto](observer) {
            pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
        }
    }
    return (observableType) => (operator) => source => {
        const sourceSource = source instanceof LiftedObservable ? source.source : source;
        const allFunctions = source instanceof LiftedObservable
            ? [operator, ...source.operators]
            : [operator];
        const type = min(observableType, getObservableType(source), getObservableType(sourceSource));
        return newInstance(LiftedObservable, sourceSource, allFunctions, type);
    };
})();
const liftObservable = createLift(0);
const liftRunnableObservable = createLift(1);
const liftEnumerableObservable = createLift(2);
const liftEnumerableObservableT = {
    lift: liftEnumerableObservable,
    variance: reactive,
};
const buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const createBufferObserver = createInstanceFactory(clazz(__extends(typedObserverMixin, disposableMixin), function BufferObserver(delegate, durationFunction, maxBufferSize) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));
        this.buffer = [];
        this.delegate = delegate;
        this.durationFunction = durationFunction;
        this.durationSubscription = createDisposableRef(disposed);
        this.maxBufferSize = maxBufferSize;
        return pipe(this, onComplete(() => {
            const { buffer } = this;
            this.buffer = [];
            if (isEmpty(buffer)) {
                pipe(delegate, dispose());
            }
            else {
                pipe([buffer], toObservable(), sinkInto(delegate));
            }
        }));
    }, {
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
    }, {
        [SinkLike_notify](next) {
            const { buffer, maxBufferSize } = this;
            buffer.push(next);
            const doOnNotify = () => {
                this.durationSubscription[MutableRefLike_current] = disposed;
                const buffer = this.buffer;
                this.buffer = [];
                pipe(this.delegate, notify(buffer));
            };
            if (getLength(buffer) === maxBufferSize) {
                doOnNotify();
            }
            else if (isDisposed(this.durationSubscription[MutableRefLike_current])) {
                this.durationSubscription[MutableRefLike_current] = pipe(next, this.durationFunction, forEach(doOnNotify), subscribe(getScheduler(this)));
            }
        },
    }));
    return (options = {}) => {
        var _a, _b;
        const durationOption = (_a = options.duration) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER;
        const durationFunction = durationOption === MAX_SAFE_INTEGER
            ? neverEnumerableObservable
            : typeof durationOption === "number"
                ? (_) => pipe([none], toObservable())
                : durationOption;
        const maxBufferSize = max((_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER, 1);
        const operator = (delegate) => {
            return pipe(createBufferObserver(delegate, durationFunction, maxBufferSize), addTo(delegate));
        };
        return durationOption === MAX_SAFE_INTEGER
            ? liftEnumerableObservable(operator)
            : liftObservable(operator);
    };
})();
const bufferT = {
    buffer,
};
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
const combineLatest = (...observables) => latest(observables, 1 /* LatestMode.Combine */);
const combineLatestT = {
    zip: combineLatest,
};
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 * @hidden
 */
const concat = /*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
        if (next < getLength(observables)) {
            pipe(createConcatObserver(delegate, observables, next + 1), sourceFrom(observables[next]));
        }
        else {
            pipe(delegate, dispose());
        }
    }));
    return (...observables) => {
        const onSink = (observer) => {
            if (!isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), sourceFrom(observables[0]));
            }
            else {
                pipe(observer, dispose());
            }
        };
        const type = pipe(observables, map$1(getObservableType), x => min(...x));
        switch (type) {
            case enumerableObservableType:
                return createEnumerableObservable(onSink);
            case runnableObservableType:
                return createRunnableObservable(onSink);
            default:
                return createObservable(onSink);
        }
    };
})();
const concatT = {
    concat,
};
const decodeWithCharset = /*@__PURE__*/ (() => pipe(createDecodeWithCharsetObserver(toObservable()), createDecodeWithCharsetOperator(liftEnumerableObservableT)))();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = /*@__PURE__*/ (() => pipe(createDistinctUntilChangedObserver, createDistinctUntilChangedOperator(liftEnumerableObservableT)))();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const forEach = /*@__PURE__*/ (() => pipe(createForEachObserver, createForEachOperator(liftEnumerableObservableT)))();
const forEachT = { forEach };
const forkCombineLatest = (...ops) => (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 1 /* LatestMode.Combine */);
function forkZipLatest(...ops) {
    return (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 2 /* LatestMode.Zip */);
}
const keep = /*@__PURE__*/ (() => pipe(createKeepObserver, createKeepOperator(liftEnumerableObservableT)))();
const keepT = { keep };
const map = /*@__PURE__*/ (() => pipe(createMapObserver, createMapOperator(liftEnumerableObservableT)))();
const mapT = { map };
const mergeImpl = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { completedCount: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
            }
        };
        const type = pipe(observables, map$1(getObservableType), x => min(...x));
        switch (type) {
            case enumerableObservableType:
                return createEnumerableObservable(onSink);
            case runnableObservableType:
                return createRunnableObservable(onSink);
            default:
                return createObservable(onSink);
        }
    };
})();
const forkMerge = ((...ops) => (obs) => pipe(ops, map$1(op => op(obs)), mergeImpl));
const latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const add = (self, observer) => {
        self.observers.push(observer);
    };
    const onNotify = (self) => {
        const { mode, observers } = self;
        const isReady = observers.every(x => x.ready);
        if (isReady) {
            const result = pipe(observers, map$1(observer => observer.latest));
            pipe(self.delegate, notify(result));
            if (mode === 2 /* LatestMode.Zip */) {
                for (const sub of observers) {
                    sub.ready = false;
                    sub.latest = none;
                }
            }
        }
    };
    const onCompleted = (self) => {
        self.completedCount++;
        if (self.completedCount === getLength(self.observers)) {
            pipe(self.delegate, dispose());
        }
    };
    const createLatestObserver = createInstanceFactory(clazz(__extends(typedObserverMixin, disposableMixin), function LatestObserver(scheduler, ctx) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
        this.ctx = ctx;
        return this;
    }, {
        ready: false,
        latest: none,
        ctx: none,
    }, {
        [SinkLike_notify](next) {
            const { ctx } = this;
            this.latest = next;
            this.ready = true;
            onNotify(ctx);
        },
    }));
    return (observables, mode) => {
        const onSink = (delegate) => {
            const ctx = {
                completedCount: 0,
                observers: [],
                delegate,
                mode,
            };
            const onCompleteCb = () => {
                onCompleted(ctx);
            };
            const scheduler = getScheduler(delegate);
            for (const observable of observables) {
                const innerObserver = pipe(createLatestObserver(scheduler, ctx), addTo(delegate), onComplete(onCompleteCb), sourceFrom(observable));
                add(ctx, innerObserver);
            }
        };
        const enumerableObservables = pipe(observables, map$1(toEnumerableObservable()), keepType(keepT$1, isSome));
        const runnableObservables = pipe(observables, map$1(toRunnableObservable()), keepType(keepT$1, isSome));
        return getLength(enumerableObservables) === getLength(observables)
            ? createEnumerableObservable(onSink)
            : getLength(runnableObservables) === getLength(observables)
                ? createRunnableObservable(onSink)
                : createObservable(onSink);
    };
})();
/** @hidden */
const merge = ((...observables) => mergeImpl(observables));
const mergeT = {
    concat: merge,
};
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = createSubject({ replay });
    pipe(observable, forEach(publishTo(subject)), subscribe(scheduler), bindTo(subject));
    return subject;
};
const onSubscribe = ((f) => (obs) => {
    const type = getObservableType(obs);
    switch (type) {
        case enumerableObservableType:
            return createOnSink(createEnumerableObservable, obs, f);
        case runnableObservableType:
            return createOnSink(createRunnableObservable, obs, f);
        default:
            return createOnSink(createObservable, obs, f);
    }
});
const pairwise = /*@__PURE__*/ (() => pipe(liftEnumerableObservable(createPairwiseObserver), returns))();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => pipe(createReduceObserver(toObservable()), createReduceOperator(liftEnumerableObservableT)))();
const reduceT = { reduce };
const scan = /*@__PURE__*/ pipe(createScanObserver, createScanOperator(liftEnumerableObservableT));
const scanT = { scan };
const share = (scheduler, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return createObservable(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, multicast(scheduler, options));
        }
        pipe(observer, sourceFrom(multicasted), onDisposed(() => {
            if (isSome(multicasted) && getObserverCount(multicasted) === 0) {
                pipe(multicasted, dispose());
                multicasted = none;
            }
        }));
    });
};
const skipFirst = 
/*@__PURE__*/
pipe(createSkipFirstObserver, createSkipFirstOperator(liftEnumerableObservableT));
const skipFirstT = { skipFirst };
const switchAll = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    function onDispose() {
        if (isDisposed(this.currentRef[MutableRefLike_current])) {
            pipe(this.delegate, dispose());
        }
    }
    return pipe(createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function SwitchAllObserver(delegate) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));
        this.delegate = delegate;
        this.currentRef = pipe(createDisposableRef(disposed), addTo(delegate));
        pipe(this, addTo(delegate), onComplete(onDispose));
        return this;
    }, {
        currentRef: none,
        delegate: none,
    }, {
        [SinkLike_notify](next) {
            this.currentRef[MutableRefLike_current] = pipe(next, forEach(notifySink(this.delegate)), subscribe(getScheduler(this)), onComplete(() => {
                if (isDisposed(this)) {
                    pipe(this.delegate, dispose());
                }
            }));
        },
    })), liftEnumerableObservable, returns);
})();
const switchAllT = {
    concatAll: switchAll,
};
const subscribe = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const createObserver = createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function SubscribeObserver(scheduler) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
        return this;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
    return (scheduler) => (observable) => pipe(scheduler, createObserver, addToIgnoringChildErrors(scheduler), sourceFrom(observable));
})();
const subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
createObservable(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, forEach(dispatchTo(dispatcher)), subscribe(scheduler), bindTo(dispatcher)));
const takeFirst = /*@__PURE__*/ pipe(createTakeFirstObserver, createTakeFirstOperator(liftEnumerableObservableT));
const takeFirstT = { takeFirst };
const takeLast = /*@__PURE__*/ pipe(createTakeLastObserver(toObservable()), createTakeLastOperator(liftEnumerableObservableT));
const takeLastT = { takeLast };
const takeUntil = ((notifier) => {
    const operator = (delegate) => pipe(createDelegatingObserver(delegate), bindTo(delegate), bindTo(pipe(notifier, takeFirst(), subscribe(getScheduler(delegate)))));
    return getObservableType(notifier) === 0
        ? liftObservable(operator)
        : liftRunnableObservable(operator);
});
const takeWhile = 
/*@__PURE__*/
pipe(createTakeWhileObserver, createTakeWhileOperator(liftEnumerableObservableT));
const takeWhileT = { takeWhile };
const throwIfEmpty = /*@__PURE__*/ pipe(createThrowIfEmptyObserver, createThrowIfEmptyOperator(liftEnumerableObservableT));
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = /*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const typedObserverMixin = observerMixin();
    const createEnumeratorScheduler = createInstanceFactory(clazz(__extends(disposableMixin, typedEnumeratorMixin), function EnumeratorScheduler() {
        init(disposableMixin, this);
        init(typedEnumeratorMixin, this);
        this.continuations = [];
        return this;
    }, {
        [SchedulerLike_inContinuation]: false,
        continuations: none,
    }, {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            const self = this;
            return isInContinuation(self);
        },
        [SchedulerLike_requestYield]() {
            // No-Op: We yield whenever the continuation is running.
        },
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const { continuations } = this;
                const continuation = continuations.shift();
                if (isSome(continuation)) {
                    this[SchedulerLike_inContinuation] = true;
                    run(continuation);
                    this[SchedulerLike_inContinuation] = false;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
        [SchedulerLike_schedule](continuation, _) {
            pipe(this, add(continuation));
            if (!isDisposed(continuation)) {
                this.continuations.push(continuation);
            }
        },
    }));
    const createEnumeratorObserver = createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function EnumeratorObserver(enumerator) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, enumerator);
        this.enumerator = enumerator;
        return this;
    }, {
        enumerator: none,
    }, {
        [SinkLike_notify](next) {
            this.enumerator[EnumeratorLike_current] = next;
        },
    }));
    return () => (obs) => getObservableType(obs) === enumerableObservableType
        ? createEnumerable(() => {
            const scheduler = createEnumeratorScheduler();
            pipe(createEnumeratorObserver(scheduler), addTo(scheduler), sourceFrom(obs));
            return scheduler;
        })
        : none;
})();
const toEnumerableObservable = () => (obs) => getObservableType(obs) === enumerableObservableType
    ? obs
    : none;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
const toPromise = (scheduler) => observable => newInstance(Promise, (resolve, reject) => {
    let result = none;
    let hasResult = false;
    pipe(observable, forEach(next => {
        hasResult = true;
        result = next;
    }), subscribe(scheduler), onDisposed(err => {
        if (isSome(err)) {
            const { cause } = err;
            reject(cause);
        }
        else if (!hasResult) {
            reject(newInstance(Error, "Observable completed without producing a value"));
        }
        else {
            resolve(result);
        }
    }));
});
const toRunnableObservable = () => (obs) => getObservableType(obs) === runnableObservableType ||
    getObservableType(obs) === enumerableObservableType
    ? obs
    : none;
const zip = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const shouldEmit = compose(map$1((x) => hasCurrent(x) || move(x)), every(isTrue));
    const shouldComplete = compose(forEach$1(move), some(isDisposed));
    const createZipObserver = createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function ZipObserver(delegate, enumerators, sinkEnumerator) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));
        this.delegate = delegate;
        this.sinkEnumerator = sinkEnumerator;
        this.enumerators = enumerators;
        return pipe(this, onComplete(() => {
            if (isDisposed(sinkEnumerator) ||
                (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))) {
                pipe(delegate, dispose());
            }
        }));
    }, {
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
    }, {
        [SinkLike_notify](next) {
            const { sinkEnumerator, enumerators } = this;
            if (isDisposed(this)) {
                return;
            }
            pipe(sinkEnumerator, notify(next));
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, map$1(getCurrent));
            pipe(this.delegate, notify(zippedNext));
            if (shouldComplete(enumerators)) {
                pipe(this, dispose());
            }
        },
    }));
    const onSink = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (getObservableType(next) === enumerableObservableType) {
                const enumerator = pipe(next, toEnumerable(), getOrRaise(), enumerate(), addTo(observer));
                move(enumerator);
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(createEnumeratorSink(), addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), addTo(observer), sourceFrom(next));
            }
        }
    };
    return (...observables) => {
        const enumerableObservables = pipe(observables, map$1(toEnumerableObservable()), keepType(keepT$1, isSome));
        const runnableObservables = pipe(observables, map$1(toRunnableObservable()), keepType(keepT$1, isSome));
        return getLength(enumerableObservables) === getLength(observables)
            ? pipe(enumerableObservables, map$1(toEnumerable()), keepType(keepT$1, isSome), enumerables => zip$1(...enumerables), toObservable$1())
            : getLength(runnableObservables) === getLength(observables)
                ? createRunnableObservable(onSink(observables))
                : createObservable(onSink(observables));
    };
})();
const zipT = {
    zip: zip,
};
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
const zipLatest = (...observables) => latest(observables, 2 /* LatestMode.Zip */);
const zipLatestT = {
    zip: zipLatest,
};

export { buffer, bufferT, combineLatest, combineLatestT, concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, getObservableType, keep, keepT, map, mapT, merge, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableObservable, toPromise, toRunnableObservable, zip, zipLatest, zipLatestT, zipT };
