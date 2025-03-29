/// <reference types="./BufferSink.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const BufferSink_buffer = Symbol("BufferSink_buffer");
    const BufferSink_count = Symbol("BufferSink_count");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function BufferSink(delegate, options) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[BufferSink_count] = clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER);
        this[BufferSink_buffer] = [];
        return this;
    }, props({
        [BufferSink_buffer]: none,
        [BufferSink_count]: MAX_SAFE_INTEGER,
    }), proto({
        [EventListenerLike_notify](next) {
            const buffer = this[BufferSink_buffer];
            const count = this[BufferSink_count];
            buffer[Array_push](next);
            const shouldEmit = buffer[Array_length] === count;
            if (shouldEmit) {
                this[BufferSink_buffer] = [];
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](buffer);
            }
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            const buffer = this[BufferSink_buffer];
            this[BufferSink_buffer] = [];
            if (buffer[Array_length] > 0) {
                delegate[EventListenerLike_notify](buffer);
            }
            delegate[SinkLike_complete]();
        },
    }));
})();
