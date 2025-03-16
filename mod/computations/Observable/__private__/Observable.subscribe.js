/// <reference types="./Observable.subscribe.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, OverflowBackpressureStrategy, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
const Observable_subscribe = /*@__PURE__*/ (() => {
    const createSubscribeObserver = mixInstanceFactory(include(DisposableMixin, DelegatingSchedulerMixin), function SubscribeObserver(scheduler) {
        init(DisposableMixin, this);
        init(DelegatingSchedulerMixin, this, scheduler);
        return this;
    }, props(), proto({
        [ConsumerLike_capacity]: MAX_SAFE_INTEGER,
        [ConsumerLike_backpressureStrategy]: OverflowBackpressureStrategy,
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            return !this[DisposableLike_isDisposed];
        },
        [ConsumerLike_addOnReadyListener](_) {
            return Disposable.disposed;
        },
        [EventListenerLike_notify](_) { },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    }));
    return (scheduler) => (observable) => {
        const observer = pipe(createSubscribeObserver(scheduler), Disposable.addToContainer(scheduler));
        observable[ObservableLike_observe](observer);
        return observer;
    };
})();
export default Observable_subscribe;
