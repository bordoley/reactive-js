/// <reference types="./TakeLastConsumerMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, DropOldestBackpressureStrategy, EventListenerLike_notify, FlowControllerLike_capacity, FlowControllerLike_isReady, FlowControllerQueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControllerQueueMixin from "../__mixins__/FlowControllerQueueMixin.js";
const TakeLastConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableMixin, FlowControllerQueueMixin()), function TakeLastConsumerMixin(capacity) {
        init(DisposableMixin, this);
        init(FlowControllerQueueMixin(), this, {
            backpressureStrategy: DropOldestBackpressureStrategy,
            capacity,
        });
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            const isCompleted = this[SinkLike_isCompleted];
            return !isCompleted;
        },
        get [FlowControllerLike_capacity]() {
            return MAX_SAFE_INTEGER;
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [EventListenerLike_notify](item) {
            if (!this[DisposableLike_isDisposed]) {
                this[FlowControllerQueueLike_enqueue](item);
            }
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    })));
})();
export default TakeLastConsumerMixin;
