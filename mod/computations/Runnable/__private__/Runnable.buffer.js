/// <reference types="./Runnable.buffer.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class BufferSink extends AbstractDelegatingDisposableSink {
    sink;
    count;
    buffer = [];
    [SinkLike_isCompleted] = false;
    constructor(sink, count) {
        super(sink);
        this.sink = sink;
        this.count = count;
    }
    [EventListenerLike_notify](next) {
        const { buffer, count } = this;
        buffer[Array_push](next);
        if (buffer[Array_length] === count) {
            this.buffer = [];
            this.sink[EventListenerLike_notify](buffer);
        }
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isCompleted]) {
            const { buffer } = this;
            this.buffer = [];
            if (buffer[Array_length] > 0) {
                this.sink[EventListenerLike_notify](buffer);
            }
            this[SinkLike_isCompleted] = true;
            this.sink[SinkLike_complete]();
        }
    }
}
const Runnable_buffer = (options) => Runnable_lift((sink) => newInstance((BufferSink), sink, clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER)), true);
export default Runnable_buffer;
