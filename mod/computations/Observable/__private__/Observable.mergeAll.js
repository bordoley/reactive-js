/// <reference types="./Observable.mergeAll.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bind, bindMethod, isSome, none, pipe, } from "../../../functions.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger, } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, ObserverLike_notify, OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createMergeAllObserverOperator = /*@__PURE__*/ (() => {
    const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
    const MergeAllObserver_concurrency = Symbol("MergeAllObserver_concurrency");
    const MergeAllObserver_observablesQueue = Symbol("MergeAllObserver_observablesQueue");
    const subscribeToObservable = (observer, nextObs) => {
        observer[MergeAllObserver_activeCount]++;
        pipe(nextObs, Observable_forEach(bindMethod(observer[LiftedObserverLike_delegate], ObserverLike_notify)), Observable_subscribeWithConfig(observer[LiftedObserverLike_delegate], observer), Disposable.addTo(observer[LiftedObserverLike_delegate]), DisposableContainer.onComplete(bind(onMergeAllObserverInnerObservableComplete, observer)));
    };
    function onMergeAllObserverComplete() {
        const delegate = this[LiftedObserverLike_delegate];
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
            this[LiftedObserverLike_delegate][DisposableLike_dispose]();
        }
    }
    const createMergeAllObserver = mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin(), LiftedObserverMixin()), function MergeAllObserver(delegate, capacity, backpressureStrategy, concurrency) {
        init(DisposableMixin, this);
        init(DelegatingObserverMixin(), this, delegate);
        init(LiftedObserverMixin(), this, delegate);
        this[MergeAllObserver_observablesQueue] = Queue.create({
            capacity,
            backpressureStrategy,
        });
        this[MergeAllObserver_concurrency] = concurrency;
        this[MergeAllObserver_activeCount] = 0;
        pipe(this, DisposableContainer.onComplete(onMergeAllObserverComplete));
        return this;
    }, props({
        [MergeAllObserver_activeCount]: 0,
        [MergeAllObserver_concurrency]: 0,
        [MergeAllObserver_observablesQueue]: none,
    }), proto({
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            if (this[MergeAllObserver_activeCount] <
                this[MergeAllObserver_concurrency]) {
                subscribeToObservable(this, next);
            }
            else {
                this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
            }
        }),
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
