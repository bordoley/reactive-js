/// <reference types="./ObservableLike.d.ts" />
import { reactive, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { createOnSink } from '../__internal__/rx/ReactiveContainerLikeInternal.mjs';
import { createDelegatingObserver, createDecodeWithCharsetObserver, createDistinctUntilChangedObserver, createForEachObserver, createKeepObserver, createMapObserver, createPairwiseObserver, creatReduceObserver, creatScanObserver, createSkipFirstObserver, observerMixin, createTakeFirstObserver, createTakeLastObserver, createTakeWhileObserver, createThrowIfEmptyObserver } from '../__internal__/scheduling/ObserverLikeMixin.mjs';
import { disposableMixin, createDisposableRef } from '../__internal__/util/DisposableLikeMixins.mjs';
import { MutableRefLike_current } from '../__internal__/util/MutableRefLike.mjs';
import { clazz, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { map as map$1, toObservable } from '../containers/ReadonlyArrayLike.mjs';
import { pipeUnsafe, min, newInstance, pipe, getLength, isEmpty, returns, none, isNone, isSome } from '../functions.mjs';
import { ObservableLike_observableType, ReactiveContainerLike_sinkInto, createObservable, runnableObservableType, createRunnableObservable, enumerableObservableType, createEnumerableObservable, createSubject } from '../rx.mjs';
import { ObserverLike_dispatcher } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { disposed, SinkLike_notify } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { sourceFrom, notifySink } from '../util/SinkLike.mjs';
import { getObserverCount } from './MulticastObservableLike.mjs';
import { publishTo } from './SubjectLike.mjs';
import { addTo, onComplete, dispose, bindTo, onDisposed, isDisposed, addToIgnoringChildErrors } from '../__internal__/util/DisposableLikeInternal.mjs';

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
const distinctUntilChanged = 
/*@__PURE__*/ (() => pipe(createDistinctUntilChangedObserver, createDistinctUntilChangedOperator(liftEnumerableObservableT)))();
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
const reduce = /*@__PURE__*/ (() => pipe(creatReduceObserver(toObservable()), createReduceOperator(liftEnumerableObservableT)))();
const reduceT = { reduce };
const scan = /*@__PURE__*/ (() => pipe(creatScanObserver, createScanOperator(liftEnumerableObservableT)))();
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
const skipFirst = /*@__PURE__*/ (() => pipe(createSkipFirstObserver, createSkipFirstOperator(liftEnumerableObservableT)))();
const skipFirstT = { skipFirst };
const switchAll = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    function onDispose() {
        if (isDisposed(this.currentRef[MutableRefLike_current])) {
            pipe(this.delegate, dispose());
        }
    }
    return pipe(clazz(function SwitchAllObserver(delegate) {
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
    }), mixWith(disposableMixin, typedObserverMixin), createObjectFactory(), liftEnumerableObservable, returns);
})();
const switchAllT = {
    concatAll: switchAll,
};
const subscribe = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const createObserver = pipe(clazz(function SubscribeObserver(scheduler) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
        return this;
    }, {}, {
        [SinkLike_notify](_) { },
    }), mixWith(disposableMixin, typedObserverMixin), createObjectFactory());
    return (scheduler) => (observable) => pipe(scheduler, createObserver, addToIgnoringChildErrors(scheduler), sourceFrom(observable));
})();
const subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
createObservable(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, forEach(dispatchTo(dispatcher)), subscribe(scheduler), bindTo(dispatcher)));
const takeFirst = /*@__PURE__*/ (() => pipe(createTakeFirstObserver, createTakeFirstOperator(liftEnumerableObservableT)))();
const takeFirstT = { takeFirst };
const takeLast = /*@__PURE__*/ (() => pipe(createTakeLastObserver(toObservable()), createTakeLastOperator(liftEnumerableObservableT)))();
const takeLastT = { takeLast };
const takeUntil = ((notifier) => {
    const operator = (delegate) => pipe(createDelegatingObserver(delegate), bindTo(delegate), bindTo(pipe(notifier, takeFirst(), subscribe(getScheduler(delegate)))));
    return getObservableType(notifier) === 0
        ? liftObservable(operator)
        : liftRunnableObservable(operator);
});
const takeWhile = /*@__PURE__*/ (() => pipe(createTakeWhileObserver, createTakeWhileOperator(liftEnumerableObservableT)))();
const takeWhileT = { takeWhile };
const throwIfEmpty = /*@__PURE__*/ (() => pipe(createThrowIfEmptyObserver, createThrowIfEmptyOperator(liftEnumerableObservableT)))();
const throwIfEmptyT = {
    throwIfEmpty,
};
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

export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkMerge, getObservableType, keep, keepT, map, mapT, merge, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toPromise };
