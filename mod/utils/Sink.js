/// <reference types="./Sink.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../__internal__/mixins.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike_isDisposed, OverflowBackpressureStrategy, } from "../utils.js";
import * as Disposable from "./Disposable.js";
import DelegatingDisposableMixin from "./__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "./__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "./__mixins__/DelegatingSinkMixin.js";
export const toObserver = /*@__PURE__*/ (() => {
    const createSinkObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, DelegatingSinkMixin()), function SinkObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(DelegatingSinkMixin(), this, consumer);
        return this;
    }, props(), proto({
        [ConsumerLike_capacity]: MAX_SAFE_INTEGER,
        [ConsumerLike_backpressureStrategy]: OverflowBackpressureStrategy,
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            return !this[DisposableLike_isDisposed];
        },
        [ConsumerLike_addOnReadyListener](_) {
            return Disposable.disposed;
        },
    }));
    return (scheduler) => (sink) => createSinkObserver(scheduler, sink);
})();
