/// <reference types="./AbstractSink.d.ts" />

import { SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../../utils.js";
export const AbstractSink_delegate = Symbol("AbstractSink_delegate");
class AbstractSink {
    [SinkLike_isCompleted] = false;
    [AbstractSink_delegate];
    constructor(sink) {
        this[AbstractSink_delegate] = sink;
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isCompleted]) {
            this[SinkLike_isCompleted] = true;
            this[AbstractSink_delegate][SinkLike_complete]();
        }
    }
}
export default AbstractSink;
