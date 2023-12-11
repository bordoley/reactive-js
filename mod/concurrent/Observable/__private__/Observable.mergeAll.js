/// <reference types="./Observable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { CollectionLike_count } from "../../../collections.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { bindMethod, isSome, none, pipe, } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__private__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_lift from "./Observable.lift.js";
const Observer_createMergeAllObserverOperator = /*@__PURE__*/ (() => {
    const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
    const MergeAllObserver_concurrency = Symbol("MergeAllObserver_concurrency");
    const MergeAllObserver_delegate = Symbol("MergeAllObserver_delegate");
    const MergeAllObserver_onDispose = Symbol("MergeAllObserver_onDispose");
    const MergeAllObserver_observablesQueue = Symbol("MergeAllObserver_observablesQueue");
    const subscribeToObservable = (observer, nextObs) => {
        observer[MergeAllObserver_activeCount]++;
        pipe(nextObs, Observable_forEach(bindMethod(observer[MergeAllObserver_delegate], SinkLike_notify)), Observable_subscribeWithConfig(observer[MergeAllObserver_delegate], observer), Disposable.addTo(observer[MergeAllObserver_delegate]), Disposable.onComplete(observer[MergeAllObserver_onDispose]));
    };
    const createMergeAllObserver = createInstanceFactory(mix(include(DisposableMixin, DelegatingObserverMixin()), function MergeAllObserver(instance, delegate, capacity, backpressureStrategy, concurrency) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[MergeAllObserver_observablesQueue] = IndexedQueue.create(capacity, backpressureStrategy);
        instance[MergeAllObserver_concurrency] = concurrency;
        instance[MergeAllObserver_delegate] = delegate;
        instance[MergeAllObserver_activeCount] = 0;
        instance[MergeAllObserver_onDispose] = () => {
            instance[MergeAllObserver_activeCount]--;
            const nextObs = instance[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
            if (isSome(nextObs)) {
                subscribeToObservable(instance, nextObs);
            }
            else if (instance[DisposableLike_isDisposed] &&
                instance[MergeAllObserver_activeCount] <= 0) {
                instance[MergeAllObserver_delegate][DisposableLike_dispose]();
            }
        };
        pipe(instance, Disposable.onComplete(() => {
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
        [MergeAllObserver_concurrency]: 0,
        [MergeAllObserver_delegate]: none,
        [MergeAllObserver_onDispose]: none,
        [MergeAllObserver_observablesQueue]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            if (this[MergeAllObserver_activeCount] <
                this[MergeAllObserver_concurrency]) {
                subscribeToObservable(this, next);
            }
            else {
                this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
            }
        },
    }));
    return (options = {}) => {
        const concurrency = clampPositiveNonZeroInteger(options.concurrency ?? MAX_SAFE_INTEGER);
        const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);
        return (observer) => createMergeAllObserver(observer, capacity, options.backpressureStrategy ?? "overflow", concurrency);
    };
})();
const Observable_mergeAll = ((options) => Observable_lift({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
    ...(options ?? {}),
})(Observer_createMergeAllObserverOperator(options)));
export default Observable_mergeAll;
