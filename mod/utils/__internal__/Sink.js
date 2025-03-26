/// <reference types="./Sink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { LiftedSinkLike_subscription, } from "../../computations/__internal__/LiftedSource.js";
import { none, returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, FlowControllerQueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControlledQueueMixin from "../__mixins__/FlowControlledQueueMixin.js";
export const createDelegatingNotifyOnlyNonCompletingNonDisposing = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, DelegatingSinkMixin()), function NonDisposingDelegatingSink(delegate) {
    init(DisposableMixin, this);
    init(DelegatingSinkMixin(), this, delegate);
    return this;
}, props(), proto({
    get [SinkLike_isCompleted]() {
        unsafeCast(this);
        return this[DisposableLike_isDisposed];
    },
    [SinkLike_complete]() {
        this[DisposableLike_dispose]();
    },
})))();
export const createQueueSink = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, FlowControlledQueueMixin()), function ConsumerQueue(options) {
    init(DisposableMixin, this);
    init(FlowControlledQueueMixin(), this, options);
    return this;
}, props(), proto({
    get [SinkLike_isCompleted]() {
        unsafeCast(this);
        return this[DisposableLike_isDisposed];
    },
    [EventListenerLike_notify](next) {
        this[FlowControllerQueueLike_enqueue](next);
    },
    [SinkLike_complete]() {
        this[DisposableLike_dispose]();
    },
})))();
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
