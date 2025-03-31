/// <reference types="./ConsumerQueueMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DisposableMixin from "./DisposableMixin.js";
import QueueMixin from "./QueueMixin.js";
export const ConsumerQueueMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DisposableMixin, QueueMixin()), function ConsumerQueue(options) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, options);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return !this[DisposableLike_isDisposed];
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
