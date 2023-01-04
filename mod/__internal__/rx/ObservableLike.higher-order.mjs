/// <reference types="./ObservableLike.higher-order.d.ts" />
import { pipe, partial, isSome, getLength, none } from '../../functions.mjs';
import { SinkLike_notify } from '../../rx.mjs';
import { getScheduler } from '../../rx/ObserverLike.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { notifySink } from '../../rx/SinkLike.mjs';
import { create, publishTo, publish } from '../../rx/SubjectLike.mjs';
import EnumerableObservableLike__create from '../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import EnumerableObservableLike__lift from '../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.lift.mjs';
import ObservableLike__create from '../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__forEach from '../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__lift from '../../rx/__internal__/ObservableLike/ObservableLike.lift.mjs';
import ObservableLike__onSubscribe from '../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import ObservableLike__subscribe from '../../rx/__internal__/ObservableLike/ObservableLike.subscribe.mjs';
import ObservableLike__takeFirst from '../../rx/__internal__/ObservableLike/ObservableLike.takeFirst.mjs';
import ObservableLike__zipWithLatestFrom from '../../rx/__internal__/ObservableLike/ObservableLike.zipWithLatestFrom.mjs';
import ObserverLike__mixin from '../../rx/__internal__/ObserverLike/ObserverLike.mixin.mjs';
import RunnableObservableLike__create from '../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import RunnableObservableLike__lift from '../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.lift.mjs';
import SinkLike__catchErrorMixin from '../../rx/__internal__/SinkLike/SinkLike.catchErrorMixin.mjs';
import DisposableLike__addTo from '../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__disposed from '../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__isDisposed from '../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { MAX_SAFE_INTEGER } from '../constants.mjs';
import { createInstanceFactory, mix, include, init, props } from '../mixins.mjs';
import { createDisposableRef } from '../util/DisposableRefLike.mjs';
import { MutableRefLike_current } from '../util/MutableRefLike.mjs';

const createCatchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = SinkLike__catchErrorMixin();
        const typedObserverMixin = ObserverLike__mixin();
        return createInstanceFactory(mix(include(typedCatchErrorSink, typedObserverMixin), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            init(typedObserverMixin, instance, getScheduler(delegate));
            return instance;
        }));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};
const catchErrorEnumerableObservable = 
/*@__PURE__*/ createCatchError(EnumerableObservableLike__lift);
const catchErrorObservable = 
/*@__PURE__*/ createCatchError(ObservableLike__lift());
const catchErrorRunnableObservable = 
/*@__PURE__*/ createCatchError(RunnableObservableLike__lift);
const createMergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        const subscribeNext = (observer) => {
            if (observer.activeCount < observer.maxConcurrency) {
                const nextObs = observer.queue.shift();
                if (isSome(nextObs)) {
                    observer.activeCount++;
                    pipe(nextObs, ObservableLike__forEach(notifySink(observer.delegate)), ObservableLike__subscribe(getScheduler(observer)), DisposableLike__addTo(observer.delegate), DisposableLike__onComplete(observer.onDispose));
                }
                else if (DisposableLike__isDisposed(observer)) {
                    pipe(observer.delegate, DisposableLike__dispose());
                }
            }
        };
        return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function Observer(instance, delegate, maxBufferSize, maxConcurrency) {
            init(DisposableLike__mixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.maxBufferSize = maxBufferSize;
            instance.maxConcurrency = maxConcurrency;
            instance.activeCount = 0;
            instance.onDispose = () => {
                instance.activeCount--;
                subscribeNext(instance);
            };
            instance.queue = [];
            pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
                if (DisposableLike__isDisposed(delegate)) {
                    instance.queue.length = 0;
                }
                else if (getLength(instance.queue) + instance.activeCount ===
                    0) {
                    pipe(instance.delegate, DisposableLike__dispose());
                }
            }));
            return instance;
        }, props({
            activeCount: 0,
            delegate: none,
            maxBufferSize: 0,
            maxConcurrency: 0,
            onDispose: none,
            queue: none,
        }), {
            [SinkLike_notify](next) {
                const { queue } = this;
                queue.push(next);
                // Drop old events if the maxBufferSize has been exceeded
                if (getLength(queue) + this.activeCount > this.maxBufferSize) {
                    queue.shift();
                }
                subscribeNext(this);
            },
        }));
    })();
    return (options = {}) => {
        const { maxBufferSize = MAX_SAFE_INTEGER, maxConcurrency = MAX_SAFE_INTEGER, } = options;
        return lift(pipe(createMergeAllObserver, partial(maxBufferSize, maxConcurrency)));
    };
};
const mergeAllEnumerableObservable = /*@__PURE__*/ createMergeAll(EnumerableObservableLike__lift);
const mergeAllObservable = /*@__PURE__*/ createMergeAll(ObservableLike__lift());
const mergeAllRunnableObservable = /*@__PURE__*/ createMergeAll(RunnableObservableLike__lift);
const createScanAsync = (createObservable) => {
    return (scanner, initialValue) => observable => {
        const onSink = (observer) => {
            const accFeedbackStream = pipe(create(), DisposableLike__addTo(observer));
            pipe(observable, ObservableLike__zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), ObservableLike__takeFirst())), switchAllObservable(), ObservableLike__forEach(publishTo(accFeedbackStream)), ObservableLike__onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))), sinkInto(observer));
        };
        return createObservable(onSink);
    };
};
const scanAsyncEnumerableObservable = createScanAsync(EnumerableObservableLike__create);
const scanAsyncObservable = createScanAsync(ObservableLike__create);
const scanAsyncRunnableObservable = createScanAsync(RunnableObservableLike__create);
const createSwitchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        function onDispose() {
            if (DisposableLike__isDisposed(this.currentRef[MutableRefLike_current])) {
                pipe(this.delegate, DisposableLike__dispose());
            }
        }
        return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function SwitchAllObserver(instance, delegate) {
            init(DisposableLike__mixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.currentRef = pipe(createDisposableRef(DisposableLike__disposed), DisposableLike__addTo(delegate));
            pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(onDispose));
            return instance;
        }, props({
            currentRef: none,
            delegate: none,
        }), {
            [SinkLike_notify](next) {
                this.currentRef[MutableRefLike_current] = pipe(next, ObservableLike__forEach(notifySink(this.delegate)), ObservableLike__subscribe(getScheduler(this)), DisposableLike__onComplete(() => {
                    if (DisposableLike__isDisposed(this)) {
                        pipe(this.delegate, DisposableLike__dispose());
                    }
                }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
};
const switchAllEnumerableObservable = 
/*@__PURE__*/ createSwitchAll(EnumerableObservableLike__lift);
const switchAllObservable = 
/*@__PURE__*/ createSwitchAll(ObservableLike__lift());
const switchAllRunnableObservable = 
/*@__PURE__*/ createSwitchAll(RunnableObservableLike__lift);

export { catchErrorEnumerableObservable, catchErrorObservable, catchErrorRunnableObservable, mergeAllEnumerableObservable, mergeAllObservable, mergeAllRunnableObservable, scanAsyncEnumerableObservable, scanAsyncObservable, scanAsyncRunnableObservable, switchAllEnumerableObservable, switchAllObservable, switchAllRunnableObservable };
