/// <reference types="./Observable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../../__internal__/math.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike_notify, } from "../../../concurrent.js";
import { bind, bindMethod, isSome, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Queue from "../../../utils/Queue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createMergeAllObserverOperator = /*@__PURE__*/ (() => {
    const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
    const MergeAllObserver_concurrency = Symbol("MergeAllObserver_concurrency");
    const MergeAllObserver_delegate = Symbol("MergeAllObserver_delegate");
    const MergeAllObserver_observablesQueue = Symbol("MergeAllObserver_observablesQueue");
    const subscribeToObservable = (observer, nextObs) => {
        observer[MergeAllObserver_activeCount]++;
        pipe(nextObs, Observable_forEach(bindMethod(observer[MergeAllObserver_delegate], ObserverLike_notify)), Observable_subscribeWithConfig(observer[MergeAllObserver_delegate], observer), Disposable.addTo(observer[MergeAllObserver_delegate]), DisposableContainer.onComplete(bind(onMergeAllObserverInnerObservableComplete, observer)));
    };
    function onMergeAllObserverComplete() {
        const delegate = this[MergeAllObserver_delegate];
        if (delegate[DisposableLike_isDisposed]) {
            // FIXME: Clear the queue
        }
        else if (this[MergeAllObserver_observablesQueue][QueueLike_count] +
            this[MergeAllObserver_activeCount] ===
            0) {
            delegate[DisposableLike_dispose]();
        }
    }
    function onMergeAllObserverInnerObservableComplete() {
        this[MergeAllObserver_activeCount]--;
        const nextObs = this[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
        if (isSome(nextObs)) {
            subscribeToObservable(this, nextObs);
        }
        else if (this[DisposableLike_isDisposed] &&
            this[MergeAllObserver_activeCount] <= 0) {
            this[MergeAllObserver_delegate][DisposableLike_dispose]();
        }
    }
    const createMergeAllObserver = mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin()), function MergeAllObserver(instance, delegate, capacity, backpressureStrategy, concurrency) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[MergeAllObserver_observablesQueue] = Queue.create({
            capacity,
            backpressureStrategy,
        });
        instance[MergeAllObserver_concurrency] = concurrency;
        instance[MergeAllObserver_delegate] = delegate;
        instance[MergeAllObserver_activeCount] = 0;
        pipe(instance, DisposableContainer.onComplete(onMergeAllObserverComplete));
        return instance;
    }, props({
        [MergeAllObserver_activeCount]: 0,
        [MergeAllObserver_concurrency]: 0,
        [MergeAllObserver_delegate]: none,
        [MergeAllObserver_observablesQueue]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            if (this[MergeAllObserver_activeCount] <
                this[MergeAllObserver_concurrency]) {
                subscribeToObservable(this, next);
            }
            else {
                this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
            }
        }),
    });
    return (options = {}) => {
        const concurrency = clampPositiveNonZeroInteger(options.concurrency ?? MAX_SAFE_INTEGER);
        const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);
        return (observer) => createMergeAllObserver(observer, capacity, options.backpressureStrategy ?? OverflowBackpressureStrategy, concurrency);
    };
})();
const Observable_mergeAll = ((options) => Observable_lift({
    [ObservableLift_isStateless]: false,
    ...(options?.innerType ?? {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: true,
    }),
})(createMergeAllObserverOperator(options)));
export default Observable_mergeAll;
