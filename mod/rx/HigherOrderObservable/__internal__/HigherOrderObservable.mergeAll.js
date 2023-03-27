/// <reference types="./HigherOrderObservable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { MergeAllObserver_activeCount, MergeAllObserver_maxBufferSize, MergeAllObserver_maxConcurrency, MergeAllObserver_observablesQueue, MergeAllObserver_onDispose, } from "../../../__internal__/symbols.js";
import { QueueLike_count, QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { bindMethod, isSome, none, partial, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "../../Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const HigherOrderObservable_mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const subscribeNext = (observer) => {
            if (observer[MergeAllObserver_activeCount] <
                observer[MergeAllObserver_maxConcurrency]) {
                const nextObs = observer[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
                if (isSome(nextObs)) {
                    observer[MergeAllObserver_activeCount]++;
                    pipe(nextObs, Observable_forEach(bindMethod(observer[DelegatingLike_delegate], ObserverLike_notify)), Observable_subscribeWithMaxBufferSize(observer[DispatcherLike_scheduler], observer[QueueableLike_capacity]), Disposable_addTo(observer[DelegatingLike_delegate]), Disposable_onComplete(observer[MergeAllObserver_onDispose]));
                }
                else if (observer[DisposableLike_isDisposed]) {
                    observer[DelegatingLike_delegate][DisposableLike_dispose]();
                }
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function MergeAllObserver(instance, delegate, maxBufferSize, maxConcurrency) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity]);
            init(delegatingMixin(), instance, delegate);
            instance[MergeAllObserver_observablesQueue] =
                IndexedQueue_createFifoQueue();
            instance[MergeAllObserver_maxBufferSize] = maxBufferSize;
            instance[MergeAllObserver_maxConcurrency] = maxConcurrency;
            instance[MergeAllObserver_activeCount] = 0;
            instance[MergeAllObserver_onDispose] = () => {
                instance[MergeAllObserver_activeCount]--;
                subscribeNext(instance);
            };
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (delegate[DisposableLike_isDisposed]) {
                    // FIXME: Clear the queue
                }
                else if (instance[MergeAllObserver_observablesQueue][QueueLike_count] +
                    instance[MergeAllObserver_activeCount] ===
                    0) {
                    delegate[DisposableLike_dispose]();
                }
            }));
            return instance;
        }, props({
            [MergeAllObserver_activeCount]: 0,
            [MergeAllObserver_maxBufferSize]: 0,
            [MergeAllObserver_maxConcurrency]: 0,
            [MergeAllObserver_onDispose]: none,
            [MergeAllObserver_observablesQueue]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
                // Drop old events if the maxBufferSize has been exceeded
                if (this[MergeAllObserver_observablesQueue][QueueLike_count] +
                    this[MergeAllObserver_activeCount] >
                    this[MergeAllObserver_maxBufferSize]) {
                    this[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
                }
                subscribeNext(this);
            },
        }));
    })();
    return (options = {}) => {
        var _a, _b;
        const maxBufferSize = clampPositiveNonZeroInteger((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER);
        const maxConcurrency = clampPositiveNonZeroInteger((_b = options.maxConcurrency) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER);
        const f = pipe(createMergeAllObserver, partial(maxBufferSize, maxConcurrency));
        return lift(f);
    };
};
export default HigherOrderObservable_mergeAll;
