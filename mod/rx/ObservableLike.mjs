/// <reference types="./ObservableLike.d.ts" />
import { reactive, createForEachOperator, createMapOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { observerMixin } from '../__internal__/scheduling/ObserverLikeMixin.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { clazz, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { forEachSinkMixin, mapSinkMixin } from '../__internal__/util/SinkLikeMixin.mjs';
import { pipeUnsafe, min, newInstance, pipe, none, isSome } from '../functions.mjs';
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
const forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = forEachSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function ForEachObserver(delegate, effect) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedForEachSinkMixin, this, delegate, effect);
    }, {}, {}), mixWith(typedObserverMixin, typedForEachSinkMixin), createObjectFactory(), createForEachOperator(liftEnumerableObservableT));
})();
const forEachT = { forEach };
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const typedObserverMixin = observerMixin();
    return pipe(clazz(function MapObserver(delegate, mapper) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedMapSinkMixin, this, delegate, mapper);
    }, {}, {}), mixWith(typedObserverMixin, typedMapSinkMixin), createObjectFactory(), createMapOperator(liftEnumerableObservableT));
})();
const mapT = { map };
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

export { forEach, forEachT, getObservableType, map, mapT, subscribe, toPromise };
