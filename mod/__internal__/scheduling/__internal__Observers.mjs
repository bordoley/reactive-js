/// <reference types="./__internal__Observers.d.ts" />
import { getLength, pipe, isEmpty, none, unsafeCast, isNone, returns } from '../../functions.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../scheduling.mjs';
import { getScheduler } from '../../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../../scheduling/SchedulerLike.mjs';
import { SinkLike_notify, DisposableLike_exception } from '../../util.mjs';
import { addTo, onComplete, isDisposed, dispose, onDisposed, addToIgnoringChildErrors } from '../../util/DisposableLike.mjs';
import { disposableMixin } from '../util/__internal__Disposables.mjs';
import { createInstanceFactory, clazz, init, props, __extends } from '../util/__internal__Objects.mjs';
import { distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin } from '../util/__internal__Sinks.mjs';

const createObserverDispatcher = (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
        }
    };
    return createInstanceFactory(clazz(disposableMixin, function ObserverDispatcher(instance, observer) {
        init(disposableMixin, instance);
        instance.observer = observer;
        instance.nextQueue = [];
        instance.continuation = () => {
            const { nextQueue, observer } = instance;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                __yield();
            }
        };
        instance.onContinuationDispose = () => {
            if (isDisposed(instance)) {
                pipe(observer, dispose(instance[DisposableLike_exception]));
            }
        };
        pipe(instance, onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
                pipe(observer, dispose(e));
            }
        }));
        return instance;
    }, props({
        continuation: none,
        nextQueue: none,
        observer: none,
        onContinuationDispose: none,
    }), {
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return getScheduler(this.observer);
        },
        [DispatcherLike_dispatch](next) {
            if (!isDisposed(this)) {
                this.nextQueue.push(next);
                scheduleDrainQueue(this);
            }
        },
    }));
})();
const observerMixin = /*@__PURE__*/ (() => {
    return pipe(clazz(function ObserverMixin(instance, scheduler) {
        instance[ObserverLike_scheduler] = scheduler;
        return instance;
    }, props({
        [ObserverLike_scheduler]: none,
        dispatcher: none,
    }), {
        get [ObserverLike_dispatcher]() {
            unsafeCast(this);
            let { dispatcher } = this;
            if (isNone(dispatcher)) {
                dispatcher = pipe(createObserverDispatcher(this), addToIgnoringChildErrors(this));
                this.dispatcher = dispatcher;
            }
            return dispatcher;
        },
    }), returns);
})();
const createDelegatingObserver = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function DelegatingObserver(instance, observer) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, getScheduler(observer));
        instance.delegate = observer;
        return instance;
    }, props({
        delegate: none,
    }), {
        [SinkLike_notify](next) {
            this.delegate[SinkLike_notify](next);
        },
    }));
})();
const createDistinctUntilChangedObserver = /*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(instance, delegate, equality) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);
        return instance;
    }));
})();
const createForEachObserver = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = forEachSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedForEachSinkMixin), function ForEachObserver(instance, delegate, effect) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedForEachSinkMixin, instance, delegate, effect);
        return instance;
    }));
})();
const createKeepObserver = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedKeepSinkMixin), function KeepObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedKeepSinkMixin, instance, delegate, predicate);
        return instance;
    }));
})();
const createMapObserver = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedMapSinkMixin), function MapObserver(instance, delegate, mapper) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedMapSinkMixin, instance, delegate, mapper);
        return instance;
    }));
})();
const createObserver = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function Observer(instance, scheduler) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, scheduler);
        return instance;
    }, {}, {
        [SinkLike_notify](_) { },
    }));
})();
const createPairwiseObserver = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = pairwiseSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedPairwiseSinkMixin), function PairwiseObserver(instance, delegate) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedPairwiseSinkMixin, instance, delegate);
        return instance;
    }));
})();
const createScanObserver = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedScanSinkMixin), function ScanObserver(instance, delegate, reducer, initialValue) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedScanSinkMixin, instance, delegate, reducer, initialValue);
        return instance;
    }));
})();
const createSkipFirstObserver = /*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = skipFirstSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedSkipFirstSinkMixin), function SkipFirstObserver(instance, delegate, skipCount) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedSkipFirstSinkMixin, instance, delegate, skipCount);
        return instance;
    }));
})();
const createTakeFirstObserver = /*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = takeFirstSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedTakeFirstSinkMixin), function TakeFirstObserver(instance, delegate, takeCount) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeFirstSinkMixin, instance, delegate, takeCount);
        return instance;
    }));
})();
const createTakeWhileObserver = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = takeWhileSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedTakeWhileSinkMixin), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeWhileSinkMixin, instance, delegate, predicate, inclusive);
        return instance;
    }));
})();
const createThrowIfEmptyObserver = /*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedThrowIfEmptySinkMixin), function ThrowIfEmptyObserver(instance, delegate, factory) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedThrowIfEmptySinkMixin, instance, delegate, factory);
        return instance;
    }));
})();

export { createDelegatingObserver, createDistinctUntilChangedObserver, createForEachObserver, createKeepObserver, createMapObserver, createObserver, createPairwiseObserver, createScanObserver, createSkipFirstObserver, createTakeFirstObserver, createTakeWhileObserver, createThrowIfEmptyObserver, observerMixin };
