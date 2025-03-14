/// <reference types="./Runnable.buffer.d.ts" />

import { Array_length, Array_push, MAX_SAFE_INTEGER, } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import { SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class BufferSink {
    sink;
    count;
    buffer = [];
    [SinkLike_isCompleted] = false;
    constructor(sink, count) {
        this.sink = sink;
        this.count = count;
    }
    [SinkLike_push](next) {
        const { buffer, count } = this;
        buffer[Array_push](next);
        if (buffer[Array_length] === count) {
            this.buffer = [];
            this.sink[SinkLike_push](buffer);
        }
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isCompleted]) {
            const { buffer } = this;
            this.buffer = [];
            if (buffer[Array_length] > 0) {
                this.sink[SinkLike_push](buffer);
            }
            this[SinkLike_isCompleted] = true;
            this.sink[SinkLike_complete]();
        }
    }
}
const Runnable_buffer = (options) => Runnable_lift((sink) => newInstance((BufferSink), sink, clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER)), true);
export default Runnable_buffer;
