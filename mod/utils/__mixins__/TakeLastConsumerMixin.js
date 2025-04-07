/// <reference types="./TakeLastConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_isDisposed, DropOldestBackpressureStrategy, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";
import QueueMixin from "./QueueMixin.js";
const TakeLastConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableMixin, QueueMixin(), DisposeOnCompleteSinkMixin()), function TakeLastConsumerMixin(capacity) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, {
            backpressureStrategy: DropOldestBackpressureStrategy,
            capacity,
        });
        init(DisposeOnCompleteSinkMixin(), this);
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return !this[DisposableLike_isDisposed];
        },
        [EventListenerLike_notify](item) {
            if (!this[DisposableLike_isDisposed]) {
                this[QueueableLike_enqueue](item);
            }
        },
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
    })));
})();
export default TakeLastConsumerMixin;
