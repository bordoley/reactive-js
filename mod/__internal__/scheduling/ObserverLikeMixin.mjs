/// <reference types="./ObserverLikeMixin.d.ts" />
import { getLength, pipe, isEmpty, none, isNone, returns } from '../../functions.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch, ObserverLike_scheduler, ObserverLike_dispatcher } from '../../scheduling.mjs';
import { getScheduler } from '../../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../../scheduling/SchedulerLike.mjs';
import { SinkLike_notify, DisposableLike_exception } from '../../util.mjs';
import '../../util/DisposableLike.mjs';
import { disposableMixin } from '../util/DisposableLikeMixins.mjs';
import { createInstanceFactory, clazz, init, __extends } from '../util/Object.mjs';
import { decodeWithCharsetSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin } from '../util/SinkLikeMixin.mjs';
import { addTo, onComplete, isDisposed, dispose, onDisposed, addToIgnoringChildErrors } from '../util/DisposableLikeInternal.mjs';

const createObserverDispatcher = (() => {
    const scheduleDrainQueue = (dispatcher) => {
        if (getLength(dispatcher.nextQueue) === 1) {
            const { observer } = dispatcher;
            pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
        }
    };
    return createInstanceFactory(clazz(disposableMixin, function ObserverDispatcher(observer) {
        init(disposableMixin, this);
        this.observer = observer;
        this.nextQueue = [];
        this.continuation = () => {
            const { nextQueue } = this;
            const { observer } = this;
            while (getLength(nextQueue) > 0) {
                const next = nextQueue.shift();
                observer[SinkLike_notify](next);
                __yield();
            }
        };
        this.onContinuationDispose = () => {
            if (isDisposed(this)) {
                pipe(observer, dispose(this[DisposableLike_exception]));
            }
        };
        pipe(this, onDisposed(e => {
            if (isEmpty(this.nextQueue)) {
                pipe(observer, dispose(e));
            }
        }));
        return this;
    }, {
        continuation: none,
        nextQueue: none,
        observer: none,
        onContinuationDispose: none,
    }, {
        get [DispatcherLike_scheduler]() {
            const self = this;
            return getScheduler(self.observer);
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
    return pipe(clazz(function ObserverMixin(scheduler) {
        this[ObserverLike_scheduler] = scheduler;
        return this;
    }, {
        [ObserverLike_scheduler]: none,
        dispatcher: none,
    }, {
        get [ObserverLike_dispatcher]() {
            const self = this;
            if (isNone(self.dispatcher)) {
                const dispatcher = pipe(createObserverDispatcher(self), addToIgnoringChildErrors(self));
                self.dispatcher = dispatcher;
            }
            return self.dispatcher;
        },
    }), returns);
})();
const createDecodeWithCharsetObserver = (fromArray) => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(fromArray);
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedDecodeWithCharsetMixin), function DecodeWithCharsetObserver(delegate, charset) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, this, delegate, charset);
        return this;
    }));
};
const createDelegatingObserver = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function DelegatingObserver(observer) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(observer));
        this.delegate = observer;
        return this;
    }, {
        delegate: none,
    }, {
        [SinkLike_notify](next) {
            this.delegate[SinkLike_notify](next);
        },
    }));
})();
const createDistinctUntilChangedObserver = /*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedDistinctUntilChangedSinkMixin), function DistinctUntilChangedObserver(delegate, equality) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedDistinctUntilChangedSinkMixin, this, delegate, equality);
        return this;
    }));
})();
const createForEachObserver = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = forEachSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedForEachSinkMixin), function ForEachObserver(delegate, effect) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedForEachSinkMixin, this, delegate, effect);
        return this;
    }));
})();
const createKeepObserver = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedKeepSinkMixin), function KeepObserver(delegate, predicate) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedKeepSinkMixin, this, delegate, predicate);
        return this;
    }));
})();
const createMapObserver = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedMapSinkMixin), function MapObserver(delegate, mapper) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedMapSinkMixin, this, delegate, mapper);
        return this;
    }));
})();
const createPairwiseObserver = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = pairwiseSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedPairwiseSinkMixin), function PairwiseObserver(delegate) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedPairwiseSinkMixin, this, delegate);
        return this;
    }));
})();
const createReduceObserver = (fromArray) => {
    const typedReduceSinkMixin = reduceSinkMixin(fromArray);
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedReduceSinkMixin), function ReduceObserver(delegate, reducer, initialValue) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, this, delegate, reducer, initialValue);
        return this;
    }));
};
const createScanObserver = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedScanSinkMixin), function ScanObserver(delegate, reducer, initialValue) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedScanSinkMixin, this, delegate, reducer, initialValue);
        return this;
    }));
})();
const createSkipFirstObserver = /*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = skipFirstSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedSkipFirstSinkMixin), function SkipFirstObserver(delegate, skipCount) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedSkipFirstSinkMixin, this, delegate, skipCount);
        return this;
    }));
})();
const createTakeFirstObserver = /*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = takeFirstSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedTakeFirstSinkMixin), function TakeFirstObserver(delegate, takeCount) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedTakeFirstSinkMixin, this, delegate, takeCount);
        return this;
    }));
})();
const createTakeLastObserver = (fromArray) => {
    const typedTakeLastSinkMixin = takeLastSinkMixin(fromArray);
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedTakeLastSinkMixin), function TakeLastObserver(delegate, takeCount) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedTakeLastSinkMixin, this, delegate, takeCount);
        return this;
    }));
};
const createTakeWhileObserver = /*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = takeWhileSinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedTakeWhileSinkMixin), function TakeWhileObserver(delegate, predicate, inclusive) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedTakeWhileSinkMixin, this, delegate, predicate, inclusive);
        return this;
    }));
})();
const createThrowIfEmptyObserver = /*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin();
    const typedObserverMixin = observerMixin();
    return createInstanceFactory(clazz(__extends(typedObserverMixin, typedThrowIfEmptySinkMixin), function ThrowIfEmptyObserver(delegate, factory) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedThrowIfEmptySinkMixin, this, delegate, factory);
        return this;
    }));
})();

export { createDecodeWithCharsetObserver, createDelegatingObserver, createDistinctUntilChangedObserver, createForEachObserver, createKeepObserver, createMapObserver, createPairwiseObserver, createReduceObserver, createScanObserver, createSkipFirstObserver, createTakeFirstObserver, createTakeLastObserver, createTakeWhileObserver, createThrowIfEmptyObserver, observerMixin };
