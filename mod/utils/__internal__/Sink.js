/// <reference types="./Sink.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { LiftedSinkLike_subscription, } from "../../computations/__internal__/LiftedSource.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingCatchErrorSinkMixin from "../__mixins__/DelegatingCatchErrorSinkMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingSinkMixin from "../__mixins__/DelegatingNonCompletingSinkMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import FlowControllerWithoutBackpressureMixin from "../__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";
import UnscheduledObserverMixin from "../__mixins__/UnscheduledObserverMixin.js";
export const collect = /*@__PURE__*/ (() => mixInstanceFactory(include(CollectorSinkMixin()), function CollectorSink(buffer) {
    init(CollectorSinkMixin(), this, buffer);
    return this;
}))();
export const createDelegatingCatchError = 
/*@__PURE__*/ (() => createInstanceFactory(DelegatingCatchErrorSinkMixin()))();
export const createDelegatingNonCompleting = 
/*@__PURE__*/ (() => createInstanceFactory(DelegatingNonCompletingSinkMixin()))();
export const reducer = /*@__PURE__*/ (() => createInstanceFactory(ReducerSinkMixin()))();
export const toLiftedSink = /*@__PURE__*/ (() => {
    return returns(mixInstanceFactory(include(DelegatingDisposableMixin), function SinktoLiftedSink(listener) {
        init(DelegatingDisposableMixin, this, listener);
        this[LiftedSinkLike_subscription] = listener;
        return this;
    }, props({
        [LiftedSinkLike_subscription]: none,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[LiftedSinkLike_subscription][SinkLike_isCompleted];
        },
        [EventListenerLike_notify](next) {
            this[LiftedSinkLike_subscription][EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            this[LiftedSinkLike_subscription][SinkLike_complete]();
        },
    })));
})();
export const toObserver = /*@__PURE__*/ (() => {
    const createFromSink = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSinkMixin(), DelegatingSchedulerMixin, FlowControllerWithoutBackpressureMixin, UnscheduledObserverMixin()), function SinkToObserver(delegate, scheduler) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSinkMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(FlowControllerWithoutBackpressureMixin, this);
        init(UnscheduledObserverMixin(), this);
        return this;
    });
    return (scheduler) => (sink) => createFromSink(sink, scheduler);
})();
