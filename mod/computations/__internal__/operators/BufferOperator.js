/// <reference types="./BufferOperator.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
export const create = /*@__PURE__*/ (() => {
    const BufferOperator_buffer = Symbol("BufferOperator_buffer");
    const BufferOperator_count = Symbol("BufferOperator_count");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function BufferOperator(delegate, count) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[BufferOperator_count] = clampPositiveNonZeroInteger(count ?? MAX_SAFE_INTEGER);
        this[BufferOperator_buffer] = [];
        return this;
    }, props({
        [BufferOperator_buffer]: none,
        [BufferOperator_count]: MAX_SAFE_INTEGER,
    }), proto({
        [EventListenerLike_notify](next) {
            const buffer = this[BufferOperator_buffer];
            const count = this[BufferOperator_count];
            buffer[Array_push](next);
            const shouldEmit = buffer[Array_length] === count;
            if (shouldEmit) {
                this[BufferOperator_buffer] = [];
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](buffer);
            }
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            const buffer = this[BufferOperator_buffer];
            this[BufferOperator_buffer] = [];
            if (buffer[Array_length] > 0) {
                delegate[EventListenerLike_notify](buffer);
            }
            delegate[SinkLike_complete]();
        },
    }));
})();
