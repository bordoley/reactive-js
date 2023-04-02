/// <reference types="./HigherOrderObservable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { MergeAllObserver_activeCount, MergeAllObserver_maxConcurrency, MergeAllObserver_observablesQueue, MergeAllObserver_onDispose, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { bindMethod, isSome, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithDispatcherConfig from "../../Observable/__internal__/Observable.subscribeWithDispatcherConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
const HigherOrderObservable_mergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const subscribeToObservable = (observer, nextObs) => {
            observer[MergeAllObserver_activeCount]++;
            pipe(nextObs, Observable_forEach(bindMethod(observer[DelegatingLike_delegate], ObserverLike_notify)), Observable_subscribeWithDispatcherConfig(observer), Disposable_addTo(observer[DelegatingLike_delegate]), Disposable_onComplete(observer[MergeAllObserver_onDispose]));
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin, delegatingMixin()), function MergeAllObserver(instance, delegate, capacity, backpressureStrategy, maxConcurrency) {
            init(Disposable_mixin, instance);
            initObserverMixinFromDelegate(instance, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[MergeAllObserver_observablesQueue] =
                IndexedQueue_createFifoQueue(capacity, backpressureStrategy);
            instance[MergeAllObserver_maxConcurrency] = maxConcurrency;
            instance[MergeAllObserver_activeCount] = 0;
            instance[MergeAllObserver_onDispose] = () => {
                instance[MergeAllObserver_activeCount]--;
                const nextObs = instance[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
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
                else if (instance[MergeAllObserver_observablesQueue][CollectionLike_count] +
                    instance[MergeAllObserver_activeCount] ===
                    0) {
                    delegate[DisposableLike_dispose]();
                }
            }));
            return instance;
        }, props({
            [MergeAllObserver_activeCount]: 0,
            [MergeAllObserver_maxConcurrency]: 0,
            [MergeAllObserver_onDispose]: none,
            [MergeAllObserver_observablesQueue]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (this[MergeAllObserver_activeCount] <
                    this[MergeAllObserver_maxConcurrency]) {
                    subscribeToObservable(this, next);
                }
                else {
                    this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
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
