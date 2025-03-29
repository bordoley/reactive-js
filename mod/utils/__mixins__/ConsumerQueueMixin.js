/// <reference types="./ConsumerQueueMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, FlowControllerQueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DisposableMixin from "./DisposableMixin.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
export const ConsumerQueueMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableMixin, FlowControllerQueueMixin()), function ConsumerQueue(options) {
        init(DisposableMixin, this);
        init(FlowControllerQueueMixin(), this, options);
        return this;
    }, props(), proto({
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
