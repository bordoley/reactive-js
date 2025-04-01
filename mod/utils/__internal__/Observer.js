/// <reference types="./Observer.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
export const collect = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(CollectorSinkMixin(), DelegatingSchedulerMixin), function CollectObserver(buffer, scheduler) {
        init(CollectorSinkMixin(), this, buffer);
        init(DelegatingSchedulerMixin, this, scheduler);
        return this;
    }, props(), proto({
        [FlowControllerLike_isReady]: true,
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
    }));
})();
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin, DisposeOnCompleteSinkMixin(), DelegatingSchedulerMixin), function EventListener(notify, scheduler) {
        init(DisposableMixin, this);
        init(DisposeOnCompleteSinkMixin(), this);
        init(DelegatingSchedulerMixin, this, scheduler);
        this[EventListenerLike_notify] = notify;
        return this;
    }, props({
        [EventListenerLike_notify]: none,
    }), proto({
        [FlowControllerLike_isReady]: true,
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
    }));
})();
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), DelegatingSchedulerMixin), function NonDisposingDelegatingObserver(delegate) {
    init(DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(), this, delegate);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}))();
export const takeLast = /*@__PURE__*/ (() => mixInstanceFactory(include(TakeLastConsumerMixin(), DelegatingSchedulerMixin), function TakeLastObserver(capacity, scheduler) {
    init(TakeLastConsumerMixin(), this, capacity);
    init(DelegatingSchedulerMixin, this, scheduler);
    return this;
}))();
