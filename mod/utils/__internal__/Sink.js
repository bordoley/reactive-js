/// <reference types="./Sink.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, OverflowBackpressureStrategy, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import { Sink_toLiftedSink } from "./Sink/__private__/Sink.toLiftedSink.js";
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin()))();
export const toLiftedSink = Sink_toLiftedSink;
export const toObserver = /*@__PURE__*/ (() => {
    const createFromSink = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSinkMixin(), DelegatingSchedulerMixin), function SinkToObserver(delegate, scheduler) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSinkMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, scheduler);
        return this;
    }, props(), proto({
        [FlowControllerLike_isReady]: true,
        [BackPressureConfig_strategy]: OverflowBackpressureStrategy,
        [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
        [FlowControllerLike_addOnReadyListener](_) {
            return Disposable.disposed;
        },
    }));
    return (scheduler) => (sink) => createFromSink(sink, scheduler);
})();
