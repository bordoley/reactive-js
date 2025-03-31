/// <reference types="./TakeLastConsumerMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { BackPressureConfig_capacity, DisposableLike_dispose, DisposableLike_isDisposed, DropOldestBackpressureStrategy, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import QueueMixin from "./QueueMixin.js";
const TakeLastConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableMixin, QueueMixin()), function TakeLastConsumerMixin(capacity) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, {
            backpressureStrategy: DropOldestBackpressureStrategy,
            capacity,
        });
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return !this[DisposableLike_isDisposed];
        },
        get [BackPressureConfig_capacity]() {
            return MAX_SAFE_INTEGER;
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [EventListenerLike_notify](item) {
            if (!this[DisposableLike_isDisposed]) {
                this[QueueLike_enqueue](item);
            }
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
    })));
})();
export default TakeLastConsumerMixin;
