/// <reference types="./Observable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bind, isSome, none, pipe, } from "../../../functions.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueableLike_complete, QueueableLike_enqueue, QueueableLike_isCompleted, QueueableLike_isReady, SchedulerLike_requestYield, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createMergeAllObserverOperator = /*@__PURE__*/ (() => {
    const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
    const MergeAllObserver_concurrency = Symbol("MergeAllObserver_concurrency");
    const MergeAllObserver_observablesQueue = Symbol("MergeAllObserver_observablesQueue");
    const subscribeToObservable = (observer, nextObs) => {
        observer[MergeAllObserver_activeCount]++;
        const delegate = observer[LiftedObserverLike_delegate];
        pipe(nextObs, Observable_forEach(v => {
            const result = delegate?.[LiftedObserverLike_notify]?.(v) ??
                delegate[QueueableLike_enqueue](v);
            if (!result) {
                delegate[SchedulerLike_requestYield]();
            }
        }), Observable_subscribeWithConfig(observer, observer), Disposable.addTo(observer), DisposableContainer.onComplete(bind(onMergeAllObserverInnerObservableComplete, observer)));
    };
    function onMergeAllObserverInnerObservableComplete() {
        this[MergeAllObserver_activeCount]--;
        const nextObs = this[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
        if (isSome(nextObs)) {
            subscribeToObservable(this, nextObs);
        }
        else if (this[QueueableLike_isCompleted] &&
            this[MergeAllObserver_activeCount] <= 0) {
            this[LiftedObserverLike_delegate][QueueableLike_complete]();
        }
    }
    const createMergeAllObserver = mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function MergeAllObserver(delegate, capacity, backpressureStrategy, concurrency) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[MergeAllObserver_observablesQueue] = Queue.create({
            capacity,
            backpressureStrategy,
        });
        this[MergeAllObserver_concurrency] = concurrency;
        this[MergeAllObserver_activeCount] = 0;
        return this;
    }, props({
        [MergeAllObserver_activeCount]: 0,
        [MergeAllObserver_concurrency]: 0,
        [MergeAllObserver_observablesQueue]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            if (this[MergeAllObserver_activeCount] <
                this[MergeAllObserver_concurrency]) {
                subscribeToObservable(this, next);
            }
            else {
                this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
            }
            return this[QueueableLike_isReady];
        },
        [LiftedObserverLike_complete]() {
            const delegate = this[LiftedObserverLike_delegate];
            if (this[MergeAllObserver_observablesQueue][QueueLike_count] +
                this[MergeAllObserver_activeCount] ===
                0) {
                delegate[QueueableLike_complete]();
            }
        },
    }));
    return (options = {}) => {
        const concurrency = clampPositiveNonZeroInteger(options.concurrency ?? MAX_SAFE_INTEGER);
        const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);
        return (observer) => createMergeAllObserver(observer, capacity, options.backpressureStrategy ?? OverflowBackpressureStrategy, concurrency);
    };
})();
const Observable_mergeAll = ((options) => Observable_lift({
    [ObservableLift_isStateless]: false,
    [ComputationLike_isDeferred]: Computation.isDeferred(options?.innerType ?? {}),
    [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(options?.innerType ?? {}),
})(createMergeAllObserverOperator(options)));
export default Observable_mergeAll;
