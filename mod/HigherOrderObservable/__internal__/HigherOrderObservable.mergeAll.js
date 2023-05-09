/// <reference types="./HigherOrderObservable.mergeAll.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __MergeAllObserver_activeCount, __MergeAllObserver_concurrency, __MergeAllObserver_observablesQueue, __MergeAllObserver_onDispose, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, QueueLike_dequeue, } from "../../__internal__/types.js";
import { bindMethod, isSome, none, partial, pipe, } from "../../functions.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, ObserverLike_notify, QueueableLike_enqueue, } from "../../types.js";
const HigherOrderObservable_mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const subscribeToObservable = (observer, nextObs) => {
            observer[__MergeAllObserver_activeCount]++;
            pipe(nextObs, Observable_forEach(bindMethod(observer[DelegatingLike_delegate], ObserverLike_notify)), Observable_subscribeWithConfig(observer[DelegatingLike_delegate], observer), Disposable_addTo(observer[DelegatingLike_delegate]), Disposable_onComplete(observer[__MergeAllObserver_onDispose]));
        };
        return createInstanceFactory(mix(include(Observer_mixin(), Delegating_mixin()), function MergeAllObserver(instance, delegate, capacity, backpressureStrategy, concurrency) {
            Observer_mixin_initFromDelegate(instance, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__MergeAllObserver_observablesQueue] =
                Queue_createIndexedQueue(capacity, backpressureStrategy);
            instance[__MergeAllObserver_concurrency] = concurrency;
            instance[__MergeAllObserver_activeCount] = 0;
            instance[__MergeAllObserver_onDispose] = () => {
                instance[__MergeAllObserver_activeCount]--;
                const nextObs = instance[__MergeAllObserver_observablesQueue][QueueLike_dequeue]();
                if (isSome(nextObs)) {
                    subscribeToObservable(instance, nextObs);
                }
                else if (instance[DisposableLike_isDisposed] &&
                    instance[__MergeAllObserver_activeCount] <= 0) {
                    instance[DelegatingLike_delegate][DisposableLike_dispose]();
                }
            };
            pipe(instance, Disposable_onComplete(() => {
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
            [__MergeAllObserver_concurrency]: 0,
            [__MergeAllObserver_onDispose]: none,
            [__MergeAllObserver_observablesQueue]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (this[__MergeAllObserver_activeCount] <
                    this[__MergeAllObserver_concurrency]) {
                    subscribeToObservable(this, next);
                }
                else {
                    this[__MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
                }
            },
        }));
    })();
    return (options = {}) => {
        const concurrency = clampPositiveNonZeroInteger(options.concurrency ?? MAX_SAFE_INTEGER);
        const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);
        const f = pipe(createMergeAllObserver, partial(capacity, options.backpressureStrategy ?? "overflow", concurrency));
        return lift(f);
    };
};
export default HigherOrderObservable_mergeAll;
