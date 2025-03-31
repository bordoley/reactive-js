/// <reference types="./Sink.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, OverflowBackpressureStrategy, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import * as Consumer from "./Consumer.js";
import { Sink_toLiftedSink } from "./Sink/__private__/Sink.toLiftedSink.js";
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin()))();
export const toLiftedSink = Sink_toLiftedSink;
export const toConsumer = 
/*@__PURE__*/ (() => {
    return returns(mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSinkMixin()), function SinkToConsumer(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSinkMixin(), this, delegate);
        return this;
    }, props(), proto({
        [FlowControllerLike_isReady]: true,
        [BackPressureConfig_strategy]: OverflowBackpressureStrategy,
        [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
        [FlowControllerLike_addOnReadyListener](_) {
            return Disposable.disposed;
        },
    })));
})();
export const toObserver = (scheduler) => (sink) => pipe(sink, toConsumer(), Consumer.toObserver(scheduler));
