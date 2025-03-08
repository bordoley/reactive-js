/// <reference types="./AbstractSink.d.ts" />

import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
export const AbstractSink_delegate = Symbol("AbstractSink_delegate");
class AbstractSink {
    [SinkLike_isComplete] = false;
    [AbstractSink_delegate];
    constructor(sink) {
        this[AbstractSink_delegate] = sink;
    }
    [SinkLike_complete]() {
        if (!this[SinkLike_isComplete]) {
            this[SinkLike_isComplete] = true;
            this[AbstractSink_delegate][SinkLike_complete]();
        }
    }
}
export default AbstractSink;
