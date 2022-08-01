/// <reference types="./ObservableLike.d.ts" />
import { reactive, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { observerMixin } from '../__internal__/scheduling/ObserverLikeMixin.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { clazz, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { decodeWithCharsetSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin } from '../__internal__/util/SinkLikeMixin.mjs';
import { toObservable } from '../containers/ReadonlyArrayLike.mjs';
import { pipeUnsafe, min, newInstance, pipe, returns, none, isSome } from '../functions.mjs';
import { ObservableLike_observableType, ReactiveContainerLike_sinkInto } from '../rx.mjs';
import { ObserverLike_scheduler } from '../scheduling.mjs';
import { SinkLike_notify } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { sourceFrom } from './ReactiveContainerLike.mjs';
import { addTo, onDisposed } from '../__internal__/util/DisposableLikeInternal.mjs';

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
        const type = min(observableType, source[ObservableLike_observableType], sourceSource[ObservableLike_observableType]);
        return newInstance(LiftedObservable, sourceSource, allFunctions, type);
    };
})();
/*
const lift: Lift<ObservableLike, TReactive>["lift"] = createLift(0);
const liftT: Lift<ObservableLike, TReactive> = {
  lift,
  variance: reactive,
};*/
/*
const liftRunnableObservable: Lift<RunnableObservableLike, TReactive>["lift"] =
  createLift(1);
const liftRunnableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftRunnableObservable,
  variance: reactive,
};*/
const liftEnumerableObservable = createLift(2);
const liftEnumerableObservableT = {
    lift: liftEnumerableObservable,
    variance: reactive,
};
const decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(toObservable());
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function DecodeWithCharsetObserver(delegate, charset) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, this, delegate, charset);
    }, {}, {}), mixWith(typedObserverMixin, typedDecodeWithCharsetMixin), createObjectFactory(), createDecodeWithCharsetOperator(liftEnumerableObservableT));
})();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function DistinctUntilChangedObserver(delegate, equality) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedDistinctUntilChangedSinkMixin, this, delegate, equality);
    }, {}, {}), mixWith(typedObserverMixin, typedDistinctUntilChangedSinkMixin), createObjectFactory(), createDistinctUntilChangedOperator(liftEnumerableObservableT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = forEachSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function ForEachObserver(delegate, effect) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedForEachSinkMixin, this, delegate, effect);
    }, {}, {}), mixWith(typedObserverMixin, typedForEachSinkMixin), createObjectFactory(), createForEachOperator(liftEnumerableObservableT));
})();
const forEachT = { forEach };
const keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function KeepObserver(delegate, predicate) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedKeepSinkMixin, this, delegate, predicate);
    }, {}, {}), mixWith(typedObserverMixin, typedKeepSinkMixin), createObjectFactory(), createKeepOperator(liftEnumerableObservableT));
})();
const keepT = { keep };
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function MapObserver(delegate, mapper) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedMapSinkMixin, this, delegate, mapper);
    }, {}, {}), mixWith(typedObserverMixin, typedMapSinkMixin), createObjectFactory(), createMapOperator(liftEnumerableObservableT));
})();
const mapT = { map };
const pairwise = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = pairwiseSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function PairwiseObserver(delegate) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedPairwiseSinkMixin, this, delegate);
    }, {}, {}), mixWith(typedObserverMixin, typedPairwiseSinkMixin), createObjectFactory(), liftEnumerableObservable, returns);
})();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = reduceSinkMixin(toObservable());
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function ReduceObserver(delegate, reducer, initialValue) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, this, delegate, reducer, initialValue);
    }, {}, {}), mixWith(typedObserverMixin, typedReduceSinkMixin), createObjectFactory(), createReduceOperator(liftEnumerableObservableT));
})();
const reduceT = { reduce };
const scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function ScanObserver(delegate, reducer, initialValue) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedScanSinkMixin, this, delegate, reducer, initialValue);
    }, {}, {}), mixWith(typedObserverMixin, typedScanSinkMixin), createObjectFactory(), createScanOperator(liftEnumerableObservableT));
})();
const scanT = { scan };
const skipFirst = /*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = skipFirstSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function SkipFirstObserver(delegate, skipCount) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedSkipFirstSinkMixin, this, delegate, skipCount);
    }, {}, {}), mixWith(typedObserverMixin, typedSkipFirstSinkMixin), createObjectFactory(), createSkipFirstOperator(liftEnumerableObservableT));
})();
const skipFirstT = { skipFirst };
const subscribe = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const createObserver = pipe(clazz(function SubscribeObserver(scheduler) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
    }, {}, {
        [SinkLike_notify](_) { },
    }), mixWith(disposableMixin, typedObserverMixin), createObjectFactory());
    return (scheduler) => observable => pipe(scheduler, createObserver, addTo(scheduler), sourceFrom(observable));
})();
const takeFirst = /*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = takeFirstSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function TakeFirstObserver(delegate, takeCount) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedTakeFirstSinkMixin, this, delegate, takeCount);
    }, {}, {}), mixWith(typedObserverMixin, typedTakeFirstSinkMixin), createObjectFactory(), createTakeFirstOperator({
        ...liftEnumerableObservableT,
    }));
})();
const takeFirstT = { takeFirst };
const takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = takeLastSinkMixin(toObservable());
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function TakeLastObserver(delegate, takeCount) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedTakeLastSinkMixin, this, delegate, takeCount);
    }, {}, {}), mixWith(typedObserverMixin, typedTakeLastSinkMixin), createObjectFactory(), createTakeLastOperator({
        ...liftEnumerableObservableT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = takeWhileSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function TakeWhileObserver(delegate, predicate, inclusive) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedTakeWhileSinkMixin, this, delegate, predicate, inclusive);
    }, {}, {}), mixWith(typedObserverMixin, typedTakeWhileSinkMixin), createObjectFactory(), createTakeWhileOperator(liftEnumerableObservableT));
})();
const takeWhileT = { takeWhile };
const throwIfEmpty = /*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function TakeWhileObserver(delegate, factory) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedThrowIfEmptySinkMixin, this, delegate, factory);
    }, {}, {}), mixWith(typedObserverMixin, typedThrowIfEmptySinkMixin), createObjectFactory(), createThrowIfEmptyOperator(liftEnumerableObservableT));
})();
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

export { decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, getObservableType, keep, keepT, map, mapT, pairwise, pairwiseT, reduce, reduceT, scan, scanT, skipFirst, skipFirstT, subscribe, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toPromise };
