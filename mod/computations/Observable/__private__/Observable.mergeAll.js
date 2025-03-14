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
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_completeDelegate, LiftedObserverLike_isReady, LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { EventListenerLike_notify, OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, SchedulerLike_requestYield, SinkLike_isCompleted, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
const createMergeAllObserverOperator = /*@__PURE__*/ (() => {
    const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
    const MergeAllObserver_concurrency = Symbol("MergeAllObserver_concurrency");
    const MergeAllObserver_observablesQueue = Symbol("MergeAllObserver_observablesQueue");
    const subscribeToObservable = (observer, nextObs) => {
        observer[MergeAllObserver_activeCount]++;
        pipe(nextObs, Observable_forEach(v => {
            observer[LiftedObserverLike_notifyDelegate](v);
            if (!observer[LiftedObserverLike_isReady]) {
                observer[SchedulerLike_requestYield]();
            }
        }), Observable_subscribe(observer, observer), Disposable.addTo(observer), DisposableContainer.onComplete(bind(onMergeAllObserverInnerObservableComplete, observer)));
    };
    function onMergeAllObserverInnerObservableComplete() {
        this[MergeAllObserver_activeCount]--;
        const nextObs = this[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
        if (isSome(nextObs)) {
            subscribeToObservable(this, nextObs);
        }
        else if (this[SinkLike_isCompleted] &&
            this[MergeAllObserver_activeCount] <= 0) {
            this[LiftedObserverLike_completeDelegate]();
        }
    }
    const createMergeAllObserver = mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function MergeAllObserver(delegate, capacity, backpressureStrategy, concurrency) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[MergeAllObserver_observablesQueue] = pipe(Queue.create({
            capacity,
            backpressureStrategy,
        }), Disposable.addTo(this));
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
                this[MergeAllObserver_observablesQueue][EventListenerLike_notify](next);
            }
        },
        [LiftedObserverLike_complete]() {
            if (this[MergeAllObserver_observablesQueue][QueueLike_count] +
                this[MergeAllObserver_activeCount] ===
                0) {
                this[LiftedObserverLike_completeDelegate]();
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
