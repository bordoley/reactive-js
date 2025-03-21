/// <reference types="./Observable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bind, isSome, none, pipe, } from "../../../functions.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../../math.js";
import * as Consumer from "../../../utils/Consumer.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedConsumerLike_isReady } from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { LiftedSinkLike_complete, LiftedSinkLike_completeDelegate, } from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { CollectionEnumeratorLike_count, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, OverflowBackpressureStrategy, SchedulerLike_requestYield, SinkLike_isCompleted, } from "../../../utils.js";
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
            observer[LiftedEventListenerLike_notifyDelegate](v);
            if (!observer[LiftedConsumerLike_isReady]) {
                observer[SchedulerLike_requestYield]();
            }
        }), Observable_subscribe(observer), Disposable.addTo(observer), DisposableContainer.onComplete(bind(onMergeAllObserverInnerObservableComplete, observer)));
    };
    function onMergeAllObserverInnerObservableComplete() {
        const queue = this[MergeAllObserver_observablesQueue];
        this[MergeAllObserver_activeCount]--;
        queue[EnumeratorLike_moveNext]();
        const nextObs = queue[EnumeratorLike_current];
        if (isSome(nextObs)) {
            subscribeToObservable(this, nextObs);
        }
        else if (this[SinkLike_isCompleted] &&
            this[MergeAllObserver_activeCount] <= 0) {
            this[LiftedSinkLike_completeDelegate]();
        }
    }
    const createMergeAllObserver = mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function MergeAllObserver(delegate, capacity, backpressureStrategy, concurrency) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[MergeAllObserver_observablesQueue] = pipe(Consumer.create({
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
        [LiftedEventListenerLike_notify](next) {
            if (this[MergeAllObserver_activeCount] <
                this[MergeAllObserver_concurrency]) {
                subscribeToObservable(this, next);
            }
            else {
                this[MergeAllObserver_observablesQueue][EventListenerLike_notify](next);
            }
        },
        [LiftedSinkLike_complete]() {
            if (this[MergeAllObserver_observablesQueue][CollectionEnumeratorLike_count] +
                this[MergeAllObserver_activeCount] ===
                0) {
                this[LiftedSinkLike_completeDelegate]();
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
