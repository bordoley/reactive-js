/// <reference types="./ObservableLike.higher-order.d.ts" />
import { pipe, partial, isSome, getLength, none } from '../../functions.mjs';
import { SinkLike_notify } from '../../rx.mjs';
import { getScheduler } from '../../rx/ObserverLike.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { notifySink } from '../../rx/SinkLike.mjs';
import { create, publishTo, publish } from '../../rx/SubjectLike.mjs';
import lift from '../../rx/__internal__/EnumerableObservableLike/EnumerableObservableLike.lift.mjs';
import forEach from '../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import onSubscribe from '../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import subscribe from '../../rx/__internal__/ObservableLike/ObservableLike.subscribe.mjs';
import takeFirst from '../../rx/__internal__/ObservableLike/ObservableLike.takeFirst.mjs';
import zipWithLatestFrom from '../../rx/__internal__/ObservableLike/ObservableLike.zipWithLatestFrom.mjs';
import observerMixin from '../../rx/__internal__/ObserverLike/ObserverLike.mixin.mjs';
import lift$1 from '../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.lift.mjs';
import catchErrorMixin from '../../rx/__internal__/SinkLike/SinkLike.catchErrorMixin.mjs';
import addTo from '../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import dispose from '../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import disposed from '../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import isDisposed from '../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import disposableMixin from '../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import onComplete from '../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { MAX_SAFE_INTEGER } from '../constants.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../mixins.mjs';
import { createDisposableRef } from '../util/DisposableRefLike.mjs';
import { MutableRefLike_current } from '../util/MutableRefLike.mjs';
import { createEnumerableObservable, createObservable, createRunnableObservable } from './ObservableLike.create.mjs';
import { liftObservable } from './ObservableLike.lift.mjs';

const createCatchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = catchErrorMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(typedCatchErrorSink, typedObserverMixin), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            init(typedObserverMixin, instance, getScheduler(delegate));
            return instance;
        }));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
};
const catchErrorEnumerableObservable = 
/*@__PURE__*/ createCatchError(lift);
const catchErrorObservable = 
/*@__PURE__*/ createCatchError(liftObservable);
const catchErrorRunnableObservable = 
/*@__PURE__*/ createCatchError(lift$1);
const createMergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = observerMixin();
        const subscribeNext = (observer) => {
            if (observer.activeCount < observer.maxConcurrency) {
                const nextObs = observer.queue.shift();
                if (isSome(nextObs)) {
                    observer.activeCount++;
                    pipe(nextObs, forEach(notifySink(observer.delegate)), subscribe(getScheduler(observer)), addTo(observer.delegate), onComplete(observer.onDispose));
                }
                else if (isDisposed(observer)) {
                    pipe(observer.delegate, dispose());
                }
            }
        };
        return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function Observer(instance, delegate, maxBufferSize, maxConcurrency) {
            init(disposableMixin, instance);
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
            pipe(instance, addTo(delegate), onComplete(() => {
                if (isDisposed(delegate)) {
                    instance.queue.length = 0;
                }
                else if (getLength(instance.queue) + instance.activeCount ===
                    0) {
                    pipe(instance.delegate, dispose());
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
const mergeAllEnumerableObservable = /*@__PURE__*/ createMergeAll(lift);
const mergeAllObservable = /*@__PURE__*/ createMergeAll(liftObservable);
const mergeAllRunnableObservable = /*@__PURE__*/ createMergeAll(lift$1);
const createScanAsync = (createObservable) => {
    return (scanner, initialValue) => observable => {
        const onSink = (observer) => {
            const accFeedbackStream = pipe(create(), addTo(observer));
            pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAllObservable(), forEach(publishTo(accFeedbackStream)), onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))), sinkInto(observer));
        };
        return createObservable(onSink);
    };
};
const scanAsyncEnumerableObservable = createScanAsync(createEnumerableObservable);
const scanAsyncObservable = createScanAsync(createObservable);
const scanAsyncRunnableObservable = createScanAsync(createRunnableObservable);
const createSwitchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = observerMixin();
        function onDispose() {
            if (isDisposed(this.currentRef[MutableRefLike_current])) {
                pipe(this.delegate, dispose());
            }
        }
        return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function SwitchAllObserver(instance, delegate) {
            init(disposableMixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.currentRef = pipe(createDisposableRef(disposed), addTo(delegate));
            pipe(instance, addTo(delegate), onComplete(onDispose));
            return instance;
        }, props({
            currentRef: none,
            delegate: none,
        }), {
            [SinkLike_notify](next) {
                this.currentRef[MutableRefLike_current] = pipe(next, forEach(notifySink(this.delegate)), subscribe(getScheduler(this)), onComplete(() => {
                    if (isDisposed(this)) {
                        pipe(this.delegate, dispose());
                    }
                }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
};
const switchAllEnumerableObservable = 
/*@__PURE__*/ createSwitchAll(lift);
const switchAllObservable = 
/*@__PURE__*/ createSwitchAll(liftObservable);
const switchAllRunnableObservable = 
/*@__PURE__*/ createSwitchAll(lift$1);

export { catchErrorEnumerableObservable, catchErrorObservable, catchErrorRunnableObservable, mergeAllEnumerableObservable, mergeAllObservable, mergeAllRunnableObservable, scanAsyncEnumerableObservable, scanAsyncObservable, scanAsyncRunnableObservable, switchAllEnumerableObservable, switchAllObservable, switchAllRunnableObservable };
