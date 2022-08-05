/// <reference types="./ObservableLike.d.ts" />
import { reactive, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { createOnSink } from '../__internal__/rx/ReactiveContainerLikeInternal.mjs';
import { createDelegatingObserver, createDecodeWithCharsetObserver, createDistinctUntilChangedObserver, createForEachObserver, createKeepObserver, createMapObserver, createPairwiseObserver, createReduceObserver, createScanObserver, createSkipFirstObserver, observerMixin, createTakeFirstObserver, createTakeLastObserver, createTakeWhileObserver, createThrowIfEmptyObserver } from '../__internal__/scheduling/ObserverLikeMixin.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, isInContinuation } from '../__internal__/schedulingInternal.mjs';
import { disposableMixin, createDisposableRef } from '../__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from '../__internal__/util/EnumeratorLikeMixin.mjs';
import { MutableRefLike_current } from '../__internal__/util/MutableRefLike.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/Object.mjs';
import { keepType } from '../containers/ContainerLike.mjs';
import { map as map$1, toObservable, every, forEach as forEach$1, some, keepT as keepT$1 } from '../containers/ReadonlyArrayLike.mjs';
import { pipeUnsafe, min, newInstance, pipe, getLength, isEmpty, returns, none, isNone, isSome, compose, isTrue, getOrRaise } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { enumerate, zip as zip$1, toObservable as toObservable$1 } from '../ix/EnumerableLike.mjs';
import { ObservableLike_observableType, ReactiveContainerLike_sinkInto, createObservable, runnableObservableType, createRunnableObservable, enumerableObservableType, createEnumerableObservable, createSubject } from '../rx.mjs';
import { ObserverLike_dispatcher, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { disposed, SinkLike_notify, SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import '../util/DisposableLike.mjs';
import { hasCurrent, move, getCurrent } from '../util/EnumeratorLike.mjs';
import { sourceFrom, notifySink, notify } from '../util/SinkLike.mjs';
import { getObserverCount } from './MulticastObservableLike.mjs';
import { publishTo } from './SubjectLike.mjs';
import { addTo, onComplete, dispose, bindTo, onDisposed, isDisposed, addToIgnoringChildErrors, add } from '../__internal__/util/DisposableLikeInternal.mjs';

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
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 * @hidden
 */
const concat = (() => {
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
const zip = (() => {
    const typedObserverMixin = observerMixin();
    const shouldEmit = compose(map$1((x) => hasCurrent(x) || move(x)), every(isTrue));
    const shouldComplete = compose(forEach$1(move), some(isDisposed));
    const createSinkEnumerator = createInstanceFactory(clazz(__extends(disposableMixin), function SinkEnumerator() {
        init(disposableMixin, this);
        this.buffer = [];
        return pipe(this, onDisposed(() => {
            this.buffer.length = 0;
            this[EnumeratorLike_hasCurrent] = false;
        }));
    }, {
        buffer: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }, {
        [SinkLike_notify](next) {
            if (isDisposed(this)) {
                return;
            }
            this.buffer.push(next);
        },
        [SourceLike_move]() {
            const { buffer } = this;
            if (!isDisposed(this) && getLength(buffer) > 0) {
                const next = buffer.shift();
                this[EnumeratorLike_current] = next;
                this[EnumeratorLike_hasCurrent] = true;
            }
            else {
                this[EnumeratorLike_hasCurrent] = false;
            }
        },
    }));
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
                const enumerator = pipe(createSinkEnumerator(), addTo(observer));
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

export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkMerge, getObservableType, keep, keepT, map, mapT, merge, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableObservable, toPromise, toRunnableObservable, zip, zipT };
