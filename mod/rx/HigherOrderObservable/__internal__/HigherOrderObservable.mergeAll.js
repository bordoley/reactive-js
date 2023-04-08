/// <reference types="./HigherOrderObservable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __MergeAllObserver_activeCount, __MergeAllObserver_maxConcurrency, __MergeAllObserver_observablesQueue, __MergeAllObserver_onDispose, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { bindMethod, isSome, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const HigherOrderObservable_mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const subscribeToObservable = (observer, nextObs) => {
            observer[__MergeAllObserver_activeCount]++;
            pipe(nextObs, Observable_forEach(bindMethod(observer[DelegatingLike_delegate], ObserverLike_notify)), Observable_subscribeWithConfig(observer[DelegatingLike_delegate], observer), Disposable_addTo(observer[DelegatingLike_delegate]), Disposable_onComplete(observer[__MergeAllObserver_onDispose]));
        };
        return createInstanceFactory(mix(include(Observer_mixin(), delegatingMixin()), function MergeAllObserver(instance, delegate, capacity, backpressureStrategy, maxConcurrency) {
            init(Observer_mixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[__MergeAllObserver_observablesQueue] =
                IndexedQueue_createFifoQueue(capacity, backpressureStrategy);
            instance[__MergeAllObserver_maxConcurrency] = maxConcurrency;
            instance[__MergeAllObserver_activeCount] = 0;
            instance[__MergeAllObserver_onDispose] = () => {
                instance[__MergeAllObserver_activeCount]--;
                const nextObs = instance[__MergeAllObserver_observablesQueue][QueueLike_dequeue]();
                if (isSome(nextObs)) {
                    subscribeToObservable(instance, nextObs);
                }
                else if (instance[DisposableLike_isDisposed]) {
                    instance[DelegatingLike_delegate][DisposableLike_dispose]();
                }
            };
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (delegate[DisposableLike_isDisposed]) {
                    // FIXME: Clear the queue
                }
                else if (instance[__MergeAllObserver_observablesQueue][CollectionLike_count] +
                    instance[__MergeAllObserver_activeCount] ===
                    0) {
                    delegate[DisposableLike_dispose]();
                }
            }));
            return instance;
        }, props({
            [__MergeAllObserver_activeCount]: 0,
            [__MergeAllObserver_maxConcurrency]: 0,
            [__MergeAllObserver_onDispose]: none,
            [__MergeAllObserver_observablesQueue]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (this[__MergeAllObserver_activeCount] <
                    this[__MergeAllObserver_maxConcurrency]) {
                    subscribeToObservable(this, next);
                }
                else {
                    this[__MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
                }
            },
        }));
    })();
    return (options = {}) => {
        const maxConcurrency = clampPositiveNonZeroInteger(options.maxConcurrency ?? MAX_SAFE_INTEGER);
        const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);
        const f = pipe(createMergeAllObserver, partial(capacity, options.backpressureStrategy ?? "overflow", maxConcurrency));
        return lift(f);
    };
};
export default HigherOrderObservable_mergeAll;
