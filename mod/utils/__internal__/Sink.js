/// <reference types="./Sink.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, } from "../../__internal__/mixins.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingCatchErrorSinkMixin from "../__mixins__/DelegatingCatchErrorSinkMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNonCompletingSinkMixin from "../__mixins__/DelegatingNonCompletingSinkMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import FlowControllerWithoutBackpressureMixin from "../__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";
import { Sink_toLiftedSink } from "./Sink/__private__/Sink.toLiftedSink.js";
export const collect = /*@__PURE__*/ (() => mixInstanceFactory(include(CollectorSinkMixin()), function CollectorSink(buffer) {
    init(CollectorSinkMixin(), this, buffer);
    return this;
}))();
export const createDelegatingCatchError = 
/*@__PURE__*/ (() => createInstanceFactory(DelegatingCatchErrorSinkMixin()))();
export const createDelegatingNonCompleting = 
/*@__PURE__*/ (() => createInstanceFactory(DelegatingNonCompletingSinkMixin()))();
export const reducer = /*@__PURE__*/ (() => createInstanceFactory(ReducerSinkMixin()))();
export const toLiftedSink = Sink_toLiftedSink;
export const toObserver = /*@__PURE__*/ (() => {
    const createFromSink = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSinkMixin(), DelegatingSchedulerMixin, FlowControllerWithoutBackpressureMixin), function SinkToObserver(delegate, scheduler) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSinkMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(FlowControllerWithoutBackpressureMixin, this);
        return this;
    });
    return (scheduler) => (sink) => createFromSink(sink, scheduler);
})();
