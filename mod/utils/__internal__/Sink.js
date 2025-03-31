/// <reference types="./Sink.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { createInstanceFactory, include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { LiftedSinkLike_subscription, } from "../../computations/__internal__/LiftedSource.js";
import { none, pipe, returns, } from "../../functions.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, OverflowBackpressureStrategy, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import * as Consumer from "./Consumer.js";
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => createInstanceFactory(DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin()))();
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
