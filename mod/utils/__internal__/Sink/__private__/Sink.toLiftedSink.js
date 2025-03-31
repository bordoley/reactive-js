/// <reference types="./Sink.toLiftedSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../../__internal__/mixins.js";
import { LiftedSinkLike_subscription, } from "../../../../computations/__internal__/LiftedSource.js";
import { none, returns } from "../../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../../utils.js";
import DelegatingDisposableMixin from "../../../__mixins__/DelegatingDisposableMixin.js";
export const Sink_toLiftedSink = /*@__PURE__*/ (() => {
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
