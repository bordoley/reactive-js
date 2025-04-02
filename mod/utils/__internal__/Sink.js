/// <reference types="./Sink.d.ts" />

import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";
import { Sink_toLiftedSink } from "./Sink/__private__/Sink.toLiftedSink.js";
export const collect = /*@__PURE__*/ (() => mixInstanceFactory(include(CollectorSinkMixin()), function CollectorSink(buffer) {
    init(CollectorSinkMixin(), this, buffer);
    return this;
}))();
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin()))();
export const reducer = /*@__PURE__*/ (() => createInstanceFactory(ReducerSinkMixin()))();
export const toLiftedSink = Sink_toLiftedSink;
export const toObserver = /*@__PURE__*/ (() => {
    const createFromSink = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSinkMixin(), DelegatingSchedulerMixin), function SinkToObserver(delegate, scheduler) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSinkMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, scheduler);
        return this;
    }, props(), proto({
        [FlowControllerLike_isReady]: true,
        [FlowControllerLike_addOnReadyListener](_) {
            return Disposable.disposed;
        },
    }));
    return (scheduler) => (sink) => createFromSink(sink, scheduler);
})();
