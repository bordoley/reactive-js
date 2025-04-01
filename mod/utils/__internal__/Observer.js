/// <reference types="./Observer.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { none, pipe } from "../../functions.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, OverflowBackpressureStrategy, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const collect = /*@__PURE__*/ (() => {
    const CollectObserver_buffer = Symbol("CollectObserver_buffer");
    const CollectObserver_count = Symbol("CollectObserver_count");
    function onCollectObserverCompleted() {
        const buffer = this[CollectObserver_buffer];
        const count = this[CollectObserver_count];
        buffer.length = count;
    }
    return mixInstanceFactory(include(DisposableMixin, DelegatingSchedulerMixin, DisposeOnCompleteSinkMixin()), function CollectObserver(scheduler, buffer) {
        init(DisposableMixin, this);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(DisposeOnCompleteSinkMixin(), this);
        this[CollectObserver_buffer] = buffer;
        buffer.length = 0;
        pipe(this, DisposableContainer.onComplete(onCollectObserverCompleted));
        return this;
    }, props({
        [CollectObserver_buffer]: none,
        [CollectObserver_count]: 0,
    }), proto({
        [FlowControllerLike_isReady]: true,
        [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
        [BackPressureConfig_strategy]: OverflowBackpressureStrategy,
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
        [EventListenerLike_notify](next) {
            const buffer = this[CollectObserver_buffer];
            const bufferLength = buffer.length;
            const index = this[CollectObserver_count];
            if (index === bufferLength) {
                buffer.length = index === 0 ? 32 : index << 1;
            }
            buffer[index] = next;
            this[CollectObserver_count]++;
        },
    }));
})();
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), DelegatingSchedulerMixin), function NonDisposingDelegatingObserver(delegate) {
    init(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), this, delegate);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}))();
export const takeLast = /*@__PURE__*/ (() => mixInstanceFactory(include(TakeLastConsumerMixin(), DelegatingSchedulerMixin), function TakeLastObserver(scheduler, capacity) {
    init(TakeLastConsumerMixin(), this, capacity);
    init(DelegatingSchedulerMixin, this, scheduler);
    return this;
}))();
