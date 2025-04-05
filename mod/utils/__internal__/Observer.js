/// <reference types="./Observer.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingCatchErrorConsumerMixin from "../__mixins__/DelegatingCatchErrorConsumerMixin.js";
import DelegatingNonCompletingConsumerMixin from "../__mixins__/DelegatingNonCompletingConsumerMixin.js";
import DelegatingObserverSchedulerMixin from "../__mixins__/DelegatingObserverSchedulerMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import FlowControllerWithoutBackpressureMixin from "../__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";
import UnscheduledObserverMixin from "../__mixins__/UnscheduledObserverMixin.js";
export const collect = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(CollectorSinkMixin(), DelegatingSchedulerMixin, FlowControllerWithoutBackpressureMixin, UnscheduledObserverMixin()), function CollectObserver(buffer, scheduler) {
        init(CollectorSinkMixin(), this, buffer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(FlowControllerWithoutBackpressureMixin, this);
        init(UnscheduledObserverMixin(), this);
        return this;
    });
})();
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin, DisposeOnCompleteSinkMixin(), DelegatingSchedulerMixin, FlowControllerWithoutBackpressureMixin, UnscheduledObserverMixin()), function EventListener(notify, scheduler) {
        init(DisposableMixin, this);
        init(DisposeOnCompleteSinkMixin(), this);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(FlowControllerWithoutBackpressureMixin, this);
        init(UnscheduledObserverMixin(), this);
        this[EventListenerLike_notify] = notify;
        return this;
    }, props({
        [EventListenerLike_notify]: none,
    }));
})();
export const createDelegatingCatchError = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingCatchErrorConsumerMixin(), DelegatingObserverSchedulerMixin()), function DelegatingCatchErrorObserver(delegate) {
    init(DelegatingCatchErrorConsumerMixin(), this, delegate);
    init(DelegatingObserverSchedulerMixin(), this, delegate);
    return this;
}))();
export const createDelegatingNonCompleting = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingNonCompletingConsumerMixin(), DelegatingObserverSchedulerMixin()), function DelegatingNonCompletingObserver(delegate) {
    init(DelegatingNonCompletingConsumerMixin(), this, delegate);
    init(DelegatingObserverSchedulerMixin(), this, delegate);
    return this;
}))();
export const reducer = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(ReducerSinkMixin(), DelegatingSchedulerMixin, FlowControllerWithoutBackpressureMixin, UnscheduledObserverMixin()), function CollectObserver(reducer, ref, scheduler) {
        init(ReducerSinkMixin(), this, reducer, ref);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(FlowControllerWithoutBackpressureMixin, this);
        init(UnscheduledObserverMixin(), this);
        return this;
    });
})();
export const takeLast = /*@__PURE__*/ (() => mixInstanceFactory(include(TakeLastConsumerMixin(), DelegatingSchedulerMixin, UnscheduledObserverMixin()), function TakeLastObserver(capacity, scheduler) {
    init(TakeLastConsumerMixin(), this, capacity);
    init(DelegatingSchedulerMixin, this, scheduler);
    init(UnscheduledObserverMixin(), this);
    return this;
}))();
